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

    $scope.selection = SelectCountry.default;
    SectorFactory.selectedCountry = $scope.selection;

    //Users Selected Country
    $scope.chooseCountry = function(selected){
        $scope.selection = selected;
        SectorFactory.selectedCountry = $scope.selection;
        //SectorFactory.setCountry($scope.selection);
    };

    $scope.zoomToCountry = function () {
        map.setView([IndiaFactory.India.MapCenter.Latitude,
            IndiaFactory.India.MapCenter.Longitude],
            IndiaFactory.India.MapZoom);
    };

    $scope.switchCountry = function (selected) {
        var cname = selected;
        console.log(cname);

        if(cname !== "India") {
            map.setView([eval(cname + "Factory")[cname].MapCenter.Latitude,
                    eval(cname + "Factory")[cname].MapCenter.Longitude],
                eval(cname + "Factory")[cname].MapZoom);
        } else {
            map.setView([eval(cname + "Factory")[cname].MapCenter.Latitude,
                    eval(cname + "Factory")[cname].MapCenter.Longitude,
                eval(cname + "Factory")[cname].MapZoom]);
        }
    };

    // Alias for Selected Country object
    this.country = SelectCountry;

});