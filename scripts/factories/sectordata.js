module.exports = angular.module('SpatialViewer').factory('SectorFactory', function($http) {

    var service = {};
    var countryname = 'India';
    service.SelectedTab = 'CICOS';
    service.selectedCountry = 'India';



    service.setSelectedTab = function(sector){
        service.SelectedTab = sector;
        console.log("factory tab: " + service.SelectedTab);
    };

    service.setCountry = function(country){
        service.selectedCountry = country;
        console.log("Country Selection: " + service.selectedCountry);
    };

    return service;

});