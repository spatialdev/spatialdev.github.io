
/**
 * Created by Daniel Baah <dbaah@spatialdev.com>
 *       on 12/22/14.
 */

module.exports = angular.module('SpatialViewer').factory('KenyaFactory', function ($http) {

    var service = {};
    var CICO_Config = {
        'Offsite ATMs': {
            color: '#a4c78c',
            infoLabel: 'Offsite ATM',
            providers: null,
            zIndex: 6
        },
        'Bank Branches': {
            color: '#977C00',
            infoLabel: 'Bank Branch',
            providers: null,
            zIndex: 5
        },
        'MFIs': {
            color: '#977c00',
            infoLabel: 'MFI',
            providers: null,
            zIndex: 7
        },
        'SACCOs': {
            color: '#cf8a57',
            infoLabel: 'SACCO',
            providers: null,
            zIndex: 10
        },
        'Mobile Money Agent': {
            color: '#8CB7C7',
            infoLabel: 'Mobile Money Agent',
            providers: null,
            zIndex: -1
        },
        'MDIs': {
            color: '#825D99',
            infoLabel: 'MDI',
            providers: null,
            zIndex: 6
        },
        'Credit Institution': {
            color: '#6CA76B',
            infoLabel: 'Credit Institution',
            providers: null,
            zIndex: 5
        },
        'MFBs': {
            color: '#825D99',
            infoLabel: 'MFB',
            providers: null,
            zIndex: 7
        },
        'Motor Parks': {
            color: '#bd85b3',
            infoLabel: 'Motor Parks',
            providers: null,
            zIndex: 7
        },
        'Mobile Network Operator Outlets': {
            color: '#a2a2a2',
            infoLabel: 'Mobile Network Operator Outlets',
            providers: null,
            zIndex: 0
        },
        'Post Offices': {
            color: '#FFFF00',
            infoLabel: 'Post Offices',
            providers: null,
            zIndex: 4
        },
        'Post Office': {
            color: '#80ad7b',
            infoLabel: 'Post Offices',
            providers: null,
            zIndex: 6
        },
        'Bus Stand': {
            color: '#80ad7b',
            infoLabel: 'Bus Stands',
            providers: null,
            zIndex: 6
        },
        'Bus Stands': {
            color: '#80ad7b',
            infoLabel: 'Bus Stands',
            providers: null,
            zIndex: 6
        },

        //Kenya
        'Insurance Providers': {
            color: '#3086AB',
            infoLabel: 'Insurance providers',
            providers: null,
            zIndex: 6
        },
        'Money Transfer Service': {
            color: '#977C00',
            infoLabel: 'Money Transfer Service',
            providers: null,
            zIndex: 6
        },
        'Dev Finance': {
            color: '#9B242D',
            infoLabel: 'Dev Finance',
            providers: null,
            zIndex: 6
        },
        'Forex Bureaus': {
            color: '#cf8a57',
            infoLabel: 'Forex Bureaus',
            providers: null,
            zIndex: 6
        },
        'Cap Markets': {
            color: '#825D99',
            infoLabel: 'Cap Markets',
            providers: null,
            zIndex: 6
        },
        'Pension Providers': {
            color: '#a2a2a2',
            infoLabel: 'Pension providers',
            providers: null,
            zIndex: 6
        },
        'Purchase Lease Factoring': {
            color: '#80ad7b',
            infoLabel: 'Purchase Lease Factoring',
            providers: null,
            zIndex: 6
        },
        'Bank Agent': {
            color: '#80ad7b',
            infoLabel: 'Bank Agent',
            providers: null,
            zIndex: 6
        },
        'Bank and Mortgage': {
            color: '#80ad7b',
            infoLabel: 'Banks and Mortgage',
            providers: null,
            zIndex: 6
        },
        'Commercial Bank': {
            color: '#9b242d',
            infoLabel: 'Commercial Bank',
            providers: null,
            zIndex: 3
        },

        'PostBank': {
            color: '#bd85b3',
            infoLabel: 'Post Bank',
            providers: null,
            zIndex: 6
        },

        //Nigeria New Post Offices
        'NIPOST Post Office': {
            color: '#80ad7b',
            infoLabel: 'NIPOST Post Offices',
            providers: null,
            zIndex: 6
        },
        'NIPOST Post Shop': {
            color: '#80ad7b',
            infoLabel: 'NIPOST Post Shops',
            providers: null,
            zIndex: 6
        },
        'NIPOST Postal Agency': {
            color: '#80ad7b',
            infoLabel: 'NIPOST Postal Agencies',
            providers: null,
            zIndex: 6
        },

        //India
        'Postal Outlets': {
            color: '#ce6b29',
            infoLabel: 'Postal Outlets',
            providers: null,
            zIndex: 3
        },
        'Commercial Banks': {
            color: '#3086ab',
            infoLabel: 'Commercial Banks',
            providers: null,
            zIndex: 2
        },
        'Bank Customer Service Points': {
            color: '#9b242d',
            infoLabel: 'Bank Customer Service Points',
            providers: null,
            zIndex: 4
        },
        'District': {
            color: '#9b242d',
            infoLabel: 'District',
            providers: null,
            zIndex: 6
        },
        'Private Library': {
            color: '#3086ab',
            infoLabel: 'Private Library',
            providers: null,
            zIndex: 5
        },
        'Public Library': {
            color: '#977c00',
            infoLabel: 'Public Library',
            providers: null,
            zIndex: 7
        },
        'Village': {
            color: '#a4c78c',
            infoLabel: 'Village',
            providers: null,
            zIndex: 4
        },
        'Additional Primary Health Centres (APHC)': {
            color: '#9b242d',
            infoLabel: 'Additional Primary Health Centres (APHC)',
            providers: null,
            zIndex: 6
        },
        'ANM or District Training Centres': {
            color: '#3086ab',
            infoLabel: 'ANM or District Training Centres',
            providers: null,
            zIndex: 5
        },
        'Approved Nursing Training Centres (Private Sector)': {
            color: '#977c00',
            infoLabel: 'Approved Nursing Training Centres (Private Sector)',
            providers: null,
            zIndex: 7
        },
        'Community Health Centre (CHC)/First Referral Units': {
            color: '#d5cb98',
            infoLabel: 'Community Health Centre (CHC)/First Referral Units',
            providers: null,
            zIndex: 4
        },
        'District Hospitals': {
            color: '#ce6b29',
            infoLabel: 'District Hospitals',
            providers: null,
            zIndex: 5
        },
        'Medical Colleges and Hospitals': {
            color: '#59452a',
            infoLabel: 'Medical Colleges and Hospitals',
            providers: null,
            zIndex: 7
        },
        'Primary Health Centre (PHC)': {
            color: '#8cb7c7',
            infoLabel: 'Primary Health Centre (PHC)',
            providers: null,
            zIndex: 4
        },
        'Private hospitals and clinics': {
            color: '#d098d5',
            infoLabel: 'Private hospitals and clinics',
            providers: null,
            zIndex: 5
        },
        'Sub Divisional District Hospitals': {
            color: '#a4c78c',
            infoLabel: 'Sub Divisional District Hospitals',
            providers: null,
            zIndex: 7
        },
        'Sub Health Centres': {
            color: '#d59898',
            infoLabel: 'Sub Health Centres',
            providers: null,
            zIndex: 7
        },
        'Nursing Schools': {
            color: '#567d54',
            infoLabel: 'Nursing Schools',
            providers: null,
            zIndex: 4
        },
        'Dairy Processors': {
            color: '#9b242d',
            infoLabel: 'Dairy Processors',
            providers: null,
            zIndex: 6
        },
        'Day old chick hatcheries': {
            color: '#3086ab',
            infoLabel: 'Day old chick hatcheries',
            providers: null,
            zIndex: 5
        },
        'Private sector Agricultural service providers': {
            color: '#977c00',
            infoLabel: 'Private sector Agricultural service providers',
            providers: null,
            zIndex: 7
        },
        'Government Vets': {
            color: '#d5cb98',
            infoLabel: 'Government Vets',
            providers: null,
            zIndex: 4
        },
        'Market Locations': {
            color: '#ce6b29',
            infoLabel: 'Market Locations',
            providers: null,
            zIndex: 5
        },
        'Agro-dealers': {
            color: '#59452a',
            infoLabel: 'Agro-dealers',
            providers: null,
            zIndex: 7
        },
        'Warehouse/Storage/Aggregation Centres': {
            color: '#8cb7c7',
            infoLabel: 'Warehouse/Storage/Aggregation Centres',
            providers: null,
            zIndex: 4
        },
        'Dairy chilling plants': {
            color: '#d098d5',
            infoLabel: 'Dairy chilling plants',
            providers: null,
            zIndex: 7
        },
        'Processors/value addition points': {
            color: '#a4c78c',
            infoLabel: 'Processors/value addition points',
            providers: null,
            zIndex: 7
        },
        'Farmer Organisations and Cooperatives': {
            color: '#d59898',
            infoLabel: 'Farmer Organisations and Cooperatives',
            providers: null,
            zIndex: 4
        },
        'Artificial Insemination Centres': {
            color: '#567d54',
            infoLabel: 'Artificial Insemination Centres',
            providers: null,
            zIndex: 4
        },
        'National/Regional/State Research Stations': {
            color: '#b6985e',
            infoLabel: 'National/Regional/State Research Stations',
            providers: null,
            zIndex: 5
        },
        'Seed Multipliers': {
            color: '#ff5d5d',
            infoLabel: 'Seed Multipliers',
            providers: null,
            zIndex: 7
        }

    };
    var ProviderData = {
        "Commercial Bank": [
            "ABC Bank (Kenya)",
            "Bank of Africa",
            "Bank of Baroda",
            "Bank of India",
            "Barclays Bank",
            "CFC Stanbic Bank",
            "Chase Bank (Kenya)",
            "Citibank",
            "Commercial Bank of Africa",
            "Consolidated Bank of Kenya",
            "Cooperative Bank of Kenya",
            "Credit Bank",
            "Development Bank of Kenya",
            "Diamond Trust Bank",
            "Dubai Bank Kenya",
            "Ecobank",
            "Equatorial Commercial Bank",
            "Equity Bank",
            "Family Bank",
            "Fidelity Commercial Bank Limited",
            "First Community Bank",
            "Giro Commercial Bank",
            "Guarantee Trust Bank (GT)",
            "Guardian Bank",
            "Gulf African Bank",
            "Habib Bank",
            "Habib Bank AG Zurich",
            "Housing Finance",
            "I&M Bank",
            "Imperial Bank Kenya",
            "Jamii Bora Bank",
            "Kenya Commercial Bank",
            "K-Rep Bank",
            "Middle East Bank Kenya",
            "National Bank of Kenya",
            "NIC Bank",
            "Oriental Commercial Bank",
            "Paramount Universal Bank",
            "Prime Bank (Kenya)",
            "Standard Chartered Kenya",
            "Trans National Bank Kenya",
            "United Bank of Africa",
            "Victoria Commercial Bank"
        ],
        "Bank Agent": [
            "Kenya Commercial Bank",
            "PostBank",
            "Cooperative Bank",
            "Equity Bank",
            "Family Bank",
            "Other Service Provider"
        ],
        "Mobile Money Agent": [
            'Airtel',
            'Safaricom',
            'Yu Cash',
            'Orange',
            'Tangaza'
        ],
        "Money Transfer Service": [
            "Money Gram",
            "Western Union",
            "Express Money",
            "Other Service Provider"
        ]
    };
    var CICOs = [];
    var CICOsLandUse = [];
    var CICOsproviders = [];
    service.CICOsTotal = 0;

    service.Kenya = {

        "CountryName": "Kenya",
        "MapCenter": {
            "Latitude": 0.57128,
            "Longitude": 37.789536
        },
        "MapZoom": 6,
        "QuickStats": {
        "totalPopulation": 40357237,
            "urbanPct": .073,
            "ruralPct": .927,
            "within5Km": .767,
            "ruralpop": 37393023,
            "urbanpop": 2964013
        },
        'Financial Service': {
            color: 'rgb(157, 33, 41)'
        },
        'Library': {
            color: 'rgb(42, 133, 173)'
        },
        'Agriculture': {
            color: 'rgb(127, 157, 106)'
        },
        'Health': {
            color: 'rgb(209, 110, 35)'
        }
    };

    service.getCICOsCounts = function(){
        // KENYA
        $http.get('http://spatialserver.spatialdev.com/services/tables/cicos_2013/query?where=country%3D%27Kenya%27&returnfields=type&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type&statsdef=count%3Atype').
            success(function (data) {
                //reset array to prevent duplicates
                for (var i = 0; i < data.features.length; i++) {
                    CICOs.push(
                        {
                            "type": data.features[i].properties.type,
                            "count": data.features[i].properties.count_type,
                            "selected": false
                        }
                    );
                    service.CICOsTotal += parseInt(CICOs[i].count);
                };

                //service.pctPerType(CICOs);
                for (var i = 0; i < CICOs.length; i++) {

                    CICOs[i]["pct"] = ((parseInt(CICOs[i].count) / service.CICOsTotal));

                    if(CICOs[i].type=='Money Transfer Service') {
                        CICOs[i].viewAll = true;
                        CICOs[i].providers = [];
                        ProviderData["Money Transfer Service"].forEach(function (val) {
                            CICOs[i].providers.push({type: val, selected: true});
                        });
                    }
                    if(CICOs[i].type=="Commercial Bank") {
                        CICOs[i].viewAll = true;
                        CICOs[i].providers = [];
                        ProviderData["Commercial Bank"].forEach(function (val) {
                            CICOs[i].providers.push({type: val, selected: true});
                        });
                    }
                    if(CICOs[i].type=="Bank Agent") {
                        CICOs[i].viewAll = true;
                        CICOs[i].providers = [];
                        ProviderData["Bank Agent"].forEach(function (val) {
                            CICOs[i].providers.push({type: val, selected: true});
                        });
                    }
                    if(CICOs[i].type=="Mobile Money Agent") {
                        CICOs[i].viewAll = true;
                        CICOs[i].providers = [];
                        ProviderData["Mobile Money Agent"].forEach(function (val) {
                            CICOs[i].providers.push({type: val, selected: true});
                        });
                    }

                }

                // Sort sector array by count
                CICOs.sort(function (a, b) {
                    return b.count - a.count;
                });

                service.CICOsTypeTotal_Kenya = CICOs.length;
            }).
            error(function (data) {
                alert(data);
            });



    };
    service.getCICOsUrbanRuralCounts = function () {
        $http.get('http://spatialserver.spatialdev.com/services/tables/cicos_2013/query?where=country%3D%27Kenya%27&returnfields=type%2Cland_use&format=%20geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type%2Cland_use&statsdef=count%3Atype').
            success(function (data) {
                for (var i = 0; i < data.features.length; i++) {
                    CICOsLandUse.push(
                        {
                            "type": data.features[i].properties.type,
                            "count": data.features[i].properties.count_type,
                            "land_use": data.features[i].properties.land_use,
                            "selected": false
                        }
                    );
                }

            }).
            error(function (data) {
                alert(data);
            });
    };

    service.getCICOsCounts();
    service.getCICOsUrbanRuralCounts();
    service.Layer = {
        type: 'pbf',
        name: 'FSP Kenya',
        url: "http://spatialserver.spatialdev.com/services/vector-tiles/cicos_2013_kenya/{z}/{x}/{y}.pbf",
        debug: false,
        clickableLayers: [],

        getIDForLayerFeature: function(feature) {
            return "";
        },

        /**
         * The filter function gets called when iterating though each vector tile feature (vtf). You have access
         * to every property associated with a given feature (the feature, and the layer). You can also filter
         * based of the context (each tile that the feature is drawn onto).
         *
         * Returning false skips over the feature and it is not drawn.
         *
         * @param feature
         * @returns {boolean}
         */
        filter: function(feature, context) {
            //return feature.properties.country == 'Kenya';
            return true;
        },

        /**
         * When we want to link events between layers, like clicking on a label and a
         * corresponding polygon freature, this will return the corresponding mapping
         * between layers. This provides knowledge of which other feature a given feature
         * is linked to.
         *
         * @param layerName  the layer we want to know the linked layer from
         * @returns {string} returns corresponding linked layer
         */
        layerLink: function(layerName) {
            if (layerName.indexOf('_label') > -1) {
                return layerName.replace('_label', '');
            }
            return layerName + '_label';
        },

        /**
         * Specify which features should have a certain z index (integer).  Lower numbers will draw on 'the bottom'.
         *
         * @param feature - the PBFFeature that contains properties
         */
        layerOrdering: function(feature){
            //This only needs to be done for each type, not necessarily for each feature. But we'll start here.
            if(feature && feature.properties){
                feature.properties.zIndex = CICO_Config[feature.properties.type].zIndex || 5;
            }
        },

        style: function(feature) {
            var style = {};
            var selected = style.selected = {};
            var pointRadius = 1;

            function ScaleDependentPointRadius(zoom){
                //Set point radius based on zoom
                var pointRadius = 1;
                if(zoom >= 0 && zoom <= 7){
                    pointRadius = 1;
                }
                else if(zoom > 7 && zoom <= 10){
                    pointRadius = 3;
                }
                else if(zoom > 10){
                    pointRadius = 4;
                }

                return pointRadius;
            }


            var type = feature.type;
            switch (type) {
                case 1: //'Point'
                    // unselected
                    style.color = 'rgb(157, 33, 41)';
                    style.radius = ScaleDependentPointRadius;
                    // selected
                    selected.color = 'rgba(255,255,0,0.5)';
                    selected.radius = 5;
                    break;
                case 2: //'LineString'
                    // unselected
                    style.color = 'rgba(161,217,155,0.8)';
                    style.size = 3;
                    // selected
                    selected.color = 'rgba(255,25,0,0.5)';
                    selected.size = 3;
                    break;
                case 3: //'Polygon'
                    // unselected
                    style.color = 'rgba(149,139,255,0.4)';
                    style.outline = {
                        color: 'rgb(20,20,20)',
                        size: 2
                    };
                    // selected
                    selected.color = 'rgba(255,25,0,0.3)';
                    selected.outline = {
                        color: '#d9534f',
                        size: 3
                    };
            }

            return style;
        }

    };

    service.Kenya = {
        "CountryName": "Kenya",
        "MapCenter": {
            "Latitude": 0.57128,
            "Longitude": 37.789536
        },
        "MapZoom": 6,
        "QuickStats": {
            "totalPopulation": 40357237,
            "urbanPct": .073,
            "ruralPct": .927,
            "within5Km": .767,
            "ruralpop": 37393023,
            "urbanpop": 2964013
        }
    };

    service.Kenya.QuickStats["totpop5km"] = (service.Kenya.QuickStats.within5Km * service.Kenya.QuickStats.totalPopulation);

    service.CICO_Config = CICO_Config;
    service.CICOs_Counts = CICOs;
    service.CICOs_Providers = CICOsproviders;

    return service;

});

