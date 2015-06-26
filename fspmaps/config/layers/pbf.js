var layer = module.exports = {};

layer.OnClickEvent = function (index, points, sector) {

    if (points.length > 0) {

        if ($scope.ALLpoints.length < 2) { // check if more then one sector is selected
            index = $scope.detailsIndex;
            var currentPoint = points[0][index];

            if (currentPoint) {
                var layerindex = overlayNames.indexOf(sector);
                var currOverlay = overlays[layerindex];

                var layers = currOverlay.getLayers();
                if (layers) {
                    var layer = layers[Object.keys(layers)[0]];
                    if (layer) {
                        var id = "id";
                        if(sector == "cicos_uganda"){
                            id = "submission_id"
                        }
                        MapBuilder.selectedConfetti = layer.features[currentPoint.properties[id]];
                        if (MapBuilder.selectedConfetti) {
                            MapBuilder.selectedConfetti.select();
                            if (MapBuilder.previouslySelectedConfetti) MapBuilder.previouslySelectedConfetti.deselect();
                            MapBuilder.previouslySelectedConfetti = MapBuilder.selectedConfetti;
                        }
                    }
                }
            }
        } else {
            // handles multiple sectors
            index = $scope.detailsIndex;

            var allpoints = [];

            //combine feature points from all sectors into one array 'allpoints'
            points.forEach(function (val) {
                val.forEach(function (v) {
                    allpoints.push(v);
                });
            });

            var currentPoint = allpoints[index];

            if (currentPoint) {
                var layerindex = (currentPoint.properties.sector == "fsp") ? overlayNames.indexOf(sector) : overlayNames.indexOf(currentPoint.properties.sector);
                var currOverlay = overlays[layerindex];

                var layers = currOverlay.getLayers();
                if (layers) {
                    var layer = layers[Object.keys(layers)[0]];
                    if (layer) {
                        var id = "id";
                        if(sector == "cicos_uganda"){
                            id = "submission_id"
                        }
                        MapBuilder.selectedConfetti = layer.features[currentPoint.properties.id];
                        if (MapBuilder.selectedConfetti) {
                            MapBuilder.selectedConfetti.select();
                            if (MapBuilder.previouslySelectedConfetti && (MapBuilder.selectedConfetti.id !== MapBuilder.previouslySelectedConfetti.id)) MapBuilder.previouslySelectedConfetti.deselect();
                            MapBuilder.previouslySelectedConfetti = MapBuilder.selectedConfetti;
                        }
                    }
                }
            }


        }
    }
}


