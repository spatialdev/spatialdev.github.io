/**
 * Created by Daniel Baah <dbaah@spatialdev.com>
 *       on 12/18/14.
 */

module.exports = angular.module('SpatialViewer').controller('CountrySelect', function($scope, IndiaFactory, KenyaFactory) {

    var SelectCountry = {
        default:'India',
        countryNames: ['India','Bangladesh','Uganda','Kenya','Tanzania']
    };

    $scope.selection = "India";

    $scope.chooseCountry = function(selected){
        $scope.selection = selected;
    };

    $scope.zoomToCountry = function () {
        map.setView([IndiaFactory.CountryData.MapCenter.Latitude,
            IndiaFactory.CountryData.MapCenter.Longitude],
            IndiaFactory.CountryData.MapZoom);
    };

    $scope.switchCountry = function (selected) {
        var cname = selected;
        map.setView([eval(cname+"Factory").CountryData.MapCenter.Latitude,
            eval(cname+"Factory").CountryData.MapCenter.Longitude],
            eval(cname+"Factory").CountryData.MapZoom);
    };

    this.country = SelectCountry;

});