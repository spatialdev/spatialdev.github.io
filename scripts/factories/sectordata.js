module.exports = angular.module('SpatialViewer').factory('SectorFactory', function($http) {

    var service = {};
    var SectorTypes = [];
    var Financial = [];
    var Health = [];
    var Agg = [];
    var Library = [];
    var countryname = '';

    service.getJson = function() {
        if (countryname == 'India') {
            $http.get('http://spatialserver.spatialdev.com/services/tables/cicos_2014/query?where=country%3D%27India%27%20and%20state%3D%27Bihar%27&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type&statsdef=count%3Atype').
                success(function (data) {
                    for (var i = 0; i < data.features.length; i++) {
                        Financial[i] = {
                            "type": data.features[i].properties.type,
                            "count": data.features[i].properties.count_type
                        };
                    }
                }).
                error(function (data) {
                    alert(data);
                });
            $http.get('http://spatialserver.spatialdev.com/services/tables/health_2014/query?where=country%3D%27India%27%20and%20state%3D%27Bihar%27&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type&statsdef=count%3Atype').
                success(function (data) {
                    for (var i = 0; i < data.features.length; i++) {
                        Health[i] = {
                            "type": data.features[i].properties.type,
                            "count": data.features[i].properties.count_type
                        };
                    }
                }).
                error(function (data) {
                    alert(data);
                });
            $http.get('http://spatialserver.spatialdev.com/services/tables/agriculture_2014/query?where=country%3D%27India%27%20and%20state%3D%27Bihar%27&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type&statsdef=count%3Atype').
                success(function (data) {
                    for (var i = 0; i < data.features.length; i++) {
                        Agg[i] = {
                            "type": data.features[i].properties.type,
                            "count": data.features[i].properties.count_type
                        };
                    }
                }).
                error(function (data) {
                    alert(data);
                });
            $http.get('http://spatialserver.spatialdev.com/services/tables/health_2014/query?where=country%3D%27India%27%20and%20state%3D%27Bihar%27&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type&statsdef=count%3Atype').
                success(function (data) {
                    for (var i = 0; i < data.features.length; i++) {
                        Library[i] = {
                            "type": data.features[i].properties.type,
                            "count": data.features[i].properties.count_type
                        };
                    }
                }).
                error(function (data) {
                    alert(data);
                });
        } else {
            alert('No country Selected');
        }
    }

    service.setCountry = function(country){
        countryname = country;
        this.getJson();
    }

    SectorTypes[0] = Financial;

    service.Sectors = SectorTypes;

    return service;

});
