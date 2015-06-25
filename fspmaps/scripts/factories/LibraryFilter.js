/**
 * Created by SpatialDev on 1/6/15.
 */
/**
 * Created by Daniel Baah <dbaah@spatialdev.com>
 *       on 1/6/15.
 */

module.exports = angular.module('SpatialViewer').factory('LibraryFilterFactory', function ($http) {

    var service = {};
    var Lib_Config =  {
        'District': {
            color: '#9b242d',
            infoLabel: 'District',
            providers: null,
            zIndex: 6
        },
        'Private Library': {
            color: '#3086ab',
            infoLabel: 'Private Library',
            providers: null,
            zIndex: 5
        },
        'Public Library': {
            color: '#977c00',
            infoLabel: 'Public Library',
            providers: null,
            zIndex: 7
        },
        'Village': {
            color: '#a4c78c',
            infoLabel: 'Village',
            providers: null,
            zIndex: 4
        }

    };
    var Library = [];
    var LibraryLandUse = [];
    service.LibraryTotal = 0;

    service.getLibraryCounts = function(){
        // Library
        $http.get('http://spatialserver.spatialdev.com/services/tables/library_2014/query?where=country%3D%27India%27&returnfields=type&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type&statsdef=count%3Atype').
            success(function (data) {
                for (var i = 0; i < data.features.length; i++) {
                    Library.push({
                        "type": data.features[i].properties.type,
                        "count": data.features[i].properties.count_type,
                        "land_use": data.features[i].properties.land_use,
                        "selected": false
                    });
                    service.LibraryTotal += parseInt(Library[i].count);
                }
                for(var i=0;i<Library.length;i++){
                    Library[i]["pct"]=((parseInt(Library[i].count)/service.LibraryTotal));
                };

                // Sort sector array by count
                Library.sort(function(a,b){
                    return b.count- a.count;
                });
            }).
            error(function (data) {
                alert(data);
            });
    };
    service.getLibraryUrbanRuralCounts = function(){
        $http.get('http://spatialserver.spatialdev.com/services/tables/library_2014/query?where=country%3D%27India%27&returnfields=type%2Cland_use&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type%2Cland_use&statsdef=count%3Atype').
            success(function (data) {
                for (var i = 0; i < data.features.length; i++) {
                    LibraryLandUse.push(
                        {
                            "type": data.features[i].properties.type,
                            "count": data.features[i].properties.count_type,
                            "land_use":data.features[i].properties.land_use,
                            "selected": false
                        }
                    );
                }

            }).
            error(function (data) {
                alert(data);
            });
    };

    service.getLibraryCounts();
    service.getLibraryUrbanRuralCounts();

    service.checkAll = function (sector, selection,selectall) {

        switch(selection) {
            case 'library':
                if (selectall) {
                    selectall = false;
                    service.selectall = false;
                    service.checkBool = "Check All";
                    console.log("factory check bool: " + service.checkBool);
                    console.log("factory selected all: " + selectall);
                    console.log("service selected all: " + service.selectall);
                } else {
                    selectall = true;
                    service.selectall = true;
                    service.checkBool = "Uncheck All";
                    console.log("factory check bool: " + service.checkBool);
                    console.log("factory selected all: " + selectall);
                    console.log("service selected all: " + service.selectall);
                }
                sector.forEach(function (names) {
                    names.selected = selectall;
                });
                break;
        }
    };
    service.clearAll = function (sector, selection,selectall) {
        if (!selectall) {
            selectall = false;
            service.selectall = false;
            service.checkBool = "Check All";
        }
        sector.forEach(function (names) {
            names.selected = selectall;
        });
    };

    service.Layer = {
        url: "http://spatialserver.spatialdev.com/services/postgis/library_2014/geom/vector-tiles/{z}/{x}/{y}.pbf?fields=type,id",
        debug: false,
        type: 'pbf',
        name: 'Library',
        clickableLayers: null,

        // we want confetti to be on top of other layers, such as the contextual layers
        zIndex: 1000,

        getIDForLayerFeature: function (feature) {
            return feature.properties.id;
        },

        /**
         * The filter function gets called when iterating though each vector tile feature (vtf). You have access
         * to every property associated with a given feature (the feature, and the layer). You can also filter
         * based of the context (each tile that the feature is drawn onto).
         *
         * Returning false skips over the feature and it is not drawn.
         *
         * @param feature
         * @returns {boolean}
         */
        filter: function (feature, context) {
            //return feature.properties.type != 'Mobile Money Agent';
            return true;
        },

        /**
         * When we want to link events between layers, like clicking on a label and a
         * corresponding polygon freature, this will return the corresponding mapping
         * between layers. This provides knowledge of which other feature a given feature
         * is linked to.
         *
         * @param layerName  the layer we want to know the linked layer from
         * @returns {string} returns corresponding linked layer
         */
        layerLink: function (layerName) {
            if (layerName.indexOf('_label') > -1) {
                return layerName.replace('_label', '');
            }
            return layerName + '_label';
        },

        /**
         * Specify which features should have a certain z index (integer).  Lower numbers will draw on 'the bottom'.
         *
         * @param feature - the PBFFeature that contains properties
         */
        layerOrdering: function (feature) {
            //This only needs to be done for each type, not necessarily for each feature. But we'll start here.
            if (feature && feature.properties) {
              feature.properties.zIndex = Lib_Config[feature.properties.type].zIndex || 5;
            }
        },

        style:function(feature) {
            var style = {};
            var selected = style.selected = {};
            var pointRadius = 1;

            function ScaleDependentPointRadius(zoom){
                //Set point radius based on zoom
                var pointRadius = 1;
                if(zoom >= 0 && zoom <= 7){
                    pointRadius = 1;
                }
                else if(zoom > 7 && zoom <= 10){
                    pointRadius = 3;
                }
                else if(zoom > 10){
                    pointRadius = 4;
                }

                return pointRadius;
            }

            var type = feature.type;
            switch (type) {
                case 1: //'Point'
                        // unselected
                    style.color = 'rgb(42, 133, 173)';
                    style.radius = ScaleDependentPointRadius;
                    // selected
                    selected.color = 'rgba(255,255,0,0.5)';
                    selected.radius = 5;
                    break;
                case 2: //'LineString'
                        // unselected
                    style.color = 'rgba(161,217,155,0.8)';
                    style.size = 3;
                    // selected
                    selected.color = 'rgba(255,25,0,0.5)';
                    selected.size = 3;
                    break;
                case 3: //'Polygon'
                        // unselected
                    style.color = 'rgba(149,139,255,0.4)';
                    style.outline = {
                        color: 'rgb(20,20,20)',
                        size: 2
                    };
                    // selected
                    selected.color = 'rgba(255,25,0,0.3)';
                    selected.outline = {
                        color: '#d9534f',
                        size: 3
                    };
            }

            return style;
        },

        onClick: function(evt) {
            //If nearby tool (or any tool) is active, then abort.
            //  if(_FSP.ToolMaster.activeTool.active == true) return;
            //
            //  var buffer = _FSP.ConfettiLoader.clickToBuffer(evt);
            //
            //  //If all are unchecked, then exit out of here
            //  if(Object.keys(_FSP.LibraryListBuilder.GetFilterObject()).length == 0) return;
            //
            //  //We have the buffer as geojson.  Send it to the point table to intersect
            //  var tablePostArgs = {
            //    returnfields: 'lat,lng,name,type,id,photos,business_hours,staff_count,internet,public_computer_count,computer_fee',
            //    format: 'geojson',
            //    where: _FSP.Utilities.buildPostGresQueryExpression('library', _FSP.LibraryListBuilder.LibrarySelections),
            //    returnGeometry: 'yes',
            //    intersects: buffer,
            //    limit: 200 //add a limit of 200 so we don't get carried away
            //  };
            //  var pointUrl = "http://spatialserver.spatialdev.com/services/tables/library_2014/query";
            //
            //  $.post(pointUrl, tablePostArgs).success(function (points, qstatus) {
            //    //GeoJSON result of points
            //    if (!points || points.error) {
            //      console.error('Unable to fetch feature: ' + points.error);
            //      return;
            //    }
            //
            //    //point is a featurecollection. open the panel and show some stuff.
            //    if (points && points.features && points.features.length > 0) {
            //      var html = _FSP.PopupBuilder.addResults(points.features, _FSP.Config.LIBRARY_LAYERS, 'library', function (currentPoint) {
            //        if (currentPoint) {
            //          //Highlight point.
            //          var layers = pbfSource.getLayers();
            //          if (layers) {
            //            var layer = layers[Object.keys(layers)[0]]; //Library layer
            //            if (layer) {
            //              //try to pluck vtf
            //              _FSP.MapBuilder.selectedConfetti = layer.features[currentPoint.properties.id];
            //              if (_FSP.MapBuilder.selectedConfetti) {
            //                //Set feature to be big and high z-index
            //                _FSP.MapBuilder.selectedConfetti.select();
            //                if (_FSP.MapBuilder.previouslySelectedConfetti) _FSP.MapBuilder.previouslySelectedConfetti.deselect();
            //                _FSP.MapBuilder.previouslySelectedConfetti = _FSP.MapBuilder.selectedConfetti;
            //              }
            //            }
            //          }
            //        }
            //      });
            //      if(html){
            //        openCICODetails(html);
            //      }
            //    }
            //  });
        }

    };
    service.Library_Config = Lib_Config;
    service.Library_Counts = Library;
    service.Library_LandUse_Counts = LibraryLandUse;

    return service;

});
