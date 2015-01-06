/**
 * Created by SpatialDev on 1/6/15.
 */
/**
 * Created by Daniel Baah <dbaah@spatialdev.com>
 *       on 1/6/15.
 */

module.exports = angular.module('SpatialViewer').factory('LibraryFilterFactory', function () {

    var service = {};

    service.checkAll = function (sector, selection,selectall) {

        switch(selection) {
            case 'library':
                if (selectall) {
                    selectall = false;
                    service.checkBool = "Check All";
                } else {
                    selectall = true;
                    service.checkBool = "Uncheck All";
                }
                angular.forEach(sector, function (names) {
                    names.selected = selectall;
                });
                break;
        }
    };



    return service;

});

