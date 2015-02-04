/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

module.exports = angular.module('SpatialViewer').controller('MapCtrl', function (LayerConfig, VectorProvider, IndiaFactory, SectorFactory,
                                                                                 KenyaFactory,CICOFilterFactory,
                                                                                 UgandaFactory, BangladeshFactory, TanzaniaFactory, NigeriaFactory,
                                                                                 $scope, $rootScope, $state, $stateParams,
                                                                                 $http) {
  var map = L.map('map');
  var lastLayersStr = '';
  var lastBasemapUrl = null;
  var basemapLayer = null;
  var layersStr = null;
  var overlays = [];
  var overlayNames = [];
  var theme = null;
  var filters = null;

  $scope.params = $stateParams;
  $scope.blur = '';

  // Country Select
  // All variables will be inherited by other controllers

  $scope.SelectCountry = {
    default:'India',
    countryNames: ['Bangladesh','Uganda','Kenya','Nigeria','Tanzania','India','India-Bihar','India - ' + 'Uttar Pradeh']
  };

  $scope.selection = 'Select A Region';
  SectorFactory.selectedCountry = $scope.selection;

  //Users Selected Country
  $scope.setCountry = function(selected){
    $scope.selection = selected;
    SectorFactory.setCountry(selected);
    SectorFactory.selectedCountry = $scope.selection;

  };

  $scope.zoomToCountry = function () {
    map.setView([IndiaFactory.India.MapCenter.Latitude,
          IndiaFactory.India.MapCenter.Longitude],
        IndiaFactory.India.MapZoom);
  };

  $scope.switchCountry = function (selected) {
    var cname = selected;
    console.log(cname);

    if(cname !== null) {
      map.setView([eval(cname + "Factory")[cname].MapCenter.Latitude,
            eval(cname + "Factory")[cname].MapCenter.Longitude],
          eval(cname + "Factory")[cname].MapZoom);
    }
  };

  // watch for counter, when increased run http.get again and update variable
  $scope.$watch(function(){
    return SectorFactory.selectedCountry;
  }, function(){
    SectorFactory.selectedCountry = $scope.selection;
    console.log(" ------ Current Country has changed --------");
  });

  $scope.toggleState = function (stateName) {
    var state = $state.current.name !== stateName ? stateName : 'main';
    $state.go(state, $stateParams);
  };

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
      basemapLayer = L.tileLayer(basemapUrl);
      basemapLayer.addTo(map);
    }

    if (lastLayersStr !== layersStr) {
      drawOverlays();
    }

    if (theme != $stateParams.theme || filters != $stateParams.filters) { // null and undefined should be ==
      theme = $stateParams.theme;
      filters = $stateParams.filters;
    }

    var c = $scope.center = {
      lat: lat,
      lng: lng,
      zoom: zoom
    };

    if (typeof map === 'object' && (c.lat != 0 && c.lng !=0)) {
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
    if(!$scope.center){
      var lat = parseFloat($stateParams.lat)   || 0;
      var lng = parseFloat($stateParams.lng)   || 0;
      var zoom = parseFloat($stateParams.zoom) || 8;

      c = $scope.center = {
        lat: lat,
        lng: lng,
        zoom: zoom
      };
    }
    else{
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

      console.log('map: lat,lng,zoom !== $stateParams');
      $stateParams.lat = lat;
      $stateParams.lng = lng;
      $stateParams.zoom = zoom;
      mapMoveEnd = true;
      $state.go($state.current.name, $stateParams);
    }
  });

  map.on('click', function (e) { // handle map click events
    //Depending on what mode we're in and what we're showing...
    //This is a test hard-coded for confetti mode.
    var latlng = e.latlng;
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;

    var wkt = "POINT(" + lng + " " + lat + ")";
    var postArgs = { format: 'geojson', input_geometry: wkt, buffer_distance: 1000, name: "buffer" };
    var url = "http://spatialserver.spatialdev.com/services/geoprocessing/geoprocessing_operation";

    //Using this info, call spatial server with a radius and x,y as WKT to get nearby points.
    $http.post(url, postArgs).success(function (result, status) {

      if (!result || result.error) {
        console.error('Unable to fetch feature: ' + result.error);
        return;
      }

      //We have the buffer as geojson.  Send it to the point table to intersect
      var tablePostArgs = {
        returnfields: 'id,type,provider,photos',
        format: 'geojson',
        returnGeometry: 'yes',
        intersects: JSON.stringify(result),
        limit: 200 //add a limit of 200 so we don't get carried away
      };
      var pointUrl = "http://spatialserver.spatialdev.com/services/tables/cicos_2013/query";

      $http.post(pointUrl, tablePostArgs).success(function (points, qstatus) {
        //GeoJSON result of points
        if (!points || points.error) {
          console.error('Unable to fetch feature: ' + points.error);
          return;
        }

        //point is a featurecollection. open the panel and show some stuff.
        if(points && points.features && points.features.length > 0){
            $rootScope.$broadcast('details', { feature: { properties: points.features[0].properties } });
        }
      });
    });
  });

  //Connect the layout onresize end event
  try {
    window.layout.panes.center.bind("layoutpaneonresize_end", function () {
      map.invalidateSize();
    });
  } catch (e) {
    //Nothing
  }


  function drawOverlays() {
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

        map.on('click', function (e) {
          //Take the click event and pass it to the group layers.
          layer.onClick(e, function (evt) {
            if (evt && evt.feature) {
              console.log(['Clicked PBF Feature', evt.feature.properties]);
            }
          });
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
        var layer = vecRes.getLayer();
        layer.addTo(map);
      }

      layer.overlayName = overlayName;
      overlays[i] = layer;

    }

    // there are more overlays left in the list, less layers specified in route
    // we need to remove those too.
    for (var len2 = overlays.length; i < len2; ++i) {
      if (overlays[i].destroyResource) overlays[i].destroyResource();
      map.removeLayer(overlays[i]);
      delete overlays[i];
    }

  }

});