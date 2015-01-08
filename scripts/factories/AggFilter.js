/**
 * Created by SpatialDev on 1/6/15.
 */
/**
 * Created by Daniel Baah <dbaah@spatialdev.com>
 *       on 1/6/15.
 */

module.exports = angular.module('SpatialViewer').factory('AggFilterFactory', function () {

    var service = {};

    var Agg_Config =  {
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

    service.checkAll = function (sector, selection,selectall) {

        switch(selection) {
            case 'agriculture':
                if (selectall) {
                    selectall = false;
                    service.selectall = false;
                    service.checkBool = "Check All";
                    console.log("factory check bool: " + service.checkBool);
                    console.log("factory selected all: " + selectall);
                    console.log("service selected all: " + service.selectall);
                } else {
                    selectall = true;
                    service.selectall = true;
                    service.checkBool = "Uncheck All";
                    console.log("factory check bool: " + service.checkBool);
                    console.log("factory selected all: " + selectall);
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

    service.Layer = {
        url: "http://spatialserver.spatialdev.com/services/postgis/agriculture_2014/geom/vector-tiles/{z}/{x}/{y}.pbf?fields=type,id",
        debug: false,
        type: "pbf",
        name: "Agriculture",
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
              feature.properties.zIndex = Agg_Config[feature.properties.type].zIndex || 5;
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
                    style.color = Agg_Config[feature.properties.type].color;
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
            //if(Object.keys(_FSP.AggListBuilder.GetFilterObject()).length == 0) return;
            //
            ////We have the buffer as geojson.  Send it to the point table to intersect
            //var tablePostArgs = {
            //  returnfields: 'lat,lng,id,type,name,photos,irrigation_pumps,farm_tractors,seed,fertilizer,chemical_inputs,organic_fertilizers,vet_supplies,tools_equipment,seed_muliplier,storage_capacity,urban_center_dist,seed_muliplier,vacination,inseminaiton,breeding,modernized',
            //  format: 'geojson',
            //  where: _FSP.Utilities.buildPostGresQueryExpression('agriculture', _FSP.AggListBuilder.AggSelections),
            //  returnGeometry: 'yes',
            //  intersects: buffer,
            //  limit: 200 //add a limit of 200 so we don't get carried away
            //};
            //var pointUrl = "http://spatialserver.spatialdev.com/services/tables/agriculture_2014/query";
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
            //    var html = _FSP.PopupBuilder.addResults(points.features, _FSP.Config.AG_LAYERS, 'agriculture', function (currentPoint) {
            //      if (currentPoint) {
            //        //Highlight point.
            //        var layers = pbfSource.getLayers();
            //        if (layers) {
            //          var layer = layers[Object.keys(layers)[0]]; //Library layer
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

