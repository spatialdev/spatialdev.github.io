module.exports = angular.module('SpatialViewer').factory('SectorFactory', function() {

    var service = {};
    var countryname = 'India';
    service.SelectedSector = 'CICOS';
    service.selectedCountry = 'India';



    service.setSelectedSector = function(sector){
        service.SelectedSector = sector;
        console.log("SectorFactory tab: " + service.SelectedSector);
    };

    service.setCountry = function(country){
        service.selectedCountry = country;
        console.log("Country Selection: " + service.selectedCountry);
    };

    return service;

});