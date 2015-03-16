module.exports = angular.module('SpatialViewer').factory('SectorFactory', function () {

    var service = {};
    var countryname = 'India';
    service.SelectedSector = '';
    service.selectedCountry = 'India';
    service.sectorSelections = [];

    service.CountryList = {
        default:{
            country:'India',
            MapCenter: {
                Latitude: 26,
                Longitude: 85
            },
            MapZoom: 6
        },
        countryNames: ['Bangladesh', 'Uganda', 'Kenya', 'Nigeria', 'Tanzania', 'India']
    };

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

    service.setCountry = function (country) {
        service.selectedCountry = country;
        console.log("Country Selection: " + service.selectedCountry);
    };

    return service;

});