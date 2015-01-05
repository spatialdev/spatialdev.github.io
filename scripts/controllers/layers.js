/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

module.exports = angular.module('SpatialViewer').controller('LayersCtrl', function($http, $scope, $state, $stateParams, LayerConfig,
                                                                                   VectorProvider, SectorFactory) {
  $scope.params = $stateParams;
  $scope.zoom = parseInt($stateParams.zoom);
  $scope.navTab = 'contextual';

  $scope.FinancialSector = SectorFactory.Financial;
  $scope.HealthSector = SectorFactory.Health;
  $scope.AggSector = SectorFactory.Agg;
  $scope.LibrarySector = SectorFactory.Library;
  $scope.checkedBool = "Check All";
  $scope.SelectedTab = 'financial';

  // Get selected tab
  $scope.setSelectedSector = function(selection){
    $scope.SelectedTab = selection;
  }

  // Check/Uncheck All click events
  $scope.checkAll = function () {
    if ($scope.selectedAll) {
      $scope.selectedAll = false;
      $scope.checkedBool = "Check All";
    } else {
      $scope.selectedAll = true;
      $scope.checkedBool = "Uncheck All";
    }

    switch($scope.SelectedTab) {
      case 'financial':
        angular.forEach($scope.FinancialSector, function (names) {names.Selected = $scope.selectedAll;});
      case 'health':
        angular.forEach($scope.HealthSector, function (names) {names.Selected = $scope.selectedAll;});
      case 'agg':
        angular.forEach($scope.AggSector, function (names) {names.Selected = $scope.selectedAll;});
      case 'library':
        angular.forEach($scope.LibrarySector, function (names) {names.Selected = $scope.selectedAll;});
      default:
        angular.forEach($scope.FinancialSector, function (names) {names.Selected = $scope.selectedAll;});
    }
  };

  debug.LayerConfig = LayerConfig;

  $scope.gadmLevel = $stateParams.level || 'auto';

  $scope.$watch('gadmLevel', function (newValue) {
    $stateParams.level = newValue;
    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
  });

  $scope.$on('zoom-update', function () {
    console.log("zoom: " + $stateParams.zoom);
    $scope.zoom = parseInt($stateParams.zoom);
  });

  $scope.layersPanels = {
    //'Boundaries': {},
    //'GeoJSON': {},
    //'KML': {},
    //'CSV': {},
    //'WMS': {},
    'Contextual layers:': {}
  };

  for (var layerKey in LayerConfig) {

    // We don't want to show layers that are basemaps, and we don't want to show the find func.
    if (  typeof LayerConfig[layerKey] === 'function' || layerKey === 'basemaps' || LayerConfig[layerKey].type === 'basemap') {
      continue;
    }

    /**
     * Put layers in their respective categories.
     */
//
//    else if (LayerConfig[layerKey].type && LayerConfig[layerKey].type.toLowerCase() === 'geojson') {
//      $scope.layersPanels.GeoJSON[layerKey] = LayerConfig[layerKey];
//    }
//
//    else if (LayerConfig[layerKey].type && LayerConfig[layerKey].type.toLowerCase() === 'kml') {
//      $scope.layersPanels.KML[layerKey] = LayerConfig[layerKey];
//    }
//
//    else if (LayerConfig[layerKey].type && LayerConfig[layerKey].type.toLowerCase() === 'csv') {
//      $scope.layersPanels.CSV[layerKey] = LayerConfig[layerKey];
//    }
//
//    else if (LayerConfig[layerKey].type && LayerConfig[layerKey].type.toLowerCase() === 'wms') {
//      $scope.layersPanels.WMS[layerKey] = LayerConfig[layerKey];
//    }

    $scope.layersPanels['Contextual layers:'][layerKey] = keyToObj(layerKey);

  }

  debug.layersPanels = $scope.layersPanels;

  function keyToObj(key) {
    val = LayerConfig[layerKey];
    if (typeof val === 'string') {
      return {
        url: val
      };
    }
    return val;
  }

  //NH TODO: Not yet fully implemented - possible extra feature...
  /**
   * Layers that are active on the map but are not mentioned in LayerConfig
   * @type {{}}
   */
  $scope.nomadLayers = {};


  /**
   * When the route changes, we should see what layers we have on there and have the layers
   * in the panels checked accordingly.
   */
  $scope.$on('layers-update', function(evt, layers) {

    // github gists
    $scope.listGists();

    // reset the nomad layers
    for (var nk in $scope.nomadLayers) {
      $scope.nomadLayers[nk].active = false;
    }

    // reset the layer config layers
    for (var lck in LayerConfig) {
      if (typeof LayerConfig[lck] === 'object' && LayerConfig[lck] !== null) {
        LayerConfig[lck].active = false;
      }
    }

    /**
     * Check if the layer is active in map layers
     */
    $scope.mapLayers = layers;
    // skip the first layer, the basemap
    for (var i = 1, len = layers.length; i < len; i++) {
      var l = layers[i];
      // layer is in the layer config
      if (typeof LayerConfig[l] === 'object' && LayerConfig[l] !== null) {
        LayerConfig[l].active = true;
      }
      // layer is a github gist
      else if ($scope.gists[l]) {
        $scope.gists[l].active = true;
      }
      // layer is a not in the layer config. it's nomadic.
      else {
        $scope.nomadLayers[l] = {
          name: l,
          url: l,
          active: true
        }
      }
    }
  });


  $scope.toggleMapLayer = function (layerKey, layer) {

    // add layer
    if (layer.active === true) {
      $scope.mapLayers.push(layerKey);

    // remove layer
    } else {
      $scope.mapLayers = $.grep($scope.mapLayers, function(routeLayer){
        return routeLayer !== layerKey;
      });
    }

    $stateParams.layers = $scope.mapLayers.join(',');
    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);

  };

  $scope.alertnow = function(){
    alert("test");
  };

  $scope.listGists = function () {
    $scope.gists = gists.fetch();
    if ($scope.gists) {
      $scope.numGists = Object.keys($scope.gists).length;
    } else {
      $scope.numGists = 0;
    }
  };
  $scope.listGists();
  debug.gistsLayersPanel = $scope.gists;

});
