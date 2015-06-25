module.exports = angular.module('SpatialViewer').factory('SectorFactory', function () {

    var service = {};
    var countryname = 'India';
    service.SelectedSector = '';
    service.selectedCountry = 'India';
    service.sectorSelections = [];

    service.CountryList = {
        default:{
            country:'Uganda',
            "MapCenter": {
                "Latitude": 1.3,
                "Longitude": 32
            },
            MapZoom: 6
        },Kenya:{
            layer:'cicos_kenya'
        },Nigeria:{
            layer:'cicos_nigeria'
        },
        India:{
            layer: ['library','CICOS','agriculture','health']
        },
        Uganda:{
            layer: ['cicos_2013_uganda','education_2015_uganda','agriculture_2015_uganda']
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