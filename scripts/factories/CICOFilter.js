/**
 * Created by Daniel Baah <dbaah@spatialdev.com>
 *       on 12/22/14.
 */

module.exports = angular.module('SpatialViewer').factory('CICOFilterFactory', function () {

    var service = {};

    service.checkAll = function (sector, selection,selectall) {

        switch(selection) {
            case 'financial':
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

    return service;

});

