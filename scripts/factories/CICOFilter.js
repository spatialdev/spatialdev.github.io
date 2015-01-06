/**
 * Created by Daniel Baah <dbaah@spatialdev.com>
 *       on 1/6/15.
 */

module.exports = angular.module('SpatialViewer').factory('CICOFilterFactory', function () {

    var service = {};

    service.checkAll = function (sector, selection,selectall) {

        switch(selection) {
            case 'financial':
                if (selectall) {
                    selectall = false;
                    service.checkBool = "Check All";
                    console.log(service.checkBool);
                } else {
                    selectall = true;
                    service.checkBool = "Uncheck All";
                    console.log(service.checkBool);
                }
                angular.forEach(sector, function (names) {
                    names.selected = selectall;
                });
                break;
        }
    };



    return service;

});

