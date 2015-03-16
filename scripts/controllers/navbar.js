module.exports = angular.module('SpatialViewer').controller('NavBarCtrl', function($scope, $state, $stateParams,SectorFactory) {
  $scope.params = $stateParams;

  //$scope.defaultState = function(){
  //
  //  $scope.CountryList = SectorFactory.CountryList;
  //
  //  var temparr = $stateParams.layers.split(",");
  //  $stateParams.layers = temparr[0];
  //
  //  $stateParams.lat = $scope.CountryList.default.MapCenter.Latitude;
  //  $stateParams.lng = $scope.CountryList.default.MapCenter.Longitude;
  //  $stateParams.zoom = $scope.CountryList.default.MapZoom;
  //  $stateParams.country =  $scope.CountryList.default.country;
  //
  //  $scope.closeParam('details-panel');
  //
  //  $state.go($state.current.name, $stateParams);
  //};

});
