module.exports = angular.module('SpatialViewer').factory('SectorFactory', function($http) {

    var service = {};
    var Financial = [];
    var Library = [];
    var Agg = [];
    var Health = [];
    var countryname = 'India';

    service.getJson = function() {
        if (countryname == 'India') {
            $http.get('http://spatialserver.spatialdev.com/services/tables/cicos_2014/query?where=country%3D%27India%27&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type&statsdef=count%3Atype').
                success(function (data) {
                    for (var i = 0; i < data.features.length; i++) {
                        Financial.push(
                            {
                                "type": data.features[i].properties.type,
                                "count": data.features[i].properties.count_type
                            }
                    );
                    }
                }).
                error(function (data) {
                    alert(data);
                });
            $http.get('http://spatialserver.spatialdev.com/services/tables/health_2014/query?where=country%3D%27India%27%20and%20state%3D%27Bihar%27&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type&statsdef=count%3Atype').
                success(function (data) {
                    for (var i = 0; i < data.features.length; i++) {
                        Health.push({
                            "type": data.features[i].properties.type,
                            "count": data.features[i].properties.count_type
                        });
                    }
                }).
                error(function (data) {
                    alert(data);
                });
            $http.get('http://spatialserver.spatialdev.com/services/tables/agriculture_2014/query?where=country%3D%27India%27%20and%20state%3D%27Bihar%27&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type&statsdef=count%3Atype').
                success(function (data) {
                    for (var i = 0; i < data.features.length; i++) {
                        Agg.push({
                            "type": data.features[i].properties.type,
                            "count": data.features[i].properties.count_type
                        });
                    }

                }).
                error(function (data) {
                    alert(data);
                });
            $http.get('http://spatialserver.spatialdev.com/services/tables/library_2014/query?where=country%3D%27India%27%20and%20state%3D%27Bihar%27&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type&statsdef=count%3Atype').
                success(function (data) {
                    for (var i = 0; i < data.features.length; i++) {
                        Library.push({
                            "type": data.features[i].properties.type,
                            "count": data.features[i].properties.count_type
                        });
                    }
                }).
                error(function (data) {
                    alert(data);
                });
        } else {
            alert('No country Selected');
        }
    }
    service.getJson();

    service.setCountry = function(country){
        countryname = country;
        this.getJson();
    }

    service.Financial = Financial;
    service.Agg = Agg;
    service.Library = Library;
    service.Health = Health;
    service.selectedCountry = countryname;

    return service;

});