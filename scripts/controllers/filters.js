/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

module.exports = angular.module('SpatialViewer').controller('FiltersCtrl', function($scope, $http, $state, $stateParams,
                                                                                    SectorFactory, CICOFilterFactory,HealthFilterFactory,
                                                                                    LibraryFilterFactory, AggFilterFactory) {
  $scope.params = $stateParams;
  $scope.navTab = 'financial';

  $scope.FinancialSector = SectorFactory.Financial;
  $scope.HealthSector = SectorFactory.Health;
  $scope.AggSector = SectorFactory.Agg;
  $scope.LibrarySector = SectorFactory.Library;


  // Check box are checked by default
  $scope.FinancialSector.selectedAll = true;
  $scope.HealthSector.selectedAll = true;
  $scope.AggSector.selectedAll = true;
  $scope.LibrarySector.selectedAll = true;
  $scope.checkedBool = "Uncheck All";
  $scope.SelectedTab = 'financial';

  // Get selected tab
  $scope.setSelectedSector = function(selection){
    $scope.SelectedTab = selection;
  };

  // Handle Check/Uncheck All filters
  $scope.filterCICO = function(){
    CICOFilterFactory.checkAll($scope.FinancialSector,$scope.SelectedTab,$scope.FinancialSector.selectedAll);
    //$scope.checkedBool = CICOFilterFactory.checkBool;
  };
  $scope.filterHealth = function(){
    HealthFilterFactory.checkAll($scope.HealthSector,$scope.SelectedTab,$scope.HealthSector.selectedAll);
    //$scope.checkedBool = HealthFilterFactory.checkBool;
  };
  $scope.filterLibrary = function(){
    LibraryFilterFactory.checkAll($scope.LibrarySector,$scope.SelectedTab,$scope.LibrarySector.selectedAll);
    //$scope.checkedBool = HealthFilterFactory.checkBool;
  };
  $scope.filterAgg = function(){
    AggFilterFactory.checkAll($scope.AggSector,$scope.SelectedTab,$scope.AggSector.selectedAll);
    //$scope.checkedBool = HealthFilterFactory.checkBool;
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

  };

});