layer.gadm2014kenya = {
  type: 'pbf',
  name: 'GADM 2014 Kenya',
  url: "http://spatialserver.spatialdev.com/services/vector-tiles/gadm2014kenya/{z}/{x}/{y}.pbf",
  debug: false,
  clickableLayers: ['gadm0', 'gadm1', 'gadm2', 'gadm3', 'gadm4', 'gadm5'],

  getIDForLayerFeature: function(feature) {
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
  filter: function(feature, context) {
    if (feature.layer.name === 'gadm1_label' || feature.layer.name === 'gadm1') {
      return true;
    }

    return false;
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

  styleFor: function(feature) {
    var style = {};
    var selected = style.selected = {};

    var type = feature.type;
    switch (type) {
      case 1: //'Point'
        // unselected
        style.color = '#ff0000';
        style.radius = 5;
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

    if (feature.layer.name === 'gadm1_label') {
      style.staticLabel = function() {
        var style = {
          html: feature.properties.name,
          iconSize: [125,30],
          cssClass: 'label-icon-text'
        };
        return style;
      };
    }

    return style;
  }

};

layer.osm_seattle = {
  type: 'pbf',
  name: 'OSM Seattle ',
  url: "http://localhost:3000/services/vector-tiles/osm_seattle/{z}/{x}/{y}.pbf",
  debug: false,
  clickableLayers: [],

  getIDForLayerFeature: function(feature) {
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
  filter: function(feature, context) {
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

  styleFor: function(feature) {
    var style = {};
    var selected = style.selected = {};

    var type = feature.type;
    switch (type) {
      case 1: //'Point'
        // unselected
        style.color = '#ff0000';
        style.radius = 5;
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

    if (feature.layer.name === 'gadm1_label') {
      style.staticLabel = function() {
        var style = {
          html: feature.properties.name,
          iconSize: [125,30],
          cssClass: 'label-icon-text'
        };
        return style;
      };
    }

    return style;
  }

};

layer.gaul_fsp = {
  type: 'pbf',
  name: 'OSM Seattle ',
  url: "http://spatialserver.spatialdev.com/services/vector-tiles/GAUL_FSP/{z}/{x}/{y}.pbf",
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

  styleFor: function(feature) {
    var style = {};
    var selected = style.selected = {};

    var type = feature.type;
    switch (type) {
      case 1: //'Point'
        // unselected
        style.color = '#ff0000';
        style.radius = 5;
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

layer.cicos_kenya = {
  type: 'pbf',
  name: 'FSP Kenya',
  url: "http://spatialserver.spatialdev.com/services/vector-tiles/cicos_2013_kenya/{z}/{x}/{y}.pbf?fields=type,id,providers",
  debug: false,
  clickableLayers: [],

  getIDForLayerFeature: function(feature) {
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
        style.color = CICO_Config[feature.properties.type].color;
        style.radius = ScaleDependentPointRadius;
        // selected
        selected.color = CICO_Config[feature.properties.type].color;
        selected.radius = 7;
        selected.strokeStyle = 'rgba(255,255,255,0.5)';
        selected.lineWidth = 2;
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

layer.cicos_uganda = {
    type: 'pbf',
    name: 'FSP Uganda 2015',
    url: "http://spatialserver.spatialdev.com/services/vector-tiles/uganda_cicos_2015/{z}/{x}/{y}.pbf?fields=type,submission",
    debug: false,
    clickableLayers: null,

    getIDForLayerFeature: function(feature) {
        return feature.properties['submission'];
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
                style.color = 'rgb(157, 33, 41)';
                style.radius = ScaleDependentPointRadius;
                // selected
                selected.color = 'rgb(157, 33, 41)';
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

layer.agriculture_uganda = {
    type: 'pbf',
    name: 'FSP Uganda Agriculture 2015',
    url: "http://spatialserver.spatialdev.com/services/vector-tiles/agriculture_2015_uganda/{z}/{x}/{y}.pbf?fields=type,submission_id",
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
                style.color = 'rgb(209, 110, 35)';
                style.radius = ScaleDependentPointRadius;
                // selected
                selected.color = 'rgb(209, 110, 35)';
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

layer.education_uganda = {
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

layer.cicos_nigeria = {
  type: 'pbf',
  name: 'FSP Nigeria',
  url: "http://spatialserver.spatialdev.com/services/vector-tiles/cicos_2013_nigeria/{z}/{x}/{y}.pbf?fields=type,id,providers",
  debug: false,
  clickableLayers: [],

  getIDForLayerFeature: function(feature) {
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
        style.color = CICO_Config[feature.properties.type].color;
        style.radius = ScaleDependentPointRadius;
        // selected
        selected.color = CICO_Config[feature.properties.type].color;
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

layer.CICOS = {
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
    if (feature && feature.properties) {
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
        style.color = 'rgb(157, 33, 41)';
        selected.radius = 7;
        selected.strokeStyle = 'rgba(255,255,255,0.5)';
        selected.lineWidth = 2;
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

layer.health =  {
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
    //if(feature.properties.type == 'Seed Multipliers'){
    //  return true;
    //} else {
    //  return false;
    //
    //}
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
        style.color = '#7F9D6A';
        style.radius = ScaleDependentPointRadius;
        // selected
        selected.color = '#7F9D6A';
        selected.radius = 7;
        selected.strokeStyle = 'rgba(255,255,255,0.5)';
        selected.lineWidth = 2;
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

layer.agriculture = {
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
    //if(feature.properties.type == 'Seed Multipliers'){
    //  return true
    //} else {
    //  return false;
    //}
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
        style.color = 'rgb(209, 110, 35)';
        style.radius = ScaleDependentPointRadius;
        // selected
        selected.color = 'rgb(209, 110, 35)';
        selected.radius = 7;
        selected.strokeStyle = 'rgba(255,255,255,0.5)';
        selected.lineWidth = 2;
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

layer.library = {
  url: "http://spatialserver.spatialdev.com/services/postgis/library_2014/geom/vector-tiles/{z}/{x}/{y}.pbf?fields=type,id",
  debug: false,
  type: 'pbf',
  name: 'Library',
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
      feature.properties.zIndex = CICO_Config[feature.properties.type].zIndex || 5;
    }
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
        style.color = 'rgb(42, 133, 173)';
        style.radius = ScaleDependentPointRadius;
        // selected
        selected.color = 'rgb(42, 133, 173)';
        selected.radius = 7;
        selected.strokeStyle = 'rgba(255,255,255,0.5)';
        selected.lineWidth = 2;
        break;
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
    //  if(_FSP.ToolMaster.activeTool.active == true) return;

    //var buffer = clickToBuffer(evt);
    //
    ////If all are unchecked, then exit out of here
    ////if(Object.keys(_FSP.LibraryListBuilder.GetFilterObject()).length == 0) return;
    //
    ////We have the buffer as geojson.  Send it to the point table to intersect
    //var tablePostArgs = {
    //    returnfields: 'lat,lng,name,type,id,photos,business_hours,staff_count,internet,public_computer_count,computer_fee',
    //    format: 'geojson',
    //    returnGeometry: 'yes',
    //    intersects: buffer,
    //    limit: 200 //add a limit of 200 so we don't get carried away
    //};
    //
    //if(LibraryWhereCaluse != ''){
    //    tablePostArgs.where = LibraryWhereCaluse
    //}
    //
    //var pointUrl = "http://spatialserver.spatialdev.com/services/tables/library_2014/query";
    //
    //$.post(pointUrl, tablePostArgs).success(function (points, qstatus) {
    //    //GeoJSON result of points
    //    if (!points || points.error) {
    //        console.error('Unable to fetch feature: ' + points.error);
    //        return;
    //    }
    //
    //    LibraryDetails = points;
    //
    //});

  }

};

// All possible CICO layer (combined from all countries)
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
    'Savings and credit co-operatives (SACCOs)': {
    color: '#cf8a57',
        infoLabel: 'Savings and credit co-operatives (SACCOs)',
        providers: null,
        zIndex: 10
},

'Mobile Money Agent': {
    color: '#8CB7C7',
    infoLabel: 'Mobile Money Agent',
    providers: null,
    zIndex: -1
  },
    'Microfinance Institute': {
        color: '#825D99',
        infoLabel: 'Microfinance Institute',
        providers: null,
        zIndex: 5
    },
    'Post offices': {
        color: '#FFFF00',
        infoLabel: 'Post offices',
        providers: null,
        zIndex: 6
},
    'Microfinance deposit taking institution': {
        color: '#ff5d5d',
        infoLabel: 'Microfinance deposit taking institution',
        providers: null,
        zIndex: 7
    },
  'MDIs': {
    color: '#825D99',
    infoLabel: 'MDI',
    providers: null,
    zIndex: 6
  },
    'Credit institutions': {
        color: '#6CA76B',
        infoLabel: 'Credit institutions',
        providers: null,
        zIndex: 8
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
