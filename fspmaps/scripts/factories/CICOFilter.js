/**
 * Created by Daniel Baah <dbaah@spatialdev.com>
 *       on 1/6/15.
 */

module.exports = angular.module('SpatialViewer').factory('CICOFilterFactory', function ($http) {

    var CICO_Config = {
        'Agriculture': {
            color: '#D16E23',
            infoLabel: 'Agriculture',
            providers: null,
            zIndex: 6
        },
        'CICOS': {
            color: '#9D2129',
            infoLabel: 'Financial Service',
            providers: null,
            zIndex: 8
        },
        'Education': {
            color: '#2A85AD',
            infoLabel: 'Education',
            providers: null,
            zIndex: 7
        }

    };

    var CICOs = [];
    var CICOsLandUse = [];
    var service = {};
    service.selectedCountry = 'India';
    service.CICOsTotal = 0;

    service.getCICOsCounts = function () {
        // INDIA
        $http.get('http://spatialserver.spatialdev.com/services/tables/cicos_2014/query?where=country%3D%27India%27&returnfields=type&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type&statsdef=count%3Atype').
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
                }
                // Calculate percentage per type
                //service.pctPerType(CICOs);
                for (var i = 0; i < CICOs.length; i++) {
                    CICOs[i]["pct"] = ((parseInt(CICOs[i].count) / service.CICOsTotal));
                }

                // Sort sector array by count
                CICOs.sort(function (a, b) {
                    return b.count - a.count;
                });
            }).
            error(function (data) {
                alert(data);
            });
    };
    service.getCICOsUrbanRuralCounts = function () {
        $http.get('http://spatialserver.spatialdev.com/services/tables/cicos_2014/query?where=country%3D%27India%27&returnfields=type%2Cland_use&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type%2Cland_use&statsdef=count%3Atype').
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
    service.getCICOsUrbanRuralCounts();
    service.getCICOsCounts();

    service.checkAll = function (sector, selection, selectall) {

        switch (selection) {
            case 'CICOS':
                if (selectall) {
                    selectall = false;
                    service.selectall = false;
                    service.checkBool = "View All";
                    console.log(service.checkBool);
                    console.log("CICO factory check bool: " + service.checkBool);
                    console.log("CICO factory selected all: " + selectall);
                    console.log("CICO service selected all: " + service.selectall);
                } else {
                    selectall = true;
                    service.selectall = true;
                    service.checkBool = "View All";
                    console.log(service.checkBool);
                    console.log("CICO factory check bool: " + service.checkBool);
                    console.log("CICO factory selected all: " + selectall);
                    console.log("CICO service selected all: " + service.selectall);
                }
                sector.forEach(function (names) {
                    names.selected = selectall;
                });
                break;
        }
    };
    service.clearAll = function (sector, selection, selectall) {

        if (!selectall) {
            selectall = false;
            service.selectall = false;
            service.checkBool = "Check All";
            console.log("CICO factory check bool: " + service.checkBool);
            console.log("CICO factory selected all: " + selectall);
            console.log("CICO service selected all: " + service.selectall);
        }
        sector.forEach(function (names) {
            names.selected = selectall;
        });
    };

    service.Layer = {
        url: "http://spatialserver.spatialdev.com/services/postgis/cicos_2014/geom/vector-tiles/{z}/{x}/{y}.pbf?fields=type,id",
        type: 'pbf',
        debug: false,
        name: 'India CICOS',
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
         * @param layerName the layer we want to know the linked layer from
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
            //if (feature && feature.properties) {
            //  feature.properties.zIndex = _FSP.Config.CICO_LAYERS[feature.properties.type].zIndex || 5;
            //}
        },

        style: function (feature) {
            var style = {};
            var selected = style.selected = {};
            var pointRadius = 1;

            function ScaleDependentPointRadius(zoom) {
                //Set point radius based on zoom
                var pointRadius = 1;
                if (zoom >= 0 && zoom <= 7) {
                    pointRadius = 1;
                }
                else if (zoom > 7 && zoom <= 10) {
                    pointRadius = 3;
                }
                else if (zoom > 10) {
                    pointRadius = 4;
                }

                return pointRadius;
            }

            var type = feature.type;
            switch (type) {
                case 1: //'Point'
                    // unselected
                    style.color = 'rgb(157, 33, 41);';
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

        onClick: function (evt) {
            //If nearby tool (or any tool) is active, then abort.
            //if(_FSP.ToolMaster.activeTool.active == true) return;

            //  var buffer = _FSP.ConfettiLoader.clickToBuffer(evt);
            //
            //  //If all are unchecked, then exit out of here
            //  if(Object.keys(_FSP.LayerListBuilder.GetFilterObject()).length == 0) return;
            //
            //  _FSP.TableBuilder.scrapeCICOSelections();
            //
            //  //We have the buffer as geojson.  Send it to the point table to intersect
            //  var tablePostArgs = {
            //    returnfields: 'lat,lng,name,assoc_bank,assoc_business,form_submitted,type,id,photos',
            //    format: 'geojson',
            //    where: _FSP.ProximityTool.buildCICOQueryExpression(_FSP.TableBuilder.CICOSelections),
            //    returnGeometry: 'yes',
            //    intersects: buffer,
            //    limit: 200 //add a limit of 200 so we don't get carried away
            //  };
            //  var pointUrl = "http://spatialserver.spatialdev.com/services/tables/cicos_2014/query";
            //
            //  $.post(pointUrl, tablePostArgs).success(function (points, qstatus) {
            //    //GeoJSON result of points
            //    if (!points || points.error) {
            //      console.error('Unable to fetch feature: ' + points.error);
            //      return;
            //    }
            //
            //    //point is a featurecollection. open the panel and show some stuff.
            //    if (points && points.features && points.features.length > 0) {
            //      var html = _FSP.PopupBuilder.addResults(points.features, _FSP.Config.CICO_LAYERS, 'fsp', function (currentPoint) {
            //        if (currentPoint) {
            //          //Highlight point.
            //          var layers = pbfSource.getLayers();
            //          if (layers) {
            //            var layer = layers[Object.keys(layers)[0]]; //Cico layer
            //            if (layer) {
            //              //try to pluck vtf
            //              _FSP.MapBuilder.selectedConfetti = layer.features[currentPoint.properties.id];
            //              if (_FSP.MapBuilder.selectedConfetti) {
            //                //Set feature to be big and high z-index
            //                _FSP.MapBuilder.selectedConfetti.select();
            //                if (_FSP.MapBuilder.previouslySelectedConfetti) _FSP.MapBuilder.previouslySelectedConfetti.deselect();
            //                _FSP.MapBuilder.previouslySelectedConfetti = _FSP.MapBuilder.selectedConfetti;
            //              }
            //            }
            //          }
            //        }
            //      });
            //      if(html){
            //        openCICODetails(html);
            //      }
            //    }
            //  });
            //
        }

    };
    service.CICO_Config = CICO_Config;
    service.CICOs_Counts = CICOs;
    service.CICOs_LandUse_Counts = CICOsLandUse;

    return service;

});

