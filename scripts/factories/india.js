
/**
* Created by Daniel Baah <dbaah@spatialdev.com>
*       on 12/22/14.
*/

module.exports = angular.module('SpatialViewer').factory('IndiaFactory', function ($http) {

    var service = {};

        $http.get('data/countrydata/India.json').
            success(function(data) {
                service.CountryData = data;
            }).
            error(function(data) {
                alert(data);
            });

    return service;

});

