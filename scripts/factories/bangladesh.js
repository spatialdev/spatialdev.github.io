
/**
 * Created by Daniel Baah <dbaah@spatialdev.com>
 *       on 12/22/14.
 */

module.exports = angular.module('SpatialViewer').factory('BangladeshFactory', function ($http) {

    var service = {};

    $http.get('data/countrydata/Bangladesh.json').
        success(function(data) {
            service.Bangladesh = data;
        }).
        error(function(data) {
            alert(data);
        });

    return service;

});

