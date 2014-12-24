
/**
 * Created by Daniel Baah <dbaah@spatialdev.com>
 *       on 12/23/14.
 */

module.exports = angular.module('SpatialViewer').factory('NigeriaFactory', function ($http) {

    var service = {};

    $http.get('data/countrydata/Nigeria.json').
        success(function(data) {
            service.CountryData = data;
        }).
        error(function(data) {
            alert(data);
        });

    return service;

});

