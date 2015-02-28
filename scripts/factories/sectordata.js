module.exports = angular.module('SpatialViewer').factory('SectorFactory', function () {

    var service = {};
    var countryname = 'India';
    service.SelectedSector = '';
    service.selectedCountry = 'India';
    service.sectorSelections = [];
    //service.ALLdetails = [];
    //service.ALLdetailsLength = 0;

    service.setSelectedSector = function (sector) {
        service.SelectedSector = sector;

        if (service.sectorSelections.indexOf(sector) == -1) {
            service.sectorSelections.push(sector);
        } else {
            service.sectorSelections.splice(service.sectorSelections.indexOf(sector), 1);
        }

        service.allSectors = service.sectorSelections;

        console.log("SectorFactory tab: " + service.SelectedSector);
    };

    //service.setAllDetails = function (details) {
    //
    //    if(service.ALLdetails.length >= 1) {
    //        details.forEach(function (val) {
    //            val.forEach(function (v) {
    //                service.ALLdetails.push(v);
    //            })
    //        })
    //    } else {
    //        service.ALLdetails.push(details);
    //    }
    //
    //    //service.ALLdetails.push(details);
    //    service.ALLdetails.forEach(function(val){
    //        service.ALLdetailsLength = service.ALLdetailsLength + val.length;
    //    });
    //};

    //service.clearDetails = function () {
    //    service.ALLdetails = [];
    //};
    //
    //service.clearTotal = function () {
    //    service.ALLdetailsLength = 0;
    //};

    service.setCountry = function (country) {
        service.selectedCountry = country;
        console.log("Country Selection: " + service.selectedCountry);
    };

    return service;

});