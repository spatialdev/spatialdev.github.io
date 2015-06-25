
/**
 * Created by Daniel Baah <dbaah@spatialdev.com>
 *       on 12/22/14.
 */

module.exports = angular.module('SpatialViewer').factory('UgandaFactory', function ($http) {

    var service = {};
    var CICOs = [];
    var Education = [];
    var Ag = [];
    var education_type_url = 'http://spatialserver.spatialdev.com/services/tables/education_2015/query?returnfields=type&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type&statsdef=count%3Atype';
    var ag_type_url = 'http://spatialserver.spatialdev.com/services/tables/agriculture_2015/query?returnfields=type&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type&statsdef=count%3Atype';

    var ProviderData = {
        'Microfinance deposit taking institution' : [
            "PRIDE Microfinance Ltd (MDI)",
            "UGAFODE",
            "FINCA Uganda Ltd (MDI)",
            "Uganda Finance Trust Ltd"
        ],
        'Mobile Money Agent': ["aw", "or", "mtn", "mp", "ez", "ms", "mc"],
        'Credit institutions': ["Post Bank Uganda Ltd", "Opportunity Uganda Ltd"]
    };

    service.CICOsTotal = 0;
    service.AgTotal = 0;
    service.EducationTotal = 0;


    service.Ag_Counts = [];
    service.CICOs_Counts = [];
    service.Education_Counts = [];


    service.Uganda = {

        "CountryName": "Uganda",
        "MapCenter": {
            "Latitude": 1.3,
            "Longitude": 32
        },
        "MapZoom": 7,
        QuickStats: {
            totalPopulation: 33424922,
            urbanPct: .1276,
            ruralPct: .8723,
            within5Km: .4267,
            ruralpop: 29138627,
            urbanpop: 1283352,
            kampalapop: 2982020
        }
    };

    service.getAgCounts = function(callback){
        $http.get(ag_type_url).
            success(function (data) {
                service.Ag_Counts = [];
                service.AgTotal = 0;
                for (var i = 0; i < data.features.length; i++) {
                    service.Ag_Counts.push({
                        "type": data.features[i].properties.type,
                        "count": data.features[i].properties.count_type,
                        "land_use": data.features[i].properties.land_use,
                        "label": data.features[i].properties.type,
                        "selected": true
                    });
                    service.AgTotal += parseInt(service.Ag_Counts[i].count);
                }
                // Calculate percentage per type
                for(var i=0;i<service.Ag_Counts.length;i++){
                    service.Ag_Counts[i]["pct"]=((parseInt(service.Ag_Counts[i].count)/service.AgTotal));
                }
                // Sort sector array by count
                service.Ag_Counts.sort(function(a,b){
                    return b.count- a.count;
                });

                callback(service.Ag_Counts,service.AgTotal);
            }).
            error(function (data) {
                alert(data);
            });
    };
    service.getCICOsCounts = function(callback){
        // UGANDA
        $http.get('http://spatialserver.spatialdev.com/services/tables/uganda_cicos_2015/query?where=country%3D%27Uganda%27&returnfields=type&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type&statsdef=count%3Atype').
            success(function (data) {
                service.CICOs_Counts = [];
                service.CICOsTotal = 0;
                //reset array to prevent duplicates
                for (var i = 0; i < data.features.length; i++) {
                    if(data.features[i].properties.type !== null) {
                        service.CICOs_Counts.push(
                            {
                                "type": data.features[i].properties.type,
                                "count": data.features[i].properties.count_type,
                                "label":  data.features[i].properties.type,
                                "selected": true
                            });
                        service.CICOsTotal += parseInt(data.features[i].properties.count_type);
                    }
                }

                // get percentage of CICO type
                for (var i = 0; i < service.CICOs_Counts.length; i++) {
                    service.CICOs_Counts[i]["pct"] = ((parseInt(service.CICOs_Counts[i].count) / service.CICOsTotal));

                    ////add provider list
                    //if(CICOs[i].type=='Microfinance deposit taking institution') {
                    //    CICOs[i].viewAll = true;
                    //    CICOs[i].providers = [];
                    //    ProviderData["Microfinance deposit taking institution"].forEach(function (val) {
                    //        CICOs[i].providers.push({type: val, selected: true});
                    //    });
                    //}
                    //
                    //if(CICOs[i].type=='Mobile Money Agent') {
                    //    CICOs[i].viewAll = true;
                    //    CICOs[i].providers = [];
                    //    ProviderData["Mobile Money Agent"].forEach(function (val) {
                    //        CICOs[i].providers.push({type: val, selected: true});
                    //    });
                    //}
                    //
                    //if(CICOs[i].type=='Credit institutions') {
                    //    CICOs[i].viewAll = true;
                    //    CICOs[i].providers = [];
                    //    ProviderData["Credit institutions"].forEach(function (val) {
                    //        CICOs[i].providers.push({type: val, selected: true});
                    //    });
                    //}
                }

                // Sort sector array by count
                service.CICOs_Counts.sort(function (a, b) {
                    return b.count - a.count;
                });

                callback(service.CICOs_Counts,service.CICOsTotal);

            }).
            error(function (data) {
                alert(data);
            });

    };
    service.getEducationCounts = function(callback){
        $http.get(education_type_url).
            success(function (data) {
                service.Education_Counts = [];
                service.EducationTotal = 0;
                for (var i = 0; i < data.features.length; i++) {

                    var type = '';

                    //abbreviate certain words
                    if(data.features[i].properties.type.indexOf("Government")!== -1){
                        type = data.features[i].properties.type.replace("Government", "Gov.");
                        if (data.features[i].properties.type.indexOf("Institutions")!== -1){
                            type = type.replace("Institutions", "Inst.")
                        }
                        if (data.features[i].properties.type.indexOf("Educational")!== -1){
                            type = type.replace("Educational", "Edu.")
                        }


                    } else if (data.features[i].properties.type.indexOf("Community")!== -1) {
                        type = data.features[i].properties.type.replace("Community", "Comm.")
                    } else if (data.features[i].properties.type.indexOf("Institutions")!== -1) {
                        type = data.features[i].properties.type.replace("Institutions", "Inst.")
                    }else {
                        type = data.features[i].properties.type;
                    }

                    service.Education_Counts.push({
                        "label":type,
                        "type": data.features[i].properties.type,
                        "count": data.features[i].properties.count_type,
                        "land_use": data.features[i].properties.land_use,
                        "selected": true
                    });
                    service.EducationTotal += parseInt(service.Education_Counts[i].count);
                }
                // Calculate percentage per type
                for(var i=0;i<service.Education_Counts.length;i++){
                    service.Education_Counts[i]["pct"]=((parseInt(service.Education_Counts[i].count)/service.EducationTotal));
                }
                // Sort sector array by count
                service.Education_Counts.sort(function(a,b){
                    return b.count- a.count;
                });

                callback(service.Education_Counts,service.EducationTotal);
            }).
            error(function (data) {
                alert(data);
            });
    };

    //service.getAgCounts();
    //service.getCICOsCounts();
    //service.getEducationCounts();
    //
    //service.Ag_Counts = Ag;
    //service.CICOs_Counts = CICOs;
    //service.Education_Counts = Education;

    return service;

});

