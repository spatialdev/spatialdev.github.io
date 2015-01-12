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

    //service.pctPerType = function(sector){
    //    for(var i=0;i<sector.length;i++) {
    //        sector[i]["pct"] = ((parseInt(sector[i].count) / service.CICOsTotal));
    //    }
    //};

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
                        service.CICOsTotal += parseInt(CICOs[i].count);
                    }
                    // Calculate percentage per type
                    //service.pctPerType(CICOs);
                    for(var i=0;i<CICOs.length;i++){
                        CICOs[i]["pct"]=((parseInt(CICOs[i].count)/service.CICOsTotal));
                    };
                    // Sort sector array by count
                    CICOs.sort(function(a,b){
                        return b.count- a.count;
                    });
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
                        service.HealthTotal += parseInt(Health[i].count);
                    }
                    // Calculate percentage per type
                    for(var i=0;i<Health.length;i++){
                        Health[i]["pct"]=((parseInt(Health[i].count)/service.HealthTotal));
                    };
                    // Sort sector array by count
                    Health.sort(function(a,b){
                        return b.count- a.count;
                    });
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
                        service.AggTotal += parseInt(Agg[i].count);
                    }
                    // Calculate percentage per type
                    for(var i=0;i<Agg.length;i++){
                        Agg[i]["pct"]=((parseInt(Agg[i].count)/service.AggTotal));
                    };
                    // Sort sector array by count
                    Agg.sort(function(a,b){
                        return b.count- a.count;
                    });
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
                        service.LibraryTotal += parseInt(Library[i].count);
                    }
                    for(var i=0;i<Library.length;i++){
                        Library[i]["pct"]=((parseInt(Library[i].count)/service.LibraryTotal));
                    };

                    // Sort sector array by count
                    Library.sort(function(a,b){
                       return b.count- a.count;
                    });
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