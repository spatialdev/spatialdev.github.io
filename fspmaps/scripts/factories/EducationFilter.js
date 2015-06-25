/**
 * Created by DBaah on 6/23/15.
 */
/**
 * Created by SpatialDev on 1/6/15.
 */
/**
 * Created by Daniel Baah <dbaah@spatialdev.com>
 *       on 1/6/15.
 */

module.exports = angular.module('SpatialViewer').factory('EducationFilterFactory', function ($http) {

    var Education = [];
    var service = {};
    var type_url = 'http://spatialserver.spatialdev.com/services/tables/education_2015/query?returnfields=type&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type&statsdef=count%3Atype'
    service.EducationTotal = 0;

    service.getEducationCounts = function(){
        $http.get(type_url).
            success(function (data) {
                for (var i = 0; i < data.features.length; i++) {
                    Education.push({
                        "type": data.features[i].properties.type,
                        "count": data.features[i].properties.count_type,
                        "land_use": data.features[i].properties.land_use,
                        "selected": false
                    });
                    service.EducationTotal += parseInt(Education[i].count);
                }
                // Calculate percentage per type
                for(var i=0;i<Education.length;i++){
                    Education[i]["pct"]=((parseInt(Education[i].count)/service.EducationTotal));
                };
                // Sort sector array by count
                Education.sort(function(a,b){
                    return b.count- a.count;
                });
            }).
            error(function (data) {
                alert(data);
            });
    };
    service.getEducationCounts();

    service.Layer = {
        type: 'pbf',
        name: 'FSP Uganda Education 2015',
        url: "http://spatialserver.spatialdev.com/services/vector-tiles/education_2015_uganda/{z}/{x}/{y}.pbf?fields=type,submission_id",
        debug: false,
        clickableLayers: null,

        getIDForLayerFeature: function(feature) {
            return feature.properties['submission_id'];
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

        onClick: function(evt){
            if(evt && evt.features){
                evt.features.forEach(function(f){
                    f.vtf.select();
                });
            }
        },
        onMouseMove: function(evt){
            if(evt && evt.features){
                console.log("moused over " + evt.features.length);
            }
        },

        /**
         * Specify which features should have a certain z index (integer).  Lower numbers will draw on 'the bottom'.
         *
         * @param feature - the PBFFeature that contains properties
         */
        layerOrdering: function(feature){
            //This only needs to be done for each type, not necessarily for each feature. But we'll start here.
            if(feature && feature.properties){
                feature.properties.zIndex = 5;
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
                    style.color = 'rgb(42, 133, 173)';
                    style.radius = ScaleDependentPointRadius;
                    // selected
                    selected.color = 'rgb(42, 133, 173)';
                    selected.radius = 7;
                    selected.strokeStyle = 'rgba(255,255,255,0.5)';
                    selected.lineWidth = 2;
                    //selected.outline = {
                    //  strokeStyle: 'rgb(20,20,20)',
                    //  lineWidth: 2
                    //};
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
    service.Education_Counts = Education;

    return service;

});

