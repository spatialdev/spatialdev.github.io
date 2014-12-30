/**
 * Created by Daniel Baah <dbaah@spatialdev.com>
 *       on 12/18/14.
 */

module.exports = angular.module('SpatialViewer').controller('CountrySelect', function($http, $scope, IndiaFactory, SectorFactory, KenyaFactory,
                                                                                      UgandaFactory, BangladeshFactory, TanzaniaFactory, NigeriaFactory) {
    var SelectCountry = {
        default:'India',
        countryNames: ['Bangladesh','Uganda','Kenya','Nigeria','Tanzania','India']
    };

    var names = SelectCountry.countryNames;

    $scope.selection = 'India';

    //Users Selected Country
    $scope.chooseCountry = function(selected){
        $scope.selection = selected;
        SectorFactory.setCountry($scope.selection);
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

    // Alias for Selected Country object
    this.country = SelectCountry;

});