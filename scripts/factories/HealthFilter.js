/**
 * Created by SpatialDev on 1/6/15.
 */
/**
 * Created by Daniel Baah <dbaah@spatialdev.com>
 *       on 1/6/15.
 */

module.exports = angular.module('SpatialViewer').factory('HealthFilterFactory', function () {

    var service = {};

    var Health_Config = {
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
        }

    };

    service.checkAll = function (sector, selection, selectall) {

        switch(selection) {
            case 'health':
                if (selectall) {
                    selectall = false;
                    service.checkBool = "Check All";
                    service.selectall = false;
                    console.log("factory check bool: " + service.checkBool);
                    console.log("factory selected all: " + selectall);
                    console.log("service selected all: " + service.selectall);
                } else {
                    selectall = true;
                    service.checkBool = "Uncheck All";
                    service.selectall = true;
                    console.log("factory check bool: " + service.checkBool);
                    console.log("factory select all: " + selectall);
                    console.log("service selected all: " + service.selectall);

                }
                angular.forEach(sector, function (names) {
                    names.selected = selectall;
                });
                break;
        }
    };

    service.clearAll = function (sector, selection,selectall) {

        if (!selectall) {
            selectall = false;
            service.selectall = false;
            service.checkBool = "Check All";
        }
        angular.forEach(sector, function (names) {
            names.selected = selectall;
        });
    };

    service.Layer =  {
        url: "http://spatialserver.spatialdev.com/services/postgis/health_2014/geom/vector-tiles/{z}/{x}/{y}.pbf?fields=type,id",
        debug: false,
        type: "pbf",
        name: "Health",
        clickableLayers: null,

        // we want confetti to be on top of other layers, such as the contextual layers
        zIndex: 1000,

        getIDForLayerFeature: function (feature) {
            return feature.properties.id;
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
        filter: function (feature, context) {
            //return feature.properties.type != 'Mobile Money Agent';
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
        layerLink: function (layerName) {
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
        layerOrdering: function (feature) {
            //This only needs to be done for each type, not necessarily for each feature. But we'll start here.
            if (feature && feature.properties) {
              feature.properties.zIndex = Health_Config[feature.properties.type].zIndex || 5;
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
                    style.color = Health_Config[feature.properties.type].color;
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
        },

        onClick: function(evt) {
            //If nearby tool (or any tool) is active, then abort.
            //if(_FSP.ToolMaster.activeTool.active == true) return;
            //
            //var buffer = _FSP.ConfettiLoader.clickToBuffer(evt);
            //
            //if(Object.keys(_FSP.HealthListBuilder.GetFilterObject()).length == 0) return;
            //
            ////We have the buffer as geojson.  Send it to the point table to intersect
            //var tablePostArgs = {
            //  returnfields: 'lat,lng,id,type,name,photos,delivery_center,separate_maternity,sba_resource,female_sterilization,intra_uterine,condoms,oral_pills,pharmacist,csection_emonc,phc_24_7,blood_transfusion,immunization,cold_chain_equipment',
            //  format: 'geojson',
            //  where: _FSP.Utilities.buildPostGresQueryExpression('health', _FSP.HealthListBuilder.HealthSelections),
            //  returnGeometry: 'yes',
            //  intersects: buffer,
            //  limit: 200 //add a limit of 200 so we don't get carried away
            //};
            //var pointUrl = "http://spatialserver.spatialdev.com/services/tables/health_2014/query";
            //
            //$.post(pointUrl, tablePostArgs).success(function (points, qstatus) {
            //  //GeoJSON result of points
            //  if (!points || points.error) {
            //    console.error('Unable to fetch feature: ' + points.error);
            //    return;
            //  }
            //
            //  //point is a featurecollection. open the panel and show some stuff.
            //  if (points && points.features && points.features.length > 0) {
            //    var html = _FSP.PopupBuilder.addResults(points.features, _FSP.Config.HEALTH_LAYERS, 'health', function (currentPoint) {
            //      if (currentPoint) {
            //        //Highlight point.
            //        var layers = pbfSource.getLayers();
            //        if (layers) {
            //          var layer = layers[Object.keys(layers)[0]];
            //          if (layer) {
            //            //try to pluck vtf
            //            _FSP.MapBuilder.selectedConfetti = layer.features[currentPoint.properties.id];
            //            if (_FSP.MapBuilder.selectedConfetti) {
            //              //Set feature to be big and high z-index
            //              _FSP.MapBuilder.selectedConfetti.select();
            //              if (_FSP.MapBuilder.previouslySelectedConfetti) _FSP.MapBuilder.previouslySelectedConfetti.deselect();
            //              _FSP.MapBuilder.previouslySelectedConfetti = _FSP.MapBuilder.selectedConfetti;
            //            }
            //          }
            //        }
            //      }
            //    });
            //    if(html){
            //      openCICODetails(html);
            //    }
            //  }
            //});

        }

    };

    return service;

});

