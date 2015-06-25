/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

module.exports = angular.module('SpatialViewer').controller('MapCtrl', function (LayerConfig, VectorProvider, IndiaFactory, SectorFactory,
                                                                                 KenyaFactory, CICOFilterFactory,
                                                                                 UgandaFactory, BangladeshFactory, TanzaniaFactory, NigeriaFactory,
                                                                                 $scope, $rootScope, $state, $stateParams,
                                                                                 $http) {
    var map = L.map('map', { maxZoom: 16});
    var lastLayersStr = '';
    var lastBasemapUrl = null;
    var layerDifference; //an object that stores whether or not new layers are added, or have been removed, and what their names are
    var basemapLayer = null;
    var layersStr = null;
    var overlays = [];
    var overlayNames = [];
    var overlays_dictionary = {};
    var theme = null;
    var filters = null;
    var MapBuilder = {};
    var allfeatures = [];
    $scope.allSectors = [];
    $scope.featureCollection = []; // cross sector features within selected buffer
    $scope.CICODetails = [];
    $scope.detailsIndex = 0;
    $scope.ALLpoints = [];
    /**
     * This is an object that is a hash of the LatLngs from clicks to the resulting buffer.
     * This is so that clickToBuffer does not have to do the expensive Turf operation repeatedly,
     * especially since several MVTSource layers will have the same event and independently be
     * processing this event.
     *
     * @type {{}}
     * @private
     */
    var latLngBufferHash = {};

    var LibraryDetails = {};
    var LibraryWhereClause = '';
    $scope.CICODetails = {};
    var CICOWhereClause = '';
    var AgWhereClause = '';
    var EducationWhereClause = '';
    var HealthWhereClause = '';
    var ProviderWhereClause = '';

    $scope.$on('EducationSelections', function (event, args) {

        // object keys are the CICO selection sub sector names
        var typeobj = {};
        var sector = '';
        var types = [];

        if (args) {
            for(var i=0;i<args.length;i++){
                typeobj[args[i].type] = {
                    type: args[i].type,
                    sector: args[i].sector
                };
                types.push(args[i].type);
                sector = args[i].sector;
            }

            EducationWhereClause = buildPostGresQueryExpression(types,null);

            var filter = function (feature, context) {
                if (feature && feature.properties) {
                    var featureProperty = feature.properties.type;
                    // check if selections are valid types
                    if (typeobj[featureProperty]) {
                        return true;  // show the feature
                    }
                    return false; //hide the feature
                } else {
                    console.error('We are trying to filter on a point with no feature or feature.properties.');
                }
                return false; // error state, there should be a feature with properties
            };

            var activeLayer = findLayer(sector);

            if (activeLayer) {
                activeLayer.setFilter(filter);
                activeLayer.redraw(true);
            }
        }

        console.log("MAP.JS Listener enabled" + args);
    });


    $scope.$on('AgSelections', function (event, args) {

        // object keys are the CICO selection sub sector names
        var typeobj = {};
        var sector = '';
        var types = [];

        if (args) {
            for(var i=0;i<args.length;i++){
                typeobj[args[i].type] = {
                    type: args[i].type,
                    sector: args[i].sector
                };
                types.push(args[i].type);
                sector = args[i].sector;
            }

            AgWhereClause = buildPostGresQueryExpression(types,null);

            var filter = function (feature, context) {
                if (feature && feature.properties) {
                    var featureProperty = feature.properties.type;
                    // check if selections are valid types
                    if (typeobj[featureProperty]) {
                        return true;  // show the feature
                    }
                    return false; //hide the feature
                } else {
                    console.error('We are trying to filter on a point with no feature or feature.properties.');
                }
                return false; // error state, there should be a feature with properties
            };

            var activeLayer = findLayer(sector);

            if (activeLayer) {
                activeLayer.setFilter(filter);
                activeLayer.redraw(true);
            }
        }

        console.log("MAP.JS Listener enabled" + args);
    });

    $scope.$on('CICOSelections', function (event, args) {

        // object keys are the CICO selection sub sector names
        var typeobj = {}; //  object of CICO selections and their providers
        var sector = '';
        var types = [];
        var providers = {};

        if (args) {
            for(var i=0;i<args.length;i++){
                // create object to compare feature filter properties with
                if (args[i].providers) {
                    typeobj[args[i].type] = {
                        type: args[i].type,
                        sector: args[i].sector,
                        providers: args[i].providers
                    };
                    types.push(args[i].type);
                    sector = args[i].sector;
                    providers[args[i].type] = {
                        providers: args[i].providers
                    }
                } else {
                    //these object does not have providers
                    typeobj[args[i].type] = {
                        type: args[i].type,
                        sector: args[i].sector
                    };
                    types.push(args[i].type);
                    sector = args[i].sector;
                }
            }

            // create where string that is part of the CICOWhere clause sub queries
            ProviderWhereClause = buildPostGresProviderExpression(providers);

            //create where clause for onclick events
            CICOWhereClause = buildPostGresQueryExpression(types, ProviderWhereClause);

            var pvdr_split = [];

            var filter = function (feature, context) {
                if (feature && feature.properties) {
                    var featureProperty = feature.properties.type;
                    // check if selections are valid types
                    if (typeobj[featureProperty]) {
                        // treat properties with providers different
                        if (typeobj[featureProperty].hasOwnProperty('providers') == true) {
                            var featureProvider = feature.properties.providers;

                            if(typeof featureProvider === 'undefined'){
                                console.log("investigate")
                            }

                            for (var i = 0; i < typeobj[featureProperty].providers.length; i++) {
                                //look for '|' in feature providers
                                if (featureProvider.indexOf("|") !== -1) {
                                    // split the properties and compare each value in array
                                    pvdr_split = featureProvider.split("|");
                                    for(var p=0;p<pvdr_split.length;p++){
                                        if (pvdr_split[p] === typeobj[featureProperty].providers[i]) return true;
                                    }
                                } else {
                                    //if no '|' compare the feature property to our typeobj
                                    if (featureProvider === typeobj[featureProperty].providers[i]) return true;
                                }
                            }
                        } else {
                            if (typeobj[featureProperty]) {
                                return true;
                            }
                        }
                    }
                    return false;

                } else {
                    console.error('We are trying to filter on a point with no feature or feature.properties.');
                }
                return false; // error state, there should be a feature with properties
            };

            // search for pbf later
            var activeLayer = findLayer(sector);

            console.log(activeLayer);

            if (activeLayer) {
                activeLayer.setFilter(filter); // set new filter
                activeLayer.redraw(true); // redraw the map
            }
        }

        console.log("MAP.JS Listener enabled" + args);
    });

    $scope.$on('HealthSelections', function (event, args) {

        // object keys are the CICO selection sub sector names
        var typeobj = {};
        var sector = '';
        var types = [];

        if (args) {
            args.forEach(function (val, idx) {
                typeobj[val.type] = {
                    type: val.type,
                    sector: val.sector
                };
                types.push(val.type);
                sector = val.sector;
            });

            HealthWhereClause = buildPostGresQueryExpression(types,null);

            var filter = function (feature, context) {
                if (feature && feature.properties) {
                    var featureProperty = feature.properties.type;
                    // check if selections are valid types
                    if (typeobj[featureProperty]) {
                        return true;  // show the feature
                    }
                    return false; //hide the feature
                } else {
                    console.error('We are trying to filter on a point with no feature or feature.properties.');
                }
                return false; // error state, there should be a feature with properties
            };


            var activeLayer = findLayer(sector);

            if (activeLayer) {
                activeLayer.setFilter(filter);
                activeLayer.redraw();
            }
        }

        console.log("MAP.JS Listener enabled" + args);
    });

    $scope.$on('LibrarySelections', function (event, args) {

        // object keys are the CICO selection sub sector names
        var typeobj = {};
        var sector = '';
        var types = [];

        if (args) {
            args.forEach(function (val, idx) {
                typeobj[val.type] = {
                    type: val.type,
                    sector: val.sector
                };
                types.push(val.type);
                sector = val.sector;
            });

            LibraryWhereClause = buildPostGresQueryExpression(types,null);

            var filter = function (feature, context) {
                if (feature && feature.properties) {
                    var featureProperty = feature.properties.type;
                    // check if selections are valid types
                    if (typeobj[featureProperty]) {
                        return true;  // show the feature
                    }
                    return false; //hide the feature
                } else {
                    console.error('We are trying to filter on a point with no feature or feature.properties.');
                }
                return false; // error state, there should be a feature with properties
            };

            var activeLayer = findLayer(sector);

            if (activeLayer) {
                activeLayer.setFilter(filter);
                activeLayer.redraw();
            }
        }

        console.log("MAP.JS Listener enabled" + args);
    });

    $scope.setCountry = function(country){
        if( $scope.CountryList.countryNames.indexOf(country) !== -1){
            SectorFactory.setCountry(country);
            $scope.selection = country;
            $stateParams.country = country;
            $scope.closeParam('details-panel');
            $state.go($state.current.name, $stateParams); // update app state with new param
        }
    };

    $scope.params = $stateParams;
    $scope.blur = '';

    var PixelsToMetersByZoom = [
        156412,
        78206,
        39103,
        19551,
        9776,
        4888,
        2444,
        1222,
        610.984,
        305.492,
        152.746,
        76.373,
        38.187,
        19.093,
        9.547,
        4.773,
        2.387,
        1.193,
        .596,
        .298
    ];

    // Country Select
    // All variables will be inherited by other controllers

    $scope.CountryList = SectorFactory.CountryList;

    $scope.selection = $scope.CountryList.default.country;
    SectorFactory.selectedCountry = $scope.selection;

    $scope.$on('country-update',function(){
        //if($scope.CountryList.countryNames.indexOf($stateParams.country.capitalize()) !== -1) {
        //
        //    $scope.selection = $stateParams.country.capitalize();
        //    SectorFactory.setCountry($stateParams.country.capitalize());
        //
        //    $scope.zoomToCountry($scope.selection); // switch mapview to country coordinates
        //
        //    CICOWhereClause = ''; //reset query
        //
        //    //remove all layers but basemap
        //    var temparr = $stateParams.layers.split(",");
        //
        //    if(temparr.length>1) {
        //        if ($scope.selection !== 'India') {
        //            if (temparr[1].indexOf($scope.CountryList[$scope.selection].layer) == -1) {
        //                $stateParams.layers = temparr[0];
        //            }
        //
        //        } else {
        //            temparr.forEach(function (val, idx) {
        //                if (idx !== 0 && $scope.CountryList[$scope.selection].layer.indexOf(val) == -1) {
        //                    temparr.splice(temparr.indexOf(val), 1);
        //                    $stateParams.layers = temparr.join(",");
        //                }
        //            })
        //        }
        //    }
        //    $state.go($state.current.name, $stateParams); // update app state with new param
        //}

    });

    $scope.zoomToCountry = function (selected) {
        if (selected !== null) {
            $stateParams.lat = eval(selected + "Factory")[selected].MapCenter.Latitude;
            $stateParams.lng = eval(selected + "Factory")[selected].MapCenter.Longitude;
            $stateParams.zoom = eval(selected + "Factory")[selected].MapZoom;
        }
    };

    $scope.$on('all-sectors',function(){
        $scope.allSectors = SectorFactory.allSectors;
    });

    $scope.$watch(function () {
        return SectorFactory.selectedCountry;
    }, function () {
        $scope.selection= SectorFactory.selectedCountry;

        switch ($scope.selection) {
            case 'India':
                $scope.SectorTypes = {
                    typeNames: ['Financial Service', 'Library', 'Agriculture', 'Health']
                };
                break;
            case 'Kenya':
            case 'Uganda':
                $scope.SectorTypes = {
                    typeNames: ['Financial Service', 'Education', 'Agriculture']
                };
                break;
            default:
                $scope.SectorTypes = {
                    typeNames: ['Financial Service', 'Library', 'Agriculture', 'Health']
                };
        }
    });

    // watch for counter, when increased run http.get again and update variable
    $scope.toggleState = function (stateName) {
        var state = $state.current.name !== stateName ? stateName : 'main';
        $state.go(state, $stateParams);
    };

    $scope.$watch('selection',function(){
       $stateParams.country = $scope.selection;
    });

    function redraw() {
        var lat = parseFloat($stateParams.lat) || 0;
        var lng = parseFloat($stateParams.lng) || 0;
        var zoom = parseFloat($stateParams.zoom) || 8;
        layersStr = $stateParams.layers || LayerConfig.osm.url;
        var layers = layersStr.split(',');

        // first layer should always be treated as the basemap
        var basemap = LayerConfig.find(layers[0]) || LayerConfig.osm.url;
        if (typeof basemap === 'string') {
            var basemapUrl = basemap;
        } else {
            var basemapUrl = basemap.url;
        }
        overlayNames = layers.slice(1);

        if (lastBasemapUrl !== basemapUrl && typeof map === 'object') {
            if (basemapLayer) {
                map.removeLayer(basemapLayer);
            }
            basemapLayer = L.tileLayer(basemapUrl).addTo(map);

            basemapLayer.on('load', function () {
                //Move to back
                basemapLayer.bringToBack();
            });
        }

        if (lastLayersStr !== layersStr) {
            //See if new layers are added or if layers need to be removed.
            var lastLayersArray = lastLayersStr.split(',');
            var currentLayersArray = layersStr.split(',');

            if(lastLayersArray.length > currentLayersArray.length){
                //One or more layers has been removed.
                layerDifference = { type: 'removed', list: $(lastLayersArray).not(currentLayersArray).get()};
            }
            else{
                //One or more layers has been added
                layerDifference = { type: 'added', list: $(currentLayersArray).not(lastLayersArray).get()};

            }
        }

        drawOverlays(layerDifference);

        var c = $scope.center = {
            lat: lat,
            lng: lng,
            zoom: zoom
        };

        if (typeof map === 'object' && (c.lat != 0 && c.lng != 0)) {
            map.setView([c.lat, c.lng], zoom);
        }

        lastLayersStr = layersStr;
        lastBasemapUrl = basemapUrl;
    }


    /***
     * Broadcast Listeners.
     */

    $scope.$on('route-update', function () {

        if ($scope.blur === 'blur' && $state.current.name !== 'landing') {
            $scope.blur = '';
        }
        var c;
        if (!$scope.center) {
            var lat = parseFloat($stateParams.lat) || 0;
            var lng = parseFloat($stateParams.lng) || 0;
            var zoom = parseFloat($stateParams.zoom) || 8;

            c = $scope.center = {
                lat: lat,
                lng: lng,
                zoom: zoom
            };
        }
        else {
            c = $scope.center;
        }
        var lat = c.lat.toFixed(6);
        var lng = c.lng.toFixed(6);
        var zoom = c.zoom.toString();
        if (mapMoveEnd) {
            mapMoveEnd = false;
        } else if ($stateParams.lat !== lat
            || $stateParams.lng !== lng
            || $stateParams.zoom !== zoom
            || $stateParams.layers !== layersStr
            || $stateParams.theme !== theme
            || $stateParams.filters !== filters) {

            console.log('map.js route-update Updating Map...');
            redraw();
        }

    });

    $scope.$on('blur', function () {
        $scope.blur = 'blur';
    });

    //this takes in a WKT GeoJSON Extent geometry
    $scope.zoomToExtent = function (extent) {
        delete $stateParams['zoom-extent'];
        map.fitBounds([
            [extent[0][1], extent[0][0]],
            [extent[2][1], extent[2][0]]
        ]);
    };

    //This take a leaflet bounds object and handles it.
    delete $stateParams['zoom-extent'];
    $scope.zoomToBounds = function (bounds) {
        map.fitBounds(bounds);
    };


    window.map = map;
    map.on('moveend', function () { // move is good too
        var c = map.getCenter();
        var lat = c.lat.toFixed(6);
        var lng = c.lng.toFixed(6);
        var zoom = map.getZoom().toString();

        if ($stateParams.lat !== lat
            || $stateParams.lng !== lng
            || $stateParams.zoom !== zoom) {

            $stateParams.lat = lat;
            $stateParams.lng = lng;
            $stateParams.zoom = zoom;
            mapMoveEnd = true;
            $state.go($state.current.name, $stateParams);
        }
    });

    map.on('click', function (e) { // handle map click events

    });

    //Connect the layout onresize end event
    try {
        window.layout.panes.center.bind("layoutpaneonresize_end", function () {
            map.invalidateSize();
        });
    } catch (e) {
        //Nothing
    }


    function drawOverlays(differenceObject) {
        for (var i = 0, len = overlayNames.length; i < len; ++i) {
            var overlayName = overlayNames[i];
            var currOverlay = overlays[i];

            if (currOverlay && currOverlay.overlayName === overlayName) {
                continue; // layer is already there, continue on!
            }

            // remove the current layer that is not what should be that layer in the list
            else if (currOverlay && currOverlay._map) {
                if (currOverlay.destroyResource) currOverlay.destroyResource();
                map.removeLayer(currOverlay);
            }

            if (typeof LayerConfig[overlayName] === 'object'
              && LayerConfig[overlayName].type.toLowerCase() === 'pbf') {

                var cfg = LayerConfig[overlayName];
                var layer = new L.TileLayer.MVTSource(cfg);
                layer.addTo(map);

                map.on('click', function (evt) {
                    //Take the click event and pass it to the group layers.
                    //layer.onClick(e, function (evt) {
                    //    if (evt && evt.feature) {
                    //        console.log(['Clicked PBF Feature', evt.feature.properties]);
                    //    }
                    //});
                });

                map.on('layerremove', function (removed) {
                    //This is the layer that was removed.
                    //If it is a TileLayer.MVTSource, then call a method to actually remove the children, too.
                    if (removed.layer.removeChildLayers) {
                        removed.layer.removeChildLayers(map);
                    }
                });

            }

            // try for WMS (not a vector layer)
            // if things get more fancy with wms, it should get its own factory
            else if (typeof LayerConfig[overlayName] === 'object'
              && LayerConfig[overlayName].type.toLowerCase() === 'wms') {

                var cfg = LayerConfig[overlayName];
                var layer = L.tileLayer.wms(cfg.url, {
                    format: cfg.format || 'image/png',
                    transparent: cfg.transparent || true,
                    layers: cfg.layers
                });
                layer.addTo(map);
            }

            /**
             * Tiles that are an overlay. OSM / Google / Mapnik tend to make tiles in this format.
             */
            else if (typeof LayerConfig[overlayName] === 'object'
              && LayerConfig[overlayName].type.toLowerCase() === 'xyz') {

                var cfg = LayerConfig[overlayName];
                var layer = L.tileLayer(cfg.url, {
                    opacity: cfg.opacity || 0.5
                });
                layer.addTo(map);
            }

            /**
             * TMS flips the y. GeoServer often serves this.
             */
            else if (typeof LayerConfig[overlayName] === 'object'
              && LayerConfig[overlayName].type.toLowerCase() === 'tms') {
                var cfg = LayerConfig[overlayName];
                var layer = L.tileLayer(cfg.url, {
                    opacity: cfg.opacity || 0.5,
                    tms: true
                });
                layer.addTo(map);
            }

            // if its not wms, its a vector layer
            else {
                var vecRes = VectorProvider.createResource(overlayName);
                if (vecRes) {
                    var layer = vecRes.getLayer();
                    layer.addTo(map);
                }
                else {
                    //Not a valid layer.
                    console.log(overlayName + " is not a layer specified in layerConfig.js");
                    continue;
                }
            }

            if(layer) {
                layer.overlayName = overlayName;
                //layer.addTo(map);
                overlays[i] = layer;
                overlays_dictionary[overlayName] = layer; //keep a dictionary reference for faster fetching in UpdateECOSData

            }
        }

        if (differenceObject && differenceObject.type == 'removed') {
            // there are more overlays left in the list, less layers specified in route
            // we need to remove those too.
            var i = 0;
            for (var len2 = overlays.length; i < len2; ++i) {
                //If the overlay name exists in the list of layers to be removed, then remove it.
                if (overlays[i] && overlays[i].overlayName && differenceObject.list.indexOf(overlays[i].overlayName) > -1) {
                    if(overlays[i].destroyResource) overlays[i].destroyResource();
                    map.removeLayer(overlays[i]);
                    delete overlays_dictionary[overlays[i].overlayName]; //delete dictionary reference for faster fetching in UpdateECOSData
                    delete overlays[i];
                }
            }
        }
    }

    function findLayer(layer) {
        for (var i = 0; i < overlays.length; i++) {
            if (layer == overlays[i].overlayName) {
                return overlays[i];
            }
        }
    }

    var clickToBuffer = function (e) {
        // handle map click events
        //Depending on what mode we're in and what we're showing...
        //This is a test hard-coded for confetti mode.
        var latlng = e.latlng;
        var lat = e.latlng.lat;
        var lng = e.latlng.lng;
        var latLngStr = lat + ',' + lng;

        var buffer = latLngBufferHash[latLngStr];
        if (buffer) {
            return buffer;
        }

        var meters_per_pixel = PixelsToMetersByZoom[$stateParams.zoom];
        var tolerance_pixels = 8;  //The number of pixels around the click point to search in
        var tolerance_kilometers = (tolerance_pixels * meters_per_pixel) / 1000;

        //Convert pixel click buffer to meters.
        var bufferObj = turf.buffer(turf.point(lng, lat), tolerance_kilometers, 'kilometers');
        buffer = JSON.stringify(bufferObj);

        latLngBufferHash[latLngStr] = buffer;

        return buffer;
    };

    function buildPostGresQueryExpression(typearray, providers) {
        var typestring = '';
        var finalstring = '';

        if (typearray.length > 0) {
            if (typearray.length >= 1) {
                typearray.forEach(function (val) {
                    // handle providers
                    if (providers !== null && Object.keys(providers).length > 0) {
                        Object.keys(providers).forEach(function (p) {
                            // if cico selections has a type that has providers
                            if (p == val) {
                                typestring += " (type='" + val + "' AND (" + providers[p].providers + ")) OR";
                            } else {
                                // cico selection type that does not have provider
                                if (typestring.search(val) == -1) { // only append to string if type does not exist
                                    typestring += " (type='" + val + "') OR";
                                }
                            }
                        })
                    } else {
                        // all types with providers are unchecked
                        typestring += " (type='" + val + "') OR";
                    }
                });

                if ($scope.selection == 'Uganda' || $scope.selection == 'Kenya' || $scope.selection == 'Nigeria' || $scope.selection == 'India') {
                    //remove trailing 'OR'
                    finalstring = typestring.substring(0, typestring.length - 3);
                    return finalstring + "AND Country ='" +$scope.selection+ "'";
                }

                //return "type IN(" + finalstring + ")";

            } else {
                typearray.forEach(function (val) {
                    typestring += "'" + val + "'";
                });

                if($scope.selection == 'India'){
                    return "type IN(" + typestring + ") AND country = '" + $scope.selection +"'";
                } else {
                    return "type IN(" + finalstring + ") AND Country ='" + $scope.selection + "'";
                }
            }
        } else {
            return "";

        }
    }

    function buildPostGresProviderExpression(obj) {
        var fobj = {};

        var prvd = ($scope.selection == 'Uganda') ? 'prvd' : 'providers';

            if (Object.keys(obj)) { // if obj is valid
            Object.keys(obj).forEach(function (key) {
                if(obj[key].providers.length > 0){
                    fobj[key] = {providers: ''};
                    obj[key].providers.forEach(function (val, i) {
                        // for each filter, create string that combines all providers
                        fobj[key].providers += prvd + " like '%" + val + "%' or ";
                    });
                    // remove the last 'or ' from string
                    fobj[key].providers = fobj[key].providers.substring(0, fobj[key].providers.length - 3);
                }
            })
        }
        return fobj;
    }

    map.on('click', function (evt) {
        $scope.ALLpoints = [];
        //createOnClickEvent(evt, $scope.allSectors);
        console.log("Map Clicked");
    });


    $rootScope.$watch(function () {
        return LibraryDetails;
    }, function () {
        $rootScope.$broadcast('LibraryDetails', LibraryDetails);
    });

    $scope.$watch('CICODetails', function () {
        $rootScope.$broadcast('CICODetails', $scope.CICODetails);
    });

    function highlightPointSelection(index, points, sector) {

        if (points.length > 0) {

            if ($scope.ALLpoints.length < 2) { // check if more then one sector is selected
                index = $scope.detailsIndex;
                var currentPoint = points[0][index];

                if (currentPoint) {
                    var layerindex = overlayNames.indexOf(sector);
                    var currOverlay = overlays[layerindex];

                    var layers = currOverlay.getLayers();
                    if (layers) {
                        var layer = layers[Object.keys(layers)[0]];
                        if (layer) {
                            var id = "id";
                            if(sector == "cicos_uganda"){
                                id = "submission_id"
                            }
                            MapBuilder.selectedConfetti = layer.features[currentPoint.properties[id]];
                            if (MapBuilder.selectedConfetti) {
                                MapBuilder.selectedConfetti.select();
                                if (MapBuilder.previouslySelectedConfetti) MapBuilder.previouslySelectedConfetti.deselect();
                                MapBuilder.previouslySelectedConfetti = MapBuilder.selectedConfetti;
                            }
                        }
                    }
                }
            } else {
                // handles multiple sectors
                index = $scope.detailsIndex;

                var allpoints = [];

                //combine feature points from all sectors into one array 'allpoints'
                points.forEach(function (val) {
                    val.forEach(function (v) {
                        allpoints.push(v);
                    });
                });

                var currentPoint = allpoints[index];

                if (currentPoint) {
                    var layerindex = (currentPoint.properties.sector == "fsp") ? overlayNames.indexOf(sector) : overlayNames.indexOf(currentPoint.properties.sector);
                    var currOverlay = overlays[layerindex];

                    var layers = currOverlay.getLayers();
                    if (layers) {
                        var layer = layers[Object.keys(layers)[0]];
                        if (layer) {
                            var id = "id";
                            if(sector == "cicos_uganda"){
                                id = "submission_id"
                            }
                            MapBuilder.selectedConfetti = layer.features[currentPoint.properties.id];
                            if (MapBuilder.selectedConfetti) {
                                MapBuilder.selectedConfetti.select();
                                if (MapBuilder.previouslySelectedConfetti && (MapBuilder.selectedConfetti.id !== MapBuilder.previouslySelectedConfetti.id)) MapBuilder.previouslySelectedConfetti.deselect();
                                MapBuilder.previouslySelectedConfetti = MapBuilder.selectedConfetti;
                            }
                        }
                    }
                }


            }
        }
    }

    function createOnClickEvent(evt, sector) {

        var buffer = clickToBuffer(evt);

        //L.geoJson(JSON.parse(buffer)).addTo(map);

        sector.forEach(function (val) {
            $scope.featureCollection = [];
            $scope.ALLdetails = [];
            switch (val.capitalize()) {
                case 'Health':
                    var tablePostArgs = {
                        returnfields: 'lat,lng,id,type,name,photos,delivery_center,separate_maternity,sba_resource,female_sterilization,intra_uterine,condoms,oral_pills,pharmacist,csection_emonc,phc_24_7,blood_transfusion,immunization,cold_chain_equipment',
                        format: 'geojson',
                        returnGeometry: 'yes',
                        intersects: buffer,
                        limit: 200 //add a limit of 200 so we don't get carried away
                    };

                    if (HealthWhereClause != '') {
                        tablePostArgs.where = HealthWhereClause;
                    }

                    var pointUrl = "http://spatialserver.spatialdev.com/services/tables/health_2014/query";

                    $http.post(pointUrl, tablePostArgs).success(function (points, qstatus) {
                        //GeoJSON result of points
                        if (!points || points.error) {
                            console.error('Unable to fetch feature: ' + points.error);
                            return;
                        }

                        //point is a featurecollection. open the panel and show some stuff.
                        if (points && points.features && points.features.length > 0) {
                            if ($scope.featureCollection.length < sector.length) {
                                // add sector and url for photos
                                points.features.forEach(function (val) {
                                    val.properties["sector"] = 'health';
                                    val.properties["url"] = "http://spatialserver.spatialdev.com/fsp-ebs/2014/" + $scope.selection.toLowerCase() + "/" + val.properties.sector + "/";
                                });
                                $scope.ALLpoints.push(points);
                                $scope.featureCollection.push(points.features);
                                $rootScope.$broadcast('details', $scope.featureCollection);
                            }

                            if ($scope.detailsIndex == 0) highlightPointSelection($scope.detailsIndex, $scope.featureCollection, "health");

                        }
                    });

                    break;
                case 'Agriculture':
                    var tablePostArgs = {
                        returnfields: 'lat,lng,id,type,name,photos,irrigation_pumps,farm_tractors,seed,fertilizer,chemical_inputs,organic_fertilizers,vet_supplies,tools_equipment,seed_muliplier,storage_capacity,urban_center_dist,seed_muliplier,vacination,inseminaiton,breeding,modernized',
                        format: 'geojson',
                        returnGeometry: 'yes',
                        intersects: buffer,
                        limit: 200 //add a limit of 200 so we don't get carried away
                    };

                    if (AgWhereClause != '') {
                        tablePostArgs.where = AgWhereClause;
                    }

                    var pointUrl = "http://spatialserver.spatialdev.com/services/tables/agriculture_2014/query";

                    $http.post(pointUrl, tablePostArgs).success(function (points, qstatus) {
                        //GeoJSON result of points
                        if (!points || points.error) {
                            console.error('Unable to fetch feature: ' + points.error);
                            return;
                        }

                        //point is a featurecollection. open the panel and show some stuff.
                        if (points && points.features && points.features.length > 0) {
                            if ($scope.featureCollection.length < sector.length) {
                                // add sector and url for photos
                                points.features.forEach(function (val) {
                                    val.properties["sector"] = 'agriculture';
                                    val.properties["url"] = "http://spatialserver.spatialdev.com/fsp-ebs/2014/" + $scope.selection.toLowerCase() + "/" + val.properties.sector + "/";
                                });
                                $scope.ALLpoints.push(points);
                                $scope.featureCollection.push(points.features);
                                $rootScope.$broadcast('details', $scope.featureCollection);
                            }

                            if ($scope.detailsIndex == 0) highlightPointSelection($scope.detailsIndex, $scope.featureCollection, "agriculture");

                        }
                    });

                    break;
                case 'Library':
                    var tablePostArgs = {
                        returnfields: 'lat,lng,name,type,id,photos,business_hours,staff_count,internet,public_computer_count,computer_fee',
                        format: 'geojson',
                        returnGeometry: 'yes',
                        intersects: buffer,
                        limit: 200 //add a limit of 200 so we don't get carried away
                    };

                    if (LibraryWhereClause != '') {
                        tablePostArgs.where = LibraryWhereClause
                    }

                    var pointUrl = "http://spatialserver.spatialdev.com/services/tables/library_2014/query";
                    $http.post(pointUrl, tablePostArgs).success(function (points, qstatus) {
                        //GeoJSON result of points
                        if (!points || points.error) {
                            console.error('Unable to fetch feature: ' + points.error);
                            return;
                        }

                        //point is a featurecollection. open the panel and show some stuff.
                        if (points && points.features && points.features.length > 0) {
                            if ($scope.featureCollection.length < sector.length) {
                                // add sector and url for photos
                                points.features.forEach(function (val) {
                                    val.properties["sector"] = 'library';
                                    val.properties["url"] = "http://spatialserver.spatialdev.com/fsp-ebs/2014/" + $scope.selection.toLowerCase() + "/" + val.properties.sector + "/";
                                });
                                $scope.ALLpoints.push(points);
                                $scope.featureCollection.push(points.features);
                                $rootScope.$broadcast('details', $scope.featureCollection);
                            }

                            if ($scope.detailsIndex == 0) highlightPointSelection($scope.detailsIndex, $scope.featureCollection, "library");
                        }
                    });
                    break;

                case 'CICOS':
                case 'Cicos_kenya':
                case 'Cicos_nigeria':
                case 'Cicos_uganda':
                    if ($scope.selection == 'India') {
                        var tablePostArgs = {
                            returnfields: 'lat,lng,name,assoc_bank,assoc_business,form_submitted,type,id,photos',
                            format: 'geojson',
                            returnGeometry: 'yes',
                            intersects: buffer,
                            limit: 200 //add a limit of 200 so we don't get carried away
                        };
                        var pointUrl = "http://spatialserver.spatialdev.com/services/tables/cicos_2014/query";
                        var photoRoot = "http://spatialserver.spatialdev.com/fsp-ebs/2014/" + $scope.selection.toLowerCase() + "/fsp/";
                        if (CICOWhereClause != '') {
                            tablePostArgs.where = CICOWhereClause
                        }

                        $http.post(pointUrl, tablePostArgs).success(function (points, qstatus) {
                            //GeoJSON result of points
                            if (!points || points.error) {
                                console.error('Unable to fetch feature: ' + points.error);
                                return;
                            }

                            //point is a featurecollection. open the panel and show some stuff.
                            if (points && points.features && points.features.length > 0) {
                                if ($scope.featureCollection.length < sector.length) {
                                    // add sector and url for photos
                                    points.features.forEach(function (val) {
                                        val.properties["sector"] = 'CICOS';
                                        val.properties["url"] = photoRoot;
                                    });
                                    $scope.ALLpoints.push(points);
                                    $scope.featureCollection.push(points.features);
                                    $rootScope.$broadcast('details', $scope.featureCollection);
                                }

                                if ($scope.detailsIndex == 0) highlightPointSelection($scope.detailsIndex, $scope.featureCollection, "CICOS");

                            }
                        });
                    }
                    if ($scope.selection == 'Nigeria') {
                        var tablePostArgs = {
                            returnfields: 'shared_agent,bank_operational,id,country,type,providers,photos,land_use,submit_date,bank_registered',
                            format: 'geojson',
                            returnGeometry: 'yes',
                            intersects: buffer,
                            limit: 200 //add a limit of 200 so we don't get carried away
                        };

                        var pointUrl = "http://spatialserver.spatialdev.com/services/tables/cicos_2013//query";
                        var photoRoot = "http://www.fspmaps.com/php/fetchPhoto.php?name=Nigeria/";

                        if (CICOWhereClause != '') {
                            tablePostArgs.where = CICOWhereClause;
                        }

                        $http.post(pointUrl, tablePostArgs).success(function (points, qstatus) {
                            //GeoJSON result of points
                            if (!points || points.error) {
                                console.error('Unable to fetch feature: ' + points.error);
                                return;
                            }

                            //point is a featurecollection. open the panel and show some stuff.
                            if (points && points.features && points.features.length > 0) {
                                if ($scope.featureCollection.length < sector.length) {
                                    // add sector and url for photos
                                    points.features.forEach(function (val) {
                                        val.properties["sector"] = 'cicos_nigeria';
                                        val.properties["url"] = photoRoot;
                                    });
                                    $scope.ALLpoints.push(points);
                                    $scope.featureCollection.push(points.features);
                                    $rootScope.$broadcast('details', $scope.featureCollection);
                                }

                                if ($scope.detailsIndex == 0) highlightPointSelection($scope.detailsIndex, $scope.featureCollection, "cicos_nigeria");

                            }
                        });
                    }
                    if ($scope.selection == 'Kenya') {
                        var tablePostArgs = {
                            returnfields: 'shared_agent,bank_operational,id,country,type,providers,photos,land_use,submit_date,bank_registered',
                            format: 'geojson',
                            returnGeometry: 'yes',
                            intersects: buffer,
                            limit: 200 //add a limit of 200 so we don't get carried away
                        };

                        var pointUrl = "http://spatialserver.spatialdev.com/services/tables/cicos_2013//query";
                        var photoRoot = "http://www.fspmaps.com/php/fetchPhoto.php?name=Kenya/";

                        if (CICOWhereClause != '') {
                            tablePostArgs.where = CICOWhereClause;
                        }

                        $http.post(pointUrl, tablePostArgs).success(function (points, qstatus) {
                            //GeoJSON result of points
                            if (!points || points.error) {
                                console.error('Unable to fetch feature: ' + points.error);
                                return;
                            }

                            //point is a featurecollection. open the panel and show some stuff.
                            if (points && points.features && points.features.length > 0) {
                                if ($scope.featureCollection.length < sector.length) {
                                    // add sector and url for photos
                                    points.features.forEach(function (val) {
                                        val.properties["sector"] = 'cicos_kenya';
                                        val.properties["url"] = photoRoot;
                                    });
                                    $scope.ALLpoints.push(points);
                                    $scope.featureCollection.push(points.features);
                                    $rootScope.$broadcast('details', $scope.featureCollection);
                                }

                                if ($scope.detailsIndex == 0) highlightPointSelection($scope.detailsIndex, $scope.featureCollection, "cicos_kenya");

                            }
                        });
                    }
                    if ($scope.selection == 'Uganda'){
                        var tablePostArgs = {
                            returnfields: 'type,status,submission_id,prvd,country',
                            format: 'geojson',
                            returnGeometry: 'yes',
                            intersects: buffer,
                            limit: 200 //add a limit of 200 so we don't get carried away
                        };

                        var pointUrl = "http://spatialserver.spatialdev.com/services/tables/cicos_2015/query";

                        if (CICOWhereClause != '') {
                            tablePostArgs.where = CICOWhereClause;
                        }

                        $http.post(pointUrl, tablePostArgs).success(function (points, qstatus) {
                            //GeoJSON result of points
                            if (!points || points.error) {
                                console.error('Unable to fetch feature: ' + points.error);
                                return;
                            }

                            //point is a featurecollection. open the panel and show some stuff.
                            if (points && points.features && points.features.length > 0) {
                                if ($scope.featureCollection.length < sector.length) {
                                    // add sector and url for photos
                                    points.features.forEach(function (val) {
                                        val.properties["sector"] = 'cicos_uganda';
                                    });
                                    $scope.ALLpoints.push(points);
                                    $scope.featureCollection.push(points.features);
                                    $rootScope.$broadcast('details', $scope.featureCollection);
                                }
                                if ($scope.detailsIndex == 0) highlightPointSelection($scope.detailsIndex, $scope.featureCollection, "cicos_uganda");

                            }
                        });
                    }
            }
        })
    }

    // watch for when user details panel index changes
    $scope.$on('activeidx', function (event, args) {
        // activeidx changes multiples times in details.js, so only run when details index != activeidx
        if ($scope.detailsIndex != args && args !== 0) {
            $scope.detailsIndex = args.properties.index;
            highlightPointSelection($scope.detailsIndex, $scope.featureCollection, args.properties.sector);
        }
    })

});