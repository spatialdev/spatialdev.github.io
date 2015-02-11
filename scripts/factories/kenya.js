
/**
 * Created by Daniel Baah <dbaah@spatialdev.com>
 *       on 12/22/14.
 */

module.exports = angular.module('SpatialViewer').factory('KenyaFactory', function ($http) {

    var service = {};

    service.Kenya = {

        "CountryName": "Kenya",
        "MapCenter": {
            "Latitude": 0.57128,
            "Longitude": 37.789536
        },
        "MapZoom": 6,
        "QuickStats": {
        "totalPopulation": 40357237,
            "urbanPct": .073,
            "ruralPct": .927,
            "within5Km": .767,
            "ruralpop": 37393023,
            "urbanpop": 2964013
        },
        'Financial Service': {
            color: 'rgb(157, 33, 41)'
        },
        'Library': {
            color: 'rgb(42, 133, 173)'
        },
        'Agriculture': {
            color: 'rgb(127, 157, 106)'
        },
        'Health': {
            color: 'rgb(209, 110, 35)'
        }
    };

    service.Kenya.QuickStats["totpop5km"] = (service.Kenya.QuickStats.within5Km * service.Kenya.QuickStats.totalPopulation);

    //service.getKenyaData = function() {
    //    $http.get('../../data/countrydata/Kenya.json').
    //        success(function (data) {
    //            service.Kenya = data;
    //        }).
    //        error(function (data) {
    //            alert(data);
    //        });
    //};
    //
    //service.getKenyaData();

    return service;

});

