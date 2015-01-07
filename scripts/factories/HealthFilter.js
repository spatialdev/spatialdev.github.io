/**
 * Created by SpatialDev on 1/6/15.
 */
/**
 * Created by Daniel Baah <dbaah@spatialdev.com>
 *       on 1/6/15.
 */

module.exports = angular.module('SpatialViewer').factory('HealthFilterFactory', function () {

    var service = {};

    service.checkAll = function (sector, selection, selectall) {

        switch(selection) {
            case 'health':
                if (selectall) {
                    selectall = false;
                    service.checkBool = "Check All";
                    console.log("factory: " + service.checkBool);
                    console.log("factory: " + selectall);
                } else {
                    selectall = true;
                    service.checkBool = "Uncheck All";
                    console.log("factory: " + service.checkBool);
                    console.log("factory: " + selectall);
                }
                angular.forEach(sector, function (names) {
                    names.selected = selectall;
                });
                break;
        }
    };

    service.clearAll = function (sector, selection,selectall) {

        if (!selectall) {
            selectall = false;
            service.checkBool = "Check All";
        }
        angular.forEach(sector, function (names) {
            names.selected = selectall;
        });
    };

    return service;

});

