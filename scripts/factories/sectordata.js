module.exports = angular.module('SpatialViewer').factory('SectorFactory', function($http) {

    var service = {};
    var countryname = 'India';
    service.SelectedTab = 'CICOS';


    service.setSelectedTab = function(sector){
        service.SelectedTab = sector;
        console.log("factory tab: " + service.SelectedTab);
    };

    service.setCountry = function(country){
        countryname = country;
        this.getSectorCounts();
    };

    service.selectedCountry = countryname;

    return service;

});