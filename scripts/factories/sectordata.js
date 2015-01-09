module.exports = angular.module('SpatialViewer').factory('SectorFactory', function($http) {

    var service = {};
    var CICOs = [];
    var Library = [];
    var Agg = [];
    var Health = [];
    var countryname = 'India';
    service.SelectedTab = 'CICOS';
    service.AggTotal = 0;
    service.CICOsTotal = 0;
    service.LibraryTotal = 0;
    service.HealthTotal = 0;

    service.getJson = function() {
        if (countryname == 'India') {
            // CICOS
            $http.get('http://spatialserver.spatialdev.com/services/tables/cicos_2014/query?where=country%3D%27India%27&returnfields=type&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type&statsdef=count%3Atype').
                success(function (data) {
                    for (var i = 0; i < data.features.length; i++) {
                        CICOs.push(
                            {
                                "type": data.features[i].properties.type,
                                "count": data.features[i].properties.count_type,
                                "selected": false
                            }
                    );
                    }
                    for(var i=0;i<CICOs.length;i++){
                        service.CICOsTotal += parseInt(CICOs[i].count);
                    };
                }).
                error(function (data) {
                    alert(data);
                });
            // Health
            $http.get('http://spatialserver.spatialdev.com/services/tables/health_2014/query?where=country%3D%27India%27&returnfields=type&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type&statsdef=count%3Atype').
                success(function (data) {
                    for (var i = 0; i < data.features.length; i++) {
                        Health.push({
                            "type": data.features[i].properties.type,
                            "count": data.features[i].properties.count_type,
                            "selected": false
                        });
                    }
                    for(var i=0;i<Health.length;i++){
                        service.HealthTotal += parseInt(Health[i].count);
                    };
                }).
                error(function (data) {
                    alert(data);
                });
            // Agriculture
            $http.get('http://spatialserver.spatialdev.com/services/tables/agriculture_2014/query?where=country%3D%27India%27&returnfields=type&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type&statsdef=count%3Atype').
                success(function (data) {
                    for (var i = 0; i < data.features.length; i++) {
                        Agg.push({
                            "type": data.features[i].properties.type,
                            "count": data.features[i].properties.count_type,
                            "selected": false
                        });
                    }
                    for(var i=0;i<Agg.length;i++){
                        service.AggTotal += parseInt(Agg[i].count);
                    };
                }).
                error(function (data) {
                    alert(data);
                });
            // Library
            $http.get('http://spatialserver.spatialdev.com/services/tables/library_2014/query?where=country%3D%27India%27&returnfields=type&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type&statsdef=count%3Atype').
                success(function (data) {
                    for (var i = 0; i < data.features.length; i++) {
                        Library.push({
                            "type": data.features[i].properties.type,
                            "count": data.features[i].properties.count_type,
                            "selected": false
                        });
                    }
                    for(var i=0;i<Library.length;i++){
                        service.LibraryTotal += parseInt(Library[i].count);
                    };
                }).
                error(function (data) {
                    alert(data);
                });
        } else {
            alert('No country Selected');
        }
    }
    service.getJson();

    service.setSelectedTab = function(sector){
        service.SelectedTab = sector;
        console.log("factory tab: " + service.SelectedTab);
    };

    service.setCountry = function(country){
        countryname = country;
        this.getJson();
    }

    service.CICOs = CICOs;
    service.Agg = Agg;
    service.Library = Library;
    service.Health = Health;
    service.selectedCountry = countryname;

    return service;

});