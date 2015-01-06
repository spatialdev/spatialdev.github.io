/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

module.exports = angular.module('SpatialViewer').controller('FiltersCtrl', function($scope, $http, $state, $stateParams,
                                                                                    SectorFactory, CICOFilterFactory,HealthFilterFactory) {
  $scope.params = $stateParams;
  $scope.navTab = 'financial';

  $scope.FinancialSector = SectorFactory.Financial;
  $scope.FinancialSelections = [];
  $scope.HealthSector = SectorFactory.Health;
  $scope.HealthSelections = [];
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

  $scope.filterCICO = function(){
    CICOFilterFactory.checkAll($scope.FinancialSector,$scope.SelectedTab,$scope.FinancialSector.selectedAll);
    //$scope.checkedBool = CICOFilterFactory.checkBool;
  };

  $scope.filterHealth = function(){
    HealthFilterFactory.checkAll($scope.HealthSector,$scope.SelectedTab,$scope.HealthSector.selectedAll);
    $scope.checkedBool = HealthFilterFactory.checkBool;
  };


  // Handle filter clicks
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


  $scope.submitFilter = function () {
    $stateParams.filters = $scope.whereClause;
    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
  };

  $scope.clearAllFilters = function () {

  };

});
