/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

module.exports = angular.module('SpatialViewer').controller('FiltersCtrl', function($scope, $http, $state, $stateParams,
                                                                                    SectorFactory, CICOFilterFactory,HealthFilterFactory,
                                                                                    LibraryFilterFactory, AggFilterFactory, LayerConfig) {
  $scope.params = $stateParams;
  $scope.navTab = 'financial';

  $scope.HealthLayer = HealthFilterFactory.Layer;

  $scope.FinancialSector = SectorFactory.Financial;
  $scope.HealthSector = SectorFactory.Health;
  $scope.AggSector = SectorFactory.Agg;
  $scope.LibrarySector = SectorFactory.Library;

  // Check box are checked by default
  $scope.FinancialSector.selectedAll = true;
  $scope.HealthSector.selectedAll = false;
  $scope.AggSector.selectedAll = true;
  $scope.LibrarySector.selectedAll = true;
  $scope.checkedBool = "Check All";
  $scope.SelectedTab = 'financial';

  // Get selected tab
  $scope.setSelectedSector = function(selection){
    $scope.SelectedTab = selection;
    //$scope.HealthLayer.active = true
  };

  // Handle Check/Uncheck All filters
  $scope.filterCICO = function(){
    CICOFilterFactory.checkAll($scope.FinancialSector,$scope.SelectedTab,$scope.FinancialSector.selectedAll);
    $scope.checkedBool = CICOFilterFactory.checkBool;
  };

  $scope.filterHealth = function(){

    HealthFilterFactory.checkAll($scope.HealthSector,$scope.SelectedTab,$scope.HealthSector.selectedAll);
    $scope.checkedBool = HealthFilterFactory.checkBool;
    $scope.HealthSector.selectedAll = HealthFilterFactory.selectall;

    if($scope.HealthSector.selectedAll == true){
      $scope.HealthLayer.active = true;
    } else {
      $scope.HealthLayer.active = false
    }

    console.log("Checked Bool: " + $scope.checkedBool);
    console.log("Selected All: " + $scope.HealthSector.selectedAll);
    console.log("Active? " +  $scope.HealthLayer.active );
  };

  $scope.filterLibrary = function(){
    LibraryFilterFactory.checkAll($scope.LibrarySector,$scope.SelectedTab,$scope.LibrarySector.selectedAll);
    $scope.checkedBool = LibraryFilterFactory.checkBool;
  };
  $scope.filterAgg = function(){
    AggFilterFactory.checkAll($scope.AggSector,$scope.SelectedTab,$scope.AggSector.selectedAll);
    $scope.checkedBool = AggFilterFactory.checkBool;
  };

  // Handle filters clicks events
  $scope.setCICOSelection = function(sector, checked){
    // Set selected value for each sector based on checkbox
    for(var i=0;i<$scope.FinancialSector.length;i++) {
      if(sector == $scope.FinancialSector[i].type) {
        $scope.FinancialSector[i].selected = checked;
        break;
      }
      console.log(sector + ": " + checked);
    }
    // Save selected Filters into array
    $scope.FinancialSelections = [];
    for(var i=0;i<$scope.FinancialSector.length;i++){
      if($scope.FinancialSector[i].selected == true){
        $scope.FinancialSelections.push($scope.FinancialSector[i].type);
      }
    }

    console.log($scope.FinancialSelections);
  };
  $scope.setHealthSelection = function(sector, checked){
    // Set selected value for each sector based on checkbox
    for(var i=0;i<$scope.HealthSector.length;i++) {
      if(sector == $scope.HealthSector[i].type) {
        $scope.HealthSector[i].selected = checked;
        break;
      }
      console.log(sector + ": " + checked);
    }
    // Save selected Filters into array
    $scope.HealthSelections = [];
    for(var i=0;i<$scope.HealthSector.length;i++){
      if($scope.HealthSector[i].selected == true){
        $scope.HealthSelections.push($scope.HealthSector[i].type);
      }
    }

    console.log($scope.HealthSelections);
  };
  $scope.setLibrarySelection = function(sector, checked){
    // Set selected value for each sector based on checkbox
    for(var i=0;i<$scope.LibrarySector.length;i++) {
      if(sector == $scope.LibrarySector[i].type) {
        $scope.LibrarySector[i].selected = checked;
        break;
      }
      console.log(sector + ": " + checked);
    }
    // Save selected Filters into array
    $scope.LibrarySelections = [];
    for(var i=0;i<$scope.LibrarySector.length;i++){
      if($scope.LibrarySector[i].selected == true){
        $scope.LibrarySelections.push($scope.LibrarySector[i].type);
      }
    }

    console.log($scope.LibrarySelections);
  };
  $scope.setAggSelection = function(sector, checked){
    // Set selected value for each sector based on checkbox
    for(var i=0;i<$scope.AggSector.length;i++) {
      if(sector == $scope.AggSector[i].type) {
        $scope.AggSector[i].selected = checked;
        break;
      }
      console.log(sector + ": " + checked);
    }
    // Save selected Filters into array
    $scope.AggSelections = [];
    for(var i=0;i<$scope.AggSector.length;i++){
      if($scope.AggSector[i].selected == true){
        $scope.AggSelections.push($scope.AggSector[i].type);
      }
    }

    console.log($scope.AggSelections);
  };

  $scope.submitFilter = function () {
    $stateParams.filters = $scope.whereClause;
    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
  };

  $scope.clearAllFilters = function () {
    $scope.FinancialSector.selectedAll = false;
    $scope.HealthSector.selectedAll = false;
    $scope.AggSector.selectedAll = false;
    $scope.LibrarySector.selectedAll = false;

    CICOFilterFactory.clearAll($scope.FinancialSector,$scope.SelectedTab,$scope.FinancialSector.selectedAll);
    $scope.checkedBool = CICOFilterFactory.checkBool;
    HealthFilterFactory.clearAll($scope.HealthSector,$scope.SelectedTab,$scope.HealthSector.selectedAll);
    $scope.checkedBool = HealthFilterFactory.checkBool;
    LibraryFilterFactory.clearAll($scope.LibrarySector,$scope.SelectedTab,$scope.LibrarySector.selectedAll);
    $scope.checkedBool = LibraryFilterFactory.checkBool;
    AggFilterFactory.clearAll($scope.AggSector,$scope.SelectedTab,$scope.AggSector.selectedAll);
    $scope.checkedBool = AggFilterFactory.checkBool;
  };

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
    'Contextual layers:': {}
  };

  for (var layerKey in LayerConfig) {

    // We don't want to show layers that are basemaps, and we don't want to show the find func.
    if (  typeof LayerConfig[layerKey] === 'function'
        || layerKey === 'basemaps'
        || LayerConfig[layerKey].type === 'basemap') {

      continue;
    }
    $scope.layersPanels['Contextual layers:'][layerKey] = keyToObj(layerKey);

  }

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
      console.log("Not active");
    }

    $stateParams.layers = $scope.mapLayers.join(',');
    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);

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

});
