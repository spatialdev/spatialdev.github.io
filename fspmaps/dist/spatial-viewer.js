(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/config/layers/basemaps.js":[function(require,module,exports){
var layer = module.exports = {};

/**
 * Basemaps Panel List
 *
 * List of basemaps that get shown in the Basemaps Panel. Edit this to add or remove
 * basemaps that the user will see as choices. All basemaps, including ones not in this
 * list, can still be manually referenced in the url. This is just for the User Interface.
 */
layer.basemaps = [
  //'osmhot', //RW - this constantly causes the entire page to delay loading while it is waiting for c.tiles.openstreetmap.fr to load.
  'osm',
  'satellite',
  //'ortho',
  //'toner',
  'dark'
  //'github',
  //'mozilla',
  //'green',
  //'osmcycle',
  //'osmtransport',
  //'osmmapquest',
  //'natgeo',
  //'usgstopo',
  //'esritopo',
  //'ocean',
  //'lightgray',
  //'watercolor'
];


/**
 * Basemaps
 *
 * All basemap aliases that can be referred to in the url. The corresponding
 * path to the thumbnail in the Basemaps Panel should be:
 *    images/{aliasName}.jpg
 *
 */

//layer.osmhot = {
//  url: 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
//  name: 'Humanitarian OpenStreetMap',
//  type: 'basemap'
//};

//layer.redcross = {
//  url: 'https://{s}.tiles.mapbox.com/v3/americanredcross.hcji22de/{z}/{x}/{y}.png',
//  name: 'Red Cross',
//  type: 'basemap'
//};

layer.satellite = {
  url: 'https://{s}.tiles.mapbox.com/v3/examples.map-qfyrx5r8/{z}/{x}/{y}.png',
  name: 'Mapbox Satellite',
  type: 'basemap'
};

//layer.mozilla = {
//  url: 'http://{s}.tiles.mapbox.com/v3/mozilla-webprod.e91ef8b3/{z}/{x}/{y}.png',
//  name: 'Mozilla',
//  type: 'basemap'
//};
//
//layer.github = {
//  url: 'http://{s}.tiles.mapbox.com/v3/github.map-xgq2svrz/{z}/{x}/{y}.png',
//  name: 'Github',
//  type: 'basemap'
//};
//
//layer.green = {
//  url: 'http://{s}.tiles.mapbox.com/v3/examples.map-3gisupiu/{z}/{x}/{y}.png',
//  name: 'Green Theme',
//  type: 'basemap'
//};

layer.dark = {
  url: 'http://{s}.tiles.mapbox.com/v3/spatialdev.map-c9z2cyef/{z}/{x}/{y}.png',
  name: 'Dark Theme',
  type: 'basemap'
};

layer.osm = {
  url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
  name: 'Standard OpenStreetMap',
  type: 'basemap'
};

//layer.osmcycle = {
//  url: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
//  name: 'Cycle OpenStreetMap',
//  type: 'basemap'
//};
//
//layer.osmtransport = {
//  url: 'http://{s}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png',
//  name: 'Transport OpenStreetMap',
//  type: 'basemap'
//};
//
//layer.osmmapquest = {
//  url: 'http://otile3.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
//  name: 'MapQuest OpenStreetMap',
//  type: 'basemap'
//};
//
//layer.natgeo = {
//  url: 'http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
//  name: 'National Geographic',
//  type: 'basemap'
//};
//
//layer.usgstopo = {
//  url: 'http://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer/tile/{z}/{y}/{x}',
//  name: 'USGS Topographic',
//  type: 'basemap'
//};
//
//layer.ortho = {
//  url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
//  name: 'Orthographic',
//  type: 'basemap'
//};
//
//layer.ocean = {
//  url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}',
//  name: 'Ocean Bathymetric',
//  type: 'basemap'
//};
//
//layer.lightgray = {
//  url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
//  name: 'Light Gray',
//  type: 'basemap'
//};
//
//layer.esritopo = {
//  url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
//  name: 'Esri Topographic',
//  type: 'basemap'
//};
//
//layer.toner = {
//  url: 'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png',
//  name: 'Stamen Toner',
//  type: 'basemap'
//};
//
//layer.watercolor = {
//  url: 'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png',
//  name: 'Stamen Watercolor',
//  type: 'basemap'
//};

},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/config/layers/pbf.js":[function(require,module,exports){
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
    url: "http://spatialserver.spatialdev.com/services/vector-tiles/cicos_2015_uganda/{z}/{x}/{y}.pbf?fields=type,id",
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

},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/app.js":[function(require,module,exports){
/**
 * This is the entry point of the application. We declare the main module here and then configure the main router
 * that creates corresponding views. The array parameter for module declares this module's dependencies.
 */
var SpatialViewer = angular.module('SpatialViewer', ['angularFileUpload', 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'ngAnimate', 'ui.bootstrap', 'ui.slider']);

SpatialViewer.run(function ($rootScope, $state, $stateParams) {

  // It's very handy to add references to $state and $stateParams to the $rootScope
  // so that you can access them from any scope within your applications.For example,
  // <li ui-sref-active="active }"> will set the <li> // to active whenever
  // 'contacts.list' or one of its decendents is active.
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

  debug.$state = $state;
  debug.$stateParams = $stateParams;

  $rootScope.isState = function (stateName) {
    return $state.$current.name === stateName;
  };

  $rootScope.isParam = function(paramName) {
    var bool = $stateParams[paramName];
    if (!bool) {
      return false;
    }
    return true;
  };


  $rootScope.isNotParam = function(paramName) {
    var bool = $stateParams[paramName];
    if (!bool) {
      return true;
    }
    return false;
  };

  $rootScope.toggleParam = function(paramName) {
    var bool = $stateParams[paramName];
    if (!bool) {
      // mutex logic that makes only 1 panel open at a time
      for (var param in $stateParams) {
        if ($stateParams[param] === 'open') {
          $stateParams[param] = null;
        }
      }
      $stateParams[paramName] = 'open';
    } else {
      delete $stateParams[paramName];
    }
    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
  };

  $rootScope.setParamWithVal = function (paramName, val) {
    $stateParams[paramName] = val;
    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
  };
  debug.$rootScope = $rootScope;


  $rootScope.openParam = function(paramName) {
    var bool = $stateParams[paramName];
    if (!bool) {
      // mutex logic that makes only 1 panel open at a time
      for (var param in $stateParams) {
        if ($stateParams[param] === 'open') {
          $stateParams[param] = null;
        }
      }
      $stateParams[paramName] = 'open';
      var state = $state.current.name || 'main';
      $state.go(state, $stateParams);
    }
  };

  $rootScope.closeParam = function(paramName) {
    var bool = $stateParams[paramName];
    if (bool) {
      delete $stateParams[paramName];
      var state = $state.current.name || 'main';
      $state.go(state, $stateParams);
    }
  };

  $rootScope.isNotState = function (stateName) {
    return $state.$current.name !== stateName;
  };

  window.$state = $state;
  window.$stateParams = $stateParams;

});

SpatialViewer.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider
    .when('/default', '/map@1.3,32,7(dark),uganda')
    .when('/phl', '/map@1.3,32,7(dark),uganda')
    .otherwise(localStorage.getItem('defaultRoute') || '/map@1.3,32,7(dark),uganda');

  $stateProvider
    .state('main', {
      url: '/map@:lat,:lng,:zoom(*layers),:country?title&zoom-extent&stories&layers-panel&filters-panel&filters&legend&basemaps&info&theme&details-panel&country-summary&search-panel&tools&sf_id&level',
      views: {
        'details': {
          template: ' ',
          controller: 'MainCtrl'
        },
        'theme': {
          templateUrl: 'views/theme.html',
          controller: 'ThemeCtrl'
        }
      }
    })
    .state('upload', {
      url: '/map@:lat,:lng,:zoom(*layers)/upload?title&zoom-extent&stories&layers-panel&filters-panel&filters&legend&basemaps&info&theme&details-panel&country-summary&search-panel&tools&sf_id&level',
      views: {
        'details': {
          template: ' ',
          controller: 'MainCtrl'
        },
        'upload': {
          templateUrl: 'views/upload.html',
          controller: 'UploadCtrl'
        }
      }
    })
    .state('export', {
          url: '/map@:lat,:lng,:zoom(*layers)/export?title&zoom-extent&stories&layers-panel&filters-panel&filters&legend&basemaps&info&theme&details-panel&country-summary&search-panel&tools&sf_id&level',
          views: {
              'details': {
                  template: ' ',
                  controller: 'MainCtrl'
              },
              'export': {
                  templateUrl: 'views/export.html',
                  controller: 'ExportCtrl'
              }
          }
     });

});

SpatialViewer.directive('selectOnClick', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        this.select();
      });
    }
  };
});

/**
 * percent filter
 * https://gist.github.com/jeffjohnson9046/9470800
 */
SpatialViewer.filter('percentage', ['$filter', function ($filter) {
  return function (input, decimals) {
    return $filter('number')(input * 100, decimals) + '%';
  };
}]);
/**
 *  capitalize filter
 *  http://codepen.io/WinterJoey/pen/sfFaK
 */
SpatialViewer.filter('capitalize', function() {
  return function(input, all) {
    return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
  }
});

angular.module('SpatialViewer').directive('myShow', function($animate) {
  return {
    scope: {
      'myShow': '=',
      'afterShow': '&',
      'afterHide': '&'
    },
    link: function(scope, element) {
      scope.$watch('myShow', function(show, oldShow) {
        if (show) {
          $animate.removeClass(element, 'ng-hide', scope.afterShow);
        }
        if (!show) {
          $animate.addClass(element, 'ng-hide', scope.afterHide);
        }
      });
    }
  }
});

/**
 * Custom directive that disables hyperlink </a>
 * http://plnkr.co/edit/GkP1ukju4FWgBeprBLwj?p=preview
 *
 */

angular.module('SpatialViewer').directive('aDisabled', function() {
  return {
    compile: function(tElement, tAttrs, transclude) {
      //Disable ngClick
      tAttrs["ngClick"] = "!("+tAttrs["aDisabled"]+") && ("+tAttrs["ngClick"]+")";

      //Toggle "disabled" to class when aDisabled becomes true
      return function (scope, iElement, iAttrs) {
        scope.$watch(iAttrs["aDisabled"], function(newValue) {
          if (newValue !== undefined) {
            iElement.toggleClass("disabled", newValue);
          }
        });

        //Disable href on click
        iElement.on("click", function(e) {
          if (scope.$eval(iAttrs["aDisabled"])) {
            e.preventDefault();
          }
        });
      };
    }
  };
});


require('./services/LayerConfig');
require('./services/StoriesConfig');
require('./services/Vector/VectorProvider');
require('./services/Donuts');
require('./factories/india');
require('./factories/nigeria');
require('./factories/kenya');
require('./factories/uganda');
require('./factories/tanzania');
require('./factories/bangladesh');
require('./factories/sectordata');
require('./factories/EducationFilter');
require('./factories/CICOFilter');
require('./factories/HealthFilter');
require('./factories/LibraryFilter');
require('./factories/AgFilter');
require('./controllers/main');
require('./controllers/map');
require('./controllers/navbar');
require('./controllers/side-view');
require('./controllers/tools');
require('./controllers/layers');
require('./controllers/filters');
require('./controllers/details');
require('./controllers/legend');
require('./controllers/info');
require('./controllers/basemaps');
require('./controllers/breadcrumbs');
require('./controllers/zoom-extent');
require('./controllers/theme');
require('./controllers/upload');
require('./controllers/search');
require('./controllers/export');
require('./controllers/countryselect');

},{"./controllers/basemaps":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/basemaps.js","./controllers/breadcrumbs":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/breadcrumbs.js","./controllers/countryselect":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/countryselect.js","./controllers/details":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/details.js","./controllers/export":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/export.js","./controllers/filters":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/filters.js","./controllers/info":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/info.js","./controllers/layers":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/layers.js","./controllers/legend":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/legend.js","./controllers/main":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/main.js","./controllers/map":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/map.js","./controllers/navbar":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/navbar.js","./controllers/search":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/search.js","./controllers/side-view":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/side-view.js","./controllers/theme":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/theme.js","./controllers/tools":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/tools.js","./controllers/upload":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/upload.js","./controllers/zoom-extent":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/zoom-extent.js","./factories/AgFilter":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/factories/AgFilter.js","./factories/CICOFilter":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/factories/CICOFilter.js","./factories/EducationFilter":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/factories/EducationFilter.js","./factories/HealthFilter":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/factories/HealthFilter.js","./factories/LibraryFilter":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/factories/LibraryFilter.js","./factories/bangladesh":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/factories/bangladesh.js","./factories/india":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/factories/india.js","./factories/kenya":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/factories/kenya.js","./factories/nigeria":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/factories/nigeria.js","./factories/sectordata":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/factories/sectordata.js","./factories/tanzania":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/factories/tanzania.js","./factories/uganda":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/factories/uganda.js","./services/Donuts":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/Donuts.js","./services/LayerConfig":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/LayerConfig.js","./services/StoriesConfig":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/StoriesConfig.js","./services/Vector/VectorProvider":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/Vector/VectorProvider.js"}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/basemaps.js":[function(require,module,exports){
/**
 * Created by Ryan Whitley <rwhitley@spatialdev.com>
 *       on 3/28/14.
 */

module.exports = angular.module('SpatialViewer').controller('BasemapsCtrl', function($scope, $state, $stateParams, LayerConfig) {
  $scope.basemaps = LayerConfig.basemaps;

  $scope.name = function (alias) {
    return LayerConfig[alias].name || alias;
  };

  $scope.getLayers = function() {
    if (! $stateParams || !$stateParams.layers) {
      return [];
    }
    var layers = $stateParams.layers.split(',');
    return layers;
  };

  $scope.currentBasemap = function () {
    var layers = $scope.getLayers();
    if (!layers) return null;
    return layers[0];
  };

  $scope.swapBasemap = function (basemap) {
    var layers = $scope.getLayers();
    layers[0] = basemap;
    layers = layers.join(',');
    angular.extend($stateParams, {
      layers: layers
    });
    $state.go('main', $stateParams);
  };

  $scope.isActiveBasemap = function(basemap) {
    return $scope.currentBasemap() === basemap;
  };

});
},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/breadcrumbs.js":[function(require,module,exports){
/**
 * Created by Ryan Whitley <rwhitley@spatialdev.com>
 *       on 4/17/14.
 */

module.exports = angular.module('SpatialViewer').controller('BreadcrumbsCtrl', function($scope, $rootScope, $state, $stateParams, $http, VectorProvider) {

  /**
   * Fixes Chrome Magnifying Glass Issue #206
   */
//  setTimeout(function() {
//    var toolbar = $('#MapUpperRightToolbarWrapper');
//    while ( toolbar.height() > 40 ) {
//      toolbar.width( toolbar.width() + 1 );
//    }
//  }, 1000);


	//var fullStackURL = config.chubbsPath('services/getAdminStack?format=json&adminlevel=:adminlevel&stackid=:guid&datasource=gadm');
	var fullStackURL = config.chubbsPath('services/custom/custom_operation?name=GetBreadCrumbsWithThemeCountsByID&format=json&gadm_level=:adminlevel&ids=:guid&datasource=gadm&theme=projects');

	var breadCrumbFeatures = {}; //Store results of the stack lookup here so we can reuse.

	$scope.$on('center-feature', function (event, featObj) {

		//See if the feature stack has already been stored
		if(breadCrumbFeatures[featObj.level] && breadCrumbFeatures[featObj.level][featObj.guid]){
			//Already have it
			updateBreadCrumbs(breadCrumbFeatures[featObj.level][featObj.guid], featObj.level);
		}
		else{
			//Go fetch it
			//Using the Center Feature's GUID, fetch the full stack details.
			var url = fullStackURL.replace(':adminlevel', featObj.level).replace(':guid', featObj.guid);
			var self = this;

			// Fetch from the server only if we don't have it in the hash
			$http.get(url).success(function (result, status) {

				if (!result || result.error) {
					console.error('Unable to fetch feature: ' + result.error);
					return;
				}

				var properties = result[0];

				//Update
                if(properties){
                    updateBreadCrumbs(properties, featObj.level);

                    //Store in the hash.
                    if(breadCrumbFeatures[featObj.level]){
                        breadCrumbFeatures[featObj.level][properties["guid" + featObj.level]] = properties;
                    }
                    else{
                        breadCrumbFeatures[featObj.level] = {};
                        breadCrumbFeatures[featObj.level][properties["guid" + featObj.level]] = properties;
                    }
                }else{
                    console.log("");
                }
			});
		}
	});

	function updateBreadCrumbs(featObj, level) {
		//Update The Breadcrumb display
		//Clear lower level scope items in case we've zoomed out
		for (var x = level; x <= 5; x++) {
			//null out any level values that are LOWER than what we're currently looking at
			$scope["level" + x] = "";
			$scope["feat" + x] = null;

			if(x == -1){
				$scope["levelarc"] = featObj["namearc"];
				$scope["featarc"] = featObj;
			}
		}

		//using the requested level, dig out the properties for that level and ones above it
		for (var i = level; i >= -1; i--) {
			if(i == -1){
				$scope["levelarc"] = featObj["namearc"];
				$scope["featarc"] = featObj;
			}
			$scope["level" + i] = featObj["name" + i];
			$scope["feat" + i] = featObj;
		}
	}

  $scope.zoomToGUID = function (featObj, level) {
    //Given a GUID, zoom to the feature.

    //Grab the feature from the VectorProvider.
    VectorProvider.fetchFeature(featObj["guid" + (level >= 0 ? level : "arc")], level, null, function (feat) {
      //Make a temp geojson layer and add the geojson.
      //Then grab the bounds from it and zoom to it.

      var gjl = L.geoJson(feat.geometry);
      $scope.$parent.zoomToBounds(gjl.getBounds());
    });

  };

  $scope.zoomToWorld = function () {
    var bounds = L.latLngBounds(L.latLng(-50,-179), L.latLng(50,179));
    $scope.$parent.zoomToBounds(bounds);
  };

});

},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/countryselect.js":[function(require,module,exports){
/**
 * Created by Daniel Baah <dbaah@spatialdev.com>
 *       on 12/18/14.
 */

module.exports = angular.module('SpatialViewer').controller('CountrySelect', function($http, $scope, IndiaFactory, SectorFactory, KenyaFactory,
                                                                                      UgandaFactory, BangladeshFactory, TanzaniaFactory, NigeriaFactory) {
    //var SelectCountry = {
    //    default:'India',
    //    countryNames: ['Bangladesh','Uganda','Kenya','Nigeria','Tanzania','India']
    //};
    //
    //var names = SelectCountry.countryNames;
    //
    //$scope.selection = SelectCountry.default;
    //SectorFactory.selectedCountry = $scope.selection;
    //
    ////Users Selected Country
    //$scope.chooseCountry = function(selected){
    //    $scope.selection = selected;
    //    SectorFactory.selectedCountry = $scope.selection;
    //    //SectorFactory.setCountry($scope.selection);
    //};
    //
    //$scope.zoomToCountry = function () {
    //    map.setView([IndiaFactory.India.MapCenter.Latitude,
    //        IndiaFactory.India.MapCenter.Longitude],
    //        IndiaFactory.India.MapZoom);
    //};
    //
    //$scope.switchCountry = function (selected) {
    //    var cname = selected;
    //    console.log(cname);
    //
    //    if(cname !== "India") {
    //        map.setView([eval(cname + "Factory")[cname].MapCenter.Latitude,
    //                eval(cname + "Factory")[cname].MapCenter.Longitude],
    //            eval(cname + "Factory")[cname].MapZoom);
    //    } else {
    //        map.setView([eval(cname + "Factory")[cname].MapCenter.Latitude,
    //                eval(cname + "Factory")[cname].MapCenter.Longitude,
    //            eval(cname + "Factory")[cname].MapZoom]);
    //    }
    //};
    //
    //// Alias for Selected Country object
    //this.country = SelectCountry;

});
},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/details.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 4/9/14.
 */

module.exports = angular.module('SpatialViewer').controller('DetailsCtrl', function ($scope, $rootScope, $state, $stateParams, $http, SectorFactory,
                                                                                     Donuts, $filter, IndiaFactory, KenyaFactory, NigeriaFactory,
                                                                                     CICOFilterFactory, HealthFilterFactory, AgFilterFactory, UgandaFactory,
                                                                                     LibraryFilterFactory) {
    $scope.details = {};
    $scope.activeidx = 0;
    $scope.currentDetailitem = {};
    $scope.ALLdetails = [];
    $scope.detailslength = 0;
    $scope.AllFeatureLayers = [];
    $scope.allSectors = [];
    var MapBuilder = {};

    $scope.toolTipDiv = null;

    $scope.navTab = 'countryoverview';

    $scope.salesforceUrl = config.salesforceUrl;
    $scope.ShowAllSectors = false;

    $scope.getSelectedSector = function () {

        // watch for change in sector, not tab
        if ($scope.navTab !== 'countryoverview') {
            $scope.title = $scope.selectedSector;
        } else {
            $scope.title = "Overview - Bihar & Uttar Pradesh";
        }

        switch ($scope.selectedSector) {
            case 'Agriculture':
                if($scope.selection == 'India'){
                    $scope.APData = AgFilterFactory.Ag_Counts;
                    $scope.sectortotal = AgFilterFactory.AgTotal;
                    $scope.APChart(AgFilterFactory.Ag_LandUse_Counts);
                }

                if($scope.selection == 'Uganda'){
                    $scope.APData = UgandaFactory.Ag_Counts;
                    $scope.sectortotal = UgandaFactory.AgTotal;
                }

                break;
            case 'CICOS':
            case 'Financial Service':
                // Check which country is selected
                if($scope.selection == 'India'){
                    $scope.APData = CICOFilterFactory.CICOs_Counts;
                    $scope.sectortotal = CICOFilterFactory.CICOsTotal;
                    $scope.APChart(CICOFilterFactory.CICOs_LandUse_Counts);
                }
                if($scope.selection == 'Kenya'){
                    $scope.APData = KenyaFactory.CICOs_Counts;
                    $scope.sectortotal = KenyaFactory.CICOsTotal;
                }
                if($scope.selection == 'Nigeria'){
                    $scope.APData = NigeriaFactory.CICOs_Counts;
                    $scope.sectortotal = NigeriaFactory.CICOsTotal;
                }
                if($scope.selection == 'Uganda'){
                    $scope.APData = UgandaFactory.CICOs_Counts;
                    $scope.sectortotal = UgandaFactory.CICOsTotal;
                }
                break;
            case 'Health':
                $scope.APData = HealthFilterFactory.Health_Counts;
                $scope.sectortotal = HealthFilterFactory.HealthTotal;
                $scope.APChart(HealthFilterFactory.Health_LandUse_Counts);
                break;
            case 'Library':
                $scope.APData = LibraryFilterFactory.Library_Counts;
                $scope.sectortotal = LibraryFilterFactory.LibraryTotal;
                $scope.APChart(LibraryFilterFactory.Library_LandUse_Counts);
                break;
            case 'Education':
                $scope.APData = UgandaFactory.Education_Counts;
                $scope.sectortotal = UgandaFactory.EducationTotal;
                //$scope.APChart(LibraryFilterFactory.Library_LandUse_Counts);
                break;
            default:
                if($scope.selection == 'India'){
                    $scope.APData = CICOFilterFactory.CICOs_Counts;
                    $scope.sectortotal = CICOFilterFactory.CICOsTotal;
                    $scope.APChart(CICOFilterFactory.CICOs_LandUse_Counts);

                } if($scope.selection == 'Kenya'){
                    $scope.APData = CICOFilterFactory.CICOs_Counts_Kenya;
                    $scope.sectortotal = CICOFilterFactory.CICOsTotal_Kenya;
                }
                //$scope.APData = CICOFilterFactory.CICOs_Counts;
                //$scope.sectortotal = CICOFilterFactory.CICOsTotal;
                //$scope.APChart(CICOFilterFactory.CICOs_LandUse_Counts);
                //console.log("case: default");
        }
    };

    // Watch for change in selected Sector
    $scope.$watch(function () {
            return SectorFactory.allSectors;
        }, function () {
            $scope.allSectors = SectorFactory.allSectors;
        }
    );

    //Watch for change in country
    $scope.$watch(function () {
        return SectorFactory.selectedCountry;
    }, function () {
        $scope.selection = SectorFactory.selectedCountry;
        $scope.getSelectedSector();
        switch ($scope.selection) {
            case 'India':
                $scope.QuickStats = IndiaFactory.India.QuickStats;
                $scope.title = "Overview - Bihar & Uttar Pradesh";
                break;
            case 'Kenya':
                $scope.QuickStats = KenyaFactory.Kenya.QuickStats;
                $scope.title = "Overview - Kenya";
                $scope.SectorTypes = ['Financial Service'];
                break;
            case 'Nigeria':
                $scope.QuickStats = NigeriaFactory.Nigeria.QuickStats;
                $scope.title = "Overview - Nigeria";
                $scope.SectorTypes = ['Financial Service'];
                break;
            case 'Uganda':
                $scope.title = "Overview - Uganda";
                $scope.QuickStats = UgandaFactory.Uganda.QuickStats;
                $scope.SectorTypes = ['Financial Service','Agriculture', 'Education'];
                break;
            default:
                $scope.QuickStats = IndiaFactory.India.QuickStats;
                $scope.title = "Overview - Bihar & Uttar Pradesh";
        }

    });

    $scope.APChart = function (sector) {
        //Clear old ones
        $("#d3Container").html("");

        if (!$scope.toolTipDiv) {
            $scope.toolTipDiv = d3.select("#SiteWrapper").append("div")
                .attr("class", "tooltip")
                .style("opacity", 0);
        }

        var margin = {top: 20, right: 20, bottom: 260, left: 200},
            width = 650 - margin.left - margin.right,
            height = 600 - margin.top - margin.bottom;

        var x0 = d3.scale.ordinal()
            .rangeRoundBands([0, width], .1);

        var x1 = d3.scale.ordinal();

        var y = d3.scale.linear()
            .range([height, 0]);

        var color = d3.scale.ordinal()
            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

        var xAxis = d3.svg.axis()
            .scale(x0)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .tickFormat(d3.format(".2s"));

        var svg = d3.select("#d3Container").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var landUseTypes = [];

        for (var i = 0; i < sector.length; i++) {
            if (landUseTypes.includes(sector[i].land_use) == false) {
                landUseTypes.push(sector[i].land_use);
            }
        }

        //Always rearrange array.
        //Move Urban to 1st slot
        //Then Rural, then whatever else
        var goal = ['Urban', 'Rural'],
            index,
            holder;

        for (var i = 0, gl = goal.length; i < gl; i++) {
            index = landUseTypes.indexOf(goal[i]);
            holder = landUseTypes.splice(index, 1)[0];
            landUseTypes.splice(i, 0, holder);
        }

        var cicoTypes = []; //Get unique list of cico types
        var cicoTypesObject = {}; //Get unique list of cico types
        var maxCounts = []; //keep the cico counts here.
        //for (var i=0;i<sector.length;i++){
        //    if (!cicoTypesObject[sector[i].type]) {
        //        cicoTypes.push(sector[i].type);
        //        cicoTypesObject[sector[i].type] = { name: sector[i].type, counts: [] };
        //    }
        //}

        sector.forEach(function (item) {
            if (!cicoTypesObject[item.type]) {
                cicoTypes.push(item.type);
                cicoTypesObject[item.type] = {name: item.type, counts: []};
            }
        });

        //Get list of counts by cico type
        cicoTypes.forEach(function (item, idx) {
            sector.forEach(function (citem, ixdx) {
                if (citem.type == item) {
                    //If it's a match, add the count to the array
                    cicoTypesObject[item].counts.push({
                        name: citem.land_use,
                        value: citem.count,
                        landUse: citem.land_use,
                        FeatureType: citem.type
                    });
                    maxCounts.push(+citem.count);
                }
            });
        });

        x0.domain(cicoTypes.map(function (d) {
            return d;
        })); //Get x axis values (CICO Type)
        x1.domain(landUseTypes).rangeRoundBands([0, x0.rangeBand()]);
        y.domain([0, d3.max(maxCounts)]);

        //XAxis Labels
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            //.selectAll(".tick text")
            //.call(wrap, x0.rangeBand());
            .attr("transform", function (d) {
                return "rotate(-45)"
            });

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("# Access Points");

        var state = svg.selectAll(".state")
            .data(cicoTypes)
            .enter().append("g")
            .attr("class", "state")
            .attr("transform", function (d) {
                return "translate(" + (x0(d) + 10) + ",0)";
            });

        var rect = state.selectAll("rect")
            .data(function (d) {
                return cicoTypesObject[d].counts;
            })
            .enter().append("rect")
            .attr("width", x1.rangeBand())
            .attr("x", function (d) {
                return x1(d.landUse);
            })
            .attr("y", function (d) {
                return y(d.value);
            })
            .attr("height", function (d) {
                return height - y(d.value);
            })
            .style("fill", function (d) {
                return color(d.landUse);
            })
            .on("mouseover", function (d) {
                $scope.toolTipDiv.transition()
                    .duration(200)
                    .style("opacity", .9);
                $scope.toolTipDiv.html("<span class='ttLandUse'>" + d.landUse + ":</span> <br/><span class='d3Tooltip'>" + $filter('number')(d.value, 0) + "</span><br> " + d.FeatureType)
                    .style("left", (d3.event.layerX + 10) + "px")
                    .style("top", (d3.event.layerY - 60) + "px");
            })
            .on("mousemove", function (d) {
                $scope.toolTipDiv.style("left", (d3.event.layerX + 10) + "px")
                    .style("top", (d3.event.layerY - 60) + "px");
            })
            .on("mouseout", function (d) {
                $scope.toolTipDiv.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        var legend = svg.selectAll(".legend")
            .data(landUseTypes.slice())
            .enter().append("g")
            .attr("class", "legend")
            .attr("transform", function (d, i) {
                return "translate(-20," + i * 20 + ")";
            });

        legend.append("rect")
            .attr("x", width - 18)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", color);

        legend.append("text")
            .attr("x", width - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function (d) {
                return d;
            });
    };

    $scope.showRfa = function (details, value) {
        details.showRfa = true;
        value.showRfa = true;
    };

    $scope.hideRfa = function (details, value) {
        details.showRfa = false;
        value.showRfa = false;
    };

    $scope.showIndicators = function (details, value) {
        details.showIndicators = true;
        value.showIndicators = true;
    };

    $scope.hideIndicators = function (details, value) {
        details.showIndicators = false;
        value.showIndicators = false;
    };

    $scope.showRisks = function (details, value) {
        details.showRisks = true;
        value.showRisks = true;
    };

    $scope.hideRisks = function (details, value) {
        details.showRisks = false;
        value.showRisks = false;
    };

    $scope.showStatuses = function (details, value) {
        details.showStatuses = true;
        value.showStatuses = true;
    };

    $scope.hideStatuses = function (details, value) {
        details.showStatuses = false;
        value.showStatuses = false;
    };

    $scope.label = function (key) {

        var desc = key;

        // disaster
        if ($stateParams.theme === 'disaster') {

            if ($scope.sfFieldHash.Disaster__c[key]) {
                desc = $scope.sfFieldHash.Disaster__c[key].label || key;
            }

            if ($scope.sfFieldHash.Location__c[key]) {
                desc = $scope.sfFieldHash.Location__c[key].label || key;
            }

            if ($scope.sfFieldHash.Disaster_Location__c[key]) {
                desc = $scope.sfFieldHash.Disaster_Location__c[key].label || key;
            }

            if ($scope.sfFieldHash.Request_For_Assistance__c[key]) {
                desc = $scope.sfFieldHash.Request_For_Assistance__c[key].label || key;
            }

            return desc;
        }

        // contextual layer
        if ($scope.contextualLayer) {
            return key;
        }


        if ($stateParams.theme === 'projectRisk') {
            // project
            if ($scope.sfFieldHash.Project__c[key]) {
                desc = $scope.sfFieldHash.Project__c[key].label || key;
            }

            if ($scope.sfFieldHash.Location__c[key]) {
                desc = $scope.sfFieldHash.Location__c[key].label || key;
            }

            if ($scope.sfFieldHash.Risk__c[key]) {
                desc = $scope.sfFieldHash.Risk__c[key].label || key;
            }

            return desc;
        }


        if ($stateParams.theme === 'projectHealth') {
            // project
            if ($scope.sfFieldHash.Project__c[key]) {
                desc = $scope.sfFieldHash.Project__c[key].label || key;
            }

            if ($scope.sfFieldHash.Location__c[key]) {
                desc = $scope.sfFieldHash.Location__c[key].label || key;
            }

            if ($scope.sfFieldHash.Project_Evaluation__c[key]) {
                desc = $scope.sfFieldHash.Project_Evaluation__c[key].label || key;
            }

            return desc;
        }

        // project
        if ($scope.sfFieldHash.Project__c[key]) {
            desc = $scope.sfFieldHash.Project__c[key].label || key;
        }

        if ($scope.sfFieldHash.Location__c[key]) {
            desc = $scope.sfFieldHash.Location__c[key].label || key;
        }

        if ($scope.sfFieldHash.Indicator__c[key]) {
            desc = $scope.sfFieldHash.Indicator__c[key].label || key;
        }

        if ($scope.sfFieldHash.Indicator_Value__c[key]) {
            desc = $scope.sfFieldHash.Indicator_Value__c[key].label || key;
        }

        if ($scope.sfFieldHash.Logframe_Element__c[key]) {
            desc = $scope.sfFieldHash.Logframe_Element__c[key].label || key;
        }

        return desc;

    };

    $scope.tooltip = function (key) {
//    (sfFieldHash[key].inlineHelpText || '') + ' FieldName: ' + key

        var desc = '';

        // disaster
        if ($stateParams.theme === 'disaster') {

            if ($scope.sfFieldHash.Disaster__c[key]) {
                desc = $scope.sfFieldHash.Disaster__c[key].inlineHelpText || '';
            }

            if ($scope.sfFieldHash.Location__c[key]) {
                desc = $scope.sfFieldHash.Location__c[key].inlineHelpText || '';
            }

            if ($scope.sfFieldHash.Disaster_Location__c[key]) {
                desc = $scope.sfFieldHash.Disaster_Location__c[key].inlineHelpText || '';
            }

            if ($scope.sfFieldHash.Request_For_Assistance__c[key]) {
                desc = $scope.sfFieldHash.Request_For_Assistance__c[key].inlineHelpText || '';
            }

            return desc + ' FieldName: ' + key;
        }

        // contextual layer
        if ($scope.contextualLayer) {
            return 'FieldName: ' + key;
        }

        if ($stateParams.theme === 'projectRisk') {
            if ($scope.sfFieldHash.Project__c[key]) {
                desc = $scope.sfFieldHash.Project__c[key].inlineHelpText || '';
            }

            if ($scope.sfFieldHash.Location__c[key]) {
                desc = $scope.sfFieldHash.Location__c[key].inlineHelpText || '';
            }

            if ($scope.sfFieldHash.Risk__c[key]) {
                desc = $scope.sfFieldHash.Risk__c[key].inlineHelpText || '';
            }

            return desc + ' FieldName: ' + key;
        }

        if ($stateParams.theme === 'projectHealth') {
            if ($scope.sfFieldHash.Project__c[key]) {
                desc = $scope.sfFieldHash.Project__c[key].inlineHelpText || '';
            }

            if ($scope.sfFieldHash.Location__c[key]) {
                desc = $scope.sfFieldHash.Location__c[key].inlineHelpText || '';
            }

            if ($scope.sfFieldHash.Project_Evaluation__c[key]) {
                desc = $scope.sfFieldHash.Project_Evaluation__c[key].inlineHelpText || '';
            }
            return desc + ' FieldName: ' + key;
        }

        // project
        if ($scope.sfFieldHash.Project__c[key]) {
            desc = $scope.sfFieldHash.Project__c[key].inlineHelpText || '';
        }

        if ($scope.sfFieldHash.Location__c[key]) {
            desc = $scope.sfFieldHash.Location__c[key].inlineHelpText || '';
        }

        if ($scope.sfFieldHash.Indicator__c[key]) {
            desc = $scope.sfFieldHash.Indicator__c[key].inlineHelpText || '';
        }

        if ($scope.sfFieldHash.Indicator_Value__c[key]) {
            desc = $scope.sfFieldHash.Indicator_Value__c[key].inlineHelpText || '';
        }

        if ($scope.sfFieldHash.Logframe_Element__c[key]) {
            desc = $scope.sfFieldHash.Logframe_Element__c[key].inlineHelpText || '';
        }

        return desc + ' FieldName: ' + key;

    };

    //Init selectedFeatureTitle property

    // CICO config has filter data (name,type,count,color,zindex) for every sector
    $scope.CICOcfg = CICOFilterFactory.CICO_Config;


    // Set sector total on page load
    $scope.$watch(function () {
        return CICOFilterFactory.CICOsTotal;
    }, function () {
        $scope.sectortotal = CICOFilterFactory.CICOsTotal;
    });

    // Watch for change in right details navTab
    $scope.$watch('navTab', function () {
        if ($scope.selection == 'India') {
            if ($scope.navTab !== 'countryoverview' && $scope.selectedSector !== "") {
                $scope.title = $scope.selectedSector;
            } else {
                $scope.title = "Overview - Bihar & Uttar Pradesh";
            }
        }});

    // Watch for change in selected Sector

    $scope.$on('selectedSector', function (event, featureLayer) {
        $scope.selectedSector = SectorFactory.SelectedSector;
        $scope.getSelectedSector();
    });

    //$scope.$watch(function () {
    //    return SectorFactory.SelectedSector;
    //}, function() {
    //    $scope.selectedSector = SectorFactory.SelectedSector;
    //    $scope.getSelectedSector();
    //});

    $scope.toggleSectorShow = function(){
        $scope.ShowAllSectors = !$scope.ShowAllSectors;
    };

    $scope.toggleState = function (stateName) {
        var state = $state.current.name !== stateName ? stateName : 'main';
        $state.go(state, $stateParams);
    };

    $scope.itemsList = true;
    $scope.details = false;


    //Initialize the dummy project/disaster click results
    $scope.groupings = {};

    $scope.alertUserToClick = true;

    $scope.$on('details', function (event, featureLayer) {

        $scope.ALLdetails = [];
        $scope.AllFeatureLayers = [];
        $scope.activeidx = 0;

        featureLayer.forEach(function(v){
            v.forEach(function(l){
                $scope.AllFeatureLayers.push(l);
                $scope.ALLdetails.push(l.vtf.properties);
            })
        });

        $scope.alertUserToClick = false;

        $scope.detailslength = $scope.ALLdetails.length;

        if($scope.ALLdetails.length > 0) {
            $scope.openParam('details-panel'); //open details panel
            $scope.navTab = 'PointDetails';

            if (MapBuilder.selectedConfetti) MapBuilder.selectedConfetti.deselect(true);
            $scope.currentDetailitem = $scope.ALLdetails[0]; // first item shown
            MapBuilder.selectedConfetti = $scope.AllFeatureLayers[0].vtf;
            MapBuilder.selectedConfetti.select(true);

            $scope.photourl = $scope.currentDetailitem.url; // get url from first item properties
            // split the pipe seperated values
            if($scope.ALLdetails[0].photos != null) $scope.currentDetailitemPhoto = $scope.ALLdetails[0].photos.split("|");
            $scope.activeidx = ($scope.activeidx >= $scope.ALLdetails.length-1) ? 0 : $scope.activeidx++;
        }

        $scope.feature = featureLayer.feature;

        $scope.resizeDetailsPanel();
    });

    $scope.$on('route-update', function () {
        var sf_id = $stateParams.sf_id;
        $scope.theme = $stateParams.theme;
        if ($scope.alertUserToClick === false) return;
        if (sf_id && typeof sf_id === 'string') {
            var url = config.chubbsPath('services/custom/custom_operation?name=doecostextsearch&format=json&text=') + sf_id;
            $http.get(url).success(function (result, status) {
                if (result[0]) {
                    $rootScope.$broadcast('details', {feature: {properties: result[0]}});
                }
            });
        }
    });

    $scope.createDonuts = function () {
        // uses jquery to put donut in a div.
        if ($scope.groupings && $scope.groupings.Projects) {
            Donuts.createLabelDonut($scope.sfFieldHash.Project__c.sector__c.picklistValues, $scope.groupings.Projects, '#details-donut');
        }
    };

    $scope.moreLess = 'More';

    $scope.toggleMoreLess = function () {
        if ($scope.moreLess === 'More') {
            $scope.moreLess = 'Less';
        } else {
            $scope.moreLess = 'More';
        }
        //Resize;
        $scope.resizeDetailsPanel();
    };

    $scope.showDetails = function (item, themeItems, idx) {

        $scope.currentItem = item;

        $scope.resizeDetailsPanel();
    };

    $scope.nextThemeItem = function () {

        // if active item is length of details array, reset to zero, otherwise add 1
        $scope.activeidx = ($scope.activeidx >= $scope.ALLdetails.length-1) ? 0 : ++$scope.activeidx;
        $scope.currentDetailitem = $scope.ALLdetails[$scope.activeidx]; // change current item to active index
        $scope.photourl = $scope.currentDetailitem.url;
        if($scope.ALLdetails[$scope.activeidx].photos != null) $scope.currentDetailitemPhoto = $scope.ALLdetails[$scope.activeidx].photos.split("|");

        $scope.showDetails($scope.currentDetailitem);
    };

    $scope.prevThemeItem = function () {

        //if active item is greater than 0, then subtract the index, otherwise go to last index
        $scope.activeidx = ($scope.activeidx > 0) ? --$scope.activeidx : $scope.ALLdetails.length-1;
        $scope.currentDetailitem = $scope.ALLdetails[$scope.activeidx]; // change current item to active index
        $scope.photourl = $scope.currentDetailitem.url;
        if($scope.ALLdetails[$scope.activeidx].photos != null) $scope.currentDetailitemPhoto = $scope.ALLdetails[$scope.activeidx].photos.split("|");

        $scope.showDetails($scope.currentDetailitem);
    };

    $scope.showList = function () {
        $scope.title = $scope.featureTitle;
        $scope.itemsList = true;
        $scope.details = false;
    };

    $scope.resizeDetailsPanel = function () {
        var height = $('#MapCtrl').height() - 200; //Magic Number

        //height is the value that the entire details panel should never exceed.
        //Within the panel itself, the inner container needs to adjust its height based on the contents of the panel.
        //Sometimes, there are tabs, and sometimes the project/disaster description can be quite long.
        //In these cases, then innerContainer should shrink to fit within the max-height of the outer panel (height)

        //Find the top of the innerContainer, and subtract from the max height of the panel.  That's what the max-height of the inner panel should be
        var innerTop = $('#DetailsPanel .InnerContainer').position().top;
        var bottomHeight = $(".details-bottom-buttons.pull-right").height();

        $('#DetailsPanel .InnerContainer ').css("max-height", height - innerTop - bottomHeight);
    };

    //Connect the layout onresize end event
    window.layout.panes.center.bind("layoutpaneonresize_end", $scope.resizeDetailsPanel);

    //For Init.
    $scope.resizeDetailsPanel();

    $scope.save = function (data, name) {
        var json = JSON.stringify(data, null, 2);
        var blob = new Blob([json], {type: 'text/plain'});
        var downloadLink = document.createElement("a");
        var url = (window.webkitURL != null ? window.webkitURL : window.URL);
        downloadLink.href = url.createObjectURL(blob);
        downloadLink.download = name || 'feature.geojson';
        downloadLink.click();
    };

    $scope.$watch('activeidx',function(){
        $rootScope.$broadcast('activeidx', {properties: {index: $scope.activeidx,sector:$scope.currentDetailitem.sector}});

        if($scope.AllFeatureLayers && $scope.AllFeatureLayers.length > 0){

            MapBuilder.selectedConfetti = $scope.AllFeatureLayers[$scope.activeidx].vtf;

            if (MapBuilder.selectedConfetti) {
                MapBuilder.selectedConfetti.mvtLayer.clearSelectedFeatureTiles();
                MapBuilder.selectedConfetti.select(true);
                if (MapBuilder.previouslySelectedConfetti) MapBuilder.previouslySelectedConfetti.deselect(true);
                MapBuilder.previouslySelectedConfetti = MapBuilder.selectedConfetti;
            }
        }
    });

});

},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/export.js":[function(require,module,exports){
/**
 * Created by Ryan Whitley
 *       on 6/4/14.
 */

module.exports = angular.module('SpatialViewer').controller('ExportCtrl', function($scope, $http, $state, $stateParams) {
    console.log('ExportCtrl');

    $scope.export = function () {

    };

    $scope.routeUrl = window.location;


    /**
     * If ExportCtrl gets called twice for some reason, we might
     * have this class hanging around blocking the app. ExportCtrl
     * does get called twice sometimes, because the modal sometimes
     * nudges the map and reinstantiates the modal again via a new
     * route.
     */
    $('.modal-backdrop').remove();

    $('#exportModal').modal('show');

    $('#exportModal').on('hidden.bs.modal', function (e) {
        $state.go('main', $stateParams);
    });


    var self = this;

    //defaults
    self._LayoutElements = { "map": true, "legend": true, "optionalthemedetails": false };
    self._ImageFormat = 'png';

    self._init = function () {

        self._connectRadioButtonOnClicks();
        $("#executeExportButton").on("click", function () {
            //Show loading gif. Hide export button
            try {
                self._exportImage();
            }
            catch (e) {
                self._showExportButtonHideLoader();
            }

        });
    };

    self._showWaitingPanel = function () {
        self._showLoader(); //show knightRider image, hide
        $("#exportOptionsPanel").css({"display": "none"});
        $("#exportWaitingPanel").css({ "display": "block" });
        $(".exportGroupTitle.error").css({ "display": "none" }); //Hide error message, if shown
        $(".imageOpenButton").css({"display": "none"}); //hide open image button
    }

    self._hideWaitingPanel = function () {
        $("#exportWaitingPanel").css({"display": "none"});
        $("#exportOptionsPanel").css({"display": "block"});
    }

    self._hideExportButtonShowLoader = function () {
        $("#executeExportButton").css({ "display": "none" });
        $(".knightRiderLoader").css({ "display": "block" });
    }

    self._showExportButtonHideLoader = function () {
        $("#executeExportButton").css({"display": "block"});
        $(".knightRiderLoader").css({"display": "none"});
    }

    self._connectRadioButtonOnClicks = function () {


        $("#optionalOutputMap").on("click", self._getLayoutElementOnClick('map'));
        $("#optionalOutputLegend").on("click", self._getLayoutElementOnClick('legend'));
        $("#optionalThemeDetails").on("click", self._getLayoutElementOnClick('optionalthemedetails'));


        var pngRBNode = $("#pngImageFormat");
        pngRBNode.on("click", self._getImageButtonRadioButtonOnClick(pngRBNode, 'png'));

        var pdfRBNode = $("#pdfImageFormat");
        pdfRBNode.on("click", self._getImageButtonRadioButtonOnClick(pdfRBNode, 'pdf'));

        $("#exportClose").on("click", self.hideExportOption);

        $(".killOpenButton").on("click", self._hideWaitingPanel); //the discard button

    };

    self._getImageButtonRadioButtonOnClick = function (node, imageFormat) {

        return function () {
            self._ImageFormat = imageFormat;
            self._removeAllSelectedRadioButtons("exportOptionsContainer");
            node.addClass("exportRadioButtonSelected");
        };
    };

    self._getLayoutElementOnClick = function (element) {
        return function () {
            //Toggle Active State
            self._LayoutElements[element] = !self._LayoutElements[element];

            //$("#exportOptions .checkbox").removeClass("checked");
            $(this).toggleClass('checked');
        };
    };

    self._removeAllSelectedRadioButtons = function (parentDivID) {
        $.each($("#" + parentDivID + " .exportRadioButtonSelected"), function (idx, node) {
            $(node).removeClass("exportRadioButtonSelected");
        });
    };

    self._hideLoader = function () {
        $(".knightRiderLoader").css({"display": "none"});
    }

    self._showLoader = function () {
        $(".knightRiderLoader").css({"display": "block"});
    }

    this.showExportOption = function () {
        $("#exportOptions").css({ "display": "block" });
    }

    this.hideExportOption = function () {
        $("#exportOptions").css({ "display": "none" });
    }

    self._killOpenImageButton = function () {
        //Hide 'open image' button and show export button.
        self._showExportButtonHideLoader();
        $(".imageOpenButton").css({"display": "none"});
    }

    self._onError = function () {
        self._hideWaitingPanel();
        //Display error message.
        $(".exportGroupTitle.error").replace("<span>There was an error exporting the image.</span>");
        $(".exportGroupTitle.error").css({"display": "block"});
    }

    self._exportImage = function () {

        var titleHTML = "Title";

        //var legendsHTML = $('<div>').append($("#LayerListWrapper").clone()).html().replace(/\"/g, '\\"');


        var layoutWidth = $("body").width();
        var mapHeight = $("#MapCtrl").height();
        var mapWidth = $("#MapCtrl").width();

        var codeblock = "";
        //Adjust body width
        codeblock += '$("body").width(' + (mapWidth + 20) + ');';

        //Label selected country
        //codeblock += '$("#activeCountry").html( "' + _FSP.MapBuilder.SelectedCountry + '");';

        //Depending on what's in the layoutElements array, grab dom nodes
        //var _showNone = true; //flag to detect if user chose nothing

//        for (var key in self._LayoutElements) {
//            if (self._LayoutElements.hasOwnProperty(key)) {
//                //If user has selected even 1 element, then set _showNone to false; (because we are going to show something)
//                if (self._LayoutElements[key] === true) {
//                    _showNone = false;
//                }
//                switch (key) {
//                    case "map":
//                        if (self._LayoutElements[key] === true) {
//                            //grab the map div
//                            var mapHTML = $('<div>').append($(".leaflet-map-pane").clone()).html().replace(/\"/g, '\\"');
//                            if (mapHTML.indexOf('-webkit-transform') === -1) {
//                                mapHTML = mapHTML.replace(/-ms-transform/g, 'transform').replace(/transform/g, '-webkit-transform');
//                            }
//                            codeblock += '$("#MapCtrl").height(' + mapHeight + ');';
//                            codeblock += '$("#MapCtrl").replaceWith("' + mapHTML + '");';
//                            //Adjust Map wrapper
//                            codeblock += '$("#upperMapWrapper").width(' + (mapWidth) + ');';
//                            codeblock += '$("#upperMapWrapper").height(' + (mapHeight) + ');';
//                        }
//                        else {
//                            //hide map div
//                            codeblock += '$("#upperMapWrapper").hide();';
//                        }
//                        break;
//
//                    case "legend":
//                        if (self._LayoutElements[key] === true) {
////                            var legendsHTML = $('<div>').append($("#LayerListWrapper").clone()).html().replace(/\"/g, '\\"');
////                            codeblock += "$('#legends').append('" + legendsHTML + "');";
////
////                            //Adjust Title of CICOs
////                            codeblock += "$('#legends').prepend($('#parentCICO'));";
////                            codeblock += "$('#legends').prepend($('#LayerListWrapper header'));";
////
////
////                            //Move panelTitle to grpCICO.  1st thing.
////                            codeblock += "$('#grpCICO').prepend($('.panelTitle'));";
//                        }
//                        else {
//                            //if both map and legend are excluded, hide the wrapper with border
//                            if (self._LayoutElements["map"] != true) {
//                                codeblock += '$("#upperMapWrapper").css({"display": "none"});';
//                            }
//                        }
//                        break;
//
//                    case "optionalthemedetails":
//                        if (self._LayoutElements[key] === true) {
//                            //#DetailsPanel .title.ng-binding
//
//                            var COHTML = $('<div>').append($("#DetailsPanel .InnerContainer.scrollable").clone().addClass("on")).html().replace(/\"/g, '\\"').replace(/<!--(.*?)-->/gm, "");
//                            codeblock += "$('#uxThemeDetails').append('" + COHTML + "');";
//                        }
//                        break;
//                }
//            }
//        }

//        if (_showNone == true) {
//            //Don't do anything, cause user hasn't selected anything.
//            $("#exportMessage").html("Please select 1 or more elements to export.");
//            return;
//        }
//        else {
//            $("#exportMessage").html("");
//        }

        //show loader
        self._showWaitingPanel();

        //formatting
        //codeblock = codeblock.replace(/(\r\n|\n|\r)/gm, "");  //remove line breaks

        var printPostArgs = {
            //url: 'http://geo.redcross.com/mapfolio/print.htm',
            url: $scope.routeUrl.href.replace("mapfolio/#", "mapfolio/print.html#").replace("mapfolio/index.html#", "mapfolio/print.html#").replace("/export", "").replace("http://localhost:3001", "https://geo.redcross.org"), //Swap the current url for the print url
            imageformat: self._ImageFormat || 'png',
            format: 'json',
            //codeblock: codeblock,
            viewportheight: mapHeight,
            viewportwidth: layoutWidth,
            delay: 5000 //time to wait in ms
        };


        $.ajax({
            type: "POST",
            url: 'http://print.spatialdev.com',
            data: printPostArgs,
            success: self._onImageExport,
            error: self._onError
        });

    };

    self._onImageExport = function (result) {

        var exportImageURL = result.image;

        //instead, show a button/hyperlink for the user to open the image.
        $(".imageOpenButton a").attr("href", exportImageURL);
        $(".imageOpenButton").css({"display": "block"});

        //Hide loader
        self._hideLoader();
    };

    self._init();
});

},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/filters.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

module.exports = angular.module('SpatialViewer').controller('FiltersCtrl', function ($scope, $http, $state, $stateParams, $rootScope,
                                                                                     SectorFactory, CICOFilterFactory, HealthFilterFactory,
                                                                                     LibraryFilterFactory, AgFilterFactory, LayerConfig, UgandaFactory,
                                                                                     IndiaFactory, KenyaFactory, NigeriaFactory) {
    $scope.params = $stateParams;
    $scope.navTab = 'CICOS';
    $scope.allSectors = [];
    $scope.HealthLayer = HealthFilterFactory.Layer;
    $scope.AgLayer = AgFilterFactory.Layer;
    $scope.EducationLayer = LayerConfig.configLayers['education_uganda'];
    $scope.LibraryLayer = LibraryFilterFactory.Layer;
    $scope.CICOLayer = CICOFilterFactory.Layer;
    $scope.CICOLayer_Kenya = KenyaFactory.Layer;
    $scope.CICOLayer_Nigeria = NigeriaFactory.Layer;
    $scope.CICOLayer_Uganda = LayerConfig.configLayers['cicos_uganda'];
    $scope.CICOSector = CICOFilterFactory.CICOs_Counts;
    $scope.HealthLayer.active = false;
    $scope.LibraryLayer.active = false;
    $scope.CICOLayer.active = false;
    $scope.AgLayer.active = false;
    $scope.top3 = false;
    $scope.ShowAllSectors = false;
    $scope.SearchBar = false;
    $scope.AgTop3 = [];
    $scope.CountryList = SectorFactory.CountryList;

    $scope.toggleSearchBar = function () {
        $scope.SearchBar = !$scope.SearchBar;
    };

    // Function is called after Country has changed
    // $scope.CICOSector can either contain Kenya/India/Nigeria data
    $scope.setFilters = function () {
        if ($stateParams.hasOwnProperty('country')==true) {
            var stateCountry = $stateParams.country.capitalize();
        }

        if (stateCountry == 'Kenya') {
            $scope.CICOSector = KenyaFactory.CICOs_Counts;
            //$scope.CICOProviders.viewAll = true;
            $scope.CICOSector.viewAll = true;
            $scope.CICOSector.selectedAll = true;
        }
        if (stateCountry == 'India') {
            $scope.CICOSector = CICOFilterFactory.CICOs_Counts;
            $scope.CICOSector.selectedAll = true;
            //$scope.CICOSector.viewAll = false;
            //$scope.HealthSector.viewAll = true;
        }
        if (stateCountry == 'Nigeria') {
            $scope.CICOSector = NigeriaFactory.CICOs_Counts;
            $scope.CICOSector.viewAll = true;
            $scope.CICOSector.selectedAll = true;
        }

        if (stateCountry == 'Uganda') {
            $scope.CICOSector = UgandaFactory.CICOs_Counts;
            $scope.CICOSector.selectedAll = true;
            $scope.CICOSector.viewAll = true;
            $scope.AgLayer = LayerConfig.configLayers['agriculture_uganda'];
            //$scope.HealthSector.viewAll = true;
        }

    };

    $scope.deactiveLayers = function(){
        $scope.LibraryLayer.active = false;
        $scope.HealthLayer.active = false;
        $scope.CICOLayer.active = false;
        $scope.AgLayer.active = false;
        $scope.CICOLayer_Kenya.active = false;
        $scope.CICOLayer_Nigeria.active = false;
        $scope.CICOLayer_Uganda.active = false;

    };

    $scope.defaultState = function(){
        $scope.deactiveLayers();

        $scope.CountryList = SectorFactory.CountryList;

        var temparr = $stateParams.layers.split(",");
        $stateParams.layers = temparr[0];

        $stateParams.lat = $scope.CountryList.default.MapCenter.Latitude;
        $stateParams.lng = $scope.CountryList.default.MapCenter.Longitude;
        $stateParams.zoom = $scope.CountryList.default.MapZoom;
        $stateParams.country =  $scope.CountryList.default.country;
        $scope.selection = $scope.CountryList.default.country;

        $scope.closeParam('details-panel');

        $state.go($state.current.name, $stateParams);
    };

    $scope.$watch(function () {
        return SectorFactory.selectedCountry;
    }, function () {
        $scope.selection = SectorFactory.selectedCountry;
        console.log(" ------ Details.js Current Country has changed to: " + $scope.selection);
        $scope.setFilters();
        $scope.deactiveLayers();
        switch ($scope.selection) {
            case 'India':
                SectorFactory.sectorSelections = [];
                $scope.allSectors = SectorFactory.sectorSelections;
                $scope.QuickStats = IndiaFactory.India.QuickStats;
                $scope.title = "Overview - Bihar & Uttar Pradesh";
                console.log("India QuickStats");
                $scope.IndiaOn = true;
                $scope.ShowAllSectors = true;
                $scope.KenyaOn = false;
                $scope.NigeriaOn = false;
                $scope.UgandaOn = false;
                $scope.checkAllAg();
                $scope.checkAllCICO();
                $scope.checkAllHealth();
                $scope.checkAllLibrary();
                $scope.CICOTop3 = [];
                console.log("India On " + $scope.IndiaOn);
                break;
            case 'Uganda':
                SectorFactory.sectorSelections = [];
                $scope.allSectors = SectorFactory.sectorSelections;
                $scope.QuickStats = UgandaFactory.Uganda.QuickStats;
                $scope.AgLayer = LayerConfig.configLayers['agriculture_uganda'];
                $scope.title = "Overview - Uganda";
                console.log("Uganda QuickStats");
                $scope.UgandaOn = true;
                $scope.AgSector = UgandaFactory.Ag_Counts;
                $scope.ShowAllSectors = true;
                $scope.IndiaOn = false;
                $scope.AgSector.active = false;
                $scope.AgSector.viewAll = true;
                $scope.KenyaOn = false;
                $scope.NigeriaOn = false;
                $scope.CICOTop3 = [];
                console.log("Uganda On " + $scope.UgandaOn);
                break;
            case 'Kenya':
                SectorFactory.sectorSelections = [];
                $scope.allSectors = SectorFactory.sectorSelections;
                $scope.IndiaOn = false;
                $scope.KenyaOn = true;
                $scope.NigeriaOn = false;
                $scope.UgandaOn = false;

                $scope.ShowAllSectors = true;
                $scope.checkAllCICO();
                $scope.CICOTop3 = [];
                $scope.QuickStats = KenyaFactory.Kenya.QuickStats;
                $scope.title = "Overview - Kenya";
                console.log("Kenya QuickStats " + $scope.QuickStats);
                break;
            case 'Nigeria':
                SectorFactory.sectorSelections = [];
                $scope.allSectors = SectorFactory.sectorSelections;
                $scope.IndiaOn = false;
                $scope.KenyaOn = false;
                $scope.NigeriaOn = true;
                $scope.UgandaOn = false;

                $scope.ShowAllSectors = true;
                $scope.checkAllCICO();
                $scope.CICOTop3 = [];
                $scope.QuickStats = NigeriaFactory.Nigeria.QuickStats;
                $scope.title = "Overview - Nigeria";
                console.log("Nigeria QuickStats " + $scope.QuickStats);
                break;
            default:
                $scope.IndiaOn = false;
                $scope.KenyaOn = false;
                $scope.NigeriaOn = false;
                $scope.UgandaOn = false;
                $scope.ShowAllSectors = false;
        }
    });

    $scope.HealthSector = HealthFilterFactory.Health_Counts;
    $scope.LibrarySector = LibraryFilterFactory.Library_Counts;
    $scope.EducationSector = UgandaFactory.Education_Counts;

    // Check box are checked by default
    $scope.HealthSector.viewAll = true;
    $scope.LibrarySector.viewAll = true;
    $scope.CICOSector.viewAll = true;
    $scope.EducationSector.viewAll = true;

    $scope.HealthSector.active = false;
    $scope.LibrarySector.active = false;
    $scope.CICOSector.active = false;
    $scope.EducationSector.active = false;


    $scope.checkedBool = "View All";
    $scope.selectedSector = 'CICOS';

    // Get selected tab
    $scope.setSelectedSector = function (selection) {
        SectorFactory.setSelectedSector(selection);
        $scope.selectedSector = SectorFactory.SelectedSector;

        $scope.$watch('selectedSector', function () {
            $rootScope.$broadcast('selectedSector', $scope.selectedSector);
        });

        //console.log("Selected Sector: " + $scope.selectedSector);
    };

    $scope.checkAllCICO = function () {
        for (var i = 0; i < $scope.CICOSector.length; i++) {
            if ($scope.CICOSector.selectedAll == true) {
                $scope.CICOSector[i].selected = true;
                if($scope.CICOSector[i].hasOwnProperty("providers")==true) {
                    for (var p = 0; p < $scope.CICOSector[i].providers.length; p++) {
                        $scope.CICOSector[i].providers[p].selected = true;
                    }
                }
            } else {
                $scope.CICOSector[i].selected = false;
            }
        }
    };

    $scope.checkAllHealth = function () {
        for (var i = 0; i < $scope.HealthSector.length; i++) {
            if ($scope.HealthSector.selectedAll == true) {
                $scope.HealthSector[i].selected = true;
            } else {
                $scope.HealthSector[i].selected = false;
            }
        }
    };

    $scope.checkAllLibrary = function () {
        for (var i = 0; i < $scope.LibrarySector.length; i++) {
            if ($scope.LibrarySector.selectedAll == true) {
                $scope.LibrarySector[i].selected = true;
            } else {
                $scope.LibrarySector[i].selected = false;
            }
        }
    };

    $scope.checkAllAg = function () {
        for (var i = 0; i < $scope.AgSector.length; i++) {
            if ($scope.AgSector.selectedAll == true) {
                $scope.AgSector[i].selected = true;
            } else {
                $scope.AgSector[i].selected = false;
            }
        }
    };

    $scope.checkAllEducation = function () {
        for (var i = 0; i < $scope.EducationSector.length; i++) {
            $scope.EducationSector[i].selected = $scope.EducationSector.selectedAll;
        }
    };


    // Handle Check/Uncheck All filters
    $scope.filterCICO = function (bool) {

        var cicosectorName = '';
        var stateCountry = $stateParams.country.capitalize();

        if(stateCountry=='India'){
            cicosectorName = 'CICOS'
        }
        if(stateCountry=='Kenya'){
            cicosectorName = 'cicos_kenya'
        }
        if(stateCountry=='Nigeria'){
            cicosectorName = 'cicos_nigeria'
        }
        if(stateCountry=='Uganda') {
            cicosectorName = 'cicos_uganda'
        }


        if(bool) {
            // handle toggling sectors on bottom sector panel
            if ($stateParams.layers.indexOf(cicosectorName) == -1) {
                $scope.CICOSector.selectedAll = true;
            } else {
                $scope.CICOSector.selectedAll = false;
            }
        } else {
            if ($stateParams.layers.indexOf(cicosectorName) == -1) {
                $scope.CICOSector.selectedAll = false;
            } else {
                $scope.CICOSector.selectedAll = true;
            }
        }

        // Toggle health sector later
        if ($scope.CICOSector.selectedAll == true) {
            if (stateCountry == 'India') $scope.CICOLayer.active = true;
            if (stateCountry == 'Kenya') $scope.CICOLayer_Kenya.active = true;
            if (stateCountry == 'Nigeria') $scope.CICOLayer_Nigeria.active = true;
            if (stateCountry == 'Uganda') $scope.CICOLayer_Uganda.active = true;

            $scope.checkAllCICO();
        } else {
            if (stateCountry == 'India') $scope.CICOLayer.active = false;
            if (stateCountry == 'Kenya') $scope.CICOLayer_Kenya.active = false;
            if (stateCountry == 'Nigeria') $scope.CICOLayer_Nigeria.active = false;
            if (stateCountry == 'Uganda') $scope.CICOLayer_Uganda.active = false;
            $scope.checkAllCICO();
        }
    };

    $scope.filterHealth = function (bool) {
        if(bool) {
            // handle toggling sectors on bottom sector panel
            if ($stateParams.layers.indexOf('health') == -1) {
                $scope.HealthSector.selectedAll = true;
            } else {
                $scope.HealthSector.selectedAll = false;
            }
        } else {
            if ($stateParams.layers.indexOf('health') == -1) {
                $scope.HealthSector.selectedAll = false;
            } else {
                $scope.HealthSector.selectedAll = true;
            }
        }

        // Toggle health sector later
        if ($scope.HealthSector.selectedAll == true) {
            $scope.HealthLayer.active = true;
            $scope.checkAllHealth();
        } else {
            $scope.HealthLayer.active = false;
            $scope.checkAllHealth();
        }
    };

    $scope.filterLibrary = function (bool) {

        if(bool) {
            // handle toggling sectors on bottom sector panel
            if ($stateParams.layers.indexOf('library') == -1) {
                $scope.LibrarySector.selectedAll = true;
            } else {
                $scope.LibrarySector.selectedAll = false;
            }
        } else {
            if ($stateParams.layers.indexOf('library') == -1) {
                $scope.LibrarySector.selectedAll = false;
            } else {
                $scope.LibrarySector.selectedAll = true;
            }
        }

        // Toggle library sector
        if ($scope.LibrarySector.selectedAll == true) {
            $scope.LibraryLayer.active = true;
            $scope.checkAllLibrary();
        } else {
            $scope.LibraryLayer.active = false;
            $scope.checkAllLibrary();
        }
    };

    $scope.filterAg = function (bool) {
        if(bool) {
            // handle toggling sectors on bottom sector panel
            if ($stateParams.layers.indexOf('agriculture') == -1) {
                $scope.AgSector.selectedAll = true;
            } else {
                $scope.AgSector.selectedAll = false;
            }
        } else {
            if ($stateParams.layers.indexOf('agriculture') == -1) {
                $scope.AgSector.selectedAll = false;
            } else {
                $scope.AgSector.selectedAll = true;
            }
        }

        // Toggle ag sector
        if ($scope.AgSector.selectedAll == true) {
            $scope.AgLayer.active = true;
            $scope.checkAllAg();
        } else {
            $scope.AgLayer.active = false;
            $scope.checkAllAg();
        }

    };

    $scope.filterEducation = function (bool) {
        if(bool) {
            // handle toggling sectors on bottom sector panel
            if ($stateParams.layers.indexOf('education') == -1) {
                $scope.EducationSector.selectedAll = true;
            } else {
                $scope.EducationSector.selectedAll = false;
            }
        } else {
            if ($stateParams.layers.indexOf('education') == -1) {
                $scope.EducationSector.selectedAll = false;
            } else {
                $scope.EducationSector.selectedAll = true;
            }
        }

        // Toggle ag sector
        if ($scope.EducationSector.selectedAll == true) {
            $scope.EducationLayer.active = true;
            $scope.checkAllEducation();
        } else {
            $scope.EducationLayer.active = false;
            $scope.checkAllEducation();
        }

    };


    $scope.toggleViewAllHealth = function () {
        $scope.HealthSector.viewAll = !$scope.HealthSector.viewAll;
    };

    $scope.toggleViewAllAg = function () {
        $scope.AgSector.viewAll = !$scope.AgSector.viewAll;
    };

    $scope.toggleViewAllLibrary = function () {
        $scope.LibrarySector.viewAll = !$scope.LibrarySector.viewAll;
    };

    $scope.toggleViewAllCICOS = function () {
        $scope.CICOSector.viewAll = !$scope.CICOSector.viewAll;
    };

    $scope.toggleViewAllEducation = function () {
        //$scope.EducationSector.viewAll = !$scope.EducationSector.viewAll;
    }

    $scope.ViewAllSectors = function () {
        if ($scope.CICOSector.active == false) $scope.toggleViewAllCICOS();
        if ($scope.LibrarySector.active == false) $scope.toggleViewAllLibrary();
        if ($scope.AgSector.active == false) $scope.toggleViewAllAg();
        if ($scope.HealthSector.active == false) $scope.toggleViewAllHealth();
    };

    // Handle filters clicks events
    $scope.setCICOSelection = function (type, checked, prov_type, prov_checked) {
        // Set selected value for each type based on checkbox
        if (type !== null && checked !== null) {
            for (var i = 0; i < $scope.CICOSector.length; i++) {
                if (type == $scope.CICOSector[i].type) {
                    $scope.CICOSector[i].selected = checked;
                    break;
                }
                console.log(type + ": " + checked);
            }
        }

        // Save selected Filters into array
        $scope.CICOSelections = [];
        $scope.CICOSelections_obj = {};
        $scope.CICOTop3 = [];
        var cico_sector = '';

        if ($scope.selection == 'India') {
            cico_sector = 'CICOS';
        }
        if ($scope.selection == 'Kenya') {
            cico_sector = 'cicos_kenya';
        }
        if ($scope.selection == 'Nigeria') {
            cico_sector = 'cicos_nigeria';
        }

        if ($scope.selection == 'Uganda') {
            cico_sector = 'cicos_uganda';
        }

        //save selection index
        var sidx = 0;
        var order = 0;


        //Add to CICO Selections
        for (var i = 0; i < $scope.CICOSector.length; i++) {
            var providers = [];
            if ($scope.CICOSector[i].selected == true) {
                if ($scope.CICOSector[i].providers) {
                    for (var x = 0; x < $scope.CICOSector[i].providers.length; x++) {
                        if (prov_type !== null && prov_checked !== null) {
                            if (type == $scope.CICOSector[i].type && $scope.CICOSector[i].providers[x].type == prov_type) {
                                $scope.CICOSector[i].providers[x].selected = prov_checked;
                            }
                        }
                        if ($scope.CICOSector[i].providers[x].selected == true) {
                            providers.push($scope.CICOSector[i].providers[x].type);
                        }
                    }
                    $scope.CICOSelections.push({
                            type: $scope.CICOSector[i].type,
                            selected: $scope.CICOSector[i].selected,
                            sector: cico_sector,
                            providers: providers
                        }
                    );
                } else {
                    $scope.CICOSelections.push({
                        type: $scope.CICOSector[i].type,
                        selected: $scope.CICOSector[i].selected,
                        sector: cico_sector
                    });
                }

                //Add to Top 3 array
                for (var j = 0; j < $scope.CICOSelections.length; j++) {
                    // Top 3 includes the LAST 3 CICO selections
                    if ($scope.CICOTop3.includes($scope.CICOSelections[$scope.CICOSelections.length - 1]) == false) {
                        if ($scope.CICOTop3.length >= 3) {
                            $scope.CICOTop3.splice(sidx, 1, $scope.CICOSelections[$scope.CICOSelections.length - 1]);
                            $scope.top3 = ($scope.CICOTop3.length > 0);
                            //$scope.CICOSector.viewAll = false;
                            if (sidx < 2) {
                                sidx++;
                            } else {
                                sidx = 0;
                            }
                        } else {
                            $scope.CICOTop3.push($scope.CICOSelections[$scope.CICOSelections.length - 1]);
                            $scope.top3 = ($scope.CICOTop3.length > 0);
                            //$scope.CICOSector.viewAll = false;

                        }
                    }
                }
            }
        }


        // Add object containing layer name to cico selections so map will remove the last sector (map.js findLayer())
        if ($scope.CICOSelections.length == 0) {
            $scope.CICOSelections.push({sector: cico_sector});
        }

    };

    $scope.setAgSelection = function (sector, checked) {

        // Set selected value for each sector based on checkbox
        for (var i = 0; i < $scope.AgSector.length; i++) {
            if (sector == $scope.AgSector[i].type) {
                $scope.AgSector[i].selected = checked;
                break;
            }
            console.log(sector + ": " + checked);
        }
        // Save selected Filters into array
        $scope.AgSelections = [];
        $scope.AgSelections_obj = {};
        $scope.AgTop3 = [];

        var ag_sector = '';

        if ($scope.selection == 'India') {
            ag_sector = 'agriculture';
        }

        if ($scope.selection == 'Uganda') {
            ag_sector = 'agriculture_uganda';
        }

        //save selection index
        var sidx = 0;
        var order = 0;

        //Add to Ag Selections
        for (var i = 0; i < $scope.AgSector.length; i++) {
            if ($scope.AgSector[i].selected == true) {
                $scope.AgSelections.push({
                        type: $scope.AgSector[i].type,
                        selected: $scope.AgSector[i].selected,
                        sector: ag_sector
                    }
                );
                //Add to Top 3 array
                for (var j = 0; j < $scope.AgSelections.length; j++) {
                    // Top 3 includes the LAST 3 Ag selections
                    if ($scope.AgTop3.includes($scope.AgSelections[$scope.AgSelections.length - 1]) == false) {
                        if ($scope.AgTop3.length >= 3) {
                            $scope.AgTop3.splice(sidx, 1, $scope.AgSelections[$scope.AgSelections.length - 1]);
                            $scope.top3 = ($scope.AgTop3.length > 0);
                            //$scope.AgSector.viewAll = false;
                            if (sidx < 2) {
                                sidx++;
                            } else {
                                sidx = 0;
                            }
                        } else {
                            $scope.AgTop3.push($scope.AgSelections[$scope.AgSelections.length - 1]);
                            $scope.top3 = ($scope.AgTop3.length > 0);
                            //$scope.AgSector.viewAll = false;

                        }
                    }
                }
            }
        }

        // Add object containing layer name to health selections so map will remove the last sector (map.js findLayer())
        if ($scope.AgSelections.length == 0) {
            $scope.AgSelections.push({sector: ag_sector});
        }

        //var AgSelectionsLength = $scope.AgSelections.length;
        //// Hard coded 16
        //if ($scope.selection == 'Kenya' && AgSelectionsLength < AgFilterFactory.AgsTypeTotal_Kenya) {
        //    $scope.AgSector.selectedAll = false;
        //} else {
        //    $scope.AgSector.selectedAll = true;
        //}

        //for(var i=$scope.AgSelections.length-1;i<3;i++){
        //  $scope.AgTop3.push($scope.AgSelections[i]);
        //}

        console.log("TOP 3: " + $scope.AgTop3);
        //console.log("length: " + AgSelectionsLength + " " + $scope.AgSelections);
    };

    $scope.setHealthSelection = function (sector, checked) {
        // Set selected value for each sector based on checkbox
        for (var i = 0; i < $scope.HealthSector.length; i++) {
            if (sector == $scope.HealthSector[i].type) {
                $scope.HealthSector[i].selected = checked;
                break;
            }
            console.log(sector + ": " + checked);
        }
        // Save selected Filters into array
        $scope.HealthSelections = [];
        $scope.HealthSelections_obj = {};
        $scope.HealthTop3 = [];

        var health_sector = '';

        if ($scope.selection == 'India') {
            health_sector = 'health';
        }

        //save selection index
        var sidx = 0;
        var order = 0;

        //Add to Health Selections
        for (var i = 0; i < $scope.HealthSector.length; i++) {
            if ($scope.HealthSector[i].selected == true) {
                $scope.HealthSelections.push({
                        type: $scope.HealthSector[i].type,
                        selected: $scope.HealthSector[i].selected,
                        sector: health_sector
                    }
                );
                //Add to Top 3 array
                for (var j = 0; j < $scope.HealthSelections.length; j++) {
                    // Top 3 includes the LAST 3 Health selections
                    if ($scope.HealthTop3.includes($scope.HealthSelections[$scope.HealthSelections.length - 1]) == false) {
                        if ($scope.HealthTop3.length >= 3) {
                            $scope.HealthTop3.splice(sidx, 1, $scope.HealthSelections[$scope.HealthSelections.length - 1]);
                            $scope.top3 = ($scope.HealthTop3.length > 0);
                            $scope.HealthSector.viewAll = false;
                            if (sidx < 2) {
                                sidx++;
                            } else {
                                sidx = 0;
                            }
                        } else {
                            $scope.HealthTop3.push($scope.HealthSelections[$scope.HealthSelections.length - 1]);
                            $scope.top3 = ($scope.HealthTop3.length > 0);
                            //$scope.HealthSector.viewAll = false;

                        }
                    }
                }
            }
        }

        // Add object containing layer name to health selections so map will remove the last sector (map.js findLayer())
        if ($scope.HealthSelections.length == 0) {
            $scope.HealthSelections.push({sector: health_sector});
        }

        //var HealthSelectionsLength = $scope.HealthSelections.length;
        //// Hard coded 16
        //if ($scope.selection == 'Kenya' && HealthSelectionsLength < HealthFilterFactory.HealthsTypeTotal_Kenya) {
        //    $scope.HealthSector.selectedAll = false;
        //} else {
        //    $scope.HealthSector.selectedAll = true;
        //}

        //for(var i=$scope.HealthSelections.length-1;i<3;i++){
        //  $scope.HealthTop3.push($scope.HealthSelections[i]);
        //}

        console.log("TOP 3: " + $scope.HealthTop3);
        //console.log("length: " + HealthSelectionsLength + " " + $scope.HealthSelections);
    };

    $scope.setLibrarySelection = function (sector, checked) {
        // Set selected value for each sector based on checkbox
        for (var i = 0; i < $scope.LibrarySector.length; i++) {
            if (sector == $scope.LibrarySector[i].type) {
                $scope.LibrarySector[i].selected = checked;
                break;
            }
            console.log(sector + ": " + checked);
        }
        // Save selected Filters into array
        $scope.LibrarySelections = [];
        $scope.LibrarySelections_obj = {};
        $scope.LibraryTop3 = [];

        var library_sector = '';

        if ($scope.selection == 'India') {
            library_sector = 'library';
        }

        //save selection index
        var sidx = 0;
        var order = 0;

        //Add to Library Selections
        for (var i = 0; i < $scope.LibrarySector.length; i++) {
            if ($scope.LibrarySector[i].selected == true) {
                $scope.LibrarySelections.push({
                        type: $scope.LibrarySector[i].type,
                        selected: $scope.LibrarySector[i].selected,
                        sector: library_sector
                    }
                );
                //Library only has 4 sub sectors; top 3 is unnecessary
                //Add to Top 3 array
                //for (var j = 0; j < $scope.LibrarySelections.length; j++) {
                //    // Top 3 includes the LAST 3 Library selections
                //    if ($scope.LibraryTop3.includes($scope.LibrarySelections[$scope.LibrarySelections.length - 1]) == false) {
                //        if ($scope.LibraryTop3.length >= 3) {
                //            $scope.LibraryTop3.splice(sidx, 1, $scope.LibrarySelections[$scope.LibrarySelections.length - 1]);
                //            $scope.top3 = ($scope.LibraryTop3.length > 0);
                //            $scope.LibrarySector.viewAll = false;
                //            if (sidx <2){sidx++;} else {sidx = 0;}
                //        } else {
                //            $scope.LibraryTop3.push($scope.LibrarySelections[$scope.LibrarySelections.length - 1]);
                //            $scope.top3 = ($scope.LibraryTop3.length > 0);
                //            //$scope.LibrarySector.viewAll = false;
                //
                //        }
                //    }
                //}
            }
        }

        // Add object containing layer name to library selections so map will remove the last sector (map.js findLayer())
        if ($scope.LibrarySelections.length == 0) {
            $scope.LibrarySelections.push({sector: library_sector});
        }

        //var LibrarySelectionsLength = $scope.LibrarySelections.length;
        //// Hard coded 16
        //if ($scope.selection == 'Kenya' && LibrarySelectionsLength < LibraryFilterFactory.LibrarysTypeTotal_Kenya) {
        //    $scope.LibrarySector.selectedAll = false;
        //} else {
        //    $scope.LibrarySector.selectedAll = true;
        //}

        //for(var i=$scope.LibrarySelections.length-1;i<3;i++){
        //  $scope.LibraryTop3.push($scope.LibrarySelections[i]);
        //}

        console.log("TOP 3: " + $scope.LibraryTop3);
        //console.log("length: " + LibrarySelectionsLength + " " + $scope.LibrarySelections);
    };

    // BroadCast change in filter Selections
    $scope.$watch('AgSelections', function () {
        $rootScope.$broadcast('AgSelections', $scope.AgSelections);
    });

    $scope.$watch('CICOSelections', function () {
        //console.log($scope.CICOSector);
        $rootScope.$broadcast('CICOSelections', $scope.CICOSelections);
    }, true);

    $scope.$watch('HealthSelections', function () {
        $rootScope.$broadcast('HealthSelections', $scope.HealthSelections);
    });

    $scope.$watch('LibrarySelections', function () {
        $rootScope.$broadcast('LibrarySelections', $scope.LibrarySelections);
    });

    // Watch for change in selected Sector
    $scope.$watch(function () {
            return SectorFactory.SelectedSector;
        }, function () {
            $scope.selectedSector = SectorFactory.SelectedSector;
            $scope.allSectors = SectorFactory.allSectors;
        }
    );

    $scope.submitFilter = function () {
        $stateParams.filters = $scope.whereClause;
        var state = $state.current.name || 'main';
        $state.go(state, $stateParams);
    };

    $scope.clearAllFilters = function () {
        //$scope.AgSector.selectedAll = false;
        //$scope.LibrarySector.selectedAll = false;
        //
        //$scope.scrapeCICOSelection();
        //$scope.scrapeHealthSelection();
        //
        //LibraryFilterFactory.clearAll($scope.LibrarySector,$scope.selectedSector,$scope.LibrarySector.selectedAll);
        //$scope.checkedBool = LibraryFilterFactory.checkBool;
        //AgFilterFactory.clearAll($scope.AgSector,$scope.selectedSector,$scope.AgSector.selectedAll);
        //$scope.checkedBool = AgFilterFactory.checkBool;
    };

    $scope.scrapeCICOSelection = function () {
        $scope.CICOSector.selectedAll = false;
        $scope.CICOLayer.active = false;
        CICOFilterFactory.clearAll($scope.CICOSector, $scope.selectedSector, $scope.CICOSector.selectedAll);
        $scope.checkedBool = CICOFilterFactory.checkBool;
        $scope.CICOSector.selectedAll = CICOFilterFactory.selectall;

        console.log("CICO Checked Bool: " + $scope.checkedBool);
        console.log("CICO Selected All: " + $scope.CICOSector.selectedAll);
        console.log("CICO Active? " + $scope.CICOLayer.active);
    };

    $scope.scrapeHealthSelection = function () {
        $scope.HealthSector.selectedAll = false;
        $scope.HealthLayer.active = false;
        HealthFilterFactory.clearAll($scope.HealthSector, $scope.selectedSector, $scope.HealthSector.selectedAll);
        $scope.checkedBool = HealthFilterFactory.checkBool;
        $scope.HealthSector.selectedAll = HealthFilterFactory.selectall;

        console.log("Health Checked Bool: " + $scope.checkedBool);
        console.log("Health Selected All: " + $scope.HealthSector.selectedAll);
        console.log("Health Active? " + $scope.HealthLayer.active);

    };

    $scope.gadmLevel = $stateParams.level || 'auto';

    $scope.$watch('gadmLevel', function (newValue) {
        $stateParams.level = newValue;
        var state = $state.current.name || 'main';
        $state.go(state, $stateParams);
    });

    $scope.$on('zoom-update', function () {
        console.log("zoom: " + $stateParams.zoom);
        $scope.zoom = parseInt($stateParams.zoom);
    });

    //NH TODO: Not yet fully implemented - possible extra feature...
    /**
     * Layers that are active on the map but are not mentioned in LayerConfig
     * @type {{}}
     */
    $scope.nomadLayers = {};

    /**
     * When the route changes, we should see what layers we have on there and have the layers
     * in the panels checked accordingly.
     */
    $scope.$on('layers-update', function (evt, layers) {
        var currentlayers = [];

        // set current layers for map.js scope.allSectors
        var layers = $stateParams.layers.split(",");
        layers.forEach(function (val, idx) {
            if (idx !== 0 && currentlayers.indexOf(val) == -1) {
                currentlayers.push(val);
            }
        });

        SectorFactory.allSectors = currentlayers;

        // filter cico is used two ways; parameter is false when filtering from a url layer update
        // true when filtering from UI
        $scope.filterCICO(false);
        $scope.filterLibrary(false);
        $scope.filterAg(false);
        $scope.filterHealth(false);

        $rootScope.$broadcast('all-sectors',currentlayers);

        // github gists
        $scope.listGists();

        // reset the nomad layers
        for (var nk in $scope.nomadLayers) {
            $scope.nomadLayers[nk].active = false;
        }

        // reset the layer config layers
        for (var lck in LayerConfig) {
            if (typeof LayerConfig[lck] === 'object' && LayerConfig[lck] !== null) {
                LayerConfig[lck].active = false;
            }
        }

        /**
         * Check if the layer is active in map layers
         */
        $scope.mapLayers = layers;
        // skip the first layer, the basemap
        for (var i = 1, len = layers.length; i < len; i++) {
            var l = layers[i];
            // layer is in the layer config
            if (typeof LayerConfig[l] === 'object' && LayerConfig[l] !== null) {
                LayerConfig[l].active = true;
            }
            // layer is a github gist
            else if ($scope.gists[l]) {
                $scope.gists[l].active = true;
            }
            // layer is a not in the layer config. it's nomadic.
            else {
                $scope.nomadLayers[l] = {
                    name: l,
                    url: l,
                    active: true
                }
            }
        }
    });

    $scope.toggleMapLayer = function (layerKey, layer) {

        if ($scope.selection == 'Kenya') {
            layerKey = 'cicos_kenya';
            layer = $scope.CICOLayer_Kenya;
        }

        if ($scope.selection == 'Nigeria') {
            layerKey = 'cicos_nigeria';
            layer = $scope.CICOLayer_Nigeria;
        }

        if ($scope.selection == 'Uganda'){
            if(layerKey == 'cicos_uganda' || layerKey == 'CICOS'){
                layerKey = 'cicos_uganda';
                layer = $scope.CICOLayer_Uganda;
            }
            if(layerKey == 'education'){
                layerKey = 'education_uganda';
                layer = $scope.EducationLayer;
            }
            if (layerKey == 'agriculture'){
                layerKey = 'agriculture_uganda';
                layer = $scope.AgLayer;
            }
        }

        // add layer

        if (layer.active === true && $stateParams.layers.indexOf(layerKey)==-1) {
            $scope.mapLayers.push(layerKey);

            // remove layer
        } else {
            $scope.mapLayers = $.grep($scope.mapLayers, function (routeLayer) {
                return routeLayer !== layerKey;
            });
            console.log("Not active");
        }

        $stateParams.layers = $scope.mapLayers.join(',');
        var state = $state.current.name || 'main';
        $state.go(state, $stateParams);

    };

    $scope.removeMapLayer = function (layerKey, layer) {

        // remove layer
        if (layer.active === false) {
            $scope.mapLayers = $.grep($scope.mapLayers, function (routeLayer) {
                return routeLayer !== layerKey;
            });
            console.log("Not active");
        }

        $stateParams.layers = $scope.mapLayers.join(',');
        var state = $state.current.name || 'main';
        $state.go(state, $stateParams);

    };

    $scope.listGists = function () {
        $scope.gists = gists.fetch();
        if ($scope.gists) {
            $scope.numGists = Object.keys($scope.gists).length;
        } else {
            $scope.numGists = 0;
        }
    };
    $scope.listGists();

});

},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/info.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

module.exports = angular.module('SpatialViewer').controller('InfoCtrl', function($scope) {
  $scope.params = $stateParams;
});
},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/layers.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

module.exports = angular.module('SpatialViewer').controller('LayersCtrl', function($scope, $state, $stateParams, LayerConfig, VectorProvider) {
  $scope.params = $stateParams;
  $scope.zoom = parseInt($stateParams.zoom);
  $scope.navTab = 'contextual';

  debug.LayerConfig = LayerConfig;

  $scope.gadmLevel = $stateParams.level || 'auto';

  $scope.$watch('gadmLevel', function (newValue) {
    $stateParams.level = newValue;
    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
  });

  $scope.$on('zoom-update', function () {
    console.log("zoom: " + $stateParams.zoom);
    $scope.zoom = parseInt($stateParams.zoom);
  });

  $scope.layersPanels = {
//    'Boundaries': {},
//    'GeoJSON': {},
//    'KML': {},
//    'CSV': {},
//    'WMS': {},
    'Contextual layers:': {}
  };

  for (var layerKey in LayerConfig) {

    // We don't want to show layers that are basemaps, and we don't want to show the find func.
    if (  typeof LayerConfig[layerKey] === 'function'
        || layerKey === 'basemaps'
        || LayerConfig[layerKey].type === 'basemap') {

      continue;
    }

    /**
     * Put layers in their respective categories.
     */
//
//    else if (LayerConfig[layerKey].type && LayerConfig[layerKey].type.toLowerCase() === 'geojson') {
//      $scope.layersPanels.GeoJSON[layerKey] = LayerConfig[layerKey];
//    }
//
//    else if (LayerConfig[layerKey].type && LayerConfig[layerKey].type.toLowerCase() === 'kml') {
//      $scope.layersPanels.KML[layerKey] = LayerConfig[layerKey];
//    }
//
//    else if (LayerConfig[layerKey].type && LayerConfig[layerKey].type.toLowerCase() === 'csv') {
//      $scope.layersPanels.CSV[layerKey] = LayerConfig[layerKey];
//    }
//
//    else if (LayerConfig[layerKey].type && LayerConfig[layerKey].type.toLowerCase() === 'wms') {
//      $scope.layersPanels.WMS[layerKey] = LayerConfig[layerKey];
//    }

    $scope.layersPanels['Contextual layers:'][layerKey] = keyToObj(layerKey);

  }

  debug.layersPanels = $scope.layersPanels;

  function keyToObj(key) {
    val = LayerConfig[layerKey];
    if (typeof val === 'string') {
      return {
        url: val
      };
    }
    return val;
  }

  //NH TODO: Not yet fully implemented - possible extra feature...
  /**
   * Layers that are active on the map but are not mentioned in LayerConfig
   * @type {{}}
   */
  $scope.nomadLayers = {};

  /**
   * When the route changes, we should see what layers we have on there and have the layers
   * in the panels checked accordingly.
   */
  //$scope.$on('layers-update', function(evt, layers) {
  //
  //  // github gists
  //  $scope.listGists();
  //
  //  // reset the nomad layers
  //  for (var nk in $scope.nomadLayers) {
  //    $scope.nomadLayers[nk].active = false;
  //  }
  //
  //  // reset the layer config layers
  //  for (var lck in LayerConfig) {
  //    if (typeof LayerConfig[lck] === 'object' && LayerConfig[lck] !== null) {
  //      LayerConfig[lck].active = false;
  //    }
  //  }
  //
  //  /**
  //   * Check if the layer is active in map layers
  //   */
  //  $scope.mapLayers = layers;
  //  // skip the first layer, the basemap
  //  for (var i = 1, len = layers.length; i < len; i++) {
  //    var l = layers[i];
  //    // layer is in the layer config
  //    if (typeof LayerConfig[l] === 'object' && LayerConfig[l] !== null) {
  //      LayerConfig[l].active = true;
  //    }
  //    // layer is a github gist
  //    else if ($scope.gists[l]) {
  //      $scope.gists[l].active = true;
  //    }
  //    // layer is a not in the layer config. it's nomadic.
  //    else {
  //      $scope.nomadLayers[l] = {
  //        name: l,
  //        url: l,
  //        active: true
  //      }
  //    }
  //  }
  //});

  $scope.toggleMapLayer = function (layerKey, layer) {

    // add layer
    if (layer.active === true) {
      $scope.mapLayers.push(layerKey);

      // remove layer
    } else {
      $scope.mapLayers = $.grep($scope.mapLayers, function(routeLayer){
        return routeLayer !== layerKey;
      });
    }

    $stateParams.layers = $scope.mapLayers.join(',');
    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);

  };

  $scope.listGists = function () {
    $scope.gists = gists.fetch();
    if ($scope.gists) {
      $scope.numGists = Object.keys($scope.gists).length;
    } else {
      $scope.numGists = 0;
    }
  };
  $scope.listGists();
  debug.gistsLayersPanel = $scope.gists;

});
},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/legend.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

module.exports = angular.module('SpatialViewer').controller('LegendCtrl', function($scope, LayerConfig, $stateParams) {

  //$scope.$on('layers-update', function (evt, layers) {
  //  $scope.layers = [];
  //  for (var i = layers.length - 1; i >= 1; i--){
  //    var l = layers[i];
  //    var layer = {};
  //    var lcfg = LayerConfig.find(l);
  //
  //    layer.alias = l;
  //    layer.name = lcfg.name;
  //    if(l === 'themecount' || l === 'theme'){
  //        layer.name = $stateParams.theme || 'Project';
  //    }
  //    if (!name && lcfg.properties && lcfg.properties.title) {
  //      layer.name = lcfg.properties.title;
  //    } else if (!layer.name) {
  //      layer.name = l;
  //    }
  //
  //    if(lcfg.properties){
  //        if(lcfg.properties.legend){
  //            if(typeof lcfg.properties.legend === 'function'){
  //                  //Build the legend element
  //                  layer.activeLegend = lcfg.properties.legend($stateParams.theme || 'project');
  //            }
  //            else{
  //                //If legend is a string, use it directly
  //                layer.activeLegend = lcfg.properties.legend;
  //            }
  //        }else{
  //            //No legend defined.  Use a default.
  //
  //        }
  //    }
  //
  //    $scope.layers.push(layer);
  //  }
  //});

});
},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/main.js":[function(require,module,exports){
module.exports = angular.module('SpatialViewer').controller('MainCtrl', function($scope, $rootScope, $state, $stateParams, $location) {
  debug.$location = $location;
  localStorage.setItem('defaultRoute', $location.path());

  // NH TODO: See if this is also the case with ui-router?
  // weird bug where redirect peels out '://{s' when ':' is there
  // $routeParams.layers We just dont have the : in main.js so that
  // part of the path does not go away...
  var layersStr = $stateParams.layers = $stateParams.layers.replace('http//', 'http://');
  var themeStr = $stateParams.theme;

  var levelStr = $stateParams.level;
  var zoomStr = $stateParams.zoom;

  var country = $stateParams.country;

  $rootScope.$broadcast('route-update');

  /**
   * Only if the latest route has a different layer string than before.
   */
  if (layersStr !== window.prevLayersStr || themeStr !== window.prevTheme) {
    window.prevLayersStr = layersStr;
    window.prevTheme = themeStr;
    var layers = layersStr.split(',');
    $rootScope.$broadcast('layers-update', layers);
  }

  if(country !== window.prevCountryStr){
    window.prevCountryStr = country;
    $rootScope.$broadcast('country-update',country);
  }

  if (levelStr !== null && levelStr !== window.prevLevelStr) {
    window.prevLevelStr = levelStr;
    $rootScope.$broadcast('level-update', levelStr);
  }

  if (zoomStr !== window.prevZoomStr) {
    window.prevZoomStr = zoomStr;
    $rootScope.$broadcast('zoom-update', zoomStr);
  }

});

},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/map.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

module.exports = angular.module('SpatialViewer').controller('MapCtrl', function (LayerConfig, VectorProvider, IndiaFactory, SectorFactory,
                                                                                 KenyaFactory, CICOFilterFactory,
                                                                                 UgandaFactory, BangladeshFactory, TanzaniaFactory, NigeriaFactory,
                                                                                 $scope, $rootScope, $state, $stateParams,
                                                                                 $http) {
    var map = L.map('map', { maxZoom: 16});
    var lastLayersStr = '';
    var lastBasemapUrl = null;
    var layerDifference; //an object that stores whether or not new layers are added, or have been removed, and what their names are
    var basemapLayer = null;
    var layersStr = null;
    var overlays = [];
    var overlayNames = [];
    var overlays_dictionary = {};
    var theme = null;
    var filters = null;
    var MapBuilder = {};
    var allfeatures = [];
    $scope.allSectors = [];
    $scope.featureCollection = []; // cross sector features within selected buffer
    $scope.CICODetails = [];
    $scope.detailsIndex = 0;
    $scope.ALLpoints = [];
    /**
     * This is an object that is a hash of the LatLngs from clicks to the resulting buffer.
     * This is so that clickToBuffer does not have to do the expensive Turf operation repeatedly,
     * especially since several MVTSource layers will have the same event and independently be
     * processing this event.
     *
     * @type {{}}
     * @private
     */
    var latLngBufferHash = {};

    var LibraryDetails = {};
    var LibraryWhereClause = '';
    $scope.CICODetails = {};
    var CICOWhereClause = '';
    var AgWhereClause = '';
    var HealthWhereClause = '';
    var ProviderWhereClause = '';

    $scope.$on('AgSelections', function (event, args) {

        // object keys are the CICO selection sub sector names
        var typeobj = {};
        var sector = '';
        var types = [];

        if (args) {
            for(var i=0;i<args.length;i++){
                typeobj[args[i].type] = {
                    type: args[i].type,
                    sector: args[i].sector
                };
                types.push(args[i].type);
                sector = args[i].sector;
            }

            AgWhereClause = buildPostGresQueryExpression(types,null);

            var filter = function (feature, context) {
                if (feature && feature.properties) {
                    var featureProperty = feature.properties.type;
                    // check if selections are valid types
                    if (typeobj[featureProperty]) {
                        return true;  // show the feature
                    }
                    return false; //hide the feature
                } else {
                    console.error('We are trying to filter on a point with no feature or feature.properties.');
                }
                return false; // error state, there should be a feature with properties
            };

            var activeLayer = findLayer(sector);

            if (activeLayer) {
                activeLayer.setFilter(filter);
                activeLayer.redraw(true);
            }
        }

        console.log("MAP.JS Listener enabled" + args);
    });

    $scope.$on('CICOSelections', function (event, args) {

        // object keys are the CICO selection sub sector names
        var typeobj = {}; //  object of CICO selections and their providers
        var sector = '';
        var types = [];
        var providers = {};

        if (args) {
            for(var i=0;i<args.length;i++){
                // create object to compare feature filter properties with
                if (args[i].providers) {
                    typeobj[args[i].type] = {
                        type: args[i].type,
                        sector: args[i].sector,
                        providers: args[i].providers
                    };
                    types.push(args[i].type);
                    sector = args[i].sector;
                    providers[args[i].type] = {
                        providers: args[i].providers
                    }
                } else {
                    //these object does not have providers
                    typeobj[args[i].type] = {
                        type: args[i].type,
                        sector: args[i].sector
                    };
                    types.push(args[i].type);
                    sector = args[i].sector;
                }
            }

            // create where string that is part of the CICOWhere clause sub queries
            ProviderWhereClause = buildPostGresProviderExpression(providers);

            //create where clause for onclick events
            CICOWhereClause = buildPostGresQueryExpression(types, ProviderWhereClause);

            var pvdr_split = [];

            var filter = function (feature, context) {
                if (feature && feature.properties) {
                    var featureProperty = feature.properties.type;
                    // check if selections are valid types
                    if (typeobj[featureProperty]) {
                        // treat properties with providers different
                        if (typeobj[featureProperty].hasOwnProperty('providers') == true) {
                            var featureProvider = feature.properties.providers;

                            if(typeof featureProvider === 'undefined'){
                                console.log("investigate")
                            }

                            for (var i = 0; i < typeobj[featureProperty].providers.length; i++) {
                                //look for '|' in feature providers
                                if (featureProvider.indexOf("|") !== -1) {
                                    // split the properties and compare each value in array
                                    pvdr_split = featureProvider.split("|");
                                    for(var p=0;p<pvdr_split.length;p++){
                                        if (pvdr_split[p] === typeobj[featureProperty].providers[i]) return true;
                                    }
                                } else {
                                    //if no '|' compare the feature property to our typeobj
                                    if (featureProvider === typeobj[featureProperty].providers[i]) return true;
                                }
                            }
                        } else {
                            if (typeobj[featureProperty]) {
                                return true;
                            }
                        }
                    }
                    return false;

                } else {
                    console.error('We are trying to filter on a point with no feature or feature.properties.');
                }
                return false; // error state, there should be a feature with properties
            };

            // search for pbf later
            var activeLayer = findLayer(sector);

            console.log(activeLayer);

            if (activeLayer) {
                activeLayer.setFilter(filter); // set new filter
                activeLayer.redraw(true); // redraw the map
            }
        }

        console.log("MAP.JS Listener enabled" + args);
    });

    $scope.$on('HealthSelections', function (event, args) {

        // object keys are the CICO selection sub sector names
        var typeobj = {};
        var sector = '';
        var types = [];

        if (args) {
            args.forEach(function (val, idx) {
                typeobj[val.type] = {
                    type: val.type,
                    sector: val.sector
                };
                types.push(val.type);
                sector = val.sector;
            });

            HealthWhereClause = buildPostGresQueryExpression(types,null);

            var filter = function (feature, context) {
                if (feature && feature.properties) {
                    var featureProperty = feature.properties.type;
                    // check if selections are valid types
                    if (typeobj[featureProperty]) {
                        return true;  // show the feature
                    }
                    return false; //hide the feature
                } else {
                    console.error('We are trying to filter on a point with no feature or feature.properties.');
                }
                return false; // error state, there should be a feature with properties
            };


            var activeLayer = findLayer(sector);

            if (activeLayer) {
                activeLayer.setFilter(filter);
                activeLayer.redraw();
            }
        }

        console.log("MAP.JS Listener enabled" + args);
    });

    $scope.$on('LibrarySelections', function (event, args) {

        // object keys are the CICO selection sub sector names
        var typeobj = {};
        var sector = '';
        var types = [];

        if (args) {
            args.forEach(function (val, idx) {
                typeobj[val.type] = {
                    type: val.type,
                    sector: val.sector
                };
                types.push(val.type);
                sector = val.sector;
            });

            LibraryWhereClause = buildPostGresQueryExpression(types,null);

            var filter = function (feature, context) {
                if (feature && feature.properties) {
                    var featureProperty = feature.properties.type;
                    // check if selections are valid types
                    if (typeobj[featureProperty]) {
                        return true;  // show the feature
                    }
                    return false; //hide the feature
                } else {
                    console.error('We are trying to filter on a point with no feature or feature.properties.');
                }
                return false; // error state, there should be a feature with properties
            };

            var activeLayer = findLayer(sector);

            if (activeLayer) {
                activeLayer.setFilter(filter);
                activeLayer.redraw();
            }
        }

        console.log("MAP.JS Listener enabled" + args);
    });

    $scope.setCountry = function(country){
        if( $scope.CountryList.countryNames.indexOf(country) !== -1){
            SectorFactory.setCountry(country);
            $scope.selection = country;
            $stateParams.country = country;
            $scope.closeParam('details-panel');
            $state.go($state.current.name, $stateParams); // update app state with new param
        }
    };

    $scope.params = $stateParams;
    $scope.blur = '';

    var PixelsToMetersByZoom = [
        156412,
        78206,
        39103,
        19551,
        9776,
        4888,
        2444,
        1222,
        610.984,
        305.492,
        152.746,
        76.373,
        38.187,
        19.093,
        9.547,
        4.773,
        2.387,
        1.193,
        .596,
        .298
    ];

    // Country Select
    // All variables will be inherited by other controllers

    $scope.CountryList = SectorFactory.CountryList;

    $scope.selection = $scope.CountryList.default.country;
    SectorFactory.selectedCountry = $scope.selection;

    $scope.$on('country-update',function(){
        //if($scope.CountryList.countryNames.indexOf($stateParams.country.capitalize()) !== -1) {
        //
        //    $scope.selection = $stateParams.country.capitalize();
        //    SectorFactory.setCountry($stateParams.country.capitalize());
        //
        //    $scope.zoomToCountry($scope.selection); // switch mapview to country coordinates
        //
        //    CICOWhereClause = ''; //reset query
        //
        //    //remove all layers but basemap
        //    var temparr = $stateParams.layers.split(",");
        //
        //    if(temparr.length>1) {
        //        if ($scope.selection !== 'India') {
        //            if (temparr[1].indexOf($scope.CountryList[$scope.selection].layer) == -1) {
        //                $stateParams.layers = temparr[0];
        //            }
        //
        //        } else {
        //            temparr.forEach(function (val, idx) {
        //                if (idx !== 0 && $scope.CountryList[$scope.selection].layer.indexOf(val) == -1) {
        //                    temparr.splice(temparr.indexOf(val), 1);
        //                    $stateParams.layers = temparr.join(",");
        //                }
        //            })
        //        }
        //    }
        //    $state.go($state.current.name, $stateParams); // update app state with new param
        //}

    });

    $scope.zoomToCountry = function (selected) {
        if (selected !== null) {
            $stateParams.lat = eval(selected + "Factory")[selected].MapCenter.Latitude;
            $stateParams.lng = eval(selected + "Factory")[selected].MapCenter.Longitude;
            $stateParams.zoom = eval(selected + "Factory")[selected].MapZoom;
        }
    };

    $scope.$on('all-sectors',function(){
        $scope.allSectors = SectorFactory.allSectors;
    });

    $scope.$watch(function () {
        return SectorFactory.selectedCountry;
    }, function () {
        $scope.selection= SectorFactory.selectedCountry;

        switch ($scope.selection) {
            case 'India':
                $scope.SectorTypes = {
                    typeNames: ['Financial Service', 'Library', 'Agriculture', 'Health']
                };
                break;
            case 'Kenya':
            case 'Uganda':
                $scope.SectorTypes = {
                    typeNames: ['Financial Service', 'Education', 'Agriculture']
                };
                break;
            default:
                $scope.SectorTypes = {
                    typeNames: ['Financial Service', 'Library', 'Agriculture', 'Health']
                };
        }
    });

    // watch for counter, when increased run http.get again and update variable
    $scope.toggleState = function (stateName) {
        var state = $state.current.name !== stateName ? stateName : 'main';
        $state.go(state, $stateParams);
    };

    $scope.$watch('selection',function(){
       $stateParams.country = $scope.selection;
    });

    function redraw() {
        var lat = parseFloat($stateParams.lat) || 0;
        var lng = parseFloat($stateParams.lng) || 0;
        var zoom = parseFloat($stateParams.zoom) || 8;
        layersStr = $stateParams.layers || LayerConfig.osm.url;
        var layers = layersStr.split(',');

        // first layer should always be treated as the basemap
        var basemap = LayerConfig.find(layers[0]) || LayerConfig.osm.url;
        if (typeof basemap === 'string') {
            var basemapUrl = basemap;
        } else {
            var basemapUrl = basemap.url;
        }
        overlayNames = layers.slice(1);

        if (lastBasemapUrl !== basemapUrl && typeof map === 'object') {
            if (basemapLayer) {
                map.removeLayer(basemapLayer);
            }
            basemapLayer = L.tileLayer(basemapUrl).addTo(map);

            basemapLayer.on('load', function () {
                //Move to back
                basemapLayer.bringToBack();
            });
        }

        if (lastLayersStr !== layersStr) {
            //See if new layers are added or if layers need to be removed.
            var lastLayersArray = lastLayersStr.split(',');
            var currentLayersArray = layersStr.split(',');

            if(lastLayersArray.length > currentLayersArray.length){
                //One or more layers has been removed.
                layerDifference = { type: 'removed', list: $(lastLayersArray).not(currentLayersArray).get()};
            }
            else{
                //One or more layers has been added
                layerDifference = { type: 'added', list: $(currentLayersArray).not(lastLayersArray).get()};

            }
        }

        drawOverlays(layerDifference);

        var c = $scope.center = {
            lat: lat,
            lng: lng,
            zoom: zoom
        };

        if (typeof map === 'object' && (c.lat != 0 && c.lng != 0)) {
            map.setView([c.lat, c.lng], zoom);
        }

        lastLayersStr = layersStr;
        lastBasemapUrl = basemapUrl;
    }


    /***
     * Broadcast Listeners.
     */

    $scope.$on('route-update', function () {

        if ($scope.blur === 'blur' && $state.current.name !== 'landing') {
            $scope.blur = '';
        }
        var c;
        if (!$scope.center) {
            var lat = parseFloat($stateParams.lat) || 0;
            var lng = parseFloat($stateParams.lng) || 0;
            var zoom = parseFloat($stateParams.zoom) || 8;

            c = $scope.center = {
                lat: lat,
                lng: lng,
                zoom: zoom
            };
        }
        else {
            c = $scope.center;
        }
        var lat = c.lat.toFixed(6);
        var lng = c.lng.toFixed(6);
        var zoom = c.zoom.toString();
        if (mapMoveEnd) {
            mapMoveEnd = false;
        } else if ($stateParams.lat !== lat
            || $stateParams.lng !== lng
            || $stateParams.zoom !== zoom
            || $stateParams.layers !== layersStr
            || $stateParams.theme !== theme
            || $stateParams.filters !== filters) {

            console.log('map.js route-update Updating Map...');
            redraw();
        }

    });

    $scope.$on('blur', function () {
        $scope.blur = 'blur';
    });

    //this takes in a WKT GeoJSON Extent geometry
    $scope.zoomToExtent = function (extent) {
        delete $stateParams['zoom-extent'];
        map.fitBounds([
            [extent[0][1], extent[0][0]],
            [extent[2][1], extent[2][0]]
        ]);
    };

    //This take a leaflet bounds object and handles it.
    delete $stateParams['zoom-extent'];
    $scope.zoomToBounds = function (bounds) {
        map.fitBounds(bounds);
    };


    window.map = map;
    map.on('moveend', function () { // move is good too
        var c = map.getCenter();
        var lat = c.lat.toFixed(6);
        var lng = c.lng.toFixed(6);
        var zoom = map.getZoom().toString();

        if ($stateParams.lat !== lat
            || $stateParams.lng !== lng
            || $stateParams.zoom !== zoom) {

            $stateParams.lat = lat;
            $stateParams.lng = lng;
            $stateParams.zoom = zoom;
            mapMoveEnd = true;
            $state.go($state.current.name, $stateParams);
        }
    });

    map.on('click', function (e) { // handle map click events

    });

    //Connect the layout onresize end event
    try {
        window.layout.panes.center.bind("layoutpaneonresize_end", function () {
            map.invalidateSize();
        });
    } catch (e) {
        //Nothing
    }


    function drawOverlays(differenceObject) {
        for (var i = 0, len = overlayNames.length; i < len; ++i) {
            var overlayName = overlayNames[i];
            var currOverlay = overlays[i];

            if (currOverlay && currOverlay.overlayName === overlayName) {
                continue; // layer is already there, continue on!
            }

            // remove the current layer that is not what should be that layer in the list
            else if (currOverlay && currOverlay._map) {
                if (currOverlay.destroyResource) currOverlay.destroyResource();
                map.removeLayer(currOverlay);
            }

            if (typeof LayerConfig[overlayName] === 'object'
              && LayerConfig[overlayName].type.toLowerCase() === 'pbf') {

                var cfg = LayerConfig[overlayName];
                var layer = new L.TileLayer.MVTSource(cfg);
                layer.addTo(map);

                map.on('click', function (evt) {
                    //Take the click event and pass it to the group layers.
                    //layer.onClick(e, function (evt) {
                    //    if (evt && evt.feature) {
                    //        console.log(['Clicked PBF Feature', evt.feature.properties]);
                    //    }
                    //});
                });

                map.on('layerremove', function (removed) {
                    //This is the layer that was removed.
                    //If it is a TileLayer.MVTSource, then call a method to actually remove the children, too.
                    if (removed.layer.removeChildLayers) {
                        removed.layer.removeChildLayers(map);
                    }
                });

            }

            // try for WMS (not a vector layer)
            // if things get more fancy with wms, it should get its own factory
            else if (typeof LayerConfig[overlayName] === 'object'
              && LayerConfig[overlayName].type.toLowerCase() === 'wms') {

                var cfg = LayerConfig[overlayName];
                var layer = L.tileLayer.wms(cfg.url, {
                    format: cfg.format || 'image/png',
                    transparent: cfg.transparent || true,
                    layers: cfg.layers
                });
                layer.addTo(map);
            }

            /**
             * Tiles that are an overlay. OSM / Google / Mapnik tend to make tiles in this format.
             */
            else if (typeof LayerConfig[overlayName] === 'object'
              && LayerConfig[overlayName].type.toLowerCase() === 'xyz') {

                var cfg = LayerConfig[overlayName];
                var layer = L.tileLayer(cfg.url, {
                    opacity: cfg.opacity || 0.5
                });
                layer.addTo(map);
            }

            /**
             * TMS flips the y. GeoServer often serves this.
             */
            else if (typeof LayerConfig[overlayName] === 'object'
              && LayerConfig[overlayName].type.toLowerCase() === 'tms') {
                var cfg = LayerConfig[overlayName];
                var layer = L.tileLayer(cfg.url, {
                    opacity: cfg.opacity || 0.5,
                    tms: true
                });
                layer.addTo(map);
            }

            // if its not wms, its a vector layer
            else {
                var vecRes = VectorProvider.createResource(overlayName);
                if (vecRes) {
                    var layer = vecRes.getLayer();
                    layer.addTo(map);
                }
                else {
                    //Not a valid layer.
                    console.log(overlayName + " is not a layer specified in layerConfig.js");
                    continue;
                }
            }

            if(layer) {
                layer.overlayName = overlayName;
                //layer.addTo(map);
                overlays[i] = layer;
                overlays_dictionary[overlayName] = layer; //keep a dictionary reference for faster fetching in UpdateECOSData

            }
        }

        if (differenceObject && differenceObject.type == 'removed') {
            // there are more overlays left in the list, less layers specified in route
            // we need to remove those too.
            var i = 0;
            for (var len2 = overlays.length; i < len2; ++i) {
                //If the overlay name exists in the list of layers to be removed, then remove it.
                if (overlays[i] && overlays[i].overlayName && differenceObject.list.indexOf(overlays[i].overlayName) > -1) {
                    if(overlays[i].destroyResource) overlays[i].destroyResource();
                    map.removeLayer(overlays[i]);
                    delete overlays_dictionary[overlays[i].overlayName]; //delete dictionary reference for faster fetching in UpdateECOSData
                    delete overlays[i];
                }
            }
        }
    }

    function findLayer(layer) {
        for (var i = 0; i < overlays.length; i++) {
            if (layer == overlays[i].overlayName) {
                return overlays[i];
            }
        }
    }

    var clickToBuffer = function (e) {
        // handle map click events
        //Depending on what mode we're in and what we're showing...
        //This is a test hard-coded for confetti mode.
        var latlng = e.latlng;
        var lat = e.latlng.lat;
        var lng = e.latlng.lng;
        var latLngStr = lat + ',' + lng;

        var buffer = latLngBufferHash[latLngStr];
        if (buffer) {
            return buffer;
        }

        var meters_per_pixel = PixelsToMetersByZoom[$stateParams.zoom];
        var tolerance_pixels = 8;  //The number of pixels around the click point to search in
        var tolerance_kilometers = (tolerance_pixels * meters_per_pixel) / 1000;

        //Convert pixel click buffer to meters.
        var bufferObj = turf.buffer(turf.point(lng, lat), tolerance_kilometers, 'kilometers');
        buffer = JSON.stringify(bufferObj);

        latLngBufferHash[latLngStr] = buffer;

        return buffer;
    };

    function buildPostGresQueryExpression(typearray, providers) {
        var typestring = '';
        var finalstring = '';

        if (typearray.length > 0) {
            if (typearray.length >= 1) {
                typearray.forEach(function (val) {
                    // handle providers
                    if (providers !== null && Object.keys(providers).length > 0) {
                        Object.keys(providers).forEach(function (p) {
                            // if cico selections has a type that has providers
                            if (p == val) {
                                typestring += " (type='" + val + "' AND (" + providers[p].providers + ")) OR";
                            } else {
                                // cico selection type that does not have provider
                                if (typestring.search(val) == -1) { // only append to string if type does not exist
                                    typestring += " (type='" + val + "') OR";
                                }
                            }
                        })
                    } else {
                        // all types with providers are unchecked
                        typestring += " (type='" + val + "') OR";
                    }
                });

                if ($scope.selection == 'Uganda' || $scope.selection == 'Kenya' || $scope.selection == 'Nigeria' || $scope.selection == 'India') {
                    //remove trailing 'OR'
                    finalstring = typestring.substring(0, typestring.length - 3);
                    return finalstring + "AND Country ='" +$scope.selection+ "'";
                }

                //return "type IN(" + finalstring + ")";

            } else {
                typearray.forEach(function (val) {
                    typestring += "'" + val + "'";
                });

                if($scope.selection == 'India'){
                    return "type IN(" + typestring + ") AND country = '" + $scope.selection +"'";
                } else {
                    return "type IN(" + finalstring + ") AND Country ='" + $scope.selection + "'";
                }
            }
        } else {
            return "";

        }
    }

    function buildPostGresProviderExpression(obj) {
        var fobj = {};

        var prvd = ($scope.selection == 'Uganda') ? 'prvd' : 'providers';

            if (Object.keys(obj)) { // if obj is valid
            Object.keys(obj).forEach(function (key) {
                if(obj[key].providers.length > 0){
                    fobj[key] = {providers: ''};
                    obj[key].providers.forEach(function (val, i) {
                        // for each filter, create string that combines all providers
                        fobj[key].providers += prvd + " like '%" + val + "%' or ";
                    });
                    // remove the last 'or ' from string
                    fobj[key].providers = fobj[key].providers.substring(0, fobj[key].providers.length - 3);
                }
            })
        }
        return fobj;
    }

    map.on('click', function (evt) {
        $scope.ALLpoints = [];
        //createOnClickEvent(evt, $scope.allSectors);
        console.log("Map Clicked");
    });


    $rootScope.$watch(function () {
        return LibraryDetails;
    }, function () {
        $rootScope.$broadcast('LibraryDetails', LibraryDetails);
    });

    $scope.$watch('CICODetails', function () {
        $rootScope.$broadcast('CICODetails', $scope.CICODetails);
    });

    function highlightPointSelection(index, points, sector) {

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

    function createOnClickEvent(evt, sector) {

        var buffer = clickToBuffer(evt);

        //L.geoJson(JSON.parse(buffer)).addTo(map);

        sector.forEach(function (val) {
            $scope.featureCollection = [];
            $scope.ALLdetails = [];
            switch (val.capitalize()) {
                case 'Health':
                    var tablePostArgs = {
                        returnfields: 'lat,lng,id,type,name,photos,delivery_center,separate_maternity,sba_resource,female_sterilization,intra_uterine,condoms,oral_pills,pharmacist,csection_emonc,phc_24_7,blood_transfusion,immunization,cold_chain_equipment',
                        format: 'geojson',
                        returnGeometry: 'yes',
                        intersects: buffer,
                        limit: 200 //add a limit of 200 so we don't get carried away
                    };

                    if (HealthWhereClause != '') {
                        tablePostArgs.where = HealthWhereClause;
                    }

                    var pointUrl = "http://spatialserver.spatialdev.com/services/tables/health_2014/query";

                    $http.post(pointUrl, tablePostArgs).success(function (points, qstatus) {
                        //GeoJSON result of points
                        if (!points || points.error) {
                            console.error('Unable to fetch feature: ' + points.error);
                            return;
                        }

                        //point is a featurecollection. open the panel and show some stuff.
                        if (points && points.features && points.features.length > 0) {
                            if ($scope.featureCollection.length < sector.length) {
                                // add sector and url for photos
                                points.features.forEach(function (val) {
                                    val.properties["sector"] = 'health';
                                    val.properties["url"] = "http://spatialserver.spatialdev.com/fsp-ebs/2014/" + $scope.selection.toLowerCase() + "/" + val.properties.sector + "/";
                                });
                                $scope.ALLpoints.push(points);
                                $scope.featureCollection.push(points.features);
                                $rootScope.$broadcast('details', $scope.featureCollection);
                            }

                            if ($scope.detailsIndex == 0) highlightPointSelection($scope.detailsIndex, $scope.featureCollection, "health");

                        }
                    });

                    break;
                case 'Agriculture':
                    var tablePostArgs = {
                        returnfields: 'lat,lng,id,type,name,photos,irrigation_pumps,farm_tractors,seed,fertilizer,chemical_inputs,organic_fertilizers,vet_supplies,tools_equipment,seed_muliplier,storage_capacity,urban_center_dist,seed_muliplier,vacination,inseminaiton,breeding,modernized',
                        format: 'geojson',
                        returnGeometry: 'yes',
                        intersects: buffer,
                        limit: 200 //add a limit of 200 so we don't get carried away
                    };

                    if (AgWhereClause != '') {
                        tablePostArgs.where = AgWhereClause;
                    }

                    var pointUrl = "http://spatialserver.spatialdev.com/services/tables/agriculture_2014/query";

                    $http.post(pointUrl, tablePostArgs).success(function (points, qstatus) {
                        //GeoJSON result of points
                        if (!points || points.error) {
                            console.error('Unable to fetch feature: ' + points.error);
                            return;
                        }

                        //point is a featurecollection. open the panel and show some stuff.
                        if (points && points.features && points.features.length > 0) {
                            if ($scope.featureCollection.length < sector.length) {
                                // add sector and url for photos
                                points.features.forEach(function (val) {
                                    val.properties["sector"] = 'agriculture';
                                    val.properties["url"] = "http://spatialserver.spatialdev.com/fsp-ebs/2014/" + $scope.selection.toLowerCase() + "/" + val.properties.sector + "/";
                                });
                                $scope.ALLpoints.push(points);
                                $scope.featureCollection.push(points.features);
                                $rootScope.$broadcast('details', $scope.featureCollection);
                            }

                            if ($scope.detailsIndex == 0) highlightPointSelection($scope.detailsIndex, $scope.featureCollection, "agriculture");

                        }
                    });

                    break;
                case 'Library':
                    var tablePostArgs = {
                        returnfields: 'lat,lng,name,type,id,photos,business_hours,staff_count,internet,public_computer_count,computer_fee',
                        format: 'geojson',
                        returnGeometry: 'yes',
                        intersects: buffer,
                        limit: 200 //add a limit of 200 so we don't get carried away
                    };

                    if (LibraryWhereClause != '') {
                        tablePostArgs.where = LibraryWhereClause
                    }

                    var pointUrl = "http://spatialserver.spatialdev.com/services/tables/library_2014/query";
                    $http.post(pointUrl, tablePostArgs).success(function (points, qstatus) {
                        //GeoJSON result of points
                        if (!points || points.error) {
                            console.error('Unable to fetch feature: ' + points.error);
                            return;
                        }

                        //point is a featurecollection. open the panel and show some stuff.
                        if (points && points.features && points.features.length > 0) {
                            if ($scope.featureCollection.length < sector.length) {
                                // add sector and url for photos
                                points.features.forEach(function (val) {
                                    val.properties["sector"] = 'library';
                                    val.properties["url"] = "http://spatialserver.spatialdev.com/fsp-ebs/2014/" + $scope.selection.toLowerCase() + "/" + val.properties.sector + "/";
                                });
                                $scope.ALLpoints.push(points);
                                $scope.featureCollection.push(points.features);
                                $rootScope.$broadcast('details', $scope.featureCollection);
                            }

                            if ($scope.detailsIndex == 0) highlightPointSelection($scope.detailsIndex, $scope.featureCollection, "library");
                        }
                    });
                    break;

                case 'CICOS':
                case 'Cicos_kenya':
                case 'Cicos_nigeria':
                case 'Cicos_uganda':
                    if ($scope.selection == 'India') {
                        var tablePostArgs = {
                            returnfields: 'lat,lng,name,assoc_bank,assoc_business,form_submitted,type,id,photos',
                            format: 'geojson',
                            returnGeometry: 'yes',
                            intersects: buffer,
                            limit: 200 //add a limit of 200 so we don't get carried away
                        };
                        var pointUrl = "http://spatialserver.spatialdev.com/services/tables/cicos_2014/query";
                        var photoRoot = "http://spatialserver.spatialdev.com/fsp-ebs/2014/" + $scope.selection.toLowerCase() + "/fsp/";
                        if (CICOWhereClause != '') {
                            tablePostArgs.where = CICOWhereClause
                        }

                        $http.post(pointUrl, tablePostArgs).success(function (points, qstatus) {
                            //GeoJSON result of points
                            if (!points || points.error) {
                                console.error('Unable to fetch feature: ' + points.error);
                                return;
                            }

                            //point is a featurecollection. open the panel and show some stuff.
                            if (points && points.features && points.features.length > 0) {
                                if ($scope.featureCollection.length < sector.length) {
                                    // add sector and url for photos
                                    points.features.forEach(function (val) {
                                        val.properties["sector"] = 'CICOS';
                                        val.properties["url"] = photoRoot;
                                    });
                                    $scope.ALLpoints.push(points);
                                    $scope.featureCollection.push(points.features);
                                    $rootScope.$broadcast('details', $scope.featureCollection);
                                }

                                if ($scope.detailsIndex == 0) highlightPointSelection($scope.detailsIndex, $scope.featureCollection, "CICOS");

                            }
                        });
                    }
                    if ($scope.selection == 'Nigeria') {
                        var tablePostArgs = {
                            returnfields: 'shared_agent,bank_operational,id,country,type,providers,photos,land_use,submit_date,bank_registered',
                            format: 'geojson',
                            returnGeometry: 'yes',
                            intersects: buffer,
                            limit: 200 //add a limit of 200 so we don't get carried away
                        };

                        var pointUrl = "http://spatialserver.spatialdev.com/services/tables/cicos_2013//query";
                        var photoRoot = "http://www.fspmaps.com/php/fetchPhoto.php?name=Nigeria/";

                        if (CICOWhereClause != '') {
                            tablePostArgs.where = CICOWhereClause;
                        }

                        $http.post(pointUrl, tablePostArgs).success(function (points, qstatus) {
                            //GeoJSON result of points
                            if (!points || points.error) {
                                console.error('Unable to fetch feature: ' + points.error);
                                return;
                            }

                            //point is a featurecollection. open the panel and show some stuff.
                            if (points && points.features && points.features.length > 0) {
                                if ($scope.featureCollection.length < sector.length) {
                                    // add sector and url for photos
                                    points.features.forEach(function (val) {
                                        val.properties["sector"] = 'cicos_nigeria';
                                        val.properties["url"] = photoRoot;
                                    });
                                    $scope.ALLpoints.push(points);
                                    $scope.featureCollection.push(points.features);
                                    $rootScope.$broadcast('details', $scope.featureCollection);
                                }

                                if ($scope.detailsIndex == 0) highlightPointSelection($scope.detailsIndex, $scope.featureCollection, "cicos_nigeria");

                            }
                        });
                    }
                    if ($scope.selection == 'Kenya') {
                        var tablePostArgs = {
                            returnfields: 'shared_agent,bank_operational,id,country,type,providers,photos,land_use,submit_date,bank_registered',
                            format: 'geojson',
                            returnGeometry: 'yes',
                            intersects: buffer,
                            limit: 200 //add a limit of 200 so we don't get carried away
                        };

                        var pointUrl = "http://spatialserver.spatialdev.com/services/tables/cicos_2013//query";
                        var photoRoot = "http://www.fspmaps.com/php/fetchPhoto.php?name=Kenya/";

                        if (CICOWhereClause != '') {
                            tablePostArgs.where = CICOWhereClause;
                        }

                        $http.post(pointUrl, tablePostArgs).success(function (points, qstatus) {
                            //GeoJSON result of points
                            if (!points || points.error) {
                                console.error('Unable to fetch feature: ' + points.error);
                                return;
                            }

                            //point is a featurecollection. open the panel and show some stuff.
                            if (points && points.features && points.features.length > 0) {
                                if ($scope.featureCollection.length < sector.length) {
                                    // add sector and url for photos
                                    points.features.forEach(function (val) {
                                        val.properties["sector"] = 'cicos_kenya';
                                        val.properties["url"] = photoRoot;
                                    });
                                    $scope.ALLpoints.push(points);
                                    $scope.featureCollection.push(points.features);
                                    $rootScope.$broadcast('details', $scope.featureCollection);
                                }

                                if ($scope.detailsIndex == 0) highlightPointSelection($scope.detailsIndex, $scope.featureCollection, "cicos_kenya");

                            }
                        });
                    }
                    if ($scope.selection == 'Uganda'){
                        var tablePostArgs = {
                            returnfields: 'type,status,submission_id,prvd,country',
                            format: 'geojson',
                            returnGeometry: 'yes',
                            intersects: buffer,
                            limit: 200 //add a limit of 200 so we don't get carried away
                        };

                        var pointUrl = "http://spatialserver.spatialdev.com/services/tables/cicos_2015/query";

                        if (CICOWhereClause != '') {
                            tablePostArgs.where = CICOWhereClause;
                        }

                        $http.post(pointUrl, tablePostArgs).success(function (points, qstatus) {
                            //GeoJSON result of points
                            if (!points || points.error) {
                                console.error('Unable to fetch feature: ' + points.error);
                                return;
                            }

                            //point is a featurecollection. open the panel and show some stuff.
                            if (points && points.features && points.features.length > 0) {
                                if ($scope.featureCollection.length < sector.length) {
                                    // add sector and url for photos
                                    points.features.forEach(function (val) {
                                        val.properties["sector"] = 'cicos_uganda';
                                    });
                                    $scope.ALLpoints.push(points);
                                    $scope.featureCollection.push(points.features);
                                    $rootScope.$broadcast('details', $scope.featureCollection);
                                }
                                if ($scope.detailsIndex == 0) highlightPointSelection($scope.detailsIndex, $scope.featureCollection, "cicos_uganda");

                            }
                        });
                    }
            }
        })
    }

    // watch for when user details panel index changes
    $scope.$on('activeidx', function (event, args) {
        // activeidx changes multiples times in details.js, so only run when details index != activeidx
        if ($scope.detailsIndex != args && args !== 0) {
            $scope.detailsIndex = args.properties.index;
            highlightPointSelection($scope.detailsIndex, $scope.featureCollection, args.properties.sector);
        }
    })

});
},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/navbar.js":[function(require,module,exports){
module.exports = angular.module('SpatialViewer').controller('NavBarCtrl', function($scope, $state, $stateParams,SectorFactory) {
  $scope.params = $stateParams;

});

},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/search.js":[function(require,module,exports){
/**
 * Created by Ryan Whitley <rwhitley@spatialdev.com>
 *       on 5/21/14.
 */

module.exports = angular.module('SpatialViewer').controller('SearchECOSCtrl', function($scope, $rootScope, $stateParams, $http, VectorProvider) {
  $scope.params = $stateParams;

  var url = config.chubbsPath('services/custom/custom_operation?name=doecostextsearch&format=json&text=:text');

  $scope.searchText = '';
  $scope.$watch('SearchInput', executeECOSSearch, true);


    $scope.FirstNames = ['Daniel','Ryan','Jubal','Clint','David','Daniela','Nick','Todd','Derrick','Lebron'];

  function executeECOSSearch (text){
      if(!text || text.length < 3) return;

      var thisURL = url.replace(":text", text);

      // Fetch from the server only if we don't have it in the hash
      $http.get(thisURL).success(function (result, status) {

          if (!result){
              $scope.results = [{name: "No results found."}];
              return;
          }

          if(result.error) {
              $scope.results = [{name: "Error searching ECOS."}];
              return;
          }

          //break up the results by type.
          $scope.projectResults = result.filter(function(item){
             return item.theme_type == 'Project';
          });

          $scope.disasterResults = result.filter(function(item){
              return item.theme_type == 'Disaster';
          });

      });
  }

    $scope.handleSearchResultClick = function(properties){
        //Send to deatils panel
        sendProjectToDetailsPanel(properties);

        //If we have a guid, then try to zoom to it.
        if(properties.location__r_gis_geo_id__c && properties.level){
            zoomToGUID(properties.location__r_gis_geo_id__c, properties.level);
        }
    };

    function sendProjectToDetailsPanel (properties){
        $rootScope.$broadcast('details', { feature: { properties: properties } });
    }

    //this is a duplicate from breadcrumbs.js  Should be refactored to a single function
    function zoomToGUID (guid, level) {
        //Given a GUID, zoom to the feature.

        //Grab the feature from the VectorProvider.
        VectorProvider.fetchFeature(guid, level, null, function (feat) {
            //Make a temp geojson layer and add the geojson.
            //Then grab the bounds from it and zoom to it.

            var gjl = L.geoJson(feat.geometry);
            $scope.$parent.zoomToBounds(gjl.getBounds());
        });

    };
});

},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/side-view.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *        and Ryan Whitley      <rwhitley@spatialdev.com>
 *         on 4/16/14.
 */

module.exports = angular.module('SpatialViewer').controller('SideViewCtrl', function($scope) {

  //resize function
  function resizeScrollablePanel() {
    $(".side-view .scrollable").height($(".side-view .navpanel").height() - $(".side-view .navpanel .scrollable").position().top);  //This should respond to window.resize events and will be set during that event to make sure the panel stays
  }

  //Connect the layout onresize end event
  window.layout.panes.center.bind("layoutpaneonresize_end", resizeScrollablePanel);

  //For Init.
  resizeScrollablePanel();

});

},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/theme.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 5/6/14.
 */

module.exports = angular.module('SpatialViewer').controller('ThemeCtrl', function ($scope, $rootScope, $state, $stateParams, VectorProvider) {

  var themeNameHash = $rootScope.themeNameHash = {
    all: 'All Countries',
    bangladesh: 'Bangladesh',
    india: 'India',
    indonesia: 'Indonesia',
    kenya: 'Kenya',
    nigeria: 'Nigeria',
    tanzania: 'Tanzania',
    uganda: 'Uganda'
  };

  $scope.setTheme = function(key) {
    $scope.themeName = themeNameHash[key];
    $scope.setThemeQueryParam(key);
  };

  $scope.setThemeQueryParam = function (theme) {
    $stateParams.theme = theme;
    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
  };

  $scope.themeName = themeNameHash[$stateParams.theme] || 'All Countries';

  /*
   Handling Theme Menu Animations
   */

  $scope.toggleThemeMenu = function(){
    var flippedOut = $(".menu-selection .dropdown").hasClass("open");

    if(flippedOut == false){
      $scope.unfurlThemes();
    }
    else{
      $scope.refurlThemes();
    }
  };

  $scope.unfurlThemes = function(){
    $scope.refurlThemes();
    //Try jQuery to add an 'on' class to each of the theme LI elements on a timer.
    $($('#ThemeMenu li').get().reverse()).each(function(index){
      var self = this;
      setTimeout(function () {
        $(self).addClass("theme-selector-li-on");
      }, index*150);
    });
  };

  //Refurl?
  $scope.refurlThemes = function(){
    //Try jQuery to remove the 'on' class to each of the theme LI elements on a timer.
    $('#ThemeSelectorMenu .dropdown-menu li').removeClass("theme-selector-li-on");
  };

  /*
   End Theme Menu Animations
   */

});
},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/tools.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/26/14.
 */

module.exports = angular.module('SpatialViewer').controller('ToolsCtrl', function($scope, $stateParams, StoriesConfig) {
  $scope.params = $stateParams;

  $scope.$on('nearby-click', function () {

  });




  });
},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/upload.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 4/17/14.
 */

module.exports = angular.module('SpatialViewer').controller('UploadCtrl', function($scope, $http, $state, $stateParams, $upload) {

  $scope.showAlert = false;
  $scope.showProgress = false;
  $scope.showUploadedUrl = false;
  $scope.percent = 3;
  $scope.disabled = false;
  $scope.kbUploaded = 0;
  $scope.kbTotal = 0;

  $scope.$upload = $upload;

  $scope.upload = function() {
    $("#upload-file-input").click().change(function(evt) {
      $scope.showProgress = true;
      $scope.percent = 5;

      var fileName = $(this).val().split('\\').pop();
      var file = $('#upload-file-input').get(0).files[0];
      parseAndUploadFile(file, fileName);

    });
  };

  $scope.fileDropped = function ($files) {
    var file = $files[0];
    parseAndUploadFile(file, file.name);
  };

  function parseAndUploadFile(file, fileName) {
    if (!fileName) fileName = 'file';
    var r = new FileReader();
    r.readAsBinaryString(file);
    r.onloadend = function(e){
      var data = e.target.result;
      var postObj = {
        "description": "Mapfolio Uploaded Data - " + fileName,
        "public": true,
        "files": {}
      };
      postObj.files[fileName] = {content: data};
      $scope.percent = 7;

      $scope.$upload.http({
        url: 'https://api.github.com/gists',
        method: "POST",
        data: postObj,
        headers: {'Content-Type': 'application/json'}
      }).progress(function(evt) {
        $scope.percent = parseFloat((evt.loaded / evt.totalSize * 100).toFixed(1));
        $scope.kbUploaded = (evt.loaded / 1024).toFixed(2);
        $scope.kbTotal = (evt.totalSize / 1024).toFixed(2);
      }).success(function (data, status, headers, config) {
        $scope.showProgress = false;
        var filename = data.files[fileName].filename;
        $scope.gistRawUrl = data.files[fileName].raw_url;
        $scope.gistHtmlUrl = data.html_url;
        $scope.disabled = true;
        $scope.showUploadedUrl = true;
        window.gists.append({name: filename, url: $scope.gistRawUrl, htmlUrl: $scope.gistHtmlUrl});
      }).error(function (data, status, headers, config) {
        $scope.showAlert = true;
        $scope.errorMessage = JSON.stringify(data,null,2);
      });

    };
  }

  $scope.addToMap = function () {
    var newUrl = $scope.gistRawUrl || $scope.remoteUrl;
    if (!newUrl) {
      $scope.showAlert = true;
      return;
    }

    $stateParams.layers = $stateParams.layers + ',' + newUrl;
    $('#uploadModal').modal('hide');
    $('#uploadModal').on('hidden.bs.modal', function(e) {
      $state.go('main', $stateParams);
    });

  };

  /**
   * If UploadCtrl gets called twice for some reason, we might
   * have this class hanging around blocking the app. UploadCtrl
   * does get called twice sometimes, because the modal sometimes
   * nudges the map and reinstantiates the modal again via a new
   * route.
   */
  $('.modal-backdrop').remove();

  $('#uploadModal').modal('show');

  $('#uploadModal').on('hidden.bs.modal', function(e) {
    $state.go('main', $stateParams);
  });

});

},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/controllers/zoom-extent.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *        and Ryan Whitley      <rwhitley@spatialdev.com>
 *       on 4/2/14.
 */

module.exports = angular.module('SpatialViewer').controller('ZoomExtentCtrl', function($scope, $rootScope, $stateParams, VectorProvider) {
  $scope.params = $stateParams;

  //Initialize the country selector menu by loading the json file and writing out the names into the panel
  $scope.countryList1 = null;

  var vecRes = VectorProvider.createResource("countryextents");
  vecRes.fetch(function(geojson){
    //Sort alphabetically
    geojson.features = geojson.features.sort(function(a,b){
      var textA = a.properties.name_0;
      var textB = b.properties.name_0;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });

    $scope.countryList1 = geojson.features;
  });

  //Initialize the ARC Region selector menu by loading the json file and writing out the names into the panel
  $scope.regionList1 = null;

  var vecResRegion = VectorProvider.createResource("arcregionextents");
  vecResRegion.fetch(function(geojson){
    //Sort alphabetically
    geojson.features = geojson.features.sort(function(a,b){
      var textA = a.properties.arc_region;
      var textB = b.properties.arc_region;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });

    $scope.regionList1 = geojson.features;
  });

});

},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/factories/AgFilter.js":[function(require,module,exports){
/**
 * Created by SpatialDev on 1/6/15.
 */
/**
 * Created by Daniel Baah <dbaah@spatialdev.com>
 *       on 1/6/15.
 */

module.exports = angular.module('SpatialViewer').factory('AgFilterFactory', function ($http) {

    var Ag = [];
    var AgLandUse = [];
    var service = {};
    service.AgTotal = 0;
    var Ag_Config =  {
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
        'Warehouse/Storage/Agregation Centres': {
            color: '#8cb7c7',
            infoLabel: 'Warehouse/Storage/Agregation Centres',
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
                sector.forEach(function (names) {
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
        sector.forEach(function (names) {
            names.selected = selectall;
        });
    };

    service.getAgCounts = function(){
        $http.get('http://spatialserver.spatialdev.com/services/tables/agriculture_2014/query?where=country%3D%27India%27&returnfields=type&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type&statsdef=count%3Atype').
            success(function (data) {
                for (var i = 0; i < data.features.length; i++) {
                    Ag.push({
                        "type": data.features[i].properties.type,
                        "count": data.features[i].properties.count_type,
                        "land_use": data.features[i].properties.land_use,
                        "selected": false
                    });
                    service.AgTotal += parseInt(Ag[i].count);
                }
                // Calculate percentage per type
                for(var i=0;i<Ag.length;i++){
                    Ag[i]["pct"]=((parseInt(Ag[i].count)/service.AgTotal));
                };
                // Sort sector array by count
                Ag.sort(function(a,b){
                    return b.count- a.count;
                });
            }).
            error(function (data) {
                alert(data);
            });
    };
    service.getAgUrbanRuralCounts = function(){
        $http.get('http://spatialserver.spatialdev.com/services/tables/agriculture_2014/query?where=country%3D%27India%27&returnfields=type%2Cland_use&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type%2Cland_use&statsdef=count%3Atype').
            success(function (data) {
                for (var i = 0; i < data.features.length; i++) {
                    AgLandUse.push(
                        {
                            "type": data.features[i].properties.type,
                            "count": data.features[i].properties.count_type,
                            "land_use":data.features[i].properties.land_use,
                            "selected": false
                        }
                    );
                }

            }).
            error(function (data) {
                alert(data);
            });
    };
    service.getAgCounts();
    service.getAgUrbanRuralCounts();

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
              feature.properties.zIndex = Ag_Config[feature.properties.type].zIndex || 5;
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
            //if(Object.keys(_FSP.AgListBuilder.GetFilterObject()).length == 0) return;
            //
            ////We have the buffer as geojson.  Send it to the point table to intersect
            //var tablePostArgs = {
            //  returnfields: 'lat,lng,id,type,name,photos,irrigation_pumps,farm_tractors,seed,fertilizer,chemical_inputs,organic_fertilizers,vet_supplies,tools_equipment,seed_muliplier,storage_capacity,urban_center_dist,seed_muliplier,vacination,inseminaiton,breeding,modernized',
            //  format: 'geojson',
            //  where: _FSP.Utilities.buildPostGresQueryExpression('agriculture', _FSP.AgListBuilder.AgSelections),
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
    service.Ag_Config = Ag_Config;
    service.Ag_Counts = Ag;
    service.Ag_LandUse_Counts = AgLandUse;

    return service;

});


},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/factories/CICOFilter.js":[function(require,module,exports){
/**
 * Created by Daniel Baah <dbaah@spatialdev.com>
 *       on 1/6/15.
 */

module.exports = angular.module('SpatialViewer').factory('CICOFilterFactory', function ($http) {

    var CICO_Config = {
        'Agriculture': {
            color: 'rgb(209, 110, 35)',
            infoLabel: 'Agriculture',
            providers: null,
            zIndex: 6
        },
        'CICOS': {
            color: 'rgb(157, 33, 41)',
            infoLabel: 'Financial Service',
            providers: null,
            zIndex: 8
        },
        'Education': {
            color: 'rgb(42, 133, 173)',
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


},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/factories/EducationFilter.js":[function(require,module,exports){
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


},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/factories/HealthFilter.js":[function(require,module,exports){
/**
 * Created by SpatialDev on 1/6/15.
 */
/**
 * Created by Daniel Baah <dbaah@spatialdev.com>
 *       on 1/6/15.
 */

module.exports = angular.module('SpatialViewer').factory('HealthFilterFactory', function ($http) {

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
    var Health = [];
    var HealthLandUse = [];
    var service = {};
    service.HealthTotal = 0;


    service.getHealthCounts = function(){
        $http.get('http://spatialserver.spatialdev.com/services/tables/health_2014/query?where=country%3D%27India%27&returnfields=type&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type&statsdef=count%3Atype').
            success(function (data) {
                for (var i = 0; i < data.features.length; i++) {
                    Health.push({
                        "type": data.features[i].properties.type,
                        "count": data.features[i].properties.count_type,
                        "land_use": data.features[i].properties.land_use,
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
    };
    service.getHealthUrbanRuralCounts = function(){
        $http.get('http://spatialserver.spatialdev.com/services/tables/health_2014/query?where=country%3D%27India%27&returnfields=type%2Cland_use&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type%2Cland_use&statsdef=count%3Atype').
            success(function (data) {
                for (var i = 0; i < data.features.length; i++) {
                    HealthLandUse.push(
                        {
                            "type": data.features[i].properties.type,
                            "count": data.features[i].properties.count_type,
                            "land_use":data.features[i].properties.land_use,
                            "selected": false
                        }
                    );
                }

            }).
            error(function (data) {
                alert(data);
            });
    };
    service.getHealthCounts();
    service.getHealthUrbanRuralCounts();

    service.checkAll = function (sector, selection, selectall) {

        switch(selection) {
            case 'health':
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
                    service.checkBool = "Check All";
                    console.log("factory check bool: " + service.checkBool);
                    console.log("factory select all: " + selectall);
                    console.log("service selected all: " + service.selectall);

                }
                sector.forEach(function (names) {
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
            console.log("Health factory check bool: " + service.checkBool);
            console.log("Health factory selected all: " + selectall);
            console.log("Health service selected all: " + service.selectall);
        }
        sector.forEach(function (names) {
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
                    style.color = 'rgb(127, 157, 106)';
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
    service.Health_Config = Health_Config;
    service.Health_Counts = Health;
    service.Health_LandUse_Counts = HealthLandUse;

    return service;

});


},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/factories/LibraryFilter.js":[function(require,module,exports){
/**
 * Created by SpatialDev on 1/6/15.
 */
/**
 * Created by Daniel Baah <dbaah@spatialdev.com>
 *       on 1/6/15.
 */

module.exports = angular.module('SpatialViewer').factory('LibraryFilterFactory', function ($http) {

    var service = {};
    var Lib_Config =  {
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
        }

    };
    var Library = [];
    var LibraryLandUse = [];
    service.LibraryTotal = 0;

    service.getLibraryCounts = function(){
        // Library
        $http.get('http://spatialserver.spatialdev.com/services/tables/library_2014/query?where=country%3D%27India%27&returnfields=type&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type&statsdef=count%3Atype').
            success(function (data) {
                for (var i = 0; i < data.features.length; i++) {
                    Library.push({
                        "type": data.features[i].properties.type,
                        "count": data.features[i].properties.count_type,
                        "land_use": data.features[i].properties.land_use,
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
    };
    service.getLibraryUrbanRuralCounts = function(){
        $http.get('http://spatialserver.spatialdev.com/services/tables/library_2014/query?where=country%3D%27India%27&returnfields=type%2Cland_use&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type%2Cland_use&statsdef=count%3Atype').
            success(function (data) {
                for (var i = 0; i < data.features.length; i++) {
                    LibraryLandUse.push(
                        {
                            "type": data.features[i].properties.type,
                            "count": data.features[i].properties.count_type,
                            "land_use":data.features[i].properties.land_use,
                            "selected": false
                        }
                    );
                }

            }).
            error(function (data) {
                alert(data);
            });
    };

    service.getLibraryCounts();
    service.getLibraryUrbanRuralCounts();

    service.checkAll = function (sector, selection,selectall) {

        switch(selection) {
            case 'library':
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
                sector.forEach(function (names) {
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
        sector.forEach(function (names) {
            names.selected = selectall;
        });
    };

    service.Layer = {
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
              feature.properties.zIndex = Lib_Config[feature.properties.type].zIndex || 5;
            }
        },

        style:function(feature) {
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
            //  if(_FSP.ToolMaster.activeTool.active == true) return;
            //
            //  var buffer = _FSP.ConfettiLoader.clickToBuffer(evt);
            //
            //  //If all are unchecked, then exit out of here
            //  if(Object.keys(_FSP.LibraryListBuilder.GetFilterObject()).length == 0) return;
            //
            //  //We have the buffer as geojson.  Send it to the point table to intersect
            //  var tablePostArgs = {
            //    returnfields: 'lat,lng,name,type,id,photos,business_hours,staff_count,internet,public_computer_count,computer_fee',
            //    format: 'geojson',
            //    where: _FSP.Utilities.buildPostGresQueryExpression('library', _FSP.LibraryListBuilder.LibrarySelections),
            //    returnGeometry: 'yes',
            //    intersects: buffer,
            //    limit: 200 //add a limit of 200 so we don't get carried away
            //  };
            //  var pointUrl = "http://spatialserver.spatialdev.com/services/tables/library_2014/query";
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
            //      var html = _FSP.PopupBuilder.addResults(points.features, _FSP.Config.LIBRARY_LAYERS, 'library', function (currentPoint) {
            //        if (currentPoint) {
            //          //Highlight point.
            //          var layers = pbfSource.getLayers();
            //          if (layers) {
            //            var layer = layers[Object.keys(layers)[0]]; //Library layer
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
        }

    };
    service.Library_Config = Lib_Config;
    service.Library_Counts = Library;
    service.Library_LandUse_Counts = LibraryLandUse;

    return service;

});


},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/factories/bangladesh.js":[function(require,module,exports){

/**
 * Created by Daniel Baah <dbaah@spatialdev.com>
 *       on 12/22/14.
 */

module.exports = angular.module('SpatialViewer').factory('BangladeshFactory', function ($http) {

    var service = {};

    $http.get('data/countrydata/Bangladesh.json').
        success(function(data) {
            service.Bangladesh = data;
        }).
        error(function(data) {
            alert(data);
        });

    return service;

});


},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/factories/india.js":[function(require,module,exports){

/**
* Created by Daniel Baah <dbaah@spatialdev.com>
*       on 12/22/14.
*/

module.exports = angular.module('SpatialViewer').factory('IndiaFactory', function ($http) {

    var service = {};

    service.ConfigData = {
        COMMERCIAL_BANKS: [
            "Allahabad Bank",
            "Allahabad UP Gramin Bank",
            "Ammco Bank",
            "Andhra Bank",
            "Aryan Cooperative Bank",
            "Aryavart Gramin Bank",
            "Axis Bank",
            "Bank of Baroda",
            "Bank of India",
            "Bank of Maharashtra",
            "Baroda Uttar Pradesh Gramin Bank",
            "Bhartiya Khas and Bachat Ltd",
            "Bhumi Vikas Bank",
            "Bihar Gramin Bank",
            "Bombay Mercantile Cooperative Bank",
            "Brahmavart Bank",
            "Canara Bank",
            "Catholic Syrian Bank Ltd.",
            "Central Bank of India",
            "Central Cooperative Bank",
            "Citibank",
            "Citizen Cooperative Bank",
            "City Union Bank Ltd.",
            "Corporation Bank",
            "Dena Bank",
            "Deutsche Bank AG",
            "Development Bank of Singapore",
            "Development Cooperative Bank",
            "Gulshan Mercantile Urban cooperative Bank Ltd.",
            "HCBL Bank",
            "HDFC",
            "ICICI Bank",
            "IDBI Bank Limited",
            "Indian Bank",
            "Indian Mercantile Cooperative Bank",
            "Indian Overseas Bank",
            "IndusInd Bank Limited",
            "ING Vysya Bank",
            "Karnataka Bank",
            "Karur Vysya Bank Limited.",
            "Kashi Gomti Sanyukt Gramin Bank",
            "Kotak Mahindra Bank Limited",
            "Kshetriya Gramin Bank",
            "Lakshmi Vilas Bank",
            "Madhya Bihar Gramin Bank",
            "Mahamedha Bank",
            "Nobel Cooperative Bank",
            "Noida Commercial Cooperative Bank",
            "ONS Bank",
            "Oriental Bank of Commerce",
            "PACS Cooperative Bank",
            "Prathama Bank",
            "Primary Cooperative Bank",
            "Punjab & Sind Bank",
            "Punjab National Bank",
            "Purvanchal Bank",
            "RMBIL Quasi Bank",
            "Rose Valley Bank",
            "Sarva UP Gramin Bank",
            "Shivalik Bank",
            "Shreyas Gramin Bank",
            "SIDBI",
            "Standard Chartered Bank",
            "State Bank of Bikaner and Jaipur",
            "State Bank of Hyderabad",
            "State Bank of India",
            "State Bank of Mysore",
            "State Bank of Patiala",
            "State Bank of Travancore",
            "Syndicate Bank",
            "Tamilnad Mercantile Bank Ltd.",
            "The Dhanalakshmi Bank Limited.",
            "The Federal Bank Ltd.",
            "The Jammu & Kashmir Bank Ltd.",
            "The Nainital Bank Ltd.",
            "The New Urban Cooperative Bank",
            "The Ratnakar Bank Ltd.",
            "The Royal Bank of Scotland N.V.",
            "The South Indian Bank Ltd.",
            "The VSV Cooperative Bank",
            "Tulsi Gramin Bank",
            "UCC Bank",
            "UCO Bank",
            "Union Bank of India",
            "United Bank of India",
            "United India Cooperative Bank",
            "United Mercantile Co-op Bank Ltd.",
            "UP Agro Cooperation Bank",
            "Urban Cooperative Bank",
            "Uttar Bihar Gramin Bank",
            "Uttar Pradesh Cooperative Bank",
            "Uttar Pradesh Gramin Bank",
            "Uttar Pradesh Sahkari Gram Vikas Bank",
            "Vijaya Bank",
            "Yes Bank",
            "Zila Sahkari Bank / District Cooperative Bank"
        ],
        BANK_AGENTS: [
            "A Little World / Zero Mass Foundation",
            "Airtel",
            "Cashpor",
            "CDOT",
            "Coromandel",
            "Eko",
            "Fino",
            "GTIDS",
            "HCL Infosystems",
            "Idea",
            "Indepay networks",
            "Integra",
            "Oxigen",
            "Sanjeevani",
            "SAVE",
            "SIGN",
            "Srei Sahaj",
            "Sub-K",
            "Vision India",
            "Vodafone"
        ],
        MOBILE_PROVIDERS: [

        ],
        MONEY_TRANSFER_SERVICE: [

        ],
        METADATA: [
            "<strong>Financial service locations:</strong> Brand Fusion, August 2014.&nbsp;<a href='http://www.brandfusion-africa.com/'  target='_blank;'>Brand Fusion website</a>",
            "<strong>Mobile Coverage:</strong> Collins Bartholomew and GSMA, (HarperCollins Publisher, Dec 2012)",
            "<strong>Population:</strong> Tatem AJ. Afripop Data 2012. Gainesville, United States: Emerging Pathogens Institute, University of Florida.&nbsp;<a href='http://www.afripop.org/' target='_blank'>Afripop Website</a>",
            "<strong>Urban Areas:</strong> Global Rural-Urban Mapping Project (GRUMP), Center for International Earth Science Information Network (CIESIN), Centro Internacional de Agricultura Tropical (CIAT), 2005.  Palisades, NY: CIESIN, Columbia University.&nbsp;<a href='http://sedac.ciesin.columbia.edu/data/collection/grump-v1' target='_blank'>GRUMP Website</a>"
        ],
        HEXBINDESCRIPTION: [
            "<strong>Methodology</strong><p>Approximately 10Km Hexagonal Gridcells (Hexbins) were created for {x}.  For each Hexbin area, we summed up the total number of access points, and divided that number by the total population of the Hexbin (based on the Afripop dataset). To make the values per capita, each value was multiplied by 10,000.  This results in the number of access points per 10,000 people.  We then grouped the resulting ratios into 3 classes, described below.</p><strong>Classification</strong><p><ul><li><div class='left HexcolorBarSwatch green'></div><div class='classificationText'>Hi: 8 to 250</div></li><li><div class='left HexcolorBarSwatch yellow'></div><div class='classificationText'>Med: 2.5 to 8</div></li><li><div class='left HexcolorBarSwatch red'></div><div class='classificationText'>Lo: 0.2 to 2.5</div></li></p>"
        ],
        CICO_DATE: "Financial Service Locations collected Summer 2014"
    };
    service.India = {
        cicoURL: 'http://spatialserver.spatialdev.com/services/tables/vw_india_cicos/query',
        libraryURL: 'http://spatialserver.spatialdev.com/services/tables/vw_india_libraries/query',
        healthURL: 'http://spatialserver.spatialdev.com/services/tables/vw_india_health/query',
        agricultureURL: 'http://spatialserver.spatialdev.com/services/tables/vw_india_ag/query',

        CicoBlastURL: "scripts/datablasts/Kenya_Cicos.geojson",
        CountsBlastURL: "scripts/datablasts/India_Cico_Count.json",
        dropPointURL: 'http://spatialserver.spatialdev.com/services/tables/{table}/rasterOps/zonalstatistics',
        accessStatsURL: 'http://spatialserver.spatialdev.com/services/geoprocessing/geoprocessing_operation',
        population_raster_table: "india_population_raster",
        LibraryBlastURL: "scripts/datablasts/India_Library_Count.json",
        HealthBlastURL: "scripts/datablasts/India_Health_Count.json",
        AggBlastURL: "scripts/datablasts/India_Agriculture_Count.json",

        BaseLayers: null,
        hasPovertyData: false,
        CICOFields: ["FeatureType", "ShrAgt", "Prvd", "Photos"],
        FeatureLayers: {},
        AnalysisLayers: [],
        "Commercial Bank": {
            "Filters": [{
                "name": "",
                "data": service.ConfigData.COMMERCIAL_BANKS
            }]
        },
        'Bank Agent': {
            "Filters": [{
                "name": "",
                "data": service.ConfigData.BANK_AGENTS
            }]
        },
        'Mobile Money Agent': {
            "Filters": [{
                "name": "",
                "data": service.ConfigData.MOBILE_PROVIDERS
            }]
        },
        'Money Transfer Service': {
            "Filters": [{
                "name": "",
                "data": service.ConfigData.MONEY_TRANSFER_SERVICE
            }]
        },
        QuickStats: {
            totalPopulation: 299931126,
            urbanPct: .087,
            ruralPct: .913,
            within5Km: .9201,
            ruralpop: 273830901,
            urbanpop: 26100225
        }, MapCenter: {
            Latitude: 26,
            Longitude: 85
        },
        MapZoom: 6,
        ISO3: 'ind',
        BaseLayerList: {
            'Urban Areas': {
                index: null,
                transparency: 0.5,
                visible: false,
                url: "http://tiles.fspmaps.com/v2/kenya_urbanareas/{z}/{x}/{y}.png"
            },
            'Population': {
                index: null,
                transparency: 0.5,
                visible: true,
                url: "http://tiles.fspmaps.com/v2/kenyapop/{z}/{x}/{y}.png"
            },
            'Cell Coverage': {
                index: null,
                transparency: 0.5,
                visible: false,
                url: "http://tiles.fspmaps.com/v2/kenya_cellcoverage/{z}/{x}/{y}.png"
            },
            'Counties': {
                index: null,
                transparency: 0.5,
                visible: true,
                url: "http://tiles.fspmaps.com/v2/kenya_counties2014_37d591/{z}/{x}/{y}.png"
            },
            'Distance to CICO': {
                index: null,
                transparency: 1,
                visible: false,
                url: "http://tiles.fspmaps.com/v2/KEN_ed/{z}/{x}/{y}.png"
            },
            'Access per capita': {
                index: null,
                transparency: 1,
                visible: false,
                url: "http://tiles.fspmaps.com/v2/kenya_hexbins/{z}/{x}/{y}.png"
            }
        }
    };
    service.India.QuickStats["totpop5km"] = (service.India.QuickStats.within5Km * service.India.QuickStats.totalPopulation);

    //$http.get('data/countrydata/India.json').
    //        success(function(data) {
    //            service.India = data;
    //        }).
    //        error(function(data) {
    //            alert(data);
    //        });

    return service;

        });


},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/factories/kenya.js":[function(require,module,exports){

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


},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/factories/nigeria.js":[function(require,module,exports){

/**
 * Created by Daniel Baah <dbaah@spatialdev.com>
 *       on 12/23/14.
 */

module.exports = angular.module('SpatialViewer').factory('NigeriaFactory', function ($http) {

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
    var CICOs = [];
    var CICOsLandUse = [];
    var CICOsproviders = [];
    var service = {};
    service.CICOsTotal = 0;
    var ProviderData = {
        "Bank Branches": [
            'Access Bank Plc',
            'Central Bank of Nigeria',
            'Citi Bank',
            'Diamond Bank Plc',
            'Ecobank Nigeria Plc',
            'Enterprise Bank',
            'Fidelity Bank Plc',
            'First Bank of Nigeria Plc',
            'First City Monument Bank Plc',
            'GT Bank',
            'Jaiz Bank Plc',
            'Keystone Bank Limited',
            'Mainstreet Bank Limited',
            'Savannah Bank of Nigeria',
            'Skye Bank Plc',
            'Stanbic IBTC Bank Plc',
            'Standard Chartered Bank Ltd',
            'Sterling Bank Plc',
            'Union Bank of Nigeria',
            'United Bank of Africa',
            'Unity Bank Plc',
            'Wema Bank Plc',
            'Zenith Bank Plc'

        ],
        "Mobile Money Agent": ['Diamond Bank',
            'Cellulant',
            'Chams Mobile',
            'Eartholeum Networks',
            'Ecobank',
            'eTranzact International',
            'FETS',
            'First Bank plc',
            'First Bank',
            'Fortis Mobile',
            'GT Bank',
            'Mkudi/Mino',
            'Monitise',
            'Pagatech',
            'Parkway Projects',
            'Paycom',
            'Stanbic',
            'Teasy',
            'VTNetwork',
            'Zenith Bank',
            'Zinternet'
        ],
        "Mobile Network Operator Outlets": ['MTN Retail Outlet',
            'Airtel',
            'Etisalat',
            'Glo'
        ]
    };

    service.getCICOsCounts = function () {
        $http.get('http://spatialserver.spatialdev.com/services/tables/cicos_2013/query?where=country%3D%27Nigeria%27&returnfields=type&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type&statsdef=count%3Atype').
            success(function (data) {
                //reset array to prevent duplicates
                for (var i = 0; i < data.features.length; i++) {
                    CICOs.push(
                        {
                            "type": data.features[i].properties.type,
                            "count": data.features[i].properties.count_type,
                            "land_use": data.features[i].properties.land_use,
                            "selected": false
                        }
                    );
                    service.CICOsTotal += parseInt(CICOs[i].count);
                }
                for (var i = 0; i < CICOs.length; i++) {
                    // Calculate percentage per type
                    CICOs[i]["pct"] = ((parseInt(CICOs[i].count) / service.CICOsTotal));

                    if(CICOs[i].type=='Bank Branches') {
                        CICOs[i].viewAll = true;
                        CICOs[i].providers = [];
                        ProviderData["Bank Branches"].forEach(function (val) {
                            CICOs[i].providers.push({type: val, selected: true});
                        });
                    }
                    if(CICOs[i].type=="Mobile Network Operator Outlets") {
                        CICOs[i].viewAll = true;
                        CICOs[i].providers = [];
                        ProviderData["Mobile Network Operator Outlets"].forEach(function (val) {
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

            }).
            error(function (data) {
                alert(data);
            });
    };
    service.getCICOsUrbanRuralCounts = function () {
        $http.get('http://spatialserver.spatialdev.com/services/tables/cicos_2013/query?where=country%3D%27Nigeria%27&returnfields=type%2Cland_use&format=%20geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type%2Cland_use&statsdef=count%3Atype').
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

    service.Layer =  {
        type: 'pbf',
        name: 'FSP Nigerias',
        url: "http://spatialserver.spatialdev.com/services/vector-tiles/cicos_2013_nigeria/{z}/{x}/{y}.pbf",
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
    service.Nigeria = {
        "CountryName": "Nigeria",
        "MapCenter": {
            "Latitude": 9.31,
            "Longitude": 7.93
        },
        "MapZoom": 6,
        "QuickStats": {
            totalPopulation: 150802704,
            urbanPct: .3249,
            ruralPct: .6750,
            within5Km: .4730,
            ruralpop: 101523021,
            urbanpop: 38264149,
            lagospop: 10739818
        }
    };

    service.Nigeria.QuickStats["totpop5km"] = (service.Nigeria.QuickStats.within5Km * service.Nigeria.QuickStats.totalPopulation);

    service.CICO_Config = CICO_Config;
    service.CICOs_Counts = CICOs;

    return service;

});


},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/factories/sectordata.js":[function(require,module,exports){
module.exports = angular.module('SpatialViewer').factory('SectorFactory', function () {

    var service = {};
    var countryname = 'India';
    service.SelectedSector = '';
    service.selectedCountry = 'India';
    service.sectorSelections = [];

    service.CountryList = {
        default:{
            country:'Uganda',
            "MapCenter": {
                "Latitude": 1.3,
                "Longitude": 32
            },
            MapZoom: 6
        },Kenya:{
            layer:'cicos_kenya'
        },Nigeria:{
            layer:'cicos_nigeria'
        },
        India:{
            layer: ['library','CICOS','agriculture','health']
        },
        Uganda:{
            layer: ['cicos_2013_uganda','education_2015_uganda','agriculture_2015_uganda']
        },
        countryNames: ['Bangladesh', 'Uganda', 'Kenya', 'Nigeria', 'Tanzania', 'India']
    };

    service.setSelectedSector = function (sector) {
        service.SelectedSector = sector;

        if (service.sectorSelections.indexOf(sector) == -1) {
            service.sectorSelections.push(sector);
        } else {
            service.sectorSelections.splice(service.sectorSelections.indexOf(sector), 1);
        }

        service.allSectors = service.sectorSelections;

        console.log("SectorFactory tab: " + service.SelectedSector);
    };

    service.setCountry = function (country) {
        service.selectedCountry = country;
        console.log("Country Selection: " + service.selectedCountry);
    };

    return service;

});
},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/factories/tanzania.js":[function(require,module,exports){

/**
 * Created by Daniel Baah <dbaah@spatialdev.com>
 *       on 12/22/14.
 */

module.exports = angular.module('SpatialViewer').factory('TanzaniaFactory', function ($http) {

    var service = {};

    $http.get('data/countrydata/Tanzania.json').
        success(function(data) {
            service.Tanzania = data;
        }).
        error(function(data) {
            alert(data);
        });

    return service;

});


},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/factories/uganda.js":[function(require,module,exports){

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

    service.getAgCounts = function(){
        $http.get(ag_type_url).
            success(function (data) {
                for (var i = 0; i < data.features.length; i++) {
                    Ag.push({
                        "type": data.features[i].properties.type,
                        "count": data.features[i].properties.count_type,
                        "land_use": data.features[i].properties.land_use,
                        "selected": false
                    });
                    service.AgTotal += parseInt(Ag[i].count);
                }
                // Calculate percentage per type
                for(var i=0;i<Ag.length;i++){
                    Ag[i]["pct"]=((parseInt(Ag[i].count)/service.AgTotal));
                }
                // Sort sector array by count
                Ag.sort(function(a,b){
                    return b.count- a.count;
                });
            }).
            error(function (data) {
                alert(data);
            });
    };
    service.getCICOsCounts = function(){
        // UGANDA
        $http.get('http://spatialserver.spatialdev.com/services/tables/uganda_cicos_2015/query?where=country%3D%27Uganda%27&returnfields=type&format=geojson&returnGeometry=no&returnGeometryEnvelopes=no&groupby=type&statsdef=count%3Atype').
            success(function (data) {
                //reset array to prevent duplicates
                for (var i = 0; i < data.features.length; i++) {
                    if(data.features[i].properties.type !== null) {
                        CICOs.push(
                            {
                                "type": data.features[i].properties.type,
                                "count": data.features[i].properties.count_type,
                                "selected": false
                            });
                        service.CICOsTotal += parseInt(data.features[i].properties.count_type);
                    }
                }

                // get percentage of CICO type
                for (var i = 0; i < CICOs.length; i++) {
                    CICOs[i]["pct"] = ((parseInt(CICOs[i].count) / service.CICOsTotal));

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
                CICOs.sort(function (a, b) {
                    return b.count - a.count;
                });

            }).
            error(function (data) {
                alert(data);
            });

    };
    service.getEducationCounts = function(){
        $http.get(education_type_url).
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

    service.getAgCounts();
    service.getCICOsCounts();
    service.getEducationCounts();

    service.Ag_Counts = Ag;
    service.CICOs_Counts = CICOs;
    service.Education_Counts = Education;

    return service;

});


},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/Donuts.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *   and Rich Gwozdz <rgwozdz@spatialdev.com>
 *       on 5/21/14.
 */


module.exports = angular.module('SpatialViewer').factory('Donuts', function () {

  /**
   * Creates a D3 Donut that is located in the details panel.
   */
  function ExpandoDonut(entities, visualizationDictionary, wrapper, labelPosition) {

    var data,
      tmpDataset,
      dataset,
      width,
      height,
      radius,
      color,
      pie,
      arc,
      svg,
      path,
      reportingValueArr,
      reportingValue,
      labelWrapper;

    data = {};

    wrapper = $(wrapper)[0];
    $(wrapper).html('');
    this.wrapper = wrapper;
    this.labelWrapper = null;
    this.svg = null;

    if(typeof labelPosition === 'undefined' || (labelPosition !== 'top' && labelPosition !== 'bottom')) {
      labelPosition = 'top'
    }

    // Loop through the entities
    for (var j = 0, jMax = entities.length; j < jMax; j++) {

      // Split the semi-colon delimited string of reporting values
      if(entities[j]['sector__c'] === null) {
        reportingValueArr = [-9999];
      } else {
        reportingValueArr = entities[j]['sector__c'].toString().split(';');
      }
      // Loop thru the reporting values
      for (var k = 0, kMax = reportingValueArr.length; k < kMax; k++) {

        // this iteration's reporting value
        reportingValue = reportingValueArr[k];

        // If we have already come across this id before (and started a count of its frequency), increment the count
        if(data.hasOwnProperty(reportingValue)) {
          data[reportingValue]['count']++;
        }

        else if (reportingValue === ''){
          // Null report id's come through as an empty string because splitting an empty string, creates an array with one empty string
          //  We're assigning these to a value of -9999

          // Increment the count of -9999
          if(data.hasOwnProperty('-9999')) {
            data['-9999']['count']++;
          }
          else {
            // if this is the first null id, create an object property and start the counter
            data['-9999'] = {
              'count': 1,
              'color': visualizationDictionary[-9999].color,
              'alias': visualizationDictionary[-9999].label
            };
          }
        }
        else {

          var reportingProperties = visualizationDictionary[reportingValue];

          if (!reportingProperties) {
            reportingProperties = {
              color: '#240201',
              alias: reportingValue || 'Unknown'
            }
          }

          // if this is the first time we see this id, create an object property and start the counter
          data[reportingValue] = {
            'count': 1,
            'color': reportingProperties.color,
            'alias': reportingProperties.label
          };
        }

      }

    }

    // prep dataset for D3; need a temp dataset to deal with merging of data counts for 'other' category
    tmpDataset = [];
    dataset = [];

    // Push properties from object holding the category counts/colors categories into an object array
    for (var j in data) {
      tmpDataset.push(data[j]);
    }

    // Create an object that will merge the count from all classification catergories that we've deemed as 'other''
    var mergedOther = {
      'count': 0,
      'color': visualizationDictionary[-9999].color,
      'alias': visualizationDictionary[-9999].label
    };

    // Merge all 'other' objects; we determine which are 'other' by testing to see if its been assigned the 'other' color
    for (var k = 0, kMax = tmpDataset.length; k < kMax; k++) {

      if(tmpDataset[k].color === visualizationDictionary[-9999].color) {
        mergedOther.count = mergedOther.count + tmpDataset[k].count;
      } else {
        dataset.push(tmpDataset[k]);
      }
    }

    // Add the merge objedt to the dataset we will use in donut chart
    dataset.push(mergedOther);


    // Use jQuery to get this cluster markers height and width (set in the CSS)
    width = $(wrapper).width() * 0.65;
    height = $(wrapper).height() * 0.65;

    if(height === 0) {
      height = width;
    }

    radius =  (Math.min(width, height) / 2) - 10;
    labelWrapper = $('<div class="clearfix" style="text-align:center; margin: 10px 0;" ></div>').appendTo(wrapper);
    var labelSwatch = $('<div style="display:inline-block; width: 1em; height: 1em; border-radius: 50%"></div>').appendTo(labelWrapper);
    var labelText = $('<div style="display:inline-block; padding-left: 10px;margin-top: -.4em;vertical-align: middle;"></div>').appendTo(labelWrapper);

    pie = d3.layout.pie()
      .sort(null);

    arc = d3.svg.arc()
      .innerRadius(radius-radius * 0.4)
      .outerRadius(radius);

    var arcOver = d3.svg.arc()
      .outerRadius(radius + 10)
      .innerRadius((radius-radius * 0.4) + 10);

    // Note that we add 'clusterDonut' as a selector
    svg = d3.select(wrapper).append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    this.path = svg.selectAll("path")
      .data(function(){
        var dataObjArr,
          dataArr,
          pieData;

        dataObjArr = dataset;

        dataArr = [];

        for (var i = 0, iMax = dataObjArr.length; i < iMax; i++) {
          dataArr.push(dataObjArr[i]['count']);
        }

        pieData = pie(dataArr);

        for (var i = 0, iMax = pieData.length; i < iMax; i++) {
          pieData[i].data = dataObjArr[i];
        }

        return pieData;
      })
      .enter().append("path")
      .attr("fill", function(d, j) {
        return d.data.color;
      })
      .attr("d", arc)
      .attr("cursor","pointer")
      .attr("cursor","pointer")
      .on("mouseover", function(d, i) {

        // clear previously active chart wedge
        d3.select(wrapper).selectAll('path').transition()
          .duration(100)
          .attr("d", arc)
          .attr('opacity',1)
          .attr('stroke-width',1)
          .attr('stroke','rgba(255,255,255,1)');

        // Make the mouseover wedge active
        d3.select(this)
          .transition()
          .duration(100)
          .attr("d", arcOver)
          .attr('opacity',0.8)
          .attr('stroke-width',2)
          .attr('stroke','rgba(255,255,255,1)');

        // Make appropriate label
        $(labelSwatch).css('background-color', d.data.color);
        $(labelText).html(d.data.alias);

        // Show the label if currently hidden
        if($(self.caption).css('display') === 'none') {
          $(labelWrapper).slideToggle();
        }
      })
      //.on("mouseout", function(d,i) {})
      .each(function(d, i) {

        // on load, we want the largest chart wedge to be activew
        if(i !== 0  ){
          return;
        }

        d3.select(this)
          .transition()
          .duration(100)
          .attr("d", arcOver)
          .attr('opacity',0.8)
          .attr('stroke-width',2)
          .attr('stroke','rgba(255,255,255,1)');

        // make the label
        $(labelSwatch).css('background-color', d.data.color);
        $(labelText).html(d.data.alias);

        if($(labelWrapper).css('display') === 'none') {
          $(labelWrapper).slideToggle();
        }
      });

    if(labelPosition === 'top') {
      labelWrapper.prependTo(wrapper);
    } else {
      labelWrapper.appendTo(wrapper);
    }

    this.labelWrapper = labelWrapper;
    this.svg = svg;
  }




  function makeVisualizationDictionary(categoryEntities, opts){

    var options = opts || {};

    options.unassignedColor = options.unassignedColor || '#CCCCCC';
    options.unassignedLabel = options.unassignedLabel || 'Not Assigned';

    var defaultPalette = ["#009400", "#FFC93A", "#FF3849", "#171CE8", "#05FFD9", "#EC8E2F", "#6ED444", "#9556EF", "#2175DE", "#E23B5D", "#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5", "#009400", "#FFC93A", "#FF3849", "#171CE8", "#05FFD9", "#EC8E2F", "#6ED444", "#9556EF", "#2175DE", "#E23B5D", "#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"];

    var dictionary = {};

    for(var i = 0; i < categoryEntities.length; i++) {

      var color = null;

      if(i < defaultPalette.length) {
        color = defaultPalette[i];
      } else {
        var index = i % defaultPalette.length - 1;
        color = defaultPalette[index];
      }
      dictionary[categoryEntities[i].value] = {
        value: categoryEntities[i].value,
        label: categoryEntities[i].label,
        color: color
      };

    }

    dictionary[-9999] = {
      value: -9999,
      label: options.unassignedLabel,
      color: options.unassignedColor
    };

    return dictionary;
  }


  /**
   * Public functions that are accessible elsewhere in the app.
   * Ex: Donuts.createDetailsDonut(arg1, arg2);
   */
  return {

    /**
     * Creates a D3 donut that goes around a label on the map.
     */
    createLabelDonut: function(sectors, projects, divId) {
      var vizDictionary = makeVisualizationDictionary(sectors);
      var donut = new ExpandoDonut(projects, vizDictionary, divId , 'bottom');
      $(divId).prepend('<div id="sectors-heading" class="heading">Sectors</div>');
      return donut;
    }

  };

});

},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/LayerConfig.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/18/14.
 */

/**
 * All of the layer names need to be lowercase.
 */
module.exports = angular.module('SpatialViewer').service('LayerConfig', function ($stateParams, $rootScope) {

    /**
     * The layers specified in this main LayerConfig module are integral to SpatialViewer
     * and should not be changed by the user.
     */

    var currentlayers = [];

    var layers = [];

    $rootScope.$on('layers-update', function (e,l) {
        // set current layers for map.js scope.allSectors
        layers = $stateParams.layers.split(",");
        layers.forEach(function (val, idx) {
            if (idx !== 0 && currentlayers.indexOf(val) == -1) {
                currentlayers.push(val);
            }
        });

    });

    var AllFeatures = [];

    var collectLayerFeatures = function(){
        if(AllFeatures.length == currentlayers.length){
            $rootScope.$broadcast('details', AllFeatures);
            AllFeatures = [];
        }
    };

    //GADM country extents, level 0
    this.countryextents = {
        type: 'geojson',
        url: 'data/vw_gadm_raw_geom.geojson'
    };

    //ARC Region extents
    this.arcregionextents = {
        type: 'geojson',
        url: 'data/arc_region_extents.geojson'
    };

    var configLayers = [
        require('../../config/layers/basemaps.js'),
        //require('../../config/layers/csv.js'),
        //require('../../config/layers/geojson.js'),
        //require('../../config/layers/kml.js'),
        //require('../../config/layers/other.js'),
        require('../../config/layers/pbf.js')
        //require('../../config/layers/wms.js'),
        //require('../../config/layers/xyz.js')
    ];

    // add all layers and remove from country factories
    // reference in filters.js
    this.configLayers = {};
    this.configLayers['cicos_uganda'] = configLayers[1]['cicos_uganda'];
    this.configLayers['education_uganda'] = configLayers[1]['education_uganda'];
    this.configLayers['agriculture_uganda'] = configLayers[1]['agriculture_uganda'];

    for (var i = 0, len = configLayers.length; i < len; i++) {
        var cfg = configLayers[i];
        for (var key in cfg) {
            this[key] = cfg[key];
            //console.log(this[key]);
        }
    }

    var idx = 0;

    // watch for when user details panel index changes
    $rootScope.$on('activeidx', function (event, args) {
        // activeidx changes multiples times in details.js, so only run when details index != activeidx
        if (idx !== args.properties.index && args.properties.index !== 0) {
            idx = args.properties.index;
        }
    });

    this.configLayers['cicos_uganda']['onClick'] = function(evt) {
        $rootScope.$apply(function(){
            if (evt && evt.features && evt.features.length > 0) {
                AllFeatures.push(evt.features);
                collectLayerFeatures();
                //$rootScope.$broadcast('details', evt.features);
            }
        })
    };

    this.configLayers['education_uganda']['onClick'] = function(evt) {
        $rootScope.$apply(function(){
            if (evt && evt.features && evt.features.length > 0) {
                AllFeatures.push(evt.features);
                collectLayerFeatures();
                //$rootScope.$broadcast('details', evt.features);
            }
        })
    };

    this.configLayers['agriculture_uganda']['onClick'] = function(evt) {
        $rootScope.$apply(function(){
            if (evt && evt.features && evt.features.length > 0) {
                AllFeatures.push(evt.features);
                collectLayerFeatures();
                //$rootScope.$broadcast('details', evt.features);
            }
        })
    };


    /**
     * For layers, we try and get an alias for everything, so if it's a URL that
     * does not match, we just want to return itself so we can fetch that given url.
     *
     * @param name
     * @returns {*}
     */
    this.find = function (name) {
        var val = this[name] || this[name.toLowerCase()];
        if (typeof val !== 'undefined' && val !== null) {
            return val;
        }
        if (name.slice(0, 4).toLowerCase() === 'http') {
            return name;
        }
        console.error('COULD NOT FIND ALIAS: ' + name);
        return null;
    };

});

},{"../../config/layers/basemaps.js":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/config/layers/basemaps.js","../../config/layers/pbf.js":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/config/layers/pbf.js"}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/StoriesConfig.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/18/14.
 */

/**
 * Config File for Stories Panel
 */
module.exports = angular.module('SpatialViewer').service('StoriesConfig', function () {

  /**
   * Stories Panel List
   *
   * List of stories that get shown in the Stories Panel. Edit this to add or remove
   * stories that the user will see as choices. All stories, including ones not in this
   * list, can still be manually referenced in the url. This is just for the User Interface.
   */
  this.stories = [
    'haiyan',
    'ebola',
  ];


  /**
   * Stories
   *
   * All story aliases can be referred to in the url. The corresponding
   * path to the thumbnail in the Stories Panel should be:
   *    images/{aliasName}.jpg
   *
   */

  this.haiyan = {
    url: '/mapfolio/index.html#/map@12.768946,122.486572,6(ortho,themecount,gdacs)?theme=disaster&details-panel=open&sf_id=a0Ed000000qZntUEAS',
    name: 'Typhoon Haiyan Response',
    date: '2013-10-12',
    thumbnail: 'images/stories/haiyan.png',
    keywords: 'Typhoon, Disaster Response, Haiyan, Disaster, AMEE'
  };
  this.ebola = {
    url: '/mapfolio/index.html#/map@15.072124,-3.460693,6(ortho,themecount,gdacs)?theme=disaster',
    name: 'Ebola Outbreak Resopnse',
    date: '2014-15-5',
    thumbnail: 'images/stories/ebola.png',
    keywords: 'Ebola, Disaster Response, Guinea, Disease, Mali, Africa'


  };

  /**
   * For layers, we try and get an alias for everything, so if it's a URL that
   * does not match, we just want to return itself so we can fetch that given url.
   *
   * @param name
   * @returns {*}
   */
  this.find = function(name) {
    var val = this[name] || this[name.toLowerCase()];
    if (typeof val !== 'undefined' && val !== null) {
      return val;
    }
    if (name.slice(0, 4).toLowerCase() === 'http') {
      return name;
    }
    console.error('COULD NOT FIND ALIAS: ' + name);
    return null;
  };

});

},{}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/Vector/GeoJSON.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 6/3/14.
 */

var Resource = require('./resource');
var $rootScope = require('./vector').$rootScope;

module.exports = GeoJSON;

/**
 * This is a basic GeoJSON VectorProvider.
 * @param config
 * @constructor
 */
function GeoJSON(config) {
  Resource.call(this, config);
  this._geojson = null;
}

GeoJSON.prototype = Object.create(Resource.prototype);
GeoJSON.prototype.constructor = GeoJSON;

GeoJSON.prototype.fetch = function (cb) {
  if (this._geojson && typeof cb === 'function') {
    cb(this._geojson);
    return;
  }
  var self = this;
  Resource.prototype.fetch.call(this, function(data) {
    self._geojson = data;
    if (typeof self._config.properties === 'object') {
      if ( data.type === 'FeatureCollection') {
        var feats = data.features;
        for (var i = 0, len = feats.length; i < len; ++i) {
          var feat = feats[i];
          if (!feat.properties) feat.properties = {};
          angular.extend(feat.properties, self._config.properties);
        }
      } else { // a feature or a geometry type
        if (!data.properties) data.properties = {};
        angular.extend(data.properties, self._config.properties);
      }
    }

    if (typeof cb === 'function') cb(self._geojson);
  });
};

GeoJSON.prototype.getLayer = function() {
  if (this._geojsonLayer) return this._geojsonLayer;
  var layer =  Resource.prototype.getLayer.call(this);
  this.fetch(function(geojson){
    layer.addData(geojson);
    layer.eachLayer(function (l) {
      l.on('click', function () {
        $rootScope.$broadcast('details', l);
      });
    });
  });
  return layer;
};

},{"./resource":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/Vector/resource.js","./vector":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/Vector/vector.js"}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/Vector/KML.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 6/3/14.
 */

var Resource = require('./resource');
var $rootScope = require('./vector').$rootScope;
var toGeoJSON = require('./vector').toGeoJSON;
var $ = require('./vector').$;

module.exports = KML;

/**
 * A KML Resource fetches KML and parses it with togeojson.js
 * Note that togeojson.js has bugs and does not accurately parse
 * some of the KML sources we have tested with. This library has
 * been modified with my hotfixes.
 *
 * @param config
 * @constructor
 */
function KML(config) {
  Resource.call(this, config);
  this._geojson = null;
}

KML.prototype = Object.create(Resource.prototype);
KML.prototype.constructor = KML;

KML.prototype.fetch = function (cb) {
  var self = this;
  Resource.prototype.fetch.call(this, function(data) {
    var xml = $.parseXML(data);
    self._geojson = toGeoJSON.kml(xml);
    if (typeof self._config.properties === 'object') {
      if (typeof self._geojson.properties === 'undefined') {
        self._geojson.properties = {};
      }
      angular.extend(self._geojson.properties, self._config.properties);
      self._geojson.properties.srcType = 'kml';
    }
    if (typeof cb === 'function') cb(self._geojson, self);
  });
};

KML.prototype.getLayer = function () {
  if (this._geojsonLayer) return this._geojsonLayer;
  var layer =  Resource.prototype.getLayer.call(this);
  this.fetch(function(geojson){
    layer.addData(geojson);
    layer.eachLayer(function (l) {
      l.on('click', function () {
        $rootScope.$broadcast('details', l);
      });
    });
  });
  return layer;
};

KML.prototype.eachLayer = function (cb) {
  this._eachLayerCallback = cb;
  this.fetch(function(geojson, self){
    var layers = self._geojsonLayer._layers;
    for (var key in layers) {
      var layer = layers[key];
      cb(layer);
    }
  });
};

},{"./resource":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/Vector/resource.js","./vector":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/Vector/vector.js"}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/Vector/Resource.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 6/3/14.
 */

var resources = require('./vector').resources;
var $http = require('./vector').$http;

module.exports = Resource;

/**
 * All VectorProvider resources are children of this class.
 * @param config
 * @constructor
 */
function Resource(config) {
  resources.push(this);
  this._config = config;
  this._url = null;
  if (typeof config === 'object') {
    this._url = config.url;
  } else {
    this._url = config;
  }

  this._eachLayerCallback = null;
  this._geojsonLayer = null;
}


/**
 * Fetches data from the given url of a resource.
 * Subclasses then handle the callback accordingly.
 *
 * Needs to also try to get a resource via the Chubbs
 * proxy.
 *
 * @param cb
 */
Resource.prototype.fetch = function(cb) {
  var proxyPath = config.proxyPath(this._url);
  $http.get(this._url, {cache: true}).success(function (data, status) {
    cb(data);
  }).error(function() {
    // trying proxy
    $http.get(proxyPath, {cache: true}).success(function (data, status) {
      cb(data);
    }).error(function() {
      console.error("Unable to fetch from: " + proxyPath);
    });
  });

};


/**
 * Returns the Leaflet GeoJSON Layer associated with the
 * Resource or creates a new one.
 *
 * @returns {null|*}
 */
Resource.prototype.getLayer = function () {
  if (typeof this._geojsonLayer !== 'undefined' && this._geojsonLayer !== null) {
    return this._geojsonLayer;
  }

  this._geojsonLayer = L.geoJson(this._geojson || null, {
    style: function(feature) {
      if (typeof feature.properties.styleFn === 'function') {
        return feature.properties.styleFn(feature.properties);
      }
      return L.mapbox.simplestyle.style(feature);
    },
    pointToLayer: function(feature, latlon) {
      if (!feature.properties) feature.properties = {};
      if (feature.properties.scale) {
        return L.circleMarker(latlon, {
          fillColor: feature.properties.color || '#FF0000',
          radius: 20 * feature.properties.scale
        });
      }
      return L.mapbox.marker.style(feature, latlon);
    }
  }).eachLayer(this._eachLayerCallback);


  return this._geojsonLayer;
};

Resource.prototype.eachLayer = function (cb) {
  this._eachLayerCallback = cb;
  this._geojsonLayer.eachLayer(cb);
};

},{"./vector":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/Vector/vector.js"}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/Vector/VectorProvider.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/19/14.
 */

module.exports = angular.module('SpatialViewer').factory('VectorProvider', function ($rootScope, $location, $http, LayerConfig) {

  var vector = require('./vector');
  vector.setInjectors($rootScope, $location, $http, LayerConfig);

  var Resource = require('./Resource');
  var GeoJSON = require('./GeoJSON');
  var KML = require('./KML');
  var CSV = require('./csv');


  /**
   * This is used by the factory to dynamically state the type (class)
   * that it wants to instantiate.
   *
   * @type {{geojson: GeoJSON, kml: KML, csv: CSV}}
   */
  var types = {
    geojson: GeoJSON,
    kml: KML,
    csv: CSV
  };


  return {
    /**
     * You can explicitly name the type of resource. If not,
     * we will figure it out for you...
     *
     * @param resourceName
     * @param type
     */
    createResource: function (resourceName, type) {
      var config = LayerConfig.find(resourceName);
      if (config === null) {
        console.error('VectorProvider: Invalid Resource Configuration Name. Check LayerConfig File...');
        return null;
      }
      if (type || config.type) {
        // if the resource is just a string, then it should be a url
        return new types[(type || config.type).toLowerCase()](config);
      } else {
        if (config.slice(config.length - 3).toLowerCase() === 'kml') {
          return new KML(config);
        }
        else if (config.slice(config.length - 3).toLowerCase() === 'csv') {
          return new CSV(config);
        }
        // NH TODO Check a bit more into if this resource is valid GeoJSON
        return new GeoJSON(config);
      }
    }

  };


});


},{"./GeoJSON":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/Vector/GeoJSON.js","./KML":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/Vector/KML.js","./Resource":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/Vector/Resource.js","./csv":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/Vector/csv.js","./vector":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/Vector/vector.js"}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/Vector/csv.js":[function(require,module,exports){
/**
 * Created by Ryan Whitley <rwhitley@spatialdev.com>
 *       on 6/3/14.
 */

var Resource = require('./resource');
var $rootScope = require('./vector').$rootScope;
var $ = require('./vector').$;

module.exports = CSV;

/**
 * A CSV Resource fetches CSV and parses it
 *
 * @param config
 * @constructor
 */
function CSV(config) {
  Resource.call(this, config);
  this._geojson = null;
}

CSV.prototype = Object.create(Resource.prototype);
CSV.prototype.constructor = CSV;

CSV.prototype.latFieldStrings = ["lat", "latitude", "y", "ycenter"];
CSV.prototype.longFieldStrings = ["lon", "long", "longitude", "x", "xcenter", "lng"];

CSV.prototype.getLayer = function () {
  if (this._geojsonLayer) return this._geojsonLayer;
  var layer = Resource.prototype.getLayer.call(this);
  this.fetch(function (geojson) {
    layer.addData(geojson);
    layer.eachLayer(function (l) {
      l.on('click', function () {
        $rootScope.$broadcast('details', l);
      });
    });
  });
  return layer;
};

CSV.prototype.fetch = function (cb) {
  var self = this;
  Resource.prototype.fetch.call(this, function (data) {
    //data should be the raw csv.

    self._geojson = self.processCsvData(data);

    if (typeof self._config.properties === 'object') {
      angular.extend(self._geojson.properties, self._config.properties);
      self._geojson.properties.srcType = 'csv';
    }
    if (typeof cb === 'function') cb(self._geojson, self);
  });
};

CSV.prototype.handleCsv = function (file, layer) {
  var self = this;
  if (file.data) {
    var decoded = this.bytesToString(self.Base64.decode(file.data));
    self.processCsvData(decoded);
  } else {
    var reader = new FileReader();
    reader.onload = function () {
      console.log("Finished reading CSV data");
      self.processCsvData(reader.result, layer);
    };
    reader.readAsText(file);
  }
};

CSV.prototype.getSeparator = function (string) {
  var separators = [",", "      ", ";", "|"];
  var maxSeparatorLength = 0;
  var maxSeparatorValue = "";
  $.each(separators, function (idx, separator) {
    var length = string.split(separator).length;
    if (length > maxSeparatorLength) {
      maxSeparatorLength = length;
      maxSeparatorValue = separator;
    }
  });
  return maxSeparatorValue;
};

CSV.prototype.bytesToString = function (b) {
  var s = [];
  $.each(b, function (idx, c) {
    s.push(String.fromCharCode(c));
  });
  return s.join("");
};

CSV.prototype.processCsvData = function (data) {
  var newLineIdx = data.indexOf("\n");
  var firstLine = $.trim(data.substr(0, newLineIdx)); //remove extra whitespace, not sure if I need to do this since I threw out space delimiters
  var separator = this.getSeparator(firstLine);
  var csvStore = $.csv.toObjects(data);
  var fieldNames = firstLine.split(separator);

  var latField = null;
  var longField = null;

  var self = this;

  //Find Lat/Lng columns
  for (var i = 0, len = fieldNames.length; i < len; i++) {
    var fieldName = fieldNames[i];
    var matchId;
    matchId = $.inArray(fieldName.toLowerCase(), self.latFieldStrings);
    if (matchId !== -1) {
      latField = fieldName;
    }

    matchId = $.inArray(fieldName.toLowerCase(), self.longFieldStrings);
    if (matchId !== -1) {
      longField = fieldName;
    }
  }

  //If Missing Latfield or LongField, then exit.
  if (!latField) {
    return;
  }
  if (!longField) {
    return;
  }

  var outputGeoJSON = {
    "type": "FeatureCollection",
    "features": []
  };

  for (var i = 0, len = csvStore.length; i < len; i++) {
    var row = csvStore[i];
    var latitude = parseFloat(row[latField]);
    var longitude = parseFloat(row[longField]);

    if (isNaN(latitude) || isNaN(longitude)) {
      return;
    }

    //create GeoJSON fragment
    outputGeoJSON.features.push({
      "type": "Feature",
      "geometry": {"type": "Point", "coordinates": [longitude, latitude]},
      "properties": row
    });
  }

  return outputGeoJSON;
};

CSV.prototype.eachLayer = function (cb) {
  this._eachLayerCallback = cb;
  this.fetch(function (geojson, self) {
    var layers = self._geojsonLayer._layers;
    for (var key in layers) {
      var layer = layers[key];
      cb(layer);
    }
  });
};

/**
 *
 *  Base64 encode / decode
 *  http://www.webtoolkit.info/
 *
 **/
CSV.prototype.Base64 = {

  // private property
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

  // public method for encoding
  encode: function (input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;

    input = Base64._utf8_encode(input);

    while (i < input.length) {

      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output = output +
        this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
        this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

    }

    return output;
  },

  // public method for decoding
  decode: function (input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {

      enc1 = this._keyStr.indexOf(input.charAt(i++));
      enc2 = this._keyStr.indexOf(input.charAt(i++));
      enc3 = this._keyStr.indexOf(input.charAt(i++));
      enc4 = this._keyStr.indexOf(input.charAt(i++));

      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;

      output = output + String.fromCharCode(chr1);

      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }

    }

    output = this.Base64._utf8_decode(output);

    return output;

  },

  // private method for UTF-8 encoding
  _utf8_encode: function (string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {

      var c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if ((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }

    }

    return utftext;
  },

  // private method for UTF-8 decoding
  _utf8_decode: function (utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;

    while (i < utftext.length) {

      c = utftext.charCodeAt(i);

      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if ((c > 191) && (c < 224)) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }

    }

    return string;
  }

};

},{"./resource":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/Vector/resource.js","./vector":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/Vector/vector.js"}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/Vector/resource.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 6/3/14.
 */

var resources = require('./vector').resources;
var $http = require('./vector').$http;

module.exports = Resource;

/**
 * All VectorProvider resources are children of this class.
 * @param config
 * @constructor
 */
function Resource(config) {
  resources.push(this);
  this._config = config;
  this._url = null;
  if (typeof config === 'object') {
    this._url = config.url;
  } else {
    this._url = config;
  }

  this._eachLayerCallback = null;
  this._geojsonLayer = null;
}


/**
 * Fetches data from the given url of a resource.
 * Subclasses then handle the callback accordingly.
 *
 * Needs to also try to get a resource via the Chubbs
 * proxy.
 *
 * @param cb
 */
Resource.prototype.fetch = function(cb) {
  var proxyPath = config.proxyPath(this._url);
  $http.get(this._url, {cache: true}).success(function (data, status) {
    cb(data);
  }).error(function() {
    // trying proxy
    $http.get(proxyPath, {cache: true}).success(function (data, status) {
      cb(data);
    }).error(function() {
      console.error("Unable to fetch from: " + proxyPath);
    });
  });

};


/**
 * Returns the Leaflet GeoJSON Layer associated with the
 * Resource or creates a new one.
 *
 * @returns {null|*}
 */
Resource.prototype.getLayer = function () {
  if (typeof this._geojsonLayer !== 'undefined' && this._geojsonLayer !== null) {
    return this._geojsonLayer;
  }

  this._geojsonLayer = L.geoJson(this._geojson || null, {
    style: function(feature) {
      if (typeof feature.properties.styleFn === 'function') {
        return feature.properties.styleFn(feature.properties);
      }
      return L.mapbox.simplestyle.style(feature);
    },
    pointToLayer: function(feature, latlon) {
      if (!feature.properties) feature.properties = {};
      if (feature.properties.scale) {
        return L.circleMarker(latlon, {
          fillColor: feature.properties.color || '#FF0000',
          radius: 20 * feature.properties.scale
        });
      }
      return L.mapbox.marker.style(feature, latlon);
    }
  }).eachLayer(this._eachLayerCallback);


  return this._geojsonLayer;
};

Resource.prototype.eachLayer = function (cb) {
  this._eachLayerCallback = cb;
  this._geojsonLayer.eachLayer(cb);
};

},{"./vector":"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/Vector/vector.js"}],"/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/services/Vector/vector.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 6/3/14.
 */

var vector = {};
module.exports = vector;

vector.setInjectors = function ($rootScope, $location, $http, LayerConfig) {
  vector.$rootScope = $rootScope;
  vector.$location = $location;
  vector.$http = $http;
  vector.LayerConfig = LayerConfig;
};

vector.angular = angular;
vector.L = L;
vector.$ = $;
vector.toGeoJSON = toGeoJSON;


/**
 * Every resource that has been instantiated.
 * @type {Array}
 */
var resources = vector.resources = [];
debug.resources = resources;

var centerLevel = vector.centerLevel = 0;

},{}]},{},["/Users/ryanwhitley/Documents/GitHub/fspmaps/fspmaps/scripts/app.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9mc3BtYXBzL2ZzcG1hcHMvY29uZmlnL2xheWVycy9iYXNlbWFwcy5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL2ZzcG1hcHMvZnNwbWFwcy9jb25maWcvbGF5ZXJzL3BiZi5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL2ZzcG1hcHMvZnNwbWFwcy9zY3JpcHRzL2FwcC5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL2ZzcG1hcHMvZnNwbWFwcy9zY3JpcHRzL2NvbnRyb2xsZXJzL2Jhc2VtYXBzLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvZnNwbWFwcy9mc3BtYXBzL3NjcmlwdHMvY29udHJvbGxlcnMvYnJlYWRjcnVtYnMuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9mc3BtYXBzL2ZzcG1hcHMvc2NyaXB0cy9jb250cm9sbGVycy9jb3VudHJ5c2VsZWN0LmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvZnNwbWFwcy9mc3BtYXBzL3NjcmlwdHMvY29udHJvbGxlcnMvZGV0YWlscy5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL2ZzcG1hcHMvZnNwbWFwcy9zY3JpcHRzL2NvbnRyb2xsZXJzL2V4cG9ydC5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL2ZzcG1hcHMvZnNwbWFwcy9zY3JpcHRzL2NvbnRyb2xsZXJzL2ZpbHRlcnMuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9mc3BtYXBzL2ZzcG1hcHMvc2NyaXB0cy9jb250cm9sbGVycy9pbmZvLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvZnNwbWFwcy9mc3BtYXBzL3NjcmlwdHMvY29udHJvbGxlcnMvbGF5ZXJzLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvZnNwbWFwcy9mc3BtYXBzL3NjcmlwdHMvY29udHJvbGxlcnMvbGVnZW5kLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvZnNwbWFwcy9mc3BtYXBzL3NjcmlwdHMvY29udHJvbGxlcnMvbWFpbi5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL2ZzcG1hcHMvZnNwbWFwcy9zY3JpcHRzL2NvbnRyb2xsZXJzL21hcC5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL2ZzcG1hcHMvZnNwbWFwcy9zY3JpcHRzL2NvbnRyb2xsZXJzL25hdmJhci5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL2ZzcG1hcHMvZnNwbWFwcy9zY3JpcHRzL2NvbnRyb2xsZXJzL3NlYXJjaC5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL2ZzcG1hcHMvZnNwbWFwcy9zY3JpcHRzL2NvbnRyb2xsZXJzL3NpZGUtdmlldy5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL2ZzcG1hcHMvZnNwbWFwcy9zY3JpcHRzL2NvbnRyb2xsZXJzL3RoZW1lLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvZnNwbWFwcy9mc3BtYXBzL3NjcmlwdHMvY29udHJvbGxlcnMvdG9vbHMuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9mc3BtYXBzL2ZzcG1hcHMvc2NyaXB0cy9jb250cm9sbGVycy91cGxvYWQuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9mc3BtYXBzL2ZzcG1hcHMvc2NyaXB0cy9jb250cm9sbGVycy96b29tLWV4dGVudC5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL2ZzcG1hcHMvZnNwbWFwcy9zY3JpcHRzL2ZhY3Rvcmllcy9BZ0ZpbHRlci5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL2ZzcG1hcHMvZnNwbWFwcy9zY3JpcHRzL2ZhY3Rvcmllcy9DSUNPRmlsdGVyLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvZnNwbWFwcy9mc3BtYXBzL3NjcmlwdHMvZmFjdG9yaWVzL0VkdWNhdGlvbkZpbHRlci5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL2ZzcG1hcHMvZnNwbWFwcy9zY3JpcHRzL2ZhY3Rvcmllcy9IZWFsdGhGaWx0ZXIuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9mc3BtYXBzL2ZzcG1hcHMvc2NyaXB0cy9mYWN0b3JpZXMvTGlicmFyeUZpbHRlci5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL2ZzcG1hcHMvZnNwbWFwcy9zY3JpcHRzL2ZhY3Rvcmllcy9iYW5nbGFkZXNoLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvZnNwbWFwcy9mc3BtYXBzL3NjcmlwdHMvZmFjdG9yaWVzL2luZGlhLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvZnNwbWFwcy9mc3BtYXBzL3NjcmlwdHMvZmFjdG9yaWVzL2tlbnlhLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvZnNwbWFwcy9mc3BtYXBzL3NjcmlwdHMvZmFjdG9yaWVzL25pZ2VyaWEuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9mc3BtYXBzL2ZzcG1hcHMvc2NyaXB0cy9mYWN0b3JpZXMvc2VjdG9yZGF0YS5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL2ZzcG1hcHMvZnNwbWFwcy9zY3JpcHRzL2ZhY3Rvcmllcy90YW56YW5pYS5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL2ZzcG1hcHMvZnNwbWFwcy9zY3JpcHRzL2ZhY3Rvcmllcy91Z2FuZGEuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9mc3BtYXBzL2ZzcG1hcHMvc2NyaXB0cy9zZXJ2aWNlcy9Eb251dHMuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9mc3BtYXBzL2ZzcG1hcHMvc2NyaXB0cy9zZXJ2aWNlcy9MYXllckNvbmZpZy5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL2ZzcG1hcHMvZnNwbWFwcy9zY3JpcHRzL3NlcnZpY2VzL1N0b3JpZXNDb25maWcuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9mc3BtYXBzL2ZzcG1hcHMvc2NyaXB0cy9zZXJ2aWNlcy9WZWN0b3IvR2VvSlNPTi5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL2ZzcG1hcHMvZnNwbWFwcy9zY3JpcHRzL3NlcnZpY2VzL1ZlY3Rvci9LTUwuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9mc3BtYXBzL2ZzcG1hcHMvc2NyaXB0cy9zZXJ2aWNlcy9WZWN0b3IvUmVzb3VyY2UuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9mc3BtYXBzL2ZzcG1hcHMvc2NyaXB0cy9zZXJ2aWNlcy9WZWN0b3IvVmVjdG9yUHJvdmlkZXIuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9mc3BtYXBzL2ZzcG1hcHMvc2NyaXB0cy9zZXJ2aWNlcy9WZWN0b3IvY3N2LmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvZnNwbWFwcy9mc3BtYXBzL3NjcmlwdHMvc2VydmljZXMvVmVjdG9yL3Jlc291cmNlLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvZnNwbWFwcy9mc3BtYXBzL3NjcmlwdHMvc2VydmljZXMvVmVjdG9yL3ZlY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1L0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4cENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcFdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9WQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDalRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgbGF5ZXIgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vKipcbiAqIEJhc2VtYXBzIFBhbmVsIExpc3RcbiAqXG4gKiBMaXN0IG9mIGJhc2VtYXBzIHRoYXQgZ2V0IHNob3duIGluIHRoZSBCYXNlbWFwcyBQYW5lbC4gRWRpdCB0aGlzIHRvIGFkZCBvciByZW1vdmVcbiAqIGJhc2VtYXBzIHRoYXQgdGhlIHVzZXIgd2lsbCBzZWUgYXMgY2hvaWNlcy4gQWxsIGJhc2VtYXBzLCBpbmNsdWRpbmcgb25lcyBub3QgaW4gdGhpc1xuICogbGlzdCwgY2FuIHN0aWxsIGJlIG1hbnVhbGx5IHJlZmVyZW5jZWQgaW4gdGhlIHVybC4gVGhpcyBpcyBqdXN0IGZvciB0aGUgVXNlciBJbnRlcmZhY2UuXG4gKi9cbmxheWVyLmJhc2VtYXBzID0gW1xuICAvLydvc21ob3QnLCAvL1JXIC0gdGhpcyBjb25zdGFudGx5IGNhdXNlcyB0aGUgZW50aXJlIHBhZ2UgdG8gZGVsYXkgbG9hZGluZyB3aGlsZSBpdCBpcyB3YWl0aW5nIGZvciBjLnRpbGVzLm9wZW5zdHJlZXRtYXAuZnIgdG8gbG9hZC5cbiAgJ29zbScsXG4gICdzYXRlbGxpdGUnLFxuICAvLydvcnRobycsXG4gIC8vJ3RvbmVyJyxcbiAgJ2RhcmsnXG4gIC8vJ2dpdGh1YicsXG4gIC8vJ21vemlsbGEnLFxuICAvLydncmVlbicsXG4gIC8vJ29zbWN5Y2xlJyxcbiAgLy8nb3NtdHJhbnNwb3J0JyxcbiAgLy8nb3NtbWFwcXVlc3QnLFxuICAvLyduYXRnZW8nLFxuICAvLyd1c2dzdG9wbycsXG4gIC8vJ2Vzcml0b3BvJyxcbiAgLy8nb2NlYW4nLFxuICAvLydsaWdodGdyYXknLFxuICAvLyd3YXRlcmNvbG9yJ1xuXTtcblxuXG4vKipcbiAqIEJhc2VtYXBzXG4gKlxuICogQWxsIGJhc2VtYXAgYWxpYXNlcyB0aGF0IGNhbiBiZSByZWZlcnJlZCB0byBpbiB0aGUgdXJsLiBUaGUgY29ycmVzcG9uZGluZ1xuICogcGF0aCB0byB0aGUgdGh1bWJuYWlsIGluIHRoZSBCYXNlbWFwcyBQYW5lbCBzaG91bGQgYmU6XG4gKiAgICBpbWFnZXMve2FsaWFzTmFtZX0uanBnXG4gKlxuICovXG5cbi8vbGF5ZXIub3NtaG90ID0ge1xuLy8gIHVybDogJ2h0dHA6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLmZyL2hvdC97en0ve3h9L3t5fS5wbmcnLFxuLy8gIG5hbWU6ICdIdW1hbml0YXJpYW4gT3BlblN0cmVldE1hcCcsXG4vLyAgdHlwZTogJ2Jhc2VtYXAnXG4vL307XG5cbi8vbGF5ZXIucmVkY3Jvc3MgPSB7XG4vLyAgdXJsOiAnaHR0cHM6Ly97c30udGlsZXMubWFwYm94LmNvbS92My9hbWVyaWNhbnJlZGNyb3NzLmhjamkyMmRlL3t6fS97eH0ve3l9LnBuZycsXG4vLyAgbmFtZTogJ1JlZCBDcm9zcycsXG4vLyAgdHlwZTogJ2Jhc2VtYXAnXG4vL307XG5cbmxheWVyLnNhdGVsbGl0ZSA9IHtcbiAgdXJsOiAnaHR0cHM6Ly97c30udGlsZXMubWFwYm94LmNvbS92My9leGFtcGxlcy5tYXAtcWZ5cng1cjgve3p9L3t4fS97eX0ucG5nJyxcbiAgbmFtZTogJ01hcGJveCBTYXRlbGxpdGUnLFxuICB0eXBlOiAnYmFzZW1hcCdcbn07XG5cbi8vbGF5ZXIubW96aWxsYSA9IHtcbi8vICB1cmw6ICdodHRwOi8ve3N9LnRpbGVzLm1hcGJveC5jb20vdjMvbW96aWxsYS13ZWJwcm9kLmU5MWVmOGIzL3t6fS97eH0ve3l9LnBuZycsXG4vLyAgbmFtZTogJ01vemlsbGEnLFxuLy8gIHR5cGU6ICdiYXNlbWFwJ1xuLy99O1xuLy9cbi8vbGF5ZXIuZ2l0aHViID0ge1xuLy8gIHVybDogJ2h0dHA6Ly97c30udGlsZXMubWFwYm94LmNvbS92My9naXRodWIubWFwLXhncTJzdnJ6L3t6fS97eH0ve3l9LnBuZycsXG4vLyAgbmFtZTogJ0dpdGh1YicsXG4vLyAgdHlwZTogJ2Jhc2VtYXAnXG4vL307XG4vL1xuLy9sYXllci5ncmVlbiA9IHtcbi8vICB1cmw6ICdodHRwOi8ve3N9LnRpbGVzLm1hcGJveC5jb20vdjMvZXhhbXBsZXMubWFwLTNnaXN1cGl1L3t6fS97eH0ve3l9LnBuZycsXG4vLyAgbmFtZTogJ0dyZWVuIFRoZW1lJyxcbi8vICB0eXBlOiAnYmFzZW1hcCdcbi8vfTtcblxubGF5ZXIuZGFyayA9IHtcbiAgdXJsOiAnaHR0cDovL3tzfS50aWxlcy5tYXBib3guY29tL3YzL3NwYXRpYWxkZXYubWFwLWM5ejJjeWVmL3t6fS97eH0ve3l9LnBuZycsXG4gIG5hbWU6ICdEYXJrIFRoZW1lJyxcbiAgdHlwZTogJ2Jhc2VtYXAnXG59O1xuXG5sYXllci5vc20gPSB7XG4gIHVybDogJ2h0dHA6Ly97c30udGlsZS5vc20ub3JnL3t6fS97eH0ve3l9LnBuZycsXG4gIG5hbWU6ICdTdGFuZGFyZCBPcGVuU3RyZWV0TWFwJyxcbiAgdHlwZTogJ2Jhc2VtYXAnXG59O1xuXG4vL2xheWVyLm9zbWN5Y2xlID0ge1xuLy8gIHVybDogJ2h0dHA6Ly97c30udGlsZS5vcGVuY3ljbGVtYXAub3JnL2N5Y2xlL3t6fS97eH0ve3l9LnBuZycsXG4vLyAgbmFtZTogJ0N5Y2xlIE9wZW5TdHJlZXRNYXAnLFxuLy8gIHR5cGU6ICdiYXNlbWFwJ1xuLy99O1xuLy9cbi8vbGF5ZXIub3NtdHJhbnNwb3J0ID0ge1xuLy8gIHVybDogJ2h0dHA6Ly97c30udGlsZTIub3BlbmN5Y2xlbWFwLm9yZy90cmFuc3BvcnQve3p9L3t4fS97eX0ucG5nJyxcbi8vICBuYW1lOiAnVHJhbnNwb3J0IE9wZW5TdHJlZXRNYXAnLFxuLy8gIHR5cGU6ICdiYXNlbWFwJ1xuLy99O1xuLy9cbi8vbGF5ZXIub3NtbWFwcXVlc3QgPSB7XG4vLyAgdXJsOiAnaHR0cDovL290aWxlMy5tcWNkbi5jb20vdGlsZXMvMS4wLjAvb3NtL3t6fS97eH0ve3l9LnBuZycsXG4vLyAgbmFtZTogJ01hcFF1ZXN0IE9wZW5TdHJlZXRNYXAnLFxuLy8gIHR5cGU6ICdiYXNlbWFwJ1xuLy99O1xuLy9cbi8vbGF5ZXIubmF0Z2VvID0ge1xuLy8gIHVybDogJ2h0dHA6Ly9zZXJ2aWNlcy5hcmNnaXNvbmxpbmUuY29tL0FyY0dJUy9yZXN0L3NlcnZpY2VzL05hdEdlb19Xb3JsZF9NYXAvTWFwU2VydmVyL3RpbGUve3p9L3t5fS97eH0nLFxuLy8gIG5hbWU6ICdOYXRpb25hbCBHZW9ncmFwaGljJyxcbi8vICB0eXBlOiAnYmFzZW1hcCdcbi8vfTtcbi8vXG4vL2xheWVyLnVzZ3N0b3BvID0ge1xuLy8gIHVybDogJ2h0dHA6Ly9zZXJ2aWNlcy5hcmNnaXNvbmxpbmUuY29tL0FyY0dJUy9yZXN0L3NlcnZpY2VzL1VTQV9Ub3BvX01hcHMvTWFwU2VydmVyL3RpbGUve3p9L3t5fS97eH0nLFxuLy8gIG5hbWU6ICdVU0dTIFRvcG9ncmFwaGljJyxcbi8vICB0eXBlOiAnYmFzZW1hcCdcbi8vfTtcbi8vXG4vL2xheWVyLm9ydGhvID0ge1xuLy8gIHVybDogJ2h0dHA6Ly9zZXJ2aWNlcy5hcmNnaXNvbmxpbmUuY29tL0FyY0dJUy9yZXN0L3NlcnZpY2VzL1dvcmxkX0ltYWdlcnkvTWFwU2VydmVyL3RpbGUve3p9L3t5fS97eH0nLFxuLy8gIG5hbWU6ICdPcnRob2dyYXBoaWMnLFxuLy8gIHR5cGU6ICdiYXNlbWFwJ1xuLy99O1xuLy9cbi8vbGF5ZXIub2NlYW4gPSB7XG4vLyAgdXJsOiAnaHR0cDovL3NlcnZpY2VzLmFyY2dpc29ubGluZS5jb20vQXJjR0lTL3Jlc3Qvc2VydmljZXMvT2NlYW4vV29ybGRfT2NlYW5fQmFzZS9NYXBTZXJ2ZXIvdGlsZS97en0ve3l9L3t4fScsXG4vLyAgbmFtZTogJ09jZWFuIEJhdGh5bWV0cmljJyxcbi8vICB0eXBlOiAnYmFzZW1hcCdcbi8vfTtcbi8vXG4vL2xheWVyLmxpZ2h0Z3JheSA9IHtcbi8vICB1cmw6ICdodHRwOi8vc2VydmljZXMuYXJjZ2lzb25saW5lLmNvbS9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9DYW52YXMvV29ybGRfTGlnaHRfR3JheV9CYXNlL01hcFNlcnZlci90aWxlL3t6fS97eX0ve3h9Jyxcbi8vICBuYW1lOiAnTGlnaHQgR3JheScsXG4vLyAgdHlwZTogJ2Jhc2VtYXAnXG4vL307XG4vL1xuLy9sYXllci5lc3JpdG9wbyA9IHtcbi8vICB1cmw6ICdodHRwOi8vc2VydmljZXMuYXJjZ2lzb25saW5lLmNvbS9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9Xb3JsZF9Ub3BvX01hcC9NYXBTZXJ2ZXIvdGlsZS97en0ve3l9L3t4fScsXG4vLyAgbmFtZTogJ0VzcmkgVG9wb2dyYXBoaWMnLFxuLy8gIHR5cGU6ICdiYXNlbWFwJ1xuLy99O1xuLy9cbi8vbGF5ZXIudG9uZXIgPSB7XG4vLyAgdXJsOiAnaHR0cDovL3tzfS50aWxlLnN0YW1lbi5jb20vdG9uZXIve3p9L3t4fS97eX0ucG5nJyxcbi8vICBuYW1lOiAnU3RhbWVuIFRvbmVyJyxcbi8vICB0eXBlOiAnYmFzZW1hcCdcbi8vfTtcbi8vXG4vL2xheWVyLndhdGVyY29sb3IgPSB7XG4vLyAgdXJsOiAnaHR0cDovL3tzfS50aWxlLnN0YW1lbi5jb20vd2F0ZXJjb2xvci97en0ve3h9L3t5fS5wbmcnLFxuLy8gIG5hbWU6ICdTdGFtZW4gV2F0ZXJjb2xvcicsXG4vLyAgdHlwZTogJ2Jhc2VtYXAnXG4vL307XG4iLCJ2YXIgbGF5ZXIgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5sYXllci5PbkNsaWNrRXZlbnQgPSBmdW5jdGlvbiAoaW5kZXgsIHBvaW50cywgc2VjdG9yKSB7XG5cbiAgICBpZiAocG9pbnRzLmxlbmd0aCA+IDApIHtcblxuICAgICAgICBpZiAoJHNjb3BlLkFMTHBvaW50cy5sZW5ndGggPCAyKSB7IC8vIGNoZWNrIGlmIG1vcmUgdGhlbiBvbmUgc2VjdG9yIGlzIHNlbGVjdGVkXG4gICAgICAgICAgICBpbmRleCA9ICRzY29wZS5kZXRhaWxzSW5kZXg7XG4gICAgICAgICAgICB2YXIgY3VycmVudFBvaW50ID0gcG9pbnRzWzBdW2luZGV4XTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQb2ludCkge1xuICAgICAgICAgICAgICAgIHZhciBsYXllcmluZGV4ID0gb3ZlcmxheU5hbWVzLmluZGV4T2Yoc2VjdG9yKTtcbiAgICAgICAgICAgICAgICB2YXIgY3Vyck92ZXJsYXkgPSBvdmVybGF5c1tsYXllcmluZGV4XTtcblxuICAgICAgICAgICAgICAgIHZhciBsYXllcnMgPSBjdXJyT3ZlcmxheS5nZXRMYXllcnMoKTtcbiAgICAgICAgICAgICAgICBpZiAobGF5ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXllciA9IGxheWVyc1tPYmplY3Qua2V5cyhsYXllcnMpWzBdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSBcImlkXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWN0b3IgPT0gXCJjaWNvc191Z2FuZGFcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSBcInN1Ym1pc3Npb25faWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgTWFwQnVpbGRlci5zZWxlY3RlZENvbmZldHRpID0gbGF5ZXIuZmVhdHVyZXNbY3VycmVudFBvaW50LnByb3BlcnRpZXNbaWRdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXBCdWlsZGVyLnNlbGVjdGVkQ29uZmV0dGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXBCdWlsZGVyLnNlbGVjdGVkQ29uZmV0dGkuc2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hcEJ1aWxkZXIucHJldmlvdXNseVNlbGVjdGVkQ29uZmV0dGkpIE1hcEJ1aWxkZXIucHJldmlvdXNseVNlbGVjdGVkQ29uZmV0dGkuZGVzZWxlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXBCdWlsZGVyLnByZXZpb3VzbHlTZWxlY3RlZENvbmZldHRpID0gTWFwQnVpbGRlci5zZWxlY3RlZENvbmZldHRpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaGFuZGxlcyBtdWx0aXBsZSBzZWN0b3JzXG4gICAgICAgICAgICBpbmRleCA9ICRzY29wZS5kZXRhaWxzSW5kZXg7XG5cbiAgICAgICAgICAgIHZhciBhbGxwb2ludHMgPSBbXTtcblxuICAgICAgICAgICAgLy9jb21iaW5lIGZlYXR1cmUgcG9pbnRzIGZyb20gYWxsIHNlY3RvcnMgaW50byBvbmUgYXJyYXkgJ2FsbHBvaW50cydcbiAgICAgICAgICAgIHBvaW50cy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICB2YWwuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgICAgICBhbGxwb2ludHMucHVzaCh2KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgY3VycmVudFBvaW50ID0gYWxscG9pbnRzW2luZGV4XTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQb2ludCkge1xuICAgICAgICAgICAgICAgIHZhciBsYXllcmluZGV4ID0gKGN1cnJlbnRQb2ludC5wcm9wZXJ0aWVzLnNlY3RvciA9PSBcImZzcFwiKSA/IG92ZXJsYXlOYW1lcy5pbmRleE9mKHNlY3RvcikgOiBvdmVybGF5TmFtZXMuaW5kZXhPZihjdXJyZW50UG9pbnQucHJvcGVydGllcy5zZWN0b3IpO1xuICAgICAgICAgICAgICAgIHZhciBjdXJyT3ZlcmxheSA9IG92ZXJsYXlzW2xheWVyaW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgdmFyIGxheWVycyA9IGN1cnJPdmVybGF5LmdldExheWVycygpO1xuICAgICAgICAgICAgICAgIGlmIChsYXllcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxheWVyID0gbGF5ZXJzW09iamVjdC5rZXlzKGxheWVycylbMF1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGF5ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZCA9IFwiaWRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlY3RvciA9PSBcImNpY29zX3VnYW5kYVwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA9IFwic3VibWlzc2lvbl9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBNYXBCdWlsZGVyLnNlbGVjdGVkQ29uZmV0dGkgPSBsYXllci5mZWF0dXJlc1tjdXJyZW50UG9pbnQucHJvcGVydGllcy5pZF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWFwQnVpbGRlci5zZWxlY3RlZENvbmZldHRpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFwQnVpbGRlci5zZWxlY3RlZENvbmZldHRpLnNlbGVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXBCdWlsZGVyLnByZXZpb3VzbHlTZWxlY3RlZENvbmZldHRpICYmIChNYXBCdWlsZGVyLnNlbGVjdGVkQ29uZmV0dGkuaWQgIT09IE1hcEJ1aWxkZXIucHJldmlvdXNseVNlbGVjdGVkQ29uZmV0dGkuaWQpKSBNYXBCdWlsZGVyLnByZXZpb3VzbHlTZWxlY3RlZENvbmZldHRpLmRlc2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFwQnVpbGRlci5wcmV2aW91c2x5U2VsZWN0ZWRDb25mZXR0aSA9IE1hcEJ1aWxkZXIuc2VsZWN0ZWRDb25mZXR0aTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxubGF5ZXIuZ2FkbTIwMTRrZW55YSA9IHtcbiAgdHlwZTogJ3BiZicsXG4gIG5hbWU6ICdHQURNIDIwMTQgS2VueWEnLFxuICB1cmw6IFwiaHR0cDovL3NwYXRpYWxzZXJ2ZXIuc3BhdGlhbGRldi5jb20vc2VydmljZXMvdmVjdG9yLXRpbGVzL2dhZG0yMDE0a2VueWEve3p9L3t4fS97eX0ucGJmXCIsXG4gIGRlYnVnOiBmYWxzZSxcbiAgY2xpY2thYmxlTGF5ZXJzOiBbJ2dhZG0wJywgJ2dhZG0xJywgJ2dhZG0yJywgJ2dhZG0zJywgJ2dhZG00JywgJ2dhZG01J10sXG5cbiAgZ2V0SURGb3JMYXllckZlYXR1cmU6IGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICByZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLmlkO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgZmlsdGVyIGZ1bmN0aW9uIGdldHMgY2FsbGVkIHdoZW4gaXRlcmF0aW5nIHRob3VnaCBlYWNoIHZlY3RvciB0aWxlIGZlYXR1cmUgKHZ0ZikuIFlvdSBoYXZlIGFjY2Vzc1xuICAgKiB0byBldmVyeSBwcm9wZXJ0eSBhc3NvY2lhdGVkIHdpdGggYSBnaXZlbiBmZWF0dXJlICh0aGUgZmVhdHVyZSwgYW5kIHRoZSBsYXllcikuIFlvdSBjYW4gYWxzbyBmaWx0ZXJcbiAgICogYmFzZWQgb2YgdGhlIGNvbnRleHQgKGVhY2ggdGlsZSB0aGF0IHRoZSBmZWF0dXJlIGlzIGRyYXduIG9udG8pLlxuICAgKlxuICAgKiBSZXR1cm5pbmcgZmFsc2Ugc2tpcHMgb3ZlciB0aGUgZmVhdHVyZSBhbmQgaXQgaXMgbm90IGRyYXduLlxuICAgKlxuICAgKiBAcGFyYW0gZmVhdHVyZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZpbHRlcjogZnVuY3Rpb24oZmVhdHVyZSwgY29udGV4dCkge1xuICAgIGlmIChmZWF0dXJlLmxheWVyLm5hbWUgPT09ICdnYWRtMV9sYWJlbCcgfHwgZmVhdHVyZS5sYXllci5uYW1lID09PSAnZ2FkbTEnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFdoZW4gd2Ugd2FudCB0byBsaW5rIGV2ZW50cyBiZXR3ZWVuIGxheWVycywgbGlrZSBjbGlja2luZyBvbiBhIGxhYmVsIGFuZCBhXG4gICAqIGNvcnJlc3BvbmRpbmcgcG9seWdvbiBmcmVhdHVyZSwgdGhpcyB3aWxsIHJldHVybiB0aGUgY29ycmVzcG9uZGluZyBtYXBwaW5nXG4gICAqIGJldHdlZW4gbGF5ZXJzLiBUaGlzIHByb3ZpZGVzIGtub3dsZWRnZSBvZiB3aGljaCBvdGhlciBmZWF0dXJlIGEgZ2l2ZW4gZmVhdHVyZVxuICAgKiBpcyBsaW5rZWQgdG8uXG4gICAqXG4gICAqIEBwYXJhbSBsYXllck5hbWUgIHRoZSBsYXllciB3ZSB3YW50IHRvIGtub3cgdGhlIGxpbmtlZCBsYXllciBmcm9tXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgY29ycmVzcG9uZGluZyBsaW5rZWQgbGF5ZXJcbiAgICovXG4gIGxheWVyTGluazogZnVuY3Rpb24obGF5ZXJOYW1lKSB7XG4gICAgaWYgKGxheWVyTmFtZS5pbmRleE9mKCdfbGFiZWwnKSA+IC0xKSB7XG4gICAgICByZXR1cm4gbGF5ZXJOYW1lLnJlcGxhY2UoJ19sYWJlbCcsICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIGxheWVyTmFtZSArICdfbGFiZWwnO1xuICB9LFxuXG4gIHN0eWxlRm9yOiBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgdmFyIHN0eWxlID0ge307XG4gICAgdmFyIHNlbGVjdGVkID0gc3R5bGUuc2VsZWN0ZWQgPSB7fTtcblxuICAgIHZhciB0eXBlID0gZmVhdHVyZS50eXBlO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAxOiAvLydQb2ludCdcbiAgICAgICAgLy8gdW5zZWxlY3RlZFxuICAgICAgICBzdHlsZS5jb2xvciA9ICcjZmYwMDAwJztcbiAgICAgICAgc3R5bGUucmFkaXVzID0gNTtcbiAgICAgICAgLy8gc2VsZWN0ZWRcbiAgICAgICAgc2VsZWN0ZWQuY29sb3IgPSAncmdiYSgyNTUsMjU1LDAsMC41KSc7XG4gICAgICAgIHNlbGVjdGVkLnJhZGl1cyA9IDU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOiAvLydMaW5lU3RyaW5nJ1xuICAgICAgICAvLyB1bnNlbGVjdGVkXG4gICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMTYxLDIxNywxNTUsMC44KSc7XG4gICAgICAgIHN0eWxlLnNpemUgPSAzO1xuICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICBzZWxlY3RlZC5jb2xvciA9ICdyZ2JhKDI1NSwyNSwwLDAuNSknO1xuICAgICAgICBzZWxlY3RlZC5zaXplID0gMztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6IC8vJ1BvbHlnb24nXG4gICAgICAgIC8vIHVuc2VsZWN0ZWRcbiAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgxNDksMTM5LDI1NSwwLjQpJztcbiAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICBjb2xvcjogJ3JnYigyMCwyMCwyMCknLFxuICAgICAgICAgIHNpemU6IDJcbiAgICAgICAgfTtcbiAgICAgICAgLy8gc2VsZWN0ZWRcbiAgICAgICAgc2VsZWN0ZWQuY29sb3IgPSAncmdiYSgyNTUsMjUsMCwwLjMpJztcbiAgICAgICAgc2VsZWN0ZWQub3V0bGluZSA9IHtcbiAgICAgICAgICBjb2xvcjogJyNkOTUzNGYnLFxuICAgICAgICAgIHNpemU6IDNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoZmVhdHVyZS5sYXllci5uYW1lID09PSAnZ2FkbTFfbGFiZWwnKSB7XG4gICAgICBzdHlsZS5zdGF0aWNMYWJlbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3R5bGUgPSB7XG4gICAgICAgICAgaHRtbDogZmVhdHVyZS5wcm9wZXJ0aWVzLm5hbWUsXG4gICAgICAgICAgaWNvblNpemU6IFsxMjUsMzBdLFxuICAgICAgICAgIGNzc0NsYXNzOiAnbGFiZWwtaWNvbi10ZXh0J1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG59O1xuXG5sYXllci5vc21fc2VhdHRsZSA9IHtcbiAgdHlwZTogJ3BiZicsXG4gIG5hbWU6ICdPU00gU2VhdHRsZSAnLFxuICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3NlcnZpY2VzL3ZlY3Rvci10aWxlcy9vc21fc2VhdHRsZS97en0ve3h9L3t5fS5wYmZcIixcbiAgZGVidWc6IGZhbHNlLFxuICBjbGlja2FibGVMYXllcnM6IFtdLFxuXG4gIGdldElERm9yTGF5ZXJGZWF0dXJlOiBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgcmV0dXJuIGZlYXR1cmUucHJvcGVydGllcy5pZDtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGZpbHRlciBmdW5jdGlvbiBnZXRzIGNhbGxlZCB3aGVuIGl0ZXJhdGluZyB0aG91Z2ggZWFjaCB2ZWN0b3IgdGlsZSBmZWF0dXJlICh2dGYpLiBZb3UgaGF2ZSBhY2Nlc3NcbiAgICogdG8gZXZlcnkgcHJvcGVydHkgYXNzb2NpYXRlZCB3aXRoIGEgZ2l2ZW4gZmVhdHVyZSAodGhlIGZlYXR1cmUsIGFuZCB0aGUgbGF5ZXIpLiBZb3UgY2FuIGFsc28gZmlsdGVyXG4gICAqIGJhc2VkIG9mIHRoZSBjb250ZXh0IChlYWNoIHRpbGUgdGhhdCB0aGUgZmVhdHVyZSBpcyBkcmF3biBvbnRvKS5cbiAgICpcbiAgICogUmV0dXJuaW5nIGZhbHNlIHNraXBzIG92ZXIgdGhlIGZlYXR1cmUgYW5kIGl0IGlzIG5vdCBkcmF3bi5cbiAgICpcbiAgICogQHBhcmFtIGZlYXR1cmVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmaWx0ZXI6IGZ1bmN0aW9uKGZlYXR1cmUsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICAvKipcbiAgICogV2hlbiB3ZSB3YW50IHRvIGxpbmsgZXZlbnRzIGJldHdlZW4gbGF5ZXJzLCBsaWtlIGNsaWNraW5nIG9uIGEgbGFiZWwgYW5kIGFcbiAgICogY29ycmVzcG9uZGluZyBwb2x5Z29uIGZyZWF0dXJlLCB0aGlzIHdpbGwgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIG1hcHBpbmdcbiAgICogYmV0d2VlbiBsYXllcnMuIFRoaXMgcHJvdmlkZXMga25vd2xlZGdlIG9mIHdoaWNoIG90aGVyIGZlYXR1cmUgYSBnaXZlbiBmZWF0dXJlXG4gICAqIGlzIGxpbmtlZCB0by5cbiAgICpcbiAgICogQHBhcmFtIGxheWVyTmFtZSAgdGhlIGxheWVyIHdlIHdhbnQgdG8ga25vdyB0aGUgbGlua2VkIGxheWVyIGZyb21cbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBjb3JyZXNwb25kaW5nIGxpbmtlZCBsYXllclxuICAgKi9cbiAgbGF5ZXJMaW5rOiBmdW5jdGlvbihsYXllck5hbWUpIHtcbiAgICBpZiAobGF5ZXJOYW1lLmluZGV4T2YoJ19sYWJlbCcpID4gLTEpIHtcbiAgICAgIHJldHVybiBsYXllck5hbWUucmVwbGFjZSgnX2xhYmVsJywgJycpO1xuICAgIH1cbiAgICByZXR1cm4gbGF5ZXJOYW1lICsgJ19sYWJlbCc7XG4gIH0sXG5cbiAgc3R5bGVGb3I6IGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICB2YXIgc3R5bGUgPSB7fTtcbiAgICB2YXIgc2VsZWN0ZWQgPSBzdHlsZS5zZWxlY3RlZCA9IHt9O1xuXG4gICAgdmFyIHR5cGUgPSBmZWF0dXJlLnR5cGU7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIDE6IC8vJ1BvaW50J1xuICAgICAgICAvLyB1bnNlbGVjdGVkXG4gICAgICAgIHN0eWxlLmNvbG9yID0gJyNmZjAwMDAnO1xuICAgICAgICBzdHlsZS5yYWRpdXMgPSA1O1xuICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICBzZWxlY3RlZC5jb2xvciA9ICdyZ2JhKDI1NSwyNTUsMCwwLjUpJztcbiAgICAgICAgc2VsZWN0ZWQucmFkaXVzID0gNTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6IC8vJ0xpbmVTdHJpbmcnXG4gICAgICAgIC8vIHVuc2VsZWN0ZWRcbiAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgxNjEsMjE3LDE1NSwwLjgpJztcbiAgICAgICAgc3R5bGUuc2l6ZSA9IDM7XG4gICAgICAgIC8vIHNlbGVjdGVkXG4gICAgICAgIHNlbGVjdGVkLmNvbG9yID0gJ3JnYmEoMjU1LDI1LDAsMC41KSc7XG4gICAgICAgIHNlbGVjdGVkLnNpemUgPSAzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzogLy8nUG9seWdvbidcbiAgICAgICAgLy8gdW5zZWxlY3RlZFxuICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDE0OSwxMzksMjU1LDAuNCknO1xuICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgIGNvbG9yOiAncmdiKDIwLDIwLDIwKScsXG4gICAgICAgICAgc2l6ZTogMlxuICAgICAgICB9O1xuICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICBzZWxlY3RlZC5jb2xvciA9ICdyZ2JhKDI1NSwyNSwwLDAuMyknO1xuICAgICAgICBzZWxlY3RlZC5vdXRsaW5lID0ge1xuICAgICAgICAgIGNvbG9yOiAnI2Q5NTM0ZicsXG4gICAgICAgICAgc2l6ZTogM1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGlmIChmZWF0dXJlLmxheWVyLm5hbWUgPT09ICdnYWRtMV9sYWJlbCcpIHtcbiAgICAgIHN0eWxlLnN0YXRpY0xhYmVsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICAgICBodG1sOiBmZWF0dXJlLnByb3BlcnRpZXMubmFtZSxcbiAgICAgICAgICBpY29uU2l6ZTogWzEyNSwzMF0sXG4gICAgICAgICAgY3NzQ2xhc3M6ICdsYWJlbC1pY29uLXRleHQnXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbn07XG5cbmxheWVyLmdhdWxfZnNwID0ge1xuICB0eXBlOiAncGJmJyxcbiAgbmFtZTogJ09TTSBTZWF0dGxlICcsXG4gIHVybDogXCJodHRwOi8vc3BhdGlhbHNlcnZlci5zcGF0aWFsZGV2LmNvbS9zZXJ2aWNlcy92ZWN0b3ItdGlsZXMvR0FVTF9GU1Ave3p9L3t4fS97eX0ucGJmXCIsXG4gIGRlYnVnOiBmYWxzZSxcbiAgY2xpY2thYmxlTGF5ZXJzOiBbXSxcblxuICBnZXRJREZvckxheWVyRmVhdHVyZTogZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgIHJldHVybiBcIlwiO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgZmlsdGVyIGZ1bmN0aW9uIGdldHMgY2FsbGVkIHdoZW4gaXRlcmF0aW5nIHRob3VnaCBlYWNoIHZlY3RvciB0aWxlIGZlYXR1cmUgKHZ0ZikuIFlvdSBoYXZlIGFjY2Vzc1xuICAgKiB0byBldmVyeSBwcm9wZXJ0eSBhc3NvY2lhdGVkIHdpdGggYSBnaXZlbiBmZWF0dXJlICh0aGUgZmVhdHVyZSwgYW5kIHRoZSBsYXllcikuIFlvdSBjYW4gYWxzbyBmaWx0ZXJcbiAgICogYmFzZWQgb2YgdGhlIGNvbnRleHQgKGVhY2ggdGlsZSB0aGF0IHRoZSBmZWF0dXJlIGlzIGRyYXduIG9udG8pLlxuICAgKlxuICAgKiBSZXR1cm5pbmcgZmFsc2Ugc2tpcHMgb3ZlciB0aGUgZmVhdHVyZSBhbmQgaXQgaXMgbm90IGRyYXduLlxuICAgKlxuICAgKiBAcGFyYW0gZmVhdHVyZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZpbHRlcjogZnVuY3Rpb24oZmVhdHVyZSwgY29udGV4dCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBXaGVuIHdlIHdhbnQgdG8gbGluayBldmVudHMgYmV0d2VlbiBsYXllcnMsIGxpa2UgY2xpY2tpbmcgb24gYSBsYWJlbCBhbmQgYVxuICAgKiBjb3JyZXNwb25kaW5nIHBvbHlnb24gZnJlYXR1cmUsIHRoaXMgd2lsbCByZXR1cm4gdGhlIGNvcnJlc3BvbmRpbmcgbWFwcGluZ1xuICAgKiBiZXR3ZWVuIGxheWVycy4gVGhpcyBwcm92aWRlcyBrbm93bGVkZ2Ugb2Ygd2hpY2ggb3RoZXIgZmVhdHVyZSBhIGdpdmVuIGZlYXR1cmVcbiAgICogaXMgbGlua2VkIHRvLlxuICAgKlxuICAgKiBAcGFyYW0gbGF5ZXJOYW1lICB0aGUgbGF5ZXIgd2Ugd2FudCB0byBrbm93IHRoZSBsaW5rZWQgbGF5ZXIgZnJvbVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGNvcnJlc3BvbmRpbmcgbGlua2VkIGxheWVyXG4gICAqL1xuICBsYXllckxpbms6IGZ1bmN0aW9uKGxheWVyTmFtZSkge1xuICAgIGlmIChsYXllck5hbWUuaW5kZXhPZignX2xhYmVsJykgPiAtMSkge1xuICAgICAgcmV0dXJuIGxheWVyTmFtZS5yZXBsYWNlKCdfbGFiZWwnLCAnJyk7XG4gICAgfVxuICAgIHJldHVybiBsYXllck5hbWUgKyAnX2xhYmVsJztcbiAgfSxcblxuICBzdHlsZUZvcjogZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgIHZhciBzdHlsZSA9IHt9O1xuICAgIHZhciBzZWxlY3RlZCA9IHN0eWxlLnNlbGVjdGVkID0ge307XG5cbiAgICB2YXIgdHlwZSA9IGZlYXR1cmUudHlwZTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgMTogLy8nUG9pbnQnXG4gICAgICAgIC8vIHVuc2VsZWN0ZWRcbiAgICAgICAgc3R5bGUuY29sb3IgPSAnI2ZmMDAwMCc7XG4gICAgICAgIHN0eWxlLnJhZGl1cyA9IDU7XG4gICAgICAgIC8vIHNlbGVjdGVkXG4gICAgICAgIHNlbGVjdGVkLmNvbG9yID0gJ3JnYmEoMjU1LDI1NSwwLDAuNSknO1xuICAgICAgICBzZWxlY3RlZC5yYWRpdXMgPSA1O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjogLy8nTGluZVN0cmluZydcbiAgICAgICAgLy8gdW5zZWxlY3RlZFxuICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDE2MSwyMTcsMTU1LDAuOCknO1xuICAgICAgICBzdHlsZS5zaXplID0gMztcbiAgICAgICAgLy8gc2VsZWN0ZWRcbiAgICAgICAgc2VsZWN0ZWQuY29sb3IgPSAncmdiYSgyNTUsMjUsMCwwLjUpJztcbiAgICAgICAgc2VsZWN0ZWQuc2l6ZSA9IDM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOiAvLydQb2x5Z29uJ1xuICAgICAgICAvLyB1bnNlbGVjdGVkXG4gICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMTQ5LDEzOSwyNTUsMC40KSc7XG4gICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgY29sb3I6ICdyZ2IoMjAsMjAsMjApJyxcbiAgICAgICAgICBzaXplOiAyXG4gICAgICAgIH07XG4gICAgICAgIC8vIHNlbGVjdGVkXG4gICAgICAgIHNlbGVjdGVkLmNvbG9yID0gJ3JnYmEoMjU1LDI1LDAsMC4zKSc7XG4gICAgICAgIHNlbGVjdGVkLm91dGxpbmUgPSB7XG4gICAgICAgICAgY29sb3I6ICcjZDk1MzRmJyxcbiAgICAgICAgICBzaXplOiAzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbn07XG5cbmxheWVyLmNpY29zX2tlbnlhID0ge1xuICB0eXBlOiAncGJmJyxcbiAgbmFtZTogJ0ZTUCBLZW55YScsXG4gIHVybDogXCJodHRwOi8vc3BhdGlhbHNlcnZlci5zcGF0aWFsZGV2LmNvbS9zZXJ2aWNlcy92ZWN0b3ItdGlsZXMvY2ljb3NfMjAxM19rZW55YS97en0ve3h9L3t5fS5wYmY/ZmllbGRzPXR5cGUsaWQscHJvdmlkZXJzXCIsXG4gIGRlYnVnOiBmYWxzZSxcbiAgY2xpY2thYmxlTGF5ZXJzOiBbXSxcblxuICBnZXRJREZvckxheWVyRmVhdHVyZTogZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgIHJldHVybiBmZWF0dXJlLnByb3BlcnRpZXMuaWQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBmaWx0ZXIgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgd2hlbiBpdGVyYXRpbmcgdGhvdWdoIGVhY2ggdmVjdG9yIHRpbGUgZmVhdHVyZSAodnRmKS4gWW91IGhhdmUgYWNjZXNzXG4gICAqIHRvIGV2ZXJ5IHByb3BlcnR5IGFzc29jaWF0ZWQgd2l0aCBhIGdpdmVuIGZlYXR1cmUgKHRoZSBmZWF0dXJlLCBhbmQgdGhlIGxheWVyKS4gWW91IGNhbiBhbHNvIGZpbHRlclxuICAgKiBiYXNlZCBvZiB0aGUgY29udGV4dCAoZWFjaCB0aWxlIHRoYXQgdGhlIGZlYXR1cmUgaXMgZHJhd24gb250bykuXG4gICAqXG4gICAqIFJldHVybmluZyBmYWxzZSBza2lwcyBvdmVyIHRoZSBmZWF0dXJlIGFuZCBpdCBpcyBub3QgZHJhd24uXG4gICAqXG4gICAqIEBwYXJhbSBmZWF0dXJlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZmlsdGVyOiBmdW5jdGlvbihmZWF0dXJlLCBjb250ZXh0KSB7XG4gICAgLy9yZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLmNvdW50cnkgPT0gJ0tlbnlhJztcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICAvKipcbiAgICogV2hlbiB3ZSB3YW50IHRvIGxpbmsgZXZlbnRzIGJldHdlZW4gbGF5ZXJzLCBsaWtlIGNsaWNraW5nIG9uIGEgbGFiZWwgYW5kIGFcbiAgICogY29ycmVzcG9uZGluZyBwb2x5Z29uIGZyZWF0dXJlLCB0aGlzIHdpbGwgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIG1hcHBpbmdcbiAgICogYmV0d2VlbiBsYXllcnMuIFRoaXMgcHJvdmlkZXMga25vd2xlZGdlIG9mIHdoaWNoIG90aGVyIGZlYXR1cmUgYSBnaXZlbiBmZWF0dXJlXG4gICAqIGlzIGxpbmtlZCB0by5cbiAgICpcbiAgICogQHBhcmFtIGxheWVyTmFtZSAgdGhlIGxheWVyIHdlIHdhbnQgdG8ga25vdyB0aGUgbGlua2VkIGxheWVyIGZyb21cbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBjb3JyZXNwb25kaW5nIGxpbmtlZCBsYXllclxuICAgKi9cbiAgbGF5ZXJMaW5rOiBmdW5jdGlvbihsYXllck5hbWUpIHtcbiAgICBpZiAobGF5ZXJOYW1lLmluZGV4T2YoJ19sYWJlbCcpID4gLTEpIHtcbiAgICAgIHJldHVybiBsYXllck5hbWUucmVwbGFjZSgnX2xhYmVsJywgJycpO1xuICAgIH1cbiAgICByZXR1cm4gbGF5ZXJOYW1lICsgJ19sYWJlbCc7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZnkgd2hpY2ggZmVhdHVyZXMgc2hvdWxkIGhhdmUgYSBjZXJ0YWluIHogaW5kZXggKGludGVnZXIpLiAgTG93ZXIgbnVtYmVycyB3aWxsIGRyYXcgb24gJ3RoZSBib3R0b20nLlxuICAgKlxuICAgKiBAcGFyYW0gZmVhdHVyZSAtIHRoZSBQQkZGZWF0dXJlIHRoYXQgY29udGFpbnMgcHJvcGVydGllc1xuICAgKi9cbiAgbGF5ZXJPcmRlcmluZzogZnVuY3Rpb24oZmVhdHVyZSl7XG4gICAgLy9UaGlzIG9ubHkgbmVlZHMgdG8gYmUgZG9uZSBmb3IgZWFjaCB0eXBlLCBub3QgbmVjZXNzYXJpbHkgZm9yIGVhY2ggZmVhdHVyZS4gQnV0IHdlJ2xsIHN0YXJ0IGhlcmUuXG4gICAgaWYoZmVhdHVyZSAmJiBmZWF0dXJlLnByb3BlcnRpZXMpe1xuICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzLnpJbmRleCA9IENJQ09fQ29uZmlnW2ZlYXR1cmUucHJvcGVydGllcy50eXBlXS56SW5kZXggfHwgNTtcbiAgICB9XG4gIH0sXG5cbiAgc3R5bGU6IGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICB2YXIgc3R5bGUgPSB7fTtcbiAgICB2YXIgc2VsZWN0ZWQgPSBzdHlsZS5zZWxlY3RlZCA9IHt9O1xuICAgIHZhciBwb2ludFJhZGl1cyA9IDE7XG5cbiAgICBmdW5jdGlvbiBTY2FsZURlcGVuZGVudFBvaW50UmFkaXVzKHpvb20pe1xuICAgICAgLy9TZXQgcG9pbnQgcmFkaXVzIGJhc2VkIG9uIHpvb21cbiAgICAgIHZhciBwb2ludFJhZGl1cyA9IDE7XG4gICAgICBpZih6b29tID49IDAgJiYgem9vbSA8PSA3KXtcbiAgICAgICAgcG9pbnRSYWRpdXMgPSAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZih6b29tID4gNyAmJiB6b29tIDw9IDEwKXtcbiAgICAgICAgcG9pbnRSYWRpdXMgPSAzO1xuICAgICAgfVxuICAgICAgZWxzZSBpZih6b29tID4gMTApe1xuICAgICAgICBwb2ludFJhZGl1cyA9IDQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwb2ludFJhZGl1cztcbiAgICB9XG5cblxuICAgIHZhciB0eXBlID0gZmVhdHVyZS50eXBlO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAxOiAvLydQb2ludCdcbiAgICAgICAgLy8gdW5zZWxlY3RlZFxuICAgICAgICBzdHlsZS5jb2xvciA9IENJQ09fQ29uZmlnW2ZlYXR1cmUucHJvcGVydGllcy50eXBlXS5jb2xvcjtcbiAgICAgICAgc3R5bGUucmFkaXVzID0gU2NhbGVEZXBlbmRlbnRQb2ludFJhZGl1cztcbiAgICAgICAgLy8gc2VsZWN0ZWRcbiAgICAgICAgc2VsZWN0ZWQuY29sb3IgPSBDSUNPX0NvbmZpZ1tmZWF0dXJlLnByb3BlcnRpZXMudHlwZV0uY29sb3I7XG4gICAgICAgIHNlbGVjdGVkLnJhZGl1cyA9IDc7XG4gICAgICAgIHNlbGVjdGVkLnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC41KSc7XG4gICAgICAgIHNlbGVjdGVkLmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOiAvLydMaW5lU3RyaW5nJ1xuICAgICAgICAvLyB1bnNlbGVjdGVkXG4gICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMTYxLDIxNywxNTUsMC44KSc7XG4gICAgICAgIHN0eWxlLnNpemUgPSAzO1xuICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICBzZWxlY3RlZC5jb2xvciA9ICdyZ2JhKDI1NSwyNSwwLDAuNSknO1xuICAgICAgICBzZWxlY3RlZC5zaXplID0gMztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6IC8vJ1BvbHlnb24nXG4gICAgICAgIC8vIHVuc2VsZWN0ZWRcbiAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgxNDksMTM5LDI1NSwwLjQpJztcbiAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICBjb2xvcjogJ3JnYigyMCwyMCwyMCknLFxuICAgICAgICAgIHNpemU6IDJcbiAgICAgICAgfTtcbiAgICAgICAgLy8gc2VsZWN0ZWRcbiAgICAgICAgc2VsZWN0ZWQuY29sb3IgPSAncmdiYSgyNTUsMjUsMCwwLjMpJztcbiAgICAgICAgc2VsZWN0ZWQub3V0bGluZSA9IHtcbiAgICAgICAgICBjb2xvcjogJyNkOTUzNGYnLFxuICAgICAgICAgIHNpemU6IDNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxufTtcblxuXG5sYXllci5jaWNvc191Z2FuZGEgPSB7XG4gICAgdHlwZTogJ3BiZicsXG4gICAgbmFtZTogJ0ZTUCBVZ2FuZGEgMjAxNScsXG4gICAgdXJsOiBcImh0dHA6Ly9zcGF0aWFsc2VydmVyLnNwYXRpYWxkZXYuY29tL3NlcnZpY2VzL3ZlY3Rvci10aWxlcy9jaWNvc18yMDE1X3VnYW5kYS97en0ve3h9L3t5fS5wYmY/ZmllbGRzPXR5cGUsaWRcIixcbiAgICBkZWJ1ZzogZmFsc2UsXG4gICAgY2xpY2thYmxlTGF5ZXJzOiBudWxsLFxuXG4gICAgZ2V0SURGb3JMYXllckZlYXR1cmU6IGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIGZlYXR1cmUucHJvcGVydGllc1snc3VibWlzc2lvbl9pZCddO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmlsdGVyIGZ1bmN0aW9uIGdldHMgY2FsbGVkIHdoZW4gaXRlcmF0aW5nIHRob3VnaCBlYWNoIHZlY3RvciB0aWxlIGZlYXR1cmUgKHZ0ZikuIFlvdSBoYXZlIGFjY2Vzc1xuICAgICAqIHRvIGV2ZXJ5IHByb3BlcnR5IGFzc29jaWF0ZWQgd2l0aCBhIGdpdmVuIGZlYXR1cmUgKHRoZSBmZWF0dXJlLCBhbmQgdGhlIGxheWVyKS4gWW91IGNhbiBhbHNvIGZpbHRlclxuICAgICAqIGJhc2VkIG9mIHRoZSBjb250ZXh0IChlYWNoIHRpbGUgdGhhdCB0aGUgZmVhdHVyZSBpcyBkcmF3biBvbnRvKS5cbiAgICAgKlxuICAgICAqIFJldHVybmluZyBmYWxzZSBza2lwcyBvdmVyIHRoZSBmZWF0dXJlIGFuZCBpdCBpcyBub3QgZHJhd24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZmVhdHVyZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGZpbHRlcjogZnVuY3Rpb24oZmVhdHVyZSwgY29udGV4dCkge1xuICAgICAgICAvL3JldHVybiBmZWF0dXJlLnByb3BlcnRpZXMuY291bnRyeSA9PSAnS2VueWEnO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB3ZSB3YW50IHRvIGxpbmsgZXZlbnRzIGJldHdlZW4gbGF5ZXJzLCBsaWtlIGNsaWNraW5nIG9uIGEgbGFiZWwgYW5kIGFcbiAgICAgKiBjb3JyZXNwb25kaW5nIHBvbHlnb24gZnJlYXR1cmUsIHRoaXMgd2lsbCByZXR1cm4gdGhlIGNvcnJlc3BvbmRpbmcgbWFwcGluZ1xuICAgICAqIGJldHdlZW4gbGF5ZXJzLiBUaGlzIHByb3ZpZGVzIGtub3dsZWRnZSBvZiB3aGljaCBvdGhlciBmZWF0dXJlIGEgZ2l2ZW4gZmVhdHVyZVxuICAgICAqIGlzIGxpbmtlZCB0by5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsYXllck5hbWUgIHRoZSBsYXllciB3ZSB3YW50IHRvIGtub3cgdGhlIGxpbmtlZCBsYXllciBmcm9tXG4gICAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBjb3JyZXNwb25kaW5nIGxpbmtlZCBsYXllclxuICAgICAqL1xuICAgIGxheWVyTGluazogZnVuY3Rpb24obGF5ZXJOYW1lKSB7XG4gICAgICAgIGlmIChsYXllck5hbWUuaW5kZXhPZignX2xhYmVsJykgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGxheWVyTmFtZS5yZXBsYWNlKCdfbGFiZWwnLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxheWVyTmFtZSArICdfbGFiZWwnO1xuICAgIH0sXG5cbiAgICBvbkNsaWNrOiBmdW5jdGlvbihldnQpe1xuICAgICAgICBpZihldnQgJiYgZXZ0LmZlYXR1cmVzKXtcbiAgICAgICAgICAgIGV2dC5mZWF0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uKGYpe1xuICAgICAgICAgICAgICAgIGYudnRmLnNlbGVjdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG9uTW91c2VNb3ZlOiBmdW5jdGlvbihldnQpe1xuICAgICAgaWYoZXZ0ICYmIGV2dC5mZWF0dXJlcyl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibW91c2VkIG92ZXIgXCIgKyBldnQuZmVhdHVyZXMubGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3BlY2lmeSB3aGljaCBmZWF0dXJlcyBzaG91bGQgaGF2ZSBhIGNlcnRhaW4geiBpbmRleCAoaW50ZWdlcikuICBMb3dlciBudW1iZXJzIHdpbGwgZHJhdyBvbiAndGhlIGJvdHRvbScuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZmVhdHVyZSAtIHRoZSBQQkZGZWF0dXJlIHRoYXQgY29udGFpbnMgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGxheWVyT3JkZXJpbmc6IGZ1bmN0aW9uKGZlYXR1cmUpe1xuICAgICAgICAvL1RoaXMgb25seSBuZWVkcyB0byBiZSBkb25lIGZvciBlYWNoIHR5cGUsIG5vdCBuZWNlc3NhcmlseSBmb3IgZWFjaCBmZWF0dXJlLiBCdXQgd2UnbGwgc3RhcnQgaGVyZS5cbiAgICAgICAgaWYoZmVhdHVyZSAmJiBmZWF0dXJlLnByb3BlcnRpZXMpe1xuICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzLnpJbmRleCA9IDU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3R5bGU6IGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICAgICAgdmFyIHN0eWxlID0ge307XG4gICAgICAgIHZhciBzZWxlY3RlZCA9IHN0eWxlLnNlbGVjdGVkID0ge307XG4gICAgICAgIHZhciBwb2ludFJhZGl1cyA9IDE7XG5cbiAgICAgICAgZnVuY3Rpb24gU2NhbGVEZXBlbmRlbnRQb2ludFJhZGl1cyh6b29tKXtcbiAgICAgICAgICAgIC8vU2V0IHBvaW50IHJhZGl1cyBiYXNlZCBvbiB6b29tXG4gICAgICAgICAgICB2YXIgcG9pbnRSYWRpdXMgPSAxO1xuICAgICAgICAgICAgaWYoem9vbSA+PSAwICYmIHpvb20gPD0gNyl7XG4gICAgICAgICAgICAgICAgcG9pbnRSYWRpdXMgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZih6b29tID4gNyAmJiB6b29tIDw9IDEwKXtcbiAgICAgICAgICAgICAgICBwb2ludFJhZGl1cyA9IDM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHpvb20gPiAxMCl7XG4gICAgICAgICAgICAgICAgcG9pbnRSYWRpdXMgPSA0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcG9pbnRSYWRpdXM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdHlwZSA9IGZlYXR1cmUudHlwZTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDE6IC8vJ1BvaW50J1xuICAgICAgICAgICAgICAgIC8vIHVuc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2IoMTU3LCAzMywgNDEpJztcbiAgICAgICAgICAgICAgICBzdHlsZS5yYWRpdXMgPSBTY2FsZURlcGVuZGVudFBvaW50UmFkaXVzO1xuICAgICAgICAgICAgICAgIC8vIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQuY29sb3IgPSAncmdiKDE1NywgMzMsIDQxKSc7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQucmFkaXVzID0gNztcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkLmxpbmVXaWR0aCA9IDI7XG4gICAgICAgICAgICAgICAgLy9zZWxlY3RlZC5vdXRsaW5lID0ge1xuICAgICAgICAgICAgICAgIC8vICBzdHJva2VTdHlsZTogJ3JnYigyMCwyMCwyMCknLFxuICAgICAgICAgICAgICAgIC8vICBsaW5lV2lkdGg6IDJcbiAgICAgICAgICAgICAgICAvL307XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6IC8vJ0xpbmVTdHJpbmcnXG4gICAgICAgICAgICAgICAgLy8gdW5zZWxlY3RlZFxuICAgICAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMTYxLDIxNywxNTUsMC44KSc7XG4gICAgICAgICAgICAgICAgc3R5bGUuc2l6ZSA9IDM7XG4gICAgICAgICAgICAgICAgLy8gc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5jb2xvciA9ICdyZ2JhKDI1NSwyNSwwLDAuNSknO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkLnNpemUgPSAzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOiAvLydQb2x5Z29uJ1xuICAgICAgICAgICAgICAgIC8vIHVuc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDE0OSwxMzksMjU1LDAuNCknO1xuICAgICAgICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiKDIwLDIwLDIwKScsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IDJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQuY29sb3IgPSAncmdiYSgyNTUsMjUsMCwwLjMpJztcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5vdXRsaW5lID0ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNkOTUzNGYnLFxuICAgICAgICAgICAgICAgICAgICBzaXplOiAzXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9XG5cbn07XG5cbmxheWVyLmFncmljdWx0dXJlX3VnYW5kYSA9IHtcbiAgICB0eXBlOiAncGJmJyxcbiAgICBuYW1lOiAnRlNQIFVnYW5kYSBBZ3JpY3VsdHVyZSAyMDE1JyxcbiAgICB1cmw6IFwiaHR0cDovL3NwYXRpYWxzZXJ2ZXIuc3BhdGlhbGRldi5jb20vc2VydmljZXMvdmVjdG9yLXRpbGVzL2FncmljdWx0dXJlXzIwMTVfdWdhbmRhL3t6fS97eH0ve3l9LnBiZj9maWVsZHM9dHlwZSxzdWJtaXNzaW9uX2lkXCIsXG4gICAgZGVidWc6IGZhbHNlLFxuICAgIGNsaWNrYWJsZUxheWVyczogbnVsbCxcblxuICAgIGdldElERm9yTGF5ZXJGZWF0dXJlOiBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICAgIHJldHVybiBmZWF0dXJlLnByb3BlcnRpZXNbJ3N1Ym1pc3Npb25faWQnXTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGZpbHRlciBmdW5jdGlvbiBnZXRzIGNhbGxlZCB3aGVuIGl0ZXJhdGluZyB0aG91Z2ggZWFjaCB2ZWN0b3IgdGlsZSBmZWF0dXJlICh2dGYpLiBZb3UgaGF2ZSBhY2Nlc3NcbiAgICAgKiB0byBldmVyeSBwcm9wZXJ0eSBhc3NvY2lhdGVkIHdpdGggYSBnaXZlbiBmZWF0dXJlICh0aGUgZmVhdHVyZSwgYW5kIHRoZSBsYXllcikuIFlvdSBjYW4gYWxzbyBmaWx0ZXJcbiAgICAgKiBiYXNlZCBvZiB0aGUgY29udGV4dCAoZWFjaCB0aWxlIHRoYXQgdGhlIGZlYXR1cmUgaXMgZHJhd24gb250bykuXG4gICAgICpcbiAgICAgKiBSZXR1cm5pbmcgZmFsc2Ugc2tpcHMgb3ZlciB0aGUgZmVhdHVyZSBhbmQgaXQgaXMgbm90IGRyYXduLlxuICAgICAqXG4gICAgICogQHBhcmFtIGZlYXR1cmVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBmaWx0ZXI6IGZ1bmN0aW9uKGZlYXR1cmUsIGNvbnRleHQpIHtcbiAgICAgICAgLy9yZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLmNvdW50cnkgPT0gJ0tlbnlhJztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gd2Ugd2FudCB0byBsaW5rIGV2ZW50cyBiZXR3ZWVuIGxheWVycywgbGlrZSBjbGlja2luZyBvbiBhIGxhYmVsIGFuZCBhXG4gICAgICogY29ycmVzcG9uZGluZyBwb2x5Z29uIGZyZWF0dXJlLCB0aGlzIHdpbGwgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIG1hcHBpbmdcbiAgICAgKiBiZXR3ZWVuIGxheWVycy4gVGhpcyBwcm92aWRlcyBrbm93bGVkZ2Ugb2Ygd2hpY2ggb3RoZXIgZmVhdHVyZSBhIGdpdmVuIGZlYXR1cmVcbiAgICAgKiBpcyBsaW5rZWQgdG8uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGF5ZXJOYW1lICB0aGUgbGF5ZXIgd2Ugd2FudCB0byBrbm93IHRoZSBsaW5rZWQgbGF5ZXIgZnJvbVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgY29ycmVzcG9uZGluZyBsaW5rZWQgbGF5ZXJcbiAgICAgKi9cbiAgICBsYXllckxpbms6IGZ1bmN0aW9uKGxheWVyTmFtZSkge1xuICAgICAgICBpZiAobGF5ZXJOYW1lLmluZGV4T2YoJ19sYWJlbCcpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBsYXllck5hbWUucmVwbGFjZSgnX2xhYmVsJywgJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsYXllck5hbWUgKyAnX2xhYmVsJztcbiAgICB9LFxuXG4gICAgb25DbGljazogZnVuY3Rpb24oZXZ0KXtcbiAgICAgICAgaWYoZXZ0ICYmIGV2dC5mZWF0dXJlcyl7XG4gICAgICAgICAgICBldnQuZmVhdHVyZXMuZm9yRWFjaChmdW5jdGlvbihmKXtcbiAgICAgICAgICAgICAgICBmLnZ0Zi5zZWxlY3QoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBvbk1vdXNlTW92ZTogZnVuY3Rpb24oZXZ0KXtcbiAgICAgICAgaWYoZXZ0ICYmIGV2dC5mZWF0dXJlcyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1vdXNlZCBvdmVyIFwiICsgZXZ0LmZlYXR1cmVzLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3BlY2lmeSB3aGljaCBmZWF0dXJlcyBzaG91bGQgaGF2ZSBhIGNlcnRhaW4geiBpbmRleCAoaW50ZWdlcikuICBMb3dlciBudW1iZXJzIHdpbGwgZHJhdyBvbiAndGhlIGJvdHRvbScuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZmVhdHVyZSAtIHRoZSBQQkZGZWF0dXJlIHRoYXQgY29udGFpbnMgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGxheWVyT3JkZXJpbmc6IGZ1bmN0aW9uKGZlYXR1cmUpe1xuICAgICAgICAvL1RoaXMgb25seSBuZWVkcyB0byBiZSBkb25lIGZvciBlYWNoIHR5cGUsIG5vdCBuZWNlc3NhcmlseSBmb3IgZWFjaCBmZWF0dXJlLiBCdXQgd2UnbGwgc3RhcnQgaGVyZS5cbiAgICAgICAgaWYoZmVhdHVyZSAmJiBmZWF0dXJlLnByb3BlcnRpZXMpe1xuICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzLnpJbmRleCA9IDU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3R5bGU6IGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICAgICAgdmFyIHN0eWxlID0ge307XG4gICAgICAgIHZhciBzZWxlY3RlZCA9IHN0eWxlLnNlbGVjdGVkID0ge307XG4gICAgICAgIHZhciBwb2ludFJhZGl1cyA9IDE7XG5cbiAgICAgICAgZnVuY3Rpb24gU2NhbGVEZXBlbmRlbnRQb2ludFJhZGl1cyh6b29tKXtcbiAgICAgICAgICAgIC8vU2V0IHBvaW50IHJhZGl1cyBiYXNlZCBvbiB6b29tXG4gICAgICAgICAgICB2YXIgcG9pbnRSYWRpdXMgPSAxO1xuICAgICAgICAgICAgaWYoem9vbSA+PSAwICYmIHpvb20gPD0gNyl7XG4gICAgICAgICAgICAgICAgcG9pbnRSYWRpdXMgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZih6b29tID4gNyAmJiB6b29tIDw9IDEwKXtcbiAgICAgICAgICAgICAgICBwb2ludFJhZGl1cyA9IDM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHpvb20gPiAxMCl7XG4gICAgICAgICAgICAgICAgcG9pbnRSYWRpdXMgPSA0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcG9pbnRSYWRpdXM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdHlwZSA9IGZlYXR1cmUudHlwZTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDE6IC8vJ1BvaW50J1xuICAgICAgICAgICAgICAgIC8vIHVuc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2IoMjA5LCAxMTAsIDM1KSc7XG4gICAgICAgICAgICAgICAgc3R5bGUucmFkaXVzID0gU2NhbGVEZXBlbmRlbnRQb2ludFJhZGl1cztcbiAgICAgICAgICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkLmNvbG9yID0gJ3JnYigyMDksIDExMCwgMzUpJztcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5yYWRpdXMgPSA3O1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkLnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC41KSc7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQubGluZVdpZHRoID0gMjtcbiAgICAgICAgICAgICAgICAvL3NlbGVjdGVkLm91dGxpbmUgPSB7XG4gICAgICAgICAgICAgICAgLy8gIHN0cm9rZVN0eWxlOiAncmdiKDIwLDIwLDIwKScsXG4gICAgICAgICAgICAgICAgLy8gIGxpbmVXaWR0aDogMlxuICAgICAgICAgICAgICAgIC8vfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjogLy8nTGluZVN0cmluZydcbiAgICAgICAgICAgICAgICAvLyB1bnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgxNjEsMjE3LDE1NSwwLjgpJztcbiAgICAgICAgICAgICAgICBzdHlsZS5zaXplID0gMztcbiAgICAgICAgICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkLmNvbG9yID0gJ3JnYmEoMjU1LDI1LDAsMC41KSc7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQuc2l6ZSA9IDM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6IC8vJ1BvbHlnb24nXG4gICAgICAgICAgICAgICAgLy8gdW5zZWxlY3RlZFxuICAgICAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMTQ5LDEzOSwyNTUsMC40KSc7XG4gICAgICAgICAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2IoMjAsMjAsMjApJyxcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogMlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5jb2xvciA9ICdyZ2JhKDI1NSwyNSwwLDAuMyknO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkLm91dGxpbmUgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2Q5NTM0ZicsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IDNcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cblxufTtcblxubGF5ZXIuZWR1Y2F0aW9uX3VnYW5kYSA9IHtcbiAgICB0eXBlOiAncGJmJyxcbiAgICBuYW1lOiAnRlNQIFVnYW5kYSBFZHVjYXRpb24gMjAxNScsXG4gICAgdXJsOiBcImh0dHA6Ly9zcGF0aWFsc2VydmVyLnNwYXRpYWxkZXYuY29tL3NlcnZpY2VzL3ZlY3Rvci10aWxlcy9lZHVjYXRpb25fMjAxNV91Z2FuZGEve3p9L3t4fS97eX0ucGJmP2ZpZWxkcz10eXBlLHN1Ym1pc3Npb25faWRcIixcbiAgICBkZWJ1ZzogZmFsc2UsXG4gICAgY2xpY2thYmxlTGF5ZXJzOiBudWxsLFxuXG4gICAgZ2V0SURGb3JMYXllckZlYXR1cmU6IGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIGZlYXR1cmUucHJvcGVydGllc1snc3VibWlzc2lvbl9pZCddO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmlsdGVyIGZ1bmN0aW9uIGdldHMgY2FsbGVkIHdoZW4gaXRlcmF0aW5nIHRob3VnaCBlYWNoIHZlY3RvciB0aWxlIGZlYXR1cmUgKHZ0ZikuIFlvdSBoYXZlIGFjY2Vzc1xuICAgICAqIHRvIGV2ZXJ5IHByb3BlcnR5IGFzc29jaWF0ZWQgd2l0aCBhIGdpdmVuIGZlYXR1cmUgKHRoZSBmZWF0dXJlLCBhbmQgdGhlIGxheWVyKS4gWW91IGNhbiBhbHNvIGZpbHRlclxuICAgICAqIGJhc2VkIG9mIHRoZSBjb250ZXh0IChlYWNoIHRpbGUgdGhhdCB0aGUgZmVhdHVyZSBpcyBkcmF3biBvbnRvKS5cbiAgICAgKlxuICAgICAqIFJldHVybmluZyBmYWxzZSBza2lwcyBvdmVyIHRoZSBmZWF0dXJlIGFuZCBpdCBpcyBub3QgZHJhd24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZmVhdHVyZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGZpbHRlcjogZnVuY3Rpb24oZmVhdHVyZSwgY29udGV4dCkge1xuICAgICAgICAvL3JldHVybiBmZWF0dXJlLnByb3BlcnRpZXMuY291bnRyeSA9PSAnS2VueWEnO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB3ZSB3YW50IHRvIGxpbmsgZXZlbnRzIGJldHdlZW4gbGF5ZXJzLCBsaWtlIGNsaWNraW5nIG9uIGEgbGFiZWwgYW5kIGFcbiAgICAgKiBjb3JyZXNwb25kaW5nIHBvbHlnb24gZnJlYXR1cmUsIHRoaXMgd2lsbCByZXR1cm4gdGhlIGNvcnJlc3BvbmRpbmcgbWFwcGluZ1xuICAgICAqIGJldHdlZW4gbGF5ZXJzLiBUaGlzIHByb3ZpZGVzIGtub3dsZWRnZSBvZiB3aGljaCBvdGhlciBmZWF0dXJlIGEgZ2l2ZW4gZmVhdHVyZVxuICAgICAqIGlzIGxpbmtlZCB0by5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsYXllck5hbWUgIHRoZSBsYXllciB3ZSB3YW50IHRvIGtub3cgdGhlIGxpbmtlZCBsYXllciBmcm9tXG4gICAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBjb3JyZXNwb25kaW5nIGxpbmtlZCBsYXllclxuICAgICAqL1xuICAgIGxheWVyTGluazogZnVuY3Rpb24obGF5ZXJOYW1lKSB7XG4gICAgICAgIGlmIChsYXllck5hbWUuaW5kZXhPZignX2xhYmVsJykgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGxheWVyTmFtZS5yZXBsYWNlKCdfbGFiZWwnLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxheWVyTmFtZSArICdfbGFiZWwnO1xuICAgIH0sXG5cbiAgICBvbkNsaWNrOiBmdW5jdGlvbihldnQpe1xuICAgICAgICBpZihldnQgJiYgZXZ0LmZlYXR1cmVzKXtcbiAgICAgICAgICAgIGV2dC5mZWF0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uKGYpe1xuICAgICAgICAgICAgICAgIGYudnRmLnNlbGVjdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG9uTW91c2VNb3ZlOiBmdW5jdGlvbihldnQpe1xuICAgICAgICBpZihldnQgJiYgZXZ0LmZlYXR1cmVzKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibW91c2VkIG92ZXIgXCIgKyBldnQuZmVhdHVyZXMubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZ5IHdoaWNoIGZlYXR1cmVzIHNob3VsZCBoYXZlIGEgY2VydGFpbiB6IGluZGV4IChpbnRlZ2VyKS4gIExvd2VyIG51bWJlcnMgd2lsbCBkcmF3IG9uICd0aGUgYm90dG9tJy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmZWF0dXJlIC0gdGhlIFBCRkZlYXR1cmUgdGhhdCBjb250YWlucyBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgbGF5ZXJPcmRlcmluZzogZnVuY3Rpb24oZmVhdHVyZSl7XG4gICAgICAgIC8vVGhpcyBvbmx5IG5lZWRzIHRvIGJlIGRvbmUgZm9yIGVhY2ggdHlwZSwgbm90IG5lY2Vzc2FyaWx5IGZvciBlYWNoIGZlYXR1cmUuIEJ1dCB3ZSdsbCBzdGFydCBoZXJlLlxuICAgICAgICBpZihmZWF0dXJlICYmIGZlYXR1cmUucHJvcGVydGllcyl7XG4gICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXMuekluZGV4ID0gNTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzdHlsZTogZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgICB2YXIgc3R5bGUgPSB7fTtcbiAgICAgICAgdmFyIHNlbGVjdGVkID0gc3R5bGUuc2VsZWN0ZWQgPSB7fTtcbiAgICAgICAgdmFyIHBvaW50UmFkaXVzID0gMTtcblxuICAgICAgICBmdW5jdGlvbiBTY2FsZURlcGVuZGVudFBvaW50UmFkaXVzKHpvb20pe1xuICAgICAgICAgICAgLy9TZXQgcG9pbnQgcmFkaXVzIGJhc2VkIG9uIHpvb21cbiAgICAgICAgICAgIHZhciBwb2ludFJhZGl1cyA9IDE7XG4gICAgICAgICAgICBpZih6b29tID49IDAgJiYgem9vbSA8PSA3KXtcbiAgICAgICAgICAgICAgICBwb2ludFJhZGl1cyA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHpvb20gPiA3ICYmIHpvb20gPD0gMTApe1xuICAgICAgICAgICAgICAgIHBvaW50UmFkaXVzID0gMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoem9vbSA+IDEwKXtcbiAgICAgICAgICAgICAgICBwb2ludFJhZGl1cyA9IDQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwb2ludFJhZGl1cztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0eXBlID0gZmVhdHVyZS50eXBlO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTogLy8nUG9pbnQnXG4gICAgICAgICAgICAgICAgLy8gdW5zZWxlY3RlZFxuICAgICAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYig0MiwgMTMzLCAxNzMpJztcbiAgICAgICAgICAgICAgICBzdHlsZS5yYWRpdXMgPSBTY2FsZURlcGVuZGVudFBvaW50UmFkaXVzO1xuICAgICAgICAgICAgICAgIC8vIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQuY29sb3IgPSAncmdiKDQyLCAxMzMsIDE3MyknO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkLnJhZGl1cyA9IDc7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQuc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJztcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5saW5lV2lkdGggPSAyO1xuICAgICAgICAgICAgICAgIC8vc2VsZWN0ZWQub3V0bGluZSA9IHtcbiAgICAgICAgICAgICAgICAvLyAgc3Ryb2tlU3R5bGU6ICdyZ2IoMjAsMjAsMjApJyxcbiAgICAgICAgICAgICAgICAvLyAgbGluZVdpZHRoOiAyXG4gICAgICAgICAgICAgICAgLy99O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOiAvLydMaW5lU3RyaW5nJ1xuICAgICAgICAgICAgICAgIC8vIHVuc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDE2MSwyMTcsMTU1LDAuOCknO1xuICAgICAgICAgICAgICAgIHN0eWxlLnNpemUgPSAzO1xuICAgICAgICAgICAgICAgIC8vIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQuY29sb3IgPSAncmdiYSgyNTUsMjUsMCwwLjUpJztcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5zaXplID0gMztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzogLy8nUG9seWdvbidcbiAgICAgICAgICAgICAgICAvLyB1bnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgxNDksMTM5LDI1NSwwLjQpJztcbiAgICAgICAgICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYigyMCwyMCwyMCknLFxuICAgICAgICAgICAgICAgICAgICBzaXplOiAyXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkLmNvbG9yID0gJ3JnYmEoMjU1LDI1LDAsMC4zKSc7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQub3V0bGluZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZDk1MzRmJyxcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogM1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuXG59O1xuXG5sYXllci5jaWNvc19uaWdlcmlhID0ge1xuICB0eXBlOiAncGJmJyxcbiAgbmFtZTogJ0ZTUCBOaWdlcmlhJyxcbiAgdXJsOiBcImh0dHA6Ly9zcGF0aWFsc2VydmVyLnNwYXRpYWxkZXYuY29tL3NlcnZpY2VzL3ZlY3Rvci10aWxlcy9jaWNvc18yMDEzX25pZ2VyaWEve3p9L3t4fS97eX0ucGJmP2ZpZWxkcz10eXBlLGlkLHByb3ZpZGVyc1wiLFxuICBkZWJ1ZzogZmFsc2UsXG4gIGNsaWNrYWJsZUxheWVyczogW10sXG5cbiAgZ2V0SURGb3JMYXllckZlYXR1cmU6IGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICByZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLmlkO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgZmlsdGVyIGZ1bmN0aW9uIGdldHMgY2FsbGVkIHdoZW4gaXRlcmF0aW5nIHRob3VnaCBlYWNoIHZlY3RvciB0aWxlIGZlYXR1cmUgKHZ0ZikuIFlvdSBoYXZlIGFjY2Vzc1xuICAgKiB0byBldmVyeSBwcm9wZXJ0eSBhc3NvY2lhdGVkIHdpdGggYSBnaXZlbiBmZWF0dXJlICh0aGUgZmVhdHVyZSwgYW5kIHRoZSBsYXllcikuIFlvdSBjYW4gYWxzbyBmaWx0ZXJcbiAgICogYmFzZWQgb2YgdGhlIGNvbnRleHQgKGVhY2ggdGlsZSB0aGF0IHRoZSBmZWF0dXJlIGlzIGRyYXduIG9udG8pLlxuICAgKlxuICAgKiBSZXR1cm5pbmcgZmFsc2Ugc2tpcHMgb3ZlciB0aGUgZmVhdHVyZSBhbmQgaXQgaXMgbm90IGRyYXduLlxuICAgKlxuICAgKiBAcGFyYW0gZmVhdHVyZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZpbHRlcjogZnVuY3Rpb24oZmVhdHVyZSwgY29udGV4dCkge1xuICAgIC8vcmV0dXJuIGZlYXR1cmUucHJvcGVydGllcy5jb3VudHJ5ID09ICdLZW55YSc7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFdoZW4gd2Ugd2FudCB0byBsaW5rIGV2ZW50cyBiZXR3ZWVuIGxheWVycywgbGlrZSBjbGlja2luZyBvbiBhIGxhYmVsIGFuZCBhXG4gICAqIGNvcnJlc3BvbmRpbmcgcG9seWdvbiBmcmVhdHVyZSwgdGhpcyB3aWxsIHJldHVybiB0aGUgY29ycmVzcG9uZGluZyBtYXBwaW5nXG4gICAqIGJldHdlZW4gbGF5ZXJzLiBUaGlzIHByb3ZpZGVzIGtub3dsZWRnZSBvZiB3aGljaCBvdGhlciBmZWF0dXJlIGEgZ2l2ZW4gZmVhdHVyZVxuICAgKiBpcyBsaW5rZWQgdG8uXG4gICAqXG4gICAqIEBwYXJhbSBsYXllck5hbWUgIHRoZSBsYXllciB3ZSB3YW50IHRvIGtub3cgdGhlIGxpbmtlZCBsYXllciBmcm9tXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgY29ycmVzcG9uZGluZyBsaW5rZWQgbGF5ZXJcbiAgICovXG4gIGxheWVyTGluazogZnVuY3Rpb24obGF5ZXJOYW1lKSB7XG4gICAgaWYgKGxheWVyTmFtZS5pbmRleE9mKCdfbGFiZWwnKSA+IC0xKSB7XG4gICAgICByZXR1cm4gbGF5ZXJOYW1lLnJlcGxhY2UoJ19sYWJlbCcsICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIGxheWVyTmFtZSArICdfbGFiZWwnO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IHdoaWNoIGZlYXR1cmVzIHNob3VsZCBoYXZlIGEgY2VydGFpbiB6IGluZGV4IChpbnRlZ2VyKS4gIExvd2VyIG51bWJlcnMgd2lsbCBkcmF3IG9uICd0aGUgYm90dG9tJy5cbiAgICpcbiAgICogQHBhcmFtIGZlYXR1cmUgLSB0aGUgUEJGRmVhdHVyZSB0aGF0IGNvbnRhaW5zIHByb3BlcnRpZXNcbiAgICovXG4gIGxheWVyT3JkZXJpbmc6IGZ1bmN0aW9uKGZlYXR1cmUpe1xuICAgIC8vVGhpcyBvbmx5IG5lZWRzIHRvIGJlIGRvbmUgZm9yIGVhY2ggdHlwZSwgbm90IG5lY2Vzc2FyaWx5IGZvciBlYWNoIGZlYXR1cmUuIEJ1dCB3ZSdsbCBzdGFydCBoZXJlLlxuICAgIGlmKGZlYXR1cmUgJiYgZmVhdHVyZS5wcm9wZXJ0aWVzKXtcbiAgICAgIGZlYXR1cmUucHJvcGVydGllcy56SW5kZXggPSBDSUNPX0NvbmZpZ1tmZWF0dXJlLnByb3BlcnRpZXMudHlwZV0uekluZGV4IHx8IDU7XG4gICAgfVxuICB9LFxuXG4gIHN0eWxlOiBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgdmFyIHN0eWxlID0ge307XG4gICAgdmFyIHNlbGVjdGVkID0gc3R5bGUuc2VsZWN0ZWQgPSB7fTtcbiAgICB2YXIgcG9pbnRSYWRpdXMgPSAxO1xuXG4gICAgZnVuY3Rpb24gU2NhbGVEZXBlbmRlbnRQb2ludFJhZGl1cyh6b29tKXtcbiAgICAgIC8vU2V0IHBvaW50IHJhZGl1cyBiYXNlZCBvbiB6b29tXG4gICAgICB2YXIgcG9pbnRSYWRpdXMgPSAxO1xuICAgICAgaWYoem9vbSA+PSAwICYmIHpvb20gPD0gNyl7XG4gICAgICAgIHBvaW50UmFkaXVzID0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoem9vbSA+IDcgJiYgem9vbSA8PSAxMCl7XG4gICAgICAgIHBvaW50UmFkaXVzID0gMztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoem9vbSA+IDEwKXtcbiAgICAgICAgcG9pbnRSYWRpdXMgPSA0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcG9pbnRSYWRpdXM7XG4gICAgfVxuXG4gICAgdmFyIHR5cGUgPSBmZWF0dXJlLnR5cGU7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIDE6IC8vJ1BvaW50J1xuICAgICAgICAgICAgICAvLyB1bnNlbGVjdGVkXG4gICAgICAgIHN0eWxlLmNvbG9yID0gQ0lDT19Db25maWdbZmVhdHVyZS5wcm9wZXJ0aWVzLnR5cGVdLmNvbG9yO1xuICAgICAgICBzdHlsZS5yYWRpdXMgPSBTY2FsZURlcGVuZGVudFBvaW50UmFkaXVzO1xuICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICBzZWxlY3RlZC5jb2xvciA9IENJQ09fQ29uZmlnW2ZlYXR1cmUucHJvcGVydGllcy50eXBlXS5jb2xvcjtcbiAgICAgICAgc2VsZWN0ZWQucmFkaXVzID0gNztcbiAgICAgICAgc2VsZWN0ZWQuc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJztcbiAgICAgICAgc2VsZWN0ZWQubGluZVdpZHRoID0gMjtcbiAgICAgICAgLy9zZWxlY3RlZC5vdXRsaW5lID0ge1xuICAgICAgICAvLyAgc3Ryb2tlU3R5bGU6ICdyZ2IoMjAsMjAsMjApJyxcbiAgICAgICAgLy8gIGxpbmVXaWR0aDogMlxuICAgICAgICAvL307XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOiAvLydMaW5lU3RyaW5nJ1xuICAgICAgICAgICAgICAvLyB1bnNlbGVjdGVkXG4gICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMTYxLDIxNywxNTUsMC44KSc7XG4gICAgICAgIHN0eWxlLnNpemUgPSAzO1xuICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICBzZWxlY3RlZC5jb2xvciA9ICdyZ2JhKDI1NSwyNSwwLDAuNSknO1xuICAgICAgICBzZWxlY3RlZC5zaXplID0gMztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6IC8vJ1BvbHlnb24nXG4gICAgICAgICAgICAgIC8vIHVuc2VsZWN0ZWRcbiAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgxNDksMTM5LDI1NSwwLjQpJztcbiAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICBjb2xvcjogJ3JnYigyMCwyMCwyMCknLFxuICAgICAgICAgIHNpemU6IDJcbiAgICAgICAgfTtcbiAgICAgICAgLy8gc2VsZWN0ZWRcbiAgICAgICAgc2VsZWN0ZWQuY29sb3IgPSAncmdiYSgyNTUsMjUsMCwwLjMpJztcbiAgICAgICAgc2VsZWN0ZWQub3V0bGluZSA9IHtcbiAgICAgICAgICBjb2xvcjogJyNkOTUzNGYnLFxuICAgICAgICAgIHNpemU6IDNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxufTtcblxubGF5ZXIuQ0lDT1MgPSB7XG4gIHVybDogXCJodHRwOi8vc3BhdGlhbHNlcnZlci5zcGF0aWFsZGV2LmNvbS9zZXJ2aWNlcy9wb3N0Z2lzL2NpY29zXzIwMTQvZ2VvbS92ZWN0b3ItdGlsZXMve3p9L3t4fS97eX0ucGJmP2ZpZWxkcz10eXBlLGlkXCIsXG4gIHR5cGU6ICdwYmYnLFxuICBkZWJ1ZzogZmFsc2UsXG4gIG5hbWU6ICdJbmRpYSBDSUNPUycsXG4gIGNsaWNrYWJsZUxheWVyczogbnVsbCxcblxuICAvLyB3ZSB3YW50IGNvbmZldHRpIHRvIGJlIG9uIHRvcCBvZiBvdGhlciBsYXllcnMsIHN1Y2ggYXMgdGhlIGNvbnRleHR1YWwgbGF5ZXJzXG4gIHpJbmRleDogMTAwMCxcblxuICBnZXRJREZvckxheWVyRmVhdHVyZTogZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICByZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLmlkO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgZmlsdGVyIGZ1bmN0aW9uIGdldHMgY2FsbGVkIHdoZW4gaXRlcmF0aW5nIHRob3VnaCBlYWNoIHZlY3RvciB0aWxlIGZlYXR1cmUgKHZ0ZikuIFlvdSBoYXZlIGFjY2Vzc1xuICAgKiB0byBldmVyeSBwcm9wZXJ0eSBhc3NvY2lhdGVkIHdpdGggYSBnaXZlbiBmZWF0dXJlICh0aGUgZmVhdHVyZSwgYW5kIHRoZSBsYXllcikuIFlvdSBjYW4gYWxzbyBmaWx0ZXJcbiAgICogYmFzZWQgb2YgdGhlIGNvbnRleHQgKGVhY2ggdGlsZSB0aGF0IHRoZSBmZWF0dXJlIGlzIGRyYXduIG9udG8pLlxuICAgKlxuICAgKiBSZXR1cm5pbmcgZmFsc2Ugc2tpcHMgb3ZlciB0aGUgZmVhdHVyZSBhbmQgaXQgaXMgbm90IGRyYXduLlxuICAgKlxuICAgKiBAcGFyYW0gZmVhdHVyZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZpbHRlcjogZnVuY3Rpb24gKGZlYXR1cmUsIGNvbnRleHQpIHtcbiAgICAvL3JldHVybiBmZWF0dXJlLnByb3BlcnRpZXMudHlwZSAhPSAnTW9iaWxlIE1vbmV5IEFnZW50JztcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICAvKipcbiAgICogV2hlbiB3ZSB3YW50IHRvIGxpbmsgZXZlbnRzIGJldHdlZW4gbGF5ZXJzLCBsaWtlIGNsaWNraW5nIG9uIGEgbGFiZWwgYW5kIGFcbiAgICogY29ycmVzcG9uZGluZyBwb2x5Z29uIGZyZWF0dXJlLCB0aGlzIHdpbGwgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIG1hcHBpbmdcbiAgICogYmV0d2VlbiBsYXllcnMuIFRoaXMgcHJvdmlkZXMga25vd2xlZGdlIG9mIHdoaWNoIG90aGVyIGZlYXR1cmUgYSBnaXZlbiBmZWF0dXJlXG4gICAqIGlzIGxpbmtlZCB0by5cbiAgICpcbiAgICogQHBhcmFtIGxheWVyTmFtZSB0aGUgbGF5ZXIgd2Ugd2FudCB0byBrbm93IHRoZSBsaW5rZWQgbGF5ZXIgZnJvbVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGNvcnJlc3BvbmRpbmcgbGlua2VkIGxheWVyXG4gICAqL1xuICBsYXllckxpbms6IGZ1bmN0aW9uIChsYXllck5hbWUpIHtcbiAgICBpZiAobGF5ZXJOYW1lLmluZGV4T2YoJ19sYWJlbCcpID4gLTEpIHtcbiAgICAgIHJldHVybiBsYXllck5hbWUucmVwbGFjZSgnX2xhYmVsJywgJycpO1xuICAgIH1cbiAgICByZXR1cm4gbGF5ZXJOYW1lICsgJ19sYWJlbCc7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZnkgd2hpY2ggZmVhdHVyZXMgc2hvdWxkIGhhdmUgYSBjZXJ0YWluIHogaW5kZXggKGludGVnZXIpLiAgTG93ZXIgbnVtYmVycyB3aWxsIGRyYXcgb24gJ3RoZSBib3R0b20nLlxuICAgKlxuICAgKiBAcGFyYW0gZmVhdHVyZSAtIHRoZSBQQkZGZWF0dXJlIHRoYXQgY29udGFpbnMgcHJvcGVydGllc1xuICAgKi9cbiAgbGF5ZXJPcmRlcmluZzogZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAvL1RoaXMgb25seSBuZWVkcyB0byBiZSBkb25lIGZvciBlYWNoIHR5cGUsIG5vdCBuZWNlc3NhcmlseSBmb3IgZWFjaCBmZWF0dXJlLiBCdXQgd2UnbGwgc3RhcnQgaGVyZS5cbiAgICBpZiAoZmVhdHVyZSAmJiBmZWF0dXJlLnByb3BlcnRpZXMpIHtcbiAgICAgIGZlYXR1cmUucHJvcGVydGllcy56SW5kZXggPSBDSUNPX0NvbmZpZ1tmZWF0dXJlLnByb3BlcnRpZXMudHlwZV0uekluZGV4IHx8IDU7XG4gICAgfVxuICB9LFxuXG4gIHN0eWxlOiBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgdmFyIHN0eWxlID0ge307XG4gICAgdmFyIHNlbGVjdGVkID0gc3R5bGUuc2VsZWN0ZWQgPSB7fTtcbiAgICB2YXIgcG9pbnRSYWRpdXMgPSAxO1xuXG4gICAgZnVuY3Rpb24gU2NhbGVEZXBlbmRlbnRQb2ludFJhZGl1cyh6b29tKXtcbiAgICAgIC8vU2V0IHBvaW50IHJhZGl1cyBiYXNlZCBvbiB6b29tXG4gICAgICB2YXIgcG9pbnRSYWRpdXMgPSAxO1xuICAgICAgaWYoem9vbSA+PSAwICYmIHpvb20gPD0gNyl7XG4gICAgICAgIHBvaW50UmFkaXVzID0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoem9vbSA+IDcgJiYgem9vbSA8PSAxMCl7XG4gICAgICAgIHBvaW50UmFkaXVzID0gMztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoem9vbSA+IDEwKXtcbiAgICAgICAgcG9pbnRSYWRpdXMgPSA0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcG9pbnRSYWRpdXM7XG4gICAgfVxuXG4gICAgdmFyIHR5cGUgPSBmZWF0dXJlLnR5cGU7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIDE6IC8vJ1BvaW50J1xuICAgICAgICAvLyB1bnNlbGVjdGVkXG4gICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYigxNTcsIDMzLCA0MSknO1xuICAgICAgICBzdHlsZS5yYWRpdXMgPSBTY2FsZURlcGVuZGVudFBvaW50UmFkaXVzO1xuICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2IoMTU3LCAzMywgNDEpJztcbiAgICAgICAgc2VsZWN0ZWQucmFkaXVzID0gNztcbiAgICAgICAgc2VsZWN0ZWQuc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJztcbiAgICAgICAgc2VsZWN0ZWQubGluZVdpZHRoID0gMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6IC8vJ0xpbmVTdHJpbmcnXG4gICAgICAgIC8vIHVuc2VsZWN0ZWRcbiAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgxNjEsMjE3LDE1NSwwLjgpJztcbiAgICAgICAgc3R5bGUuc2l6ZSA9IDM7XG4gICAgICAgIC8vIHNlbGVjdGVkXG4gICAgICAgIHNlbGVjdGVkLmNvbG9yID0gJ3JnYmEoMjU1LDI1LDAsMC41KSc7XG4gICAgICAgIHNlbGVjdGVkLnNpemUgPSAzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzogLy8nUG9seWdvbidcbiAgICAgICAgLy8gdW5zZWxlY3RlZFxuICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDE0OSwxMzksMjU1LDAuNCknO1xuICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgIGNvbG9yOiAncmdiKDIwLDIwLDIwKScsXG4gICAgICAgICAgc2l6ZTogMlxuICAgICAgICB9O1xuICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICBzZWxlY3RlZC5jb2xvciA9ICdyZ2JhKDI1NSwyNSwwLDAuMyknO1xuICAgICAgICBzZWxlY3RlZC5vdXRsaW5lID0ge1xuICAgICAgICAgIGNvbG9yOiAnI2Q5NTM0ZicsXG4gICAgICAgICAgc2l6ZTogM1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZTtcbiAgfSxcblxuICBvbkNsaWNrOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgLy9JZiBuZWFyYnkgdG9vbCAob3IgYW55IHRvb2wpIGlzIGFjdGl2ZSwgdGhlbiBhYm9ydC5cbiAgICAvL2lmKF9GU1AuVG9vbE1hc3Rlci5hY3RpdmVUb29sLmFjdGl2ZSA9PSB0cnVlKSByZXR1cm47XG5cbiAgICAvLyAgdmFyIGJ1ZmZlciA9IF9GU1AuQ29uZmV0dGlMb2FkZXIuY2xpY2tUb0J1ZmZlcihldnQpO1xuICAgIC8vXG4gICAgLy8gIC8vSWYgYWxsIGFyZSB1bmNoZWNrZWQsIHRoZW4gZXhpdCBvdXQgb2YgaGVyZVxuICAgIC8vICBpZihPYmplY3Qua2V5cyhfRlNQLkxheWVyTGlzdEJ1aWxkZXIuR2V0RmlsdGVyT2JqZWN0KCkpLmxlbmd0aCA9PSAwKSByZXR1cm47XG4gICAgLy9cbiAgICAvLyAgX0ZTUC5UYWJsZUJ1aWxkZXIuc2NyYXBlQ0lDT1NlbGVjdGlvbnMoKTtcbiAgICAvL1xuICAgIC8vICAvL1dlIGhhdmUgdGhlIGJ1ZmZlciBhcyBnZW9qc29uLiAgU2VuZCBpdCB0byB0aGUgcG9pbnQgdGFibGUgdG8gaW50ZXJzZWN0XG4gICAgLy8gIHZhciB0YWJsZVBvc3RBcmdzID0ge1xuICAgIC8vICAgIHJldHVybmZpZWxkczogJ2xhdCxsbmcsbmFtZSxhc3NvY19iYW5rLGFzc29jX2J1c2luZXNzLGZvcm1fc3VibWl0dGVkLHR5cGUsaWQscGhvdG9zJyxcbiAgICAvLyAgICBmb3JtYXQ6ICdnZW9qc29uJyxcbiAgICAvLyAgICB3aGVyZTogX0ZTUC5Qcm94aW1pdHlUb29sLmJ1aWxkQ0lDT1F1ZXJ5RXhwcmVzc2lvbihfRlNQLlRhYmxlQnVpbGRlci5DSUNPU2VsZWN0aW9ucyksXG4gICAgLy8gICAgcmV0dXJuR2VvbWV0cnk6ICd5ZXMnLFxuICAgIC8vICAgIGludGVyc2VjdHM6IGJ1ZmZlcixcbiAgICAvLyAgICBsaW1pdDogMjAwIC8vYWRkIGEgbGltaXQgb2YgMjAwIHNvIHdlIGRvbid0IGdldCBjYXJyaWVkIGF3YXlcbiAgICAvLyAgfTtcbiAgICAvLyAgdmFyIHBvaW50VXJsID0gXCJodHRwOi8vc3BhdGlhbHNlcnZlci5zcGF0aWFsZGV2LmNvbS9zZXJ2aWNlcy90YWJsZXMvY2ljb3NfMjAxNC9xdWVyeVwiO1xuICAgIC8vXG4gICAgLy8gICQucG9zdChwb2ludFVybCwgdGFibGVQb3N0QXJncykuc3VjY2VzcyhmdW5jdGlvbiAocG9pbnRzLCBxc3RhdHVzKSB7XG4gICAgLy8gICAgLy9HZW9KU09OIHJlc3VsdCBvZiBwb2ludHNcbiAgICAvLyAgICBpZiAoIXBvaW50cyB8fCBwb2ludHMuZXJyb3IpIHtcbiAgICAvLyAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBmZWF0dXJlOiAnICsgcG9pbnRzLmVycm9yKTtcbiAgICAvLyAgICAgIHJldHVybjtcbiAgICAvLyAgICB9XG4gICAgLy9cbiAgICAvLyAgICAvL3BvaW50IGlzIGEgZmVhdHVyZWNvbGxlY3Rpb24uIG9wZW4gdGhlIHBhbmVsIGFuZCBzaG93IHNvbWUgc3R1ZmYuXG4gICAgLy8gICAgaWYgKHBvaW50cyAmJiBwb2ludHMuZmVhdHVyZXMgJiYgcG9pbnRzLmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAvLyAgICAgIHZhciBodG1sID0gX0ZTUC5Qb3B1cEJ1aWxkZXIuYWRkUmVzdWx0cyhwb2ludHMuZmVhdHVyZXMsIF9GU1AuQ29uZmlnLkNJQ09fTEFZRVJTLCAnZnNwJywgZnVuY3Rpb24gKGN1cnJlbnRQb2ludCkge1xuICAgIC8vICAgICAgICBpZiAoY3VycmVudFBvaW50KSB7XG4gICAgLy8gICAgICAgICAgLy9IaWdobGlnaHQgcG9pbnQuXG4gICAgLy8gICAgICAgICAgdmFyIGxheWVycyA9IHBiZlNvdXJjZS5nZXRMYXllcnMoKTtcbiAgICAvLyAgICAgICAgICBpZiAobGF5ZXJzKSB7XG4gICAgLy8gICAgICAgICAgICB2YXIgbGF5ZXIgPSBsYXllcnNbT2JqZWN0LmtleXMobGF5ZXJzKVswXV07IC8vQ2ljbyBsYXllclxuICAgIC8vICAgICAgICAgICAgaWYgKGxheWVyKSB7XG4gICAgLy8gICAgICAgICAgICAgIC8vdHJ5IHRvIHBsdWNrIHZ0ZlxuICAgIC8vICAgICAgICAgICAgICBfRlNQLk1hcEJ1aWxkZXIuc2VsZWN0ZWRDb25mZXR0aSA9IGxheWVyLmZlYXR1cmVzW2N1cnJlbnRQb2ludC5wcm9wZXJ0aWVzLmlkXTtcbiAgICAvLyAgICAgICAgICAgICAgaWYgKF9GU1AuTWFwQnVpbGRlci5zZWxlY3RlZENvbmZldHRpKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgLy9TZXQgZmVhdHVyZSB0byBiZSBiaWcgYW5kIGhpZ2ggei1pbmRleFxuICAgIC8vICAgICAgICAgICAgICAgIF9GU1AuTWFwQnVpbGRlci5zZWxlY3RlZENvbmZldHRpLnNlbGVjdCgpO1xuICAgIC8vICAgICAgICAgICAgICAgIGlmIChfRlNQLk1hcEJ1aWxkZXIucHJldmlvdXNseVNlbGVjdGVkQ29uZmV0dGkpIF9GU1AuTWFwQnVpbGRlci5wcmV2aW91c2x5U2VsZWN0ZWRDb25mZXR0aS5kZXNlbGVjdCgpO1xuICAgIC8vICAgICAgICAgICAgICAgIF9GU1AuTWFwQnVpbGRlci5wcmV2aW91c2x5U2VsZWN0ZWRDb25mZXR0aSA9IF9GU1AuTWFwQnVpbGRlci5zZWxlY3RlZENvbmZldHRpO1xuICAgIC8vICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgfVxuICAgIC8vICAgICAgICB9XG4gICAgLy8gICAgICB9KTtcbiAgICAvLyAgICAgIGlmKGh0bWwpe1xuICAgIC8vICAgICAgICBvcGVuQ0lDT0RldGFpbHMoaHRtbCk7XG4gICAgLy8gICAgICB9XG4gICAgLy8gICAgfVxuICAgIC8vICB9KTtcbiAgICAvL1xuICB9XG5cbn07XG5cbmxheWVyLmhlYWx0aCA9ICB7XG4gIHVybDogXCJodHRwOi8vc3BhdGlhbHNlcnZlci5zcGF0aWFsZGV2LmNvbS9zZXJ2aWNlcy9wb3N0Z2lzL2hlYWx0aF8yMDE0L2dlb20vdmVjdG9yLXRpbGVzL3t6fS97eH0ve3l9LnBiZj9maWVsZHM9dHlwZSxpZFwiLFxuICBkZWJ1ZzogZmFsc2UsXG4gIHR5cGU6IFwicGJmXCIsXG4gIG5hbWU6IFwiSGVhbHRoXCIsXG4gIGNsaWNrYWJsZUxheWVyczogbnVsbCxcblxuICAvLyB3ZSB3YW50IGNvbmZldHRpIHRvIGJlIG9uIHRvcCBvZiBvdGhlciBsYXllcnMsIHN1Y2ggYXMgdGhlIGNvbnRleHR1YWwgbGF5ZXJzXG4gIHpJbmRleDogMTAwMCxcblxuICBnZXRJREZvckxheWVyRmVhdHVyZTogZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICByZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLmlkO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgZmlsdGVyIGZ1bmN0aW9uIGdldHMgY2FsbGVkIHdoZW4gaXRlcmF0aW5nIHRob3VnaCBlYWNoIHZlY3RvciB0aWxlIGZlYXR1cmUgKHZ0ZikuIFlvdSBoYXZlIGFjY2Vzc1xuICAgKiB0byBldmVyeSBwcm9wZXJ0eSBhc3NvY2lhdGVkIHdpdGggYSBnaXZlbiBmZWF0dXJlICh0aGUgZmVhdHVyZSwgYW5kIHRoZSBsYXllcikuIFlvdSBjYW4gYWxzbyBmaWx0ZXJcbiAgICogYmFzZWQgb2YgdGhlIGNvbnRleHQgKGVhY2ggdGlsZSB0aGF0IHRoZSBmZWF0dXJlIGlzIGRyYXduIG9udG8pLlxuICAgKlxuICAgKiBSZXR1cm5pbmcgZmFsc2Ugc2tpcHMgb3ZlciB0aGUgZmVhdHVyZSBhbmQgaXQgaXMgbm90IGRyYXduLlxuICAgKlxuICAgKiBAcGFyYW0gZmVhdHVyZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZpbHRlcjogZnVuY3Rpb24gKGZlYXR1cmUsIGNvbnRleHQpIHtcbiAgICAvL2lmKGZlYXR1cmUucHJvcGVydGllcy50eXBlID09ICdTZWVkIE11bHRpcGxpZXJzJyl7XG4gICAgLy8gIHJldHVybiB0cnVlO1xuICAgIC8vfSBlbHNlIHtcbiAgICAvLyAgcmV0dXJuIGZhbHNlO1xuICAgIC8vXG4gICAgLy99XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFdoZW4gd2Ugd2FudCB0byBsaW5rIGV2ZW50cyBiZXR3ZWVuIGxheWVycywgbGlrZSBjbGlja2luZyBvbiBhIGxhYmVsIGFuZCBhXG4gICAqIGNvcnJlc3BvbmRpbmcgcG9seWdvbiBmcmVhdHVyZSwgdGhpcyB3aWxsIHJldHVybiB0aGUgY29ycmVzcG9uZGluZyBtYXBwaW5nXG4gICAqIGJldHdlZW4gbGF5ZXJzLiBUaGlzIHByb3ZpZGVzIGtub3dsZWRnZSBvZiB3aGljaCBvdGhlciBmZWF0dXJlIGEgZ2l2ZW4gZmVhdHVyZVxuICAgKiBpcyBsaW5rZWQgdG8uXG4gICAqXG4gICAqIEBwYXJhbSBsYXllck5hbWUgIHRoZSBsYXllciB3ZSB3YW50IHRvIGtub3cgdGhlIGxpbmtlZCBsYXllciBmcm9tXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgY29ycmVzcG9uZGluZyBsaW5rZWQgbGF5ZXJcbiAgICovXG4gIGxheWVyTGluazogZnVuY3Rpb24gKGxheWVyTmFtZSkge1xuICAgIGlmIChsYXllck5hbWUuaW5kZXhPZignX2xhYmVsJykgPiAtMSkge1xuICAgICAgcmV0dXJuIGxheWVyTmFtZS5yZXBsYWNlKCdfbGFiZWwnLCAnJyk7XG4gICAgfVxuICAgIHJldHVybiBsYXllck5hbWUgKyAnX2xhYmVsJztcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmeSB3aGljaCBmZWF0dXJlcyBzaG91bGQgaGF2ZSBhIGNlcnRhaW4geiBpbmRleCAoaW50ZWdlcikuICBMb3dlciBudW1iZXJzIHdpbGwgZHJhdyBvbiAndGhlIGJvdHRvbScuXG4gICAqXG4gICAqIEBwYXJhbSBmZWF0dXJlIC0gdGhlIFBCRkZlYXR1cmUgdGhhdCBjb250YWlucyBwcm9wZXJ0aWVzXG4gICAqL1xuICBsYXllck9yZGVyaW5nOiBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgIC8vVGhpcyBvbmx5IG5lZWRzIHRvIGJlIGRvbmUgZm9yIGVhY2ggdHlwZSwgbm90IG5lY2Vzc2FyaWx5IGZvciBlYWNoIGZlYXR1cmUuIEJ1dCB3ZSdsbCBzdGFydCBoZXJlLlxuICAgIGlmIChmZWF0dXJlICYmIGZlYXR1cmUucHJvcGVydGllcykge1xuICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzLnpJbmRleCA9IENJQ09fQ29uZmlnW2ZlYXR1cmUucHJvcGVydGllcy50eXBlXS56SW5kZXggfHwgNTtcbiAgICB9XG4gIH0sXG5cbiAgc3R5bGU6IGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICB2YXIgc3R5bGUgPSB7fTtcbiAgICB2YXIgc2VsZWN0ZWQgPSBzdHlsZS5zZWxlY3RlZCA9IHt9O1xuICAgIHZhciBwb2ludFJhZGl1cyA9IDE7XG5cbiAgICBmdW5jdGlvbiBTY2FsZURlcGVuZGVudFBvaW50UmFkaXVzKHpvb20pe1xuICAgICAgLy9TZXQgcG9pbnQgcmFkaXVzIGJhc2VkIG9uIHpvb21cbiAgICAgIHZhciBwb2ludFJhZGl1cyA9IDE7XG4gICAgICBpZih6b29tID49IDAgJiYgem9vbSA8PSA3KXtcbiAgICAgICAgcG9pbnRSYWRpdXMgPSAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZih6b29tID4gNyAmJiB6b29tIDw9IDEwKXtcbiAgICAgICAgcG9pbnRSYWRpdXMgPSAzO1xuICAgICAgfVxuICAgICAgZWxzZSBpZih6b29tID4gMTApe1xuICAgICAgICBwb2ludFJhZGl1cyA9IDQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwb2ludFJhZGl1cztcbiAgICB9XG5cbiAgICB2YXIgdHlwZSA9IGZlYXR1cmUudHlwZTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgMTogLy8nUG9pbnQnXG4gICAgICAgIC8vIHVuc2VsZWN0ZWRcbiAgICAgICAgc3R5bGUuY29sb3IgPSAnIzdGOUQ2QSc7XG4gICAgICAgIHN0eWxlLnJhZGl1cyA9IFNjYWxlRGVwZW5kZW50UG9pbnRSYWRpdXM7XG4gICAgICAgIC8vIHNlbGVjdGVkXG4gICAgICAgIHNlbGVjdGVkLmNvbG9yID0gJyM3RjlENkEnO1xuICAgICAgICBzZWxlY3RlZC5yYWRpdXMgPSA3O1xuICAgICAgICBzZWxlY3RlZC5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknO1xuICAgICAgICBzZWxlY3RlZC5saW5lV2lkdGggPSAyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjogLy8nTGluZVN0cmluZydcbiAgICAgICAgLy8gdW5zZWxlY3RlZFxuICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDE2MSwyMTcsMTU1LDAuOCknO1xuICAgICAgICBzdHlsZS5zaXplID0gMztcbiAgICAgICAgLy8gc2VsZWN0ZWRcbiAgICAgICAgc2VsZWN0ZWQuY29sb3IgPSAncmdiYSgyNTUsMjUsMCwwLjUpJztcbiAgICAgICAgc2VsZWN0ZWQuc2l6ZSA9IDM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOiAvLydQb2x5Z29uJ1xuICAgICAgICAvLyB1bnNlbGVjdGVkXG4gICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMTQ5LDEzOSwyNTUsMC40KSc7XG4gICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgY29sb3I6ICdyZ2IoMjAsMjAsMjApJyxcbiAgICAgICAgICBzaXplOiAyXG4gICAgICAgIH07XG4gICAgICAgIC8vIHNlbGVjdGVkXG4gICAgICAgIHNlbGVjdGVkLmNvbG9yID0gJ3JnYmEoMjU1LDI1LDAsMC4zKSc7XG4gICAgICAgIHNlbGVjdGVkLm91dGxpbmUgPSB7XG4gICAgICAgICAgY29sb3I6ICcjZDk1MzRmJyxcbiAgICAgICAgICBzaXplOiAzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9LFxuXG4gIG9uQ2xpY2s6IGZ1bmN0aW9uKGV2dCkge1xuICAgIC8vSWYgbmVhcmJ5IHRvb2wgKG9yIGFueSB0b29sKSBpcyBhY3RpdmUsIHRoZW4gYWJvcnQuXG4gICAgLy9pZihfRlNQLlRvb2xNYXN0ZXIuYWN0aXZlVG9vbC5hY3RpdmUgPT0gdHJ1ZSkgcmV0dXJuO1xuICAgIC8vXG4gICAgLy92YXIgYnVmZmVyID0gX0ZTUC5Db25mZXR0aUxvYWRlci5jbGlja1RvQnVmZmVyKGV2dCk7XG4gICAgLy9cbiAgICAvL2lmKE9iamVjdC5rZXlzKF9GU1AuSGVhbHRoTGlzdEJ1aWxkZXIuR2V0RmlsdGVyT2JqZWN0KCkpLmxlbmd0aCA9PSAwKSByZXR1cm47XG4gICAgLy9cbiAgICAvLy8vV2UgaGF2ZSB0aGUgYnVmZmVyIGFzIGdlb2pzb24uICBTZW5kIGl0IHRvIHRoZSBwb2ludCB0YWJsZSB0byBpbnRlcnNlY3RcbiAgICAvL3ZhciB0YWJsZVBvc3RBcmdzID0ge1xuICAgIC8vICByZXR1cm5maWVsZHM6ICdsYXQsbG5nLGlkLHR5cGUsbmFtZSxwaG90b3MsZGVsaXZlcnlfY2VudGVyLHNlcGFyYXRlX21hdGVybml0eSxzYmFfcmVzb3VyY2UsZmVtYWxlX3N0ZXJpbGl6YXRpb24saW50cmFfdXRlcmluZSxjb25kb21zLG9yYWxfcGlsbHMscGhhcm1hY2lzdCxjc2VjdGlvbl9lbW9uYyxwaGNfMjRfNyxibG9vZF90cmFuc2Z1c2lvbixpbW11bml6YXRpb24sY29sZF9jaGFpbl9lcXVpcG1lbnQnLFxuICAgIC8vICBmb3JtYXQ6ICdnZW9qc29uJyxcbiAgICAvLyAgd2hlcmU6IF9GU1AuVXRpbGl0aWVzLmJ1aWxkUG9zdEdyZXNRdWVyeUV4cHJlc3Npb24oJ2hlYWx0aCcsIF9GU1AuSGVhbHRoTGlzdEJ1aWxkZXIuSGVhbHRoU2VsZWN0aW9ucyksXG4gICAgLy8gIHJldHVybkdlb21ldHJ5OiAneWVzJyxcbiAgICAvLyAgaW50ZXJzZWN0czogYnVmZmVyLFxuICAgIC8vICBsaW1pdDogMjAwIC8vYWRkIGEgbGltaXQgb2YgMjAwIHNvIHdlIGRvbid0IGdldCBjYXJyaWVkIGF3YXlcbiAgICAvL307XG4gICAgLy92YXIgcG9pbnRVcmwgPSBcImh0dHA6Ly9zcGF0aWFsc2VydmVyLnNwYXRpYWxkZXYuY29tL3NlcnZpY2VzL3RhYmxlcy9oZWFsdGhfMjAxNC9xdWVyeVwiO1xuICAgIC8vXG4gICAgLy8kLnBvc3QocG9pbnRVcmwsIHRhYmxlUG9zdEFyZ3MpLnN1Y2Nlc3MoZnVuY3Rpb24gKHBvaW50cywgcXN0YXR1cykge1xuICAgIC8vICAvL0dlb0pTT04gcmVzdWx0IG9mIHBvaW50c1xuICAgIC8vICBpZiAoIXBvaW50cyB8fCBwb2ludHMuZXJyb3IpIHtcbiAgICAvLyAgICBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZmV0Y2ggZmVhdHVyZTogJyArIHBvaW50cy5lcnJvcik7XG4gICAgLy8gICAgcmV0dXJuO1xuICAgIC8vICB9XG4gICAgLy9cbiAgICAvLyAgLy9wb2ludCBpcyBhIGZlYXR1cmVjb2xsZWN0aW9uLiBvcGVuIHRoZSBwYW5lbCBhbmQgc2hvdyBzb21lIHN0dWZmLlxuICAgIC8vICBpZiAocG9pbnRzICYmIHBvaW50cy5mZWF0dXJlcyAmJiBwb2ludHMuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgIC8vICAgIHZhciBodG1sID0gX0ZTUC5Qb3B1cEJ1aWxkZXIuYWRkUmVzdWx0cyhwb2ludHMuZmVhdHVyZXMsIF9GU1AuQ29uZmlnLkhFQUxUSF9MQVlFUlMsICdoZWFsdGgnLCBmdW5jdGlvbiAoY3VycmVudFBvaW50KSB7XG4gICAgLy8gICAgICBpZiAoY3VycmVudFBvaW50KSB7XG4gICAgLy8gICAgICAgIC8vSGlnaGxpZ2h0IHBvaW50LlxuICAgIC8vICAgICAgICB2YXIgbGF5ZXJzID0gcGJmU291cmNlLmdldExheWVycygpO1xuICAgIC8vICAgICAgICBpZiAobGF5ZXJzKSB7XG4gICAgLy8gICAgICAgICAgdmFyIGxheWVyID0gbGF5ZXJzW09iamVjdC5rZXlzKGxheWVycylbMF1dO1xuICAgIC8vICAgICAgICAgIGlmIChsYXllcikge1xuICAgIC8vICAgICAgICAgICAgLy90cnkgdG8gcGx1Y2sgdnRmXG4gICAgLy8gICAgICAgICAgICBfRlNQLk1hcEJ1aWxkZXIuc2VsZWN0ZWRDb25mZXR0aSA9IGxheWVyLmZlYXR1cmVzW2N1cnJlbnRQb2ludC5wcm9wZXJ0aWVzLmlkXTtcbiAgICAvLyAgICAgICAgICAgIGlmIChfRlNQLk1hcEJ1aWxkZXIuc2VsZWN0ZWRDb25mZXR0aSkge1xuICAgIC8vICAgICAgICAgICAgICAvL1NldCBmZWF0dXJlIHRvIGJlIGJpZyBhbmQgaGlnaCB6LWluZGV4XG4gICAgLy8gICAgICAgICAgICAgIF9GU1AuTWFwQnVpbGRlci5zZWxlY3RlZENvbmZldHRpLnNlbGVjdCgpO1xuICAgIC8vICAgICAgICAgICAgICBpZiAoX0ZTUC5NYXBCdWlsZGVyLnByZXZpb3VzbHlTZWxlY3RlZENvbmZldHRpKSBfRlNQLk1hcEJ1aWxkZXIucHJldmlvdXNseVNlbGVjdGVkQ29uZmV0dGkuZGVzZWxlY3QoKTtcbiAgICAvLyAgICAgICAgICAgICAgX0ZTUC5NYXBCdWlsZGVyLnByZXZpb3VzbHlTZWxlY3RlZENvbmZldHRpID0gX0ZTUC5NYXBCdWlsZGVyLnNlbGVjdGVkQ29uZmV0dGk7XG4gICAgLy8gICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgfVxuICAgIC8vICAgICAgICB9XG4gICAgLy8gICAgICB9XG4gICAgLy8gICAgfSk7XG4gICAgLy8gICAgaWYoaHRtbCl7XG4gICAgLy8gICAgICBvcGVuQ0lDT0RldGFpbHMoaHRtbCk7XG4gICAgLy8gICAgfVxuICAgIC8vICB9XG4gICAgLy99KTtcblxuICB9XG5cbn07XG5cbmxheWVyLmFncmljdWx0dXJlID0ge1xuICB1cmw6IFwiaHR0cDovL3NwYXRpYWxzZXJ2ZXIuc3BhdGlhbGRldi5jb20vc2VydmljZXMvcG9zdGdpcy9hZ3JpY3VsdHVyZV8yMDE0L2dlb20vdmVjdG9yLXRpbGVzL3t6fS97eH0ve3l9LnBiZj9maWVsZHM9dHlwZSxpZFwiLFxuICBkZWJ1ZzogZmFsc2UsXG4gIHR5cGU6IFwicGJmXCIsXG4gIG5hbWU6IFwiQWdyaWN1bHR1cmVcIixcbiAgY2xpY2thYmxlTGF5ZXJzOiBudWxsLFxuXG4gIC8vIHdlIHdhbnQgY29uZmV0dGkgdG8gYmUgb24gdG9wIG9mIG90aGVyIGxheWVycywgc3VjaCBhcyB0aGUgY29udGV4dHVhbCBsYXllcnNcbiAgekluZGV4OiAxMDAwLFxuXG4gIGdldElERm9yTGF5ZXJGZWF0dXJlOiBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgIHJldHVybiBmZWF0dXJlLnByb3BlcnRpZXMuaWQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBmaWx0ZXIgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgd2hlbiBpdGVyYXRpbmcgdGhvdWdoIGVhY2ggdmVjdG9yIHRpbGUgZmVhdHVyZSAodnRmKS4gWW91IGhhdmUgYWNjZXNzXG4gICAqIHRvIGV2ZXJ5IHByb3BlcnR5IGFzc29jaWF0ZWQgd2l0aCBhIGdpdmVuIGZlYXR1cmUgKHRoZSBmZWF0dXJlLCBhbmQgdGhlIGxheWVyKS4gWW91IGNhbiBhbHNvIGZpbHRlclxuICAgKiBiYXNlZCBvZiB0aGUgY29udGV4dCAoZWFjaCB0aWxlIHRoYXQgdGhlIGZlYXR1cmUgaXMgZHJhd24gb250bykuXG4gICAqXG4gICAqIFJldHVybmluZyBmYWxzZSBza2lwcyBvdmVyIHRoZSBmZWF0dXJlIGFuZCBpdCBpcyBub3QgZHJhd24uXG4gICAqXG4gICAqIEBwYXJhbSBmZWF0dXJlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZmlsdGVyOiBmdW5jdGlvbiAoZmVhdHVyZSwgY29udGV4dCkge1xuICAgIC8vaWYoZmVhdHVyZS5wcm9wZXJ0aWVzLnR5cGUgPT0gJ1NlZWQgTXVsdGlwbGllcnMnKXtcbiAgICAvLyAgcmV0dXJuIHRydWVcbiAgICAvL30gZWxzZSB7XG4gICAgLy8gIHJldHVybiBmYWxzZTtcbiAgICAvL31cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICAvKipcbiAgICogV2hlbiB3ZSB3YW50IHRvIGxpbmsgZXZlbnRzIGJldHdlZW4gbGF5ZXJzLCBsaWtlIGNsaWNraW5nIG9uIGEgbGFiZWwgYW5kIGFcbiAgICogY29ycmVzcG9uZGluZyBwb2x5Z29uIGZyZWF0dXJlLCB0aGlzIHdpbGwgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIG1hcHBpbmdcbiAgICogYmV0d2VlbiBsYXllcnMuIFRoaXMgcHJvdmlkZXMga25vd2xlZGdlIG9mIHdoaWNoIG90aGVyIGZlYXR1cmUgYSBnaXZlbiBmZWF0dXJlXG4gICAqIGlzIGxpbmtlZCB0by5cbiAgICpcbiAgICogQHBhcmFtIGxheWVyTmFtZSAgdGhlIGxheWVyIHdlIHdhbnQgdG8ga25vdyB0aGUgbGlua2VkIGxheWVyIGZyb21cbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBjb3JyZXNwb25kaW5nIGxpbmtlZCBsYXllclxuICAgKi9cbiAgbGF5ZXJMaW5rOiBmdW5jdGlvbiAobGF5ZXJOYW1lKSB7XG4gICAgaWYgKGxheWVyTmFtZS5pbmRleE9mKCdfbGFiZWwnKSA+IC0xKSB7XG4gICAgICByZXR1cm4gbGF5ZXJOYW1lLnJlcGxhY2UoJ19sYWJlbCcsICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIGxheWVyTmFtZSArICdfbGFiZWwnO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IHdoaWNoIGZlYXR1cmVzIHNob3VsZCBoYXZlIGEgY2VydGFpbiB6IGluZGV4IChpbnRlZ2VyKS4gIExvd2VyIG51bWJlcnMgd2lsbCBkcmF3IG9uICd0aGUgYm90dG9tJy5cbiAgICpcbiAgICogQHBhcmFtIGZlYXR1cmUgLSB0aGUgUEJGRmVhdHVyZSB0aGF0IGNvbnRhaW5zIHByb3BlcnRpZXNcbiAgICovXG4gIGxheWVyT3JkZXJpbmc6IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgLy9UaGlzIG9ubHkgbmVlZHMgdG8gYmUgZG9uZSBmb3IgZWFjaCB0eXBlLCBub3QgbmVjZXNzYXJpbHkgZm9yIGVhY2ggZmVhdHVyZS4gQnV0IHdlJ2xsIHN0YXJ0IGhlcmUuXG4gICAgaWYgKGZlYXR1cmUgJiYgZmVhdHVyZS5wcm9wZXJ0aWVzKSB7XG4gICAgICBmZWF0dXJlLnByb3BlcnRpZXMuekluZGV4ID0gQ0lDT19Db25maWdbZmVhdHVyZS5wcm9wZXJ0aWVzLnR5cGVdLnpJbmRleCB8fCA1O1xuICAgIH1cbiAgfSxcblxuICBzdHlsZTogZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgIHZhciBzdHlsZSA9IHt9O1xuICAgIHZhciBzZWxlY3RlZCA9IHN0eWxlLnNlbGVjdGVkID0ge307XG4gICAgdmFyIHBvaW50UmFkaXVzID0gMTtcblxuICAgIGZ1bmN0aW9uIFNjYWxlRGVwZW5kZW50UG9pbnRSYWRpdXMoem9vbSl7XG4gICAgICAvL1NldCBwb2ludCByYWRpdXMgYmFzZWQgb24gem9vbVxuICAgICAgdmFyIHBvaW50UmFkaXVzID0gMTtcbiAgICAgIGlmKHpvb20gPj0gMCAmJiB6b29tIDw9IDcpe1xuICAgICAgICBwb2ludFJhZGl1cyA9IDE7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHpvb20gPiA3ICYmIHpvb20gPD0gMTApe1xuICAgICAgICBwb2ludFJhZGl1cyA9IDM7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHpvb20gPiAxMCl7XG4gICAgICAgIHBvaW50UmFkaXVzID0gNDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBvaW50UmFkaXVzO1xuICAgIH1cblxuICAgIHZhciB0eXBlID0gZmVhdHVyZS50eXBlO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAxOiAvLydQb2ludCdcbiAgICAgICAgLy8gdW5zZWxlY3RlZFxuICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2IoMjA5LCAxMTAsIDM1KSc7XG4gICAgICAgIHN0eWxlLnJhZGl1cyA9IFNjYWxlRGVwZW5kZW50UG9pbnRSYWRpdXM7XG4gICAgICAgIC8vIHNlbGVjdGVkXG4gICAgICAgIHNlbGVjdGVkLmNvbG9yID0gJ3JnYigyMDksIDExMCwgMzUpJztcbiAgICAgICAgc2VsZWN0ZWQucmFkaXVzID0gNztcbiAgICAgICAgc2VsZWN0ZWQuc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJztcbiAgICAgICAgc2VsZWN0ZWQubGluZVdpZHRoID0gMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6IC8vJ0xpbmVTdHJpbmcnXG4gICAgICAgIC8vIHVuc2VsZWN0ZWRcbiAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgxNjEsMjE3LDE1NSwwLjgpJztcbiAgICAgICAgc3R5bGUuc2l6ZSA9IDM7XG4gICAgICAgIC8vIHNlbGVjdGVkXG4gICAgICAgIHNlbGVjdGVkLmNvbG9yID0gJ3JnYmEoMjU1LDI1LDAsMC41KSc7XG4gICAgICAgIHNlbGVjdGVkLnNpemUgPSAzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzogLy8nUG9seWdvbidcbiAgICAgICAgLy8gdW5zZWxlY3RlZFxuICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDE0OSwxMzksMjU1LDAuNCknO1xuICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgIGNvbG9yOiAncmdiKDIwLDIwLDIwKScsXG4gICAgICAgICAgc2l6ZTogMlxuICAgICAgICB9O1xuICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICBzZWxlY3RlZC5jb2xvciA9ICdyZ2JhKDI1NSwyNSwwLDAuMyknO1xuICAgICAgICBzZWxlY3RlZC5vdXRsaW5lID0ge1xuICAgICAgICAgIGNvbG9yOiAnI2Q5NTM0ZicsXG4gICAgICAgICAgc2l6ZTogM1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZTtcbiAgfSxcblxuICBvbkNsaWNrOiBmdW5jdGlvbihldnQpIHtcbiAgICAvL0lmIG5lYXJieSB0b29sIChvciBhbnkgdG9vbCkgaXMgYWN0aXZlLCB0aGVuIGFib3J0LlxuICAgIC8vaWYoX0ZTUC5Ub29sTWFzdGVyLmFjdGl2ZVRvb2wuYWN0aXZlID09IHRydWUpIHJldHVybjtcbiAgICAvL1xuICAgIC8vdmFyIGJ1ZmZlciA9IF9GU1AuQ29uZmV0dGlMb2FkZXIuY2xpY2tUb0J1ZmZlcihldnQpO1xuICAgIC8vXG4gICAgLy9pZihPYmplY3Qua2V5cyhfRlNQLkFnZ0xpc3RCdWlsZGVyLkdldEZpbHRlck9iamVjdCgpKS5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgIC8vXG4gICAgLy8vL1dlIGhhdmUgdGhlIGJ1ZmZlciBhcyBnZW9qc29uLiAgU2VuZCBpdCB0byB0aGUgcG9pbnQgdGFibGUgdG8gaW50ZXJzZWN0XG4gICAgLy92YXIgdGFibGVQb3N0QXJncyA9IHtcbiAgICAvLyAgcmV0dXJuZmllbGRzOiAnbGF0LGxuZyxpZCx0eXBlLG5hbWUscGhvdG9zLGlycmlnYXRpb25fcHVtcHMsZmFybV90cmFjdG9ycyxzZWVkLGZlcnRpbGl6ZXIsY2hlbWljYWxfaW5wdXRzLG9yZ2FuaWNfZmVydGlsaXplcnMsdmV0X3N1cHBsaWVzLHRvb2xzX2VxdWlwbWVudCxzZWVkX211bGlwbGllcixzdG9yYWdlX2NhcGFjaXR5LHVyYmFuX2NlbnRlcl9kaXN0LHNlZWRfbXVsaXBsaWVyLHZhY2luYXRpb24saW5zZW1pbmFpdG9uLGJyZWVkaW5nLG1vZGVybml6ZWQnLFxuICAgIC8vICBmb3JtYXQ6ICdnZW9qc29uJyxcbiAgICAvLyAgd2hlcmU6IF9GU1AuVXRpbGl0aWVzLmJ1aWxkUG9zdEdyZXNRdWVyeUV4cHJlc3Npb24oJ2FncmljdWx0dXJlJywgX0ZTUC5BZ2dMaXN0QnVpbGRlci5BZ2dTZWxlY3Rpb25zKSxcbiAgICAvLyAgcmV0dXJuR2VvbWV0cnk6ICd5ZXMnLFxuICAgIC8vICBpbnRlcnNlY3RzOiBidWZmZXIsXG4gICAgLy8gIGxpbWl0OiAyMDAgLy9hZGQgYSBsaW1pdCBvZiAyMDAgc28gd2UgZG9uJ3QgZ2V0IGNhcnJpZWQgYXdheVxuICAgIC8vfTtcbiAgICAvL3ZhciBwb2ludFVybCA9IFwiaHR0cDovL3NwYXRpYWxzZXJ2ZXIuc3BhdGlhbGRldi5jb20vc2VydmljZXMvdGFibGVzL2FncmljdWx0dXJlXzIwMTQvcXVlcnlcIjtcbiAgICAvL1xuICAgIC8vJC5wb3N0KHBvaW50VXJsLCB0YWJsZVBvc3RBcmdzKS5zdWNjZXNzKGZ1bmN0aW9uIChwb2ludHMsIHFzdGF0dXMpIHtcbiAgICAvLyAgLy9HZW9KU09OIHJlc3VsdCBvZiBwb2ludHNcbiAgICAvLyAgaWYgKCFwb2ludHMgfHwgcG9pbnRzLmVycm9yKSB7XG4gICAgLy8gICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGZldGNoIGZlYXR1cmU6ICcgKyBwb2ludHMuZXJyb3IpO1xuICAgIC8vICAgIHJldHVybjtcbiAgICAvLyAgfVxuICAgIC8vXG4gICAgLy8gIC8vcG9pbnQgaXMgYSBmZWF0dXJlY29sbGVjdGlvbi4gb3BlbiB0aGUgcGFuZWwgYW5kIHNob3cgc29tZSBzdHVmZi5cbiAgICAvLyAgaWYgKHBvaW50cyAmJiBwb2ludHMuZmVhdHVyZXMgJiYgcG9pbnRzLmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAvLyAgICB2YXIgaHRtbCA9IF9GU1AuUG9wdXBCdWlsZGVyLmFkZFJlc3VsdHMocG9pbnRzLmZlYXR1cmVzLCBfRlNQLkNvbmZpZy5BR19MQVlFUlMsICdhZ3JpY3VsdHVyZScsIGZ1bmN0aW9uIChjdXJyZW50UG9pbnQpIHtcbiAgICAvLyAgICAgIGlmIChjdXJyZW50UG9pbnQpIHtcbiAgICAvLyAgICAgICAgLy9IaWdobGlnaHQgcG9pbnQuXG4gICAgLy8gICAgICAgIHZhciBsYXllcnMgPSBwYmZTb3VyY2UuZ2V0TGF5ZXJzKCk7XG4gICAgLy8gICAgICAgIGlmIChsYXllcnMpIHtcbiAgICAvLyAgICAgICAgICB2YXIgbGF5ZXIgPSBsYXllcnNbT2JqZWN0LmtleXMobGF5ZXJzKVswXV07IC8vTGlicmFyeSBsYXllclxuICAgIC8vICAgICAgICAgIGlmIChsYXllcikge1xuICAgIC8vICAgICAgICAgICAgLy90cnkgdG8gcGx1Y2sgdnRmXG4gICAgLy8gICAgICAgICAgICBfRlNQLk1hcEJ1aWxkZXIuc2VsZWN0ZWRDb25mZXR0aSA9IGxheWVyLmZlYXR1cmVzW2N1cnJlbnRQb2ludC5wcm9wZXJ0aWVzLmlkXTtcbiAgICAvLyAgICAgICAgICAgIGlmIChfRlNQLk1hcEJ1aWxkZXIuc2VsZWN0ZWRDb25mZXR0aSkge1xuICAgIC8vICAgICAgICAgICAgICAvL1NldCBmZWF0dXJlIHRvIGJlIGJpZyBhbmQgaGlnaCB6LWluZGV4XG4gICAgLy8gICAgICAgICAgICAgIF9GU1AuTWFwQnVpbGRlci5zZWxlY3RlZENvbmZldHRpLnNlbGVjdCgpO1xuICAgIC8vICAgICAgICAgICAgICBpZiAoX0ZTUC5NYXBCdWlsZGVyLnByZXZpb3VzbHlTZWxlY3RlZENvbmZldHRpKSBfRlNQLk1hcEJ1aWxkZXIucHJldmlvdXNseVNlbGVjdGVkQ29uZmV0dGkuZGVzZWxlY3QoKTtcbiAgICAvLyAgICAgICAgICAgICAgX0ZTUC5NYXBCdWlsZGVyLnByZXZpb3VzbHlTZWxlY3RlZENvbmZldHRpID0gX0ZTUC5NYXBCdWlsZGVyLnNlbGVjdGVkQ29uZmV0dGk7XG4gICAgLy8gICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgfVxuICAgIC8vICAgICAgICB9XG4gICAgLy8gICAgICB9XG4gICAgLy8gICAgfSk7XG4gICAgLy8gICAgaWYoaHRtbCl7XG4gICAgLy8gICAgICBvcGVuQ0lDT0RldGFpbHMoaHRtbCk7XG4gICAgLy8gICAgfVxuICAgIC8vICB9XG4gICAgLy99KTtcbiAgfVxuXG59O1xuXG5sYXllci5saWJyYXJ5ID0ge1xuICB1cmw6IFwiaHR0cDovL3NwYXRpYWxzZXJ2ZXIuc3BhdGlhbGRldi5jb20vc2VydmljZXMvcG9zdGdpcy9saWJyYXJ5XzIwMTQvZ2VvbS92ZWN0b3ItdGlsZXMve3p9L3t4fS97eX0ucGJmP2ZpZWxkcz10eXBlLGlkXCIsXG4gIGRlYnVnOiBmYWxzZSxcbiAgdHlwZTogJ3BiZicsXG4gIG5hbWU6ICdMaWJyYXJ5JyxcbiAgY2xpY2thYmxlTGF5ZXJzOiBudWxsLFxuXG4gIC8vIHdlIHdhbnQgY29uZmV0dGkgdG8gYmUgb24gdG9wIG9mIG90aGVyIGxheWVycywgc3VjaCBhcyB0aGUgY29udGV4dHVhbCBsYXllcnNcbiAgekluZGV4OiAxMDAwLFxuXG4gIGdldElERm9yTGF5ZXJGZWF0dXJlOiBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgIHJldHVybiBmZWF0dXJlLnByb3BlcnRpZXMuaWQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBmaWx0ZXIgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgd2hlbiBpdGVyYXRpbmcgdGhvdWdoIGVhY2ggdmVjdG9yIHRpbGUgZmVhdHVyZSAodnRmKS4gWW91IGhhdmUgYWNjZXNzXG4gICAqIHRvIGV2ZXJ5IHByb3BlcnR5IGFzc29jaWF0ZWQgd2l0aCBhIGdpdmVuIGZlYXR1cmUgKHRoZSBmZWF0dXJlLCBhbmQgdGhlIGxheWVyKS4gWW91IGNhbiBhbHNvIGZpbHRlclxuICAgKiBiYXNlZCBvZiB0aGUgY29udGV4dCAoZWFjaCB0aWxlIHRoYXQgdGhlIGZlYXR1cmUgaXMgZHJhd24gb250bykuXG4gICAqXG4gICAqIFJldHVybmluZyBmYWxzZSBza2lwcyBvdmVyIHRoZSBmZWF0dXJlIGFuZCBpdCBpcyBub3QgZHJhd24uXG4gICAqXG4gICAqIEBwYXJhbSBmZWF0dXJlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZmlsdGVyOiBmdW5jdGlvbiAoZmVhdHVyZSwgY29udGV4dCkge1xuICAgIC8vcmV0dXJuIGZlYXR1cmUucHJvcGVydGllcy50eXBlICE9ICdNb2JpbGUgTW9uZXkgQWdlbnQnO1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBXaGVuIHdlIHdhbnQgdG8gbGluayBldmVudHMgYmV0d2VlbiBsYXllcnMsIGxpa2UgY2xpY2tpbmcgb24gYSBsYWJlbCBhbmQgYVxuICAgKiBjb3JyZXNwb25kaW5nIHBvbHlnb24gZnJlYXR1cmUsIHRoaXMgd2lsbCByZXR1cm4gdGhlIGNvcnJlc3BvbmRpbmcgbWFwcGluZ1xuICAgKiBiZXR3ZWVuIGxheWVycy4gVGhpcyBwcm92aWRlcyBrbm93bGVkZ2Ugb2Ygd2hpY2ggb3RoZXIgZmVhdHVyZSBhIGdpdmVuIGZlYXR1cmVcbiAgICogaXMgbGlua2VkIHRvLlxuICAgKlxuICAgKiBAcGFyYW0gbGF5ZXJOYW1lICB0aGUgbGF5ZXIgd2Ugd2FudCB0byBrbm93IHRoZSBsaW5rZWQgbGF5ZXIgZnJvbVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGNvcnJlc3BvbmRpbmcgbGlua2VkIGxheWVyXG4gICAqL1xuICBsYXllckxpbms6IGZ1bmN0aW9uIChsYXllck5hbWUpIHtcbiAgICBpZiAobGF5ZXJOYW1lLmluZGV4T2YoJ19sYWJlbCcpID4gLTEpIHtcbiAgICAgIHJldHVybiBsYXllck5hbWUucmVwbGFjZSgnX2xhYmVsJywgJycpO1xuICAgIH1cbiAgICByZXR1cm4gbGF5ZXJOYW1lICsgJ19sYWJlbCc7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZnkgd2hpY2ggZmVhdHVyZXMgc2hvdWxkIGhhdmUgYSBjZXJ0YWluIHogaW5kZXggKGludGVnZXIpLiAgTG93ZXIgbnVtYmVycyB3aWxsIGRyYXcgb24gJ3RoZSBib3R0b20nLlxuICAgKlxuICAgKiBAcGFyYW0gZmVhdHVyZSAtIHRoZSBQQkZGZWF0dXJlIHRoYXQgY29udGFpbnMgcHJvcGVydGllc1xuICAgKi9cbiAgbGF5ZXJPcmRlcmluZzogZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAvL1RoaXMgb25seSBuZWVkcyB0byBiZSBkb25lIGZvciBlYWNoIHR5cGUsIG5vdCBuZWNlc3NhcmlseSBmb3IgZWFjaCBmZWF0dXJlLiBCdXQgd2UnbGwgc3RhcnQgaGVyZS5cbiAgICBpZiAoZmVhdHVyZSAmJiBmZWF0dXJlLnByb3BlcnRpZXMpIHtcbiAgICAgIGZlYXR1cmUucHJvcGVydGllcy56SW5kZXggPSBDSUNPX0NvbmZpZ1tmZWF0dXJlLnByb3BlcnRpZXMudHlwZV0uekluZGV4IHx8IDU7XG4gICAgfVxuICB9LFxuXG4gIHN0eWxlOiBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgIHZhciBzdHlsZSA9IHt9O1xuICAgIHZhciBzZWxlY3RlZCA9IHN0eWxlLnNlbGVjdGVkID0ge307XG4gICAgdmFyIHBvaW50UmFkaXVzID0gMTtcblxuICAgIGZ1bmN0aW9uIFNjYWxlRGVwZW5kZW50UG9pbnRSYWRpdXMoem9vbSkge1xuICAgICAgLy9TZXQgcG9pbnQgcmFkaXVzIGJhc2VkIG9uIHpvb21cbiAgICAgIHZhciBwb2ludFJhZGl1cyA9IDE7XG4gICAgICBpZiAoem9vbSA+PSAwICYmIHpvb20gPD0gNykge1xuICAgICAgICBwb2ludFJhZGl1cyA9IDE7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh6b29tID4gNyAmJiB6b29tIDw9IDEwKSB7XG4gICAgICAgIHBvaW50UmFkaXVzID0gMztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHpvb20gPiAxMCkge1xuICAgICAgICBwb2ludFJhZGl1cyA9IDQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwb2ludFJhZGl1cztcbiAgICB9XG5cbiAgICB2YXIgdHlwZSA9IGZlYXR1cmUudHlwZTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgMTogLy8nUG9pbnQnXG4gICAgICAgIC8vIHVuc2VsZWN0ZWRcbiAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiKDQyLCAxMzMsIDE3MyknO1xuICAgICAgICBzdHlsZS5yYWRpdXMgPSBTY2FsZURlcGVuZGVudFBvaW50UmFkaXVzO1xuICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICBzZWxlY3RlZC5jb2xvciA9ICdyZ2IoNDIsIDEzMywgMTczKSc7XG4gICAgICAgIHNlbGVjdGVkLnJhZGl1cyA9IDc7XG4gICAgICAgIHNlbGVjdGVkLnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC41KSc7XG4gICAgICAgIHNlbGVjdGVkLmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjogLy8nTGluZVN0cmluZydcbiAgICAgICAgLy8gdW5zZWxlY3RlZFxuICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDE2MSwyMTcsMTU1LDAuOCknO1xuICAgICAgICBzdHlsZS5zaXplID0gMztcbiAgICAgICAgLy8gc2VsZWN0ZWRcbiAgICAgICAgc2VsZWN0ZWQuY29sb3IgPSAncmdiYSgyNTUsMjUsMCwwLjUpJztcbiAgICAgICAgc2VsZWN0ZWQuc2l6ZSA9IDM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOiAvLydQb2x5Z29uJ1xuICAgICAgICAvLyB1bnNlbGVjdGVkXG4gICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMTQ5LDEzOSwyNTUsMC40KSc7XG4gICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgY29sb3I6ICdyZ2IoMjAsMjAsMjApJyxcbiAgICAgICAgICBzaXplOiAyXG4gICAgICAgIH07XG4gICAgICAgIC8vIHNlbGVjdGVkXG4gICAgICAgIHNlbGVjdGVkLmNvbG9yID0gJ3JnYmEoMjU1LDI1LDAsMC4zKSc7XG4gICAgICAgIHNlbGVjdGVkLm91dGxpbmUgPSB7XG4gICAgICAgICAgY29sb3I6ICcjZDk1MzRmJyxcbiAgICAgICAgICBzaXplOiAzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9LFxuXG4gIG9uQ2xpY2s6IGZ1bmN0aW9uIChldnQpIHtcblxuICAgIC8vSWYgbmVhcmJ5IHRvb2wgKG9yIGFueSB0b29sKSBpcyBhY3RpdmUsIHRoZW4gYWJvcnQuXG4gICAgLy8gIGlmKF9GU1AuVG9vbE1hc3Rlci5hY3RpdmVUb29sLmFjdGl2ZSA9PSB0cnVlKSByZXR1cm47XG5cbiAgICAvL3ZhciBidWZmZXIgPSBjbGlja1RvQnVmZmVyKGV2dCk7XG4gICAgLy9cbiAgICAvLy8vSWYgYWxsIGFyZSB1bmNoZWNrZWQsIHRoZW4gZXhpdCBvdXQgb2YgaGVyZVxuICAgIC8vLy9pZihPYmplY3Qua2V5cyhfRlNQLkxpYnJhcnlMaXN0QnVpbGRlci5HZXRGaWx0ZXJPYmplY3QoKSkubGVuZ3RoID09IDApIHJldHVybjtcbiAgICAvL1xuICAgIC8vLy9XZSBoYXZlIHRoZSBidWZmZXIgYXMgZ2VvanNvbi4gIFNlbmQgaXQgdG8gdGhlIHBvaW50IHRhYmxlIHRvIGludGVyc2VjdFxuICAgIC8vdmFyIHRhYmxlUG9zdEFyZ3MgPSB7XG4gICAgLy8gICAgcmV0dXJuZmllbGRzOiAnbGF0LGxuZyxuYW1lLHR5cGUsaWQscGhvdG9zLGJ1c2luZXNzX2hvdXJzLHN0YWZmX2NvdW50LGludGVybmV0LHB1YmxpY19jb21wdXRlcl9jb3VudCxjb21wdXRlcl9mZWUnLFxuICAgIC8vICAgIGZvcm1hdDogJ2dlb2pzb24nLFxuICAgIC8vICAgIHJldHVybkdlb21ldHJ5OiAneWVzJyxcbiAgICAvLyAgICBpbnRlcnNlY3RzOiBidWZmZXIsXG4gICAgLy8gICAgbGltaXQ6IDIwMCAvL2FkZCBhIGxpbWl0IG9mIDIwMCBzbyB3ZSBkb24ndCBnZXQgY2FycmllZCBhd2F5XG4gICAgLy99O1xuICAgIC8vXG4gICAgLy9pZihMaWJyYXJ5V2hlcmVDYWx1c2UgIT0gJycpe1xuICAgIC8vICAgIHRhYmxlUG9zdEFyZ3Mud2hlcmUgPSBMaWJyYXJ5V2hlcmVDYWx1c2VcbiAgICAvL31cbiAgICAvL1xuICAgIC8vdmFyIHBvaW50VXJsID0gXCJodHRwOi8vc3BhdGlhbHNlcnZlci5zcGF0aWFsZGV2LmNvbS9zZXJ2aWNlcy90YWJsZXMvbGlicmFyeV8yMDE0L3F1ZXJ5XCI7XG4gICAgLy9cbiAgICAvLyQucG9zdChwb2ludFVybCwgdGFibGVQb3N0QXJncykuc3VjY2VzcyhmdW5jdGlvbiAocG9pbnRzLCBxc3RhdHVzKSB7XG4gICAgLy8gICAgLy9HZW9KU09OIHJlc3VsdCBvZiBwb2ludHNcbiAgICAvLyAgICBpZiAoIXBvaW50cyB8fCBwb2ludHMuZXJyb3IpIHtcbiAgICAvLyAgICAgICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGZldGNoIGZlYXR1cmU6ICcgKyBwb2ludHMuZXJyb3IpO1xuICAgIC8vICAgICAgICByZXR1cm47XG4gICAgLy8gICAgfVxuICAgIC8vXG4gICAgLy8gICAgTGlicmFyeURldGFpbHMgPSBwb2ludHM7XG4gICAgLy9cbiAgICAvL30pO1xuXG4gIH1cblxufTtcblxuLy8gQWxsIHBvc3NpYmxlIENJQ08gbGF5ZXIgKGNvbWJpbmVkIGZyb20gYWxsIGNvdW50cmllcylcbnZhciBDSUNPX0NvbmZpZyA9IHtcbiAgJ09mZnNpdGUgQVRNcyc6IHtcbiAgICBjb2xvcjogJyNhNGM3OGMnLFxuICAgIGluZm9MYWJlbDogJ09mZnNpdGUgQVRNJyxcbiAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgekluZGV4OiA2XG4gIH0sXG4gICdCYW5rIEJyYW5jaGVzJzoge1xuICAgIGNvbG9yOiAnIzk3N0MwMCcsXG4gICAgaW5mb0xhYmVsOiAnQmFuayBCcmFuY2gnLFxuICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICB6SW5kZXg6IDVcbiAgfSxcbiAgJ01GSXMnOiB7XG4gICAgY29sb3I6ICcjOTc3YzAwJyxcbiAgICBpbmZvTGFiZWw6ICdNRkknLFxuICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICB6SW5kZXg6IDdcbiAgfSxcbiAgJ1NBQ0NPcyc6IHtcbiAgICBjb2xvcjogJyNjZjhhNTcnLFxuICAgIGluZm9MYWJlbDogJ1NBQ0NPJyxcbiAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgekluZGV4OiAxMFxuICB9LFxuICAgICdTYXZpbmdzIGFuZCBjcmVkaXQgY28tb3BlcmF0aXZlcyAoU0FDQ09zKSc6IHtcbiAgICBjb2xvcjogJyNjZjhhNTcnLFxuICAgICAgICBpbmZvTGFiZWw6ICdTYXZpbmdzIGFuZCBjcmVkaXQgY28tb3BlcmF0aXZlcyAoU0FDQ09zKScsXG4gICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgekluZGV4OiAxMFxufSxcblxuJ01vYmlsZSBNb25leSBBZ2VudCc6IHtcbiAgICBjb2xvcjogJyM4Q0I3QzcnLFxuICAgIGluZm9MYWJlbDogJ01vYmlsZSBNb25leSBBZ2VudCcsXG4gICAgcHJvdmlkZXJzOiBudWxsLFxuICAgIHpJbmRleDogLTFcbiAgfSxcbiAgICAnTWljcm9maW5hbmNlIEluc3RpdHV0ZSc6IHtcbiAgICAgICAgY29sb3I6ICcjODI1RDk5JyxcbiAgICAgICAgaW5mb0xhYmVsOiAnTWljcm9maW5hbmNlIEluc3RpdHV0ZScsXG4gICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgekluZGV4OiA1XG4gICAgfSxcbiAgICAnUG9zdCBvZmZpY2VzJzoge1xuICAgICAgICBjb2xvcjogJyNGRkZGMDAnLFxuICAgICAgICBpbmZvTGFiZWw6ICdQb3N0IG9mZmljZXMnLFxuICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgIHpJbmRleDogNlxufSxcbiAgICAnTWljcm9maW5hbmNlIGRlcG9zaXQgdGFraW5nIGluc3RpdHV0aW9uJzoge1xuICAgICAgICBjb2xvcjogJyNmZjVkNWQnLFxuICAgICAgICBpbmZvTGFiZWw6ICdNaWNyb2ZpbmFuY2UgZGVwb3NpdCB0YWtpbmcgaW5zdGl0dXRpb24nLFxuICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgIHpJbmRleDogN1xuICAgIH0sXG4gICdNRElzJzoge1xuICAgIGNvbG9yOiAnIzgyNUQ5OScsXG4gICAgaW5mb0xhYmVsOiAnTURJJyxcbiAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgekluZGV4OiA2XG4gIH0sXG4gICAgJ0NyZWRpdCBpbnN0aXR1dGlvbnMnOiB7XG4gICAgICAgIGNvbG9yOiAnIzZDQTc2QicsXG4gICAgICAgIGluZm9MYWJlbDogJ0NyZWRpdCBpbnN0aXR1dGlvbnMnLFxuICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgIHpJbmRleDogOFxuICAgIH0sXG4gICdDcmVkaXQgSW5zdGl0dXRpb24nOiB7XG4gICAgY29sb3I6ICcjNkNBNzZCJyxcbiAgICBpbmZvTGFiZWw6ICdDcmVkaXQgSW5zdGl0dXRpb24nLFxuICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICB6SW5kZXg6IDVcbiAgfSxcbiAgJ01GQnMnOiB7XG4gICAgY29sb3I6ICcjODI1RDk5JyxcbiAgICBpbmZvTGFiZWw6ICdNRkInLFxuICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICB6SW5kZXg6IDdcbiAgfSxcbiAgJ01vdG9yIFBhcmtzJzoge1xuICAgIGNvbG9yOiAnI2JkODViMycsXG4gICAgaW5mb0xhYmVsOiAnTW90b3IgUGFya3MnLFxuICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICB6SW5kZXg6IDdcbiAgfSxcbiAgJ01vYmlsZSBOZXR3b3JrIE9wZXJhdG9yIE91dGxldHMnOiB7XG4gICAgY29sb3I6ICcjYTJhMmEyJyxcbiAgICBpbmZvTGFiZWw6ICdNb2JpbGUgTmV0d29yayBPcGVyYXRvciBPdXRsZXRzJyxcbiAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgekluZGV4OiAwXG4gIH0sXG4gICdQb3N0IE9mZmljZXMnOiB7XG4gICAgY29sb3I6ICcjRkZGRjAwJyxcbiAgICBpbmZvTGFiZWw6ICdQb3N0IE9mZmljZXMnLFxuICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICB6SW5kZXg6IDRcbiAgfSxcbiAgJ1Bvc3QgT2ZmaWNlJzoge1xuICAgIGNvbG9yOiAnIzgwYWQ3YicsXG4gICAgaW5mb0xhYmVsOiAnUG9zdCBPZmZpY2VzJyxcbiAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgekluZGV4OiA2XG4gIH0sXG4gICdCdXMgU3RhbmQnOiB7XG4gICAgY29sb3I6ICcjODBhZDdiJyxcbiAgICBpbmZvTGFiZWw6ICdCdXMgU3RhbmRzJyxcbiAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgekluZGV4OiA2XG4gIH0sXG4gICdCdXMgU3RhbmRzJzoge1xuICAgIGNvbG9yOiAnIzgwYWQ3YicsXG4gICAgaW5mb0xhYmVsOiAnQnVzIFN0YW5kcycsXG4gICAgcHJvdmlkZXJzOiBudWxsLFxuICAgIHpJbmRleDogNlxuICB9LFxuXG4gIC8vS2VueWFcbiAgJ0luc3VyYW5jZSBQcm92aWRlcnMnOiB7XG4gICAgY29sb3I6ICcjMzA4NkFCJyxcbiAgICBpbmZvTGFiZWw6ICdJbnN1cmFuY2UgcHJvdmlkZXJzJyxcbiAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgekluZGV4OiA2XG4gIH0sXG4gICdNb25leSBUcmFuc2ZlciBTZXJ2aWNlJzoge1xuICAgIGNvbG9yOiAnIzk3N0MwMCcsXG4gICAgaW5mb0xhYmVsOiAnTW9uZXkgVHJhbnNmZXIgU2VydmljZScsXG4gICAgcHJvdmlkZXJzOiBudWxsLFxuICAgIHpJbmRleDogNlxuICB9LFxuICAnRGV2IEZpbmFuY2UnOiB7XG4gICAgY29sb3I6ICcjOUIyNDJEJyxcbiAgICBpbmZvTGFiZWw6ICdEZXYgRmluYW5jZScsXG4gICAgcHJvdmlkZXJzOiBudWxsLFxuICAgIHpJbmRleDogNlxuICB9LFxuICAnRm9yZXggQnVyZWF1cyc6IHtcbiAgICBjb2xvcjogJyNjZjhhNTcnLFxuICAgIGluZm9MYWJlbDogJ0ZvcmV4IEJ1cmVhdXMnLFxuICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICB6SW5kZXg6IDZcbiAgfSxcbiAgJ0NhcCBNYXJrZXRzJzoge1xuICAgIGNvbG9yOiAnIzgyNUQ5OScsXG4gICAgaW5mb0xhYmVsOiAnQ2FwIE1hcmtldHMnLFxuICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICB6SW5kZXg6IDZcbiAgfSxcbiAgJ1BlbnNpb24gUHJvdmlkZXJzJzoge1xuICAgIGNvbG9yOiAnI2EyYTJhMicsXG4gICAgaW5mb0xhYmVsOiAnUGVuc2lvbiBwcm92aWRlcnMnLFxuICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICB6SW5kZXg6IDZcbiAgfSxcbiAgJ1B1cmNoYXNlIExlYXNlIEZhY3RvcmluZyc6IHtcbiAgICBjb2xvcjogJyM4MGFkN2InLFxuICAgIGluZm9MYWJlbDogJ1B1cmNoYXNlIExlYXNlIEZhY3RvcmluZycsXG4gICAgcHJvdmlkZXJzOiBudWxsLFxuICAgIHpJbmRleDogNlxuICB9LFxuICAnQmFuayBBZ2VudCc6IHtcbiAgICBjb2xvcjogJyM4MGFkN2InLFxuICAgIGluZm9MYWJlbDogJ0JhbmsgQWdlbnQnLFxuICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICB6SW5kZXg6IDZcbiAgfSxcbiAgJ0JhbmsgYW5kIE1vcnRnYWdlJzoge1xuICAgIGNvbG9yOiAnIzgwYWQ3YicsXG4gICAgaW5mb0xhYmVsOiAnQmFua3MgYW5kIE1vcnRnYWdlJyxcbiAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgekluZGV4OiA2XG4gIH0sXG4gICdDb21tZXJjaWFsIEJhbmsnOiB7XG4gICAgY29sb3I6ICcjOWIyNDJkJyxcbiAgICBpbmZvTGFiZWw6ICdDb21tZXJjaWFsIEJhbmsnLFxuICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICB6SW5kZXg6IDNcbiAgfSxcblxuICAnUG9zdEJhbmsnOiB7XG4gICAgY29sb3I6ICcjYmQ4NWIzJyxcbiAgICBpbmZvTGFiZWw6ICdQb3N0IEJhbmsnLFxuICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICB6SW5kZXg6IDZcbiAgfSxcblxuICAvL05pZ2VyaWEgTmV3IFBvc3QgT2ZmaWNlc1xuICAnTklQT1NUIFBvc3QgT2ZmaWNlJzoge1xuICAgIGNvbG9yOiAnIzgwYWQ3YicsXG4gICAgaW5mb0xhYmVsOiAnTklQT1NUIFBvc3QgT2ZmaWNlcycsXG4gICAgcHJvdmlkZXJzOiBudWxsLFxuICAgIHpJbmRleDogNlxuICB9LFxuICAnTklQT1NUIFBvc3QgU2hvcCc6IHtcbiAgICBjb2xvcjogJyM4MGFkN2InLFxuICAgIGluZm9MYWJlbDogJ05JUE9TVCBQb3N0IFNob3BzJyxcbiAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgekluZGV4OiA2XG4gIH0sXG4gICdOSVBPU1QgUG9zdGFsIEFnZW5jeSc6IHtcbiAgICBjb2xvcjogJyM4MGFkN2InLFxuICAgIGluZm9MYWJlbDogJ05JUE9TVCBQb3N0YWwgQWdlbmNpZXMnLFxuICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICB6SW5kZXg6IDZcbiAgfSxcblxuICAvL0luZGlhXG4gICdQb3N0YWwgT3V0bGV0cyc6IHtcbiAgICBjb2xvcjogJyNjZTZiMjknLFxuICAgIGluZm9MYWJlbDogJ1Bvc3RhbCBPdXRsZXRzJyxcbiAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgekluZGV4OiAzXG4gIH0sXG4gICdDb21tZXJjaWFsIEJhbmtzJzoge1xuICAgIGNvbG9yOiAnIzMwODZhYicsXG4gICAgaW5mb0xhYmVsOiAnQ29tbWVyY2lhbCBCYW5rcycsXG4gICAgcHJvdmlkZXJzOiBudWxsLFxuICAgIHpJbmRleDogMlxuICB9LFxuICAnQmFuayBDdXN0b21lciBTZXJ2aWNlIFBvaW50cyc6IHtcbiAgICBjb2xvcjogJyM5YjI0MmQnLFxuICAgIGluZm9MYWJlbDogJ0JhbmsgQ3VzdG9tZXIgU2VydmljZSBQb2ludHMnLFxuICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICB6SW5kZXg6IDRcbiAgfSxcbiAgJ0Rpc3RyaWN0Jzoge1xuICAgIGNvbG9yOiAnIzliMjQyZCcsXG4gICAgaW5mb0xhYmVsOiAnRGlzdHJpY3QnLFxuICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICB6SW5kZXg6IDZcbiAgfSxcbiAgJ1ByaXZhdGUgTGlicmFyeSc6IHtcbiAgICBjb2xvcjogJyMzMDg2YWInLFxuICAgIGluZm9MYWJlbDogJ1ByaXZhdGUgTGlicmFyeScsXG4gICAgcHJvdmlkZXJzOiBudWxsLFxuICAgIHpJbmRleDogNVxuICB9LFxuICAnUHVibGljIExpYnJhcnknOiB7XG4gICAgY29sb3I6ICcjOTc3YzAwJyxcbiAgICBpbmZvTGFiZWw6ICdQdWJsaWMgTGlicmFyeScsXG4gICAgcHJvdmlkZXJzOiBudWxsLFxuICAgIHpJbmRleDogN1xuICB9LFxuICAnVmlsbGFnZSc6IHtcbiAgICBjb2xvcjogJyNhNGM3OGMnLFxuICAgIGluZm9MYWJlbDogJ1ZpbGxhZ2UnLFxuICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICB6SW5kZXg6IDRcbiAgfSxcbiAgJ0FkZGl0aW9uYWwgUHJpbWFyeSBIZWFsdGggQ2VudHJlcyAoQVBIQyknOiB7XG4gICAgY29sb3I6ICcjOWIyNDJkJyxcbiAgICBpbmZvTGFiZWw6ICdBZGRpdGlvbmFsIFByaW1hcnkgSGVhbHRoIENlbnRyZXMgKEFQSEMpJyxcbiAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgekluZGV4OiA2XG4gIH0sXG4gICdBTk0gb3IgRGlzdHJpY3QgVHJhaW5pbmcgQ2VudHJlcyc6IHtcbiAgICBjb2xvcjogJyMzMDg2YWInLFxuICAgIGluZm9MYWJlbDogJ0FOTSBvciBEaXN0cmljdCBUcmFpbmluZyBDZW50cmVzJyxcbiAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgekluZGV4OiA1XG4gIH0sXG4gICdBcHByb3ZlZCBOdXJzaW5nIFRyYWluaW5nIENlbnRyZXMgKFByaXZhdGUgU2VjdG9yKSc6IHtcbiAgICBjb2xvcjogJyM5NzdjMDAnLFxuICAgIGluZm9MYWJlbDogJ0FwcHJvdmVkIE51cnNpbmcgVHJhaW5pbmcgQ2VudHJlcyAoUHJpdmF0ZSBTZWN0b3IpJyxcbiAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgekluZGV4OiA3XG4gIH0sXG4gICdDb21tdW5pdHkgSGVhbHRoIENlbnRyZSAoQ0hDKS9GaXJzdCBSZWZlcnJhbCBVbml0cyc6IHtcbiAgICBjb2xvcjogJyNkNWNiOTgnLFxuICAgIGluZm9MYWJlbDogJ0NvbW11bml0eSBIZWFsdGggQ2VudHJlIChDSEMpL0ZpcnN0IFJlZmVycmFsIFVuaXRzJyxcbiAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgekluZGV4OiA0XG4gIH0sXG4gICdEaXN0cmljdCBIb3NwaXRhbHMnOiB7XG4gICAgY29sb3I6ICcjY2U2YjI5JyxcbiAgICBpbmZvTGFiZWw6ICdEaXN0cmljdCBIb3NwaXRhbHMnLFxuICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICB6SW5kZXg6IDVcbiAgfSxcbiAgJ01lZGljYWwgQ29sbGVnZXMgYW5kIEhvc3BpdGFscyc6IHtcbiAgICBjb2xvcjogJyM1OTQ1MmEnLFxuICAgIGluZm9MYWJlbDogJ01lZGljYWwgQ29sbGVnZXMgYW5kIEhvc3BpdGFscycsXG4gICAgcHJvdmlkZXJzOiBudWxsLFxuICAgIHpJbmRleDogN1xuICB9LFxuICAnUHJpbWFyeSBIZWFsdGggQ2VudHJlIChQSEMpJzoge1xuICAgIGNvbG9yOiAnIzhjYjdjNycsXG4gICAgaW5mb0xhYmVsOiAnUHJpbWFyeSBIZWFsdGggQ2VudHJlIChQSEMpJyxcbiAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgekluZGV4OiA0XG4gIH0sXG4gICdQcml2YXRlIGhvc3BpdGFscyBhbmQgY2xpbmljcyc6IHtcbiAgICBjb2xvcjogJyNkMDk4ZDUnLFxuICAgIGluZm9MYWJlbDogJ1ByaXZhdGUgaG9zcGl0YWxzIGFuZCBjbGluaWNzJyxcbiAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgekluZGV4OiA1XG4gIH0sXG4gICdTdWIgRGl2aXNpb25hbCBEaXN0cmljdCBIb3NwaXRhbHMnOiB7XG4gICAgY29sb3I6ICcjYTRjNzhjJyxcbiAgICBpbmZvTGFiZWw6ICdTdWIgRGl2aXNpb25hbCBEaXN0cmljdCBIb3NwaXRhbHMnLFxuICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICB6SW5kZXg6IDdcbiAgfSxcbiAgJ1N1YiBIZWFsdGggQ2VudHJlcyc6IHtcbiAgICBjb2xvcjogJyNkNTk4OTgnLFxuICAgIGluZm9MYWJlbDogJ1N1YiBIZWFsdGggQ2VudHJlcycsXG4gICAgcHJvdmlkZXJzOiBudWxsLFxuICAgIHpJbmRleDogN1xuICB9LFxuICAnTnVyc2luZyBTY2hvb2xzJzoge1xuICAgIGNvbG9yOiAnIzU2N2Q1NCcsXG4gICAgaW5mb0xhYmVsOiAnTnVyc2luZyBTY2hvb2xzJyxcbiAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgekluZGV4OiA0XG4gIH0sXG4gICdEYWlyeSBQcm9jZXNzb3JzJzoge1xuICAgIGNvbG9yOiAnIzliMjQyZCcsXG4gICAgaW5mb0xhYmVsOiAnRGFpcnkgUHJvY2Vzc29ycycsXG4gICAgcHJvdmlkZXJzOiBudWxsLFxuICAgIHpJbmRleDogNlxuICB9LFxuICAnRGF5IG9sZCBjaGljayBoYXRjaGVyaWVzJzoge1xuICAgIGNvbG9yOiAnIzMwODZhYicsXG4gICAgaW5mb0xhYmVsOiAnRGF5IG9sZCBjaGljayBoYXRjaGVyaWVzJyxcbiAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgekluZGV4OiA1XG4gIH0sXG4gICdQcml2YXRlIHNlY3RvciBBZ3JpY3VsdHVyYWwgc2VydmljZSBwcm92aWRlcnMnOiB7XG4gICAgY29sb3I6ICcjOTc3YzAwJyxcbiAgICBpbmZvTGFiZWw6ICdQcml2YXRlIHNlY3RvciBBZ3JpY3VsdHVyYWwgc2VydmljZSBwcm92aWRlcnMnLFxuICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICB6SW5kZXg6IDdcbiAgfSxcbiAgJ0dvdmVybm1lbnQgVmV0cyc6IHtcbiAgICBjb2xvcjogJyNkNWNiOTgnLFxuICAgIGluZm9MYWJlbDogJ0dvdmVybm1lbnQgVmV0cycsXG4gICAgcHJvdmlkZXJzOiBudWxsLFxuICAgIHpJbmRleDogNFxuICB9LFxuICAnTWFya2V0IExvY2F0aW9ucyc6IHtcbiAgICBjb2xvcjogJyNjZTZiMjknLFxuICAgIGluZm9MYWJlbDogJ01hcmtldCBMb2NhdGlvbnMnLFxuICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICB6SW5kZXg6IDVcbiAgfSxcbiAgJ0Fncm8tZGVhbGVycyc6IHtcbiAgICBjb2xvcjogJyM1OTQ1MmEnLFxuICAgIGluZm9MYWJlbDogJ0Fncm8tZGVhbGVycycsXG4gICAgcHJvdmlkZXJzOiBudWxsLFxuICAgIHpJbmRleDogN1xuICB9LFxuICAnV2FyZWhvdXNlL1N0b3JhZ2UvQWdncmVnYXRpb24gQ2VudHJlcyc6IHtcbiAgICBjb2xvcjogJyM4Y2I3YzcnLFxuICAgIGluZm9MYWJlbDogJ1dhcmVob3VzZS9TdG9yYWdlL0FnZ3JlZ2F0aW9uIENlbnRyZXMnLFxuICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICB6SW5kZXg6IDRcbiAgfSxcbiAgJ0RhaXJ5IGNoaWxsaW5nIHBsYW50cyc6IHtcbiAgICBjb2xvcjogJyNkMDk4ZDUnLFxuICAgIGluZm9MYWJlbDogJ0RhaXJ5IGNoaWxsaW5nIHBsYW50cycsXG4gICAgcHJvdmlkZXJzOiBudWxsLFxuICAgIHpJbmRleDogN1xuICB9LFxuICAnUHJvY2Vzc29ycy92YWx1ZSBhZGRpdGlvbiBwb2ludHMnOiB7XG4gICAgY29sb3I6ICcjYTRjNzhjJyxcbiAgICBpbmZvTGFiZWw6ICdQcm9jZXNzb3JzL3ZhbHVlIGFkZGl0aW9uIHBvaW50cycsXG4gICAgcHJvdmlkZXJzOiBudWxsLFxuICAgIHpJbmRleDogN1xuICB9LFxuICAnRmFybWVyIE9yZ2FuaXNhdGlvbnMgYW5kIENvb3BlcmF0aXZlcyc6IHtcbiAgICBjb2xvcjogJyNkNTk4OTgnLFxuICAgIGluZm9MYWJlbDogJ0Zhcm1lciBPcmdhbmlzYXRpb25zIGFuZCBDb29wZXJhdGl2ZXMnLFxuICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICB6SW5kZXg6IDRcbiAgfSxcbiAgJ0FydGlmaWNpYWwgSW5zZW1pbmF0aW9uIENlbnRyZXMnOiB7XG4gICAgY29sb3I6ICcjNTY3ZDU0JyxcbiAgICBpbmZvTGFiZWw6ICdBcnRpZmljaWFsIEluc2VtaW5hdGlvbiBDZW50cmVzJyxcbiAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgekluZGV4OiA0XG4gIH0sXG4gICdOYXRpb25hbC9SZWdpb25hbC9TdGF0ZSBSZXNlYXJjaCBTdGF0aW9ucyc6IHtcbiAgICBjb2xvcjogJyNiNjk4NWUnLFxuICAgIGluZm9MYWJlbDogJ05hdGlvbmFsL1JlZ2lvbmFsL1N0YXRlIFJlc2VhcmNoIFN0YXRpb25zJyxcbiAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgekluZGV4OiA1XG4gIH0sXG4gICdTZWVkIE11bHRpcGxpZXJzJzoge1xuICAgIGNvbG9yOiAnI2ZmNWQ1ZCcsXG4gICAgaW5mb0xhYmVsOiAnU2VlZCBNdWx0aXBsaWVycycsXG4gICAgcHJvdmlkZXJzOiBudWxsLFxuICAgIHpJbmRleDogN1xuICB9XG5cbn07XG4iLCIvKipcbiAqIFRoaXMgaXMgdGhlIGVudHJ5IHBvaW50IG9mIHRoZSBhcHBsaWNhdGlvbi4gV2UgZGVjbGFyZSB0aGUgbWFpbiBtb2R1bGUgaGVyZSBhbmQgdGhlbiBjb25maWd1cmUgdGhlIG1haW4gcm91dGVyXG4gKiB0aGF0IGNyZWF0ZXMgY29ycmVzcG9uZGluZyB2aWV3cy4gVGhlIGFycmF5IHBhcmFtZXRlciBmb3IgbW9kdWxlIGRlY2xhcmVzIHRoaXMgbW9kdWxlJ3MgZGVwZW5kZW5jaWVzLlxuICovXG52YXIgU3BhdGlhbFZpZXdlciA9IGFuZ3VsYXIubW9kdWxlKCdTcGF0aWFsVmlld2VyJywgWydhbmd1bGFyRmlsZVVwbG9hZCcsICduZ0Nvb2tpZXMnLCAnbmdSZXNvdXJjZScsICduZ1Nhbml0aXplJywgJ3VpLnJvdXRlcicsICduZ0FuaW1hdGUnLCAndWkuYm9vdHN0cmFwJywgJ3VpLnNsaWRlciddKTtcblxuU3BhdGlhbFZpZXdlci5ydW4oZnVuY3Rpb24gKCRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zKSB7XG5cbiAgLy8gSXQncyB2ZXJ5IGhhbmR5IHRvIGFkZCByZWZlcmVuY2VzIHRvICRzdGF0ZSBhbmQgJHN0YXRlUGFyYW1zIHRvIHRoZSAkcm9vdFNjb3BlXG4gIC8vIHNvIHRoYXQgeW91IGNhbiBhY2Nlc3MgdGhlbSBmcm9tIGFueSBzY29wZSB3aXRoaW4geW91ciBhcHBsaWNhdGlvbnMuRm9yIGV4YW1wbGUsXG4gIC8vIDxsaSB1aS1zcmVmLWFjdGl2ZT1cImFjdGl2ZSB9XCI+IHdpbGwgc2V0IHRoZSA8bGk+IC8vIHRvIGFjdGl2ZSB3aGVuZXZlclxuICAvLyAnY29udGFjdHMubGlzdCcgb3Igb25lIG9mIGl0cyBkZWNlbmRlbnRzIGlzIGFjdGl2ZS5cbiAgJHJvb3RTY29wZS4kc3RhdGUgPSAkc3RhdGU7XG4gICRyb290U2NvcGUuJHN0YXRlUGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuXG4gIGRlYnVnLiRzdGF0ZSA9ICRzdGF0ZTtcbiAgZGVidWcuJHN0YXRlUGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuXG4gICRyb290U2NvcGUuaXNTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZU5hbWUpIHtcbiAgICByZXR1cm4gJHN0YXRlLiRjdXJyZW50Lm5hbWUgPT09IHN0YXRlTmFtZTtcbiAgfTtcblxuICAkcm9vdFNjb3BlLmlzUGFyYW0gPSBmdW5jdGlvbihwYXJhbU5hbWUpIHtcbiAgICB2YXIgYm9vbCA9ICRzdGF0ZVBhcmFtc1twYXJhbU5hbWVdO1xuICAgIGlmICghYm9vbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuXG4gICRyb290U2NvcGUuaXNOb3RQYXJhbSA9IGZ1bmN0aW9uKHBhcmFtTmFtZSkge1xuICAgIHZhciBib29sID0gJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV07XG4gICAgaWYgKCFib29sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gICRyb290U2NvcGUudG9nZ2xlUGFyYW0gPSBmdW5jdGlvbihwYXJhbU5hbWUpIHtcbiAgICB2YXIgYm9vbCA9ICRzdGF0ZVBhcmFtc1twYXJhbU5hbWVdO1xuICAgIGlmICghYm9vbCkge1xuICAgICAgLy8gbXV0ZXggbG9naWMgdGhhdCBtYWtlcyBvbmx5IDEgcGFuZWwgb3BlbiBhdCBhIHRpbWVcbiAgICAgIGZvciAodmFyIHBhcmFtIGluICRzdGF0ZVBhcmFtcykge1xuICAgICAgICBpZiAoJHN0YXRlUGFyYW1zW3BhcmFtXSA9PT0gJ29wZW4nKSB7XG4gICAgICAgICAgJHN0YXRlUGFyYW1zW3BhcmFtXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICRzdGF0ZVBhcmFtc1twYXJhbU5hbWVdID0gJ29wZW4nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV07XG4gICAgfVxuICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgfTtcblxuICAkcm9vdFNjb3BlLnNldFBhcmFtV2l0aFZhbCA9IGZ1bmN0aW9uIChwYXJhbU5hbWUsIHZhbCkge1xuICAgICRzdGF0ZVBhcmFtc1twYXJhbU5hbWVdID0gdmFsO1xuICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgfTtcbiAgZGVidWcuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XG5cblxuICAkcm9vdFNjb3BlLm9wZW5QYXJhbSA9IGZ1bmN0aW9uKHBhcmFtTmFtZSkge1xuICAgIHZhciBib29sID0gJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV07XG4gICAgaWYgKCFib29sKSB7XG4gICAgICAvLyBtdXRleCBsb2dpYyB0aGF0IG1ha2VzIG9ubHkgMSBwYW5lbCBvcGVuIGF0IGEgdGltZVxuICAgICAgZm9yICh2YXIgcGFyYW0gaW4gJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgIGlmICgkc3RhdGVQYXJhbXNbcGFyYW1dID09PSAnb3BlbicpIHtcbiAgICAgICAgICAkc3RhdGVQYXJhbXNbcGFyYW1dID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV0gPSAnb3Blbic7XG4gICAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lIHx8ICdtYWluJztcbiAgICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgICB9XG4gIH07XG5cbiAgJHJvb3RTY29wZS5jbG9zZVBhcmFtID0gZnVuY3Rpb24ocGFyYW1OYW1lKSB7XG4gICAgdmFyIGJvb2wgPSAkc3RhdGVQYXJhbXNbcGFyYW1OYW1lXTtcbiAgICBpZiAoYm9vbCkge1xuICAgICAgZGVsZXRlICRzdGF0ZVBhcmFtc1twYXJhbU5hbWVdO1xuICAgICAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSB8fCAnbWFpbic7XG4gICAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG4gICAgfVxuICB9O1xuXG4gICRyb290U2NvcGUuaXNOb3RTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZU5hbWUpIHtcbiAgICByZXR1cm4gJHN0YXRlLiRjdXJyZW50Lm5hbWUgIT09IHN0YXRlTmFtZTtcbiAgfTtcblxuICB3aW5kb3cuJHN0YXRlID0gJHN0YXRlO1xuICB3aW5kb3cuJHN0YXRlUGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuXG59KTtcblxuU3BhdGlhbFZpZXdlci5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgJHVybFJvdXRlclByb3ZpZGVyXG4gICAgLndoZW4oJy9kZWZhdWx0JywgJy9tYXBAMS4zLDMyLDcoZGFyayksdWdhbmRhJylcbiAgICAud2hlbignL3BobCcsICcvbWFwQDEuMywzMiw3KGRhcmspLHVnYW5kYScpXG4gICAgLm90aGVyd2lzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGVmYXVsdFJvdXRlJykgfHwgJy9tYXBAMS4zLDMyLDcoZGFyayksdWdhbmRhJyk7XG5cbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJ21haW4nLCB7XG4gICAgICB1cmw6ICcvbWFwQDpsYXQsOmxuZyw6em9vbSgqbGF5ZXJzKSw6Y291bnRyeT90aXRsZSZ6b29tLWV4dGVudCZzdG9yaWVzJmxheWVycy1wYW5lbCZmaWx0ZXJzLXBhbmVsJmZpbHRlcnMmbGVnZW5kJmJhc2VtYXBzJmluZm8mdGhlbWUmZGV0YWlscy1wYW5lbCZjb3VudHJ5LXN1bW1hcnkmc2VhcmNoLXBhbmVsJnRvb2xzJnNmX2lkJmxldmVsJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdkZXRhaWxzJzoge1xuICAgICAgICAgIHRlbXBsYXRlOiAnICcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ01haW5DdHJsJ1xuICAgICAgICB9LFxuICAgICAgICAndGhlbWUnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy90aGVtZS5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnVGhlbWVDdHJsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICAuc3RhdGUoJ3VwbG9hZCcsIHtcbiAgICAgIHVybDogJy9tYXBAOmxhdCw6bG5nLDp6b29tKCpsYXllcnMpL3VwbG9hZD90aXRsZSZ6b29tLWV4dGVudCZzdG9yaWVzJmxheWVycy1wYW5lbCZmaWx0ZXJzLXBhbmVsJmZpbHRlcnMmbGVnZW5kJmJhc2VtYXBzJmluZm8mdGhlbWUmZGV0YWlscy1wYW5lbCZjb3VudHJ5LXN1bW1hcnkmc2VhcmNoLXBhbmVsJnRvb2xzJnNmX2lkJmxldmVsJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdkZXRhaWxzJzoge1xuICAgICAgICAgIHRlbXBsYXRlOiAnICcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ01haW5DdHJsJ1xuICAgICAgICB9LFxuICAgICAgICAndXBsb2FkJzoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvdXBsb2FkLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdVcGxvYWRDdHJsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICAuc3RhdGUoJ2V4cG9ydCcsIHtcbiAgICAgICAgICB1cmw6ICcvbWFwQDpsYXQsOmxuZyw6em9vbSgqbGF5ZXJzKS9leHBvcnQ/dGl0bGUmem9vbS1leHRlbnQmc3RvcmllcyZsYXllcnMtcGFuZWwmZmlsdGVycy1wYW5lbCZmaWx0ZXJzJmxlZ2VuZCZiYXNlbWFwcyZpbmZvJnRoZW1lJmRldGFpbHMtcGFuZWwmY291bnRyeS1zdW1tYXJ5JnNlYXJjaC1wYW5lbCZ0b29scyZzZl9pZCZsZXZlbCcsXG4gICAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgICAgJ2RldGFpbHMnOiB7XG4gICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJyAnLFxuICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ01haW5DdHJsJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAnZXhwb3J0Jzoge1xuICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9leHBvcnQuaHRtbCcsXG4gICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRXhwb3J0Q3RybCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgfSk7XG5cbn0pO1xuXG5TcGF0aWFsVmlld2VyLmRpcmVjdGl2ZSgnc2VsZWN0T25DbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNlbGVjdCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufSk7XG5cbi8qKlxuICogcGVyY2VudCBmaWx0ZXJcbiAqIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2plZmZqb2huc29uOTA0Ni85NDcwODAwXG4gKi9cblNwYXRpYWxWaWV3ZXIuZmlsdGVyKCdwZXJjZW50YWdlJywgWyckZmlsdGVyJywgZnVuY3Rpb24gKCRmaWx0ZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpbnB1dCwgZGVjaW1hbHMpIHtcbiAgICByZXR1cm4gJGZpbHRlcignbnVtYmVyJykoaW5wdXQgKiAxMDAsIGRlY2ltYWxzKSArICclJztcbiAgfTtcbn1dKTtcbi8qKlxuICogIGNhcGl0YWxpemUgZmlsdGVyXG4gKiAgaHR0cDovL2NvZGVwZW4uaW8vV2ludGVySm9leS9wZW4vc2ZGYUtcbiAqL1xuU3BhdGlhbFZpZXdlci5maWx0ZXIoJ2NhcGl0YWxpemUnLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGlucHV0LCBhbGwpIHtcbiAgICByZXR1cm4gKCEhaW5wdXQpID8gaW5wdXQucmVwbGFjZSgvKFteXFxXX10rW15cXHMtXSopICovZywgZnVuY3Rpb24odHh0KXtyZXR1cm4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpO30pIDogJyc7XG4gIH1cbn0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnU3BhdGlhbFZpZXdlcicpLmRpcmVjdGl2ZSgnbXlTaG93JywgZnVuY3Rpb24oJGFuaW1hdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBzY29wZToge1xuICAgICAgJ215U2hvdyc6ICc9JyxcbiAgICAgICdhZnRlclNob3cnOiAnJicsXG4gICAgICAnYWZ0ZXJIaWRlJzogJyYnXG4gICAgfSxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCkge1xuICAgICAgc2NvcGUuJHdhdGNoKCdteVNob3cnLCBmdW5jdGlvbihzaG93LCBvbGRTaG93KSB7XG4gICAgICAgIGlmIChzaG93KSB7XG4gICAgICAgICAgJGFuaW1hdGUucmVtb3ZlQ2xhc3MoZWxlbWVudCwgJ25nLWhpZGUnLCBzY29wZS5hZnRlclNob3cpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2hvdykge1xuICAgICAgICAgICRhbmltYXRlLmFkZENsYXNzKGVsZW1lbnQsICduZy1oaWRlJywgc2NvcGUuYWZ0ZXJIaWRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59KTtcblxuLyoqXG4gKiBDdXN0b20gZGlyZWN0aXZlIHRoYXQgZGlzYWJsZXMgaHlwZXJsaW5rIDwvYT5cbiAqIGh0dHA6Ly9wbG5rci5jby9lZGl0L0drUDF1a2p1NEZXZ0JlcHJCTHdqP3A9cHJldmlld1xuICpcbiAqL1xuXG5hbmd1bGFyLm1vZHVsZSgnU3BhdGlhbFZpZXdlcicpLmRpcmVjdGl2ZSgnYURpc2FibGVkJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgY29tcGlsZTogZnVuY3Rpb24odEVsZW1lbnQsIHRBdHRycywgdHJhbnNjbHVkZSkge1xuICAgICAgLy9EaXNhYmxlIG5nQ2xpY2tcbiAgICAgIHRBdHRyc1tcIm5nQ2xpY2tcIl0gPSBcIiEoXCIrdEF0dHJzW1wiYURpc2FibGVkXCJdK1wiKSAmJiAoXCIrdEF0dHJzW1wibmdDbGlja1wiXStcIilcIjtcblxuICAgICAgLy9Ub2dnbGUgXCJkaXNhYmxlZFwiIHRvIGNsYXNzIHdoZW4gYURpc2FibGVkIGJlY29tZXMgdHJ1ZVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzY29wZSwgaUVsZW1lbnQsIGlBdHRycykge1xuICAgICAgICBzY29wZS4kd2F0Y2goaUF0dHJzW1wiYURpc2FibGVkXCJdLCBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpRWxlbWVudC50b2dnbGVDbGFzcyhcImRpc2FibGVkXCIsIG5ld1ZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vRGlzYWJsZSBocmVmIG9uIGNsaWNrXG4gICAgICAgIGlFbGVtZW50Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGlmIChzY29wZS4kZXZhbChpQXR0cnNbXCJhRGlzYWJsZWRcIl0pKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xufSk7XG5cblxucmVxdWlyZSgnLi9zZXJ2aWNlcy9MYXllckNvbmZpZycpO1xucmVxdWlyZSgnLi9zZXJ2aWNlcy9TdG9yaWVzQ29uZmlnJyk7XG5yZXF1aXJlKCcuL3NlcnZpY2VzL1ZlY3Rvci9WZWN0b3JQcm92aWRlcicpO1xucmVxdWlyZSgnLi9zZXJ2aWNlcy9Eb251dHMnKTtcbnJlcXVpcmUoJy4vZmFjdG9yaWVzL2luZGlhJyk7XG5yZXF1aXJlKCcuL2ZhY3Rvcmllcy9uaWdlcmlhJyk7XG5yZXF1aXJlKCcuL2ZhY3Rvcmllcy9rZW55YScpO1xucmVxdWlyZSgnLi9mYWN0b3JpZXMvdWdhbmRhJyk7XG5yZXF1aXJlKCcuL2ZhY3Rvcmllcy90YW56YW5pYScpO1xucmVxdWlyZSgnLi9mYWN0b3JpZXMvYmFuZ2xhZGVzaCcpO1xucmVxdWlyZSgnLi9mYWN0b3JpZXMvc2VjdG9yZGF0YScpO1xucmVxdWlyZSgnLi9mYWN0b3JpZXMvRWR1Y2F0aW9uRmlsdGVyJyk7XG5yZXF1aXJlKCcuL2ZhY3Rvcmllcy9DSUNPRmlsdGVyJyk7XG5yZXF1aXJlKCcuL2ZhY3Rvcmllcy9IZWFsdGhGaWx0ZXInKTtcbnJlcXVpcmUoJy4vZmFjdG9yaWVzL0xpYnJhcnlGaWx0ZXInKTtcbnJlcXVpcmUoJy4vZmFjdG9yaWVzL0FnRmlsdGVyJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL21haW4nKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvbWFwJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL25hdmJhcicpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9zaWRlLXZpZXcnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvdG9vbHMnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvbGF5ZXJzJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2ZpbHRlcnMnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvZGV0YWlscycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9sZWdlbmQnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvaW5mbycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9iYXNlbWFwcycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9icmVhZGNydW1icycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy96b29tLWV4dGVudCcpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy90aGVtZScpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy91cGxvYWQnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvc2VhcmNoJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2V4cG9ydCcpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9jb3VudHJ5c2VsZWN0Jyk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgUnlhbiBXaGl0bGV5IDxyd2hpdGxleUBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDMvMjgvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnU3BhdGlhbFZpZXdlcicpLmNvbnRyb2xsZXIoJ0Jhc2VtYXBzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIExheWVyQ29uZmlnKSB7XG4gICRzY29wZS5iYXNlbWFwcyA9IExheWVyQ29uZmlnLmJhc2VtYXBzO1xuXG4gICRzY29wZS5uYW1lID0gZnVuY3Rpb24gKGFsaWFzKSB7XG4gICAgcmV0dXJuIExheWVyQ29uZmlnW2FsaWFzXS5uYW1lIHx8IGFsaWFzO1xuICB9O1xuXG4gICRzY29wZS5nZXRMYXllcnMgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoISAkc3RhdGVQYXJhbXMgfHwgISRzdGF0ZVBhcmFtcy5sYXllcnMpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgdmFyIGxheWVycyA9ICRzdGF0ZVBhcmFtcy5sYXllcnMuc3BsaXQoJywnKTtcbiAgICByZXR1cm4gbGF5ZXJzO1xuICB9O1xuXG4gICRzY29wZS5jdXJyZW50QmFzZW1hcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGF5ZXJzID0gJHNjb3BlLmdldExheWVycygpO1xuICAgIGlmICghbGF5ZXJzKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gbGF5ZXJzWzBdO1xuICB9O1xuXG4gICRzY29wZS5zd2FwQmFzZW1hcCA9IGZ1bmN0aW9uIChiYXNlbWFwKSB7XG4gICAgdmFyIGxheWVycyA9ICRzY29wZS5nZXRMYXllcnMoKTtcbiAgICBsYXllcnNbMF0gPSBiYXNlbWFwO1xuICAgIGxheWVycyA9IGxheWVycy5qb2luKCcsJyk7XG4gICAgYW5ndWxhci5leHRlbmQoJHN0YXRlUGFyYW1zLCB7XG4gICAgICBsYXllcnM6IGxheWVyc1xuICAgIH0pO1xuICAgICRzdGF0ZS5nbygnbWFpbicsICRzdGF0ZVBhcmFtcyk7XG4gIH07XG5cbiAgJHNjb3BlLmlzQWN0aXZlQmFzZW1hcCA9IGZ1bmN0aW9uKGJhc2VtYXApIHtcbiAgICByZXR1cm4gJHNjb3BlLmN1cnJlbnRCYXNlbWFwKCkgPT09IGJhc2VtYXA7XG4gIH07XG5cbn0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSBSeWFuIFdoaXRsZXkgPHJ3aGl0bGV5QHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNC8xNy8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdTcGF0aWFsVmlld2VyJykuY29udHJvbGxlcignQnJlYWRjcnVtYnNDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgJGh0dHAsIFZlY3RvclByb3ZpZGVyKSB7XG5cbiAgLyoqXG4gICAqIEZpeGVzIENocm9tZSBNYWduaWZ5aW5nIEdsYXNzIElzc3VlICMyMDZcbiAgICovXG4vLyAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbi8vICAgIHZhciB0b29sYmFyID0gJCgnI01hcFVwcGVyUmlnaHRUb29sYmFyV3JhcHBlcicpO1xuLy8gICAgd2hpbGUgKCB0b29sYmFyLmhlaWdodCgpID4gNDAgKSB7XG4vLyAgICAgIHRvb2xiYXIud2lkdGgoIHRvb2xiYXIud2lkdGgoKSArIDEgKTtcbi8vICAgIH1cbi8vICB9LCAxMDAwKTtcblxuXG5cdC8vdmFyIGZ1bGxTdGFja1VSTCA9IGNvbmZpZy5jaHViYnNQYXRoKCdzZXJ2aWNlcy9nZXRBZG1pblN0YWNrP2Zvcm1hdD1qc29uJmFkbWlubGV2ZWw9OmFkbWlubGV2ZWwmc3RhY2tpZD06Z3VpZCZkYXRhc291cmNlPWdhZG0nKTtcblx0dmFyIGZ1bGxTdGFja1VSTCA9IGNvbmZpZy5jaHViYnNQYXRoKCdzZXJ2aWNlcy9jdXN0b20vY3VzdG9tX29wZXJhdGlvbj9uYW1lPUdldEJyZWFkQ3J1bWJzV2l0aFRoZW1lQ291bnRzQnlJRCZmb3JtYXQ9anNvbiZnYWRtX2xldmVsPTphZG1pbmxldmVsJmlkcz06Z3VpZCZkYXRhc291cmNlPWdhZG0mdGhlbWU9cHJvamVjdHMnKTtcblxuXHR2YXIgYnJlYWRDcnVtYkZlYXR1cmVzID0ge307IC8vU3RvcmUgcmVzdWx0cyBvZiB0aGUgc3RhY2sgbG9va3VwIGhlcmUgc28gd2UgY2FuIHJldXNlLlxuXG5cdCRzY29wZS4kb24oJ2NlbnRlci1mZWF0dXJlJywgZnVuY3Rpb24gKGV2ZW50LCBmZWF0T2JqKSB7XG5cblx0XHQvL1NlZSBpZiB0aGUgZmVhdHVyZSBzdGFjayBoYXMgYWxyZWFkeSBiZWVuIHN0b3JlZFxuXHRcdGlmKGJyZWFkQ3J1bWJGZWF0dXJlc1tmZWF0T2JqLmxldmVsXSAmJiBicmVhZENydW1iRmVhdHVyZXNbZmVhdE9iai5sZXZlbF1bZmVhdE9iai5ndWlkXSl7XG5cdFx0XHQvL0FscmVhZHkgaGF2ZSBpdFxuXHRcdFx0dXBkYXRlQnJlYWRDcnVtYnMoYnJlYWRDcnVtYkZlYXR1cmVzW2ZlYXRPYmoubGV2ZWxdW2ZlYXRPYmouZ3VpZF0sIGZlYXRPYmoubGV2ZWwpO1xuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0Ly9HbyBmZXRjaCBpdFxuXHRcdFx0Ly9Vc2luZyB0aGUgQ2VudGVyIEZlYXR1cmUncyBHVUlELCBmZXRjaCB0aGUgZnVsbCBzdGFjayBkZXRhaWxzLlxuXHRcdFx0dmFyIHVybCA9IGZ1bGxTdGFja1VSTC5yZXBsYWNlKCc6YWRtaW5sZXZlbCcsIGZlYXRPYmoubGV2ZWwpLnJlcGxhY2UoJzpndWlkJywgZmVhdE9iai5ndWlkKTtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdFx0Ly8gRmV0Y2ggZnJvbSB0aGUgc2VydmVyIG9ubHkgaWYgd2UgZG9uJ3QgaGF2ZSBpdCBpbiB0aGUgaGFzaFxuXHRcdFx0JGh0dHAuZ2V0KHVybCkuc3VjY2VzcyhmdW5jdGlvbiAocmVzdWx0LCBzdGF0dXMpIHtcblxuXHRcdFx0XHRpZiAoIXJlc3VsdCB8fCByZXN1bHQuZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZmV0Y2ggZmVhdHVyZTogJyArIHJlc3VsdC5lcnJvcik7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIHByb3BlcnRpZXMgPSByZXN1bHRbMF07XG5cblx0XHRcdFx0Ly9VcGRhdGVcbiAgICAgICAgICAgICAgICBpZihwcm9wZXJ0aWVzKXtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQnJlYWRDcnVtYnMocHJvcGVydGllcywgZmVhdE9iai5sZXZlbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9TdG9yZSBpbiB0aGUgaGFzaC5cbiAgICAgICAgICAgICAgICAgICAgaWYoYnJlYWRDcnVtYkZlYXR1cmVzW2ZlYXRPYmoubGV2ZWxdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFkQ3J1bWJGZWF0dXJlc1tmZWF0T2JqLmxldmVsXVtwcm9wZXJ0aWVzW1wiZ3VpZFwiICsgZmVhdE9iai5sZXZlbF1dID0gcHJvcGVydGllcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWRDcnVtYkZlYXR1cmVzW2ZlYXRPYmoubGV2ZWxdID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhZENydW1iRmVhdHVyZXNbZmVhdE9iai5sZXZlbF1bcHJvcGVydGllc1tcImd1aWRcIiArIGZlYXRPYmoubGV2ZWxdXSA9IHByb3BlcnRpZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcblxuXHRmdW5jdGlvbiB1cGRhdGVCcmVhZENydW1icyhmZWF0T2JqLCBsZXZlbCkge1xuXHRcdC8vVXBkYXRlIFRoZSBCcmVhZGNydW1iIGRpc3BsYXlcblx0XHQvL0NsZWFyIGxvd2VyIGxldmVsIHNjb3BlIGl0ZW1zIGluIGNhc2Ugd2UndmUgem9vbWVkIG91dFxuXHRcdGZvciAodmFyIHggPSBsZXZlbDsgeCA8PSA1OyB4KyspIHtcblx0XHRcdC8vbnVsbCBvdXQgYW55IGxldmVsIHZhbHVlcyB0aGF0IGFyZSBMT1dFUiB0aGFuIHdoYXQgd2UncmUgY3VycmVudGx5IGxvb2tpbmcgYXRcblx0XHRcdCRzY29wZVtcImxldmVsXCIgKyB4XSA9IFwiXCI7XG5cdFx0XHQkc2NvcGVbXCJmZWF0XCIgKyB4XSA9IG51bGw7XG5cblx0XHRcdGlmKHggPT0gLTEpe1xuXHRcdFx0XHQkc2NvcGVbXCJsZXZlbGFyY1wiXSA9IGZlYXRPYmpbXCJuYW1lYXJjXCJdO1xuXHRcdFx0XHQkc2NvcGVbXCJmZWF0YXJjXCJdID0gZmVhdE9iajtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvL3VzaW5nIHRoZSByZXF1ZXN0ZWQgbGV2ZWwsIGRpZyBvdXQgdGhlIHByb3BlcnRpZXMgZm9yIHRoYXQgbGV2ZWwgYW5kIG9uZXMgYWJvdmUgaXRcblx0XHRmb3IgKHZhciBpID0gbGV2ZWw7IGkgPj0gLTE7IGktLSkge1xuXHRcdFx0aWYoaSA9PSAtMSl7XG5cdFx0XHRcdCRzY29wZVtcImxldmVsYXJjXCJdID0gZmVhdE9ialtcIm5hbWVhcmNcIl07XG5cdFx0XHRcdCRzY29wZVtcImZlYXRhcmNcIl0gPSBmZWF0T2JqO1xuXHRcdFx0fVxuXHRcdFx0JHNjb3BlW1wibGV2ZWxcIiArIGldID0gZmVhdE9ialtcIm5hbWVcIiArIGldO1xuXHRcdFx0JHNjb3BlW1wiZmVhdFwiICsgaV0gPSBmZWF0T2JqO1xuXHRcdH1cblx0fVxuXG4gICRzY29wZS56b29tVG9HVUlEID0gZnVuY3Rpb24gKGZlYXRPYmosIGxldmVsKSB7XG4gICAgLy9HaXZlbiBhIEdVSUQsIHpvb20gdG8gdGhlIGZlYXR1cmUuXG5cbiAgICAvL0dyYWIgdGhlIGZlYXR1cmUgZnJvbSB0aGUgVmVjdG9yUHJvdmlkZXIuXG4gICAgVmVjdG9yUHJvdmlkZXIuZmV0Y2hGZWF0dXJlKGZlYXRPYmpbXCJndWlkXCIgKyAobGV2ZWwgPj0gMCA/IGxldmVsIDogXCJhcmNcIildLCBsZXZlbCwgbnVsbCwgZnVuY3Rpb24gKGZlYXQpIHtcbiAgICAgIC8vTWFrZSBhIHRlbXAgZ2VvanNvbiBsYXllciBhbmQgYWRkIHRoZSBnZW9qc29uLlxuICAgICAgLy9UaGVuIGdyYWIgdGhlIGJvdW5kcyBmcm9tIGl0IGFuZCB6b29tIHRvIGl0LlxuXG4gICAgICB2YXIgZ2psID0gTC5nZW9Kc29uKGZlYXQuZ2VvbWV0cnkpO1xuICAgICAgJHNjb3BlLiRwYXJlbnQuem9vbVRvQm91bmRzKGdqbC5nZXRCb3VuZHMoKSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUuem9vbVRvV29ybGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGJvdW5kcyA9IEwubGF0TG5nQm91bmRzKEwubGF0TG5nKC01MCwtMTc5KSwgTC5sYXRMbmcoNTAsMTc5KSk7XG4gICAgJHNjb3BlLiRwYXJlbnQuem9vbVRvQm91bmRzKGJvdW5kcyk7XG4gIH07XG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IERhbmllbCBCYWFoIDxkYmFhaEBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDEyLzE4LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ1NwYXRpYWxWaWV3ZXInKS5jb250cm9sbGVyKCdDb3VudHJ5U2VsZWN0JywgZnVuY3Rpb24oJGh0dHAsICRzY29wZSwgSW5kaWFGYWN0b3J5LCBTZWN0b3JGYWN0b3J5LCBLZW55YUZhY3RvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVnYW5kYUZhY3RvcnksIEJhbmdsYWRlc2hGYWN0b3J5LCBUYW56YW5pYUZhY3RvcnksIE5pZ2VyaWFGYWN0b3J5KSB7XG4gICAgLy92YXIgU2VsZWN0Q291bnRyeSA9IHtcbiAgICAvLyAgICBkZWZhdWx0OidJbmRpYScsXG4gICAgLy8gICAgY291bnRyeU5hbWVzOiBbJ0JhbmdsYWRlc2gnLCdVZ2FuZGEnLCdLZW55YScsJ05pZ2VyaWEnLCdUYW56YW5pYScsJ0luZGlhJ11cbiAgICAvL307XG4gICAgLy9cbiAgICAvL3ZhciBuYW1lcyA9IFNlbGVjdENvdW50cnkuY291bnRyeU5hbWVzO1xuICAgIC8vXG4gICAgLy8kc2NvcGUuc2VsZWN0aW9uID0gU2VsZWN0Q291bnRyeS5kZWZhdWx0O1xuICAgIC8vU2VjdG9yRmFjdG9yeS5zZWxlY3RlZENvdW50cnkgPSAkc2NvcGUuc2VsZWN0aW9uO1xuICAgIC8vXG4gICAgLy8vL1VzZXJzIFNlbGVjdGVkIENvdW50cnlcbiAgICAvLyRzY29wZS5jaG9vc2VDb3VudHJ5ID0gZnVuY3Rpb24oc2VsZWN0ZWQpe1xuICAgIC8vICAgICRzY29wZS5zZWxlY3Rpb24gPSBzZWxlY3RlZDtcbiAgICAvLyAgICBTZWN0b3JGYWN0b3J5LnNlbGVjdGVkQ291bnRyeSA9ICRzY29wZS5zZWxlY3Rpb247XG4gICAgLy8gICAgLy9TZWN0b3JGYWN0b3J5LnNldENvdW50cnkoJHNjb3BlLnNlbGVjdGlvbik7XG4gICAgLy99O1xuICAgIC8vXG4gICAgLy8kc2NvcGUuem9vbVRvQ291bnRyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICBtYXAuc2V0VmlldyhbSW5kaWFGYWN0b3J5LkluZGlhLk1hcENlbnRlci5MYXRpdHVkZSxcbiAgICAvLyAgICAgICAgSW5kaWFGYWN0b3J5LkluZGlhLk1hcENlbnRlci5Mb25naXR1ZGVdLFxuICAgIC8vICAgICAgICBJbmRpYUZhY3RvcnkuSW5kaWEuTWFwWm9vbSk7XG4gICAgLy99O1xuICAgIC8vXG4gICAgLy8kc2NvcGUuc3dpdGNoQ291bnRyeSA9IGZ1bmN0aW9uIChzZWxlY3RlZCkge1xuICAgIC8vICAgIHZhciBjbmFtZSA9IHNlbGVjdGVkO1xuICAgIC8vICAgIGNvbnNvbGUubG9nKGNuYW1lKTtcbiAgICAvL1xuICAgIC8vICAgIGlmKGNuYW1lICE9PSBcIkluZGlhXCIpIHtcbiAgICAvLyAgICAgICAgbWFwLnNldFZpZXcoW2V2YWwoY25hbWUgKyBcIkZhY3RvcnlcIilbY25hbWVdLk1hcENlbnRlci5MYXRpdHVkZSxcbiAgICAvLyAgICAgICAgICAgICAgICBldmFsKGNuYW1lICsgXCJGYWN0b3J5XCIpW2NuYW1lXS5NYXBDZW50ZXIuTG9uZ2l0dWRlXSxcbiAgICAvLyAgICAgICAgICAgIGV2YWwoY25hbWUgKyBcIkZhY3RvcnlcIilbY25hbWVdLk1hcFpvb20pO1xuICAgIC8vICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgIG1hcC5zZXRWaWV3KFtldmFsKGNuYW1lICsgXCJGYWN0b3J5XCIpW2NuYW1lXS5NYXBDZW50ZXIuTGF0aXR1ZGUsXG4gICAgLy8gICAgICAgICAgICAgICAgZXZhbChjbmFtZSArIFwiRmFjdG9yeVwiKVtjbmFtZV0uTWFwQ2VudGVyLkxvbmdpdHVkZSxcbiAgICAvLyAgICAgICAgICAgIGV2YWwoY25hbWUgKyBcIkZhY3RvcnlcIilbY25hbWVdLk1hcFpvb21dKTtcbiAgICAvLyAgICB9XG4gICAgLy99O1xuICAgIC8vXG4gICAgLy8vLyBBbGlhcyBmb3IgU2VsZWN0ZWQgQ291bnRyeSBvYmplY3RcbiAgICAvL3RoaXMuY291bnRyeSA9IFNlbGVjdENvdW50cnk7XG5cbn0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNC85LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ1NwYXRpYWxWaWV3ZXInKS5jb250cm9sbGVyKCdEZXRhaWxzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkaHR0cCwgU2VjdG9yRmFjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb251dHMsICRmaWx0ZXIsIEluZGlhRmFjdG9yeSwgS2VueWFGYWN0b3J5LCBOaWdlcmlhRmFjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDSUNPRmlsdGVyRmFjdG9yeSwgSGVhbHRoRmlsdGVyRmFjdG9yeSwgQWdGaWx0ZXJGYWN0b3J5LCBVZ2FuZGFGYWN0b3J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpYnJhcnlGaWx0ZXJGYWN0b3J5KSB7XG4gICAgJHNjb3BlLmRldGFpbHMgPSB7fTtcbiAgICAkc2NvcGUuYWN0aXZlaWR4ID0gMDtcbiAgICAkc2NvcGUuY3VycmVudERldGFpbGl0ZW0gPSB7fTtcbiAgICAkc2NvcGUuQUxMZGV0YWlscyA9IFtdO1xuICAgICRzY29wZS5kZXRhaWxzbGVuZ3RoID0gMDtcbiAgICAkc2NvcGUuQWxsRmVhdHVyZUxheWVycyA9IFtdO1xuICAgICRzY29wZS5hbGxTZWN0b3JzID0gW107XG4gICAgdmFyIE1hcEJ1aWxkZXIgPSB7fTtcblxuICAgICRzY29wZS50b29sVGlwRGl2ID0gbnVsbDtcblxuICAgICRzY29wZS5uYXZUYWIgPSAnY291bnRyeW92ZXJ2aWV3JztcblxuICAgICRzY29wZS5zYWxlc2ZvcmNlVXJsID0gY29uZmlnLnNhbGVzZm9yY2VVcmw7XG4gICAgJHNjb3BlLlNob3dBbGxTZWN0b3JzID0gZmFsc2U7XG5cbiAgICAkc2NvcGUuZ2V0U2VsZWN0ZWRTZWN0b3IgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8gd2F0Y2ggZm9yIGNoYW5nZSBpbiBzZWN0b3IsIG5vdCB0YWJcbiAgICAgICAgaWYgKCRzY29wZS5uYXZUYWIgIT09ICdjb3VudHJ5b3ZlcnZpZXcnKSB7XG4gICAgICAgICAgICAkc2NvcGUudGl0bGUgPSAkc2NvcGUuc2VsZWN0ZWRTZWN0b3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkc2NvcGUudGl0bGUgPSBcIk92ZXJ2aWV3IC0gQmloYXIgJiBVdHRhciBQcmFkZXNoXCI7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKCRzY29wZS5zZWxlY3RlZFNlY3Rvcikge1xuICAgICAgICAgICAgY2FzZSAnQWdyaWN1bHR1cmUnOlxuICAgICAgICAgICAgICAgIGlmKCRzY29wZS5zZWxlY3Rpb24gPT0gJ0luZGlhJyl7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5BUERhdGEgPSBBZ0ZpbHRlckZhY3RvcnkuQWdfQ291bnRzO1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc2VjdG9ydG90YWwgPSBBZ0ZpbHRlckZhY3RvcnkuQWdUb3RhbDtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkFQQ2hhcnQoQWdGaWx0ZXJGYWN0b3J5LkFnX0xhbmRVc2VfQ291bnRzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZigkc2NvcGUuc2VsZWN0aW9uID09ICdVZ2FuZGEnKXtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkFQRGF0YSA9IFVnYW5kYUZhY3RvcnkuQWdfQ291bnRzO1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc2VjdG9ydG90YWwgPSBVZ2FuZGFGYWN0b3J5LkFnVG90YWw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDSUNPUyc6XG4gICAgICAgICAgICBjYXNlICdGaW5hbmNpYWwgU2VydmljZSc6XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgd2hpY2ggY291bnRyeSBpcyBzZWxlY3RlZFxuICAgICAgICAgICAgICAgIGlmKCRzY29wZS5zZWxlY3Rpb24gPT0gJ0luZGlhJyl7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5BUERhdGEgPSBDSUNPRmlsdGVyRmFjdG9yeS5DSUNPc19Db3VudHM7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zZWN0b3J0b3RhbCA9IENJQ09GaWx0ZXJGYWN0b3J5LkNJQ09zVG90YWw7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5BUENoYXJ0KENJQ09GaWx0ZXJGYWN0b3J5LkNJQ09zX0xhbmRVc2VfQ291bnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoJHNjb3BlLnNlbGVjdGlvbiA9PSAnS2VueWEnKXtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkFQRGF0YSA9IEtlbnlhRmFjdG9yeS5DSUNPc19Db3VudHM7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zZWN0b3J0b3RhbCA9IEtlbnlhRmFjdG9yeS5DSUNPc1RvdGFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZigkc2NvcGUuc2VsZWN0aW9uID09ICdOaWdlcmlhJyl7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5BUERhdGEgPSBOaWdlcmlhRmFjdG9yeS5DSUNPc19Db3VudHM7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zZWN0b3J0b3RhbCA9IE5pZ2VyaWFGYWN0b3J5LkNJQ09zVG90YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCRzY29wZS5zZWxlY3Rpb24gPT0gJ1VnYW5kYScpe1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuQVBEYXRhID0gVWdhbmRhRmFjdG9yeS5DSUNPc19Db3VudHM7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zZWN0b3J0b3RhbCA9IFVnYW5kYUZhY3RvcnkuQ0lDT3NUb3RhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdIZWFsdGgnOlxuICAgICAgICAgICAgICAgICRzY29wZS5BUERhdGEgPSBIZWFsdGhGaWx0ZXJGYWN0b3J5LkhlYWx0aF9Db3VudHM7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnNlY3RvcnRvdGFsID0gSGVhbHRoRmlsdGVyRmFjdG9yeS5IZWFsdGhUb3RhbDtcbiAgICAgICAgICAgICAgICAkc2NvcGUuQVBDaGFydChIZWFsdGhGaWx0ZXJGYWN0b3J5LkhlYWx0aF9MYW5kVXNlX0NvdW50cyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdMaWJyYXJ5JzpcbiAgICAgICAgICAgICAgICAkc2NvcGUuQVBEYXRhID0gTGlicmFyeUZpbHRlckZhY3RvcnkuTGlicmFyeV9Db3VudHM7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnNlY3RvcnRvdGFsID0gTGlicmFyeUZpbHRlckZhY3RvcnkuTGlicmFyeVRvdGFsO1xuICAgICAgICAgICAgICAgICRzY29wZS5BUENoYXJ0KExpYnJhcnlGaWx0ZXJGYWN0b3J5LkxpYnJhcnlfTGFuZFVzZV9Db3VudHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnRWR1Y2F0aW9uJzpcbiAgICAgICAgICAgICAgICAkc2NvcGUuQVBEYXRhID0gVWdhbmRhRmFjdG9yeS5FZHVjYXRpb25fQ291bnRzO1xuICAgICAgICAgICAgICAgICRzY29wZS5zZWN0b3J0b3RhbCA9IFVnYW5kYUZhY3RvcnkuRWR1Y2F0aW9uVG90YWw7XG4gICAgICAgICAgICAgICAgLy8kc2NvcGUuQVBDaGFydChMaWJyYXJ5RmlsdGVyRmFjdG9yeS5MaWJyYXJ5X0xhbmRVc2VfQ291bnRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYoJHNjb3BlLnNlbGVjdGlvbiA9PSAnSW5kaWEnKXtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkFQRGF0YSA9IENJQ09GaWx0ZXJGYWN0b3J5LkNJQ09zX0NvdW50cztcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnNlY3RvcnRvdGFsID0gQ0lDT0ZpbHRlckZhY3RvcnkuQ0lDT3NUb3RhbDtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkFQQ2hhcnQoQ0lDT0ZpbHRlckZhY3RvcnkuQ0lDT3NfTGFuZFVzZV9Db3VudHMpO1xuXG4gICAgICAgICAgICAgICAgfSBpZigkc2NvcGUuc2VsZWN0aW9uID09ICdLZW55YScpe1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuQVBEYXRhID0gQ0lDT0ZpbHRlckZhY3RvcnkuQ0lDT3NfQ291bnRzX0tlbnlhO1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc2VjdG9ydG90YWwgPSBDSUNPRmlsdGVyRmFjdG9yeS5DSUNPc1RvdGFsX0tlbnlhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyRzY29wZS5BUERhdGEgPSBDSUNPRmlsdGVyRmFjdG9yeS5DSUNPc19Db3VudHM7XG4gICAgICAgICAgICAgICAgLy8kc2NvcGUuc2VjdG9ydG90YWwgPSBDSUNPRmlsdGVyRmFjdG9yeS5DSUNPc1RvdGFsO1xuICAgICAgICAgICAgICAgIC8vJHNjb3BlLkFQQ2hhcnQoQ0lDT0ZpbHRlckZhY3RvcnkuQ0lDT3NfTGFuZFVzZV9Db3VudHMpO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjYXNlOiBkZWZhdWx0XCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFdhdGNoIGZvciBjaGFuZ2UgaW4gc2VsZWN0ZWQgU2VjdG9yXG4gICAgJHNjb3BlLiR3YXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gU2VjdG9yRmFjdG9yeS5hbGxTZWN0b3JzO1xuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkc2NvcGUuYWxsU2VjdG9ycyA9IFNlY3RvckZhY3RvcnkuYWxsU2VjdG9ycztcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICAvL1dhdGNoIGZvciBjaGFuZ2UgaW4gY291bnRyeVxuICAgICRzY29wZS4kd2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gU2VjdG9yRmFjdG9yeS5zZWxlY3RlZENvdW50cnk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkc2NvcGUuc2VsZWN0aW9uID0gU2VjdG9yRmFjdG9yeS5zZWxlY3RlZENvdW50cnk7XG4gICAgICAgICRzY29wZS5nZXRTZWxlY3RlZFNlY3RvcigpO1xuICAgICAgICBzd2l0Y2ggKCRzY29wZS5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ0luZGlhJzpcbiAgICAgICAgICAgICAgICAkc2NvcGUuUXVpY2tTdGF0cyA9IEluZGlhRmFjdG9yeS5JbmRpYS5RdWlja1N0YXRzO1xuICAgICAgICAgICAgICAgICRzY29wZS50aXRsZSA9IFwiT3ZlcnZpZXcgLSBCaWhhciAmIFV0dGFyIFByYWRlc2hcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0tlbnlhJzpcbiAgICAgICAgICAgICAgICAkc2NvcGUuUXVpY2tTdGF0cyA9IEtlbnlhRmFjdG9yeS5LZW55YS5RdWlja1N0YXRzO1xuICAgICAgICAgICAgICAgICRzY29wZS50aXRsZSA9IFwiT3ZlcnZpZXcgLSBLZW55YVwiO1xuICAgICAgICAgICAgICAgICRzY29wZS5TZWN0b3JUeXBlcyA9IFsnRmluYW5jaWFsIFNlcnZpY2UnXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ05pZ2VyaWEnOlxuICAgICAgICAgICAgICAgICRzY29wZS5RdWlja1N0YXRzID0gTmlnZXJpYUZhY3RvcnkuTmlnZXJpYS5RdWlja1N0YXRzO1xuICAgICAgICAgICAgICAgICRzY29wZS50aXRsZSA9IFwiT3ZlcnZpZXcgLSBOaWdlcmlhXCI7XG4gICAgICAgICAgICAgICAgJHNjb3BlLlNlY3RvclR5cGVzID0gWydGaW5hbmNpYWwgU2VydmljZSddO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVWdhbmRhJzpcbiAgICAgICAgICAgICAgICAkc2NvcGUudGl0bGUgPSBcIk92ZXJ2aWV3IC0gVWdhbmRhXCI7XG4gICAgICAgICAgICAgICAgJHNjb3BlLlF1aWNrU3RhdHMgPSBVZ2FuZGFGYWN0b3J5LlVnYW5kYS5RdWlja1N0YXRzO1xuICAgICAgICAgICAgICAgICRzY29wZS5TZWN0b3JUeXBlcyA9IFsnRmluYW5jaWFsIFNlcnZpY2UnLCdBZ3JpY3VsdHVyZScsICdFZHVjYXRpb24nXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgJHNjb3BlLlF1aWNrU3RhdHMgPSBJbmRpYUZhY3RvcnkuSW5kaWEuUXVpY2tTdGF0cztcbiAgICAgICAgICAgICAgICAkc2NvcGUudGl0bGUgPSBcIk92ZXJ2aWV3IC0gQmloYXIgJiBVdHRhciBQcmFkZXNoXCI7XG4gICAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgJHNjb3BlLkFQQ2hhcnQgPSBmdW5jdGlvbiAoc2VjdG9yKSB7XG4gICAgICAgIC8vQ2xlYXIgb2xkIG9uZXNcbiAgICAgICAgJChcIiNkM0NvbnRhaW5lclwiKS5odG1sKFwiXCIpO1xuXG4gICAgICAgIGlmICghJHNjb3BlLnRvb2xUaXBEaXYpIHtcbiAgICAgICAgICAgICRzY29wZS50b29sVGlwRGl2ID0gZDMuc2VsZWN0KFwiI1NpdGVXcmFwcGVyXCIpLmFwcGVuZChcImRpdlwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0b29sdGlwXCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtYXJnaW4gPSB7dG9wOiAyMCwgcmlnaHQ6IDIwLCBib3R0b206IDI2MCwgbGVmdDogMjAwfSxcbiAgICAgICAgICAgIHdpZHRoID0gNjUwIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQsXG4gICAgICAgICAgICBoZWlnaHQgPSA2MDAgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuICAgICAgICB2YXIgeDAgPSBkMy5zY2FsZS5vcmRpbmFsKClcbiAgICAgICAgICAgIC5yYW5nZVJvdW5kQmFuZHMoWzAsIHdpZHRoXSwgLjEpO1xuXG4gICAgICAgIHZhciB4MSA9IGQzLnNjYWxlLm9yZGluYWwoKTtcblxuICAgICAgICB2YXIgeSA9IGQzLnNjYWxlLmxpbmVhcigpXG4gICAgICAgICAgICAucmFuZ2UoW2hlaWdodCwgMF0pO1xuXG4gICAgICAgIHZhciBjb2xvciA9IGQzLnNjYWxlLm9yZGluYWwoKVxuICAgICAgICAgICAgLnJhbmdlKFtcIiM5OGFiYzVcIiwgXCIjOGE4OWE2XCIsIFwiIzdiNjg4OFwiLCBcIiM2YjQ4NmJcIiwgXCIjYTA1ZDU2XCIsIFwiI2QwNzQzY1wiLCBcIiNmZjhjMDBcIl0pO1xuXG4gICAgICAgIHZhciB4QXhpcyA9IGQzLnN2Zy5heGlzKClcbiAgICAgICAgICAgIC5zY2FsZSh4MClcbiAgICAgICAgICAgIC5vcmllbnQoXCJib3R0b21cIik7XG5cbiAgICAgICAgdmFyIHlBeGlzID0gZDMuc3ZnLmF4aXMoKVxuICAgICAgICAgICAgLnNjYWxlKHkpXG4gICAgICAgICAgICAub3JpZW50KFwibGVmdFwiKVxuICAgICAgICAgICAgLnRpY2tGb3JtYXQoZDMuZm9ybWF0KFwiLjJzXCIpKTtcblxuICAgICAgICB2YXIgc3ZnID0gZDMuc2VsZWN0KFwiI2QzQ29udGFpbmVyXCIpLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4gICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxuICAgICAgICB2YXIgbGFuZFVzZVR5cGVzID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWN0b3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChsYW5kVXNlVHlwZXMuaW5jbHVkZXMoc2VjdG9yW2ldLmxhbmRfdXNlKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxhbmRVc2VUeXBlcy5wdXNoKHNlY3RvcltpXS5sYW5kX3VzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL0Fsd2F5cyByZWFycmFuZ2UgYXJyYXkuXG4gICAgICAgIC8vTW92ZSBVcmJhbiB0byAxc3Qgc2xvdFxuICAgICAgICAvL1RoZW4gUnVyYWwsIHRoZW4gd2hhdGV2ZXIgZWxzZVxuICAgICAgICB2YXIgZ29hbCA9IFsnVXJiYW4nLCAnUnVyYWwnXSxcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgaG9sZGVyO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBnbCA9IGdvYWwubGVuZ3RoOyBpIDwgZ2w7IGkrKykge1xuICAgICAgICAgICAgaW5kZXggPSBsYW5kVXNlVHlwZXMuaW5kZXhPZihnb2FsW2ldKTtcbiAgICAgICAgICAgIGhvbGRlciA9IGxhbmRVc2VUeXBlcy5zcGxpY2UoaW5kZXgsIDEpWzBdO1xuICAgICAgICAgICAgbGFuZFVzZVR5cGVzLnNwbGljZShpLCAwLCBob2xkZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNpY29UeXBlcyA9IFtdOyAvL0dldCB1bmlxdWUgbGlzdCBvZiBjaWNvIHR5cGVzXG4gICAgICAgIHZhciBjaWNvVHlwZXNPYmplY3QgPSB7fTsgLy9HZXQgdW5pcXVlIGxpc3Qgb2YgY2ljbyB0eXBlc1xuICAgICAgICB2YXIgbWF4Q291bnRzID0gW107IC8va2VlcCB0aGUgY2ljbyBjb3VudHMgaGVyZS5cbiAgICAgICAgLy9mb3IgKHZhciBpPTA7aTxzZWN0b3IubGVuZ3RoO2krKyl7XG4gICAgICAgIC8vICAgIGlmICghY2ljb1R5cGVzT2JqZWN0W3NlY3RvcltpXS50eXBlXSkge1xuICAgICAgICAvLyAgICAgICAgY2ljb1R5cGVzLnB1c2goc2VjdG9yW2ldLnR5cGUpO1xuICAgICAgICAvLyAgICAgICAgY2ljb1R5cGVzT2JqZWN0W3NlY3RvcltpXS50eXBlXSA9IHsgbmFtZTogc2VjdG9yW2ldLnR5cGUsIGNvdW50czogW10gfTtcbiAgICAgICAgLy8gICAgfVxuICAgICAgICAvL31cblxuICAgICAgICBzZWN0b3IuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKCFjaWNvVHlwZXNPYmplY3RbaXRlbS50eXBlXSkge1xuICAgICAgICAgICAgICAgIGNpY29UeXBlcy5wdXNoKGl0ZW0udHlwZSk7XG4gICAgICAgICAgICAgICAgY2ljb1R5cGVzT2JqZWN0W2l0ZW0udHlwZV0gPSB7bmFtZTogaXRlbS50eXBlLCBjb3VudHM6IFtdfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9HZXQgbGlzdCBvZiBjb3VudHMgYnkgY2ljbyB0eXBlXG4gICAgICAgIGNpY29UeXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpZHgpIHtcbiAgICAgICAgICAgIHNlY3Rvci5mb3JFYWNoKGZ1bmN0aW9uIChjaXRlbSwgaXhkeCkge1xuICAgICAgICAgICAgICAgIGlmIChjaXRlbS50eXBlID09IGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy9JZiBpdCdzIGEgbWF0Y2gsIGFkZCB0aGUgY291bnQgdG8gdGhlIGFycmF5XG4gICAgICAgICAgICAgICAgICAgIGNpY29UeXBlc09iamVjdFtpdGVtXS5jb3VudHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBjaXRlbS5sYW5kX3VzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjaXRlbS5jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmRVc2U6IGNpdGVtLmxhbmRfdXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgRmVhdHVyZVR5cGU6IGNpdGVtLnR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIG1heENvdW50cy5wdXNoKCtjaXRlbS5jb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHgwLmRvbWFpbihjaWNvVHlwZXMubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfSkpOyAvL0dldCB4IGF4aXMgdmFsdWVzIChDSUNPIFR5cGUpXG4gICAgICAgIHgxLmRvbWFpbihsYW5kVXNlVHlwZXMpLnJhbmdlUm91bmRCYW5kcyhbMCwgeDAucmFuZ2VCYW5kKCldKTtcbiAgICAgICAgeS5kb21haW4oWzAsIGQzLm1heChtYXhDb3VudHMpXSk7XG5cbiAgICAgICAgLy9YQXhpcyBMYWJlbHNcbiAgICAgICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4IGF4aXNcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcbiAgICAgICAgICAgIC5jYWxsKHhBeGlzKVxuICAgICAgICAgICAgLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAgICAgICAuYXR0cihcImR4XCIsIFwiLS44ZW1cIilcbiAgICAgICAgICAgIC5hdHRyKFwiZHlcIiwgXCIuMTVlbVwiKVxuICAgICAgICAgICAgLy8uc2VsZWN0QWxsKFwiLnRpY2sgdGV4dFwiKVxuICAgICAgICAgICAgLy8uY2FsbCh3cmFwLCB4MC5yYW5nZUJhbmQoKSk7XG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcInJvdGF0ZSgtNDUpXCJcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieSBheGlzXCIpXG4gICAgICAgICAgICAuY2FsbCh5QXhpcylcbiAgICAgICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgNilcbiAgICAgICAgICAgIC5hdHRyKFwiZHlcIiwgXCIuNzFlbVwiKVxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcbiAgICAgICAgICAgIC50ZXh0KFwiIyBBY2Nlc3MgUG9pbnRzXCIpO1xuXG4gICAgICAgIHZhciBzdGF0ZSA9IHN2Zy5zZWxlY3RBbGwoXCIuc3RhdGVcIilcbiAgICAgICAgICAgIC5kYXRhKGNpY29UeXBlcylcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJzdGF0ZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyAoeDAoZCkgKyAxMCkgKyBcIiwwKVwiO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHJlY3QgPSBzdGF0ZS5zZWxlY3RBbGwoXCJyZWN0XCIpXG4gICAgICAgICAgICAuZGF0YShmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaWNvVHlwZXNPYmplY3RbZF0uY291bnRzO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgeDEucmFuZ2VCYW5kKCkpXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geDEoZC5sYW5kVXNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geShkLnZhbHVlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBoZWlnaHQgLSB5KGQudmFsdWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sb3IoZC5sYW5kVXNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUudG9vbFRpcERpdi50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgLmR1cmF0aW9uKDIwMClcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAuOSk7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnRvb2xUaXBEaXYuaHRtbChcIjxzcGFuIGNsYXNzPSd0dExhbmRVc2UnPlwiICsgZC5sYW5kVXNlICsgXCI6PC9zcGFuPiA8YnIvPjxzcGFuIGNsYXNzPSdkM1Rvb2x0aXAnPlwiICsgJGZpbHRlcignbnVtYmVyJykoZC52YWx1ZSwgMCkgKyBcIjwvc3Bhbj48YnI+IFwiICsgZC5GZWF0dXJlVHlwZSlcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwibGVmdFwiLCAoZDMuZXZlbnQubGF5ZXJYICsgMTApICsgXCJweFwiKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgKGQzLmV2ZW50LmxheWVyWSAtIDYwKSArIFwicHhcIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnRvb2xUaXBEaXYuc3R5bGUoXCJsZWZ0XCIsIChkMy5ldmVudC5sYXllclggKyAxMCkgKyBcInB4XCIpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcInRvcFwiLCAoZDMuZXZlbnQubGF5ZXJZIC0gNjApICsgXCJweFwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICRzY29wZS50b29sVGlwRGl2LnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAuZHVyYXRpb24oNTAwKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGxlZ2VuZCA9IHN2Zy5zZWxlY3RBbGwoXCIubGVnZW5kXCIpXG4gICAgICAgICAgICAuZGF0YShsYW5kVXNlVHlwZXMuc2xpY2UoKSlcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsZWdlbmRcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKC0yMCxcIiArIGkgKiAyMCArIFwiKVwiO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGVnZW5kLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCB3aWR0aCAtIDE4KVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCAxOClcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDE4KVxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBjb2xvcik7XG5cbiAgICAgICAgbGVnZW5kLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCB3aWR0aCAtIDI0KVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIDkpXG4gICAgICAgICAgICAuYXR0cihcImR5XCIsIFwiLjM1ZW1cIilcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICRzY29wZS5zaG93UmZhID0gZnVuY3Rpb24gKGRldGFpbHMsIHZhbHVlKSB7XG4gICAgICAgIGRldGFpbHMuc2hvd1JmYSA9IHRydWU7XG4gICAgICAgIHZhbHVlLnNob3dSZmEgPSB0cnVlO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGlkZVJmYSA9IGZ1bmN0aW9uIChkZXRhaWxzLCB2YWx1ZSkge1xuICAgICAgICBkZXRhaWxzLnNob3dSZmEgPSBmYWxzZTtcbiAgICAgICAgdmFsdWUuc2hvd1JmYSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICAkc2NvcGUuc2hvd0luZGljYXRvcnMgPSBmdW5jdGlvbiAoZGV0YWlscywgdmFsdWUpIHtcbiAgICAgICAgZGV0YWlscy5zaG93SW5kaWNhdG9ycyA9IHRydWU7XG4gICAgICAgIHZhbHVlLnNob3dJbmRpY2F0b3JzID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhpZGVJbmRpY2F0b3JzID0gZnVuY3Rpb24gKGRldGFpbHMsIHZhbHVlKSB7XG4gICAgICAgIGRldGFpbHMuc2hvd0luZGljYXRvcnMgPSBmYWxzZTtcbiAgICAgICAgdmFsdWUuc2hvd0luZGljYXRvcnMgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnNob3dSaXNrcyA9IGZ1bmN0aW9uIChkZXRhaWxzLCB2YWx1ZSkge1xuICAgICAgICBkZXRhaWxzLnNob3dSaXNrcyA9IHRydWU7XG4gICAgICAgIHZhbHVlLnNob3dSaXNrcyA9IHRydWU7XG4gICAgfTtcblxuICAgICRzY29wZS5oaWRlUmlza3MgPSBmdW5jdGlvbiAoZGV0YWlscywgdmFsdWUpIHtcbiAgICAgICAgZGV0YWlscy5zaG93Umlza3MgPSBmYWxzZTtcbiAgICAgICAgdmFsdWUuc2hvd1Jpc2tzID0gZmFsc2U7XG4gICAgfTtcblxuICAgICRzY29wZS5zaG93U3RhdHVzZXMgPSBmdW5jdGlvbiAoZGV0YWlscywgdmFsdWUpIHtcbiAgICAgICAgZGV0YWlscy5zaG93U3RhdHVzZXMgPSB0cnVlO1xuICAgICAgICB2YWx1ZS5zaG93U3RhdHVzZXMgPSB0cnVlO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGlkZVN0YXR1c2VzID0gZnVuY3Rpb24gKGRldGFpbHMsIHZhbHVlKSB7XG4gICAgICAgIGRldGFpbHMuc2hvd1N0YXR1c2VzID0gZmFsc2U7XG4gICAgICAgIHZhbHVlLnNob3dTdGF0dXNlcyA9IGZhbHNlO1xuICAgIH07XG5cbiAgICAkc2NvcGUubGFiZWwgPSBmdW5jdGlvbiAoa2V5KSB7XG5cbiAgICAgICAgdmFyIGRlc2MgPSBrZXk7XG5cbiAgICAgICAgLy8gZGlzYXN0ZXJcbiAgICAgICAgaWYgKCRzdGF0ZVBhcmFtcy50aGVtZSA9PT0gJ2Rpc2FzdGVyJykge1xuXG4gICAgICAgICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkRpc2FzdGVyX19jW2tleV0pIHtcbiAgICAgICAgICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkRpc2FzdGVyX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0pIHtcbiAgICAgICAgICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkRpc2FzdGVyX0xvY2F0aW9uX19jW2tleV0pIHtcbiAgICAgICAgICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkRpc2FzdGVyX0xvY2F0aW9uX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlJlcXVlc3RfRm9yX0Fzc2lzdGFuY2VfX2Nba2V5XSkge1xuICAgICAgICAgICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guUmVxdWVzdF9Gb3JfQXNzaXN0YW5jZV9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlc2M7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb250ZXh0dWFsIGxheWVyXG4gICAgICAgIGlmICgkc2NvcGUuY29udGV4dHVhbExheWVyKSB7XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoJHN0YXRlUGFyYW1zLnRoZW1lID09PSAncHJvamVjdFJpc2snKSB7XG4gICAgICAgICAgICAvLyBwcm9qZWN0XG4gICAgICAgICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XSkge1xuICAgICAgICAgICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldKSB7XG4gICAgICAgICAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5SaXNrX19jW2tleV0pIHtcbiAgICAgICAgICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlJpc2tfX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZXNjO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoJHN0YXRlUGFyYW1zLnRoZW1lID09PSAncHJvamVjdEhlYWx0aCcpIHtcbiAgICAgICAgICAgIC8vIHByb2plY3RcbiAgICAgICAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fY1trZXldKSB7XG4gICAgICAgICAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0pIHtcbiAgICAgICAgICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfRXZhbHVhdGlvbl9fY1trZXldKSB7XG4gICAgICAgICAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X0V2YWx1YXRpb25fX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZXNjO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcHJvamVjdFxuICAgICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XSkge1xuICAgICAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldKSB7XG4gICAgICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5JbmRpY2F0b3JfX2Nba2V5XSkge1xuICAgICAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5JbmRpY2F0b3JfX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkluZGljYXRvcl9WYWx1ZV9fY1trZXldKSB7XG4gICAgICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkluZGljYXRvcl9WYWx1ZV9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guTG9nZnJhbWVfRWxlbWVudF9fY1trZXldKSB7XG4gICAgICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkxvZ2ZyYW1lX0VsZW1lbnRfX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVzYztcblxuICAgIH07XG5cbiAgICAkc2NvcGUudG9vbHRpcCA9IGZ1bmN0aW9uIChrZXkpIHtcbi8vICAgIChzZkZpZWxkSGFzaFtrZXldLmlubGluZUhlbHBUZXh0IHx8ICcnKSArICcgRmllbGROYW1lOiAnICsga2V5XG5cbiAgICAgICAgdmFyIGRlc2MgPSAnJztcblxuICAgICAgICAvLyBkaXNhc3RlclxuICAgICAgICBpZiAoJHN0YXRlUGFyYW1zLnRoZW1lID09PSAnZGlzYXN0ZXInKSB7XG5cbiAgICAgICAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guRGlzYXN0ZXJfX2Nba2V5XSkge1xuICAgICAgICAgICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guRGlzYXN0ZXJfX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldKSB7XG4gICAgICAgICAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkRpc2FzdGVyX0xvY2F0aW9uX19jW2tleV0pIHtcbiAgICAgICAgICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkRpc2FzdGVyX0xvY2F0aW9uX19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guUmVxdWVzdF9Gb3JfQXNzaXN0YW5jZV9fY1trZXldKSB7XG4gICAgICAgICAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5SZXF1ZXN0X0Zvcl9Bc3Npc3RhbmNlX19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZXNjICsgJyBGaWVsZE5hbWU6ICcgKyBrZXk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb250ZXh0dWFsIGxheWVyXG4gICAgICAgIGlmICgkc2NvcGUuY29udGV4dHVhbExheWVyKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0ZpZWxkTmFtZTogJyArIGtleTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkc3RhdGVQYXJhbXMudGhlbWUgPT09ICdwcm9qZWN0UmlzaycpIHtcbiAgICAgICAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fY1trZXldKSB7XG4gICAgICAgICAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XSkge1xuICAgICAgICAgICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5SaXNrX19jW2tleV0pIHtcbiAgICAgICAgICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlJpc2tfX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlc2MgKyAnIEZpZWxkTmFtZTogJyArIGtleTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkc3RhdGVQYXJhbXMudGhlbWUgPT09ICdwcm9qZWN0SGVhbHRoJykge1xuICAgICAgICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jW2tleV0pIHtcbiAgICAgICAgICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldKSB7XG4gICAgICAgICAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfRXZhbHVhdGlvbl9fY1trZXldKSB7XG4gICAgICAgICAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X0V2YWx1YXRpb25fX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkZXNjICsgJyBGaWVsZE5hbWU6ICcgKyBrZXk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwcm9qZWN0XG4gICAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fY1trZXldKSB7XG4gICAgICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XSkge1xuICAgICAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5JbmRpY2F0b3JfX2Nba2V5XSkge1xuICAgICAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5JbmRpY2F0b3JfX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guSW5kaWNhdG9yX1ZhbHVlX19jW2tleV0pIHtcbiAgICAgICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guSW5kaWNhdG9yX1ZhbHVlX19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkxvZ2ZyYW1lX0VsZW1lbnRfX2Nba2V5XSkge1xuICAgICAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Mb2dmcmFtZV9FbGVtZW50X19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVzYyArICcgRmllbGROYW1lOiAnICsga2V5O1xuXG4gICAgfTtcblxuICAgIC8vSW5pdCBzZWxlY3RlZEZlYXR1cmVUaXRsZSBwcm9wZXJ0eVxuXG4gICAgLy8gQ0lDTyBjb25maWcgaGFzIGZpbHRlciBkYXRhIChuYW1lLHR5cGUsY291bnQsY29sb3IsemluZGV4KSBmb3IgZXZlcnkgc2VjdG9yXG4gICAgJHNjb3BlLkNJQ09jZmcgPSBDSUNPRmlsdGVyRmFjdG9yeS5DSUNPX0NvbmZpZztcblxuXG4gICAgLy8gU2V0IHNlY3RvciB0b3RhbCBvbiBwYWdlIGxvYWRcbiAgICAkc2NvcGUuJHdhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIENJQ09GaWx0ZXJGYWN0b3J5LkNJQ09zVG90YWw7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkc2NvcGUuc2VjdG9ydG90YWwgPSBDSUNPRmlsdGVyRmFjdG9yeS5DSUNPc1RvdGFsO1xuICAgIH0pO1xuXG4gICAgLy8gV2F0Y2ggZm9yIGNoYW5nZSBpbiByaWdodCBkZXRhaWxzIG5hdlRhYlxuICAgICRzY29wZS4kd2F0Y2goJ25hdlRhYicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCRzY29wZS5zZWxlY3Rpb24gPT0gJ0luZGlhJykge1xuICAgICAgICAgICAgaWYgKCRzY29wZS5uYXZUYWIgIT09ICdjb3VudHJ5b3ZlcnZpZXcnICYmICRzY29wZS5zZWxlY3RlZFNlY3RvciAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICRzY29wZS50aXRsZSA9ICRzY29wZS5zZWxlY3RlZFNlY3RvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpdGxlID0gXCJPdmVydmlldyAtIEJpaGFyICYgVXR0YXIgUHJhZGVzaFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9fSk7XG5cbiAgICAvLyBXYXRjaCBmb3IgY2hhbmdlIGluIHNlbGVjdGVkIFNlY3RvclxuXG4gICAgJHNjb3BlLiRvbignc2VsZWN0ZWRTZWN0b3InLCBmdW5jdGlvbiAoZXZlbnQsIGZlYXR1cmVMYXllcikge1xuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRTZWN0b3IgPSBTZWN0b3JGYWN0b3J5LlNlbGVjdGVkU2VjdG9yO1xuICAgICAgICAkc2NvcGUuZ2V0U2VsZWN0ZWRTZWN0b3IoKTtcbiAgICB9KTtcblxuICAgIC8vJHNjb3BlLiR3YXRjaChmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgcmV0dXJuIFNlY3RvckZhY3RvcnkuU2VsZWN0ZWRTZWN0b3I7XG4gICAgLy99LCBmdW5jdGlvbigpIHtcbiAgICAvLyAgICAkc2NvcGUuc2VsZWN0ZWRTZWN0b3IgPSBTZWN0b3JGYWN0b3J5LlNlbGVjdGVkU2VjdG9yO1xuICAgIC8vICAgICRzY29wZS5nZXRTZWxlY3RlZFNlY3RvcigpO1xuICAgIC8vfSk7XG5cbiAgICAkc2NvcGUudG9nZ2xlU2VjdG9yU2hvdyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICRzY29wZS5TaG93QWxsU2VjdG9ycyA9ICEkc2NvcGUuU2hvd0FsbFNlY3RvcnM7XG4gICAgfTtcblxuICAgICRzY29wZS50b2dnbGVTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZU5hbWUpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSAhPT0gc3RhdGVOYW1lID8gc3RhdGVOYW1lIDogJ21haW4nO1xuICAgICAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG4gICAgfTtcblxuICAgICRzY29wZS5pdGVtc0xpc3QgPSB0cnVlO1xuICAgICRzY29wZS5kZXRhaWxzID0gZmFsc2U7XG5cblxuICAgIC8vSW5pdGlhbGl6ZSB0aGUgZHVtbXkgcHJvamVjdC9kaXNhc3RlciBjbGljayByZXN1bHRzXG4gICAgJHNjb3BlLmdyb3VwaW5ncyA9IHt9O1xuXG4gICAgJHNjb3BlLmFsZXJ0VXNlclRvQ2xpY2sgPSB0cnVlO1xuXG4gICAgJHNjb3BlLiRvbignZGV0YWlscycsIGZ1bmN0aW9uIChldmVudCwgZmVhdHVyZUxheWVyKSB7XG5cbiAgICAgICAgJHNjb3BlLkFMTGRldGFpbHMgPSBbXTtcbiAgICAgICAgJHNjb3BlLkFsbEZlYXR1cmVMYXllcnMgPSBbXTtcbiAgICAgICAgJHNjb3BlLmFjdGl2ZWlkeCA9IDA7XG5cbiAgICAgICAgZmVhdHVyZUxheWVyLmZvckVhY2goZnVuY3Rpb24odil7XG4gICAgICAgICAgICB2LmZvckVhY2goZnVuY3Rpb24obCl7XG4gICAgICAgICAgICAgICAgJHNjb3BlLkFsbEZlYXR1cmVMYXllcnMucHVzaChsKTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuQUxMZGV0YWlscy5wdXNoKGwudnRmLnByb3BlcnRpZXMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHNjb3BlLmFsZXJ0VXNlclRvQ2xpY2sgPSBmYWxzZTtcblxuICAgICAgICAkc2NvcGUuZGV0YWlsc2xlbmd0aCA9ICRzY29wZS5BTExkZXRhaWxzLmxlbmd0aDtcblxuICAgICAgICBpZigkc2NvcGUuQUxMZGV0YWlscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkc2NvcGUub3BlblBhcmFtKCdkZXRhaWxzLXBhbmVsJyk7IC8vb3BlbiBkZXRhaWxzIHBhbmVsXG4gICAgICAgICAgICAkc2NvcGUubmF2VGFiID0gJ1BvaW50RGV0YWlscyc7XG5cbiAgICAgICAgICAgIGlmIChNYXBCdWlsZGVyLnNlbGVjdGVkQ29uZmV0dGkpIE1hcEJ1aWxkZXIuc2VsZWN0ZWRDb25mZXR0aS5kZXNlbGVjdCh0cnVlKTtcbiAgICAgICAgICAgICRzY29wZS5jdXJyZW50RGV0YWlsaXRlbSA9ICRzY29wZS5BTExkZXRhaWxzWzBdOyAvLyBmaXJzdCBpdGVtIHNob3duXG4gICAgICAgICAgICBNYXBCdWlsZGVyLnNlbGVjdGVkQ29uZmV0dGkgPSAkc2NvcGUuQWxsRmVhdHVyZUxheWVyc1swXS52dGY7XG4gICAgICAgICAgICBNYXBCdWlsZGVyLnNlbGVjdGVkQ29uZmV0dGkuc2VsZWN0KHRydWUpO1xuXG4gICAgICAgICAgICAkc2NvcGUucGhvdG91cmwgPSAkc2NvcGUuY3VycmVudERldGFpbGl0ZW0udXJsOyAvLyBnZXQgdXJsIGZyb20gZmlyc3QgaXRlbSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAvLyBzcGxpdCB0aGUgcGlwZSBzZXBlcmF0ZWQgdmFsdWVzXG4gICAgICAgICAgICBpZigkc2NvcGUuQUxMZGV0YWlsc1swXS5waG90b3MgIT0gbnVsbCkgJHNjb3BlLmN1cnJlbnREZXRhaWxpdGVtUGhvdG8gPSAkc2NvcGUuQUxMZGV0YWlsc1swXS5waG90b3Muc3BsaXQoXCJ8XCIpO1xuICAgICAgICAgICAgJHNjb3BlLmFjdGl2ZWlkeCA9ICgkc2NvcGUuYWN0aXZlaWR4ID49ICRzY29wZS5BTExkZXRhaWxzLmxlbmd0aC0xKSA/IDAgOiAkc2NvcGUuYWN0aXZlaWR4Kys7XG4gICAgICAgIH1cblxuICAgICAgICAkc2NvcGUuZmVhdHVyZSA9IGZlYXR1cmVMYXllci5mZWF0dXJlO1xuXG4gICAgICAgICRzY29wZS5yZXNpemVEZXRhaWxzUGFuZWwoKTtcbiAgICB9KTtcblxuICAgICRzY29wZS4kb24oJ3JvdXRlLXVwZGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNmX2lkID0gJHN0YXRlUGFyYW1zLnNmX2lkO1xuICAgICAgICAkc2NvcGUudGhlbWUgPSAkc3RhdGVQYXJhbXMudGhlbWU7XG4gICAgICAgIGlmICgkc2NvcGUuYWxlcnRVc2VyVG9DbGljayA9PT0gZmFsc2UpIHJldHVybjtcbiAgICAgICAgaWYgKHNmX2lkICYmIHR5cGVvZiBzZl9pZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhciB1cmwgPSBjb25maWcuY2h1YmJzUGF0aCgnc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1kb2Vjb3N0ZXh0c2VhcmNoJmZvcm1hdD1qc29uJnRleHQ9JykgKyBzZl9pZDtcbiAgICAgICAgICAgICRodHRwLmdldCh1cmwpLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3VsdCwgc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdFswXSkge1xuICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2RldGFpbHMnLCB7ZmVhdHVyZToge3Byb3BlcnRpZXM6IHJlc3VsdFswXX19KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJHNjb3BlLmNyZWF0ZURvbnV0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gdXNlcyBqcXVlcnkgdG8gcHV0IGRvbnV0IGluIGEgZGl2LlxuICAgICAgICBpZiAoJHNjb3BlLmdyb3VwaW5ncyAmJiAkc2NvcGUuZ3JvdXBpbmdzLlByb2plY3RzKSB7XG4gICAgICAgICAgICBEb251dHMuY3JlYXRlTGFiZWxEb251dCgkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fYy5zZWN0b3JfX2MucGlja2xpc3RWYWx1ZXMsICRzY29wZS5ncm91cGluZ3MuUHJvamVjdHMsICcjZGV0YWlscy1kb251dCcpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICRzY29wZS5tb3JlTGVzcyA9ICdNb3JlJztcblxuICAgICRzY29wZS50b2dnbGVNb3JlTGVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCRzY29wZS5tb3JlTGVzcyA9PT0gJ01vcmUnKSB7XG4gICAgICAgICAgICAkc2NvcGUubW9yZUxlc3MgPSAnTGVzcyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkc2NvcGUubW9yZUxlc3MgPSAnTW9yZSc7XG4gICAgICAgIH1cbiAgICAgICAgLy9SZXNpemU7XG4gICAgICAgICRzY29wZS5yZXNpemVEZXRhaWxzUGFuZWwoKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnNob3dEZXRhaWxzID0gZnVuY3Rpb24gKGl0ZW0sIHRoZW1lSXRlbXMsIGlkeCkge1xuXG4gICAgICAgICRzY29wZS5jdXJyZW50SXRlbSA9IGl0ZW07XG5cbiAgICAgICAgJHNjb3BlLnJlc2l6ZURldGFpbHNQYW5lbCgpO1xuICAgIH07XG5cbiAgICAkc2NvcGUubmV4dFRoZW1lSXRlbSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLyBpZiBhY3RpdmUgaXRlbSBpcyBsZW5ndGggb2YgZGV0YWlscyBhcnJheSwgcmVzZXQgdG8gemVybywgb3RoZXJ3aXNlIGFkZCAxXG4gICAgICAgICRzY29wZS5hY3RpdmVpZHggPSAoJHNjb3BlLmFjdGl2ZWlkeCA+PSAkc2NvcGUuQUxMZGV0YWlscy5sZW5ndGgtMSkgPyAwIDogKyskc2NvcGUuYWN0aXZlaWR4O1xuICAgICAgICAkc2NvcGUuY3VycmVudERldGFpbGl0ZW0gPSAkc2NvcGUuQUxMZGV0YWlsc1skc2NvcGUuYWN0aXZlaWR4XTsgLy8gY2hhbmdlIGN1cnJlbnQgaXRlbSB0byBhY3RpdmUgaW5kZXhcbiAgICAgICAgJHNjb3BlLnBob3RvdXJsID0gJHNjb3BlLmN1cnJlbnREZXRhaWxpdGVtLnVybDtcbiAgICAgICAgaWYoJHNjb3BlLkFMTGRldGFpbHNbJHNjb3BlLmFjdGl2ZWlkeF0ucGhvdG9zICE9IG51bGwpICRzY29wZS5jdXJyZW50RGV0YWlsaXRlbVBob3RvID0gJHNjb3BlLkFMTGRldGFpbHNbJHNjb3BlLmFjdGl2ZWlkeF0ucGhvdG9zLnNwbGl0KFwifFwiKTtcblxuICAgICAgICAkc2NvcGUuc2hvd0RldGFpbHMoJHNjb3BlLmN1cnJlbnREZXRhaWxpdGVtKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnByZXZUaGVtZUl0ZW0gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy9pZiBhY3RpdmUgaXRlbSBpcyBncmVhdGVyIHRoYW4gMCwgdGhlbiBzdWJ0cmFjdCB0aGUgaW5kZXgsIG90aGVyd2lzZSBnbyB0byBsYXN0IGluZGV4XG4gICAgICAgICRzY29wZS5hY3RpdmVpZHggPSAoJHNjb3BlLmFjdGl2ZWlkeCA+IDApID8gLS0kc2NvcGUuYWN0aXZlaWR4IDogJHNjb3BlLkFMTGRldGFpbHMubGVuZ3RoLTE7XG4gICAgICAgICRzY29wZS5jdXJyZW50RGV0YWlsaXRlbSA9ICRzY29wZS5BTExkZXRhaWxzWyRzY29wZS5hY3RpdmVpZHhdOyAvLyBjaGFuZ2UgY3VycmVudCBpdGVtIHRvIGFjdGl2ZSBpbmRleFxuICAgICAgICAkc2NvcGUucGhvdG91cmwgPSAkc2NvcGUuY3VycmVudERldGFpbGl0ZW0udXJsO1xuICAgICAgICBpZigkc2NvcGUuQUxMZGV0YWlsc1skc2NvcGUuYWN0aXZlaWR4XS5waG90b3MgIT0gbnVsbCkgJHNjb3BlLmN1cnJlbnREZXRhaWxpdGVtUGhvdG8gPSAkc2NvcGUuQUxMZGV0YWlsc1skc2NvcGUuYWN0aXZlaWR4XS5waG90b3Muc3BsaXQoXCJ8XCIpO1xuXG4gICAgICAgICRzY29wZS5zaG93RGV0YWlscygkc2NvcGUuY3VycmVudERldGFpbGl0ZW0pO1xuICAgIH07XG5cbiAgICAkc2NvcGUuc2hvd0xpc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRzY29wZS50aXRsZSA9ICRzY29wZS5mZWF0dXJlVGl0bGU7XG4gICAgICAgICRzY29wZS5pdGVtc0xpc3QgPSB0cnVlO1xuICAgICAgICAkc2NvcGUuZGV0YWlscyA9IGZhbHNlO1xuICAgIH07XG5cbiAgICAkc2NvcGUucmVzaXplRGV0YWlsc1BhbmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaGVpZ2h0ID0gJCgnI01hcEN0cmwnKS5oZWlnaHQoKSAtIDIwMDsgLy9NYWdpYyBOdW1iZXJcblxuICAgICAgICAvL2hlaWdodCBpcyB0aGUgdmFsdWUgdGhhdCB0aGUgZW50aXJlIGRldGFpbHMgcGFuZWwgc2hvdWxkIG5ldmVyIGV4Y2VlZC5cbiAgICAgICAgLy9XaXRoaW4gdGhlIHBhbmVsIGl0c2VsZiwgdGhlIGlubmVyIGNvbnRhaW5lciBuZWVkcyB0byBhZGp1c3QgaXRzIGhlaWdodCBiYXNlZCBvbiB0aGUgY29udGVudHMgb2YgdGhlIHBhbmVsLlxuICAgICAgICAvL1NvbWV0aW1lcywgdGhlcmUgYXJlIHRhYnMsIGFuZCBzb21ldGltZXMgdGhlIHByb2plY3QvZGlzYXN0ZXIgZGVzY3JpcHRpb24gY2FuIGJlIHF1aXRlIGxvbmcuXG4gICAgICAgIC8vSW4gdGhlc2UgY2FzZXMsIHRoZW4gaW5uZXJDb250YWluZXIgc2hvdWxkIHNocmluayB0byBmaXQgd2l0aGluIHRoZSBtYXgtaGVpZ2h0IG9mIHRoZSBvdXRlciBwYW5lbCAoaGVpZ2h0KVxuXG4gICAgICAgIC8vRmluZCB0aGUgdG9wIG9mIHRoZSBpbm5lckNvbnRhaW5lciwgYW5kIHN1YnRyYWN0IGZyb20gdGhlIG1heCBoZWlnaHQgb2YgdGhlIHBhbmVsLiAgVGhhdCdzIHdoYXQgdGhlIG1heC1oZWlnaHQgb2YgdGhlIGlubmVyIHBhbmVsIHNob3VsZCBiZVxuICAgICAgICB2YXIgaW5uZXJUb3AgPSAkKCcjRGV0YWlsc1BhbmVsIC5Jbm5lckNvbnRhaW5lcicpLnBvc2l0aW9uKCkudG9wO1xuICAgICAgICB2YXIgYm90dG9tSGVpZ2h0ID0gJChcIi5kZXRhaWxzLWJvdHRvbS1idXR0b25zLnB1bGwtcmlnaHRcIikuaGVpZ2h0KCk7XG5cbiAgICAgICAgJCgnI0RldGFpbHNQYW5lbCAuSW5uZXJDb250YWluZXIgJykuY3NzKFwibWF4LWhlaWdodFwiLCBoZWlnaHQgLSBpbm5lclRvcCAtIGJvdHRvbUhlaWdodCk7XG4gICAgfTtcblxuICAgIC8vQ29ubmVjdCB0aGUgbGF5b3V0IG9ucmVzaXplIGVuZCBldmVudFxuICAgIHdpbmRvdy5sYXlvdXQucGFuZXMuY2VudGVyLmJpbmQoXCJsYXlvdXRwYW5lb25yZXNpemVfZW5kXCIsICRzY29wZS5yZXNpemVEZXRhaWxzUGFuZWwpO1xuXG4gICAgLy9Gb3IgSW5pdC5cbiAgICAkc2NvcGUucmVzaXplRGV0YWlsc1BhbmVsKCk7XG5cbiAgICAkc2NvcGUuc2F2ZSA9IGZ1bmN0aW9uIChkYXRhLCBuYW1lKSB7XG4gICAgICAgIHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMik7XG4gICAgICAgIHZhciBibG9iID0gbmV3IEJsb2IoW2pzb25dLCB7dHlwZTogJ3RleHQvcGxhaW4nfSk7XG4gICAgICAgIHZhciBkb3dubG9hZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgdmFyIHVybCA9ICh3aW5kb3cud2Via2l0VVJMICE9IG51bGwgPyB3aW5kb3cud2Via2l0VVJMIDogd2luZG93LlVSTCk7XG4gICAgICAgIGRvd25sb2FkTGluay5ocmVmID0gdXJsLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgZG93bmxvYWRMaW5rLmRvd25sb2FkID0gbmFtZSB8fCAnZmVhdHVyZS5nZW9qc29uJztcbiAgICAgICAgZG93bmxvYWRMaW5rLmNsaWNrKCk7XG4gICAgfTtcblxuICAgICRzY29wZS4kd2F0Y2goJ2FjdGl2ZWlkeCcsZnVuY3Rpb24oKXtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdhY3RpdmVpZHgnLCB7cHJvcGVydGllczoge2luZGV4OiAkc2NvcGUuYWN0aXZlaWR4LHNlY3Rvcjokc2NvcGUuY3VycmVudERldGFpbGl0ZW0uc2VjdG9yfX0pO1xuXG4gICAgICAgIGlmKCRzY29wZS5BbGxGZWF0dXJlTGF5ZXJzICYmICRzY29wZS5BbGxGZWF0dXJlTGF5ZXJzLmxlbmd0aCA+IDApe1xuXG4gICAgICAgICAgICBNYXBCdWlsZGVyLnNlbGVjdGVkQ29uZmV0dGkgPSAkc2NvcGUuQWxsRmVhdHVyZUxheWVyc1skc2NvcGUuYWN0aXZlaWR4XS52dGY7XG5cbiAgICAgICAgICAgIGlmIChNYXBCdWlsZGVyLnNlbGVjdGVkQ29uZmV0dGkpIHtcbiAgICAgICAgICAgICAgICBNYXBCdWlsZGVyLnNlbGVjdGVkQ29uZmV0dGkubXZ0TGF5ZXIuY2xlYXJTZWxlY3RlZEZlYXR1cmVUaWxlcygpO1xuICAgICAgICAgICAgICAgIE1hcEJ1aWxkZXIuc2VsZWN0ZWRDb25mZXR0aS5zZWxlY3QodHJ1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKE1hcEJ1aWxkZXIucHJldmlvdXNseVNlbGVjdGVkQ29uZmV0dGkpIE1hcEJ1aWxkZXIucHJldmlvdXNseVNlbGVjdGVkQ29uZmV0dGkuZGVzZWxlY3QodHJ1ZSk7XG4gICAgICAgICAgICAgICAgTWFwQnVpbGRlci5wcmV2aW91c2x5U2VsZWN0ZWRDb25mZXR0aSA9IE1hcEJ1aWxkZXIuc2VsZWN0ZWRDb25mZXR0aTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBSeWFuIFdoaXRsZXlcbiAqICAgICAgIG9uIDYvNC8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdTcGF0aWFsVmlld2VyJykuY29udHJvbGxlcignRXhwb3J0Q3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJGh0dHAsICRzdGF0ZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgY29uc29sZS5sb2coJ0V4cG9ydEN0cmwnKTtcblxuICAgICRzY29wZS5leHBvcnQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICB9O1xuXG4gICAgJHNjb3BlLnJvdXRlVXJsID0gd2luZG93LmxvY2F0aW9uO1xuXG5cbiAgICAvKipcbiAgICAgKiBJZiBFeHBvcnRDdHJsIGdldHMgY2FsbGVkIHR3aWNlIGZvciBzb21lIHJlYXNvbiwgd2UgbWlnaHRcbiAgICAgKiBoYXZlIHRoaXMgY2xhc3MgaGFuZ2luZyBhcm91bmQgYmxvY2tpbmcgdGhlIGFwcC4gRXhwb3J0Q3RybFxuICAgICAqIGRvZXMgZ2V0IGNhbGxlZCB0d2ljZSBzb21ldGltZXMsIGJlY2F1c2UgdGhlIG1vZGFsIHNvbWV0aW1lc1xuICAgICAqIG51ZGdlcyB0aGUgbWFwIGFuZCByZWluc3RhbnRpYXRlcyB0aGUgbW9kYWwgYWdhaW4gdmlhIGEgbmV3XG4gICAgICogcm91dGUuXG4gICAgICovXG4gICAgJCgnLm1vZGFsLWJhY2tkcm9wJykucmVtb3ZlKCk7XG5cbiAgICAkKCcjZXhwb3J0TW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuXG4gICAgJCgnI2V4cG9ydE1vZGFsJykub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICRzdGF0ZS5nbygnbWFpbicsICRzdGF0ZVBhcmFtcyk7XG4gICAgfSk7XG5cblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vZGVmYXVsdHNcbiAgICBzZWxmLl9MYXlvdXRFbGVtZW50cyA9IHsgXCJtYXBcIjogdHJ1ZSwgXCJsZWdlbmRcIjogdHJ1ZSwgXCJvcHRpb25hbHRoZW1lZGV0YWlsc1wiOiBmYWxzZSB9O1xuICAgIHNlbGYuX0ltYWdlRm9ybWF0ID0gJ3BuZyc7XG5cbiAgICBzZWxmLl9pbml0ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHNlbGYuX2Nvbm5lY3RSYWRpb0J1dHRvbk9uQ2xpY2tzKCk7XG4gICAgICAgICQoXCIjZXhlY3V0ZUV4cG9ydEJ1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vU2hvdyBsb2FkaW5nIGdpZi4gSGlkZSBleHBvcnQgYnV0dG9uXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHNlbGYuX2V4cG9ydEltYWdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuX3Nob3dFeHBvcnRCdXR0b25IaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHNlbGYuX3Nob3dXYWl0aW5nUGFuZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuX3Nob3dMb2FkZXIoKTsgLy9zaG93IGtuaWdodFJpZGVyIGltYWdlLCBoaWRlXG4gICAgICAgICQoXCIjZXhwb3J0T3B0aW9uc1BhbmVsXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgICAgICQoXCIjZXhwb3J0V2FpdGluZ1BhbmVsXCIpLmNzcyh7IFwiZGlzcGxheVwiOiBcImJsb2NrXCIgfSk7XG4gICAgICAgICQoXCIuZXhwb3J0R3JvdXBUaXRsZS5lcnJvclwiKS5jc3MoeyBcImRpc3BsYXlcIjogXCJub25lXCIgfSk7IC8vSGlkZSBlcnJvciBtZXNzYWdlLCBpZiBzaG93blxuICAgICAgICAkKFwiLmltYWdlT3BlbkJ1dHRvblwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pOyAvL2hpZGUgb3BlbiBpbWFnZSBidXR0b25cbiAgICB9XG5cbiAgICBzZWxmLl9oaWRlV2FpdGluZ1BhbmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2V4cG9ydFdhaXRpbmdQYW5lbFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xuICAgICAgICAkKFwiI2V4cG9ydE9wdGlvbnNQYW5lbFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICB9XG5cbiAgICBzZWxmLl9oaWRlRXhwb3J0QnV0dG9uU2hvd0xvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNleGVjdXRlRXhwb3J0QnV0dG9uXCIpLmNzcyh7IFwiZGlzcGxheVwiOiBcIm5vbmVcIiB9KTtcbiAgICAgICAgJChcIi5rbmlnaHRSaWRlckxvYWRlclwiKS5jc3MoeyBcImRpc3BsYXlcIjogXCJibG9ja1wiIH0pO1xuICAgIH1cblxuICAgIHNlbGYuX3Nob3dFeHBvcnRCdXR0b25IaWRlTG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2V4ZWN1dGVFeHBvcnRCdXR0b25cIikuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgICAgICQoXCIua25pZ2h0UmlkZXJMb2FkZXJcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICB9XG5cbiAgICBzZWxmLl9jb25uZWN0UmFkaW9CdXR0b25PbkNsaWNrcyA9IGZ1bmN0aW9uICgpIHtcblxuXG4gICAgICAgICQoXCIjb3B0aW9uYWxPdXRwdXRNYXBcIikub24oXCJjbGlja1wiLCBzZWxmLl9nZXRMYXlvdXRFbGVtZW50T25DbGljaygnbWFwJykpO1xuICAgICAgICAkKFwiI29wdGlvbmFsT3V0cHV0TGVnZW5kXCIpLm9uKFwiY2xpY2tcIiwgc2VsZi5fZ2V0TGF5b3V0RWxlbWVudE9uQ2xpY2soJ2xlZ2VuZCcpKTtcbiAgICAgICAgJChcIiNvcHRpb25hbFRoZW1lRGV0YWlsc1wiKS5vbihcImNsaWNrXCIsIHNlbGYuX2dldExheW91dEVsZW1lbnRPbkNsaWNrKCdvcHRpb25hbHRoZW1lZGV0YWlscycpKTtcblxuXG4gICAgICAgIHZhciBwbmdSQk5vZGUgPSAkKFwiI3BuZ0ltYWdlRm9ybWF0XCIpO1xuICAgICAgICBwbmdSQk5vZGUub24oXCJjbGlja1wiLCBzZWxmLl9nZXRJbWFnZUJ1dHRvblJhZGlvQnV0dG9uT25DbGljayhwbmdSQk5vZGUsICdwbmcnKSk7XG5cbiAgICAgICAgdmFyIHBkZlJCTm9kZSA9ICQoXCIjcGRmSW1hZ2VGb3JtYXRcIik7XG4gICAgICAgIHBkZlJCTm9kZS5vbihcImNsaWNrXCIsIHNlbGYuX2dldEltYWdlQnV0dG9uUmFkaW9CdXR0b25PbkNsaWNrKHBkZlJCTm9kZSwgJ3BkZicpKTtcblxuICAgICAgICAkKFwiI2V4cG9ydENsb3NlXCIpLm9uKFwiY2xpY2tcIiwgc2VsZi5oaWRlRXhwb3J0T3B0aW9uKTtcblxuICAgICAgICAkKFwiLmtpbGxPcGVuQnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgc2VsZi5faGlkZVdhaXRpbmdQYW5lbCk7IC8vdGhlIGRpc2NhcmQgYnV0dG9uXG5cbiAgICB9O1xuXG4gICAgc2VsZi5fZ2V0SW1hZ2VCdXR0b25SYWRpb0J1dHRvbk9uQ2xpY2sgPSBmdW5jdGlvbiAobm9kZSwgaW1hZ2VGb3JtYXQpIHtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5fSW1hZ2VGb3JtYXQgPSBpbWFnZUZvcm1hdDtcbiAgICAgICAgICAgIHNlbGYuX3JlbW92ZUFsbFNlbGVjdGVkUmFkaW9CdXR0b25zKFwiZXhwb3J0T3B0aW9uc0NvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIG5vZGUuYWRkQ2xhc3MoXCJleHBvcnRSYWRpb0J1dHRvblNlbGVjdGVkXCIpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBzZWxmLl9nZXRMYXlvdXRFbGVtZW50T25DbGljayA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL1RvZ2dsZSBBY3RpdmUgU3RhdGVcbiAgICAgICAgICAgIHNlbGYuX0xheW91dEVsZW1lbnRzW2VsZW1lbnRdID0gIXNlbGYuX0xheW91dEVsZW1lbnRzW2VsZW1lbnRdO1xuXG4gICAgICAgICAgICAvLyQoXCIjZXhwb3J0T3B0aW9ucyAuY2hlY2tib3hcIikucmVtb3ZlQ2xhc3MoXCJjaGVja2VkXCIpO1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnY2hlY2tlZCcpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBzZWxmLl9yZW1vdmVBbGxTZWxlY3RlZFJhZGlvQnV0dG9ucyA9IGZ1bmN0aW9uIChwYXJlbnREaXZJRCkge1xuICAgICAgICAkLmVhY2goJChcIiNcIiArIHBhcmVudERpdklEICsgXCIgLmV4cG9ydFJhZGlvQnV0dG9uU2VsZWN0ZWRcIiksIGZ1bmN0aW9uIChpZHgsIG5vZGUpIHtcbiAgICAgICAgICAgICQobm9kZSkucmVtb3ZlQ2xhc3MoXCJleHBvcnRSYWRpb0J1dHRvblNlbGVjdGVkXCIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgc2VsZi5faGlkZUxvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi5rbmlnaHRSaWRlckxvYWRlclwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xuICAgIH1cblxuICAgIHNlbGYuX3Nob3dMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIua25pZ2h0UmlkZXJMb2FkZXJcIikuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgfVxuXG4gICAgdGhpcy5zaG93RXhwb3J0T3B0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2V4cG9ydE9wdGlvbnNcIikuY3NzKHsgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIiB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmhpZGVFeHBvcnRPcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjZXhwb3J0T3B0aW9uc1wiKS5jc3MoeyBcImRpc3BsYXlcIjogXCJub25lXCIgfSk7XG4gICAgfVxuXG4gICAgc2VsZi5fa2lsbE9wZW5JbWFnZUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9IaWRlICdvcGVuIGltYWdlJyBidXR0b24gYW5kIHNob3cgZXhwb3J0IGJ1dHRvbi5cbiAgICAgICAgc2VsZi5fc2hvd0V4cG9ydEJ1dHRvbkhpZGVMb2FkZXIoKTtcbiAgICAgICAgJChcIi5pbWFnZU9wZW5CdXR0b25cIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICB9XG5cbiAgICBzZWxmLl9vbkVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLl9oaWRlV2FpdGluZ1BhbmVsKCk7XG4gICAgICAgIC8vRGlzcGxheSBlcnJvciBtZXNzYWdlLlxuICAgICAgICAkKFwiLmV4cG9ydEdyb3VwVGl0bGUuZXJyb3JcIikucmVwbGFjZShcIjxzcGFuPlRoZXJlIHdhcyBhbiBlcnJvciBleHBvcnRpbmcgdGhlIGltYWdlLjwvc3Bhbj5cIik7XG4gICAgICAgICQoXCIuZXhwb3J0R3JvdXBUaXRsZS5lcnJvclwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICB9XG5cbiAgICBzZWxmLl9leHBvcnRJbWFnZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgdGl0bGVIVE1MID0gXCJUaXRsZVwiO1xuXG4gICAgICAgIC8vdmFyIGxlZ2VuZHNIVE1MID0gJCgnPGRpdj4nKS5hcHBlbmQoJChcIiNMYXllckxpc3RXcmFwcGVyXCIpLmNsb25lKCkpLmh0bWwoKS5yZXBsYWNlKC9cXFwiL2csICdcXFxcXCInKTtcblxuXG4gICAgICAgIHZhciBsYXlvdXRXaWR0aCA9ICQoXCJib2R5XCIpLndpZHRoKCk7XG4gICAgICAgIHZhciBtYXBIZWlnaHQgPSAkKFwiI01hcEN0cmxcIikuaGVpZ2h0KCk7XG4gICAgICAgIHZhciBtYXBXaWR0aCA9ICQoXCIjTWFwQ3RybFwiKS53aWR0aCgpO1xuXG4gICAgICAgIHZhciBjb2RlYmxvY2sgPSBcIlwiO1xuICAgICAgICAvL0FkanVzdCBib2R5IHdpZHRoXG4gICAgICAgIGNvZGVibG9jayArPSAnJChcImJvZHlcIikud2lkdGgoJyArIChtYXBXaWR0aCArIDIwKSArICcpOyc7XG5cbiAgICAgICAgLy9MYWJlbCBzZWxlY3RlZCBjb3VudHJ5XG4gICAgICAgIC8vY29kZWJsb2NrICs9ICckKFwiI2FjdGl2ZUNvdW50cnlcIikuaHRtbCggXCInICsgX0ZTUC5NYXBCdWlsZGVyLlNlbGVjdGVkQ291bnRyeSArICdcIik7JztcblxuICAgICAgICAvL0RlcGVuZGluZyBvbiB3aGF0J3MgaW4gdGhlIGxheW91dEVsZW1lbnRzIGFycmF5LCBncmFiIGRvbSBub2Rlc1xuICAgICAgICAvL3ZhciBfc2hvd05vbmUgPSB0cnVlOyAvL2ZsYWcgdG8gZGV0ZWN0IGlmIHVzZXIgY2hvc2Ugbm90aGluZ1xuXG4vLyAgICAgICAgZm9yICh2YXIga2V5IGluIHNlbGYuX0xheW91dEVsZW1lbnRzKSB7XG4vLyAgICAgICAgICAgIGlmIChzZWxmLl9MYXlvdXRFbGVtZW50cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4vLyAgICAgICAgICAgICAgICAvL0lmIHVzZXIgaGFzIHNlbGVjdGVkIGV2ZW4gMSBlbGVtZW50LCB0aGVuIHNldCBfc2hvd05vbmUgdG8gZmFsc2U7IChiZWNhdXNlIHdlIGFyZSBnb2luZyB0byBzaG93IHNvbWV0aGluZylcbi8vICAgICAgICAgICAgICAgIGlmIChzZWxmLl9MYXlvdXRFbGVtZW50c1trZXldID09PSB0cnVlKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgX3Nob3dOb25lID0gZmFsc2U7XG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuLy8gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtYXBcIjpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuX0xheW91dEVsZW1lbnRzW2tleV0gPT09IHRydWUpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZ3JhYiB0aGUgbWFwIGRpdlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hcEhUTUwgPSAkKCc8ZGl2PicpLmFwcGVuZCgkKFwiLmxlYWZsZXQtbWFwLXBhbmVcIikuY2xvbmUoKSkuaHRtbCgpLnJlcGxhY2UoL1xcXCIvZywgJ1xcXFxcIicpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hcEhUTUwuaW5kZXhPZignLXdlYmtpdC10cmFuc2Zvcm0nKSA9PT0gLTEpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBIVE1MID0gbWFwSFRNTC5yZXBsYWNlKC8tbXMtdHJhbnNmb3JtL2csICd0cmFuc2Zvcm0nKS5yZXBsYWNlKC90cmFuc2Zvcm0vZywgJy13ZWJraXQtdHJhbnNmb3JtJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlYmxvY2sgKz0gJyQoXCIjTWFwQ3RybFwiKS5oZWlnaHQoJyArIG1hcEhlaWdodCArICcpOyc7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlYmxvY2sgKz0gJyQoXCIjTWFwQ3RybFwiKS5yZXBsYWNlV2l0aChcIicgKyBtYXBIVE1MICsgJ1wiKTsnO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9BZGp1c3QgTWFwIHdyYXBwZXJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVibG9jayArPSAnJChcIiN1cHBlck1hcFdyYXBwZXJcIikud2lkdGgoJyArIChtYXBXaWR0aCkgKyAnKTsnO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZWJsb2NrICs9ICckKFwiI3VwcGVyTWFwV3JhcHBlclwiKS5oZWlnaHQoJyArIChtYXBIZWlnaHQpICsgJyk7Jztcbi8vICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaGlkZSBtYXAgZGl2XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlYmxvY2sgKz0gJyQoXCIjdXBwZXJNYXBXcmFwcGVyXCIpLmhpZGUoKTsnO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuLy9cbi8vICAgICAgICAgICAgICAgICAgICBjYXNlIFwibGVnZW5kXCI6XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLl9MYXlvdXRFbGVtZW50c1trZXldID09PSB0cnVlKSB7XG4vLy8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsZWdlbmRzSFRNTCA9ICQoJzxkaXY+JykuYXBwZW5kKCQoXCIjTGF5ZXJMaXN0V3JhcHBlclwiKS5jbG9uZSgpKS5odG1sKCkucmVwbGFjZSgvXFxcIi9nLCAnXFxcXFwiJyk7XG4vLy8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVibG9jayArPSBcIiQoJyNsZWdlbmRzJykuYXBwZW5kKCdcIiArIGxlZ2VuZHNIVE1MICsgXCInKTtcIjtcbi8vLy9cbi8vLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9BZGp1c3QgVGl0bGUgb2YgQ0lDT3Ncbi8vLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZWJsb2NrICs9IFwiJCgnI2xlZ2VuZHMnKS5wcmVwZW5kKCQoJyNwYXJlbnRDSUNPJykpO1wiO1xuLy8vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlYmxvY2sgKz0gXCIkKCcjbGVnZW5kcycpLnByZXBlbmQoJCgnI0xheWVyTGlzdFdyYXBwZXIgaGVhZGVyJykpO1wiO1xuLy8vL1xuLy8vL1xuLy8vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL01vdmUgcGFuZWxUaXRsZSB0byBncnBDSUNPLiAgMXN0IHRoaW5nLlxuLy8vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlYmxvY2sgKz0gXCIkKCcjZ3JwQ0lDTycpLnByZXBlbmQoJCgnLnBhbmVsVGl0bGUnKSk7XCI7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2lmIGJvdGggbWFwIGFuZCBsZWdlbmQgYXJlIGV4Y2x1ZGVkLCBoaWRlIHRoZSB3cmFwcGVyIHdpdGggYm9yZGVyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5fTGF5b3V0RWxlbWVudHNbXCJtYXBcIl0gIT0gdHJ1ZSkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVibG9jayArPSAnJChcIiN1cHBlck1hcFdyYXBwZXJcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTsnO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuLy9cbi8vICAgICAgICAgICAgICAgICAgICBjYXNlIFwib3B0aW9uYWx0aGVtZWRldGFpbHNcIjpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuX0xheW91dEVsZW1lbnRzW2tleV0gPT09IHRydWUpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vI0RldGFpbHNQYW5lbCAudGl0bGUubmctYmluZGluZ1xuLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBDT0hUTUwgPSAkKCc8ZGl2PicpLmFwcGVuZCgkKFwiI0RldGFpbHNQYW5lbCAuSW5uZXJDb250YWluZXIuc2Nyb2xsYWJsZVwiKS5jbG9uZSgpLmFkZENsYXNzKFwib25cIikpLmh0bWwoKS5yZXBsYWNlKC9cXFwiL2csICdcXFxcXCInKS5yZXBsYWNlKC88IS0tKC4qPyktLT4vZ20sIFwiXCIpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZWJsb2NrICs9IFwiJCgnI3V4VGhlbWVEZXRhaWxzJykuYXBwZW5kKCdcIiArIENPSFRNTCArIFwiJyk7XCI7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgIH1cbi8vICAgICAgICB9XG5cbi8vICAgICAgICBpZiAoX3Nob3dOb25lID09IHRydWUpIHtcbi8vICAgICAgICAgICAgLy9Eb24ndCBkbyBhbnl0aGluZywgY2F1c2UgdXNlciBoYXNuJ3Qgc2VsZWN0ZWQgYW55dGhpbmcuXG4vLyAgICAgICAgICAgICQoXCIjZXhwb3J0TWVzc2FnZVwiKS5odG1sKFwiUGxlYXNlIHNlbGVjdCAxIG9yIG1vcmUgZWxlbWVudHMgdG8gZXhwb3J0LlwiKTtcbi8vICAgICAgICAgICAgcmV0dXJuO1xuLy8gICAgICAgIH1cbi8vICAgICAgICBlbHNlIHtcbi8vICAgICAgICAgICAgJChcIiNleHBvcnRNZXNzYWdlXCIpLmh0bWwoXCJcIik7XG4vLyAgICAgICAgfVxuXG4gICAgICAgIC8vc2hvdyBsb2FkZXJcbiAgICAgICAgc2VsZi5fc2hvd1dhaXRpbmdQYW5lbCgpO1xuXG4gICAgICAgIC8vZm9ybWF0dGluZ1xuICAgICAgICAvL2NvZGVibG9jayA9IGNvZGVibG9jay5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCBcIlwiKTsgIC8vcmVtb3ZlIGxpbmUgYnJlYWtzXG5cbiAgICAgICAgdmFyIHByaW50UG9zdEFyZ3MgPSB7XG4gICAgICAgICAgICAvL3VybDogJ2h0dHA6Ly9nZW8ucmVkY3Jvc3MuY29tL21hcGZvbGlvL3ByaW50Lmh0bScsXG4gICAgICAgICAgICB1cmw6ICRzY29wZS5yb3V0ZVVybC5ocmVmLnJlcGxhY2UoXCJtYXBmb2xpby8jXCIsIFwibWFwZm9saW8vcHJpbnQuaHRtbCNcIikucmVwbGFjZShcIm1hcGZvbGlvL2luZGV4Lmh0bWwjXCIsIFwibWFwZm9saW8vcHJpbnQuaHRtbCNcIikucmVwbGFjZShcIi9leHBvcnRcIiwgXCJcIikucmVwbGFjZShcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMVwiLCBcImh0dHBzOi8vZ2VvLnJlZGNyb3NzLm9yZ1wiKSwgLy9Td2FwIHRoZSBjdXJyZW50IHVybCBmb3IgdGhlIHByaW50IHVybFxuICAgICAgICAgICAgaW1hZ2Vmb3JtYXQ6IHNlbGYuX0ltYWdlRm9ybWF0IHx8ICdwbmcnLFxuICAgICAgICAgICAgZm9ybWF0OiAnanNvbicsXG4gICAgICAgICAgICAvL2NvZGVibG9jazogY29kZWJsb2NrLFxuICAgICAgICAgICAgdmlld3BvcnRoZWlnaHQ6IG1hcEhlaWdodCxcbiAgICAgICAgICAgIHZpZXdwb3J0d2lkdGg6IGxheW91dFdpZHRoLFxuICAgICAgICAgICAgZGVsYXk6IDUwMDAgLy90aW1lIHRvIHdhaXQgaW4gbXNcbiAgICAgICAgfTtcblxuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9wcmludC5zcGF0aWFsZGV2LmNvbScsXG4gICAgICAgICAgICBkYXRhOiBwcmludFBvc3RBcmdzLFxuICAgICAgICAgICAgc3VjY2Vzczogc2VsZi5fb25JbWFnZUV4cG9ydCxcbiAgICAgICAgICAgIGVycm9yOiBzZWxmLl9vbkVycm9yXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIHNlbGYuX29uSW1hZ2VFeHBvcnQgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG5cbiAgICAgICAgdmFyIGV4cG9ydEltYWdlVVJMID0gcmVzdWx0LmltYWdlO1xuXG4gICAgICAgIC8vaW5zdGVhZCwgc2hvdyBhIGJ1dHRvbi9oeXBlcmxpbmsgZm9yIHRoZSB1c2VyIHRvIG9wZW4gdGhlIGltYWdlLlxuICAgICAgICAkKFwiLmltYWdlT3BlbkJ1dHRvbiBhXCIpLmF0dHIoXCJocmVmXCIsIGV4cG9ydEltYWdlVVJMKTtcbiAgICAgICAgJChcIi5pbWFnZU9wZW5CdXR0b25cIikuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG5cbiAgICAgICAgLy9IaWRlIGxvYWRlclxuICAgICAgICBzZWxmLl9oaWRlTG9hZGVyKCk7XG4gICAgfTtcblxuICAgIHNlbGYuX2luaXQoKTtcbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAzLzI3LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ1NwYXRpYWxWaWV3ZXInKS5jb250cm9sbGVyKCdGaWx0ZXJzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRodHRwLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgJHJvb3RTY29wZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWN0b3JGYWN0b3J5LCBDSUNPRmlsdGVyRmFjdG9yeSwgSGVhbHRoRmlsdGVyRmFjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMaWJyYXJ5RmlsdGVyRmFjdG9yeSwgQWdGaWx0ZXJGYWN0b3J5LCBMYXllckNvbmZpZywgVWdhbmRhRmFjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmRpYUZhY3RvcnksIEtlbnlhRmFjdG9yeSwgTmlnZXJpYUZhY3RvcnkpIHtcbiAgICAkc2NvcGUucGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuICAgICRzY29wZS5uYXZUYWIgPSAnQ0lDT1MnO1xuICAgICRzY29wZS5hbGxTZWN0b3JzID0gW107XG4gICAgJHNjb3BlLkhlYWx0aExheWVyID0gSGVhbHRoRmlsdGVyRmFjdG9yeS5MYXllcjtcbiAgICAkc2NvcGUuQWdMYXllciA9IEFnRmlsdGVyRmFjdG9yeS5MYXllcjtcbiAgICAkc2NvcGUuRWR1Y2F0aW9uTGF5ZXIgPSBMYXllckNvbmZpZy5jb25maWdMYXllcnNbJ2VkdWNhdGlvbl91Z2FuZGEnXTtcbiAgICAkc2NvcGUuTGlicmFyeUxheWVyID0gTGlicmFyeUZpbHRlckZhY3RvcnkuTGF5ZXI7XG4gICAgJHNjb3BlLkNJQ09MYXllciA9IENJQ09GaWx0ZXJGYWN0b3J5LkxheWVyO1xuICAgICRzY29wZS5DSUNPTGF5ZXJfS2VueWEgPSBLZW55YUZhY3RvcnkuTGF5ZXI7XG4gICAgJHNjb3BlLkNJQ09MYXllcl9OaWdlcmlhID0gTmlnZXJpYUZhY3RvcnkuTGF5ZXI7XG4gICAgJHNjb3BlLkNJQ09MYXllcl9VZ2FuZGEgPSBMYXllckNvbmZpZy5jb25maWdMYXllcnNbJ2NpY29zX3VnYW5kYSddO1xuICAgICRzY29wZS5DSUNPU2VjdG9yID0gQ0lDT0ZpbHRlckZhY3RvcnkuQ0lDT3NfQ291bnRzO1xuICAgICRzY29wZS5IZWFsdGhMYXllci5hY3RpdmUgPSBmYWxzZTtcbiAgICAkc2NvcGUuTGlicmFyeUxheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICRzY29wZS5DSUNPTGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgJHNjb3BlLkFnTGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgJHNjb3BlLnRvcDMgPSBmYWxzZTtcbiAgICAkc2NvcGUuU2hvd0FsbFNlY3RvcnMgPSBmYWxzZTtcbiAgICAkc2NvcGUuU2VhcmNoQmFyID0gZmFsc2U7XG4gICAgJHNjb3BlLkFnVG9wMyA9IFtdO1xuICAgICRzY29wZS5Db3VudHJ5TGlzdCA9IFNlY3RvckZhY3RvcnkuQ291bnRyeUxpc3Q7XG5cbiAgICAkc2NvcGUudG9nZ2xlU2VhcmNoQmFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkc2NvcGUuU2VhcmNoQmFyID0gISRzY29wZS5TZWFyY2hCYXI7XG4gICAgfTtcblxuICAgIC8vIEZ1bmN0aW9uIGlzIGNhbGxlZCBhZnRlciBDb3VudHJ5IGhhcyBjaGFuZ2VkXG4gICAgLy8gJHNjb3BlLkNJQ09TZWN0b3IgY2FuIGVpdGhlciBjb250YWluIEtlbnlhL0luZGlhL05pZ2VyaWEgZGF0YVxuICAgICRzY29wZS5zZXRGaWx0ZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJHN0YXRlUGFyYW1zLmhhc093blByb3BlcnR5KCdjb3VudHJ5Jyk9PXRydWUpIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZUNvdW50cnkgPSAkc3RhdGVQYXJhbXMuY291bnRyeS5jYXBpdGFsaXplKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhdGVDb3VudHJ5ID09ICdLZW55YScpIHtcbiAgICAgICAgICAgICRzY29wZS5DSUNPU2VjdG9yID0gS2VueWFGYWN0b3J5LkNJQ09zX0NvdW50cztcbiAgICAgICAgICAgIC8vJHNjb3BlLkNJQ09Qcm92aWRlcnMudmlld0FsbCA9IHRydWU7XG4gICAgICAgICAgICAkc2NvcGUuQ0lDT1NlY3Rvci52aWV3QWxsID0gdHJ1ZTtcbiAgICAgICAgICAgICRzY29wZS5DSUNPU2VjdG9yLnNlbGVjdGVkQWxsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGVDb3VudHJ5ID09ICdJbmRpYScpIHtcbiAgICAgICAgICAgICRzY29wZS5DSUNPU2VjdG9yID0gQ0lDT0ZpbHRlckZhY3RvcnkuQ0lDT3NfQ291bnRzO1xuICAgICAgICAgICAgJHNjb3BlLkNJQ09TZWN0b3Iuc2VsZWN0ZWRBbGwgPSB0cnVlO1xuICAgICAgICAgICAgLy8kc2NvcGUuQ0lDT1NlY3Rvci52aWV3QWxsID0gZmFsc2U7XG4gICAgICAgICAgICAvLyRzY29wZS5IZWFsdGhTZWN0b3Iudmlld0FsbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlQ291bnRyeSA9PSAnTmlnZXJpYScpIHtcbiAgICAgICAgICAgICRzY29wZS5DSUNPU2VjdG9yID0gTmlnZXJpYUZhY3RvcnkuQ0lDT3NfQ291bnRzO1xuICAgICAgICAgICAgJHNjb3BlLkNJQ09TZWN0b3Iudmlld0FsbCA9IHRydWU7XG4gICAgICAgICAgICAkc2NvcGUuQ0lDT1NlY3Rvci5zZWxlY3RlZEFsbCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhdGVDb3VudHJ5ID09ICdVZ2FuZGEnKSB7XG4gICAgICAgICAgICAkc2NvcGUuQ0lDT1NlY3RvciA9IFVnYW5kYUZhY3RvcnkuQ0lDT3NfQ291bnRzO1xuICAgICAgICAgICAgJHNjb3BlLkNJQ09TZWN0b3Iuc2VsZWN0ZWRBbGwgPSB0cnVlO1xuICAgICAgICAgICAgJHNjb3BlLkNJQ09TZWN0b3Iudmlld0FsbCA9IHRydWU7XG4gICAgICAgICAgICAkc2NvcGUuQWdMYXllciA9IExheWVyQ29uZmlnLmNvbmZpZ0xheWVyc1snYWdyaWN1bHR1cmVfdWdhbmRhJ107XG4gICAgICAgICAgICAvLyRzY29wZS5IZWFsdGhTZWN0b3Iudmlld0FsbCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkc2NvcGUuZGVhY3RpdmVMYXllcnMgPSBmdW5jdGlvbigpe1xuICAgICAgICAkc2NvcGUuTGlicmFyeUxheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAkc2NvcGUuSGVhbHRoTGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICRzY29wZS5DSUNPTGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICRzY29wZS5BZ0xheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAkc2NvcGUuQ0lDT0xheWVyX0tlbnlhLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAkc2NvcGUuQ0lDT0xheWVyX05pZ2VyaWEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICRzY29wZS5DSUNPTGF5ZXJfVWdhbmRhLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgfTtcblxuICAgICRzY29wZS5kZWZhdWx0U3RhdGUgPSBmdW5jdGlvbigpe1xuICAgICAgICAkc2NvcGUuZGVhY3RpdmVMYXllcnMoKTtcblxuICAgICAgICAkc2NvcGUuQ291bnRyeUxpc3QgPSBTZWN0b3JGYWN0b3J5LkNvdW50cnlMaXN0O1xuXG4gICAgICAgIHZhciB0ZW1wYXJyID0gJHN0YXRlUGFyYW1zLmxheWVycy5zcGxpdChcIixcIik7XG4gICAgICAgICRzdGF0ZVBhcmFtcy5sYXllcnMgPSB0ZW1wYXJyWzBdO1xuXG4gICAgICAgICRzdGF0ZVBhcmFtcy5sYXQgPSAkc2NvcGUuQ291bnRyeUxpc3QuZGVmYXVsdC5NYXBDZW50ZXIuTGF0aXR1ZGU7XG4gICAgICAgICRzdGF0ZVBhcmFtcy5sbmcgPSAkc2NvcGUuQ291bnRyeUxpc3QuZGVmYXVsdC5NYXBDZW50ZXIuTG9uZ2l0dWRlO1xuICAgICAgICAkc3RhdGVQYXJhbXMuem9vbSA9ICRzY29wZS5Db3VudHJ5TGlzdC5kZWZhdWx0Lk1hcFpvb207XG4gICAgICAgICRzdGF0ZVBhcmFtcy5jb3VudHJ5ID0gICRzY29wZS5Db3VudHJ5TGlzdC5kZWZhdWx0LmNvdW50cnk7XG4gICAgICAgICRzY29wZS5zZWxlY3Rpb24gPSAkc2NvcGUuQ291bnRyeUxpc3QuZGVmYXVsdC5jb3VudHJ5O1xuXG4gICAgICAgICRzY29wZS5jbG9zZVBhcmFtKCdkZXRhaWxzLXBhbmVsJyk7XG5cbiAgICAgICAgJHN0YXRlLmdvKCRzdGF0ZS5jdXJyZW50Lm5hbWUsICRzdGF0ZVBhcmFtcyk7XG4gICAgfTtcblxuICAgICRzY29wZS4kd2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gU2VjdG9yRmFjdG9yeS5zZWxlY3RlZENvdW50cnk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkc2NvcGUuc2VsZWN0aW9uID0gU2VjdG9yRmFjdG9yeS5zZWxlY3RlZENvdW50cnk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiIC0tLS0tLSBEZXRhaWxzLmpzIEN1cnJlbnQgQ291bnRyeSBoYXMgY2hhbmdlZCB0bzogXCIgKyAkc2NvcGUuc2VsZWN0aW9uKTtcbiAgICAgICAgJHNjb3BlLnNldEZpbHRlcnMoKTtcbiAgICAgICAgJHNjb3BlLmRlYWN0aXZlTGF5ZXJzKCk7XG4gICAgICAgIHN3aXRjaCAoJHNjb3BlLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnSW5kaWEnOlxuICAgICAgICAgICAgICAgIFNlY3RvckZhY3Rvcnkuc2VjdG9yU2VsZWN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgICRzY29wZS5hbGxTZWN0b3JzID0gU2VjdG9yRmFjdG9yeS5zZWN0b3JTZWxlY3Rpb25zO1xuICAgICAgICAgICAgICAgICRzY29wZS5RdWlja1N0YXRzID0gSW5kaWFGYWN0b3J5LkluZGlhLlF1aWNrU3RhdHM7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpdGxlID0gXCJPdmVydmlldyAtIEJpaGFyICYgVXR0YXIgUHJhZGVzaFwiO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW5kaWEgUXVpY2tTdGF0c1wiKTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuSW5kaWFPbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgJHNjb3BlLlNob3dBbGxTZWN0b3JzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuS2VueWFPbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICRzY29wZS5OaWdlcmlhT24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuVWdhbmRhT24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuY2hlY2tBbGxBZygpO1xuICAgICAgICAgICAgICAgICRzY29wZS5jaGVja0FsbENJQ08oKTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuY2hlY2tBbGxIZWFsdGgoKTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuY2hlY2tBbGxMaWJyYXJ5KCk7XG4gICAgICAgICAgICAgICAgJHNjb3BlLkNJQ09Ub3AzID0gW107XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbmRpYSBPbiBcIiArICRzY29wZS5JbmRpYU9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1VnYW5kYSc6XG4gICAgICAgICAgICAgICAgU2VjdG9yRmFjdG9yeS5zZWN0b3JTZWxlY3Rpb25zID0gW107XG4gICAgICAgICAgICAgICAgJHNjb3BlLmFsbFNlY3RvcnMgPSBTZWN0b3JGYWN0b3J5LnNlY3RvclNlbGVjdGlvbnM7XG4gICAgICAgICAgICAgICAgJHNjb3BlLlF1aWNrU3RhdHMgPSBVZ2FuZGFGYWN0b3J5LlVnYW5kYS5RdWlja1N0YXRzO1xuICAgICAgICAgICAgICAgICRzY29wZS5BZ0xheWVyID0gTGF5ZXJDb25maWcuY29uZmlnTGF5ZXJzWydhZ3JpY3VsdHVyZV91Z2FuZGEnXTtcbiAgICAgICAgICAgICAgICAkc2NvcGUudGl0bGUgPSBcIk92ZXJ2aWV3IC0gVWdhbmRhXCI7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVZ2FuZGEgUXVpY2tTdGF0c1wiKTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuVWdhbmRhT24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICRzY29wZS5BZ1NlY3RvciA9IFVnYW5kYUZhY3RvcnkuQWdfQ291bnRzO1xuICAgICAgICAgICAgICAgICRzY29wZS5TaG93QWxsU2VjdG9ycyA9IHRydWU7XG4gICAgICAgICAgICAgICAgJHNjb3BlLkluZGlhT24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuQWdTZWN0b3IuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgJHNjb3BlLkFnU2VjdG9yLnZpZXdBbGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICRzY29wZS5LZW55YU9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgJHNjb3BlLk5pZ2VyaWFPbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICRzY29wZS5DSUNPVG9wMyA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVWdhbmRhIE9uIFwiICsgJHNjb3BlLlVnYW5kYU9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0tlbnlhJzpcbiAgICAgICAgICAgICAgICBTZWN0b3JGYWN0b3J5LnNlY3RvclNlbGVjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuYWxsU2VjdG9ycyA9IFNlY3RvckZhY3Rvcnkuc2VjdG9yU2VsZWN0aW9ucztcbiAgICAgICAgICAgICAgICAkc2NvcGUuSW5kaWFPbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICRzY29wZS5LZW55YU9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuTmlnZXJpYU9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgJHNjb3BlLlVnYW5kYU9uID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAkc2NvcGUuU2hvd0FsbFNlY3RvcnMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICRzY29wZS5jaGVja0FsbENJQ08oKTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuQ0lDT1RvcDMgPSBbXTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuUXVpY2tTdGF0cyA9IEtlbnlhRmFjdG9yeS5LZW55YS5RdWlja1N0YXRzO1xuICAgICAgICAgICAgICAgICRzY29wZS50aXRsZSA9IFwiT3ZlcnZpZXcgLSBLZW55YVwiO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiS2VueWEgUXVpY2tTdGF0cyBcIiArICRzY29wZS5RdWlja1N0YXRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ05pZ2VyaWEnOlxuICAgICAgICAgICAgICAgIFNlY3RvckZhY3Rvcnkuc2VjdG9yU2VsZWN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgICRzY29wZS5hbGxTZWN0b3JzID0gU2VjdG9yRmFjdG9yeS5zZWN0b3JTZWxlY3Rpb25zO1xuICAgICAgICAgICAgICAgICRzY29wZS5JbmRpYU9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgJHNjb3BlLktlbnlhT24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuTmlnZXJpYU9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuVWdhbmRhT24gPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICRzY29wZS5TaG93QWxsU2VjdG9ycyA9IHRydWU7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmNoZWNrQWxsQ0lDTygpO1xuICAgICAgICAgICAgICAgICRzY29wZS5DSUNPVG9wMyA9IFtdO1xuICAgICAgICAgICAgICAgICRzY29wZS5RdWlja1N0YXRzID0gTmlnZXJpYUZhY3RvcnkuTmlnZXJpYS5RdWlja1N0YXRzO1xuICAgICAgICAgICAgICAgICRzY29wZS50aXRsZSA9IFwiT3ZlcnZpZXcgLSBOaWdlcmlhXCI7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOaWdlcmlhIFF1aWNrU3RhdHMgXCIgKyAkc2NvcGUuUXVpY2tTdGF0cyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICRzY29wZS5JbmRpYU9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgJHNjb3BlLktlbnlhT24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuTmlnZXJpYU9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgJHNjb3BlLlVnYW5kYU9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgJHNjb3BlLlNob3dBbGxTZWN0b3JzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICRzY29wZS5IZWFsdGhTZWN0b3IgPSBIZWFsdGhGaWx0ZXJGYWN0b3J5LkhlYWx0aF9Db3VudHM7XG4gICAgJHNjb3BlLkxpYnJhcnlTZWN0b3IgPSBMaWJyYXJ5RmlsdGVyRmFjdG9yeS5MaWJyYXJ5X0NvdW50cztcbiAgICAkc2NvcGUuRWR1Y2F0aW9uU2VjdG9yID0gVWdhbmRhRmFjdG9yeS5FZHVjYXRpb25fQ291bnRzO1xuXG4gICAgLy8gQ2hlY2sgYm94IGFyZSBjaGVja2VkIGJ5IGRlZmF1bHRcbiAgICAkc2NvcGUuSGVhbHRoU2VjdG9yLnZpZXdBbGwgPSB0cnVlO1xuICAgICRzY29wZS5MaWJyYXJ5U2VjdG9yLnZpZXdBbGwgPSB0cnVlO1xuICAgICRzY29wZS5DSUNPU2VjdG9yLnZpZXdBbGwgPSB0cnVlO1xuICAgICRzY29wZS5FZHVjYXRpb25TZWN0b3Iudmlld0FsbCA9IHRydWU7XG5cbiAgICAkc2NvcGUuSGVhbHRoU2VjdG9yLmFjdGl2ZSA9IGZhbHNlO1xuICAgICRzY29wZS5MaWJyYXJ5U2VjdG9yLmFjdGl2ZSA9IGZhbHNlO1xuICAgICRzY29wZS5DSUNPU2VjdG9yLmFjdGl2ZSA9IGZhbHNlO1xuICAgICRzY29wZS5FZHVjYXRpb25TZWN0b3IuYWN0aXZlID0gZmFsc2U7XG5cblxuICAgICRzY29wZS5jaGVja2VkQm9vbCA9IFwiVmlldyBBbGxcIjtcbiAgICAkc2NvcGUuc2VsZWN0ZWRTZWN0b3IgPSAnQ0lDT1MnO1xuXG4gICAgLy8gR2V0IHNlbGVjdGVkIHRhYlxuICAgICRzY29wZS5zZXRTZWxlY3RlZFNlY3RvciA9IGZ1bmN0aW9uIChzZWxlY3Rpb24pIHtcbiAgICAgICAgU2VjdG9yRmFjdG9yeS5zZXRTZWxlY3RlZFNlY3RvcihzZWxlY3Rpb24pO1xuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRTZWN0b3IgPSBTZWN0b3JGYWN0b3J5LlNlbGVjdGVkU2VjdG9yO1xuXG4gICAgICAgICRzY29wZS4kd2F0Y2goJ3NlbGVjdGVkU2VjdG9yJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzZWxlY3RlZFNlY3RvcicsICRzY29wZS5zZWxlY3RlZFNlY3Rvcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJTZWxlY3RlZCBTZWN0b3I6IFwiICsgJHNjb3BlLnNlbGVjdGVkU2VjdG9yKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNoZWNrQWxsQ0lDTyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUuQ0lDT1NlY3Rvci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCRzY29wZS5DSUNPU2VjdG9yLnNlbGVjdGVkQWxsID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuQ0lDT1NlY3RvcltpXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYoJHNjb3BlLkNJQ09TZWN0b3JbaV0uaGFzT3duUHJvcGVydHkoXCJwcm92aWRlcnNcIik9PXRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCAkc2NvcGUuQ0lDT1NlY3RvcltpXS5wcm92aWRlcnMubGVuZ3RoOyBwKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5DSUNPU2VjdG9yW2ldLnByb3ZpZGVyc1twXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRzY29wZS5DSUNPU2VjdG9yW2ldLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgJHNjb3BlLmNoZWNrQWxsSGVhbHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5IZWFsdGhTZWN0b3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICgkc2NvcGUuSGVhbHRoU2VjdG9yLnNlbGVjdGVkQWxsID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuSGVhbHRoU2VjdG9yW2ldLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLkhlYWx0aFNlY3RvcltpXS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgICRzY29wZS5jaGVja0FsbExpYnJhcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLkxpYnJhcnlTZWN0b3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICgkc2NvcGUuTGlicmFyeVNlY3Rvci5zZWxlY3RlZEFsbCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLkxpYnJhcnlTZWN0b3JbaV0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuTGlicmFyeVNlY3RvcltpXS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgICRzY29wZS5jaGVja0FsbEFnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5BZ1NlY3Rvci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCRzY29wZS5BZ1NlY3Rvci5zZWxlY3RlZEFsbCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLkFnU2VjdG9yW2ldLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLkFnU2VjdG9yW2ldLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgJHNjb3BlLmNoZWNrQWxsRWR1Y2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5FZHVjYXRpb25TZWN0b3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICRzY29wZS5FZHVjYXRpb25TZWN0b3JbaV0uc2VsZWN0ZWQgPSAkc2NvcGUuRWR1Y2F0aW9uU2VjdG9yLnNlbGVjdGVkQWxsO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLy8gSGFuZGxlIENoZWNrL1VuY2hlY2sgQWxsIGZpbHRlcnNcbiAgICAkc2NvcGUuZmlsdGVyQ0lDTyA9IGZ1bmN0aW9uIChib29sKSB7XG5cbiAgICAgICAgdmFyIGNpY29zZWN0b3JOYW1lID0gJyc7XG4gICAgICAgIHZhciBzdGF0ZUNvdW50cnkgPSAkc3RhdGVQYXJhbXMuY291bnRyeS5jYXBpdGFsaXplKCk7XG5cbiAgICAgICAgaWYoc3RhdGVDb3VudHJ5PT0nSW5kaWEnKXtcbiAgICAgICAgICAgIGNpY29zZWN0b3JOYW1lID0gJ0NJQ09TJ1xuICAgICAgICB9XG4gICAgICAgIGlmKHN0YXRlQ291bnRyeT09J0tlbnlhJyl7XG4gICAgICAgICAgICBjaWNvc2VjdG9yTmFtZSA9ICdjaWNvc19rZW55YSdcbiAgICAgICAgfVxuICAgICAgICBpZihzdGF0ZUNvdW50cnk9PSdOaWdlcmlhJyl7XG4gICAgICAgICAgICBjaWNvc2VjdG9yTmFtZSA9ICdjaWNvc19uaWdlcmlhJ1xuICAgICAgICB9XG4gICAgICAgIGlmKHN0YXRlQ291bnRyeT09J1VnYW5kYScpIHtcbiAgICAgICAgICAgIGNpY29zZWN0b3JOYW1lID0gJ2NpY29zX3VnYW5kYSdcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYoYm9vbCkge1xuICAgICAgICAgICAgLy8gaGFuZGxlIHRvZ2dsaW5nIHNlY3RvcnMgb24gYm90dG9tIHNlY3RvciBwYW5lbFxuICAgICAgICAgICAgaWYgKCRzdGF0ZVBhcmFtcy5sYXllcnMuaW5kZXhPZihjaWNvc2VjdG9yTmFtZSkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuQ0lDT1NlY3Rvci5zZWxlY3RlZEFsbCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRzY29wZS5DSUNPU2VjdG9yLnNlbGVjdGVkQWxsID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoJHN0YXRlUGFyYW1zLmxheWVycy5pbmRleE9mKGNpY29zZWN0b3JOYW1lKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICRzY29wZS5DSUNPU2VjdG9yLnNlbGVjdGVkQWxsID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRzY29wZS5DSUNPU2VjdG9yLnNlbGVjdGVkQWxsID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRvZ2dsZSBoZWFsdGggc2VjdG9yIGxhdGVyXG4gICAgICAgIGlmICgkc2NvcGUuQ0lDT1NlY3Rvci5zZWxlY3RlZEFsbCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGVDb3VudHJ5ID09ICdJbmRpYScpICRzY29wZS5DSUNPTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChzdGF0ZUNvdW50cnkgPT0gJ0tlbnlhJykgJHNjb3BlLkNJQ09MYXllcl9LZW55YS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHN0YXRlQ291bnRyeSA9PSAnTmlnZXJpYScpICRzY29wZS5DSUNPTGF5ZXJfTmlnZXJpYS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHN0YXRlQ291bnRyeSA9PSAnVWdhbmRhJykgJHNjb3BlLkNJQ09MYXllcl9VZ2FuZGEuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgJHNjb3BlLmNoZWNrQWxsQ0lDTygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHN0YXRlQ291bnRyeSA9PSAnSW5kaWEnKSAkc2NvcGUuQ0lDT0xheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHN0YXRlQ291bnRyeSA9PSAnS2VueWEnKSAkc2NvcGUuQ0lDT0xheWVyX0tlbnlhLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHN0YXRlQ291bnRyeSA9PSAnTmlnZXJpYScpICRzY29wZS5DSUNPTGF5ZXJfTmlnZXJpYS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChzdGF0ZUNvdW50cnkgPT0gJ1VnYW5kYScpICRzY29wZS5DSUNPTGF5ZXJfVWdhbmRhLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgJHNjb3BlLmNoZWNrQWxsQ0lDTygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICRzY29wZS5maWx0ZXJIZWFsdGggPSBmdW5jdGlvbiAoYm9vbCkge1xuICAgICAgICBpZihib29sKSB7XG4gICAgICAgICAgICAvLyBoYW5kbGUgdG9nZ2xpbmcgc2VjdG9ycyBvbiBib3R0b20gc2VjdG9yIHBhbmVsXG4gICAgICAgICAgICBpZiAoJHN0YXRlUGFyYW1zLmxheWVycy5pbmRleE9mKCdoZWFsdGgnKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICRzY29wZS5IZWFsdGhTZWN0b3Iuc2VsZWN0ZWRBbGwgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuSGVhbHRoU2VjdG9yLnNlbGVjdGVkQWxsID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoJHN0YXRlUGFyYW1zLmxheWVycy5pbmRleE9mKCdoZWFsdGgnKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICRzY29wZS5IZWFsdGhTZWN0b3Iuc2VsZWN0ZWRBbGwgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLkhlYWx0aFNlY3Rvci5zZWxlY3RlZEFsbCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUb2dnbGUgaGVhbHRoIHNlY3RvciBsYXRlclxuICAgICAgICBpZiAoJHNjb3BlLkhlYWx0aFNlY3Rvci5zZWxlY3RlZEFsbCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAkc2NvcGUuSGVhbHRoTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICRzY29wZS5jaGVja0FsbEhlYWx0aCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHNjb3BlLkhlYWx0aExheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgJHNjb3BlLmNoZWNrQWxsSGVhbHRoKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgJHNjb3BlLmZpbHRlckxpYnJhcnkgPSBmdW5jdGlvbiAoYm9vbCkge1xuXG4gICAgICAgIGlmKGJvb2wpIHtcbiAgICAgICAgICAgIC8vIGhhbmRsZSB0b2dnbGluZyBzZWN0b3JzIG9uIGJvdHRvbSBzZWN0b3IgcGFuZWxcbiAgICAgICAgICAgIGlmICgkc3RhdGVQYXJhbXMubGF5ZXJzLmluZGV4T2YoJ2xpYnJhcnknKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICRzY29wZS5MaWJyYXJ5U2VjdG9yLnNlbGVjdGVkQWxsID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLkxpYnJhcnlTZWN0b3Iuc2VsZWN0ZWRBbGwgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICgkc3RhdGVQYXJhbXMubGF5ZXJzLmluZGV4T2YoJ2xpYnJhcnknKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICRzY29wZS5MaWJyYXJ5U2VjdG9yLnNlbGVjdGVkQWxsID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRzY29wZS5MaWJyYXJ5U2VjdG9yLnNlbGVjdGVkQWxsID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRvZ2dsZSBsaWJyYXJ5IHNlY3RvclxuICAgICAgICBpZiAoJHNjb3BlLkxpYnJhcnlTZWN0b3Iuc2VsZWN0ZWRBbGwgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgJHNjb3BlLkxpYnJhcnlMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgJHNjb3BlLmNoZWNrQWxsTGlicmFyeSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHNjb3BlLkxpYnJhcnlMYXllci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICRzY29wZS5jaGVja0FsbExpYnJhcnkoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAkc2NvcGUuZmlsdGVyQWcgPSBmdW5jdGlvbiAoYm9vbCkge1xuICAgICAgICBpZihib29sKSB7XG4gICAgICAgICAgICAvLyBoYW5kbGUgdG9nZ2xpbmcgc2VjdG9ycyBvbiBib3R0b20gc2VjdG9yIHBhbmVsXG4gICAgICAgICAgICBpZiAoJHN0YXRlUGFyYW1zLmxheWVycy5pbmRleE9mKCdhZ3JpY3VsdHVyZScpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLkFnU2VjdG9yLnNlbGVjdGVkQWxsID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLkFnU2VjdG9yLnNlbGVjdGVkQWxsID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoJHN0YXRlUGFyYW1zLmxheWVycy5pbmRleE9mKCdhZ3JpY3VsdHVyZScpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLkFnU2VjdG9yLnNlbGVjdGVkQWxsID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRzY29wZS5BZ1NlY3Rvci5zZWxlY3RlZEFsbCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUb2dnbGUgYWcgc2VjdG9yXG4gICAgICAgIGlmICgkc2NvcGUuQWdTZWN0b3Iuc2VsZWN0ZWRBbGwgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgJHNjb3BlLkFnTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICRzY29wZS5jaGVja0FsbEFnKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkc2NvcGUuQWdMYXllci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICRzY29wZS5jaGVja0FsbEFnKCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkc2NvcGUuZmlsdGVyRWR1Y2F0aW9uID0gZnVuY3Rpb24gKGJvb2wpIHtcbiAgICAgICAgaWYoYm9vbCkge1xuICAgICAgICAgICAgLy8gaGFuZGxlIHRvZ2dsaW5nIHNlY3RvcnMgb24gYm90dG9tIHNlY3RvciBwYW5lbFxuICAgICAgICAgICAgaWYgKCRzdGF0ZVBhcmFtcy5sYXllcnMuaW5kZXhPZignZWR1Y2F0aW9uJykgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuRWR1Y2F0aW9uU2VjdG9yLnNlbGVjdGVkQWxsID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLkVkdWNhdGlvblNlY3Rvci5zZWxlY3RlZEFsbCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCRzdGF0ZVBhcmFtcy5sYXllcnMuaW5kZXhPZignZWR1Y2F0aW9uJykgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuRWR1Y2F0aW9uU2VjdG9yLnNlbGVjdGVkQWxsID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRzY29wZS5FZHVjYXRpb25TZWN0b3Iuc2VsZWN0ZWRBbGwgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVG9nZ2xlIGFnIHNlY3RvclxuICAgICAgICBpZiAoJHNjb3BlLkVkdWNhdGlvblNlY3Rvci5zZWxlY3RlZEFsbCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAkc2NvcGUuRWR1Y2F0aW9uTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICRzY29wZS5jaGVja0FsbEVkdWNhdGlvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHNjb3BlLkVkdWNhdGlvbkxheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgJHNjb3BlLmNoZWNrQWxsRWR1Y2F0aW9uKCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cblxuICAgICRzY29wZS50b2dnbGVWaWV3QWxsSGVhbHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkc2NvcGUuSGVhbHRoU2VjdG9yLnZpZXdBbGwgPSAhJHNjb3BlLkhlYWx0aFNlY3Rvci52aWV3QWxsO1xuICAgIH07XG5cbiAgICAkc2NvcGUudG9nZ2xlVmlld0FsbEFnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkc2NvcGUuQWdTZWN0b3Iudmlld0FsbCA9ICEkc2NvcGUuQWdTZWN0b3Iudmlld0FsbDtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnRvZ2dsZVZpZXdBbGxMaWJyYXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkc2NvcGUuTGlicmFyeVNlY3Rvci52aWV3QWxsID0gISRzY29wZS5MaWJyYXJ5U2VjdG9yLnZpZXdBbGw7XG4gICAgfTtcblxuICAgICRzY29wZS50b2dnbGVWaWV3QWxsQ0lDT1MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRzY29wZS5DSUNPU2VjdG9yLnZpZXdBbGwgPSAhJHNjb3BlLkNJQ09TZWN0b3Iudmlld0FsbDtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnRvZ2dsZVZpZXdBbGxFZHVjYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vJHNjb3BlLkVkdWNhdGlvblNlY3Rvci52aWV3QWxsID0gISRzY29wZS5FZHVjYXRpb25TZWN0b3Iudmlld0FsbDtcbiAgICB9XG5cbiAgICAkc2NvcGUuVmlld0FsbFNlY3RvcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkc2NvcGUuQ0lDT1NlY3Rvci5hY3RpdmUgPT0gZmFsc2UpICRzY29wZS50b2dnbGVWaWV3QWxsQ0lDT1MoKTtcbiAgICAgICAgaWYgKCRzY29wZS5MaWJyYXJ5U2VjdG9yLmFjdGl2ZSA9PSBmYWxzZSkgJHNjb3BlLnRvZ2dsZVZpZXdBbGxMaWJyYXJ5KCk7XG4gICAgICAgIGlmICgkc2NvcGUuQWdTZWN0b3IuYWN0aXZlID09IGZhbHNlKSAkc2NvcGUudG9nZ2xlVmlld0FsbEFnKCk7XG4gICAgICAgIGlmICgkc2NvcGUuSGVhbHRoU2VjdG9yLmFjdGl2ZSA9PSBmYWxzZSkgJHNjb3BlLnRvZ2dsZVZpZXdBbGxIZWFsdGgoKTtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGZpbHRlcnMgY2xpY2tzIGV2ZW50c1xuICAgICRzY29wZS5zZXRDSUNPU2VsZWN0aW9uID0gZnVuY3Rpb24gKHR5cGUsIGNoZWNrZWQsIHByb3ZfdHlwZSwgcHJvdl9jaGVja2VkKSB7XG4gICAgICAgIC8vIFNldCBzZWxlY3RlZCB2YWx1ZSBmb3IgZWFjaCB0eXBlIGJhc2VkIG9uIGNoZWNrYm94XG4gICAgICAgIGlmICh0eXBlICE9PSBudWxsICYmIGNoZWNrZWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLkNJQ09TZWN0b3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PSAkc2NvcGUuQ0lDT1NlY3RvcltpXS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5DSUNPU2VjdG9yW2ldLnNlbGVjdGVkID0gY2hlY2tlZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGUgKyBcIjogXCIgKyBjaGVja2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNhdmUgc2VsZWN0ZWQgRmlsdGVycyBpbnRvIGFycmF5XG4gICAgICAgICRzY29wZS5DSUNPU2VsZWN0aW9ucyA9IFtdO1xuICAgICAgICAkc2NvcGUuQ0lDT1NlbGVjdGlvbnNfb2JqID0ge307XG4gICAgICAgICRzY29wZS5DSUNPVG9wMyA9IFtdO1xuICAgICAgICB2YXIgY2ljb19zZWN0b3IgPSAnJztcblxuICAgICAgICBpZiAoJHNjb3BlLnNlbGVjdGlvbiA9PSAnSW5kaWEnKSB7XG4gICAgICAgICAgICBjaWNvX3NlY3RvciA9ICdDSUNPUyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCRzY29wZS5zZWxlY3Rpb24gPT0gJ0tlbnlhJykge1xuICAgICAgICAgICAgY2ljb19zZWN0b3IgPSAnY2ljb3Nfa2VueWEnO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkc2NvcGUuc2VsZWN0aW9uID09ICdOaWdlcmlhJykge1xuICAgICAgICAgICAgY2ljb19zZWN0b3IgPSAnY2ljb3NfbmlnZXJpYSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHNjb3BlLnNlbGVjdGlvbiA9PSAnVWdhbmRhJykge1xuICAgICAgICAgICAgY2ljb19zZWN0b3IgPSAnY2ljb3NfdWdhbmRhJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vc2F2ZSBzZWxlY3Rpb24gaW5kZXhcbiAgICAgICAgdmFyIHNpZHggPSAwO1xuICAgICAgICB2YXIgb3JkZXIgPSAwO1xuXG5cbiAgICAgICAgLy9BZGQgdG8gQ0lDTyBTZWxlY3Rpb25zXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLkNJQ09TZWN0b3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwcm92aWRlcnMgPSBbXTtcbiAgICAgICAgICAgIGlmICgkc2NvcGUuQ0lDT1NlY3RvcltpXS5zZWxlY3RlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5DSUNPU2VjdG9yW2ldLnByb3ZpZGVycykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8ICRzY29wZS5DSUNPU2VjdG9yW2ldLnByb3ZpZGVycy5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ZfdHlwZSAhPT0gbnVsbCAmJiBwcm92X2NoZWNrZWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PSAkc2NvcGUuQ0lDT1NlY3RvcltpXS50eXBlICYmICRzY29wZS5DSUNPU2VjdG9yW2ldLnByb3ZpZGVyc1t4XS50eXBlID09IHByb3ZfdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuQ0lDT1NlY3RvcltpXS5wcm92aWRlcnNbeF0uc2VsZWN0ZWQgPSBwcm92X2NoZWNrZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5DSUNPU2VjdG9yW2ldLnByb3ZpZGVyc1t4XS5zZWxlY3RlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzLnB1c2goJHNjb3BlLkNJQ09TZWN0b3JbaV0ucHJvdmlkZXJzW3hdLnR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5DSUNPU2VsZWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAkc2NvcGUuQ0lDT1NlY3RvcltpXS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiAkc2NvcGUuQ0lDT1NlY3RvcltpXS5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN0b3I6IGNpY29fc2VjdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogcHJvdmlkZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkNJQ09TZWxlY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJHNjb3BlLkNJQ09TZWN0b3JbaV0udHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiAkc2NvcGUuQ0lDT1NlY3RvcltpXS5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3RvcjogY2ljb19zZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9BZGQgdG8gVG9wIDMgYXJyYXlcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8ICRzY29wZS5DSUNPU2VsZWN0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAvLyBUb3AgMyBpbmNsdWRlcyB0aGUgTEFTVCAzIENJQ08gc2VsZWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLkNJQ09Ub3AzLmluY2x1ZGVzKCRzY29wZS5DSUNPU2VsZWN0aW9uc1skc2NvcGUuQ0lDT1NlbGVjdGlvbnMubGVuZ3RoIC0gMV0pID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLkNJQ09Ub3AzLmxlbmd0aCA+PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkNJQ09Ub3AzLnNwbGljZShzaWR4LCAxLCAkc2NvcGUuQ0lDT1NlbGVjdGlvbnNbJHNjb3BlLkNJQ09TZWxlY3Rpb25zLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudG9wMyA9ICgkc2NvcGUuQ0lDT1RvcDMubGVuZ3RoID4gMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8kc2NvcGUuQ0lDT1NlY3Rvci52aWV3QWxsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpZHggPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZHgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWR4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5DSUNPVG9wMy5wdXNoKCRzY29wZS5DSUNPU2VsZWN0aW9uc1skc2NvcGUuQ0lDT1NlbGVjdGlvbnMubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50b3AzID0gKCRzY29wZS5DSUNPVG9wMy5sZW5ndGggPiAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyRzY29wZS5DSUNPU2VjdG9yLnZpZXdBbGwgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICAvLyBBZGQgb2JqZWN0IGNvbnRhaW5pbmcgbGF5ZXIgbmFtZSB0byBjaWNvIHNlbGVjdGlvbnMgc28gbWFwIHdpbGwgcmVtb3ZlIHRoZSBsYXN0IHNlY3RvciAobWFwLmpzIGZpbmRMYXllcigpKVxuICAgICAgICBpZiAoJHNjb3BlLkNJQ09TZWxlY3Rpb25zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAkc2NvcGUuQ0lDT1NlbGVjdGlvbnMucHVzaCh7c2VjdG9yOiBjaWNvX3NlY3Rvcn0pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgJHNjb3BlLnNldEFnU2VsZWN0aW9uID0gZnVuY3Rpb24gKHNlY3RvciwgY2hlY2tlZCkge1xuXG4gICAgICAgIC8vIFNldCBzZWxlY3RlZCB2YWx1ZSBmb3IgZWFjaCBzZWN0b3IgYmFzZWQgb24gY2hlY2tib3hcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUuQWdTZWN0b3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzZWN0b3IgPT0gJHNjb3BlLkFnU2VjdG9yW2ldLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuQWdTZWN0b3JbaV0uc2VsZWN0ZWQgPSBjaGVja2VkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coc2VjdG9yICsgXCI6IFwiICsgY2hlY2tlZCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2F2ZSBzZWxlY3RlZCBGaWx0ZXJzIGludG8gYXJyYXlcbiAgICAgICAgJHNjb3BlLkFnU2VsZWN0aW9ucyA9IFtdO1xuICAgICAgICAkc2NvcGUuQWdTZWxlY3Rpb25zX29iaiA9IHt9O1xuICAgICAgICAkc2NvcGUuQWdUb3AzID0gW107XG5cbiAgICAgICAgdmFyIGFnX3NlY3RvciA9ICcnO1xuXG4gICAgICAgIGlmICgkc2NvcGUuc2VsZWN0aW9uID09ICdJbmRpYScpIHtcbiAgICAgICAgICAgIGFnX3NlY3RvciA9ICdhZ3JpY3VsdHVyZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHNjb3BlLnNlbGVjdGlvbiA9PSAnVWdhbmRhJykge1xuICAgICAgICAgICAgYWdfc2VjdG9yID0gJ2FncmljdWx0dXJlX3VnYW5kYSc7XG4gICAgICAgIH1cblxuICAgICAgICAvL3NhdmUgc2VsZWN0aW9uIGluZGV4XG4gICAgICAgIHZhciBzaWR4ID0gMDtcbiAgICAgICAgdmFyIG9yZGVyID0gMDtcblxuICAgICAgICAvL0FkZCB0byBBZyBTZWxlY3Rpb25zXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLkFnU2VjdG9yLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoJHNjb3BlLkFnU2VjdG9yW2ldLnNlbGVjdGVkID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuQWdTZWxlY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJHNjb3BlLkFnU2VjdG9yW2ldLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogJHNjb3BlLkFnU2VjdG9yW2ldLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdG9yOiBhZ19zZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLy9BZGQgdG8gVG9wIDMgYXJyYXlcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8ICRzY29wZS5BZ1NlbGVjdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVG9wIDMgaW5jbHVkZXMgdGhlIExBU1QgMyBBZyBzZWxlY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuQWdUb3AzLmluY2x1ZGVzKCRzY29wZS5BZ1NlbGVjdGlvbnNbJHNjb3BlLkFnU2VsZWN0aW9ucy5sZW5ndGggLSAxXSkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuQWdUb3AzLmxlbmd0aCA+PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkFnVG9wMy5zcGxpY2Uoc2lkeCwgMSwgJHNjb3BlLkFnU2VsZWN0aW9uc1skc2NvcGUuQWdTZWxlY3Rpb25zLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudG9wMyA9ICgkc2NvcGUuQWdUb3AzLmxlbmd0aCA+IDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vJHNjb3BlLkFnU2VjdG9yLnZpZXdBbGwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2lkeCA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkeCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZHggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkFnVG9wMy5wdXNoKCRzY29wZS5BZ1NlbGVjdGlvbnNbJHNjb3BlLkFnU2VsZWN0aW9ucy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRvcDMgPSAoJHNjb3BlLkFnVG9wMy5sZW5ndGggPiAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyRzY29wZS5BZ1NlY3Rvci52aWV3QWxsID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBvYmplY3QgY29udGFpbmluZyBsYXllciBuYW1lIHRvIGhlYWx0aCBzZWxlY3Rpb25zIHNvIG1hcCB3aWxsIHJlbW92ZSB0aGUgbGFzdCBzZWN0b3IgKG1hcC5qcyBmaW5kTGF5ZXIoKSlcbiAgICAgICAgaWYgKCRzY29wZS5BZ1NlbGVjdGlvbnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICRzY29wZS5BZ1NlbGVjdGlvbnMucHVzaCh7c2VjdG9yOiBhZ19zZWN0b3J9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vdmFyIEFnU2VsZWN0aW9uc0xlbmd0aCA9ICRzY29wZS5BZ1NlbGVjdGlvbnMubGVuZ3RoO1xuICAgICAgICAvLy8vIEhhcmQgY29kZWQgMTZcbiAgICAgICAgLy9pZiAoJHNjb3BlLnNlbGVjdGlvbiA9PSAnS2VueWEnICYmIEFnU2VsZWN0aW9uc0xlbmd0aCA8IEFnRmlsdGVyRmFjdG9yeS5BZ3NUeXBlVG90YWxfS2VueWEpIHtcbiAgICAgICAgLy8gICAgJHNjb3BlLkFnU2VjdG9yLnNlbGVjdGVkQWxsID0gZmFsc2U7XG4gICAgICAgIC8vfSBlbHNlIHtcbiAgICAgICAgLy8gICAgJHNjb3BlLkFnU2VjdG9yLnNlbGVjdGVkQWxsID0gdHJ1ZTtcbiAgICAgICAgLy99XG5cbiAgICAgICAgLy9mb3IodmFyIGk9JHNjb3BlLkFnU2VsZWN0aW9ucy5sZW5ndGgtMTtpPDM7aSsrKXtcbiAgICAgICAgLy8gICRzY29wZS5BZ1RvcDMucHVzaCgkc2NvcGUuQWdTZWxlY3Rpb25zW2ldKTtcbiAgICAgICAgLy99XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJUT1AgMzogXCIgKyAkc2NvcGUuQWdUb3AzKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImxlbmd0aDogXCIgKyBBZ1NlbGVjdGlvbnNMZW5ndGggKyBcIiBcIiArICRzY29wZS5BZ1NlbGVjdGlvbnMpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuc2V0SGVhbHRoU2VsZWN0aW9uID0gZnVuY3Rpb24gKHNlY3RvciwgY2hlY2tlZCkge1xuICAgICAgICAvLyBTZXQgc2VsZWN0ZWQgdmFsdWUgZm9yIGVhY2ggc2VjdG9yIGJhc2VkIG9uIGNoZWNrYm94XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLkhlYWx0aFNlY3Rvci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNlY3RvciA9PSAkc2NvcGUuSGVhbHRoU2VjdG9yW2ldLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuSGVhbHRoU2VjdG9yW2ldLnNlbGVjdGVkID0gY2hlY2tlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlY3RvciArIFwiOiBcIiArIGNoZWNrZWQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNhdmUgc2VsZWN0ZWQgRmlsdGVycyBpbnRvIGFycmF5XG4gICAgICAgICRzY29wZS5IZWFsdGhTZWxlY3Rpb25zID0gW107XG4gICAgICAgICRzY29wZS5IZWFsdGhTZWxlY3Rpb25zX29iaiA9IHt9O1xuICAgICAgICAkc2NvcGUuSGVhbHRoVG9wMyA9IFtdO1xuXG4gICAgICAgIHZhciBoZWFsdGhfc2VjdG9yID0gJyc7XG5cbiAgICAgICAgaWYgKCRzY29wZS5zZWxlY3Rpb24gPT0gJ0luZGlhJykge1xuICAgICAgICAgICAgaGVhbHRoX3NlY3RvciA9ICdoZWFsdGgnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9zYXZlIHNlbGVjdGlvbiBpbmRleFxuICAgICAgICB2YXIgc2lkeCA9IDA7XG4gICAgICAgIHZhciBvcmRlciA9IDA7XG5cbiAgICAgICAgLy9BZGQgdG8gSGVhbHRoIFNlbGVjdGlvbnNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUuSGVhbHRoU2VjdG9yLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoJHNjb3BlLkhlYWx0aFNlY3RvcltpXS5zZWxlY3RlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLkhlYWx0aFNlbGVjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAkc2NvcGUuSGVhbHRoU2VjdG9yW2ldLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogJHNjb3BlLkhlYWx0aFNlY3RvcltpXS5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3RvcjogaGVhbHRoX3NlY3RvclxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvL0FkZCB0byBUb3AgMyBhcnJheVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgJHNjb3BlLkhlYWx0aFNlbGVjdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVG9wIDMgaW5jbHVkZXMgdGhlIExBU1QgMyBIZWFsdGggc2VsZWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLkhlYWx0aFRvcDMuaW5jbHVkZXMoJHNjb3BlLkhlYWx0aFNlbGVjdGlvbnNbJHNjb3BlLkhlYWx0aFNlbGVjdGlvbnMubGVuZ3RoIC0gMV0pID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLkhlYWx0aFRvcDMubGVuZ3RoID49IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuSGVhbHRoVG9wMy5zcGxpY2Uoc2lkeCwgMSwgJHNjb3BlLkhlYWx0aFNlbGVjdGlvbnNbJHNjb3BlLkhlYWx0aFNlbGVjdGlvbnMubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50b3AzID0gKCRzY29wZS5IZWFsdGhUb3AzLmxlbmd0aCA+IDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5IZWFsdGhTZWN0b3Iudmlld0FsbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaWR4IDwgMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWR4Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkeCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuSGVhbHRoVG9wMy5wdXNoKCRzY29wZS5IZWFsdGhTZWxlY3Rpb25zWyRzY29wZS5IZWFsdGhTZWxlY3Rpb25zLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudG9wMyA9ICgkc2NvcGUuSGVhbHRoVG9wMy5sZW5ndGggPiAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyRzY29wZS5IZWFsdGhTZWN0b3Iudmlld0FsbCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgb2JqZWN0IGNvbnRhaW5pbmcgbGF5ZXIgbmFtZSB0byBoZWFsdGggc2VsZWN0aW9ucyBzbyBtYXAgd2lsbCByZW1vdmUgdGhlIGxhc3Qgc2VjdG9yIChtYXAuanMgZmluZExheWVyKCkpXG4gICAgICAgIGlmICgkc2NvcGUuSGVhbHRoU2VsZWN0aW9ucy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgJHNjb3BlLkhlYWx0aFNlbGVjdGlvbnMucHVzaCh7c2VjdG9yOiBoZWFsdGhfc2VjdG9yfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL3ZhciBIZWFsdGhTZWxlY3Rpb25zTGVuZ3RoID0gJHNjb3BlLkhlYWx0aFNlbGVjdGlvbnMubGVuZ3RoO1xuICAgICAgICAvLy8vIEhhcmQgY29kZWQgMTZcbiAgICAgICAgLy9pZiAoJHNjb3BlLnNlbGVjdGlvbiA9PSAnS2VueWEnICYmIEhlYWx0aFNlbGVjdGlvbnNMZW5ndGggPCBIZWFsdGhGaWx0ZXJGYWN0b3J5LkhlYWx0aHNUeXBlVG90YWxfS2VueWEpIHtcbiAgICAgICAgLy8gICAgJHNjb3BlLkhlYWx0aFNlY3Rvci5zZWxlY3RlZEFsbCA9IGZhbHNlO1xuICAgICAgICAvL30gZWxzZSB7XG4gICAgICAgIC8vICAgICRzY29wZS5IZWFsdGhTZWN0b3Iuc2VsZWN0ZWRBbGwgPSB0cnVlO1xuICAgICAgICAvL31cblxuICAgICAgICAvL2Zvcih2YXIgaT0kc2NvcGUuSGVhbHRoU2VsZWN0aW9ucy5sZW5ndGgtMTtpPDM7aSsrKXtcbiAgICAgICAgLy8gICRzY29wZS5IZWFsdGhUb3AzLnB1c2goJHNjb3BlLkhlYWx0aFNlbGVjdGlvbnNbaV0pO1xuICAgICAgICAvL31cblxuICAgICAgICBjb25zb2xlLmxvZyhcIlRPUCAzOiBcIiArICRzY29wZS5IZWFsdGhUb3AzKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImxlbmd0aDogXCIgKyBIZWFsdGhTZWxlY3Rpb25zTGVuZ3RoICsgXCIgXCIgKyAkc2NvcGUuSGVhbHRoU2VsZWN0aW9ucyk7XG4gICAgfTtcblxuICAgICRzY29wZS5zZXRMaWJyYXJ5U2VsZWN0aW9uID0gZnVuY3Rpb24gKHNlY3RvciwgY2hlY2tlZCkge1xuICAgICAgICAvLyBTZXQgc2VsZWN0ZWQgdmFsdWUgZm9yIGVhY2ggc2VjdG9yIGJhc2VkIG9uIGNoZWNrYm94XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLkxpYnJhcnlTZWN0b3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzZWN0b3IgPT0gJHNjb3BlLkxpYnJhcnlTZWN0b3JbaV0udHlwZSkge1xuICAgICAgICAgICAgICAgICRzY29wZS5MaWJyYXJ5U2VjdG9yW2ldLnNlbGVjdGVkID0gY2hlY2tlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlY3RvciArIFwiOiBcIiArIGNoZWNrZWQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNhdmUgc2VsZWN0ZWQgRmlsdGVycyBpbnRvIGFycmF5XG4gICAgICAgICRzY29wZS5MaWJyYXJ5U2VsZWN0aW9ucyA9IFtdO1xuICAgICAgICAkc2NvcGUuTGlicmFyeVNlbGVjdGlvbnNfb2JqID0ge307XG4gICAgICAgICRzY29wZS5MaWJyYXJ5VG9wMyA9IFtdO1xuXG4gICAgICAgIHZhciBsaWJyYXJ5X3NlY3RvciA9ICcnO1xuXG4gICAgICAgIGlmICgkc2NvcGUuc2VsZWN0aW9uID09ICdJbmRpYScpIHtcbiAgICAgICAgICAgIGxpYnJhcnlfc2VjdG9yID0gJ2xpYnJhcnknO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9zYXZlIHNlbGVjdGlvbiBpbmRleFxuICAgICAgICB2YXIgc2lkeCA9IDA7XG4gICAgICAgIHZhciBvcmRlciA9IDA7XG5cbiAgICAgICAgLy9BZGQgdG8gTGlicmFyeSBTZWxlY3Rpb25zXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLkxpYnJhcnlTZWN0b3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICgkc2NvcGUuTGlicmFyeVNlY3RvcltpXS5zZWxlY3RlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLkxpYnJhcnlTZWxlY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJHNjb3BlLkxpYnJhcnlTZWN0b3JbaV0udHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiAkc2NvcGUuTGlicmFyeVNlY3RvcltpXS5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3RvcjogbGlicmFyeV9zZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLy9MaWJyYXJ5IG9ubHkgaGFzIDQgc3ViIHNlY3RvcnM7IHRvcCAzIGlzIHVubmVjZXNzYXJ5XG4gICAgICAgICAgICAgICAgLy9BZGQgdG8gVG9wIDMgYXJyYXlcbiAgICAgICAgICAgICAgICAvL2ZvciAodmFyIGogPSAwOyBqIDwgJHNjb3BlLkxpYnJhcnlTZWxlY3Rpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgLy8gVG9wIDMgaW5jbHVkZXMgdGhlIExBU1QgMyBMaWJyYXJ5IHNlbGVjdGlvbnNcbiAgICAgICAgICAgICAgICAvLyAgICBpZiAoJHNjb3BlLkxpYnJhcnlUb3AzLmluY2x1ZGVzKCRzY29wZS5MaWJyYXJ5U2VsZWN0aW9uc1skc2NvcGUuTGlicmFyeVNlbGVjdGlvbnMubGVuZ3RoIC0gMV0pID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgIGlmICgkc2NvcGUuTGlicmFyeVRvcDMubGVuZ3RoID49IDMpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICRzY29wZS5MaWJyYXJ5VG9wMy5zcGxpY2Uoc2lkeCwgMSwgJHNjb3BlLkxpYnJhcnlTZWxlY3Rpb25zWyRzY29wZS5MaWJyYXJ5U2VsZWN0aW9ucy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAkc2NvcGUudG9wMyA9ICgkc2NvcGUuTGlicmFyeVRvcDMubGVuZ3RoID4gMCk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAkc2NvcGUuTGlicmFyeVNlY3Rvci52aWV3QWxsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICBpZiAoc2lkeCA8Mil7c2lkeCsrO30gZWxzZSB7c2lkeCA9IDA7fVxuICAgICAgICAgICAgICAgIC8vICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgJHNjb3BlLkxpYnJhcnlUb3AzLnB1c2goJHNjb3BlLkxpYnJhcnlTZWxlY3Rpb25zWyRzY29wZS5MaWJyYXJ5U2VsZWN0aW9ucy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAkc2NvcGUudG9wMyA9ICgkc2NvcGUuTGlicmFyeVRvcDMubGVuZ3RoID4gMCk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAvLyRzY29wZS5MaWJyYXJ5U2VjdG9yLnZpZXdBbGwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgfVxuICAgICAgICAgICAgICAgIC8vfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIG9iamVjdCBjb250YWluaW5nIGxheWVyIG5hbWUgdG8gbGlicmFyeSBzZWxlY3Rpb25zIHNvIG1hcCB3aWxsIHJlbW92ZSB0aGUgbGFzdCBzZWN0b3IgKG1hcC5qcyBmaW5kTGF5ZXIoKSlcbiAgICAgICAgaWYgKCRzY29wZS5MaWJyYXJ5U2VsZWN0aW9ucy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgJHNjb3BlLkxpYnJhcnlTZWxlY3Rpb25zLnB1c2goe3NlY3RvcjogbGlicmFyeV9zZWN0b3J9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vdmFyIExpYnJhcnlTZWxlY3Rpb25zTGVuZ3RoID0gJHNjb3BlLkxpYnJhcnlTZWxlY3Rpb25zLmxlbmd0aDtcbiAgICAgICAgLy8vLyBIYXJkIGNvZGVkIDE2XG4gICAgICAgIC8vaWYgKCRzY29wZS5zZWxlY3Rpb24gPT0gJ0tlbnlhJyAmJiBMaWJyYXJ5U2VsZWN0aW9uc0xlbmd0aCA8IExpYnJhcnlGaWx0ZXJGYWN0b3J5LkxpYnJhcnlzVHlwZVRvdGFsX0tlbnlhKSB7XG4gICAgICAgIC8vICAgICRzY29wZS5MaWJyYXJ5U2VjdG9yLnNlbGVjdGVkQWxsID0gZmFsc2U7XG4gICAgICAgIC8vfSBlbHNlIHtcbiAgICAgICAgLy8gICAgJHNjb3BlLkxpYnJhcnlTZWN0b3Iuc2VsZWN0ZWRBbGwgPSB0cnVlO1xuICAgICAgICAvL31cblxuICAgICAgICAvL2Zvcih2YXIgaT0kc2NvcGUuTGlicmFyeVNlbGVjdGlvbnMubGVuZ3RoLTE7aTwzO2krKyl7XG4gICAgICAgIC8vICAkc2NvcGUuTGlicmFyeVRvcDMucHVzaCgkc2NvcGUuTGlicmFyeVNlbGVjdGlvbnNbaV0pO1xuICAgICAgICAvL31cblxuICAgICAgICBjb25zb2xlLmxvZyhcIlRPUCAzOiBcIiArICRzY29wZS5MaWJyYXJ5VG9wMyk7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJsZW5ndGg6IFwiICsgTGlicmFyeVNlbGVjdGlvbnNMZW5ndGggKyBcIiBcIiArICRzY29wZS5MaWJyYXJ5U2VsZWN0aW9ucyk7XG4gICAgfTtcblxuICAgIC8vIEJyb2FkQ2FzdCBjaGFuZ2UgaW4gZmlsdGVyIFNlbGVjdGlvbnNcbiAgICAkc2NvcGUuJHdhdGNoKCdBZ1NlbGVjdGlvbnMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnQWdTZWxlY3Rpb25zJywgJHNjb3BlLkFnU2VsZWN0aW9ucyk7XG4gICAgfSk7XG5cbiAgICAkc2NvcGUuJHdhdGNoKCdDSUNPU2VsZWN0aW9ucycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygkc2NvcGUuQ0lDT1NlY3Rvcik7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnQ0lDT1NlbGVjdGlvbnMnLCAkc2NvcGUuQ0lDT1NlbGVjdGlvbnMpO1xuICAgIH0sIHRydWUpO1xuXG4gICAgJHNjb3BlLiR3YXRjaCgnSGVhbHRoU2VsZWN0aW9ucycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdIZWFsdGhTZWxlY3Rpb25zJywgJHNjb3BlLkhlYWx0aFNlbGVjdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgJHNjb3BlLiR3YXRjaCgnTGlicmFyeVNlbGVjdGlvbnMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnTGlicmFyeVNlbGVjdGlvbnMnLCAkc2NvcGUuTGlicmFyeVNlbGVjdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgLy8gV2F0Y2ggZm9yIGNoYW5nZSBpbiBzZWxlY3RlZCBTZWN0b3JcbiAgICAkc2NvcGUuJHdhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBTZWN0b3JGYWN0b3J5LlNlbGVjdGVkU2VjdG9yO1xuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRTZWN0b3IgPSBTZWN0b3JGYWN0b3J5LlNlbGVjdGVkU2VjdG9yO1xuICAgICAgICAgICAgJHNjb3BlLmFsbFNlY3RvcnMgPSBTZWN0b3JGYWN0b3J5LmFsbFNlY3RvcnM7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgJHNjb3BlLnN1Ym1pdEZpbHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHN0YXRlUGFyYW1zLmZpbHRlcnMgPSAkc2NvcGUud2hlcmVDbGF1c2U7XG4gICAgICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgICAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG4gICAgfTtcblxuICAgICRzY29wZS5jbGVhckFsbEZpbHRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vJHNjb3BlLkFnU2VjdG9yLnNlbGVjdGVkQWxsID0gZmFsc2U7XG4gICAgICAgIC8vJHNjb3BlLkxpYnJhcnlTZWN0b3Iuc2VsZWN0ZWRBbGwgPSBmYWxzZTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8kc2NvcGUuc2NyYXBlQ0lDT1NlbGVjdGlvbigpO1xuICAgICAgICAvLyRzY29wZS5zY3JhcGVIZWFsdGhTZWxlY3Rpb24oKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy9MaWJyYXJ5RmlsdGVyRmFjdG9yeS5jbGVhckFsbCgkc2NvcGUuTGlicmFyeVNlY3Rvciwkc2NvcGUuc2VsZWN0ZWRTZWN0b3IsJHNjb3BlLkxpYnJhcnlTZWN0b3Iuc2VsZWN0ZWRBbGwpO1xuICAgICAgICAvLyRzY29wZS5jaGVja2VkQm9vbCA9IExpYnJhcnlGaWx0ZXJGYWN0b3J5LmNoZWNrQm9vbDtcbiAgICAgICAgLy9BZ0ZpbHRlckZhY3RvcnkuY2xlYXJBbGwoJHNjb3BlLkFnU2VjdG9yLCRzY29wZS5zZWxlY3RlZFNlY3Rvciwkc2NvcGUuQWdTZWN0b3Iuc2VsZWN0ZWRBbGwpO1xuICAgICAgICAvLyRzY29wZS5jaGVja2VkQm9vbCA9IEFnRmlsdGVyRmFjdG9yeS5jaGVja0Jvb2w7XG4gICAgfTtcblxuICAgICRzY29wZS5zY3JhcGVDSUNPU2VsZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkc2NvcGUuQ0lDT1NlY3Rvci5zZWxlY3RlZEFsbCA9IGZhbHNlO1xuICAgICAgICAkc2NvcGUuQ0lDT0xheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBDSUNPRmlsdGVyRmFjdG9yeS5jbGVhckFsbCgkc2NvcGUuQ0lDT1NlY3RvciwgJHNjb3BlLnNlbGVjdGVkU2VjdG9yLCAkc2NvcGUuQ0lDT1NlY3Rvci5zZWxlY3RlZEFsbCk7XG4gICAgICAgICRzY29wZS5jaGVja2VkQm9vbCA9IENJQ09GaWx0ZXJGYWN0b3J5LmNoZWNrQm9vbDtcbiAgICAgICAgJHNjb3BlLkNJQ09TZWN0b3Iuc2VsZWN0ZWRBbGwgPSBDSUNPRmlsdGVyRmFjdG9yeS5zZWxlY3RhbGw7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJDSUNPIENoZWNrZWQgQm9vbDogXCIgKyAkc2NvcGUuY2hlY2tlZEJvb2wpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNJQ08gU2VsZWN0ZWQgQWxsOiBcIiArICRzY29wZS5DSUNPU2VjdG9yLnNlbGVjdGVkQWxsKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJDSUNPIEFjdGl2ZT8gXCIgKyAkc2NvcGUuQ0lDT0xheWVyLmFjdGl2ZSk7XG4gICAgfTtcblxuICAgICRzY29wZS5zY3JhcGVIZWFsdGhTZWxlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRzY29wZS5IZWFsdGhTZWN0b3Iuc2VsZWN0ZWRBbGwgPSBmYWxzZTtcbiAgICAgICAgJHNjb3BlLkhlYWx0aExheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBIZWFsdGhGaWx0ZXJGYWN0b3J5LmNsZWFyQWxsKCRzY29wZS5IZWFsdGhTZWN0b3IsICRzY29wZS5zZWxlY3RlZFNlY3RvciwgJHNjb3BlLkhlYWx0aFNlY3Rvci5zZWxlY3RlZEFsbCk7XG4gICAgICAgICRzY29wZS5jaGVja2VkQm9vbCA9IEhlYWx0aEZpbHRlckZhY3RvcnkuY2hlY2tCb29sO1xuICAgICAgICAkc2NvcGUuSGVhbHRoU2VjdG9yLnNlbGVjdGVkQWxsID0gSGVhbHRoRmlsdGVyRmFjdG9yeS5zZWxlY3RhbGw7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJIZWFsdGggQ2hlY2tlZCBCb29sOiBcIiArICRzY29wZS5jaGVja2VkQm9vbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGVhbHRoIFNlbGVjdGVkIEFsbDogXCIgKyAkc2NvcGUuSGVhbHRoU2VjdG9yLnNlbGVjdGVkQWxsKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJIZWFsdGggQWN0aXZlPyBcIiArICRzY29wZS5IZWFsdGhMYXllci5hY3RpdmUpO1xuXG4gICAgfTtcblxuICAgICRzY29wZS5nYWRtTGV2ZWwgPSAkc3RhdGVQYXJhbXMubGV2ZWwgfHwgJ2F1dG8nO1xuXG4gICAgJHNjb3BlLiR3YXRjaCgnZ2FkbUxldmVsJywgZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICRzdGF0ZVBhcmFtcy5sZXZlbCA9IG5ld1ZhbHVlO1xuICAgICAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lIHx8ICdtYWluJztcbiAgICAgICAgJHN0YXRlLmdvKHN0YXRlLCAkc3RhdGVQYXJhbXMpO1xuICAgIH0pO1xuXG4gICAgJHNjb3BlLiRvbignem9vbS11cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiem9vbTogXCIgKyAkc3RhdGVQYXJhbXMuem9vbSk7XG4gICAgICAgICRzY29wZS56b29tID0gcGFyc2VJbnQoJHN0YXRlUGFyYW1zLnpvb20pO1xuICAgIH0pO1xuXG4gICAgLy9OSCBUT0RPOiBOb3QgeWV0IGZ1bGx5IGltcGxlbWVudGVkIC0gcG9zc2libGUgZXh0cmEgZmVhdHVyZS4uLlxuICAgIC8qKlxuICAgICAqIExheWVycyB0aGF0IGFyZSBhY3RpdmUgb24gdGhlIG1hcCBidXQgYXJlIG5vdCBtZW50aW9uZWQgaW4gTGF5ZXJDb25maWdcbiAgICAgKiBAdHlwZSB7e319XG4gICAgICovXG4gICAgJHNjb3BlLm5vbWFkTGF5ZXJzID0ge307XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSByb3V0ZSBjaGFuZ2VzLCB3ZSBzaG91bGQgc2VlIHdoYXQgbGF5ZXJzIHdlIGhhdmUgb24gdGhlcmUgYW5kIGhhdmUgdGhlIGxheWVyc1xuICAgICAqIGluIHRoZSBwYW5lbHMgY2hlY2tlZCBhY2NvcmRpbmdseS5cbiAgICAgKi9cbiAgICAkc2NvcGUuJG9uKCdsYXllcnMtdXBkYXRlJywgZnVuY3Rpb24gKGV2dCwgbGF5ZXJzKSB7XG4gICAgICAgIHZhciBjdXJyZW50bGF5ZXJzID0gW107XG5cbiAgICAgICAgLy8gc2V0IGN1cnJlbnQgbGF5ZXJzIGZvciBtYXAuanMgc2NvcGUuYWxsU2VjdG9yc1xuICAgICAgICB2YXIgbGF5ZXJzID0gJHN0YXRlUGFyYW1zLmxheWVycy5zcGxpdChcIixcIik7XG4gICAgICAgIGxheWVycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGlkeCkge1xuICAgICAgICAgICAgaWYgKGlkeCAhPT0gMCAmJiBjdXJyZW50bGF5ZXJzLmluZGV4T2YodmFsKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRsYXllcnMucHVzaCh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBTZWN0b3JGYWN0b3J5LmFsbFNlY3RvcnMgPSBjdXJyZW50bGF5ZXJzO1xuXG4gICAgICAgIC8vIGZpbHRlciBjaWNvIGlzIHVzZWQgdHdvIHdheXM7IHBhcmFtZXRlciBpcyBmYWxzZSB3aGVuIGZpbHRlcmluZyBmcm9tIGEgdXJsIGxheWVyIHVwZGF0ZVxuICAgICAgICAvLyB0cnVlIHdoZW4gZmlsdGVyaW5nIGZyb20gVUlcbiAgICAgICAgJHNjb3BlLmZpbHRlckNJQ08oZmFsc2UpO1xuICAgICAgICAkc2NvcGUuZmlsdGVyTGlicmFyeShmYWxzZSk7XG4gICAgICAgICRzY29wZS5maWx0ZXJBZyhmYWxzZSk7XG4gICAgICAgICRzY29wZS5maWx0ZXJIZWFsdGgoZmFsc2UpO1xuXG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnYWxsLXNlY3RvcnMnLGN1cnJlbnRsYXllcnMpO1xuXG4gICAgICAgIC8vIGdpdGh1YiBnaXN0c1xuICAgICAgICAkc2NvcGUubGlzdEdpc3RzKCk7XG5cbiAgICAgICAgLy8gcmVzZXQgdGhlIG5vbWFkIGxheWVyc1xuICAgICAgICBmb3IgKHZhciBuayBpbiAkc2NvcGUubm9tYWRMYXllcnMpIHtcbiAgICAgICAgICAgICRzY29wZS5ub21hZExheWVyc1tua10uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXNldCB0aGUgbGF5ZXIgY29uZmlnIGxheWVyc1xuICAgICAgICBmb3IgKHZhciBsY2sgaW4gTGF5ZXJDb25maWcpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgTGF5ZXJDb25maWdbbGNrXSA9PT0gJ29iamVjdCcgJiYgTGF5ZXJDb25maWdbbGNrXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIExheWVyQ29uZmlnW2xja10uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgaWYgdGhlIGxheWVyIGlzIGFjdGl2ZSBpbiBtYXAgbGF5ZXJzXG4gICAgICAgICAqL1xuICAgICAgICAkc2NvcGUubWFwTGF5ZXJzID0gbGF5ZXJzO1xuICAgICAgICAvLyBza2lwIHRoZSBmaXJzdCBsYXllciwgdGhlIGJhc2VtYXBcbiAgICAgICAgZm9yICh2YXIgaSA9IDEsIGxlbiA9IGxheWVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIGwgPSBsYXllcnNbaV07XG4gICAgICAgICAgICAvLyBsYXllciBpcyBpbiB0aGUgbGF5ZXIgY29uZmlnXG4gICAgICAgICAgICBpZiAodHlwZW9mIExheWVyQ29uZmlnW2xdID09PSAnb2JqZWN0JyAmJiBMYXllckNvbmZpZ1tsXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIExheWVyQ29uZmlnW2xdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBsYXllciBpcyBhIGdpdGh1YiBnaXN0XG4gICAgICAgICAgICBlbHNlIGlmICgkc2NvcGUuZ2lzdHNbbF0pIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuZ2lzdHNbbF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGxheWVyIGlzIGEgbm90IGluIHRoZSBsYXllciBjb25maWcuIGl0J3Mgbm9tYWRpYy5cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICRzY29wZS5ub21hZExheWVyc1tsXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbCxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBsLFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICRzY29wZS50b2dnbGVNYXBMYXllciA9IGZ1bmN0aW9uIChsYXllcktleSwgbGF5ZXIpIHtcblxuICAgICAgICBpZiAoJHNjb3BlLnNlbGVjdGlvbiA9PSAnS2VueWEnKSB7XG4gICAgICAgICAgICBsYXllcktleSA9ICdjaWNvc19rZW55YSc7XG4gICAgICAgICAgICBsYXllciA9ICRzY29wZS5DSUNPTGF5ZXJfS2VueWE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHNjb3BlLnNlbGVjdGlvbiA9PSAnTmlnZXJpYScpIHtcbiAgICAgICAgICAgIGxheWVyS2V5ID0gJ2NpY29zX25pZ2VyaWEnO1xuICAgICAgICAgICAgbGF5ZXIgPSAkc2NvcGUuQ0lDT0xheWVyX05pZ2VyaWE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHNjb3BlLnNlbGVjdGlvbiA9PSAnVWdhbmRhJyl7XG4gICAgICAgICAgICBpZihsYXllcktleSA9PSAnY2ljb3NfdWdhbmRhJyB8fCBsYXllcktleSA9PSAnQ0lDT1MnKXtcbiAgICAgICAgICAgICAgICBsYXllcktleSA9ICdjaWNvc191Z2FuZGEnO1xuICAgICAgICAgICAgICAgIGxheWVyID0gJHNjb3BlLkNJQ09MYXllcl9VZ2FuZGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihsYXllcktleSA9PSAnZWR1Y2F0aW9uJyl7XG4gICAgICAgICAgICAgICAgbGF5ZXJLZXkgPSAnZWR1Y2F0aW9uX3VnYW5kYSc7XG4gICAgICAgICAgICAgICAgbGF5ZXIgPSAkc2NvcGUuRWR1Y2F0aW9uTGF5ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGF5ZXJLZXkgPT0gJ2FncmljdWx0dXJlJyl7XG4gICAgICAgICAgICAgICAgbGF5ZXJLZXkgPSAnYWdyaWN1bHR1cmVfdWdhbmRhJztcbiAgICAgICAgICAgICAgICBsYXllciA9ICRzY29wZS5BZ0xheWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIGxheWVyXG5cbiAgICAgICAgaWYgKGxheWVyLmFjdGl2ZSA9PT0gdHJ1ZSAmJiAkc3RhdGVQYXJhbXMubGF5ZXJzLmluZGV4T2YobGF5ZXJLZXkpPT0tMSkge1xuICAgICAgICAgICAgJHNjb3BlLm1hcExheWVycy5wdXNoKGxheWVyS2V5KTtcblxuICAgICAgICAgICAgLy8gcmVtb3ZlIGxheWVyXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkc2NvcGUubWFwTGF5ZXJzID0gJC5ncmVwKCRzY29wZS5tYXBMYXllcnMsIGZ1bmN0aW9uIChyb3V0ZUxheWVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlTGF5ZXIgIT09IGxheWVyS2V5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdCBhY3RpdmVcIik7XG4gICAgICAgIH1cblxuICAgICAgICAkc3RhdGVQYXJhbXMubGF5ZXJzID0gJHNjb3BlLm1hcExheWVycy5qb2luKCcsJyk7XG4gICAgICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgICAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG5cbiAgICB9O1xuXG4gICAgJHNjb3BlLnJlbW92ZU1hcExheWVyID0gZnVuY3Rpb24gKGxheWVyS2V5LCBsYXllcikge1xuXG4gICAgICAgIC8vIHJlbW92ZSBsYXllclxuICAgICAgICBpZiAobGF5ZXIuYWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgJHNjb3BlLm1hcExheWVycyA9ICQuZ3JlcCgkc2NvcGUubWFwTGF5ZXJzLCBmdW5jdGlvbiAocm91dGVMYXllcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUxheWVyICE9PSBsYXllcktleTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3QgYWN0aXZlXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJHN0YXRlUGFyYW1zLmxheWVycyA9ICRzY29wZS5tYXBMYXllcnMuam9pbignLCcpO1xuICAgICAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lIHx8ICdtYWluJztcbiAgICAgICAgJHN0YXRlLmdvKHN0YXRlLCAkc3RhdGVQYXJhbXMpO1xuXG4gICAgfTtcblxuICAgICRzY29wZS5saXN0R2lzdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRzY29wZS5naXN0cyA9IGdpc3RzLmZldGNoKCk7XG4gICAgICAgIGlmICgkc2NvcGUuZ2lzdHMpIHtcbiAgICAgICAgICAgICRzY29wZS5udW1HaXN0cyA9IE9iamVjdC5rZXlzKCRzY29wZS5naXN0cykubGVuZ3RoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHNjb3BlLm51bUdpc3RzID0gMDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgJHNjb3BlLmxpc3RHaXN0cygpO1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMy8yNy8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdTcGF0aWFsVmlld2VyJykuY29udHJvbGxlcignSW5mb0N0cmwnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgJHNjb3BlLnBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcbn0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMy8yNy8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdTcGF0aWFsVmlld2VyJykuY29udHJvbGxlcignTGF5ZXJzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIExheWVyQ29uZmlnLCBWZWN0b3JQcm92aWRlcikge1xuICAkc2NvcGUucGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuICAkc2NvcGUuem9vbSA9IHBhcnNlSW50KCRzdGF0ZVBhcmFtcy56b29tKTtcbiAgJHNjb3BlLm5hdlRhYiA9ICdjb250ZXh0dWFsJztcblxuICBkZWJ1Zy5MYXllckNvbmZpZyA9IExheWVyQ29uZmlnO1xuXG4gICRzY29wZS5nYWRtTGV2ZWwgPSAkc3RhdGVQYXJhbXMubGV2ZWwgfHwgJ2F1dG8nO1xuXG4gICRzY29wZS4kd2F0Y2goJ2dhZG1MZXZlbCcsIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICRzdGF0ZVBhcmFtcy5sZXZlbCA9IG5ld1ZhbHVlO1xuICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgfSk7XG5cbiAgJHNjb3BlLiRvbignem9vbS11cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJ6b29tOiBcIiArICRzdGF0ZVBhcmFtcy56b29tKTtcbiAgICAkc2NvcGUuem9vbSA9IHBhcnNlSW50KCRzdGF0ZVBhcmFtcy56b29tKTtcbiAgfSk7XG5cbiAgJHNjb3BlLmxheWVyc1BhbmVscyA9IHtcbi8vICAgICdCb3VuZGFyaWVzJzoge30sXG4vLyAgICAnR2VvSlNPTic6IHt9LFxuLy8gICAgJ0tNTCc6IHt9LFxuLy8gICAgJ0NTVic6IHt9LFxuLy8gICAgJ1dNUyc6IHt9LFxuICAgICdDb250ZXh0dWFsIGxheWVyczonOiB7fVxuICB9O1xuXG4gIGZvciAodmFyIGxheWVyS2V5IGluIExheWVyQ29uZmlnKSB7XG5cbiAgICAvLyBXZSBkb24ndCB3YW50IHRvIHNob3cgbGF5ZXJzIHRoYXQgYXJlIGJhc2VtYXBzLCBhbmQgd2UgZG9uJ3Qgd2FudCB0byBzaG93IHRoZSBmaW5kIGZ1bmMuXG4gICAgaWYgKCAgdHlwZW9mIExheWVyQ29uZmlnW2xheWVyS2V5XSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICB8fCBsYXllcktleSA9PT0gJ2Jhc2VtYXBzJ1xuICAgICAgICB8fCBMYXllckNvbmZpZ1tsYXllcktleV0udHlwZSA9PT0gJ2Jhc2VtYXAnKSB7XG5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1dCBsYXllcnMgaW4gdGhlaXIgcmVzcGVjdGl2ZSBjYXRlZ29yaWVzLlxuICAgICAqL1xuLy9cbi8vICAgIGVsc2UgaWYgKExheWVyQ29uZmlnW2xheWVyS2V5XS50eXBlICYmIExheWVyQ29uZmlnW2xheWVyS2V5XS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdnZW9qc29uJykge1xuLy8gICAgICAkc2NvcGUubGF5ZXJzUGFuZWxzLkdlb0pTT05bbGF5ZXJLZXldID0gTGF5ZXJDb25maWdbbGF5ZXJLZXldO1xuLy8gICAgfVxuLy9cbi8vICAgIGVsc2UgaWYgKExheWVyQ29uZmlnW2xheWVyS2V5XS50eXBlICYmIExheWVyQ29uZmlnW2xheWVyS2V5XS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdrbWwnKSB7XG4vLyAgICAgICRzY29wZS5sYXllcnNQYW5lbHMuS01MW2xheWVyS2V5XSA9IExheWVyQ29uZmlnW2xheWVyS2V5XTtcbi8vICAgIH1cbi8vXG4vLyAgICBlbHNlIGlmIChMYXllckNvbmZpZ1tsYXllcktleV0udHlwZSAmJiBMYXllckNvbmZpZ1tsYXllcktleV0udHlwZS50b0xvd2VyQ2FzZSgpID09PSAnY3N2Jykge1xuLy8gICAgICAkc2NvcGUubGF5ZXJzUGFuZWxzLkNTVltsYXllcktleV0gPSBMYXllckNvbmZpZ1tsYXllcktleV07XG4vLyAgICB9XG4vL1xuLy8gICAgZWxzZSBpZiAoTGF5ZXJDb25maWdbbGF5ZXJLZXldLnR5cGUgJiYgTGF5ZXJDb25maWdbbGF5ZXJLZXldLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3dtcycpIHtcbi8vICAgICAgJHNjb3BlLmxheWVyc1BhbmVscy5XTVNbbGF5ZXJLZXldID0gTGF5ZXJDb25maWdbbGF5ZXJLZXldO1xuLy8gICAgfVxuXG4gICAgJHNjb3BlLmxheWVyc1BhbmVsc1snQ29udGV4dHVhbCBsYXllcnM6J11bbGF5ZXJLZXldID0ga2V5VG9PYmoobGF5ZXJLZXkpO1xuXG4gIH1cblxuICBkZWJ1Zy5sYXllcnNQYW5lbHMgPSAkc2NvcGUubGF5ZXJzUGFuZWxzO1xuXG4gIGZ1bmN0aW9uIGtleVRvT2JqKGtleSkge1xuICAgIHZhbCA9IExheWVyQ29uZmlnW2xheWVyS2V5XTtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVybDogdmFsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgLy9OSCBUT0RPOiBOb3QgeWV0IGZ1bGx5IGltcGxlbWVudGVkIC0gcG9zc2libGUgZXh0cmEgZmVhdHVyZS4uLlxuICAvKipcbiAgICogTGF5ZXJzIHRoYXQgYXJlIGFjdGl2ZSBvbiB0aGUgbWFwIGJ1dCBhcmUgbm90IG1lbnRpb25lZCBpbiBMYXllckNvbmZpZ1xuICAgKiBAdHlwZSB7e319XG4gICAqL1xuICAkc2NvcGUubm9tYWRMYXllcnMgPSB7fTtcblxuICAvKipcbiAgICogV2hlbiB0aGUgcm91dGUgY2hhbmdlcywgd2Ugc2hvdWxkIHNlZSB3aGF0IGxheWVycyB3ZSBoYXZlIG9uIHRoZXJlIGFuZCBoYXZlIHRoZSBsYXllcnNcbiAgICogaW4gdGhlIHBhbmVscyBjaGVja2VkIGFjY29yZGluZ2x5LlxuICAgKi9cbiAgLy8kc2NvcGUuJG9uKCdsYXllcnMtdXBkYXRlJywgZnVuY3Rpb24oZXZ0LCBsYXllcnMpIHtcbiAgLy9cbiAgLy8gIC8vIGdpdGh1YiBnaXN0c1xuICAvLyAgJHNjb3BlLmxpc3RHaXN0cygpO1xuICAvL1xuICAvLyAgLy8gcmVzZXQgdGhlIG5vbWFkIGxheWVyc1xuICAvLyAgZm9yICh2YXIgbmsgaW4gJHNjb3BlLm5vbWFkTGF5ZXJzKSB7XG4gIC8vICAgICRzY29wZS5ub21hZExheWVyc1tua10uYWN0aXZlID0gZmFsc2U7XG4gIC8vICB9XG4gIC8vXG4gIC8vICAvLyByZXNldCB0aGUgbGF5ZXIgY29uZmlnIGxheWVyc1xuICAvLyAgZm9yICh2YXIgbGNrIGluIExheWVyQ29uZmlnKSB7XG4gIC8vICAgIGlmICh0eXBlb2YgTGF5ZXJDb25maWdbbGNrXSA9PT0gJ29iamVjdCcgJiYgTGF5ZXJDb25maWdbbGNrXSAhPT0gbnVsbCkge1xuICAvLyAgICAgIExheWVyQ29uZmlnW2xja10uYWN0aXZlID0gZmFsc2U7XG4gIC8vICAgIH1cbiAgLy8gIH1cbiAgLy9cbiAgLy8gIC8qKlxuICAvLyAgICogQ2hlY2sgaWYgdGhlIGxheWVyIGlzIGFjdGl2ZSBpbiBtYXAgbGF5ZXJzXG4gIC8vICAgKi9cbiAgLy8gICRzY29wZS5tYXBMYXllcnMgPSBsYXllcnM7XG4gIC8vICAvLyBza2lwIHRoZSBmaXJzdCBsYXllciwgdGhlIGJhc2VtYXBcbiAgLy8gIGZvciAodmFyIGkgPSAxLCBsZW4gPSBsYXllcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgLy8gICAgdmFyIGwgPSBsYXllcnNbaV07XG4gIC8vICAgIC8vIGxheWVyIGlzIGluIHRoZSBsYXllciBjb25maWdcbiAgLy8gICAgaWYgKHR5cGVvZiBMYXllckNvbmZpZ1tsXSA9PT0gJ29iamVjdCcgJiYgTGF5ZXJDb25maWdbbF0gIT09IG51bGwpIHtcbiAgLy8gICAgICBMYXllckNvbmZpZ1tsXS5hY3RpdmUgPSB0cnVlO1xuICAvLyAgICB9XG4gIC8vICAgIC8vIGxheWVyIGlzIGEgZ2l0aHViIGdpc3RcbiAgLy8gICAgZWxzZSBpZiAoJHNjb3BlLmdpc3RzW2xdKSB7XG4gIC8vICAgICAgJHNjb3BlLmdpc3RzW2xdLmFjdGl2ZSA9IHRydWU7XG4gIC8vICAgIH1cbiAgLy8gICAgLy8gbGF5ZXIgaXMgYSBub3QgaW4gdGhlIGxheWVyIGNvbmZpZy4gaXQncyBub21hZGljLlxuICAvLyAgICBlbHNlIHtcbiAgLy8gICAgICAkc2NvcGUubm9tYWRMYXllcnNbbF0gPSB7XG4gIC8vICAgICAgICBuYW1lOiBsLFxuICAvLyAgICAgICAgdXJsOiBsLFxuICAvLyAgICAgICAgYWN0aXZlOiB0cnVlXG4gIC8vICAgICAgfVxuICAvLyAgICB9XG4gIC8vICB9XG4gIC8vfSk7XG5cbiAgJHNjb3BlLnRvZ2dsZU1hcExheWVyID0gZnVuY3Rpb24gKGxheWVyS2V5LCBsYXllcikge1xuXG4gICAgLy8gYWRkIGxheWVyXG4gICAgaWYgKGxheWVyLmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgJHNjb3BlLm1hcExheWVycy5wdXNoKGxheWVyS2V5KTtcblxuICAgICAgLy8gcmVtb3ZlIGxheWVyXG4gICAgfSBlbHNlIHtcbiAgICAgICRzY29wZS5tYXBMYXllcnMgPSAkLmdyZXAoJHNjb3BlLm1hcExheWVycywgZnVuY3Rpb24ocm91dGVMYXllcil7XG4gICAgICAgIHJldHVybiByb3V0ZUxheWVyICE9PSBsYXllcktleTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgICRzdGF0ZVBhcmFtcy5sYXllcnMgPSAkc2NvcGUubWFwTGF5ZXJzLmpvaW4oJywnKTtcbiAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lIHx8ICdtYWluJztcbiAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG5cbiAgfTtcblxuICAkc2NvcGUubGlzdEdpc3RzID0gZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS5naXN0cyA9IGdpc3RzLmZldGNoKCk7XG4gICAgaWYgKCRzY29wZS5naXN0cykge1xuICAgICAgJHNjb3BlLm51bUdpc3RzID0gT2JqZWN0LmtleXMoJHNjb3BlLmdpc3RzKS5sZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICRzY29wZS5udW1HaXN0cyA9IDA7XG4gICAgfVxuICB9O1xuICAkc2NvcGUubGlzdEdpc3RzKCk7XG4gIGRlYnVnLmdpc3RzTGF5ZXJzUGFuZWwgPSAkc2NvcGUuZ2lzdHM7XG5cbn0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMy8yNy8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdTcGF0aWFsVmlld2VyJykuY29udHJvbGxlcignTGVnZW5kQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgTGF5ZXJDb25maWcsICRzdGF0ZVBhcmFtcykge1xuXG4gIC8vJHNjb3BlLiRvbignbGF5ZXJzLXVwZGF0ZScsIGZ1bmN0aW9uIChldnQsIGxheWVycykge1xuICAvLyAgJHNjb3BlLmxheWVycyA9IFtdO1xuICAvLyAgZm9yICh2YXIgaSA9IGxheWVycy5sZW5ndGggLSAxOyBpID49IDE7IGktLSl7XG4gIC8vICAgIHZhciBsID0gbGF5ZXJzW2ldO1xuICAvLyAgICB2YXIgbGF5ZXIgPSB7fTtcbiAgLy8gICAgdmFyIGxjZmcgPSBMYXllckNvbmZpZy5maW5kKGwpO1xuICAvL1xuICAvLyAgICBsYXllci5hbGlhcyA9IGw7XG4gIC8vICAgIGxheWVyLm5hbWUgPSBsY2ZnLm5hbWU7XG4gIC8vICAgIGlmKGwgPT09ICd0aGVtZWNvdW50JyB8fCBsID09PSAndGhlbWUnKXtcbiAgLy8gICAgICAgIGxheWVyLm5hbWUgPSAkc3RhdGVQYXJhbXMudGhlbWUgfHwgJ1Byb2plY3QnO1xuICAvLyAgICB9XG4gIC8vICAgIGlmICghbmFtZSAmJiBsY2ZnLnByb3BlcnRpZXMgJiYgbGNmZy5wcm9wZXJ0aWVzLnRpdGxlKSB7XG4gIC8vICAgICAgbGF5ZXIubmFtZSA9IGxjZmcucHJvcGVydGllcy50aXRsZTtcbiAgLy8gICAgfSBlbHNlIGlmICghbGF5ZXIubmFtZSkge1xuICAvLyAgICAgIGxheWVyLm5hbWUgPSBsO1xuICAvLyAgICB9XG4gIC8vXG4gIC8vICAgIGlmKGxjZmcucHJvcGVydGllcyl7XG4gIC8vICAgICAgICBpZihsY2ZnLnByb3BlcnRpZXMubGVnZW5kKXtcbiAgLy8gICAgICAgICAgICBpZih0eXBlb2YgbGNmZy5wcm9wZXJ0aWVzLmxlZ2VuZCA9PT0gJ2Z1bmN0aW9uJyl7XG4gIC8vICAgICAgICAgICAgICAgICAgLy9CdWlsZCB0aGUgbGVnZW5kIGVsZW1lbnRcbiAgLy8gICAgICAgICAgICAgICAgICBsYXllci5hY3RpdmVMZWdlbmQgPSBsY2ZnLnByb3BlcnRpZXMubGVnZW5kKCRzdGF0ZVBhcmFtcy50aGVtZSB8fCAncHJvamVjdCcpO1xuICAvLyAgICAgICAgICAgIH1cbiAgLy8gICAgICAgICAgICBlbHNle1xuICAvLyAgICAgICAgICAgICAgICAvL0lmIGxlZ2VuZCBpcyBhIHN0cmluZywgdXNlIGl0IGRpcmVjdGx5XG4gIC8vICAgICAgICAgICAgICAgIGxheWVyLmFjdGl2ZUxlZ2VuZCA9IGxjZmcucHJvcGVydGllcy5sZWdlbmQ7XG4gIC8vICAgICAgICAgICAgfVxuICAvLyAgICAgICAgfWVsc2V7XG4gIC8vICAgICAgICAgICAgLy9ObyBsZWdlbmQgZGVmaW5lZC4gIFVzZSBhIGRlZmF1bHQuXG4gIC8vXG4gIC8vICAgICAgICB9XG4gIC8vICAgIH1cbiAgLy9cbiAgLy8gICAgJHNjb3BlLmxheWVycy5wdXNoKGxheWVyKTtcbiAgLy8gIH1cbiAgLy99KTtcblxufSk7IiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnU3BhdGlhbFZpZXdlcicpLmNvbnRyb2xsZXIoJ01haW5DdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgJGxvY2F0aW9uKSB7XG4gIGRlYnVnLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RlZmF1bHRSb3V0ZScsICRsb2NhdGlvbi5wYXRoKCkpO1xuXG4gIC8vIE5IIFRPRE86IFNlZSBpZiB0aGlzIGlzIGFsc28gdGhlIGNhc2Ugd2l0aCB1aS1yb3V0ZXI/XG4gIC8vIHdlaXJkIGJ1ZyB3aGVyZSByZWRpcmVjdCBwZWVscyBvdXQgJzovL3tzJyB3aGVuICc6JyBpcyB0aGVyZVxuICAvLyAkcm91dGVQYXJhbXMubGF5ZXJzIFdlIGp1c3QgZG9udCBoYXZlIHRoZSA6IGluIG1haW4uanMgc28gdGhhdFxuICAvLyBwYXJ0IG9mIHRoZSBwYXRoIGRvZXMgbm90IGdvIGF3YXkuLi5cbiAgdmFyIGxheWVyc1N0ciA9ICRzdGF0ZVBhcmFtcy5sYXllcnMgPSAkc3RhdGVQYXJhbXMubGF5ZXJzLnJlcGxhY2UoJ2h0dHAvLycsICdodHRwOi8vJyk7XG4gIHZhciB0aGVtZVN0ciA9ICRzdGF0ZVBhcmFtcy50aGVtZTtcblxuICB2YXIgbGV2ZWxTdHIgPSAkc3RhdGVQYXJhbXMubGV2ZWw7XG4gIHZhciB6b29tU3RyID0gJHN0YXRlUGFyYW1zLnpvb207XG5cbiAgdmFyIGNvdW50cnkgPSAkc3RhdGVQYXJhbXMuY291bnRyeTtcblxuICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3JvdXRlLXVwZGF0ZScpO1xuXG4gIC8qKlxuICAgKiBPbmx5IGlmIHRoZSBsYXRlc3Qgcm91dGUgaGFzIGEgZGlmZmVyZW50IGxheWVyIHN0cmluZyB0aGFuIGJlZm9yZS5cbiAgICovXG4gIGlmIChsYXllcnNTdHIgIT09IHdpbmRvdy5wcmV2TGF5ZXJzU3RyIHx8IHRoZW1lU3RyICE9PSB3aW5kb3cucHJldlRoZW1lKSB7XG4gICAgd2luZG93LnByZXZMYXllcnNTdHIgPSBsYXllcnNTdHI7XG4gICAgd2luZG93LnByZXZUaGVtZSA9IHRoZW1lU3RyO1xuICAgIHZhciBsYXllcnMgPSBsYXllcnNTdHIuc3BsaXQoJywnKTtcbiAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2xheWVycy11cGRhdGUnLCBsYXllcnMpO1xuICB9XG5cbiAgaWYoY291bnRyeSAhPT0gd2luZG93LnByZXZDb3VudHJ5U3RyKXtcbiAgICB3aW5kb3cucHJldkNvdW50cnlTdHIgPSBjb3VudHJ5O1xuICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY291bnRyeS11cGRhdGUnLGNvdW50cnkpO1xuICB9XG5cbiAgaWYgKGxldmVsU3RyICE9PSBudWxsICYmIGxldmVsU3RyICE9PSB3aW5kb3cucHJldkxldmVsU3RyKSB7XG4gICAgd2luZG93LnByZXZMZXZlbFN0ciA9IGxldmVsU3RyO1xuICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnbGV2ZWwtdXBkYXRlJywgbGV2ZWxTdHIpO1xuICB9XG5cbiAgaWYgKHpvb21TdHIgIT09IHdpbmRvdy5wcmV2Wm9vbVN0cikge1xuICAgIHdpbmRvdy5wcmV2Wm9vbVN0ciA9IHpvb21TdHI7XG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCd6b29tLXVwZGF0ZScsIHpvb21TdHIpO1xuICB9XG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgb24gTW9uIE1hciAxNyAyMDE0XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnU3BhdGlhbFZpZXdlcicpLmNvbnRyb2xsZXIoJ01hcEN0cmwnLCBmdW5jdGlvbiAoTGF5ZXJDb25maWcsIFZlY3RvclByb3ZpZGVyLCBJbmRpYUZhY3RvcnksIFNlY3RvckZhY3RvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBLZW55YUZhY3RvcnksIENJQ09GaWx0ZXJGYWN0b3J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVWdhbmRhRmFjdG9yeSwgQmFuZ2xhZGVzaEZhY3RvcnksIFRhbnphbmlhRmFjdG9yeSwgTmlnZXJpYUZhY3RvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUsICRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGh0dHApIHtcbiAgICB2YXIgbWFwID0gTC5tYXAoJ21hcCcsIHsgbWF4Wm9vbTogMTZ9KTtcbiAgICB2YXIgbGFzdExheWVyc1N0ciA9ICcnO1xuICAgIHZhciBsYXN0QmFzZW1hcFVybCA9IG51bGw7XG4gICAgdmFyIGxheWVyRGlmZmVyZW5jZTsgLy9hbiBvYmplY3QgdGhhdCBzdG9yZXMgd2hldGhlciBvciBub3QgbmV3IGxheWVycyBhcmUgYWRkZWQsIG9yIGhhdmUgYmVlbiByZW1vdmVkLCBhbmQgd2hhdCB0aGVpciBuYW1lcyBhcmVcbiAgICB2YXIgYmFzZW1hcExheWVyID0gbnVsbDtcbiAgICB2YXIgbGF5ZXJzU3RyID0gbnVsbDtcbiAgICB2YXIgb3ZlcmxheXMgPSBbXTtcbiAgICB2YXIgb3ZlcmxheU5hbWVzID0gW107XG4gICAgdmFyIG92ZXJsYXlzX2RpY3Rpb25hcnkgPSB7fTtcbiAgICB2YXIgdGhlbWUgPSBudWxsO1xuICAgIHZhciBmaWx0ZXJzID0gbnVsbDtcbiAgICB2YXIgTWFwQnVpbGRlciA9IHt9O1xuICAgIHZhciBhbGxmZWF0dXJlcyA9IFtdO1xuICAgICRzY29wZS5hbGxTZWN0b3JzID0gW107XG4gICAgJHNjb3BlLmZlYXR1cmVDb2xsZWN0aW9uID0gW107IC8vIGNyb3NzIHNlY3RvciBmZWF0dXJlcyB3aXRoaW4gc2VsZWN0ZWQgYnVmZmVyXG4gICAgJHNjb3BlLkNJQ09EZXRhaWxzID0gW107XG4gICAgJHNjb3BlLmRldGFpbHNJbmRleCA9IDA7XG4gICAgJHNjb3BlLkFMTHBvaW50cyA9IFtdO1xuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgYW4gb2JqZWN0IHRoYXQgaXMgYSBoYXNoIG9mIHRoZSBMYXRMbmdzIGZyb20gY2xpY2tzIHRvIHRoZSByZXN1bHRpbmcgYnVmZmVyLlxuICAgICAqIFRoaXMgaXMgc28gdGhhdCBjbGlja1RvQnVmZmVyIGRvZXMgbm90IGhhdmUgdG8gZG8gdGhlIGV4cGVuc2l2ZSBUdXJmIG9wZXJhdGlvbiByZXBlYXRlZGx5LFxuICAgICAqIGVzcGVjaWFsbHkgc2luY2Ugc2V2ZXJhbCBNVlRTb3VyY2UgbGF5ZXJzIHdpbGwgaGF2ZSB0aGUgc2FtZSBldmVudCBhbmQgaW5kZXBlbmRlbnRseSBiZVxuICAgICAqIHByb2Nlc3NpbmcgdGhpcyBldmVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHt7fX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHZhciBsYXRMbmdCdWZmZXJIYXNoID0ge307XG5cbiAgICB2YXIgTGlicmFyeURldGFpbHMgPSB7fTtcbiAgICB2YXIgTGlicmFyeVdoZXJlQ2xhdXNlID0gJyc7XG4gICAgJHNjb3BlLkNJQ09EZXRhaWxzID0ge307XG4gICAgdmFyIENJQ09XaGVyZUNsYXVzZSA9ICcnO1xuICAgIHZhciBBZ1doZXJlQ2xhdXNlID0gJyc7XG4gICAgdmFyIEhlYWx0aFdoZXJlQ2xhdXNlID0gJyc7XG4gICAgdmFyIFByb3ZpZGVyV2hlcmVDbGF1c2UgPSAnJztcblxuICAgICRzY29wZS4kb24oJ0FnU2VsZWN0aW9ucycsIGZ1bmN0aW9uIChldmVudCwgYXJncykge1xuXG4gICAgICAgIC8vIG9iamVjdCBrZXlzIGFyZSB0aGUgQ0lDTyBzZWxlY3Rpb24gc3ViIHNlY3RvciBuYW1lc1xuICAgICAgICB2YXIgdHlwZW9iaiA9IHt9O1xuICAgICAgICB2YXIgc2VjdG9yID0gJyc7XG4gICAgICAgIHZhciB0eXBlcyA9IFtdO1xuXG4gICAgICAgIGlmIChhcmdzKSB7XG4gICAgICAgICAgICBmb3IodmFyIGk9MDtpPGFyZ3MubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgdHlwZW9ialthcmdzW2ldLnR5cGVdID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBhcmdzW2ldLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgIHNlY3RvcjogYXJnc1tpXS5zZWN0b3JcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHR5cGVzLnB1c2goYXJnc1tpXS50eXBlKTtcbiAgICAgICAgICAgICAgICBzZWN0b3IgPSBhcmdzW2ldLnNlY3RvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQWdXaGVyZUNsYXVzZSA9IGJ1aWxkUG9zdEdyZXNRdWVyeUV4cHJlc3Npb24odHlwZXMsbnVsbCk7XG5cbiAgICAgICAgICAgIHZhciBmaWx0ZXIgPSBmdW5jdGlvbiAoZmVhdHVyZSwgY29udGV4dCkge1xuICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlICYmIGZlYXR1cmUucHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmVhdHVyZVByb3BlcnR5ID0gZmVhdHVyZS5wcm9wZXJ0aWVzLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHNlbGVjdGlvbnMgYXJlIHZhbGlkIHR5cGVzXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2JqW2ZlYXR1cmVQcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOyAgLy8gc2hvdyB0aGUgZmVhdHVyZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy9oaWRlIHRoZSBmZWF0dXJlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignV2UgYXJlIHRyeWluZyB0byBmaWx0ZXIgb24gYSBwb2ludCB3aXRoIG5vIGZlYXR1cmUgb3IgZmVhdHVyZS5wcm9wZXJ0aWVzLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIGVycm9yIHN0YXRlLCB0aGVyZSBzaG91bGQgYmUgYSBmZWF0dXJlIHdpdGggcHJvcGVydGllc1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIGFjdGl2ZUxheWVyID0gZmluZExheWVyKHNlY3Rvcik7XG5cbiAgICAgICAgICAgIGlmIChhY3RpdmVMYXllcikge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUxheWVyLnNldEZpbHRlcihmaWx0ZXIpO1xuICAgICAgICAgICAgICAgIGFjdGl2ZUxheWVyLnJlZHJhdyh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTUFQLkpTIExpc3RlbmVyIGVuYWJsZWRcIiArIGFyZ3MpO1xuICAgIH0pO1xuXG4gICAgJHNjb3BlLiRvbignQ0lDT1NlbGVjdGlvbnMnLCBmdW5jdGlvbiAoZXZlbnQsIGFyZ3MpIHtcblxuICAgICAgICAvLyBvYmplY3Qga2V5cyBhcmUgdGhlIENJQ08gc2VsZWN0aW9uIHN1YiBzZWN0b3IgbmFtZXNcbiAgICAgICAgdmFyIHR5cGVvYmogPSB7fTsgLy8gIG9iamVjdCBvZiBDSUNPIHNlbGVjdGlvbnMgYW5kIHRoZWlyIHByb3ZpZGVyc1xuICAgICAgICB2YXIgc2VjdG9yID0gJyc7XG4gICAgICAgIHZhciB0eXBlcyA9IFtdO1xuICAgICAgICB2YXIgcHJvdmlkZXJzID0ge307XG5cbiAgICAgICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8YXJncy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgb2JqZWN0IHRvIGNvbXBhcmUgZmVhdHVyZSBmaWx0ZXIgcHJvcGVydGllcyB3aXRoXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3NbaV0ucHJvdmlkZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGVvYmpbYXJnc1tpXS50eXBlXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGFyZ3NbaV0udHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3RvcjogYXJnc1tpXS5zZWN0b3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IGFyZ3NbaV0ucHJvdmlkZXJzXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHR5cGVzLnB1c2goYXJnc1tpXS50eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgc2VjdG9yID0gYXJnc1tpXS5zZWN0b3I7XG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyc1thcmdzW2ldLnR5cGVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBhcmdzW2ldLnByb3ZpZGVyc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy90aGVzZSBvYmplY3QgZG9lcyBub3QgaGF2ZSBwcm92aWRlcnNcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9ialthcmdzW2ldLnR5cGVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogYXJnc1tpXS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdG9yOiBhcmdzW2ldLnNlY3RvclxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0eXBlcy5wdXNoKGFyZ3NbaV0udHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIHNlY3RvciA9IGFyZ3NbaV0uc2VjdG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY3JlYXRlIHdoZXJlIHN0cmluZyB0aGF0IGlzIHBhcnQgb2YgdGhlIENJQ09XaGVyZSBjbGF1c2Ugc3ViIHF1ZXJpZXNcbiAgICAgICAgICAgIFByb3ZpZGVyV2hlcmVDbGF1c2UgPSBidWlsZFBvc3RHcmVzUHJvdmlkZXJFeHByZXNzaW9uKHByb3ZpZGVycyk7XG5cbiAgICAgICAgICAgIC8vY3JlYXRlIHdoZXJlIGNsYXVzZSBmb3Igb25jbGljayBldmVudHNcbiAgICAgICAgICAgIENJQ09XaGVyZUNsYXVzZSA9IGJ1aWxkUG9zdEdyZXNRdWVyeUV4cHJlc3Npb24odHlwZXMsIFByb3ZpZGVyV2hlcmVDbGF1c2UpO1xuXG4gICAgICAgICAgICB2YXIgcHZkcl9zcGxpdCA9IFtdO1xuXG4gICAgICAgICAgICB2YXIgZmlsdGVyID0gZnVuY3Rpb24gKGZlYXR1cmUsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZSAmJiBmZWF0dXJlLnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZlYXR1cmVQcm9wZXJ0eSA9IGZlYXR1cmUucHJvcGVydGllcy50eXBlO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBzZWxlY3Rpb25zIGFyZSB2YWxpZCB0eXBlc1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9ialtmZWF0dXJlUHJvcGVydHldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0cmVhdCBwcm9wZXJ0aWVzIHdpdGggcHJvdmlkZXJzIGRpZmZlcmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvYmpbZmVhdHVyZVByb3BlcnR5XS5oYXNPd25Qcm9wZXJ0eSgncHJvdmlkZXJzJykgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmZWF0dXJlUHJvdmlkZXIgPSBmZWF0dXJlLnByb3BlcnRpZXMucHJvdmlkZXJzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIGZlYXR1cmVQcm92aWRlciA9PT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImludmVzdGlnYXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlb2JqW2ZlYXR1cmVQcm9wZXJ0eV0ucHJvdmlkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbG9vayBmb3IgJ3wnIGluIGZlYXR1cmUgcHJvdmlkZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlUHJvdmlkZXIuaW5kZXhPZihcInxcIikgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzcGxpdCB0aGUgcHJvcGVydGllcyBhbmQgY29tcGFyZSBlYWNoIHZhbHVlIGluIGFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdmRyX3NwbGl0ID0gZmVhdHVyZVByb3ZpZGVyLnNwbGl0KFwifFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcih2YXIgcD0wO3A8cHZkcl9zcGxpdC5sZW5ndGg7cCsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHZkcl9zcGxpdFtwXSA9PT0gdHlwZW9ialtmZWF0dXJlUHJvcGVydHldLnByb3ZpZGVyc1tpXSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2lmIG5vICd8JyBjb21wYXJlIHRoZSBmZWF0dXJlIHByb3BlcnR5IHRvIG91ciB0eXBlb2JqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZVByb3ZpZGVyID09PSB0eXBlb2JqW2ZlYXR1cmVQcm9wZXJ0eV0ucHJvdmlkZXJzW2ldKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvYmpbZmVhdHVyZVByb3BlcnR5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignV2UgYXJlIHRyeWluZyB0byBmaWx0ZXIgb24gYSBwb2ludCB3aXRoIG5vIGZlYXR1cmUgb3IgZmVhdHVyZS5wcm9wZXJ0aWVzLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIGVycm9yIHN0YXRlLCB0aGVyZSBzaG91bGQgYmUgYSBmZWF0dXJlIHdpdGggcHJvcGVydGllc1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gc2VhcmNoIGZvciBwYmYgbGF0ZXJcbiAgICAgICAgICAgIHZhciBhY3RpdmVMYXllciA9IGZpbmRMYXllcihzZWN0b3IpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVMYXllcik7XG5cbiAgICAgICAgICAgIGlmIChhY3RpdmVMYXllcikge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUxheWVyLnNldEZpbHRlcihmaWx0ZXIpOyAvLyBzZXQgbmV3IGZpbHRlclxuICAgICAgICAgICAgICAgIGFjdGl2ZUxheWVyLnJlZHJhdyh0cnVlKTsgLy8gcmVkcmF3IHRoZSBtYXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTUFQLkpTIExpc3RlbmVyIGVuYWJsZWRcIiArIGFyZ3MpO1xuICAgIH0pO1xuXG4gICAgJHNjb3BlLiRvbignSGVhbHRoU2VsZWN0aW9ucycsIGZ1bmN0aW9uIChldmVudCwgYXJncykge1xuXG4gICAgICAgIC8vIG9iamVjdCBrZXlzIGFyZSB0aGUgQ0lDTyBzZWxlY3Rpb24gc3ViIHNlY3RvciBuYW1lc1xuICAgICAgICB2YXIgdHlwZW9iaiA9IHt9O1xuICAgICAgICB2YXIgc2VjdG9yID0gJyc7XG4gICAgICAgIHZhciB0eXBlcyA9IFtdO1xuXG4gICAgICAgIGlmIChhcmdzKSB7XG4gICAgICAgICAgICBhcmdzLmZvckVhY2goZnVuY3Rpb24gKHZhbCwgaWR4KSB7XG4gICAgICAgICAgICAgICAgdHlwZW9ialt2YWwudHlwZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHZhbC50eXBlLFxuICAgICAgICAgICAgICAgICAgICBzZWN0b3I6IHZhbC5zZWN0b3JcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHR5cGVzLnB1c2godmFsLnR5cGUpO1xuICAgICAgICAgICAgICAgIHNlY3RvciA9IHZhbC5zZWN0b3I7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgSGVhbHRoV2hlcmVDbGF1c2UgPSBidWlsZFBvc3RHcmVzUXVlcnlFeHByZXNzaW9uKHR5cGVzLG51bGwpO1xuXG4gICAgICAgICAgICB2YXIgZmlsdGVyID0gZnVuY3Rpb24gKGZlYXR1cmUsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZSAmJiBmZWF0dXJlLnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZlYXR1cmVQcm9wZXJ0eSA9IGZlYXR1cmUucHJvcGVydGllcy50eXBlO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBzZWxlY3Rpb25zIGFyZSB2YWxpZCB0eXBlc1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9ialtmZWF0dXJlUHJvcGVydHldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsgIC8vIHNob3cgdGhlIGZlYXR1cmVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vaGlkZSB0aGUgZmVhdHVyZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1dlIGFyZSB0cnlpbmcgdG8gZmlsdGVyIG9uIGEgcG9pbnQgd2l0aCBubyBmZWF0dXJlIG9yIGZlYXR1cmUucHJvcGVydGllcy4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBlcnJvciBzdGF0ZSwgdGhlcmUgc2hvdWxkIGJlIGEgZmVhdHVyZSB3aXRoIHByb3BlcnRpZXNcbiAgICAgICAgICAgIH07XG5cblxuICAgICAgICAgICAgdmFyIGFjdGl2ZUxheWVyID0gZmluZExheWVyKHNlY3Rvcik7XG5cbiAgICAgICAgICAgIGlmIChhY3RpdmVMYXllcikge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUxheWVyLnNldEZpbHRlcihmaWx0ZXIpO1xuICAgICAgICAgICAgICAgIGFjdGl2ZUxheWVyLnJlZHJhdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJNQVAuSlMgTGlzdGVuZXIgZW5hYmxlZFwiICsgYXJncyk7XG4gICAgfSk7XG5cbiAgICAkc2NvcGUuJG9uKCdMaWJyYXJ5U2VsZWN0aW9ucycsIGZ1bmN0aW9uIChldmVudCwgYXJncykge1xuXG4gICAgICAgIC8vIG9iamVjdCBrZXlzIGFyZSB0aGUgQ0lDTyBzZWxlY3Rpb24gc3ViIHNlY3RvciBuYW1lc1xuICAgICAgICB2YXIgdHlwZW9iaiA9IHt9O1xuICAgICAgICB2YXIgc2VjdG9yID0gJyc7XG4gICAgICAgIHZhciB0eXBlcyA9IFtdO1xuXG4gICAgICAgIGlmIChhcmdzKSB7XG4gICAgICAgICAgICBhcmdzLmZvckVhY2goZnVuY3Rpb24gKHZhbCwgaWR4KSB7XG4gICAgICAgICAgICAgICAgdHlwZW9ialt2YWwudHlwZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHZhbC50eXBlLFxuICAgICAgICAgICAgICAgICAgICBzZWN0b3I6IHZhbC5zZWN0b3JcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHR5cGVzLnB1c2godmFsLnR5cGUpO1xuICAgICAgICAgICAgICAgIHNlY3RvciA9IHZhbC5zZWN0b3I7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgTGlicmFyeVdoZXJlQ2xhdXNlID0gYnVpbGRQb3N0R3Jlc1F1ZXJ5RXhwcmVzc2lvbih0eXBlcyxudWxsKTtcblxuICAgICAgICAgICAgdmFyIGZpbHRlciA9IGZ1bmN0aW9uIChmZWF0dXJlLCBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGZlYXR1cmUgJiYgZmVhdHVyZS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmZWF0dXJlUHJvcGVydHkgPSBmZWF0dXJlLnByb3BlcnRpZXMudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgc2VsZWN0aW9ucyBhcmUgdmFsaWQgdHlwZXNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvYmpbZmVhdHVyZVByb3BlcnR5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7ICAvLyBzaG93IHRoZSBmZWF0dXJlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvL2hpZGUgdGhlIGZlYXR1cmVcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdXZSBhcmUgdHJ5aW5nIHRvIGZpbHRlciBvbiBhIHBvaW50IHdpdGggbm8gZmVhdHVyZSBvciBmZWF0dXJlLnByb3BlcnRpZXMuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gZXJyb3Igc3RhdGUsIHRoZXJlIHNob3VsZCBiZSBhIGZlYXR1cmUgd2l0aCBwcm9wZXJ0aWVzXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgYWN0aXZlTGF5ZXIgPSBmaW5kTGF5ZXIoc2VjdG9yKTtcblxuICAgICAgICAgICAgaWYgKGFjdGl2ZUxheWVyKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlTGF5ZXIuc2V0RmlsdGVyKGZpbHRlcik7XG4gICAgICAgICAgICAgICAgYWN0aXZlTGF5ZXIucmVkcmF3KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhcIk1BUC5KUyBMaXN0ZW5lciBlbmFibGVkXCIgKyBhcmdzKTtcbiAgICB9KTtcblxuICAgICRzY29wZS5zZXRDb3VudHJ5ID0gZnVuY3Rpb24oY291bnRyeSl7XG4gICAgICAgIGlmKCAkc2NvcGUuQ291bnRyeUxpc3QuY291bnRyeU5hbWVzLmluZGV4T2YoY291bnRyeSkgIT09IC0xKXtcbiAgICAgICAgICAgIFNlY3RvckZhY3Rvcnkuc2V0Q291bnRyeShjb3VudHJ5KTtcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3Rpb24gPSBjb3VudHJ5O1xuICAgICAgICAgICAgJHN0YXRlUGFyYW1zLmNvdW50cnkgPSBjb3VudHJ5O1xuICAgICAgICAgICAgJHNjb3BlLmNsb3NlUGFyYW0oJ2RldGFpbHMtcGFuZWwnKTtcbiAgICAgICAgICAgICRzdGF0ZS5nbygkc3RhdGUuY3VycmVudC5uYW1lLCAkc3RhdGVQYXJhbXMpOyAvLyB1cGRhdGUgYXBwIHN0YXRlIHdpdGggbmV3IHBhcmFtXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgJHNjb3BlLnBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcbiAgICAkc2NvcGUuYmx1ciA9ICcnO1xuXG4gICAgdmFyIFBpeGVsc1RvTWV0ZXJzQnlab29tID0gW1xuICAgICAgICAxNTY0MTIsXG4gICAgICAgIDc4MjA2LFxuICAgICAgICAzOTEwMyxcbiAgICAgICAgMTk1NTEsXG4gICAgICAgIDk3NzYsXG4gICAgICAgIDQ4ODgsXG4gICAgICAgIDI0NDQsXG4gICAgICAgIDEyMjIsXG4gICAgICAgIDYxMC45ODQsXG4gICAgICAgIDMwNS40OTIsXG4gICAgICAgIDE1Mi43NDYsXG4gICAgICAgIDc2LjM3MyxcbiAgICAgICAgMzguMTg3LFxuICAgICAgICAxOS4wOTMsXG4gICAgICAgIDkuNTQ3LFxuICAgICAgICA0Ljc3MyxcbiAgICAgICAgMi4zODcsXG4gICAgICAgIDEuMTkzLFxuICAgICAgICAuNTk2LFxuICAgICAgICAuMjk4XG4gICAgXTtcblxuICAgIC8vIENvdW50cnkgU2VsZWN0XG4gICAgLy8gQWxsIHZhcmlhYmxlcyB3aWxsIGJlIGluaGVyaXRlZCBieSBvdGhlciBjb250cm9sbGVyc1xuXG4gICAgJHNjb3BlLkNvdW50cnlMaXN0ID0gU2VjdG9yRmFjdG9yeS5Db3VudHJ5TGlzdDtcblxuICAgICRzY29wZS5zZWxlY3Rpb24gPSAkc2NvcGUuQ291bnRyeUxpc3QuZGVmYXVsdC5jb3VudHJ5O1xuICAgIFNlY3RvckZhY3Rvcnkuc2VsZWN0ZWRDb3VudHJ5ID0gJHNjb3BlLnNlbGVjdGlvbjtcblxuICAgICRzY29wZS4kb24oJ2NvdW50cnktdXBkYXRlJyxmdW5jdGlvbigpe1xuICAgICAgICAvL2lmKCRzY29wZS5Db3VudHJ5TGlzdC5jb3VudHJ5TmFtZXMuaW5kZXhPZigkc3RhdGVQYXJhbXMuY291bnRyeS5jYXBpdGFsaXplKCkpICE9PSAtMSkge1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAkc2NvcGUuc2VsZWN0aW9uID0gJHN0YXRlUGFyYW1zLmNvdW50cnkuY2FwaXRhbGl6ZSgpO1xuICAgICAgICAvLyAgICBTZWN0b3JGYWN0b3J5LnNldENvdW50cnkoJHN0YXRlUGFyYW1zLmNvdW50cnkuY2FwaXRhbGl6ZSgpKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgJHNjb3BlLnpvb21Ub0NvdW50cnkoJHNjb3BlLnNlbGVjdGlvbik7IC8vIHN3aXRjaCBtYXB2aWV3IHRvIGNvdW50cnkgY29vcmRpbmF0ZXNcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgQ0lDT1doZXJlQ2xhdXNlID0gJyc7IC8vcmVzZXQgcXVlcnlcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgLy9yZW1vdmUgYWxsIGxheWVycyBidXQgYmFzZW1hcFxuICAgICAgICAvLyAgICB2YXIgdGVtcGFyciA9ICRzdGF0ZVBhcmFtcy5sYXllcnMuc3BsaXQoXCIsXCIpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICBpZih0ZW1wYXJyLmxlbmd0aD4xKSB7XG4gICAgICAgIC8vICAgICAgICBpZiAoJHNjb3BlLnNlbGVjdGlvbiAhPT0gJ0luZGlhJykge1xuICAgICAgICAvLyAgICAgICAgICAgIGlmICh0ZW1wYXJyWzFdLmluZGV4T2YoJHNjb3BlLkNvdW50cnlMaXN0WyRzY29wZS5zZWxlY3Rpb25dLmxheWVyKSA9PSAtMSkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAkc3RhdGVQYXJhbXMubGF5ZXJzID0gdGVtcGFyclswXTtcbiAgICAgICAgLy8gICAgICAgICAgICB9XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgICAgIHRlbXBhcnIuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpZHgpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgaWYgKGlkeCAhPT0gMCAmJiAkc2NvcGUuQ291bnRyeUxpc3RbJHNjb3BlLnNlbGVjdGlvbl0ubGF5ZXIuaW5kZXhPZih2YWwpID09IC0xKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICB0ZW1wYXJyLnNwbGljZSh0ZW1wYXJyLmluZGV4T2YodmFsKSwgMSk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAkc3RhdGVQYXJhbXMubGF5ZXJzID0gdGVtcGFyci5qb2luKFwiLFwiKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgIH0pXG4gICAgICAgIC8vICAgICAgICB9XG4gICAgICAgIC8vICAgIH1cbiAgICAgICAgLy8gICAgJHN0YXRlLmdvKCRzdGF0ZS5jdXJyZW50Lm5hbWUsICRzdGF0ZVBhcmFtcyk7IC8vIHVwZGF0ZSBhcHAgc3RhdGUgd2l0aCBuZXcgcGFyYW1cbiAgICAgICAgLy99XG5cbiAgICB9KTtcblxuICAgICRzY29wZS56b29tVG9Db3VudHJ5ID0gZnVuY3Rpb24gKHNlbGVjdGVkKSB7XG4gICAgICAgIGlmIChzZWxlY3RlZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgJHN0YXRlUGFyYW1zLmxhdCA9IGV2YWwoc2VsZWN0ZWQgKyBcIkZhY3RvcnlcIilbc2VsZWN0ZWRdLk1hcENlbnRlci5MYXRpdHVkZTtcbiAgICAgICAgICAgICRzdGF0ZVBhcmFtcy5sbmcgPSBldmFsKHNlbGVjdGVkICsgXCJGYWN0b3J5XCIpW3NlbGVjdGVkXS5NYXBDZW50ZXIuTG9uZ2l0dWRlO1xuICAgICAgICAgICAgJHN0YXRlUGFyYW1zLnpvb20gPSBldmFsKHNlbGVjdGVkICsgXCJGYWN0b3J5XCIpW3NlbGVjdGVkXS5NYXBab29tO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICRzY29wZS4kb24oJ2FsbC1zZWN0b3JzJyxmdW5jdGlvbigpe1xuICAgICAgICAkc2NvcGUuYWxsU2VjdG9ycyA9IFNlY3RvckZhY3RvcnkuYWxsU2VjdG9ycztcbiAgICB9KTtcblxuICAgICRzY29wZS4kd2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gU2VjdG9yRmFjdG9yeS5zZWxlY3RlZENvdW50cnk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkc2NvcGUuc2VsZWN0aW9uPSBTZWN0b3JGYWN0b3J5LnNlbGVjdGVkQ291bnRyeTtcblxuICAgICAgICBzd2l0Y2ggKCRzY29wZS5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ0luZGlhJzpcbiAgICAgICAgICAgICAgICAkc2NvcGUuU2VjdG9yVHlwZXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGVOYW1lczogWydGaW5hbmNpYWwgU2VydmljZScsICdMaWJyYXJ5JywgJ0FncmljdWx0dXJlJywgJ0hlYWx0aCddXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0tlbnlhJzpcbiAgICAgICAgICAgIGNhc2UgJ1VnYW5kYSc6XG4gICAgICAgICAgICAgICAgJHNjb3BlLlNlY3RvclR5cGVzID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlTmFtZXM6IFsnRmluYW5jaWFsIFNlcnZpY2UnLCAnRWR1Y2F0aW9uJywgJ0FncmljdWx0dXJlJ11cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAkc2NvcGUuU2VjdG9yVHlwZXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGVOYW1lczogWydGaW5hbmNpYWwgU2VydmljZScsICdMaWJyYXJ5JywgJ0FncmljdWx0dXJlJywgJ0hlYWx0aCddXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gd2F0Y2ggZm9yIGNvdW50ZXIsIHdoZW4gaW5jcmVhc2VkIHJ1biBodHRwLmdldCBhZ2FpbiBhbmQgdXBkYXRlIHZhcmlhYmxlXG4gICAgJHNjb3BlLnRvZ2dsZVN0YXRlID0gZnVuY3Rpb24gKHN0YXRlTmFtZSkge1xuICAgICAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lICE9PSBzdGF0ZU5hbWUgPyBzdGF0ZU5hbWUgOiAnbWFpbic7XG4gICAgICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLiR3YXRjaCgnc2VsZWN0aW9uJyxmdW5jdGlvbigpe1xuICAgICAgICRzdGF0ZVBhcmFtcy5jb3VudHJ5ID0gJHNjb3BlLnNlbGVjdGlvbjtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHJlZHJhdygpIHtcbiAgICAgICAgdmFyIGxhdCA9IHBhcnNlRmxvYXQoJHN0YXRlUGFyYW1zLmxhdCkgfHwgMDtcbiAgICAgICAgdmFyIGxuZyA9IHBhcnNlRmxvYXQoJHN0YXRlUGFyYW1zLmxuZykgfHwgMDtcbiAgICAgICAgdmFyIHpvb20gPSBwYXJzZUZsb2F0KCRzdGF0ZVBhcmFtcy56b29tKSB8fCA4O1xuICAgICAgICBsYXllcnNTdHIgPSAkc3RhdGVQYXJhbXMubGF5ZXJzIHx8IExheWVyQ29uZmlnLm9zbS51cmw7XG4gICAgICAgIHZhciBsYXllcnMgPSBsYXllcnNTdHIuc3BsaXQoJywnKTtcblxuICAgICAgICAvLyBmaXJzdCBsYXllciBzaG91bGQgYWx3YXlzIGJlIHRyZWF0ZWQgYXMgdGhlIGJhc2VtYXBcbiAgICAgICAgdmFyIGJhc2VtYXAgPSBMYXllckNvbmZpZy5maW5kKGxheWVyc1swXSkgfHwgTGF5ZXJDb25maWcub3NtLnVybDtcbiAgICAgICAgaWYgKHR5cGVvZiBiYXNlbWFwID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFyIGJhc2VtYXBVcmwgPSBiYXNlbWFwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGJhc2VtYXBVcmwgPSBiYXNlbWFwLnVybDtcbiAgICAgICAgfVxuICAgICAgICBvdmVybGF5TmFtZXMgPSBsYXllcnMuc2xpY2UoMSk7XG5cbiAgICAgICAgaWYgKGxhc3RCYXNlbWFwVXJsICE9PSBiYXNlbWFwVXJsICYmIHR5cGVvZiBtYXAgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoYmFzZW1hcExheWVyKSB7XG4gICAgICAgICAgICAgICAgbWFwLnJlbW92ZUxheWVyKGJhc2VtYXBMYXllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiYXNlbWFwTGF5ZXIgPSBMLnRpbGVMYXllcihiYXNlbWFwVXJsKS5hZGRUbyhtYXApO1xuXG4gICAgICAgICAgICBiYXNlbWFwTGF5ZXIub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy9Nb3ZlIHRvIGJhY2tcbiAgICAgICAgICAgICAgICBiYXNlbWFwTGF5ZXIuYnJpbmdUb0JhY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxhc3RMYXllcnNTdHIgIT09IGxheWVyc1N0cikge1xuICAgICAgICAgICAgLy9TZWUgaWYgbmV3IGxheWVycyBhcmUgYWRkZWQgb3IgaWYgbGF5ZXJzIG5lZWQgdG8gYmUgcmVtb3ZlZC5cbiAgICAgICAgICAgIHZhciBsYXN0TGF5ZXJzQXJyYXkgPSBsYXN0TGF5ZXJzU3RyLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICB2YXIgY3VycmVudExheWVyc0FycmF5ID0gbGF5ZXJzU3RyLnNwbGl0KCcsJyk7XG5cbiAgICAgICAgICAgIGlmKGxhc3RMYXllcnNBcnJheS5sZW5ndGggPiBjdXJyZW50TGF5ZXJzQXJyYXkubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAvL09uZSBvciBtb3JlIGxheWVycyBoYXMgYmVlbiByZW1vdmVkLlxuICAgICAgICAgICAgICAgIGxheWVyRGlmZmVyZW5jZSA9IHsgdHlwZTogJ3JlbW92ZWQnLCBsaXN0OiAkKGxhc3RMYXllcnNBcnJheSkubm90KGN1cnJlbnRMYXllcnNBcnJheSkuZ2V0KCl9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAvL09uZSBvciBtb3JlIGxheWVycyBoYXMgYmVlbiBhZGRlZFxuICAgICAgICAgICAgICAgIGxheWVyRGlmZmVyZW5jZSA9IHsgdHlwZTogJ2FkZGVkJywgbGlzdDogJChjdXJyZW50TGF5ZXJzQXJyYXkpLm5vdChsYXN0TGF5ZXJzQXJyYXkpLmdldCgpfTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZHJhd092ZXJsYXlzKGxheWVyRGlmZmVyZW5jZSk7XG5cbiAgICAgICAgdmFyIGMgPSAkc2NvcGUuY2VudGVyID0ge1xuICAgICAgICAgICAgbGF0OiBsYXQsXG4gICAgICAgICAgICBsbmc6IGxuZyxcbiAgICAgICAgICAgIHpvb206IHpvb21cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodHlwZW9mIG1hcCA9PT0gJ29iamVjdCcgJiYgKGMubGF0ICE9IDAgJiYgYy5sbmcgIT0gMCkpIHtcbiAgICAgICAgICAgIG1hcC5zZXRWaWV3KFtjLmxhdCwgYy5sbmddLCB6b29tKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3RMYXllcnNTdHIgPSBsYXllcnNTdHI7XG4gICAgICAgIGxhc3RCYXNlbWFwVXJsID0gYmFzZW1hcFVybDtcbiAgICB9XG5cblxuICAgIC8qKipcbiAgICAgKiBCcm9hZGNhc3QgTGlzdGVuZXJzLlxuICAgICAqL1xuXG4gICAgJHNjb3BlLiRvbigncm91dGUtdXBkYXRlJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICgkc2NvcGUuYmx1ciA9PT0gJ2JsdXInICYmICRzdGF0ZS5jdXJyZW50Lm5hbWUgIT09ICdsYW5kaW5nJykge1xuICAgICAgICAgICAgJHNjb3BlLmJsdXIgPSAnJztcbiAgICAgICAgfVxuICAgICAgICB2YXIgYztcbiAgICAgICAgaWYgKCEkc2NvcGUuY2VudGVyKSB7XG4gICAgICAgICAgICB2YXIgbGF0ID0gcGFyc2VGbG9hdCgkc3RhdGVQYXJhbXMubGF0KSB8fCAwO1xuICAgICAgICAgICAgdmFyIGxuZyA9IHBhcnNlRmxvYXQoJHN0YXRlUGFyYW1zLmxuZykgfHwgMDtcbiAgICAgICAgICAgIHZhciB6b29tID0gcGFyc2VGbG9hdCgkc3RhdGVQYXJhbXMuem9vbSkgfHwgODtcblxuICAgICAgICAgICAgYyA9ICRzY29wZS5jZW50ZXIgPSB7XG4gICAgICAgICAgICAgICAgbGF0OiBsYXQsXG4gICAgICAgICAgICAgICAgbG5nOiBsbmcsXG4gICAgICAgICAgICAgICAgem9vbTogem9vbVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGMgPSAkc2NvcGUuY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsYXQgPSBjLmxhdC50b0ZpeGVkKDYpO1xuICAgICAgICB2YXIgbG5nID0gYy5sbmcudG9GaXhlZCg2KTtcbiAgICAgICAgdmFyIHpvb20gPSBjLnpvb20udG9TdHJpbmcoKTtcbiAgICAgICAgaWYgKG1hcE1vdmVFbmQpIHtcbiAgICAgICAgICAgIG1hcE1vdmVFbmQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICgkc3RhdGVQYXJhbXMubGF0ICE9PSBsYXRcbiAgICAgICAgICAgIHx8ICRzdGF0ZVBhcmFtcy5sbmcgIT09IGxuZ1xuICAgICAgICAgICAgfHwgJHN0YXRlUGFyYW1zLnpvb20gIT09IHpvb21cbiAgICAgICAgICAgIHx8ICRzdGF0ZVBhcmFtcy5sYXllcnMgIT09IGxheWVyc1N0clxuICAgICAgICAgICAgfHwgJHN0YXRlUGFyYW1zLnRoZW1lICE9PSB0aGVtZVxuICAgICAgICAgICAgfHwgJHN0YXRlUGFyYW1zLmZpbHRlcnMgIT09IGZpbHRlcnMpIHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ21hcC5qcyByb3V0ZS11cGRhdGUgVXBkYXRpbmcgTWFwLi4uJyk7XG4gICAgICAgICAgICByZWRyYXcoKTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICAkc2NvcGUuJG9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkc2NvcGUuYmx1ciA9ICdibHVyJztcbiAgICB9KTtcblxuICAgIC8vdGhpcyB0YWtlcyBpbiBhIFdLVCBHZW9KU09OIEV4dGVudCBnZW9tZXRyeVxuICAgICRzY29wZS56b29tVG9FeHRlbnQgPSBmdW5jdGlvbiAoZXh0ZW50KSB7XG4gICAgICAgIGRlbGV0ZSAkc3RhdGVQYXJhbXNbJ3pvb20tZXh0ZW50J107XG4gICAgICAgIG1hcC5maXRCb3VuZHMoW1xuICAgICAgICAgICAgW2V4dGVudFswXVsxXSwgZXh0ZW50WzBdWzBdXSxcbiAgICAgICAgICAgIFtleHRlbnRbMl1bMV0sIGV4dGVudFsyXVswXV1cbiAgICAgICAgXSk7XG4gICAgfTtcblxuICAgIC8vVGhpcyB0YWtlIGEgbGVhZmxldCBib3VuZHMgb2JqZWN0IGFuZCBoYW5kbGVzIGl0LlxuICAgIGRlbGV0ZSAkc3RhdGVQYXJhbXNbJ3pvb20tZXh0ZW50J107XG4gICAgJHNjb3BlLnpvb21Ub0JvdW5kcyA9IGZ1bmN0aW9uIChib3VuZHMpIHtcbiAgICAgICAgbWFwLmZpdEJvdW5kcyhib3VuZHMpO1xuICAgIH07XG5cblxuICAgIHdpbmRvdy5tYXAgPSBtYXA7XG4gICAgbWFwLm9uKCdtb3ZlZW5kJywgZnVuY3Rpb24gKCkgeyAvLyBtb3ZlIGlzIGdvb2QgdG9vXG4gICAgICAgIHZhciBjID0gbWFwLmdldENlbnRlcigpO1xuICAgICAgICB2YXIgbGF0ID0gYy5sYXQudG9GaXhlZCg2KTtcbiAgICAgICAgdmFyIGxuZyA9IGMubG5nLnRvRml4ZWQoNik7XG4gICAgICAgIHZhciB6b29tID0gbWFwLmdldFpvb20oKS50b1N0cmluZygpO1xuXG4gICAgICAgIGlmICgkc3RhdGVQYXJhbXMubGF0ICE9PSBsYXRcbiAgICAgICAgICAgIHx8ICRzdGF0ZVBhcmFtcy5sbmcgIT09IGxuZ1xuICAgICAgICAgICAgfHwgJHN0YXRlUGFyYW1zLnpvb20gIT09IHpvb20pIHtcblxuICAgICAgICAgICAgJHN0YXRlUGFyYW1zLmxhdCA9IGxhdDtcbiAgICAgICAgICAgICRzdGF0ZVBhcmFtcy5sbmcgPSBsbmc7XG4gICAgICAgICAgICAkc3RhdGVQYXJhbXMuem9vbSA9IHpvb207XG4gICAgICAgICAgICBtYXBNb3ZlRW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICRzdGF0ZS5nbygkc3RhdGUuY3VycmVudC5uYW1lLCAkc3RhdGVQYXJhbXMpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBtYXAub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHsgLy8gaGFuZGxlIG1hcCBjbGljayBldmVudHNcblxuICAgIH0pO1xuXG4gICAgLy9Db25uZWN0IHRoZSBsYXlvdXQgb25yZXNpemUgZW5kIGV2ZW50XG4gICAgdHJ5IHtcbiAgICAgICAgd2luZG93LmxheW91dC5wYW5lcy5jZW50ZXIuYmluZChcImxheW91dHBhbmVvbnJlc2l6ZV9lbmRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbWFwLmludmFsaWRhdGVTaXplKCk7XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy9Ob3RoaW5nXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBkcmF3T3ZlcmxheXMoZGlmZmVyZW5jZU9iamVjdCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gb3ZlcmxheU5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICB2YXIgb3ZlcmxheU5hbWUgPSBvdmVybGF5TmFtZXNbaV07XG4gICAgICAgICAgICB2YXIgY3Vyck92ZXJsYXkgPSBvdmVybGF5c1tpXTtcblxuICAgICAgICAgICAgaWYgKGN1cnJPdmVybGF5ICYmIGN1cnJPdmVybGF5Lm92ZXJsYXlOYW1lID09PSBvdmVybGF5TmFtZSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlOyAvLyBsYXllciBpcyBhbHJlYWR5IHRoZXJlLCBjb250aW51ZSBvbiFcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBjdXJyZW50IGxheWVyIHRoYXQgaXMgbm90IHdoYXQgc2hvdWxkIGJlIHRoYXQgbGF5ZXIgaW4gdGhlIGxpc3RcbiAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJPdmVybGF5ICYmIGN1cnJPdmVybGF5Ll9tYXApIHtcbiAgICAgICAgICAgICAgICBpZiAoY3Vyck92ZXJsYXkuZGVzdHJveVJlc291cmNlKSBjdXJyT3ZlcmxheS5kZXN0cm95UmVzb3VyY2UoKTtcbiAgICAgICAgICAgICAgICBtYXAucmVtb3ZlTGF5ZXIoY3Vyck92ZXJsYXkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIExheWVyQ29uZmlnW292ZXJsYXlOYW1lXSA9PT0gJ29iamVjdCdcbiAgICAgICAgICAgICAgJiYgTGF5ZXJDb25maWdbb3ZlcmxheU5hbWVdLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3BiZicpIHtcblxuICAgICAgICAgICAgICAgIHZhciBjZmcgPSBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV07XG4gICAgICAgICAgICAgICAgdmFyIGxheWVyID0gbmV3IEwuVGlsZUxheWVyLk1WVFNvdXJjZShjZmcpO1xuICAgICAgICAgICAgICAgIGxheWVyLmFkZFRvKG1hcCk7XG5cbiAgICAgICAgICAgICAgICBtYXAub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgICAgICAgICAvL1Rha2UgdGhlIGNsaWNrIGV2ZW50IGFuZCBwYXNzIGl0IHRvIHRoZSBncm91cCBsYXllcnMuXG4gICAgICAgICAgICAgICAgICAgIC8vbGF5ZXIub25DbGljayhlLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIGlmIChldnQgJiYgZXZ0LmZlYXR1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgIGNvbnNvbGUubG9nKFsnQ2xpY2tlZCBQQkYgRmVhdHVyZScsIGV2dC5mZWF0dXJlLnByb3BlcnRpZXNdKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgfVxuICAgICAgICAgICAgICAgICAgICAvL30pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbWFwLm9uKCdsYXllcnJlbW92ZScsIGZ1bmN0aW9uIChyZW1vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vVGhpcyBpcyB0aGUgbGF5ZXIgdGhhdCB3YXMgcmVtb3ZlZC5cbiAgICAgICAgICAgICAgICAgICAgLy9JZiBpdCBpcyBhIFRpbGVMYXllci5NVlRTb3VyY2UsIHRoZW4gY2FsbCBhIG1ldGhvZCB0byBhY3R1YWxseSByZW1vdmUgdGhlIGNoaWxkcmVuLCB0b28uXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZW1vdmVkLmxheWVyLnJlbW92ZUNoaWxkTGF5ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkLmxheWVyLnJlbW92ZUNoaWxkTGF5ZXJzKG1hcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0cnkgZm9yIFdNUyAobm90IGEgdmVjdG9yIGxheWVyKVxuICAgICAgICAgICAgLy8gaWYgdGhpbmdzIGdldCBtb3JlIGZhbmN5IHdpdGggd21zLCBpdCBzaG91bGQgZ2V0IGl0cyBvd24gZmFjdG9yeVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIExheWVyQ29uZmlnW292ZXJsYXlOYW1lXSA9PT0gJ29iamVjdCdcbiAgICAgICAgICAgICAgJiYgTGF5ZXJDb25maWdbb3ZlcmxheU5hbWVdLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3dtcycpIHtcblxuICAgICAgICAgICAgICAgIHZhciBjZmcgPSBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV07XG4gICAgICAgICAgICAgICAgdmFyIGxheWVyID0gTC50aWxlTGF5ZXIud21zKGNmZy51cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBjZmcuZm9ybWF0IHx8ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogY2ZnLnRyYW5zcGFyZW50IHx8IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGxheWVyczogY2ZnLmxheWVyc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGxheWVyLmFkZFRvKG1hcCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGlsZXMgdGhhdCBhcmUgYW4gb3ZlcmxheS4gT1NNIC8gR29vZ2xlIC8gTWFwbmlrIHRlbmQgdG8gbWFrZSB0aWxlcyBpbiB0aGlzIGZvcm1hdC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIExheWVyQ29uZmlnW292ZXJsYXlOYW1lXSA9PT0gJ29iamVjdCdcbiAgICAgICAgICAgICAgJiYgTGF5ZXJDb25maWdbb3ZlcmxheU5hbWVdLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3h5eicpIHtcblxuICAgICAgICAgICAgICAgIHZhciBjZmcgPSBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV07XG4gICAgICAgICAgICAgICAgdmFyIGxheWVyID0gTC50aWxlTGF5ZXIoY2ZnLnVybCwge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBjZmcub3BhY2l0eSB8fCAwLjVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBsYXllci5hZGRUbyhtYXApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRNUyBmbGlwcyB0aGUgeS4gR2VvU2VydmVyIG9mdGVuIHNlcnZlcyB0aGlzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgTGF5ZXJDb25maWdbb3ZlcmxheU5hbWVdID09PSAnb2JqZWN0J1xuICAgICAgICAgICAgICAmJiBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV0udHlwZS50b0xvd2VyQ2FzZSgpID09PSAndG1zJykge1xuICAgICAgICAgICAgICAgIHZhciBjZmcgPSBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV07XG4gICAgICAgICAgICAgICAgdmFyIGxheWVyID0gTC50aWxlTGF5ZXIoY2ZnLnVybCwge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBjZmcub3BhY2l0eSB8fCAwLjUsXG4gICAgICAgICAgICAgICAgICAgIHRtczogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGxheWVyLmFkZFRvKG1hcCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIGl0cyBub3Qgd21zLCBpdHMgYSB2ZWN0b3IgbGF5ZXJcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB2ZWNSZXMgPSBWZWN0b3JQcm92aWRlci5jcmVhdGVSZXNvdXJjZShvdmVybGF5TmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHZlY1Jlcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGF5ZXIgPSB2ZWNSZXMuZ2V0TGF5ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXIuYWRkVG8obWFwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vTm90IGEgdmFsaWQgbGF5ZXIuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG92ZXJsYXlOYW1lICsgXCIgaXMgbm90IGEgbGF5ZXIgc3BlY2lmaWVkIGluIGxheWVyQ29uZmlnLmpzXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGxheWVyKSB7XG4gICAgICAgICAgICAgICAgbGF5ZXIub3ZlcmxheU5hbWUgPSBvdmVybGF5TmFtZTtcbiAgICAgICAgICAgICAgICAvL2xheWVyLmFkZFRvKG1hcCk7XG4gICAgICAgICAgICAgICAgb3ZlcmxheXNbaV0gPSBsYXllcjtcbiAgICAgICAgICAgICAgICBvdmVybGF5c19kaWN0aW9uYXJ5W292ZXJsYXlOYW1lXSA9IGxheWVyOyAvL2tlZXAgYSBkaWN0aW9uYXJ5IHJlZmVyZW5jZSBmb3IgZmFzdGVyIGZldGNoaW5nIGluIFVwZGF0ZUVDT1NEYXRhXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaWZmZXJlbmNlT2JqZWN0ICYmIGRpZmZlcmVuY2VPYmplY3QudHlwZSA9PSAncmVtb3ZlZCcpIHtcbiAgICAgICAgICAgIC8vIHRoZXJlIGFyZSBtb3JlIG92ZXJsYXlzIGxlZnQgaW4gdGhlIGxpc3QsIGxlc3MgbGF5ZXJzIHNwZWNpZmllZCBpbiByb3V0ZVxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byByZW1vdmUgdGhvc2UgdG9vLlxuICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgbGVuMiA9IG92ZXJsYXlzLmxlbmd0aDsgaSA8IGxlbjI7ICsraSkge1xuICAgICAgICAgICAgICAgIC8vSWYgdGhlIG92ZXJsYXkgbmFtZSBleGlzdHMgaW4gdGhlIGxpc3Qgb2YgbGF5ZXJzIHRvIGJlIHJlbW92ZWQsIHRoZW4gcmVtb3ZlIGl0LlxuICAgICAgICAgICAgICAgIGlmIChvdmVybGF5c1tpXSAmJiBvdmVybGF5c1tpXS5vdmVybGF5TmFtZSAmJiBkaWZmZXJlbmNlT2JqZWN0Lmxpc3QuaW5kZXhPZihvdmVybGF5c1tpXS5vdmVybGF5TmFtZSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBpZihvdmVybGF5c1tpXS5kZXN0cm95UmVzb3VyY2UpIG92ZXJsYXlzW2ldLmRlc3Ryb3lSZXNvdXJjZSgpO1xuICAgICAgICAgICAgICAgICAgICBtYXAucmVtb3ZlTGF5ZXIob3ZlcmxheXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgb3ZlcmxheXNfZGljdGlvbmFyeVtvdmVybGF5c1tpXS5vdmVybGF5TmFtZV07IC8vZGVsZXRlIGRpY3Rpb25hcnkgcmVmZXJlbmNlIGZvciBmYXN0ZXIgZmV0Y2hpbmcgaW4gVXBkYXRlRUNPU0RhdGFcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG92ZXJsYXlzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmRMYXllcihsYXllcikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG92ZXJsYXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobGF5ZXIgPT0gb3ZlcmxheXNbaV0ub3ZlcmxheU5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3ZlcmxheXNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2xpY2tUb0J1ZmZlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIGhhbmRsZSBtYXAgY2xpY2sgZXZlbnRzXG4gICAgICAgIC8vRGVwZW5kaW5nIG9uIHdoYXQgbW9kZSB3ZSdyZSBpbiBhbmQgd2hhdCB3ZSdyZSBzaG93aW5nLi4uXG4gICAgICAgIC8vVGhpcyBpcyBhIHRlc3QgaGFyZC1jb2RlZCBmb3IgY29uZmV0dGkgbW9kZS5cbiAgICAgICAgdmFyIGxhdGxuZyA9IGUubGF0bG5nO1xuICAgICAgICB2YXIgbGF0ID0gZS5sYXRsbmcubGF0O1xuICAgICAgICB2YXIgbG5nID0gZS5sYXRsbmcubG5nO1xuICAgICAgICB2YXIgbGF0TG5nU3RyID0gbGF0ICsgJywnICsgbG5nO1xuXG4gICAgICAgIHZhciBidWZmZXIgPSBsYXRMbmdCdWZmZXJIYXNoW2xhdExuZ1N0cl07XG4gICAgICAgIGlmIChidWZmZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbWV0ZXJzX3Blcl9waXhlbCA9IFBpeGVsc1RvTWV0ZXJzQnlab29tWyRzdGF0ZVBhcmFtcy56b29tXTtcbiAgICAgICAgdmFyIHRvbGVyYW5jZV9waXhlbHMgPSA4OyAgLy9UaGUgbnVtYmVyIG9mIHBpeGVscyBhcm91bmQgdGhlIGNsaWNrIHBvaW50IHRvIHNlYXJjaCBpblxuICAgICAgICB2YXIgdG9sZXJhbmNlX2tpbG9tZXRlcnMgPSAodG9sZXJhbmNlX3BpeGVscyAqIG1ldGVyc19wZXJfcGl4ZWwpIC8gMTAwMDtcblxuICAgICAgICAvL0NvbnZlcnQgcGl4ZWwgY2xpY2sgYnVmZmVyIHRvIG1ldGVycy5cbiAgICAgICAgdmFyIGJ1ZmZlck9iaiA9IHR1cmYuYnVmZmVyKHR1cmYucG9pbnQobG5nLCBsYXQpLCB0b2xlcmFuY2Vfa2lsb21ldGVycywgJ2tpbG9tZXRlcnMnKTtcbiAgICAgICAgYnVmZmVyID0gSlNPTi5zdHJpbmdpZnkoYnVmZmVyT2JqKTtcblxuICAgICAgICBsYXRMbmdCdWZmZXJIYXNoW2xhdExuZ1N0cl0gPSBidWZmZXI7XG5cbiAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gYnVpbGRQb3N0R3Jlc1F1ZXJ5RXhwcmVzc2lvbih0eXBlYXJyYXksIHByb3ZpZGVycykge1xuICAgICAgICB2YXIgdHlwZXN0cmluZyA9ICcnO1xuICAgICAgICB2YXIgZmluYWxzdHJpbmcgPSAnJztcblxuICAgICAgICBpZiAodHlwZWFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICh0eXBlYXJyYXkubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICAgICAgICB0eXBlYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBwcm92aWRlcnNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ZpZGVycyAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyhwcm92aWRlcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3ZpZGVycykuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGNpY28gc2VsZWN0aW9ucyBoYXMgYSB0eXBlIHRoYXQgaGFzIHByb3ZpZGVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwID09IHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlc3RyaW5nICs9IFwiICh0eXBlPSdcIiArIHZhbCArIFwiJyBBTkQgKFwiICsgcHJvdmlkZXJzW3BdLnByb3ZpZGVycyArIFwiKSkgT1JcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjaWNvIHNlbGVjdGlvbiB0eXBlIHRoYXQgZG9lcyBub3QgaGF2ZSBwcm92aWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZXN0cmluZy5zZWFyY2godmFsKSA9PSAtMSkgeyAvLyBvbmx5IGFwcGVuZCB0byBzdHJpbmcgaWYgdHlwZSBkb2VzIG5vdCBleGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZXN0cmluZyArPSBcIiAodHlwZT0nXCIgKyB2YWwgKyBcIicpIE9SXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxsIHR5cGVzIHdpdGggcHJvdmlkZXJzIGFyZSB1bmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVzdHJpbmcgKz0gXCIgKHR5cGU9J1wiICsgdmFsICsgXCInKSBPUlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnNlbGVjdGlvbiA9PSAnVWdhbmRhJyB8fCAkc2NvcGUuc2VsZWN0aW9uID09ICdLZW55YScgfHwgJHNjb3BlLnNlbGVjdGlvbiA9PSAnTmlnZXJpYScgfHwgJHNjb3BlLnNlbGVjdGlvbiA9PSAnSW5kaWEnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vcmVtb3ZlIHRyYWlsaW5nICdPUidcbiAgICAgICAgICAgICAgICAgICAgZmluYWxzdHJpbmcgPSB0eXBlc3RyaW5nLnN1YnN0cmluZygwLCB0eXBlc3RyaW5nLmxlbmd0aCAtIDMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmluYWxzdHJpbmcgKyBcIkFORCBDb3VudHJ5ID0nXCIgKyRzY29wZS5zZWxlY3Rpb24rIFwiJ1wiO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vcmV0dXJuIFwidHlwZSBJTihcIiArIGZpbmFsc3RyaW5nICsgXCIpXCI7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHlwZWFycmF5LmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICB0eXBlc3RyaW5nICs9IFwiJ1wiICsgdmFsICsgXCInXCI7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZigkc2NvcGUuc2VsZWN0aW9uID09ICdJbmRpYScpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ0eXBlIElOKFwiICsgdHlwZXN0cmluZyArIFwiKSBBTkQgY291bnRyeSA9ICdcIiArICRzY29wZS5zZWxlY3Rpb24gK1wiJ1wiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcInR5cGUgSU4oXCIgKyBmaW5hbHN0cmluZyArIFwiKSBBTkQgQ291bnRyeSA9J1wiICsgJHNjb3BlLnNlbGVjdGlvbiArIFwiJ1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidWlsZFBvc3RHcmVzUHJvdmlkZXJFeHByZXNzaW9uKG9iaikge1xuICAgICAgICB2YXIgZm9iaiA9IHt9O1xuXG4gICAgICAgIHZhciBwcnZkID0gKCRzY29wZS5zZWxlY3Rpb24gPT0gJ1VnYW5kYScpID8gJ3BydmQnIDogJ3Byb3ZpZGVycyc7XG5cbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhvYmopKSB7IC8vIGlmIG9iaiBpcyB2YWxpZFxuICAgICAgICAgICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBpZihvYmpba2V5XS5wcm92aWRlcnMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIGZvYmpba2V5XSA9IHtwcm92aWRlcnM6ICcnfTtcbiAgICAgICAgICAgICAgICAgICAgb2JqW2tleV0ucHJvdmlkZXJzLmZvckVhY2goZnVuY3Rpb24gKHZhbCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yIGVhY2ggZmlsdGVyLCBjcmVhdGUgc3RyaW5nIHRoYXQgY29tYmluZXMgYWxsIHByb3ZpZGVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ialtrZXldLnByb3ZpZGVycyArPSBwcnZkICsgXCIgbGlrZSAnJVwiICsgdmFsICsgXCIlJyBvciBcIjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgbGFzdCAnb3IgJyBmcm9tIHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICBmb2JqW2tleV0ucHJvdmlkZXJzID0gZm9ialtrZXldLnByb3ZpZGVycy5zdWJzdHJpbmcoMCwgZm9ialtrZXldLnByb3ZpZGVycy5sZW5ndGggLSAzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb2JqO1xuICAgIH1cblxuICAgIG1hcC5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICRzY29wZS5BTExwb2ludHMgPSBbXTtcbiAgICAgICAgLy9jcmVhdGVPbkNsaWNrRXZlbnQoZXZ0LCAkc2NvcGUuYWxsU2VjdG9ycyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFwIENsaWNrZWRcIik7XG4gICAgfSk7XG5cblxuICAgICRyb290U2NvcGUuJHdhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIExpYnJhcnlEZXRhaWxzO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdMaWJyYXJ5RGV0YWlscycsIExpYnJhcnlEZXRhaWxzKTtcbiAgICB9KTtcblxuICAgICRzY29wZS4kd2F0Y2goJ0NJQ09EZXRhaWxzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ0NJQ09EZXRhaWxzJywgJHNjb3BlLkNJQ09EZXRhaWxzKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGhpZ2hsaWdodFBvaW50U2VsZWN0aW9uKGluZGV4LCBwb2ludHMsIHNlY3Rvcikge1xuXG4gICAgICAgIGlmIChwb2ludHMubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICBpZiAoJHNjb3BlLkFMTHBvaW50cy5sZW5ndGggPCAyKSB7IC8vIGNoZWNrIGlmIG1vcmUgdGhlbiBvbmUgc2VjdG9yIGlzIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgaW5kZXggPSAkc2NvcGUuZGV0YWlsc0luZGV4O1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50UG9pbnQgPSBwb2ludHNbMF1baW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQb2ludCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGF5ZXJpbmRleCA9IG92ZXJsYXlOYW1lcy5pbmRleE9mKHNlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyT3ZlcmxheSA9IG92ZXJsYXlzW2xheWVyaW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXllcnMgPSBjdXJyT3ZlcmxheS5nZXRMYXllcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxheWVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxheWVyID0gbGF5ZXJzW09iamVjdC5rZXlzKGxheWVycylbMF1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gXCJpZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlY3RvciA9PSBcImNpY29zX3VnYW5kYVwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSBcInN1Ym1pc3Npb25faWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXBCdWlsZGVyLnNlbGVjdGVkQ29uZmV0dGkgPSBsYXllci5mZWF0dXJlc1tjdXJyZW50UG9pbnQucHJvcGVydGllc1tpZF1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXBCdWlsZGVyLnNlbGVjdGVkQ29uZmV0dGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFwQnVpbGRlci5zZWxlY3RlZENvbmZldHRpLnNlbGVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWFwQnVpbGRlci5wcmV2aW91c2x5U2VsZWN0ZWRDb25mZXR0aSkgTWFwQnVpbGRlci5wcmV2aW91c2x5U2VsZWN0ZWRDb25mZXR0aS5kZXNlbGVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXBCdWlsZGVyLnByZXZpb3VzbHlTZWxlY3RlZENvbmZldHRpID0gTWFwQnVpbGRlci5zZWxlY3RlZENvbmZldHRpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlcyBtdWx0aXBsZSBzZWN0b3JzXG4gICAgICAgICAgICAgICAgaW5kZXggPSAkc2NvcGUuZGV0YWlsc0luZGV4O1xuXG4gICAgICAgICAgICAgICAgdmFyIGFsbHBvaW50cyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgLy9jb21iaW5lIGZlYXR1cmUgcG9pbnRzIGZyb20gYWxsIHNlY3RvcnMgaW50byBvbmUgYXJyYXkgJ2FsbHBvaW50cydcbiAgICAgICAgICAgICAgICBwb2ludHMuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbC5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxwb2ludHMucHVzaCh2KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFBvaW50ID0gYWxscG9pbnRzW2luZGV4XTtcblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxheWVyaW5kZXggPSAoY3VycmVudFBvaW50LnByb3BlcnRpZXMuc2VjdG9yID09IFwiZnNwXCIpID8gb3ZlcmxheU5hbWVzLmluZGV4T2Yoc2VjdG9yKSA6IG92ZXJsYXlOYW1lcy5pbmRleE9mKGN1cnJlbnRQb2ludC5wcm9wZXJ0aWVzLnNlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyT3ZlcmxheSA9IG92ZXJsYXlzW2xheWVyaW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXllcnMgPSBjdXJyT3ZlcmxheS5nZXRMYXllcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxheWVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxheWVyID0gbGF5ZXJzW09iamVjdC5rZXlzKGxheWVycylbMF1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gXCJpZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlY3RvciA9PSBcImNpY29zX3VnYW5kYVwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSBcInN1Ym1pc3Npb25faWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXBCdWlsZGVyLnNlbGVjdGVkQ29uZmV0dGkgPSBsYXllci5mZWF0dXJlc1tjdXJyZW50UG9pbnQucHJvcGVydGllcy5pZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hcEJ1aWxkZXIuc2VsZWN0ZWRDb25mZXR0aSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXBCdWlsZGVyLnNlbGVjdGVkQ29uZmV0dGkuc2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXBCdWlsZGVyLnByZXZpb3VzbHlTZWxlY3RlZENvbmZldHRpICYmIChNYXBCdWlsZGVyLnNlbGVjdGVkQ29uZmV0dGkuaWQgIT09IE1hcEJ1aWxkZXIucHJldmlvdXNseVNlbGVjdGVkQ29uZmV0dGkuaWQpKSBNYXBCdWlsZGVyLnByZXZpb3VzbHlTZWxlY3RlZENvbmZldHRpLmRlc2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hcEJ1aWxkZXIucHJldmlvdXNseVNlbGVjdGVkQ29uZmV0dGkgPSBNYXBCdWlsZGVyLnNlbGVjdGVkQ29uZmV0dGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU9uQ2xpY2tFdmVudChldnQsIHNlY3Rvcikge1xuXG4gICAgICAgIHZhciBidWZmZXIgPSBjbGlja1RvQnVmZmVyKGV2dCk7XG5cbiAgICAgICAgLy9MLmdlb0pzb24oSlNPTi5wYXJzZShidWZmZXIpKS5hZGRUbyhtYXApO1xuXG4gICAgICAgIHNlY3Rvci5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICRzY29wZS5mZWF0dXJlQ29sbGVjdGlvbiA9IFtdO1xuICAgICAgICAgICAgJHNjb3BlLkFMTGRldGFpbHMgPSBbXTtcbiAgICAgICAgICAgIHN3aXRjaCAodmFsLmNhcGl0YWxpemUoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ0hlYWx0aCc6XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWJsZVBvc3RBcmdzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuZmllbGRzOiAnbGF0LGxuZyxpZCx0eXBlLG5hbWUscGhvdG9zLGRlbGl2ZXJ5X2NlbnRlcixzZXBhcmF0ZV9tYXRlcm5pdHksc2JhX3Jlc291cmNlLGZlbWFsZV9zdGVyaWxpemF0aW9uLGludHJhX3V0ZXJpbmUsY29uZG9tcyxvcmFsX3BpbGxzLHBoYXJtYWNpc3QsY3NlY3Rpb25fZW1vbmMscGhjXzI0XzcsYmxvb2RfdHJhbnNmdXNpb24saW1tdW5pemF0aW9uLGNvbGRfY2hhaW5fZXF1aXBtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogJ2dlb2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuR2VvbWV0cnk6ICd5ZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0czogYnVmZmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDIwMCAvL2FkZCBhIGxpbWl0IG9mIDIwMCBzbyB3ZSBkb24ndCBnZXQgY2FycmllZCBhd2F5XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKEhlYWx0aFdoZXJlQ2xhdXNlICE9ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZVBvc3RBcmdzLndoZXJlID0gSGVhbHRoV2hlcmVDbGF1c2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgcG9pbnRVcmwgPSBcImh0dHA6Ly9zcGF0aWFsc2VydmVyLnNwYXRpYWxkZXYuY29tL3NlcnZpY2VzL3RhYmxlcy9oZWFsdGhfMjAxNC9xdWVyeVwiO1xuXG4gICAgICAgICAgICAgICAgICAgICRodHRwLnBvc3QocG9pbnRVcmwsIHRhYmxlUG9zdEFyZ3MpLnN1Y2Nlc3MoZnVuY3Rpb24gKHBvaW50cywgcXN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9HZW9KU09OIHJlc3VsdCBvZiBwb2ludHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcG9pbnRzIHx8IHBvaW50cy5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBmZWF0dXJlOiAnICsgcG9pbnRzLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcG9pbnQgaXMgYSBmZWF0dXJlY29sbGVjdGlvbi4gb3BlbiB0aGUgcGFuZWwgYW5kIHNob3cgc29tZSBzdHVmZi5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb2ludHMgJiYgcG9pbnRzLmZlYXR1cmVzICYmIHBvaW50cy5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5mZWF0dXJlQ29sbGVjdGlvbi5sZW5ndGggPCBzZWN0b3IubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCBzZWN0b3IgYW5kIHVybCBmb3IgcGhvdG9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50cy5mZWF0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5wcm9wZXJ0aWVzW1wic2VjdG9yXCJdID0gJ2hlYWx0aCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwucHJvcGVydGllc1tcInVybFwiXSA9IFwiaHR0cDovL3NwYXRpYWxzZXJ2ZXIuc3BhdGlhbGRldi5jb20vZnNwLWVicy8yMDE0L1wiICsgJHNjb3BlLnNlbGVjdGlvbi50b0xvd2VyQ2FzZSgpICsgXCIvXCIgKyB2YWwucHJvcGVydGllcy5zZWN0b3IgKyBcIi9cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5BTExwb2ludHMucHVzaChwb2ludHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVhdHVyZUNvbGxlY3Rpb24ucHVzaChwb2ludHMuZmVhdHVyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2RldGFpbHMnLCAkc2NvcGUuZmVhdHVyZUNvbGxlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGV0YWlsc0luZGV4ID09IDApIGhpZ2hsaWdodFBvaW50U2VsZWN0aW9uKCRzY29wZS5kZXRhaWxzSW5kZXgsICRzY29wZS5mZWF0dXJlQ29sbGVjdGlvbiwgXCJoZWFsdGhcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQWdyaWN1bHR1cmUnOlxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFibGVQb3N0QXJncyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybmZpZWxkczogJ2xhdCxsbmcsaWQsdHlwZSxuYW1lLHBob3RvcyxpcnJpZ2F0aW9uX3B1bXBzLGZhcm1fdHJhY3RvcnMsc2VlZCxmZXJ0aWxpemVyLGNoZW1pY2FsX2lucHV0cyxvcmdhbmljX2ZlcnRpbGl6ZXJzLHZldF9zdXBwbGllcyx0b29sc19lcXVpcG1lbnQsc2VlZF9tdWxpcGxpZXIsc3RvcmFnZV9jYXBhY2l0eSx1cmJhbl9jZW50ZXJfZGlzdCxzZWVkX211bGlwbGllcix2YWNpbmF0aW9uLGluc2VtaW5haXRvbixicmVlZGluZyxtb2Rlcm5pemVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogJ2dlb2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuR2VvbWV0cnk6ICd5ZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0czogYnVmZmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDIwMCAvL2FkZCBhIGxpbWl0IG9mIDIwMCBzbyB3ZSBkb24ndCBnZXQgY2FycmllZCBhd2F5XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKEFnV2hlcmVDbGF1c2UgIT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlUG9zdEFyZ3Mud2hlcmUgPSBBZ1doZXJlQ2xhdXNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvaW50VXJsID0gXCJodHRwOi8vc3BhdGlhbHNlcnZlci5zcGF0aWFsZGV2LmNvbS9zZXJ2aWNlcy90YWJsZXMvYWdyaWN1bHR1cmVfMjAxNC9xdWVyeVwiO1xuXG4gICAgICAgICAgICAgICAgICAgICRodHRwLnBvc3QocG9pbnRVcmwsIHRhYmxlUG9zdEFyZ3MpLnN1Y2Nlc3MoZnVuY3Rpb24gKHBvaW50cywgcXN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9HZW9KU09OIHJlc3VsdCBvZiBwb2ludHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcG9pbnRzIHx8IHBvaW50cy5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBmZWF0dXJlOiAnICsgcG9pbnRzLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcG9pbnQgaXMgYSBmZWF0dXJlY29sbGVjdGlvbi4gb3BlbiB0aGUgcGFuZWwgYW5kIHNob3cgc29tZSBzdHVmZi5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb2ludHMgJiYgcG9pbnRzLmZlYXR1cmVzICYmIHBvaW50cy5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5mZWF0dXJlQ29sbGVjdGlvbi5sZW5ndGggPCBzZWN0b3IubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCBzZWN0b3IgYW5kIHVybCBmb3IgcGhvdG9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50cy5mZWF0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5wcm9wZXJ0aWVzW1wic2VjdG9yXCJdID0gJ2FncmljdWx0dXJlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5wcm9wZXJ0aWVzW1widXJsXCJdID0gXCJodHRwOi8vc3BhdGlhbHNlcnZlci5zcGF0aWFsZGV2LmNvbS9mc3AtZWJzLzIwMTQvXCIgKyAkc2NvcGUuc2VsZWN0aW9uLnRvTG93ZXJDYXNlKCkgKyBcIi9cIiArIHZhbC5wcm9wZXJ0aWVzLnNlY3RvciArIFwiL1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkFMTHBvaW50cy5wdXNoKHBvaW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWF0dXJlQ29sbGVjdGlvbi5wdXNoKHBvaW50cy5mZWF0dXJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZGV0YWlscycsICRzY29wZS5mZWF0dXJlQ29sbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5kZXRhaWxzSW5kZXggPT0gMCkgaGlnaGxpZ2h0UG9pbnRTZWxlY3Rpb24oJHNjb3BlLmRldGFpbHNJbmRleCwgJHNjb3BlLmZlYXR1cmVDb2xsZWN0aW9uLCBcImFncmljdWx0dXJlXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0xpYnJhcnknOlxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFibGVQb3N0QXJncyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybmZpZWxkczogJ2xhdCxsbmcsbmFtZSx0eXBlLGlkLHBob3RvcyxidXNpbmVzc19ob3VycyxzdGFmZl9jb3VudCxpbnRlcm5ldCxwdWJsaWNfY29tcHV0ZXJfY291bnQsY29tcHV0ZXJfZmVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogJ2dlb2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuR2VvbWV0cnk6ICd5ZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0czogYnVmZmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDIwMCAvL2FkZCBhIGxpbWl0IG9mIDIwMCBzbyB3ZSBkb24ndCBnZXQgY2FycmllZCBhd2F5XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKExpYnJhcnlXaGVyZUNsYXVzZSAhPSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVQb3N0QXJncy53aGVyZSA9IExpYnJhcnlXaGVyZUNsYXVzZVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvaW50VXJsID0gXCJodHRwOi8vc3BhdGlhbHNlcnZlci5zcGF0aWFsZGV2LmNvbS9zZXJ2aWNlcy90YWJsZXMvbGlicmFyeV8yMDE0L3F1ZXJ5XCI7XG4gICAgICAgICAgICAgICAgICAgICRodHRwLnBvc3QocG9pbnRVcmwsIHRhYmxlUG9zdEFyZ3MpLnN1Y2Nlc3MoZnVuY3Rpb24gKHBvaW50cywgcXN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9HZW9KU09OIHJlc3VsdCBvZiBwb2ludHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcG9pbnRzIHx8IHBvaW50cy5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBmZWF0dXJlOiAnICsgcG9pbnRzLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcG9pbnQgaXMgYSBmZWF0dXJlY29sbGVjdGlvbi4gb3BlbiB0aGUgcGFuZWwgYW5kIHNob3cgc29tZSBzdHVmZi5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb2ludHMgJiYgcG9pbnRzLmZlYXR1cmVzICYmIHBvaW50cy5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5mZWF0dXJlQ29sbGVjdGlvbi5sZW5ndGggPCBzZWN0b3IubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCBzZWN0b3IgYW5kIHVybCBmb3IgcGhvdG9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50cy5mZWF0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5wcm9wZXJ0aWVzW1wic2VjdG9yXCJdID0gJ2xpYnJhcnknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnByb3BlcnRpZXNbXCJ1cmxcIl0gPSBcImh0dHA6Ly9zcGF0aWFsc2VydmVyLnNwYXRpYWxkZXYuY29tL2ZzcC1lYnMvMjAxNC9cIiArICRzY29wZS5zZWxlY3Rpb24udG9Mb3dlckNhc2UoKSArIFwiL1wiICsgdmFsLnByb3BlcnRpZXMuc2VjdG9yICsgXCIvXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuQUxMcG9pbnRzLnB1c2gocG9pbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlYXR1cmVDb2xsZWN0aW9uLnB1c2gocG9pbnRzLmZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkZXRhaWxzJywgJHNjb3BlLmZlYXR1cmVDb2xsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRldGFpbHNJbmRleCA9PSAwKSBoaWdobGlnaHRQb2ludFNlbGVjdGlvbigkc2NvcGUuZGV0YWlsc0luZGV4LCAkc2NvcGUuZmVhdHVyZUNvbGxlY3Rpb24sIFwibGlicmFyeVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnQ0lDT1MnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ0NpY29zX2tlbnlhJzpcbiAgICAgICAgICAgICAgICBjYXNlICdDaWNvc19uaWdlcmlhJzpcbiAgICAgICAgICAgICAgICBjYXNlICdDaWNvc191Z2FuZGEnOlxuICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnNlbGVjdGlvbiA9PSAnSW5kaWEnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFibGVQb3N0QXJncyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5maWVsZHM6ICdsYXQsbG5nLG5hbWUsYXNzb2NfYmFuayxhc3NvY19idXNpbmVzcyxmb3JtX3N1Ym1pdHRlZCx0eXBlLGlkLHBob3RvcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAnZ2VvanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuR2VvbWV0cnk6ICd5ZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVyc2VjdHM6IGJ1ZmZlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogMjAwIC8vYWRkIGEgbGltaXQgb2YgMjAwIHNvIHdlIGRvbid0IGdldCBjYXJyaWVkIGF3YXlcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9pbnRVcmwgPSBcImh0dHA6Ly9zcGF0aWFsc2VydmVyLnNwYXRpYWxkZXYuY29tL3NlcnZpY2VzL3RhYmxlcy9jaWNvc18yMDE0L3F1ZXJ5XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGhvdG9Sb290ID0gXCJodHRwOi8vc3BhdGlhbHNlcnZlci5zcGF0aWFsZGV2LmNvbS9mc3AtZWJzLzIwMTQvXCIgKyAkc2NvcGUuc2VsZWN0aW9uLnRvTG93ZXJDYXNlKCkgKyBcIi9mc3AvXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQ0lDT1doZXJlQ2xhdXNlICE9ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVQb3N0QXJncy53aGVyZSA9IENJQ09XaGVyZUNsYXVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KHBvaW50VXJsLCB0YWJsZVBvc3RBcmdzKS5zdWNjZXNzKGZ1bmN0aW9uIChwb2ludHMsIHFzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0dlb0pTT04gcmVzdWx0IG9mIHBvaW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcG9pbnRzIHx8IHBvaW50cy5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZmV0Y2ggZmVhdHVyZTogJyArIHBvaW50cy5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BvaW50IGlzIGEgZmVhdHVyZWNvbGxlY3Rpb24uIG9wZW4gdGhlIHBhbmVsIGFuZCBzaG93IHNvbWUgc3R1ZmYuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvaW50cyAmJiBwb2ludHMuZmVhdHVyZXMgJiYgcG9pbnRzLmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5mZWF0dXJlQ29sbGVjdGlvbi5sZW5ndGggPCBzZWN0b3IubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgc2VjdG9yIGFuZCB1cmwgZm9yIHBob3Rvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRzLmZlYXR1cmVzLmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5wcm9wZXJ0aWVzW1wic2VjdG9yXCJdID0gJ0NJQ09TJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwucHJvcGVydGllc1tcInVybFwiXSA9IHBob3RvUm9vdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkFMTHBvaW50cy5wdXNoKHBvaW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVhdHVyZUNvbGxlY3Rpb24ucHVzaChwb2ludHMuZmVhdHVyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkZXRhaWxzJywgJHNjb3BlLmZlYXR1cmVDb2xsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGV0YWlsc0luZGV4ID09IDApIGhpZ2hsaWdodFBvaW50U2VsZWN0aW9uKCRzY29wZS5kZXRhaWxzSW5kZXgsICRzY29wZS5mZWF0dXJlQ29sbGVjdGlvbiwgXCJDSUNPU1wiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuc2VsZWN0aW9uID09ICdOaWdlcmlhJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhYmxlUG9zdEFyZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuZmllbGRzOiAnc2hhcmVkX2FnZW50LGJhbmtfb3BlcmF0aW9uYWwsaWQsY291bnRyeSx0eXBlLHByb3ZpZGVycyxwaG90b3MsbGFuZF91c2Usc3VibWl0X2RhdGUsYmFua19yZWdpc3RlcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6ICdnZW9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5HZW9tZXRyeTogJ3llcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0czogYnVmZmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiAyMDAgLy9hZGQgYSBsaW1pdCBvZiAyMDAgc28gd2UgZG9uJ3QgZ2V0IGNhcnJpZWQgYXdheVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvaW50VXJsID0gXCJodHRwOi8vc3BhdGlhbHNlcnZlci5zcGF0aWFsZGV2LmNvbS9zZXJ2aWNlcy90YWJsZXMvY2ljb3NfMjAxMy8vcXVlcnlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwaG90b1Jvb3QgPSBcImh0dHA6Ly93d3cuZnNwbWFwcy5jb20vcGhwL2ZldGNoUGhvdG8ucGhwP25hbWU9TmlnZXJpYS9cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKENJQ09XaGVyZUNsYXVzZSAhPSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlUG9zdEFyZ3Mud2hlcmUgPSBDSUNPV2hlcmVDbGF1c2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRodHRwLnBvc3QocG9pbnRVcmwsIHRhYmxlUG9zdEFyZ3MpLnN1Y2Nlc3MoZnVuY3Rpb24gKHBvaW50cywgcXN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vR2VvSlNPTiByZXN1bHQgb2YgcG9pbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwb2ludHMgfHwgcG9pbnRzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBmZWF0dXJlOiAnICsgcG9pbnRzLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcG9pbnQgaXMgYSBmZWF0dXJlY29sbGVjdGlvbi4gb3BlbiB0aGUgcGFuZWwgYW5kIHNob3cgc29tZSBzdHVmZi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9pbnRzICYmIHBvaW50cy5mZWF0dXJlcyAmJiBwb2ludHMuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmZlYXR1cmVDb2xsZWN0aW9uLmxlbmd0aCA8IHNlY3Rvci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCBzZWN0b3IgYW5kIHVybCBmb3IgcGhvdG9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludHMuZmVhdHVyZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnByb3BlcnRpZXNbXCJzZWN0b3JcIl0gPSAnY2ljb3NfbmlnZXJpYSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnByb3BlcnRpZXNbXCJ1cmxcIl0gPSBwaG90b1Jvb3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5BTExwb2ludHMucHVzaChwb2ludHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlYXR1cmVDb2xsZWN0aW9uLnB1c2gocG9pbnRzLmZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZGV0YWlscycsICRzY29wZS5mZWF0dXJlQ29sbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRldGFpbHNJbmRleCA9PSAwKSBoaWdobGlnaHRQb2ludFNlbGVjdGlvbigkc2NvcGUuZGV0YWlsc0luZGV4LCAkc2NvcGUuZmVhdHVyZUNvbGxlY3Rpb24sIFwiY2ljb3NfbmlnZXJpYVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuc2VsZWN0aW9uID09ICdLZW55YScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YWJsZVBvc3RBcmdzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybmZpZWxkczogJ3NoYXJlZF9hZ2VudCxiYW5rX29wZXJhdGlvbmFsLGlkLGNvdW50cnksdHlwZSxwcm92aWRlcnMscGhvdG9zLGxhbmRfdXNlLHN1Ym1pdF9kYXRlLGJhbmtfcmVnaXN0ZXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAnZ2VvanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuR2VvbWV0cnk6ICd5ZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVyc2VjdHM6IGJ1ZmZlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogMjAwIC8vYWRkIGEgbGltaXQgb2YgMjAwIHNvIHdlIGRvbid0IGdldCBjYXJyaWVkIGF3YXlcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb2ludFVybCA9IFwiaHR0cDovL3NwYXRpYWxzZXJ2ZXIuc3BhdGlhbGRldi5jb20vc2VydmljZXMvdGFibGVzL2NpY29zXzIwMTMvL3F1ZXJ5XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGhvdG9Sb290ID0gXCJodHRwOi8vd3d3LmZzcG1hcHMuY29tL3BocC9mZXRjaFBob3RvLnBocD9uYW1lPUtlbnlhL1wiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQ0lDT1doZXJlQ2xhdXNlICE9ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVQb3N0QXJncy53aGVyZSA9IENJQ09XaGVyZUNsYXVzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgJGh0dHAucG9zdChwb2ludFVybCwgdGFibGVQb3N0QXJncykuc3VjY2VzcyhmdW5jdGlvbiAocG9pbnRzLCBxc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9HZW9KU09OIHJlc3VsdCBvZiBwb2ludHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBvaW50cyB8fCBwb2ludHMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGZldGNoIGZlYXR1cmU6ICcgKyBwb2ludHMuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wb2ludCBpcyBhIGZlYXR1cmVjb2xsZWN0aW9uLiBvcGVuIHRoZSBwYW5lbCBhbmQgc2hvdyBzb21lIHN0dWZmLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb2ludHMgJiYgcG9pbnRzLmZlYXR1cmVzICYmIHBvaW50cy5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZmVhdHVyZUNvbGxlY3Rpb24ubGVuZ3RoIDwgc2VjdG9yLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHNlY3RvciBhbmQgdXJsIGZvciBwaG90b3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50cy5mZWF0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwucHJvcGVydGllc1tcInNlY3RvclwiXSA9ICdjaWNvc19rZW55YSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnByb3BlcnRpZXNbXCJ1cmxcIl0gPSBwaG90b1Jvb3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5BTExwb2ludHMucHVzaChwb2ludHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlYXR1cmVDb2xsZWN0aW9uLnB1c2gocG9pbnRzLmZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZGV0YWlscycsICRzY29wZS5mZWF0dXJlQ29sbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRldGFpbHNJbmRleCA9PSAwKSBoaWdobGlnaHRQb2ludFNlbGVjdGlvbigkc2NvcGUuZGV0YWlsc0luZGV4LCAkc2NvcGUuZmVhdHVyZUNvbGxlY3Rpb24sIFwiY2ljb3Nfa2VueWFcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnNlbGVjdGlvbiA9PSAnVWdhbmRhJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFibGVQb3N0QXJncyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5maWVsZHM6ICd0eXBlLHN0YXR1cyxzdWJtaXNzaW9uX2lkLHBydmQsY291bnRyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAnZ2VvanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuR2VvbWV0cnk6ICd5ZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVyc2VjdHM6IGJ1ZmZlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogMjAwIC8vYWRkIGEgbGltaXQgb2YgMjAwIHNvIHdlIGRvbid0IGdldCBjYXJyaWVkIGF3YXlcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb2ludFVybCA9IFwiaHR0cDovL3NwYXRpYWxzZXJ2ZXIuc3BhdGlhbGRldi5jb20vc2VydmljZXMvdGFibGVzL2NpY29zXzIwMTUvcXVlcnlcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKENJQ09XaGVyZUNsYXVzZSAhPSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlUG9zdEFyZ3Mud2hlcmUgPSBDSUNPV2hlcmVDbGF1c2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRodHRwLnBvc3QocG9pbnRVcmwsIHRhYmxlUG9zdEFyZ3MpLnN1Y2Nlc3MoZnVuY3Rpb24gKHBvaW50cywgcXN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vR2VvSlNPTiByZXN1bHQgb2YgcG9pbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwb2ludHMgfHwgcG9pbnRzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBmZWF0dXJlOiAnICsgcG9pbnRzLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcG9pbnQgaXMgYSBmZWF0dXJlY29sbGVjdGlvbi4gb3BlbiB0aGUgcGFuZWwgYW5kIHNob3cgc29tZSBzdHVmZi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9pbnRzICYmIHBvaW50cy5mZWF0dXJlcyAmJiBwb2ludHMuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmZlYXR1cmVDb2xsZWN0aW9uLmxlbmd0aCA8IHNlY3Rvci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCBzZWN0b3IgYW5kIHVybCBmb3IgcGhvdG9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludHMuZmVhdHVyZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnByb3BlcnRpZXNbXCJzZWN0b3JcIl0gPSAnY2ljb3NfdWdhbmRhJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkFMTHBvaW50cy5wdXNoKHBvaW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVhdHVyZUNvbGxlY3Rpb24ucHVzaChwb2ludHMuZmVhdHVyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkZXRhaWxzJywgJHNjb3BlLmZlYXR1cmVDb2xsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRldGFpbHNJbmRleCA9PSAwKSBoaWdobGlnaHRQb2ludFNlbGVjdGlvbigkc2NvcGUuZGV0YWlsc0luZGV4LCAkc2NvcGUuZmVhdHVyZUNvbGxlY3Rpb24sIFwiY2ljb3NfdWdhbmRhXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyB3YXRjaCBmb3Igd2hlbiB1c2VyIGRldGFpbHMgcGFuZWwgaW5kZXggY2hhbmdlc1xuICAgICRzY29wZS4kb24oJ2FjdGl2ZWlkeCcsIGZ1bmN0aW9uIChldmVudCwgYXJncykge1xuICAgICAgICAvLyBhY3RpdmVpZHggY2hhbmdlcyBtdWx0aXBsZXMgdGltZXMgaW4gZGV0YWlscy5qcywgc28gb25seSBydW4gd2hlbiBkZXRhaWxzIGluZGV4ICE9IGFjdGl2ZWlkeFxuICAgICAgICBpZiAoJHNjb3BlLmRldGFpbHNJbmRleCAhPSBhcmdzICYmIGFyZ3MgIT09IDApIHtcbiAgICAgICAgICAgICRzY29wZS5kZXRhaWxzSW5kZXggPSBhcmdzLnByb3BlcnRpZXMuaW5kZXg7XG4gICAgICAgICAgICBoaWdobGlnaHRQb2ludFNlbGVjdGlvbigkc2NvcGUuZGV0YWlsc0luZGV4LCAkc2NvcGUuZmVhdHVyZUNvbGxlY3Rpb24sIGFyZ3MucHJvcGVydGllcy5zZWN0b3IpO1xuICAgICAgICB9XG4gICAgfSlcblxufSk7IiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnU3BhdGlhbFZpZXdlcicpLmNvbnRyb2xsZXIoJ05hdkJhckN0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLFNlY3RvckZhY3RvcnkpIHtcbiAgJHNjb3BlLnBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcblxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgUnlhbiBXaGl0bGV5IDxyd2hpdGxleUBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDUvMjEvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnU3BhdGlhbFZpZXdlcicpLmNvbnRyb2xsZXIoJ1NlYXJjaEVDT1NDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlLCAkc3RhdGVQYXJhbXMsICRodHRwLCBWZWN0b3JQcm92aWRlcikge1xuICAkc2NvcGUucGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuXG4gIHZhciB1cmwgPSBjb25maWcuY2h1YmJzUGF0aCgnc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1kb2Vjb3N0ZXh0c2VhcmNoJmZvcm1hdD1qc29uJnRleHQ9OnRleHQnKTtcblxuICAkc2NvcGUuc2VhcmNoVGV4dCA9ICcnO1xuICAkc2NvcGUuJHdhdGNoKCdTZWFyY2hJbnB1dCcsIGV4ZWN1dGVFQ09TU2VhcmNoLCB0cnVlKTtcblxuXG4gICAgJHNjb3BlLkZpcnN0TmFtZXMgPSBbJ0RhbmllbCcsJ1J5YW4nLCdKdWJhbCcsJ0NsaW50JywnRGF2aWQnLCdEYW5pZWxhJywnTmljaycsJ1RvZGQnLCdEZXJyaWNrJywnTGVicm9uJ107XG5cbiAgZnVuY3Rpb24gZXhlY3V0ZUVDT1NTZWFyY2ggKHRleHQpe1xuICAgICAgaWYoIXRleHQgfHwgdGV4dC5sZW5ndGggPCAzKSByZXR1cm47XG5cbiAgICAgIHZhciB0aGlzVVJMID0gdXJsLnJlcGxhY2UoXCI6dGV4dFwiLCB0ZXh0KTtcblxuICAgICAgLy8gRmV0Y2ggZnJvbSB0aGUgc2VydmVyIG9ubHkgaWYgd2UgZG9uJ3QgaGF2ZSBpdCBpbiB0aGUgaGFzaFxuICAgICAgJGh0dHAuZ2V0KHRoaXNVUkwpLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3VsdCwgc3RhdHVzKSB7XG5cbiAgICAgICAgICBpZiAoIXJlc3VsdCl7XG4gICAgICAgICAgICAgICRzY29wZS5yZXN1bHRzID0gW3tuYW1lOiBcIk5vIHJlc3VsdHMgZm91bmQuXCJ9XTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKHJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgICAkc2NvcGUucmVzdWx0cyA9IFt7bmFtZTogXCJFcnJvciBzZWFyY2hpbmcgRUNPUy5cIn1dO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy9icmVhayB1cCB0aGUgcmVzdWx0cyBieSB0eXBlLlxuICAgICAgICAgICRzY29wZS5wcm9qZWN0UmVzdWx0cyA9IHJlc3VsdC5maWx0ZXIoZnVuY3Rpb24oaXRlbSl7XG4gICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGhlbWVfdHlwZSA9PSAnUHJvamVjdCc7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAkc2NvcGUuZGlzYXN0ZXJSZXN1bHRzID0gcmVzdWx0LmZpbHRlcihmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGhlbWVfdHlwZSA9PSAnRGlzYXN0ZXInO1xuICAgICAgICAgIH0pO1xuXG4gICAgICB9KTtcbiAgfVxuXG4gICAgJHNjb3BlLmhhbmRsZVNlYXJjaFJlc3VsdENsaWNrID0gZnVuY3Rpb24ocHJvcGVydGllcyl7XG4gICAgICAgIC8vU2VuZCB0byBkZWF0aWxzIHBhbmVsXG4gICAgICAgIHNlbmRQcm9qZWN0VG9EZXRhaWxzUGFuZWwocHJvcGVydGllcyk7XG5cbiAgICAgICAgLy9JZiB3ZSBoYXZlIGEgZ3VpZCwgdGhlbiB0cnkgdG8gem9vbSB0byBpdC5cbiAgICAgICAgaWYocHJvcGVydGllcy5sb2NhdGlvbl9fcl9naXNfZ2VvX2lkX19jICYmIHByb3BlcnRpZXMubGV2ZWwpe1xuICAgICAgICAgICAgem9vbVRvR1VJRChwcm9wZXJ0aWVzLmxvY2F0aW9uX19yX2dpc19nZW9faWRfX2MsIHByb3BlcnRpZXMubGV2ZWwpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNlbmRQcm9qZWN0VG9EZXRhaWxzUGFuZWwgKHByb3BlcnRpZXMpe1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2RldGFpbHMnLCB7IGZlYXR1cmU6IHsgcHJvcGVydGllczogcHJvcGVydGllcyB9IH0pO1xuICAgIH1cblxuICAgIC8vdGhpcyBpcyBhIGR1cGxpY2F0ZSBmcm9tIGJyZWFkY3J1bWJzLmpzICBTaG91bGQgYmUgcmVmYWN0b3JlZCB0byBhIHNpbmdsZSBmdW5jdGlvblxuICAgIGZ1bmN0aW9uIHpvb21Ub0dVSUQgKGd1aWQsIGxldmVsKSB7XG4gICAgICAgIC8vR2l2ZW4gYSBHVUlELCB6b29tIHRvIHRoZSBmZWF0dXJlLlxuXG4gICAgICAgIC8vR3JhYiB0aGUgZmVhdHVyZSBmcm9tIHRoZSBWZWN0b3JQcm92aWRlci5cbiAgICAgICAgVmVjdG9yUHJvdmlkZXIuZmV0Y2hGZWF0dXJlKGd1aWQsIGxldmVsLCBudWxsLCBmdW5jdGlvbiAoZmVhdCkge1xuICAgICAgICAgICAgLy9NYWtlIGEgdGVtcCBnZW9qc29uIGxheWVyIGFuZCBhZGQgdGhlIGdlb2pzb24uXG4gICAgICAgICAgICAvL1RoZW4gZ3JhYiB0aGUgYm91bmRzIGZyb20gaXQgYW5kIHpvb20gdG8gaXQuXG5cbiAgICAgICAgICAgIHZhciBnamwgPSBMLmdlb0pzb24oZmVhdC5nZW9tZXRyeSk7XG4gICAgICAgICAgICAkc2NvcGUuJHBhcmVudC56b29tVG9Cb3VuZHMoZ2psLmdldEJvdW5kcygpKTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgICBhbmQgUnlhbiBXaGl0bGV5ICAgICAgPHJ3aGl0bGV5QHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgICBvbiA0LzE2LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ1NwYXRpYWxWaWV3ZXInKS5jb250cm9sbGVyKCdTaWRlVmlld0N0cmwnLCBmdW5jdGlvbigkc2NvcGUpIHtcblxuICAvL3Jlc2l6ZSBmdW5jdGlvblxuICBmdW5jdGlvbiByZXNpemVTY3JvbGxhYmxlUGFuZWwoKSB7XG4gICAgJChcIi5zaWRlLXZpZXcgLnNjcm9sbGFibGVcIikuaGVpZ2h0KCQoXCIuc2lkZS12aWV3IC5uYXZwYW5lbFwiKS5oZWlnaHQoKSAtICQoXCIuc2lkZS12aWV3IC5uYXZwYW5lbCAuc2Nyb2xsYWJsZVwiKS5wb3NpdGlvbigpLnRvcCk7ICAvL1RoaXMgc2hvdWxkIHJlc3BvbmQgdG8gd2luZG93LnJlc2l6ZSBldmVudHMgYW5kIHdpbGwgYmUgc2V0IGR1cmluZyB0aGF0IGV2ZW50IHRvIG1ha2Ugc3VyZSB0aGUgcGFuZWwgc3RheXNcbiAgfVxuXG4gIC8vQ29ubmVjdCB0aGUgbGF5b3V0IG9ucmVzaXplIGVuZCBldmVudFxuICB3aW5kb3cubGF5b3V0LnBhbmVzLmNlbnRlci5iaW5kKFwibGF5b3V0cGFuZW9ucmVzaXplX2VuZFwiLCByZXNpemVTY3JvbGxhYmxlUGFuZWwpO1xuXG4gIC8vRm9yIEluaXQuXG4gIHJlc2l6ZVNjcm9sbGFibGVQYW5lbCgpO1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNS82LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ1NwYXRpYWxWaWV3ZXInKS5jb250cm9sbGVyKCdUaGVtZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgVmVjdG9yUHJvdmlkZXIpIHtcblxuICB2YXIgdGhlbWVOYW1lSGFzaCA9ICRyb290U2NvcGUudGhlbWVOYW1lSGFzaCA9IHtcbiAgICBhbGw6ICdBbGwgQ291bnRyaWVzJyxcbiAgICBiYW5nbGFkZXNoOiAnQmFuZ2xhZGVzaCcsXG4gICAgaW5kaWE6ICdJbmRpYScsXG4gICAgaW5kb25lc2lhOiAnSW5kb25lc2lhJyxcbiAgICBrZW55YTogJ0tlbnlhJyxcbiAgICBuaWdlcmlhOiAnTmlnZXJpYScsXG4gICAgdGFuemFuaWE6ICdUYW56YW5pYScsXG4gICAgdWdhbmRhOiAnVWdhbmRhJ1xuICB9O1xuXG4gICRzY29wZS5zZXRUaGVtZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgICRzY29wZS50aGVtZU5hbWUgPSB0aGVtZU5hbWVIYXNoW2tleV07XG4gICAgJHNjb3BlLnNldFRoZW1lUXVlcnlQYXJhbShrZXkpO1xuICB9O1xuXG4gICRzY29wZS5zZXRUaGVtZVF1ZXJ5UGFyYW0gPSBmdW5jdGlvbiAodGhlbWUpIHtcbiAgICAkc3RhdGVQYXJhbXMudGhlbWUgPSB0aGVtZTtcbiAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lIHx8ICdtYWluJztcbiAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG4gIH07XG5cbiAgJHNjb3BlLnRoZW1lTmFtZSA9IHRoZW1lTmFtZUhhc2hbJHN0YXRlUGFyYW1zLnRoZW1lXSB8fCAnQWxsIENvdW50cmllcyc7XG5cbiAgLypcbiAgIEhhbmRsaW5nIFRoZW1lIE1lbnUgQW5pbWF0aW9uc1xuICAgKi9cblxuICAkc2NvcGUudG9nZ2xlVGhlbWVNZW51ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgZmxpcHBlZE91dCA9ICQoXCIubWVudS1zZWxlY3Rpb24gLmRyb3Bkb3duXCIpLmhhc0NsYXNzKFwib3BlblwiKTtcblxuICAgIGlmKGZsaXBwZWRPdXQgPT0gZmFsc2Upe1xuICAgICAgJHNjb3BlLnVuZnVybFRoZW1lcygpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgJHNjb3BlLnJlZnVybFRoZW1lcygpO1xuICAgIH1cbiAgfTtcblxuICAkc2NvcGUudW5mdXJsVGhlbWVzID0gZnVuY3Rpb24oKXtcbiAgICAkc2NvcGUucmVmdXJsVGhlbWVzKCk7XG4gICAgLy9UcnkgalF1ZXJ5IHRvIGFkZCBhbiAnb24nIGNsYXNzIHRvIGVhY2ggb2YgdGhlIHRoZW1lIExJIGVsZW1lbnRzIG9uIGEgdGltZXIuXG4gICAgJCgkKCcjVGhlbWVNZW51IGxpJykuZ2V0KCkucmV2ZXJzZSgpKS5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHNlbGYpLmFkZENsYXNzKFwidGhlbWUtc2VsZWN0b3ItbGktb25cIik7XG4gICAgICB9LCBpbmRleCoxNTApO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vUmVmdXJsP1xuICAkc2NvcGUucmVmdXJsVGhlbWVzID0gZnVuY3Rpb24oKXtcbiAgICAvL1RyeSBqUXVlcnkgdG8gcmVtb3ZlIHRoZSAnb24nIGNsYXNzIHRvIGVhY2ggb2YgdGhlIHRoZW1lIExJIGVsZW1lbnRzIG9uIGEgdGltZXIuXG4gICAgJCgnI1RoZW1lU2VsZWN0b3JNZW51IC5kcm9wZG93bi1tZW51IGxpJykucmVtb3ZlQ2xhc3MoXCJ0aGVtZS1zZWxlY3Rvci1saS1vblwiKTtcbiAgfTtcblxuICAvKlxuICAgRW5kIFRoZW1lIE1lbnUgQW5pbWF0aW9uc1xuICAgKi9cblxufSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAzLzI2LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ1NwYXRpYWxWaWV3ZXInKS5jb250cm9sbGVyKCdUb29sc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRzdGF0ZVBhcmFtcywgU3Rvcmllc0NvbmZpZykge1xuICAkc2NvcGUucGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuXG4gICRzY29wZS4kb24oJ25lYXJieS1jbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICB9KTtcblxuXG5cblxuICB9KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDQvMTcvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnU3BhdGlhbFZpZXdlcicpLmNvbnRyb2xsZXIoJ1VwbG9hZEN0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRodHRwLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgJHVwbG9hZCkge1xuXG4gICRzY29wZS5zaG93QWxlcnQgPSBmYWxzZTtcbiAgJHNjb3BlLnNob3dQcm9ncmVzcyA9IGZhbHNlO1xuICAkc2NvcGUuc2hvd1VwbG9hZGVkVXJsID0gZmFsc2U7XG4gICRzY29wZS5wZXJjZW50ID0gMztcbiAgJHNjb3BlLmRpc2FibGVkID0gZmFsc2U7XG4gICRzY29wZS5rYlVwbG9hZGVkID0gMDtcbiAgJHNjb3BlLmtiVG90YWwgPSAwO1xuXG4gICRzY29wZS4kdXBsb2FkID0gJHVwbG9hZDtcblxuICAkc2NvcGUudXBsb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgJChcIiN1cGxvYWQtZmlsZS1pbnB1dFwiKS5jbGljaygpLmNoYW5nZShmdW5jdGlvbihldnQpIHtcbiAgICAgICRzY29wZS5zaG93UHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgJHNjb3BlLnBlcmNlbnQgPSA1O1xuXG4gICAgICB2YXIgZmlsZU5hbWUgPSAkKHRoaXMpLnZhbCgpLnNwbGl0KCdcXFxcJykucG9wKCk7XG4gICAgICB2YXIgZmlsZSA9ICQoJyN1cGxvYWQtZmlsZS1pbnB1dCcpLmdldCgwKS5maWxlc1swXTtcbiAgICAgIHBhcnNlQW5kVXBsb2FkRmlsZShmaWxlLCBmaWxlTmFtZSk7XG5cbiAgICB9KTtcbiAgfTtcblxuICAkc2NvcGUuZmlsZURyb3BwZWQgPSBmdW5jdGlvbiAoJGZpbGVzKSB7XG4gICAgdmFyIGZpbGUgPSAkZmlsZXNbMF07XG4gICAgcGFyc2VBbmRVcGxvYWRGaWxlKGZpbGUsIGZpbGUubmFtZSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gcGFyc2VBbmRVcGxvYWRGaWxlKGZpbGUsIGZpbGVOYW1lKSB7XG4gICAgaWYgKCFmaWxlTmFtZSkgZmlsZU5hbWUgPSAnZmlsZSc7XG4gICAgdmFyIHIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHIucmVhZEFzQmluYXJ5U3RyaW5nKGZpbGUpO1xuICAgIHIub25sb2FkZW5kID0gZnVuY3Rpb24oZSl7XG4gICAgICB2YXIgZGF0YSA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgIHZhciBwb3N0T2JqID0ge1xuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTWFwZm9saW8gVXBsb2FkZWQgRGF0YSAtIFwiICsgZmlsZU5hbWUsXG4gICAgICAgIFwicHVibGljXCI6IHRydWUsXG4gICAgICAgIFwiZmlsZXNcIjoge31cbiAgICAgIH07XG4gICAgICBwb3N0T2JqLmZpbGVzW2ZpbGVOYW1lXSA9IHtjb250ZW50OiBkYXRhfTtcbiAgICAgICRzY29wZS5wZXJjZW50ID0gNztcblxuICAgICAgJHNjb3BlLiR1cGxvYWQuaHR0cCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vZ2lzdHMnLFxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBkYXRhOiBwb3N0T2JqLFxuICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ31cbiAgICAgIH0pLnByb2dyZXNzKGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAkc2NvcGUucGVyY2VudCA9IHBhcnNlRmxvYXQoKGV2dC5sb2FkZWQgLyBldnQudG90YWxTaXplICogMTAwKS50b0ZpeGVkKDEpKTtcbiAgICAgICAgJHNjb3BlLmtiVXBsb2FkZWQgPSAoZXZ0LmxvYWRlZCAvIDEwMjQpLnRvRml4ZWQoMik7XG4gICAgICAgICRzY29wZS5rYlRvdGFsID0gKGV2dC50b3RhbFNpemUgLyAxMDI0KS50b0ZpeGVkKDIpO1xuICAgICAgfSkuc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpIHtcbiAgICAgICAgJHNjb3BlLnNob3dQcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICB2YXIgZmlsZW5hbWUgPSBkYXRhLmZpbGVzW2ZpbGVOYW1lXS5maWxlbmFtZTtcbiAgICAgICAgJHNjb3BlLmdpc3RSYXdVcmwgPSBkYXRhLmZpbGVzW2ZpbGVOYW1lXS5yYXdfdXJsO1xuICAgICAgICAkc2NvcGUuZ2lzdEh0bWxVcmwgPSBkYXRhLmh0bWxfdXJsO1xuICAgICAgICAkc2NvcGUuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAkc2NvcGUuc2hvd1VwbG9hZGVkVXJsID0gdHJ1ZTtcbiAgICAgICAgd2luZG93Lmdpc3RzLmFwcGVuZCh7bmFtZTogZmlsZW5hbWUsIHVybDogJHNjb3BlLmdpc3RSYXdVcmwsIGh0bWxVcmw6ICRzY29wZS5naXN0SHRtbFVybH0pO1xuICAgICAgfSkuZXJyb3IoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG4gICAgICAgICRzY29wZS5zaG93QWxlcnQgPSB0cnVlO1xuICAgICAgICAkc2NvcGUuZXJyb3JNZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkoZGF0YSxudWxsLDIpO1xuICAgICAgfSk7XG5cbiAgICB9O1xuICB9XG5cbiAgJHNjb3BlLmFkZFRvTWFwID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBuZXdVcmwgPSAkc2NvcGUuZ2lzdFJhd1VybCB8fCAkc2NvcGUucmVtb3RlVXJsO1xuICAgIGlmICghbmV3VXJsKSB7XG4gICAgICAkc2NvcGUuc2hvd0FsZXJ0ID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAkc3RhdGVQYXJhbXMubGF5ZXJzID0gJHN0YXRlUGFyYW1zLmxheWVycyArICcsJyArIG5ld1VybDtcbiAgICAkKCcjdXBsb2FkTW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgICQoJyN1cGxvYWRNb2RhbCcpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbihlKSB7XG4gICAgICAkc3RhdGUuZ28oJ21haW4nLCAkc3RhdGVQYXJhbXMpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgLyoqXG4gICAqIElmIFVwbG9hZEN0cmwgZ2V0cyBjYWxsZWQgdHdpY2UgZm9yIHNvbWUgcmVhc29uLCB3ZSBtaWdodFxuICAgKiBoYXZlIHRoaXMgY2xhc3MgaGFuZ2luZyBhcm91bmQgYmxvY2tpbmcgdGhlIGFwcC4gVXBsb2FkQ3RybFxuICAgKiBkb2VzIGdldCBjYWxsZWQgdHdpY2Ugc29tZXRpbWVzLCBiZWNhdXNlIHRoZSBtb2RhbCBzb21ldGltZXNcbiAgICogbnVkZ2VzIHRoZSBtYXAgYW5kIHJlaW5zdGFudGlhdGVzIHRoZSBtb2RhbCBhZ2FpbiB2aWEgYSBuZXdcbiAgICogcm91dGUuXG4gICAqL1xuICAkKCcubW9kYWwtYmFja2Ryb3AnKS5yZW1vdmUoKTtcblxuICAkKCcjdXBsb2FkTW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuXG4gICQoJyN1cGxvYWRNb2RhbCcpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbihlKSB7XG4gICAgJHN0YXRlLmdvKCdtYWluJywgJHN0YXRlUGFyYW1zKTtcbiAgfSk7XG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICAgYW5kIFJ5YW4gV2hpdGxleSAgICAgIDxyd2hpdGxleUBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDQvMi8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdTcGF0aWFsVmlld2VyJykuY29udHJvbGxlcignWm9vbUV4dGVudEN0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRyb290U2NvcGUsICRzdGF0ZVBhcmFtcywgVmVjdG9yUHJvdmlkZXIpIHtcbiAgJHNjb3BlLnBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcblxuICAvL0luaXRpYWxpemUgdGhlIGNvdW50cnkgc2VsZWN0b3IgbWVudSBieSBsb2FkaW5nIHRoZSBqc29uIGZpbGUgYW5kIHdyaXRpbmcgb3V0IHRoZSBuYW1lcyBpbnRvIHRoZSBwYW5lbFxuICAkc2NvcGUuY291bnRyeUxpc3QxID0gbnVsbDtcblxuICB2YXIgdmVjUmVzID0gVmVjdG9yUHJvdmlkZXIuY3JlYXRlUmVzb3VyY2UoXCJjb3VudHJ5ZXh0ZW50c1wiKTtcbiAgdmVjUmVzLmZldGNoKGZ1bmN0aW9uKGdlb2pzb24pe1xuICAgIC8vU29ydCBhbHBoYWJldGljYWxseVxuICAgIGdlb2pzb24uZmVhdHVyZXMgPSBnZW9qc29uLmZlYXR1cmVzLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgIHZhciB0ZXh0QSA9IGEucHJvcGVydGllcy5uYW1lXzA7XG4gICAgICB2YXIgdGV4dEIgPSBiLnByb3BlcnRpZXMubmFtZV8wO1xuICAgICAgcmV0dXJuICh0ZXh0QSA8IHRleHRCKSA/IC0xIDogKHRleHRBID4gdGV4dEIpID8gMSA6IDA7XG4gICAgfSk7XG5cbiAgICAkc2NvcGUuY291bnRyeUxpc3QxID0gZ2VvanNvbi5mZWF0dXJlcztcbiAgfSk7XG5cbiAgLy9Jbml0aWFsaXplIHRoZSBBUkMgUmVnaW9uIHNlbGVjdG9yIG1lbnUgYnkgbG9hZGluZyB0aGUganNvbiBmaWxlIGFuZCB3cml0aW5nIG91dCB0aGUgbmFtZXMgaW50byB0aGUgcGFuZWxcbiAgJHNjb3BlLnJlZ2lvbkxpc3QxID0gbnVsbDtcblxuICB2YXIgdmVjUmVzUmVnaW9uID0gVmVjdG9yUHJvdmlkZXIuY3JlYXRlUmVzb3VyY2UoXCJhcmNyZWdpb25leHRlbnRzXCIpO1xuICB2ZWNSZXNSZWdpb24uZmV0Y2goZnVuY3Rpb24oZ2VvanNvbil7XG4gICAgLy9Tb3J0IGFscGhhYmV0aWNhbGx5XG4gICAgZ2VvanNvbi5mZWF0dXJlcyA9IGdlb2pzb24uZmVhdHVyZXMuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgdmFyIHRleHRBID0gYS5wcm9wZXJ0aWVzLmFyY19yZWdpb247XG4gICAgICB2YXIgdGV4dEIgPSBiLnByb3BlcnRpZXMuYXJjX3JlZ2lvbjtcbiAgICAgIHJldHVybiAodGV4dEEgPCB0ZXh0QikgPyAtMSA6ICh0ZXh0QSA+IHRleHRCKSA/IDEgOiAwO1xuICAgIH0pO1xuXG4gICAgJHNjb3BlLnJlZ2lvbkxpc3QxID0gZ2VvanNvbi5mZWF0dXJlcztcbiAgfSk7XG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFNwYXRpYWxEZXYgb24gMS82LzE1LlxuICovXG4vKipcbiAqIENyZWF0ZWQgYnkgRGFuaWVsIEJhYWggPGRiYWFoQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMS82LzE1LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ1NwYXRpYWxWaWV3ZXInKS5mYWN0b3J5KCdBZ0ZpbHRlckZhY3RvcnknLCBmdW5jdGlvbiAoJGh0dHApIHtcblxuICAgIHZhciBBZyA9IFtdO1xuICAgIHZhciBBZ0xhbmRVc2UgPSBbXTtcbiAgICB2YXIgc2VydmljZSA9IHt9O1xuICAgIHNlcnZpY2UuQWdUb3RhbCA9IDA7XG4gICAgdmFyIEFnX0NvbmZpZyA9ICB7XG4gICAgICAgICdEYWlyeSBQcm9jZXNzb3JzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjOWIyNDJkJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ0RhaXJ5IFByb2Nlc3NvcnMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA2XG4gICAgICAgIH0sXG4gICAgICAgICdEYXkgb2xkIGNoaWNrIGhhdGNoZXJpZXMnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyMzMDg2YWInLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnRGF5IG9sZCBjaGljayBoYXRjaGVyaWVzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNVxuICAgICAgICB9LFxuICAgICAgICAnUHJpdmF0ZSBzZWN0b3IgQWdyaWN1bHR1cmFsIHNlcnZpY2UgcHJvdmlkZXJzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjOTc3YzAwJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ1ByaXZhdGUgc2VjdG9yIEFncmljdWx0dXJhbCBzZXJ2aWNlIHByb3ZpZGVycycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDdcbiAgICAgICAgfSxcbiAgICAgICAgJ0dvdmVybm1lbnQgVmV0cyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2Q1Y2I5OCcsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdHb3Zlcm5tZW50IFZldHMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA0XG4gICAgICAgIH0sXG4gICAgICAgICdNYXJrZXQgTG9jYXRpb25zJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjY2U2YjI5JyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ01hcmtldCBMb2NhdGlvbnMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA1XG4gICAgICAgIH0sXG4gICAgICAgICdBZ3JvLWRlYWxlcnMnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM1OTQ1MmEnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnQWdyby1kZWFsZXJzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogN1xuICAgICAgICB9LFxuICAgICAgICAnV2FyZWhvdXNlL1N0b3JhZ2UvQWdyZWdhdGlvbiBDZW50cmVzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjOGNiN2M3JyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ1dhcmVob3VzZS9TdG9yYWdlL0FncmVnYXRpb24gQ2VudHJlcycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDRcbiAgICAgICAgfSxcbiAgICAgICAgJ0RhaXJ5IGNoaWxsaW5nIHBsYW50cyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2QwOThkNScsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdEYWlyeSBjaGlsbGluZyBwbGFudHMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA3XG4gICAgICAgIH0sXG4gICAgICAgICdQcm9jZXNzb3JzL3ZhbHVlIGFkZGl0aW9uIHBvaW50cyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2E0Yzc4YycsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdQcm9jZXNzb3JzL3ZhbHVlIGFkZGl0aW9uIHBvaW50cycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDdcbiAgICAgICAgfSxcbiAgICAgICAgJ0Zhcm1lciBPcmdhbmlzYXRpb25zIGFuZCBDb29wZXJhdGl2ZXMnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyNkNTk4OTgnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnRmFybWVyIE9yZ2FuaXNhdGlvbnMgYW5kIENvb3BlcmF0aXZlcycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDRcbiAgICAgICAgfSxcbiAgICAgICAgJ0FydGlmaWNpYWwgSW5zZW1pbmF0aW9uIENlbnRyZXMnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM1NjdkNTQnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnQXJ0aWZpY2lhbCBJbnNlbWluYXRpb24gQ2VudHJlcycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDRcbiAgICAgICAgfSxcbiAgICAgICAgJ05hdGlvbmFsL1JlZ2lvbmFsL1N0YXRlIFJlc2VhcmNoIFN0YXRpb25zJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjYjY5ODVlJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ05hdGlvbmFsL1JlZ2lvbmFsL1N0YXRlIFJlc2VhcmNoIFN0YXRpb25zJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNVxuICAgICAgICB9LFxuICAgICAgICAnU2VlZCBNdWx0aXBsaWVycyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2ZmNWQ1ZCcsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdTZWVkIE11bHRpcGxpZXJzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogN1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHNlcnZpY2UuY2hlY2tBbGwgPSBmdW5jdGlvbiAoc2VjdG9yLCBzZWxlY3Rpb24sc2VsZWN0YWxsKSB7XG5cbiAgICAgICAgc3dpdGNoKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnYWdyaWN1bHR1cmUnOlxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RhbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0YWxsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2Uuc2VsZWN0YWxsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2UuY2hlY2tCb29sID0gXCJDaGVjayBBbGxcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWN0b3J5IGNoZWNrIGJvb2w6IFwiICsgc2VydmljZS5jaGVja0Jvb2wpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZhY3Rvcnkgc2VsZWN0ZWQgYWxsOiBcIiArIHNlbGVjdGFsbCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VydmljZSBzZWxlY3RlZCBhbGw6IFwiICsgc2VydmljZS5zZWxlY3RhbGwpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGFsbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2Uuc2VsZWN0YWxsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZS5jaGVja0Jvb2wgPSBcIlVuY2hlY2sgQWxsXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmFjdG9yeSBjaGVjayBib29sOiBcIiArIHNlcnZpY2UuY2hlY2tCb29sKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWN0b3J5IHNlbGVjdGVkIGFsbDogXCIgKyBzZWxlY3RhbGwpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlcnZpY2Ugc2VsZWN0ZWQgYWxsOiBcIiArIHNlcnZpY2Uuc2VsZWN0YWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VjdG9yLmZvckVhY2goZnVuY3Rpb24gKG5hbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWVzLnNlbGVjdGVkID0gc2VsZWN0YWxsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBzZXJ2aWNlLmNsZWFyQWxsID0gZnVuY3Rpb24gKHNlY3Rvciwgc2VsZWN0aW9uLHNlbGVjdGFsbCkge1xuXG4gICAgICAgIGlmICghc2VsZWN0YWxsKSB7XG4gICAgICAgICAgICBzZWxlY3RhbGwgPSBmYWxzZTtcbiAgICAgICAgICAgIHNlcnZpY2Uuc2VsZWN0YWxsID0gZmFsc2U7XG4gICAgICAgICAgICBzZXJ2aWNlLmNoZWNrQm9vbCA9IFwiQ2hlY2sgQWxsXCI7XG4gICAgICAgIH1cbiAgICAgICAgc2VjdG9yLmZvckVhY2goZnVuY3Rpb24gKG5hbWVzKSB7XG4gICAgICAgICAgICBuYW1lcy5zZWxlY3RlZCA9IHNlbGVjdGFsbDtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHNlcnZpY2UuZ2V0QWdDb3VudHMgPSBmdW5jdGlvbigpe1xuICAgICAgICAkaHR0cC5nZXQoJ2h0dHA6Ly9zcGF0aWFsc2VydmVyLnNwYXRpYWxkZXYuY29tL3NlcnZpY2VzL3RhYmxlcy9hZ3JpY3VsdHVyZV8yMDE0L3F1ZXJ5P3doZXJlPWNvdW50cnklM0QlMjdJbmRpYSUyNyZyZXR1cm5maWVsZHM9dHlwZSZmb3JtYXQ9Z2VvanNvbiZyZXR1cm5HZW9tZXRyeT1ubyZyZXR1cm5HZW9tZXRyeUVudmVsb3Blcz1ubyZncm91cGJ5PXR5cGUmc3RhdHNkZWY9Y291bnQlM0F0eXBlJykuXG4gICAgICAgICAgICBzdWNjZXNzKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIEFnLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IGRhdGEuZmVhdHVyZXNbaV0ucHJvcGVydGllcy50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb3VudFwiOiBkYXRhLmZlYXR1cmVzW2ldLnByb3BlcnRpZXMuY291bnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFuZF91c2VcIjogZGF0YS5mZWF0dXJlc1tpXS5wcm9wZXJ0aWVzLmxhbmRfdXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RlZFwiOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZS5BZ1RvdGFsICs9IHBhcnNlSW50KEFnW2ldLmNvdW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHBlcmNlbnRhZ2UgcGVyIHR5cGVcbiAgICAgICAgICAgICAgICBmb3IodmFyIGk9MDtpPEFnLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgICAgICBBZ1tpXVtcInBjdFwiXT0oKHBhcnNlSW50KEFnW2ldLmNvdW50KS9zZXJ2aWNlLkFnVG90YWwpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIFNvcnQgc2VjdG9yIGFycmF5IGJ5IGNvdW50XG4gICAgICAgICAgICAgICAgQWcuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYi5jb3VudC0gYS5jb3VudDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLlxuICAgICAgICAgICAgZXJyb3IoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgc2VydmljZS5nZXRBZ1VyYmFuUnVyYWxDb3VudHMgPSBmdW5jdGlvbigpe1xuICAgICAgICAkaHR0cC5nZXQoJ2h0dHA6Ly9zcGF0aWFsc2VydmVyLnNwYXRpYWxkZXYuY29tL3NlcnZpY2VzL3RhYmxlcy9hZ3JpY3VsdHVyZV8yMDE0L3F1ZXJ5P3doZXJlPWNvdW50cnklM0QlMjdJbmRpYSUyNyZyZXR1cm5maWVsZHM9dHlwZSUyQ2xhbmRfdXNlJmZvcm1hdD1nZW9qc29uJnJldHVybkdlb21ldHJ5PW5vJnJldHVybkdlb21ldHJ5RW52ZWxvcGVzPW5vJmdyb3VwYnk9dHlwZSUyQ2xhbmRfdXNlJnN0YXRzZGVmPWNvdW50JTNBdHlwZScpLlxuICAgICAgICAgICAgc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5mZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBBZ0xhbmRVc2UucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogZGF0YS5mZWF0dXJlc1tpXS5wcm9wZXJ0aWVzLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb3VudFwiOiBkYXRhLmZlYXR1cmVzW2ldLnByb3BlcnRpZXMuY291bnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhbmRfdXNlXCI6ZGF0YS5mZWF0dXJlc1tpXS5wcm9wZXJ0aWVzLmxhbmRfdXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWRcIjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pLlxuICAgICAgICAgICAgZXJyb3IoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgc2VydmljZS5nZXRBZ0NvdW50cygpO1xuICAgIHNlcnZpY2UuZ2V0QWdVcmJhblJ1cmFsQ291bnRzKCk7XG5cbiAgICBzZXJ2aWNlLkxheWVyID0ge1xuICAgICAgICB1cmw6IFwiaHR0cDovL3NwYXRpYWxzZXJ2ZXIuc3BhdGlhbGRldi5jb20vc2VydmljZXMvcG9zdGdpcy9hZ3JpY3VsdHVyZV8yMDE0L2dlb20vdmVjdG9yLXRpbGVzL3t6fS97eH0ve3l9LnBiZj9maWVsZHM9dHlwZSxpZFwiLFxuICAgICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwicGJmXCIsXG4gICAgICAgIG5hbWU6IFwiQWdyaWN1bHR1cmVcIixcbiAgICAgICAgY2xpY2thYmxlTGF5ZXJzOiBudWxsLFxuXG4gICAgICAgIC8vIHdlIHdhbnQgY29uZmV0dGkgdG8gYmUgb24gdG9wIG9mIG90aGVyIGxheWVycywgc3VjaCBhcyB0aGUgY29udGV4dHVhbCBsYXllcnNcbiAgICAgICAgekluZGV4OiAxMDAwLFxuXG4gICAgICAgIGdldElERm9yTGF5ZXJGZWF0dXJlOiBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZlYXR1cmUucHJvcGVydGllcy5pZDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGZpbHRlciBmdW5jdGlvbiBnZXRzIGNhbGxlZCB3aGVuIGl0ZXJhdGluZyB0aG91Z2ggZWFjaCB2ZWN0b3IgdGlsZSBmZWF0dXJlICh2dGYpLiBZb3UgaGF2ZSBhY2Nlc3NcbiAgICAgICAgICogdG8gZXZlcnkgcHJvcGVydHkgYXNzb2NpYXRlZCB3aXRoIGEgZ2l2ZW4gZmVhdHVyZSAodGhlIGZlYXR1cmUsIGFuZCB0aGUgbGF5ZXIpLiBZb3UgY2FuIGFsc28gZmlsdGVyXG4gICAgICAgICAqIGJhc2VkIG9mIHRoZSBjb250ZXh0IChlYWNoIHRpbGUgdGhhdCB0aGUgZmVhdHVyZSBpcyBkcmF3biBvbnRvKS5cbiAgICAgICAgICpcbiAgICAgICAgICogUmV0dXJuaW5nIGZhbHNlIHNraXBzIG92ZXIgdGhlIGZlYXR1cmUgYW5kIGl0IGlzIG5vdCBkcmF3bi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGZlYXR1cmVcbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uIChmZWF0dXJlLCBjb250ZXh0KSB7XG4gICAgICAgICAgICAvL3JldHVybiBmZWF0dXJlLnByb3BlcnRpZXMudHlwZSAhPSAnTW9iaWxlIE1vbmV5IEFnZW50JztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIHdlIHdhbnQgdG8gbGluayBldmVudHMgYmV0d2VlbiBsYXllcnMsIGxpa2UgY2xpY2tpbmcgb24gYSBsYWJlbCBhbmQgYVxuICAgICAgICAgKiBjb3JyZXNwb25kaW5nIHBvbHlnb24gZnJlYXR1cmUsIHRoaXMgd2lsbCByZXR1cm4gdGhlIGNvcnJlc3BvbmRpbmcgbWFwcGluZ1xuICAgICAgICAgKiBiZXR3ZWVuIGxheWVycy4gVGhpcyBwcm92aWRlcyBrbm93bGVkZ2Ugb2Ygd2hpY2ggb3RoZXIgZmVhdHVyZSBhIGdpdmVuIGZlYXR1cmVcbiAgICAgICAgICogaXMgbGlua2VkIHRvLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gbGF5ZXJOYW1lICB0aGUgbGF5ZXIgd2Ugd2FudCB0byBrbm93IHRoZSBsaW5rZWQgbGF5ZXIgZnJvbVxuICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGNvcnJlc3BvbmRpbmcgbGlua2VkIGxheWVyXG4gICAgICAgICAqL1xuICAgICAgICBsYXllckxpbms6IGZ1bmN0aW9uIChsYXllck5hbWUpIHtcbiAgICAgICAgICAgIGlmIChsYXllck5hbWUuaW5kZXhPZignX2xhYmVsJykgPiAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsYXllck5hbWUucmVwbGFjZSgnX2xhYmVsJywgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGxheWVyTmFtZSArICdfbGFiZWwnO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTcGVjaWZ5IHdoaWNoIGZlYXR1cmVzIHNob3VsZCBoYXZlIGEgY2VydGFpbiB6IGluZGV4IChpbnRlZ2VyKS4gIExvd2VyIG51bWJlcnMgd2lsbCBkcmF3IG9uICd0aGUgYm90dG9tJy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGZlYXR1cmUgLSB0aGUgUEJGRmVhdHVyZSB0aGF0IGNvbnRhaW5zIHByb3BlcnRpZXNcbiAgICAgICAgICovXG4gICAgICAgIGxheWVyT3JkZXJpbmc6IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgICAgICAvL1RoaXMgb25seSBuZWVkcyB0byBiZSBkb25lIGZvciBlYWNoIHR5cGUsIG5vdCBuZWNlc3NhcmlseSBmb3IgZWFjaCBmZWF0dXJlLiBCdXQgd2UnbGwgc3RhcnQgaGVyZS5cbiAgICAgICAgICAgIGlmIChmZWF0dXJlICYmIGZlYXR1cmUucHJvcGVydGllcykge1xuICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXMuekluZGV4ID0gQWdfQ29uZmlnW2ZlYXR1cmUucHJvcGVydGllcy50eXBlXS56SW5kZXggfHwgNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBzdHlsZTogZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgICAgICAgdmFyIHN0eWxlID0ge307XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSBzdHlsZS5zZWxlY3RlZCA9IHt9O1xuICAgICAgICAgICAgdmFyIHBvaW50UmFkaXVzID0gMTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gU2NhbGVEZXBlbmRlbnRQb2ludFJhZGl1cyh6b29tKXtcbiAgICAgICAgICAgICAgICAvL1NldCBwb2ludCByYWRpdXMgYmFzZWQgb24gem9vbVxuICAgICAgICAgICAgICAgIHZhciBwb2ludFJhZGl1cyA9IDE7XG4gICAgICAgICAgICAgICAgaWYoem9vbSA+PSAwICYmIHpvb20gPD0gNyl7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50UmFkaXVzID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZih6b29tID4gNyAmJiB6b29tIDw9IDEwKXtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRSYWRpdXMgPSAzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKHpvb20gPiAxMCl7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50UmFkaXVzID0gNDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcG9pbnRSYWRpdXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB0eXBlID0gZmVhdHVyZS50eXBlO1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxOiAvLydQb2ludCdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVuc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiKDIwOSwgMTEwLCAzNSknO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5yYWRpdXMgPSBTY2FsZURlcGVuZGVudFBvaW50UmFkaXVzO1xuICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5jb2xvciA9ICdyZ2JhKDI1NSwyNTUsMCwwLjUpJztcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQucmFkaXVzID0gNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOiAvLydMaW5lU3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdW5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDE2MSwyMTcsMTU1LDAuOCknO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5zaXplID0gMztcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQuY29sb3IgPSAncmdiYSgyNTUsMjUsMCwwLjUpJztcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQuc2l6ZSA9IDM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzogLy8nUG9seWdvbidcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVuc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgxNDksMTM5LDI1NSwwLjQpJztcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiKDIwLDIwLDIwKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIC8vIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLmNvbG9yID0gJ3JnYmEoMjU1LDI1LDAsMC4zKSc7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLm91dGxpbmUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNkOTUzNGYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogM1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25DbGljazogZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgICAvL0lmIG5lYXJieSB0b29sIChvciBhbnkgdG9vbCkgaXMgYWN0aXZlLCB0aGVuIGFib3J0LlxuICAgICAgICAgICAgLy9pZihfRlNQLlRvb2xNYXN0ZXIuYWN0aXZlVG9vbC5hY3RpdmUgPT0gdHJ1ZSkgcmV0dXJuO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vdmFyIGJ1ZmZlciA9IF9GU1AuQ29uZmV0dGlMb2FkZXIuY2xpY2tUb0J1ZmZlcihldnQpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vaWYoT2JqZWN0LmtleXMoX0ZTUC5BZ0xpc3RCdWlsZGVyLkdldEZpbHRlck9iamVjdCgpKS5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vLy9XZSBoYXZlIHRoZSBidWZmZXIgYXMgZ2VvanNvbi4gIFNlbmQgaXQgdG8gdGhlIHBvaW50IHRhYmxlIHRvIGludGVyc2VjdFxuICAgICAgICAgICAgLy92YXIgdGFibGVQb3N0QXJncyA9IHtcbiAgICAgICAgICAgIC8vICByZXR1cm5maWVsZHM6ICdsYXQsbG5nLGlkLHR5cGUsbmFtZSxwaG90b3MsaXJyaWdhdGlvbl9wdW1wcyxmYXJtX3RyYWN0b3JzLHNlZWQsZmVydGlsaXplcixjaGVtaWNhbF9pbnB1dHMsb3JnYW5pY19mZXJ0aWxpemVycyx2ZXRfc3VwcGxpZXMsdG9vbHNfZXF1aXBtZW50LHNlZWRfbXVsaXBsaWVyLHN0b3JhZ2VfY2FwYWNpdHksdXJiYW5fY2VudGVyX2Rpc3Qsc2VlZF9tdWxpcGxpZXIsdmFjaW5hdGlvbixpbnNlbWluYWl0b24sYnJlZWRpbmcsbW9kZXJuaXplZCcsXG4gICAgICAgICAgICAvLyAgZm9ybWF0OiAnZ2VvanNvbicsXG4gICAgICAgICAgICAvLyAgd2hlcmU6IF9GU1AuVXRpbGl0aWVzLmJ1aWxkUG9zdEdyZXNRdWVyeUV4cHJlc3Npb24oJ2FncmljdWx0dXJlJywgX0ZTUC5BZ0xpc3RCdWlsZGVyLkFnU2VsZWN0aW9ucyksXG4gICAgICAgICAgICAvLyAgcmV0dXJuR2VvbWV0cnk6ICd5ZXMnLFxuICAgICAgICAgICAgLy8gIGludGVyc2VjdHM6IGJ1ZmZlcixcbiAgICAgICAgICAgIC8vICBsaW1pdDogMjAwIC8vYWRkIGEgbGltaXQgb2YgMjAwIHNvIHdlIGRvbid0IGdldCBjYXJyaWVkIGF3YXlcbiAgICAgICAgICAgIC8vfTtcbiAgICAgICAgICAgIC8vdmFyIHBvaW50VXJsID0gXCJodHRwOi8vc3BhdGlhbHNlcnZlci5zcGF0aWFsZGV2LmNvbS9zZXJ2aWNlcy90YWJsZXMvYWdyaWN1bHR1cmVfMjAxNC9xdWVyeVwiO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vJC5wb3N0KHBvaW50VXJsLCB0YWJsZVBvc3RBcmdzKS5zdWNjZXNzKGZ1bmN0aW9uIChwb2ludHMsIHFzdGF0dXMpIHtcbiAgICAgICAgICAgIC8vICAvL0dlb0pTT04gcmVzdWx0IG9mIHBvaW50c1xuICAgICAgICAgICAgLy8gIGlmICghcG9pbnRzIHx8IHBvaW50cy5lcnJvcikge1xuICAgICAgICAgICAgLy8gICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGZldGNoIGZlYXR1cmU6ICcgKyBwb2ludHMuZXJyb3IpO1xuICAgICAgICAgICAgLy8gICAgcmV0dXJuO1xuICAgICAgICAgICAgLy8gIH1cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgLy9wb2ludCBpcyBhIGZlYXR1cmVjb2xsZWN0aW9uLiBvcGVuIHRoZSBwYW5lbCBhbmQgc2hvdyBzb21lIHN0dWZmLlxuICAgICAgICAgICAgLy8gIGlmIChwb2ludHMgJiYgcG9pbnRzLmZlYXR1cmVzICYmIHBvaW50cy5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyAgICB2YXIgaHRtbCA9IF9GU1AuUG9wdXBCdWlsZGVyLmFkZFJlc3VsdHMocG9pbnRzLmZlYXR1cmVzLCBfRlNQLkNvbmZpZy5BR19MQVlFUlMsICdhZ3JpY3VsdHVyZScsIGZ1bmN0aW9uIChjdXJyZW50UG9pbnQpIHtcbiAgICAgICAgICAgIC8vICAgICAgaWYgKGN1cnJlbnRQb2ludCkge1xuICAgICAgICAgICAgLy8gICAgICAgIC8vSGlnaGxpZ2h0IHBvaW50LlxuICAgICAgICAgICAgLy8gICAgICAgIHZhciBsYXllcnMgPSBwYmZTb3VyY2UuZ2V0TGF5ZXJzKCk7XG4gICAgICAgICAgICAvLyAgICAgICAgaWYgKGxheWVycykge1xuICAgICAgICAgICAgLy8gICAgICAgICAgdmFyIGxheWVyID0gbGF5ZXJzW09iamVjdC5rZXlzKGxheWVycylbMF1dOyAvL0xpYnJhcnkgbGF5ZXJcbiAgICAgICAgICAgIC8vICAgICAgICAgIGlmIChsYXllcikge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAvL3RyeSB0byBwbHVjayB2dGZcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgX0ZTUC5NYXBCdWlsZGVyLnNlbGVjdGVkQ29uZmV0dGkgPSBsYXllci5mZWF0dXJlc1tjdXJyZW50UG9pbnQucHJvcGVydGllcy5pZF07XG4gICAgICAgICAgICAvLyAgICAgICAgICAgIGlmIChfRlNQLk1hcEJ1aWxkZXIuc2VsZWN0ZWRDb25mZXR0aSkge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgIC8vU2V0IGZlYXR1cmUgdG8gYmUgYmlnIGFuZCBoaWdoIHotaW5kZXhcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICBfRlNQLk1hcEJ1aWxkZXIuc2VsZWN0ZWRDb25mZXR0aS5zZWxlY3QoKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICBpZiAoX0ZTUC5NYXBCdWlsZGVyLnByZXZpb3VzbHlTZWxlY3RlZENvbmZldHRpKSBfRlNQLk1hcEJ1aWxkZXIucHJldmlvdXNseVNlbGVjdGVkQ29uZmV0dGkuZGVzZWxlY3QoKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICBfRlNQLk1hcEJ1aWxkZXIucHJldmlvdXNseVNlbGVjdGVkQ29uZmV0dGkgPSBfRlNQLk1hcEJ1aWxkZXIuc2VsZWN0ZWRDb25mZXR0aTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgfVxuICAgICAgICAgICAgLy8gICAgfSk7XG4gICAgICAgICAgICAvLyAgICBpZihodG1sKXtcbiAgICAgICAgICAgIC8vICAgICAgb3BlbkNJQ09EZXRhaWxzKGh0bWwpO1xuICAgICAgICAgICAgLy8gICAgfVxuICAgICAgICAgICAgLy8gIH1cbiAgICAgICAgICAgIC8vfSk7XG4gICAgICAgIH1cblxuICAgIH07XG4gICAgc2VydmljZS5BZ19Db25maWcgPSBBZ19Db25maWc7XG4gICAgc2VydmljZS5BZ19Db3VudHMgPSBBZztcbiAgICBzZXJ2aWNlLkFnX0xhbmRVc2VfQ291bnRzID0gQWdMYW5kVXNlO1xuXG4gICAgcmV0dXJuIHNlcnZpY2U7XG5cbn0pO1xuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgRGFuaWVsIEJhYWggPGRiYWFoQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMS82LzE1LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ1NwYXRpYWxWaWV3ZXInKS5mYWN0b3J5KCdDSUNPRmlsdGVyRmFjdG9yeScsIGZ1bmN0aW9uICgkaHR0cCkge1xuXG4gICAgdmFyIENJQ09fQ29uZmlnID0ge1xuICAgICAgICAnQWdyaWN1bHR1cmUnOiB7XG4gICAgICAgICAgICBjb2xvcjogJ3JnYigyMDksIDExMCwgMzUpJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ0FncmljdWx0dXJlJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNlxuICAgICAgICB9LFxuICAgICAgICAnQ0lDT1MnOiB7XG4gICAgICAgICAgICBjb2xvcjogJ3JnYigxNTcsIDMzLCA0MSknLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnRmluYW5jaWFsIFNlcnZpY2UnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA4XG4gICAgICAgIH0sXG4gICAgICAgICdFZHVjYXRpb24nOiB7XG4gICAgICAgICAgICBjb2xvcjogJ3JnYig0MiwgMTMzLCAxNzMpJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ0VkdWNhdGlvbicsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDdcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgQ0lDT3MgPSBbXTtcbiAgICB2YXIgQ0lDT3NMYW5kVXNlID0gW107XG4gICAgdmFyIHNlcnZpY2UgPSB7fTtcbiAgICBzZXJ2aWNlLnNlbGVjdGVkQ291bnRyeSA9ICdJbmRpYSc7XG4gICAgc2VydmljZS5DSUNPc1RvdGFsID0gMDtcblxuICAgIHNlcnZpY2UuZ2V0Q0lDT3NDb3VudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIElORElBXG4gICAgICAgICRodHRwLmdldCgnaHR0cDovL3NwYXRpYWxzZXJ2ZXIuc3BhdGlhbGRldi5jb20vc2VydmljZXMvdGFibGVzL2NpY29zXzIwMTQvcXVlcnk/d2hlcmU9Y291bnRyeSUzRCUyN0luZGlhJTI3JnJldHVybmZpZWxkcz10eXBlJmZvcm1hdD1nZW9qc29uJnJldHVybkdlb21ldHJ5PW5vJnJldHVybkdlb21ldHJ5RW52ZWxvcGVzPW5vJmdyb3VwYnk9dHlwZSZzdGF0c2RlZj1jb3VudCUzQXR5cGUnKS5cbiAgICAgICAgICAgIHN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAvL3Jlc2V0IGFycmF5IHRvIHByZXZlbnQgZHVwbGljYXRlc1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5mZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBDSUNPcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBkYXRhLmZlYXR1cmVzW2ldLnByb3BlcnRpZXMudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvdW50XCI6IGRhdGEuZmVhdHVyZXNbaV0ucHJvcGVydGllcy5jb3VudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWRcIjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZS5DSUNPc1RvdGFsICs9IHBhcnNlSW50KENJQ09zW2ldLmNvdW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHBlcmNlbnRhZ2UgcGVyIHR5cGVcbiAgICAgICAgICAgICAgICAvL3NlcnZpY2UucGN0UGVyVHlwZShDSUNPcyk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBDSUNPcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBDSUNPc1tpXVtcInBjdFwiXSA9ICgocGFyc2VJbnQoQ0lDT3NbaV0uY291bnQpIC8gc2VydmljZS5DSUNPc1RvdGFsKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU29ydCBzZWN0b3IgYXJyYXkgYnkgY291bnRcbiAgICAgICAgICAgICAgICBDSUNPcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiLmNvdW50IC0gYS5jb3VudDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLlxuICAgICAgICAgICAgZXJyb3IoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgc2VydmljZS5nZXRDSUNPc1VyYmFuUnVyYWxDb3VudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRodHRwLmdldCgnaHR0cDovL3NwYXRpYWxzZXJ2ZXIuc3BhdGlhbGRldi5jb20vc2VydmljZXMvdGFibGVzL2NpY29zXzIwMTQvcXVlcnk/d2hlcmU9Y291bnRyeSUzRCUyN0luZGlhJTI3JnJldHVybmZpZWxkcz10eXBlJTJDbGFuZF91c2UmZm9ybWF0PWdlb2pzb24mcmV0dXJuR2VvbWV0cnk9bm8mcmV0dXJuR2VvbWV0cnlFbnZlbG9wZXM9bm8mZ3JvdXBieT10eXBlJTJDbGFuZF91c2Umc3RhdHNkZWY9Y291bnQlM0F0eXBlJykuXG4gICAgICAgICAgICBzdWNjZXNzKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIENJQ09zTGFuZFVzZS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBkYXRhLmZlYXR1cmVzW2ldLnByb3BlcnRpZXMudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvdW50XCI6IGRhdGEuZmVhdHVyZXNbaV0ucHJvcGVydGllcy5jb3VudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFuZF91c2VcIjogZGF0YS5mZWF0dXJlc1tpXS5wcm9wZXJ0aWVzLmxhbmRfdXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWRcIjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pLlxuICAgICAgICAgICAgZXJyb3IoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgc2VydmljZS5nZXRDSUNPc1VyYmFuUnVyYWxDb3VudHMoKTtcbiAgICBzZXJ2aWNlLmdldENJQ09zQ291bnRzKCk7XG5cbiAgICBzZXJ2aWNlLmNoZWNrQWxsID0gZnVuY3Rpb24gKHNlY3Rvciwgc2VsZWN0aW9uLCBzZWxlY3RhbGwpIHtcblxuICAgICAgICBzd2l0Y2ggKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnQ0lDT1MnOlxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RhbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0YWxsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2Uuc2VsZWN0YWxsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2UuY2hlY2tCb29sID0gXCJWaWV3IEFsbFwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZXJ2aWNlLmNoZWNrQm9vbCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ0lDTyBmYWN0b3J5IGNoZWNrIGJvb2w6IFwiICsgc2VydmljZS5jaGVja0Jvb2wpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNJQ08gZmFjdG9yeSBzZWxlY3RlZCBhbGw6IFwiICsgc2VsZWN0YWxsKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDSUNPIHNlcnZpY2Ugc2VsZWN0ZWQgYWxsOiBcIiArIHNlcnZpY2Uuc2VsZWN0YWxsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RhbGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLnNlbGVjdGFsbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2UuY2hlY2tCb29sID0gXCJWaWV3IEFsbFwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZXJ2aWNlLmNoZWNrQm9vbCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ0lDTyBmYWN0b3J5IGNoZWNrIGJvb2w6IFwiICsgc2VydmljZS5jaGVja0Jvb2wpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNJQ08gZmFjdG9yeSBzZWxlY3RlZCBhbGw6IFwiICsgc2VsZWN0YWxsKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDSUNPIHNlcnZpY2Ugc2VsZWN0ZWQgYWxsOiBcIiArIHNlcnZpY2Uuc2VsZWN0YWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VjdG9yLmZvckVhY2goZnVuY3Rpb24gKG5hbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWVzLnNlbGVjdGVkID0gc2VsZWN0YWxsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBzZXJ2aWNlLmNsZWFyQWxsID0gZnVuY3Rpb24gKHNlY3Rvciwgc2VsZWN0aW9uLCBzZWxlY3RhbGwpIHtcblxuICAgICAgICBpZiAoIXNlbGVjdGFsbCkge1xuICAgICAgICAgICAgc2VsZWN0YWxsID0gZmFsc2U7XG4gICAgICAgICAgICBzZXJ2aWNlLnNlbGVjdGFsbCA9IGZhbHNlO1xuICAgICAgICAgICAgc2VydmljZS5jaGVja0Jvb2wgPSBcIkNoZWNrIEFsbFwiO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDSUNPIGZhY3RvcnkgY2hlY2sgYm9vbDogXCIgKyBzZXJ2aWNlLmNoZWNrQm9vbCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNJQ08gZmFjdG9yeSBzZWxlY3RlZCBhbGw6IFwiICsgc2VsZWN0YWxsKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ0lDTyBzZXJ2aWNlIHNlbGVjdGVkIGFsbDogXCIgKyBzZXJ2aWNlLnNlbGVjdGFsbCk7XG4gICAgICAgIH1cbiAgICAgICAgc2VjdG9yLmZvckVhY2goZnVuY3Rpb24gKG5hbWVzKSB7XG4gICAgICAgICAgICBuYW1lcy5zZWxlY3RlZCA9IHNlbGVjdGFsbDtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHNlcnZpY2UuTGF5ZXIgPSB7XG4gICAgICAgIHVybDogXCJodHRwOi8vc3BhdGlhbHNlcnZlci5zcGF0aWFsZGV2LmNvbS9zZXJ2aWNlcy9wb3N0Z2lzL2NpY29zXzIwMTQvZ2VvbS92ZWN0b3ItdGlsZXMve3p9L3t4fS97eX0ucGJmP2ZpZWxkcz10eXBlLGlkXCIsXG4gICAgICAgIHR5cGU6ICdwYmYnLFxuICAgICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICAgIG5hbWU6ICdJbmRpYSBDSUNPUycsXG4gICAgICAgIGNsaWNrYWJsZUxheWVyczogbnVsbCxcblxuICAgICAgICAvLyB3ZSB3YW50IGNvbmZldHRpIHRvIGJlIG9uIHRvcCBvZiBvdGhlciBsYXllcnMsIHN1Y2ggYXMgdGhlIGNvbnRleHR1YWwgbGF5ZXJzXG4gICAgICAgIHpJbmRleDogMTAwMCxcblxuICAgICAgICBnZXRJREZvckxheWVyRmVhdHVyZTogZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgICAgIHJldHVybiBmZWF0dXJlLnByb3BlcnRpZXMuaWQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBmaWx0ZXIgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgd2hlbiBpdGVyYXRpbmcgdGhvdWdoIGVhY2ggdmVjdG9yIHRpbGUgZmVhdHVyZSAodnRmKS4gWW91IGhhdmUgYWNjZXNzXG4gICAgICAgICAqIHRvIGV2ZXJ5IHByb3BlcnR5IGFzc29jaWF0ZWQgd2l0aCBhIGdpdmVuIGZlYXR1cmUgKHRoZSBmZWF0dXJlLCBhbmQgdGhlIGxheWVyKS4gWW91IGNhbiBhbHNvIGZpbHRlclxuICAgICAgICAgKiBiYXNlZCBvZiB0aGUgY29udGV4dCAoZWFjaCB0aWxlIHRoYXQgdGhlIGZlYXR1cmUgaXMgZHJhd24gb250bykuXG4gICAgICAgICAqXG4gICAgICAgICAqIFJldHVybmluZyBmYWxzZSBza2lwcyBvdmVyIHRoZSBmZWF0dXJlIGFuZCBpdCBpcyBub3QgZHJhd24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBmZWF0dXJlXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoZmVhdHVyZSwgY29udGV4dCkge1xuICAgICAgICAgICAgLy9yZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLnR5cGUgIT0gJ01vYmlsZSBNb25leSBBZ2VudCc7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiB3ZSB3YW50IHRvIGxpbmsgZXZlbnRzIGJldHdlZW4gbGF5ZXJzLCBsaWtlIGNsaWNraW5nIG9uIGEgbGFiZWwgYW5kIGFcbiAgICAgICAgICogY29ycmVzcG9uZGluZyBwb2x5Z29uIGZyZWF0dXJlLCB0aGlzIHdpbGwgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIG1hcHBpbmdcbiAgICAgICAgICogYmV0d2VlbiBsYXllcnMuIFRoaXMgcHJvdmlkZXMga25vd2xlZGdlIG9mIHdoaWNoIG90aGVyIGZlYXR1cmUgYSBnaXZlbiBmZWF0dXJlXG4gICAgICAgICAqIGlzIGxpbmtlZCB0by5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGxheWVyTmFtZSB0aGUgbGF5ZXIgd2Ugd2FudCB0byBrbm93IHRoZSBsaW5rZWQgbGF5ZXIgZnJvbVxuICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGNvcnJlc3BvbmRpbmcgbGlua2VkIGxheWVyXG4gICAgICAgICAqL1xuICAgICAgICBsYXllckxpbms6IGZ1bmN0aW9uIChsYXllck5hbWUpIHtcbiAgICAgICAgICAgIGlmIChsYXllck5hbWUuaW5kZXhPZignX2xhYmVsJykgPiAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsYXllck5hbWUucmVwbGFjZSgnX2xhYmVsJywgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGxheWVyTmFtZSArICdfbGFiZWwnO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTcGVjaWZ5IHdoaWNoIGZlYXR1cmVzIHNob3VsZCBoYXZlIGEgY2VydGFpbiB6IGluZGV4IChpbnRlZ2VyKS4gIExvd2VyIG51bWJlcnMgd2lsbCBkcmF3IG9uICd0aGUgYm90dG9tJy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGZlYXR1cmUgLSB0aGUgUEJGRmVhdHVyZSB0aGF0IGNvbnRhaW5zIHByb3BlcnRpZXNcbiAgICAgICAgICovXG4gICAgICAgIGxheWVyT3JkZXJpbmc6IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgICAgICAvL1RoaXMgb25seSBuZWVkcyB0byBiZSBkb25lIGZvciBlYWNoIHR5cGUsIG5vdCBuZWNlc3NhcmlseSBmb3IgZWFjaCBmZWF0dXJlLiBCdXQgd2UnbGwgc3RhcnQgaGVyZS5cbiAgICAgICAgICAgIC8vaWYgKGZlYXR1cmUgJiYgZmVhdHVyZS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAvLyAgZmVhdHVyZS5wcm9wZXJ0aWVzLnpJbmRleCA9IF9GU1AuQ29uZmlnLkNJQ09fTEFZRVJTW2ZlYXR1cmUucHJvcGVydGllcy50eXBlXS56SW5kZXggfHwgNTtcbiAgICAgICAgICAgIC8vfVxuICAgICAgICB9LFxuXG4gICAgICAgIHN0eWxlOiBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICAgICAgdmFyIHN0eWxlID0ge307XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSBzdHlsZS5zZWxlY3RlZCA9IHt9O1xuICAgICAgICAgICAgdmFyIHBvaW50UmFkaXVzID0gMTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gU2NhbGVEZXBlbmRlbnRQb2ludFJhZGl1cyh6b29tKSB7XG4gICAgICAgICAgICAgICAgLy9TZXQgcG9pbnQgcmFkaXVzIGJhc2VkIG9uIHpvb21cbiAgICAgICAgICAgICAgICB2YXIgcG9pbnRSYWRpdXMgPSAxO1xuICAgICAgICAgICAgICAgIGlmICh6b29tID49IDAgJiYgem9vbSA8PSA3KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50UmFkaXVzID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoem9vbSA+IDcgJiYgem9vbSA8PSAxMCkge1xuICAgICAgICAgICAgICAgICAgICBwb2ludFJhZGl1cyA9IDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHpvb20gPiAxMCkge1xuICAgICAgICAgICAgICAgICAgICBwb2ludFJhZGl1cyA9IDQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50UmFkaXVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdHlwZSA9IGZlYXR1cmUudHlwZTtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTogLy8nUG9pbnQnXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiKDE1NywgMzMsIDQxKTsnO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5yYWRpdXMgPSBTY2FsZURlcGVuZGVudFBvaW50UmFkaXVzO1xuICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5jb2xvciA9ICdyZ2JhKDI1NSwyNTUsMCwwLjUpJztcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQucmFkaXVzID0gNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOiAvLydMaW5lU3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAvLyB1bnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMTYxLDIxNywxNTUsMC44KSc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLnNpemUgPSAzO1xuICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5jb2xvciA9ICdyZ2JhKDI1NSwyNSwwLDAuNSknO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5zaXplID0gMztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOiAvLydQb2x5Z29uJ1xuICAgICAgICAgICAgICAgICAgICAvLyB1bnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMTQ5LDEzOSwyNTUsMC40KSc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYigyMCwyMCwyMCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMlxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5jb2xvciA9ICdyZ2JhKDI1NSwyNSwwLDAuMyknO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5vdXRsaW5lID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZDk1MzRmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDNcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICB9LFxuXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgIC8vSWYgbmVhcmJ5IHRvb2wgKG9yIGFueSB0b29sKSBpcyBhY3RpdmUsIHRoZW4gYWJvcnQuXG4gICAgICAgICAgICAvL2lmKF9GU1AuVG9vbE1hc3Rlci5hY3RpdmVUb29sLmFjdGl2ZSA9PSB0cnVlKSByZXR1cm47XG5cbiAgICAgICAgICAgIC8vICB2YXIgYnVmZmVyID0gX0ZTUC5Db25mZXR0aUxvYWRlci5jbGlja1RvQnVmZmVyKGV2dCk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gIC8vSWYgYWxsIGFyZSB1bmNoZWNrZWQsIHRoZW4gZXhpdCBvdXQgb2YgaGVyZVxuICAgICAgICAgICAgLy8gIGlmKE9iamVjdC5rZXlzKF9GU1AuTGF5ZXJMaXN0QnVpbGRlci5HZXRGaWx0ZXJPYmplY3QoKSkubGVuZ3RoID09IDApIHJldHVybjtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgX0ZTUC5UYWJsZUJ1aWxkZXIuc2NyYXBlQ0lDT1NlbGVjdGlvbnMoKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgLy9XZSBoYXZlIHRoZSBidWZmZXIgYXMgZ2VvanNvbi4gIFNlbmQgaXQgdG8gdGhlIHBvaW50IHRhYmxlIHRvIGludGVyc2VjdFxuICAgICAgICAgICAgLy8gIHZhciB0YWJsZVBvc3RBcmdzID0ge1xuICAgICAgICAgICAgLy8gICAgcmV0dXJuZmllbGRzOiAnbGF0LGxuZyxuYW1lLGFzc29jX2JhbmssYXNzb2NfYnVzaW5lc3MsZm9ybV9zdWJtaXR0ZWQsdHlwZSxpZCxwaG90b3MnLFxuICAgICAgICAgICAgLy8gICAgZm9ybWF0OiAnZ2VvanNvbicsXG4gICAgICAgICAgICAvLyAgICB3aGVyZTogX0ZTUC5Qcm94aW1pdHlUb29sLmJ1aWxkQ0lDT1F1ZXJ5RXhwcmVzc2lvbihfRlNQLlRhYmxlQnVpbGRlci5DSUNPU2VsZWN0aW9ucyksXG4gICAgICAgICAgICAvLyAgICByZXR1cm5HZW9tZXRyeTogJ3llcycsXG4gICAgICAgICAgICAvLyAgICBpbnRlcnNlY3RzOiBidWZmZXIsXG4gICAgICAgICAgICAvLyAgICBsaW1pdDogMjAwIC8vYWRkIGEgbGltaXQgb2YgMjAwIHNvIHdlIGRvbid0IGdldCBjYXJyaWVkIGF3YXlcbiAgICAgICAgICAgIC8vICB9O1xuICAgICAgICAgICAgLy8gIHZhciBwb2ludFVybCA9IFwiaHR0cDovL3NwYXRpYWxzZXJ2ZXIuc3BhdGlhbGRldi5jb20vc2VydmljZXMvdGFibGVzL2NpY29zXzIwMTQvcXVlcnlcIjtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgJC5wb3N0KHBvaW50VXJsLCB0YWJsZVBvc3RBcmdzKS5zdWNjZXNzKGZ1bmN0aW9uIChwb2ludHMsIHFzdGF0dXMpIHtcbiAgICAgICAgICAgIC8vICAgIC8vR2VvSlNPTiByZXN1bHQgb2YgcG9pbnRzXG4gICAgICAgICAgICAvLyAgICBpZiAoIXBvaW50cyB8fCBwb2ludHMuZXJyb3IpIHtcbiAgICAgICAgICAgIC8vICAgICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGZldGNoIGZlYXR1cmU6ICcgKyBwb2ludHMuZXJyb3IpO1xuICAgICAgICAgICAgLy8gICAgICByZXR1cm47XG4gICAgICAgICAgICAvLyAgICB9XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgLy9wb2ludCBpcyBhIGZlYXR1cmVjb2xsZWN0aW9uLiBvcGVuIHRoZSBwYW5lbCBhbmQgc2hvdyBzb21lIHN0dWZmLlxuICAgICAgICAgICAgLy8gICAgaWYgKHBvaW50cyAmJiBwb2ludHMuZmVhdHVyZXMgJiYgcG9pbnRzLmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vICAgICAgdmFyIGh0bWwgPSBfRlNQLlBvcHVwQnVpbGRlci5hZGRSZXN1bHRzKHBvaW50cy5mZWF0dXJlcywgX0ZTUC5Db25maWcuQ0lDT19MQVlFUlMsICdmc3AnLCBmdW5jdGlvbiAoY3VycmVudFBvaW50KSB7XG4gICAgICAgICAgICAvLyAgICAgICAgaWYgKGN1cnJlbnRQb2ludCkge1xuICAgICAgICAgICAgLy8gICAgICAgICAgLy9IaWdobGlnaHQgcG9pbnQuXG4gICAgICAgICAgICAvLyAgICAgICAgICB2YXIgbGF5ZXJzID0gcGJmU291cmNlLmdldExheWVycygpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgaWYgKGxheWVycykge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICB2YXIgbGF5ZXIgPSBsYXllcnNbT2JqZWN0LmtleXMobGF5ZXJzKVswXV07IC8vQ2ljbyBsYXllclxuICAgICAgICAgICAgLy8gICAgICAgICAgICBpZiAobGF5ZXIpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAvL3RyeSB0byBwbHVjayB2dGZcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICBfRlNQLk1hcEJ1aWxkZXIuc2VsZWN0ZWRDb25mZXR0aSA9IGxheWVyLmZlYXR1cmVzW2N1cnJlbnRQb2ludC5wcm9wZXJ0aWVzLmlkXTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICBpZiAoX0ZTUC5NYXBCdWlsZGVyLnNlbGVjdGVkQ29uZmV0dGkpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIC8vU2V0IGZlYXR1cmUgdG8gYmUgYmlnIGFuZCBoaWdoIHotaW5kZXhcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIF9GU1AuTWFwQnVpbGRlci5zZWxlY3RlZENvbmZldHRpLnNlbGVjdCgpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgaWYgKF9GU1AuTWFwQnVpbGRlci5wcmV2aW91c2x5U2VsZWN0ZWRDb25mZXR0aSkgX0ZTUC5NYXBCdWlsZGVyLnByZXZpb3VzbHlTZWxlY3RlZENvbmZldHRpLmRlc2VsZWN0KCk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICBfRlNQLk1hcEJ1aWxkZXIucHJldmlvdXNseVNlbGVjdGVkQ29uZmV0dGkgPSBfRlNQLk1hcEJ1aWxkZXIuc2VsZWN0ZWRDb25mZXR0aTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgIH0pO1xuICAgICAgICAgICAgLy8gICAgICBpZihodG1sKXtcbiAgICAgICAgICAgIC8vICAgICAgICBvcGVuQ0lDT0RldGFpbHMoaHRtbCk7XG4gICAgICAgICAgICAvLyAgICAgIH1cbiAgICAgICAgICAgIC8vICAgIH1cbiAgICAgICAgICAgIC8vICB9KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH1cblxuICAgIH07XG4gICAgc2VydmljZS5DSUNPX0NvbmZpZyA9IENJQ09fQ29uZmlnO1xuICAgIHNlcnZpY2UuQ0lDT3NfQ291bnRzID0gQ0lDT3M7XG4gICAgc2VydmljZS5DSUNPc19MYW5kVXNlX0NvdW50cyA9IENJQ09zTGFuZFVzZTtcblxuICAgIHJldHVybiBzZXJ2aWNlO1xuXG59KTtcblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IERCYWFoIG9uIDYvMjMvMTUuXG4gKi9cbi8qKlxuICogQ3JlYXRlZCBieSBTcGF0aWFsRGV2IG9uIDEvNi8xNS5cbiAqL1xuLyoqXG4gKiBDcmVhdGVkIGJ5IERhbmllbCBCYWFoIDxkYmFhaEBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDEvNi8xNS5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdTcGF0aWFsVmlld2VyJykuZmFjdG9yeSgnRWR1Y2F0aW9uRmlsdGVyRmFjdG9yeScsIGZ1bmN0aW9uICgkaHR0cCkge1xuXG4gICAgdmFyIEVkdWNhdGlvbiA9IFtdO1xuICAgIHZhciBzZXJ2aWNlID0ge307XG4gICAgdmFyIHR5cGVfdXJsID0gJ2h0dHA6Ly9zcGF0aWFsc2VydmVyLnNwYXRpYWxkZXYuY29tL3NlcnZpY2VzL3RhYmxlcy9lZHVjYXRpb25fMjAxNS9xdWVyeT9yZXR1cm5maWVsZHM9dHlwZSZmb3JtYXQ9Z2VvanNvbiZyZXR1cm5HZW9tZXRyeT1ubyZyZXR1cm5HZW9tZXRyeUVudmVsb3Blcz1ubyZncm91cGJ5PXR5cGUmc3RhdHNkZWY9Y291bnQlM0F0eXBlJ1xuICAgIHNlcnZpY2UuRWR1Y2F0aW9uVG90YWwgPSAwO1xuXG4gICAgc2VydmljZS5nZXRFZHVjYXRpb25Db3VudHMgPSBmdW5jdGlvbigpe1xuICAgICAgICAkaHR0cC5nZXQodHlwZV91cmwpLlxuICAgICAgICAgICAgc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5mZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBFZHVjYXRpb24ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogZGF0YS5mZWF0dXJlc1tpXS5wcm9wZXJ0aWVzLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvdW50XCI6IGRhdGEuZmVhdHVyZXNbaV0ucHJvcGVydGllcy5jb3VudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYW5kX3VzZVwiOiBkYXRhLmZlYXR1cmVzW2ldLnByb3BlcnRpZXMubGFuZF91c2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGVkXCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLkVkdWNhdGlvblRvdGFsICs9IHBhcnNlSW50KEVkdWNhdGlvbltpXS5jb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBwZXJjZW50YWdlIHBlciB0eXBlXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpPTA7aTxFZHVjYXRpb24ubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgICAgIEVkdWNhdGlvbltpXVtcInBjdFwiXT0oKHBhcnNlSW50KEVkdWNhdGlvbltpXS5jb3VudCkvc2VydmljZS5FZHVjYXRpb25Ub3RhbCkpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gU29ydCBzZWN0b3IgYXJyYXkgYnkgY291bnRcbiAgICAgICAgICAgICAgICBFZHVjYXRpb24uc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYi5jb3VudC0gYS5jb3VudDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLlxuICAgICAgICAgICAgZXJyb3IoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgc2VydmljZS5nZXRFZHVjYXRpb25Db3VudHMoKTtcblxuICAgIHNlcnZpY2UuTGF5ZXIgPSB7XG4gICAgICAgIHR5cGU6ICdwYmYnLFxuICAgICAgICBuYW1lOiAnRlNQIFVnYW5kYSBFZHVjYXRpb24gMjAxNScsXG4gICAgICAgIHVybDogXCJodHRwOi8vc3BhdGlhbHNlcnZlci5zcGF0aWFsZGV2LmNvbS9zZXJ2aWNlcy92ZWN0b3ItdGlsZXMvZWR1Y2F0aW9uXzIwMTVfdWdhbmRhL3t6fS97eH0ve3l9LnBiZj9maWVsZHM9dHlwZSxzdWJtaXNzaW9uX2lkXCIsXG4gICAgICAgIGRlYnVnOiBmYWxzZSxcbiAgICAgICAgY2xpY2thYmxlTGF5ZXJzOiBudWxsLFxuXG4gICAgICAgIGdldElERm9yTGF5ZXJGZWF0dXJlOiBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzWydzdWJtaXNzaW9uX2lkJ107XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBmaWx0ZXIgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgd2hlbiBpdGVyYXRpbmcgdGhvdWdoIGVhY2ggdmVjdG9yIHRpbGUgZmVhdHVyZSAodnRmKS4gWW91IGhhdmUgYWNjZXNzXG4gICAgICAgICAqIHRvIGV2ZXJ5IHByb3BlcnR5IGFzc29jaWF0ZWQgd2l0aCBhIGdpdmVuIGZlYXR1cmUgKHRoZSBmZWF0dXJlLCBhbmQgdGhlIGxheWVyKS4gWW91IGNhbiBhbHNvIGZpbHRlclxuICAgICAgICAgKiBiYXNlZCBvZiB0aGUgY29udGV4dCAoZWFjaCB0aWxlIHRoYXQgdGhlIGZlYXR1cmUgaXMgZHJhd24gb250bykuXG4gICAgICAgICAqXG4gICAgICAgICAqIFJldHVybmluZyBmYWxzZSBza2lwcyBvdmVyIHRoZSBmZWF0dXJlIGFuZCBpdCBpcyBub3QgZHJhd24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBmZWF0dXJlXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgZmlsdGVyOiBmdW5jdGlvbihmZWF0dXJlLCBjb250ZXh0KSB7XG4gICAgICAgICAgICAvL3JldHVybiBmZWF0dXJlLnByb3BlcnRpZXMuY291bnRyeSA9PSAnS2VueWEnO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gd2Ugd2FudCB0byBsaW5rIGV2ZW50cyBiZXR3ZWVuIGxheWVycywgbGlrZSBjbGlja2luZyBvbiBhIGxhYmVsIGFuZCBhXG4gICAgICAgICAqIGNvcnJlc3BvbmRpbmcgcG9seWdvbiBmcmVhdHVyZSwgdGhpcyB3aWxsIHJldHVybiB0aGUgY29ycmVzcG9uZGluZyBtYXBwaW5nXG4gICAgICAgICAqIGJldHdlZW4gbGF5ZXJzLiBUaGlzIHByb3ZpZGVzIGtub3dsZWRnZSBvZiB3aGljaCBvdGhlciBmZWF0dXJlIGEgZ2l2ZW4gZmVhdHVyZVxuICAgICAgICAgKiBpcyBsaW5rZWQgdG8uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBsYXllck5hbWUgIHRoZSBsYXllciB3ZSB3YW50IHRvIGtub3cgdGhlIGxpbmtlZCBsYXllciBmcm9tXG4gICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgY29ycmVzcG9uZGluZyBsaW5rZWQgbGF5ZXJcbiAgICAgICAgICovXG4gICAgICAgIGxheWVyTGluazogZnVuY3Rpb24obGF5ZXJOYW1lKSB7XG4gICAgICAgICAgICBpZiAobGF5ZXJOYW1lLmluZGV4T2YoJ19sYWJlbCcpID4gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGF5ZXJOYW1lLnJlcGxhY2UoJ19sYWJlbCcsICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBsYXllck5hbWUgKyAnX2xhYmVsJztcbiAgICAgICAgfSxcblxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbihldnQpe1xuICAgICAgICAgICAgaWYoZXZ0ICYmIGV2dC5mZWF0dXJlcyl7XG4gICAgICAgICAgICAgICAgZXZ0LmZlYXR1cmVzLmZvckVhY2goZnVuY3Rpb24oZil7XG4gICAgICAgICAgICAgICAgICAgIGYudnRmLnNlbGVjdCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbk1vdXNlTW92ZTogZnVuY3Rpb24oZXZ0KXtcbiAgICAgICAgICAgIGlmKGV2dCAmJiBldnQuZmVhdHVyZXMpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibW91c2VkIG92ZXIgXCIgKyBldnQuZmVhdHVyZXMubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU3BlY2lmeSB3aGljaCBmZWF0dXJlcyBzaG91bGQgaGF2ZSBhIGNlcnRhaW4geiBpbmRleCAoaW50ZWdlcikuICBMb3dlciBudW1iZXJzIHdpbGwgZHJhdyBvbiAndGhlIGJvdHRvbScuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBmZWF0dXJlIC0gdGhlIFBCRkZlYXR1cmUgdGhhdCBjb250YWlucyBwcm9wZXJ0aWVzXG4gICAgICAgICAqL1xuICAgICAgICBsYXllck9yZGVyaW5nOiBmdW5jdGlvbihmZWF0dXJlKXtcbiAgICAgICAgICAgIC8vVGhpcyBvbmx5IG5lZWRzIHRvIGJlIGRvbmUgZm9yIGVhY2ggdHlwZSwgbm90IG5lY2Vzc2FyaWx5IGZvciBlYWNoIGZlYXR1cmUuIEJ1dCB3ZSdsbCBzdGFydCBoZXJlLlxuICAgICAgICAgICAgaWYoZmVhdHVyZSAmJiBmZWF0dXJlLnByb3BlcnRpZXMpe1xuICAgICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllcy56SW5kZXggPSA1O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHN0eWxlOiBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSB7fTtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IHN0eWxlLnNlbGVjdGVkID0ge307XG4gICAgICAgICAgICB2YXIgcG9pbnRSYWRpdXMgPSAxO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBTY2FsZURlcGVuZGVudFBvaW50UmFkaXVzKHpvb20pe1xuICAgICAgICAgICAgICAgIC8vU2V0IHBvaW50IHJhZGl1cyBiYXNlZCBvbiB6b29tXG4gICAgICAgICAgICAgICAgdmFyIHBvaW50UmFkaXVzID0gMTtcbiAgICAgICAgICAgICAgICBpZih6b29tID49IDAgJiYgem9vbSA8PSA3KXtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRSYWRpdXMgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKHpvb20gPiA3ICYmIHpvb20gPD0gMTApe1xuICAgICAgICAgICAgICAgICAgICBwb2ludFJhZGl1cyA9IDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoem9vbSA+IDEwKXtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRSYWRpdXMgPSA0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBwb2ludFJhZGl1cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHR5cGUgPSBmZWF0dXJlLnR5cGU7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6IC8vJ1BvaW50J1xuICAgICAgICAgICAgICAgICAgICAvLyB1bnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYig0MiwgMTMzLCAxNzMpJztcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUucmFkaXVzID0gU2NhbGVEZXBlbmRlbnRQb2ludFJhZGl1cztcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQuY29sb3IgPSAncmdiKDQyLCAxMzMsIDE3MyknO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5yYWRpdXMgPSA3O1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5saW5lV2lkdGggPSAyO1xuICAgICAgICAgICAgICAgICAgICAvL3NlbGVjdGVkLm91dGxpbmUgPSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICBzdHJva2VTdHlsZTogJ3JnYigyMCwyMCwyMCknLFxuICAgICAgICAgICAgICAgICAgICAvLyAgbGluZVdpZHRoOiAyXG4gICAgICAgICAgICAgICAgICAgIC8vfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOiAvLydMaW5lU3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAvLyB1bnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMTYxLDIxNywxNTUsMC44KSc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLnNpemUgPSAzO1xuICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5jb2xvciA9ICdyZ2JhKDI1NSwyNSwwLDAuNSknO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5zaXplID0gMztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOiAvLydQb2x5Z29uJ1xuICAgICAgICAgICAgICAgICAgICAvLyB1bnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMTQ5LDEzOSwyNTUsMC40KSc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYigyMCwyMCwyMCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMlxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5jb2xvciA9ICdyZ2JhKDI1NSwyNSwwLDAuMyknO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5vdXRsaW5lID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZDk1MzRmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDNcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICB9XG5cbiAgICB9O1xuICAgIHNlcnZpY2UuRWR1Y2F0aW9uX0NvdW50cyA9IEVkdWNhdGlvbjtcblxuICAgIHJldHVybiBzZXJ2aWNlO1xuXG59KTtcblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFNwYXRpYWxEZXYgb24gMS82LzE1LlxuICovXG4vKipcbiAqIENyZWF0ZWQgYnkgRGFuaWVsIEJhYWggPGRiYWFoQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMS82LzE1LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ1NwYXRpYWxWaWV3ZXInKS5mYWN0b3J5KCdIZWFsdGhGaWx0ZXJGYWN0b3J5JywgZnVuY3Rpb24gKCRodHRwKSB7XG5cbiAgICB2YXIgSGVhbHRoX0NvbmZpZyA9IHtcbiAgICAgICAgJ0FkZGl0aW9uYWwgUHJpbWFyeSBIZWFsdGggQ2VudHJlcyAoQVBIQyknOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM5YjI0MmQnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnQWRkaXRpb25hbCBQcmltYXJ5IEhlYWx0aCBDZW50cmVzIChBUEhDKScsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDZcbiAgICAgICAgfSxcbiAgICAgICAgJ0FOTSBvciBEaXN0cmljdCBUcmFpbmluZyBDZW50cmVzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjMzA4NmFiJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ0FOTSBvciBEaXN0cmljdCBUcmFpbmluZyBDZW50cmVzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNVxuICAgICAgICB9LFxuICAgICAgICAnQXBwcm92ZWQgTnVyc2luZyBUcmFpbmluZyBDZW50cmVzIChQcml2YXRlIFNlY3RvciknOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM5NzdjMDAnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnQXBwcm92ZWQgTnVyc2luZyBUcmFpbmluZyBDZW50cmVzIChQcml2YXRlIFNlY3RvciknLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA3XG4gICAgICAgIH0sXG4gICAgICAgICdDb21tdW5pdHkgSGVhbHRoIENlbnRyZSAoQ0hDKS9GaXJzdCBSZWZlcnJhbCBVbml0cyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2Q1Y2I5OCcsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdDb21tdW5pdHkgSGVhbHRoIENlbnRyZSAoQ0hDKS9GaXJzdCBSZWZlcnJhbCBVbml0cycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDRcbiAgICAgICAgfSxcbiAgICAgICAgJ0Rpc3RyaWN0IEhvc3BpdGFscyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2NlNmIyOScsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdEaXN0cmljdCBIb3NwaXRhbHMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA1XG4gICAgICAgIH0sXG4gICAgICAgICdNZWRpY2FsIENvbGxlZ2VzIGFuZCBIb3NwaXRhbHMnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM1OTQ1MmEnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnTWVkaWNhbCBDb2xsZWdlcyBhbmQgSG9zcGl0YWxzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogN1xuICAgICAgICB9LFxuICAgICAgICAnUHJpbWFyeSBIZWFsdGggQ2VudHJlIChQSEMpJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjOGNiN2M3JyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ1ByaW1hcnkgSGVhbHRoIENlbnRyZSAoUEhDKScsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDRcbiAgICAgICAgfSxcbiAgICAgICAgJ1ByaXZhdGUgaG9zcGl0YWxzIGFuZCBjbGluaWNzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjZDA5OGQ1JyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ1ByaXZhdGUgaG9zcGl0YWxzIGFuZCBjbGluaWNzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNVxuICAgICAgICB9LFxuICAgICAgICAnU3ViIERpdmlzaW9uYWwgRGlzdHJpY3QgSG9zcGl0YWxzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjYTRjNzhjJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ1N1YiBEaXZpc2lvbmFsIERpc3RyaWN0IEhvc3BpdGFscycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDdcbiAgICAgICAgfSxcbiAgICAgICAgJ1N1YiBIZWFsdGggQ2VudHJlcyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2Q1OTg5OCcsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdTdWIgSGVhbHRoIENlbnRyZXMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA3XG4gICAgICAgIH0sXG4gICAgICAgICdOdXJzaW5nIFNjaG9vbHMnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM1NjdkNTQnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnTnVyc2luZyBTY2hvb2xzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNFxuICAgICAgICB9XG5cbiAgICB9O1xuICAgIHZhciBIZWFsdGggPSBbXTtcbiAgICB2YXIgSGVhbHRoTGFuZFVzZSA9IFtdO1xuICAgIHZhciBzZXJ2aWNlID0ge307XG4gICAgc2VydmljZS5IZWFsdGhUb3RhbCA9IDA7XG5cblxuICAgIHNlcnZpY2UuZ2V0SGVhbHRoQ291bnRzID0gZnVuY3Rpb24oKXtcbiAgICAgICAgJGh0dHAuZ2V0KCdodHRwOi8vc3BhdGlhbHNlcnZlci5zcGF0aWFsZGV2LmNvbS9zZXJ2aWNlcy90YWJsZXMvaGVhbHRoXzIwMTQvcXVlcnk/d2hlcmU9Y291bnRyeSUzRCUyN0luZGlhJTI3JnJldHVybmZpZWxkcz10eXBlJmZvcm1hdD1nZW9qc29uJnJldHVybkdlb21ldHJ5PW5vJnJldHVybkdlb21ldHJ5RW52ZWxvcGVzPW5vJmdyb3VwYnk9dHlwZSZzdGF0c2RlZj1jb3VudCUzQXR5cGUnKS5cbiAgICAgICAgICAgIHN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEuZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgSGVhbHRoLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IGRhdGEuZmVhdHVyZXNbaV0ucHJvcGVydGllcy50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb3VudFwiOiBkYXRhLmZlYXR1cmVzW2ldLnByb3BlcnRpZXMuY291bnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFuZF91c2VcIjogZGF0YS5mZWF0dXJlc1tpXS5wcm9wZXJ0aWVzLmxhbmRfdXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RlZFwiOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZS5IZWFsdGhUb3RhbCArPSBwYXJzZUludChIZWFsdGhbaV0uY291bnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgcGVyY2VudGFnZSBwZXIgdHlwZVxuICAgICAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8SGVhbHRoLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgICAgICBIZWFsdGhbaV1bXCJwY3RcIl09KChwYXJzZUludChIZWFsdGhbaV0uY291bnQpL3NlcnZpY2UuSGVhbHRoVG90YWwpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIFNvcnQgc2VjdG9yIGFycmF5IGJ5IGNvdW50XG4gICAgICAgICAgICAgICAgSGVhbHRoLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIuY291bnQtIGEuY291bnQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5cbiAgICAgICAgICAgIGVycm9yKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIHNlcnZpY2UuZ2V0SGVhbHRoVXJiYW5SdXJhbENvdW50cyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICRodHRwLmdldCgnaHR0cDovL3NwYXRpYWxzZXJ2ZXIuc3BhdGlhbGRldi5jb20vc2VydmljZXMvdGFibGVzL2hlYWx0aF8yMDE0L3F1ZXJ5P3doZXJlPWNvdW50cnklM0QlMjdJbmRpYSUyNyZyZXR1cm5maWVsZHM9dHlwZSUyQ2xhbmRfdXNlJmZvcm1hdD1nZW9qc29uJnJldHVybkdlb21ldHJ5PW5vJnJldHVybkdlb21ldHJ5RW52ZWxvcGVzPW5vJmdyb3VwYnk9dHlwZSUyQ2xhbmRfdXNlJnN0YXRzZGVmPWNvdW50JTNBdHlwZScpLlxuICAgICAgICAgICAgc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5mZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBIZWFsdGhMYW5kVXNlLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IGRhdGEuZmVhdHVyZXNbaV0ucHJvcGVydGllcy50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY291bnRcIjogZGF0YS5mZWF0dXJlc1tpXS5wcm9wZXJ0aWVzLmNvdW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYW5kX3VzZVwiOmRhdGEuZmVhdHVyZXNbaV0ucHJvcGVydGllcy5sYW5kX3VzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGVkXCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KS5cbiAgICAgICAgICAgIGVycm9yKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIHNlcnZpY2UuZ2V0SGVhbHRoQ291bnRzKCk7XG4gICAgc2VydmljZS5nZXRIZWFsdGhVcmJhblJ1cmFsQ291bnRzKCk7XG5cbiAgICBzZXJ2aWNlLmNoZWNrQWxsID0gZnVuY3Rpb24gKHNlY3Rvciwgc2VsZWN0aW9uLCBzZWxlY3RhbGwpIHtcblxuICAgICAgICBzd2l0Y2goc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlICdoZWFsdGgnOlxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RhbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0YWxsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2Uuc2VsZWN0YWxsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2UuY2hlY2tCb29sID0gXCJDaGVjayBBbGxcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWN0b3J5IGNoZWNrIGJvb2w6IFwiICsgc2VydmljZS5jaGVja0Jvb2wpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZhY3Rvcnkgc2VsZWN0ZWQgYWxsOiBcIiArIHNlbGVjdGFsbCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VydmljZSBzZWxlY3RlZCBhbGw6IFwiICsgc2VydmljZS5zZWxlY3RhbGwpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGFsbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2Uuc2VsZWN0YWxsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZS5jaGVja0Jvb2wgPSBcIkNoZWNrIEFsbFwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZhY3RvcnkgY2hlY2sgYm9vbDogXCIgKyBzZXJ2aWNlLmNoZWNrQm9vbCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmFjdG9yeSBzZWxlY3QgYWxsOiBcIiArIHNlbGVjdGFsbCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VydmljZSBzZWxlY3RlZCBhbGw6IFwiICsgc2VydmljZS5zZWxlY3RhbGwpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlY3Rvci5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lcykge1xuICAgICAgICAgICAgICAgICAgICBuYW1lcy5zZWxlY3RlZCA9IHNlbGVjdGFsbDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgc2VydmljZS5jbGVhckFsbCA9IGZ1bmN0aW9uIChzZWN0b3IsIHNlbGVjdGlvbixzZWxlY3RhbGwpIHtcblxuICAgICAgICBpZiAoIXNlbGVjdGFsbCkge1xuICAgICAgICAgICAgc2VsZWN0YWxsID0gZmFsc2U7XG4gICAgICAgICAgICBzZXJ2aWNlLnNlbGVjdGFsbCA9IGZhbHNlO1xuICAgICAgICAgICAgc2VydmljZS5jaGVja0Jvb2wgPSBcIkNoZWNrIEFsbFwiO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJIZWFsdGggZmFjdG9yeSBjaGVjayBib29sOiBcIiArIHNlcnZpY2UuY2hlY2tCb29sKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSGVhbHRoIGZhY3Rvcnkgc2VsZWN0ZWQgYWxsOiBcIiArIHNlbGVjdGFsbCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhlYWx0aCBzZXJ2aWNlIHNlbGVjdGVkIGFsbDogXCIgKyBzZXJ2aWNlLnNlbGVjdGFsbCk7XG4gICAgICAgIH1cbiAgICAgICAgc2VjdG9yLmZvckVhY2goZnVuY3Rpb24gKG5hbWVzKSB7XG4gICAgICAgICAgICBuYW1lcy5zZWxlY3RlZCA9IHNlbGVjdGFsbDtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHNlcnZpY2UuTGF5ZXIgPSAge1xuICAgICAgICB1cmw6IFwiaHR0cDovL3NwYXRpYWxzZXJ2ZXIuc3BhdGlhbGRldi5jb20vc2VydmljZXMvcG9zdGdpcy9oZWFsdGhfMjAxNC9nZW9tL3ZlY3Rvci10aWxlcy97en0ve3h9L3t5fS5wYmY/ZmllbGRzPXR5cGUsaWRcIixcbiAgICAgICAgZGVidWc6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInBiZlwiLFxuICAgICAgICBuYW1lOiBcIkhlYWx0aFwiLFxuICAgICAgICBjbGlja2FibGVMYXllcnM6IG51bGwsXG5cbiAgICAgICAgLy8gd2Ugd2FudCBjb25mZXR0aSB0byBiZSBvbiB0b3Agb2Ygb3RoZXIgbGF5ZXJzLCBzdWNoIGFzIHRoZSBjb250ZXh0dWFsIGxheWVyc1xuICAgICAgICB6SW5kZXg6IDEwMDAsXG5cbiAgICAgICAgZ2V0SURGb3JMYXllckZlYXR1cmU6IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLmlkO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZmlsdGVyIGZ1bmN0aW9uIGdldHMgY2FsbGVkIHdoZW4gaXRlcmF0aW5nIHRob3VnaCBlYWNoIHZlY3RvciB0aWxlIGZlYXR1cmUgKHZ0ZikuIFlvdSBoYXZlIGFjY2Vzc1xuICAgICAgICAgKiB0byBldmVyeSBwcm9wZXJ0eSBhc3NvY2lhdGVkIHdpdGggYSBnaXZlbiBmZWF0dXJlICh0aGUgZmVhdHVyZSwgYW5kIHRoZSBsYXllcikuIFlvdSBjYW4gYWxzbyBmaWx0ZXJcbiAgICAgICAgICogYmFzZWQgb2YgdGhlIGNvbnRleHQgKGVhY2ggdGlsZSB0aGF0IHRoZSBmZWF0dXJlIGlzIGRyYXduIG9udG8pLlxuICAgICAgICAgKlxuICAgICAgICAgKiBSZXR1cm5pbmcgZmFsc2Ugc2tpcHMgb3ZlciB0aGUgZmVhdHVyZSBhbmQgaXQgaXMgbm90IGRyYXduLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gZmVhdHVyZVxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIGZpbHRlcjogZnVuY3Rpb24gKGZlYXR1cmUsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIC8vcmV0dXJuIGZlYXR1cmUucHJvcGVydGllcy50eXBlICE9ICdNb2JpbGUgTW9uZXkgQWdlbnQnO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gd2Ugd2FudCB0byBsaW5rIGV2ZW50cyBiZXR3ZWVuIGxheWVycywgbGlrZSBjbGlja2luZyBvbiBhIGxhYmVsIGFuZCBhXG4gICAgICAgICAqIGNvcnJlc3BvbmRpbmcgcG9seWdvbiBmcmVhdHVyZSwgdGhpcyB3aWxsIHJldHVybiB0aGUgY29ycmVzcG9uZGluZyBtYXBwaW5nXG4gICAgICAgICAqIGJldHdlZW4gbGF5ZXJzLiBUaGlzIHByb3ZpZGVzIGtub3dsZWRnZSBvZiB3aGljaCBvdGhlciBmZWF0dXJlIGEgZ2l2ZW4gZmVhdHVyZVxuICAgICAgICAgKiBpcyBsaW5rZWQgdG8uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBsYXllck5hbWUgIHRoZSBsYXllciB3ZSB3YW50IHRvIGtub3cgdGhlIGxpbmtlZCBsYXllciBmcm9tXG4gICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgY29ycmVzcG9uZGluZyBsaW5rZWQgbGF5ZXJcbiAgICAgICAgICovXG4gICAgICAgIGxheWVyTGluazogZnVuY3Rpb24gKGxheWVyTmFtZSkge1xuICAgICAgICAgICAgaWYgKGxheWVyTmFtZS5pbmRleE9mKCdfbGFiZWwnKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxheWVyTmFtZS5yZXBsYWNlKCdfbGFiZWwnLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbGF5ZXJOYW1lICsgJ19sYWJlbCc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNwZWNpZnkgd2hpY2ggZmVhdHVyZXMgc2hvdWxkIGhhdmUgYSBjZXJ0YWluIHogaW5kZXggKGludGVnZXIpLiAgTG93ZXIgbnVtYmVycyB3aWxsIGRyYXcgb24gJ3RoZSBib3R0b20nLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gZmVhdHVyZSAtIHRoZSBQQkZGZWF0dXJlIHRoYXQgY29udGFpbnMgcHJvcGVydGllc1xuICAgICAgICAgKi9cbiAgICAgICAgbGF5ZXJPcmRlcmluZzogZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgICAgIC8vVGhpcyBvbmx5IG5lZWRzIHRvIGJlIGRvbmUgZm9yIGVhY2ggdHlwZSwgbm90IG5lY2Vzc2FyaWx5IGZvciBlYWNoIGZlYXR1cmUuIEJ1dCB3ZSdsbCBzdGFydCBoZXJlLlxuICAgICAgICAgICAgaWYgKGZlYXR1cmUgJiYgZmVhdHVyZS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllcy56SW5kZXggPSBIZWFsdGhfQ29uZmlnW2ZlYXR1cmUucHJvcGVydGllcy50eXBlXS56SW5kZXggfHwgNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBzdHlsZTogZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgICAgICAgdmFyIHN0eWxlID0ge307XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSBzdHlsZS5zZWxlY3RlZCA9IHt9O1xuICAgICAgICAgICAgdmFyIHBvaW50UmFkaXVzID0gMTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gU2NhbGVEZXBlbmRlbnRQb2ludFJhZGl1cyh6b29tKXtcbiAgICAgICAgICAgICAgICAvL1NldCBwb2ludCByYWRpdXMgYmFzZWQgb24gem9vbVxuICAgICAgICAgICAgICAgIHZhciBwb2ludFJhZGl1cyA9IDE7XG4gICAgICAgICAgICAgICAgaWYoem9vbSA+PSAwICYmIHpvb20gPD0gNyl7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50UmFkaXVzID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZih6b29tID4gNyAmJiB6b29tIDw9IDEwKXtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRSYWRpdXMgPSAzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKHpvb20gPiAxMCl7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50UmFkaXVzID0gNDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcG9pbnRSYWRpdXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB0eXBlID0gZmVhdHVyZS50eXBlO1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxOiAvLydQb2ludCdcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2IoMTI3LCAxNTcsIDEwNiknO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5yYWRpdXMgPSBTY2FsZURlcGVuZGVudFBvaW50UmFkaXVzO1xuICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5jb2xvciA9ICdyZ2JhKDI1NSwyNTUsMCwwLjUpJztcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQucmFkaXVzID0gNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOiAvLydMaW5lU3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAvLyB1bnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMTYxLDIxNywxNTUsMC44KSc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLnNpemUgPSAzO1xuICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5jb2xvciA9ICdyZ2JhKDI1NSwyNSwwLDAuNSknO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5zaXplID0gMztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOiAvLydQb2x5Z29uJ1xuICAgICAgICAgICAgICAgICAgICAvLyB1bnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMTQ5LDEzOSwyNTUsMC40KSc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYigyMCwyMCwyMCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMlxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5jb2xvciA9ICdyZ2JhKDI1NSwyNSwwLDAuMyknO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5vdXRsaW5lID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZDk1MzRmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDNcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICB9LFxuXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgLy9JZiBuZWFyYnkgdG9vbCAob3IgYW55IHRvb2wpIGlzIGFjdGl2ZSwgdGhlbiBhYm9ydC5cbiAgICAgICAgICAgIC8vaWYoX0ZTUC5Ub29sTWFzdGVyLmFjdGl2ZVRvb2wuYWN0aXZlID09IHRydWUpIHJldHVybjtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvL3ZhciBidWZmZXIgPSBfRlNQLkNvbmZldHRpTG9hZGVyLmNsaWNrVG9CdWZmZXIoZXZ0KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvL2lmKE9iamVjdC5rZXlzKF9GU1AuSGVhbHRoTGlzdEJ1aWxkZXIuR2V0RmlsdGVyT2JqZWN0KCkpLmxlbmd0aCA9PSAwKSByZXR1cm47XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8vL1dlIGhhdmUgdGhlIGJ1ZmZlciBhcyBnZW9qc29uLiAgU2VuZCBpdCB0byB0aGUgcG9pbnQgdGFibGUgdG8gaW50ZXJzZWN0XG4gICAgICAgICAgICAvL3ZhciB0YWJsZVBvc3RBcmdzID0ge1xuICAgICAgICAgICAgLy8gIHJldHVybmZpZWxkczogJ2xhdCxsbmcsaWQsdHlwZSxuYW1lLHBob3RvcyxkZWxpdmVyeV9jZW50ZXIsc2VwYXJhdGVfbWF0ZXJuaXR5LHNiYV9yZXNvdXJjZSxmZW1hbGVfc3RlcmlsaXphdGlvbixpbnRyYV91dGVyaW5lLGNvbmRvbXMsb3JhbF9waWxscyxwaGFybWFjaXN0LGNzZWN0aW9uX2Vtb25jLHBoY18yNF83LGJsb29kX3RyYW5zZnVzaW9uLGltbXVuaXphdGlvbixjb2xkX2NoYWluX2VxdWlwbWVudCcsXG4gICAgICAgICAgICAvLyAgZm9ybWF0OiAnZ2VvanNvbicsXG4gICAgICAgICAgICAvLyAgd2hlcmU6IF9GU1AuVXRpbGl0aWVzLmJ1aWxkUG9zdEdyZXNRdWVyeUV4cHJlc3Npb24oJ2hlYWx0aCcsIF9GU1AuSGVhbHRoTGlzdEJ1aWxkZXIuSGVhbHRoU2VsZWN0aW9ucyksXG4gICAgICAgICAgICAvLyAgcmV0dXJuR2VvbWV0cnk6ICd5ZXMnLFxuICAgICAgICAgICAgLy8gIGludGVyc2VjdHM6IGJ1ZmZlcixcbiAgICAgICAgICAgIC8vICBsaW1pdDogMjAwIC8vYWRkIGEgbGltaXQgb2YgMjAwIHNvIHdlIGRvbid0IGdldCBjYXJyaWVkIGF3YXlcbiAgICAgICAgICAgIC8vfTtcbiAgICAgICAgICAgIC8vdmFyIHBvaW50VXJsID0gXCJodHRwOi8vc3BhdGlhbHNlcnZlci5zcGF0aWFsZGV2LmNvbS9zZXJ2aWNlcy90YWJsZXMvaGVhbHRoXzIwMTQvcXVlcnlcIjtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyQucG9zdChwb2ludFVybCwgdGFibGVQb3N0QXJncykuc3VjY2VzcyhmdW5jdGlvbiAocG9pbnRzLCBxc3RhdHVzKSB7XG4gICAgICAgICAgICAvLyAgLy9HZW9KU09OIHJlc3VsdCBvZiBwb2ludHNcbiAgICAgICAgICAgIC8vICBpZiAoIXBvaW50cyB8fCBwb2ludHMuZXJyb3IpIHtcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBmZWF0dXJlOiAnICsgcG9pbnRzLmVycm9yKTtcbiAgICAgICAgICAgIC8vICAgIHJldHVybjtcbiAgICAgICAgICAgIC8vICB9XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gIC8vcG9pbnQgaXMgYSBmZWF0dXJlY29sbGVjdGlvbi4gb3BlbiB0aGUgcGFuZWwgYW5kIHNob3cgc29tZSBzdHVmZi5cbiAgICAgICAgICAgIC8vICBpZiAocG9pbnRzICYmIHBvaW50cy5mZWF0dXJlcyAmJiBwb2ludHMuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gICAgdmFyIGh0bWwgPSBfRlNQLlBvcHVwQnVpbGRlci5hZGRSZXN1bHRzKHBvaW50cy5mZWF0dXJlcywgX0ZTUC5Db25maWcuSEVBTFRIX0xBWUVSUywgJ2hlYWx0aCcsIGZ1bmN0aW9uIChjdXJyZW50UG9pbnQpIHtcbiAgICAgICAgICAgIC8vICAgICAgaWYgKGN1cnJlbnRQb2ludCkge1xuICAgICAgICAgICAgLy8gICAgICAgIC8vSGlnaGxpZ2h0IHBvaW50LlxuICAgICAgICAgICAgLy8gICAgICAgIHZhciBsYXllcnMgPSBwYmZTb3VyY2UuZ2V0TGF5ZXJzKCk7XG4gICAgICAgICAgICAvLyAgICAgICAgaWYgKGxheWVycykge1xuICAgICAgICAgICAgLy8gICAgICAgICAgdmFyIGxheWVyID0gbGF5ZXJzW09iamVjdC5rZXlzKGxheWVycylbMF1dO1xuICAgICAgICAgICAgLy8gICAgICAgICAgaWYgKGxheWVyKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgIC8vdHJ5IHRvIHBsdWNrIHZ0ZlxuICAgICAgICAgICAgLy8gICAgICAgICAgICBfRlNQLk1hcEJ1aWxkZXIuc2VsZWN0ZWRDb25mZXR0aSA9IGxheWVyLmZlYXR1cmVzW2N1cnJlbnRQb2ludC5wcm9wZXJ0aWVzLmlkXTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgaWYgKF9GU1AuTWFwQnVpbGRlci5zZWxlY3RlZENvbmZldHRpKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgLy9TZXQgZmVhdHVyZSB0byBiZSBiaWcgYW5kIGhpZ2ggei1pbmRleFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgIF9GU1AuTWFwQnVpbGRlci5zZWxlY3RlZENvbmZldHRpLnNlbGVjdCgpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgIGlmIChfRlNQLk1hcEJ1aWxkZXIucHJldmlvdXNseVNlbGVjdGVkQ29uZmV0dGkpIF9GU1AuTWFwQnVpbGRlci5wcmV2aW91c2x5U2VsZWN0ZWRDb25mZXR0aS5kZXNlbGVjdCgpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgIF9GU1AuTWFwQnVpbGRlci5wcmV2aW91c2x5U2VsZWN0ZWRDb25mZXR0aSA9IF9GU1AuTWFwQnVpbGRlci5zZWxlY3RlZENvbmZldHRpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICB9XG4gICAgICAgICAgICAvLyAgICB9KTtcbiAgICAgICAgICAgIC8vICAgIGlmKGh0bWwpe1xuICAgICAgICAgICAgLy8gICAgICBvcGVuQ0lDT0RldGFpbHMoaHRtbCk7XG4gICAgICAgICAgICAvLyAgICB9XG4gICAgICAgICAgICAvLyAgfVxuICAgICAgICAgICAgLy99KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuICAgIHNlcnZpY2UuSGVhbHRoX0NvbmZpZyA9IEhlYWx0aF9Db25maWc7XG4gICAgc2VydmljZS5IZWFsdGhfQ291bnRzID0gSGVhbHRoO1xuICAgIHNlcnZpY2UuSGVhbHRoX0xhbmRVc2VfQ291bnRzID0gSGVhbHRoTGFuZFVzZTtcblxuICAgIHJldHVybiBzZXJ2aWNlO1xuXG59KTtcblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFNwYXRpYWxEZXYgb24gMS82LzE1LlxuICovXG4vKipcbiAqIENyZWF0ZWQgYnkgRGFuaWVsIEJhYWggPGRiYWFoQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMS82LzE1LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ1NwYXRpYWxWaWV3ZXInKS5mYWN0b3J5KCdMaWJyYXJ5RmlsdGVyRmFjdG9yeScsIGZ1bmN0aW9uICgkaHR0cCkge1xuXG4gICAgdmFyIHNlcnZpY2UgPSB7fTtcbiAgICB2YXIgTGliX0NvbmZpZyA9ICB7XG4gICAgICAgICdEaXN0cmljdCc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzliMjQyZCcsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdEaXN0cmljdCcsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDZcbiAgICAgICAgfSxcbiAgICAgICAgJ1ByaXZhdGUgTGlicmFyeSc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzMwODZhYicsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdQcml2YXRlIExpYnJhcnknLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA1XG4gICAgICAgIH0sXG4gICAgICAgICdQdWJsaWMgTGlicmFyeSc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzk3N2MwMCcsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdQdWJsaWMgTGlicmFyeScsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDdcbiAgICAgICAgfSxcbiAgICAgICAgJ1ZpbGxhZ2UnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyNhNGM3OGMnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnVmlsbGFnZScsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDRcbiAgICAgICAgfVxuXG4gICAgfTtcbiAgICB2YXIgTGlicmFyeSA9IFtdO1xuICAgIHZhciBMaWJyYXJ5TGFuZFVzZSA9IFtdO1xuICAgIHNlcnZpY2UuTGlicmFyeVRvdGFsID0gMDtcblxuICAgIHNlcnZpY2UuZ2V0TGlicmFyeUNvdW50cyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIExpYnJhcnlcbiAgICAgICAgJGh0dHAuZ2V0KCdodHRwOi8vc3BhdGlhbHNlcnZlci5zcGF0aWFsZGV2LmNvbS9zZXJ2aWNlcy90YWJsZXMvbGlicmFyeV8yMDE0L3F1ZXJ5P3doZXJlPWNvdW50cnklM0QlMjdJbmRpYSUyNyZyZXR1cm5maWVsZHM9dHlwZSZmb3JtYXQ9Z2VvanNvbiZyZXR1cm5HZW9tZXRyeT1ubyZyZXR1cm5HZW9tZXRyeUVudmVsb3Blcz1ubyZncm91cGJ5PXR5cGUmc3RhdHNkZWY9Y291bnQlM0F0eXBlJykuXG4gICAgICAgICAgICBzdWNjZXNzKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIExpYnJhcnkucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogZGF0YS5mZWF0dXJlc1tpXS5wcm9wZXJ0aWVzLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvdW50XCI6IGRhdGEuZmVhdHVyZXNbaV0ucHJvcGVydGllcy5jb3VudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYW5kX3VzZVwiOiBkYXRhLmZlYXR1cmVzW2ldLnByb3BlcnRpZXMubGFuZF91c2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGVkXCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLkxpYnJhcnlUb3RhbCArPSBwYXJzZUludChMaWJyYXJ5W2ldLmNvdW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yKHZhciBpPTA7aTxMaWJyYXJ5Lmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgICAgICBMaWJyYXJ5W2ldW1wicGN0XCJdPSgocGFyc2VJbnQoTGlicmFyeVtpXS5jb3VudCkvc2VydmljZS5MaWJyYXJ5VG90YWwpKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gU29ydCBzZWN0b3IgYXJyYXkgYnkgY291bnRcbiAgICAgICAgICAgICAgICBMaWJyYXJ5LnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIuY291bnQtIGEuY291bnQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5cbiAgICAgICAgICAgIGVycm9yKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIHNlcnZpY2UuZ2V0TGlicmFyeVVyYmFuUnVyYWxDb3VudHMgPSBmdW5jdGlvbigpe1xuICAgICAgICAkaHR0cC5nZXQoJ2h0dHA6Ly9zcGF0aWFsc2VydmVyLnNwYXRpYWxkZXYuY29tL3NlcnZpY2VzL3RhYmxlcy9saWJyYXJ5XzIwMTQvcXVlcnk/d2hlcmU9Y291bnRyeSUzRCUyN0luZGlhJTI3JnJldHVybmZpZWxkcz10eXBlJTJDbGFuZF91c2UmZm9ybWF0PWdlb2pzb24mcmV0dXJuR2VvbWV0cnk9bm8mcmV0dXJuR2VvbWV0cnlFbnZlbG9wZXM9bm8mZ3JvdXBieT10eXBlJTJDbGFuZF91c2Umc3RhdHNkZWY9Y291bnQlM0F0eXBlJykuXG4gICAgICAgICAgICBzdWNjZXNzKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIExpYnJhcnlMYW5kVXNlLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IGRhdGEuZmVhdHVyZXNbaV0ucHJvcGVydGllcy50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY291bnRcIjogZGF0YS5mZWF0dXJlc1tpXS5wcm9wZXJ0aWVzLmNvdW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYW5kX3VzZVwiOmRhdGEuZmVhdHVyZXNbaV0ucHJvcGVydGllcy5sYW5kX3VzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGVkXCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KS5cbiAgICAgICAgICAgIGVycm9yKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgc2VydmljZS5nZXRMaWJyYXJ5Q291bnRzKCk7XG4gICAgc2VydmljZS5nZXRMaWJyYXJ5VXJiYW5SdXJhbENvdW50cygpO1xuXG4gICAgc2VydmljZS5jaGVja0FsbCA9IGZ1bmN0aW9uIChzZWN0b3IsIHNlbGVjdGlvbixzZWxlY3RhbGwpIHtcblxuICAgICAgICBzd2l0Y2goc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlICdsaWJyYXJ5JzpcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0YWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGFsbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLnNlbGVjdGFsbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLmNoZWNrQm9vbCA9IFwiQ2hlY2sgQWxsXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmFjdG9yeSBjaGVjayBib29sOiBcIiArIHNlcnZpY2UuY2hlY2tCb29sKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWN0b3J5IHNlbGVjdGVkIGFsbDogXCIgKyBzZWxlY3RhbGwpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlcnZpY2Ugc2VsZWN0ZWQgYWxsOiBcIiArIHNlcnZpY2Uuc2VsZWN0YWxsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RhbGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLnNlbGVjdGFsbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2UuY2hlY2tCb29sID0gXCJVbmNoZWNrIEFsbFwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZhY3RvcnkgY2hlY2sgYm9vbDogXCIgKyBzZXJ2aWNlLmNoZWNrQm9vbCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmFjdG9yeSBzZWxlY3RlZCBhbGw6IFwiICsgc2VsZWN0YWxsKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZXJ2aWNlIHNlbGVjdGVkIGFsbDogXCIgKyBzZXJ2aWNlLnNlbGVjdGFsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlY3Rvci5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lcykge1xuICAgICAgICAgICAgICAgICAgICBuYW1lcy5zZWxlY3RlZCA9IHNlbGVjdGFsbDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgc2VydmljZS5jbGVhckFsbCA9IGZ1bmN0aW9uIChzZWN0b3IsIHNlbGVjdGlvbixzZWxlY3RhbGwpIHtcbiAgICAgICAgaWYgKCFzZWxlY3RhbGwpIHtcbiAgICAgICAgICAgIHNlbGVjdGFsbCA9IGZhbHNlO1xuICAgICAgICAgICAgc2VydmljZS5zZWxlY3RhbGwgPSBmYWxzZTtcbiAgICAgICAgICAgIHNlcnZpY2UuY2hlY2tCb29sID0gXCJDaGVjayBBbGxcIjtcbiAgICAgICAgfVxuICAgICAgICBzZWN0b3IuZm9yRWFjaChmdW5jdGlvbiAobmFtZXMpIHtcbiAgICAgICAgICAgIG5hbWVzLnNlbGVjdGVkID0gc2VsZWN0YWxsO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgc2VydmljZS5MYXllciA9IHtcbiAgICAgICAgdXJsOiBcImh0dHA6Ly9zcGF0aWFsc2VydmVyLnNwYXRpYWxkZXYuY29tL3NlcnZpY2VzL3Bvc3RnaXMvbGlicmFyeV8yMDE0L2dlb20vdmVjdG9yLXRpbGVzL3t6fS97eH0ve3l9LnBiZj9maWVsZHM9dHlwZSxpZFwiLFxuICAgICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICAgIHR5cGU6ICdwYmYnLFxuICAgICAgICBuYW1lOiAnTGlicmFyeScsXG4gICAgICAgIGNsaWNrYWJsZUxheWVyczogbnVsbCxcblxuICAgICAgICAvLyB3ZSB3YW50IGNvbmZldHRpIHRvIGJlIG9uIHRvcCBvZiBvdGhlciBsYXllcnMsIHN1Y2ggYXMgdGhlIGNvbnRleHR1YWwgbGF5ZXJzXG4gICAgICAgIHpJbmRleDogMTAwMCxcblxuICAgICAgICBnZXRJREZvckxheWVyRmVhdHVyZTogZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgICAgIHJldHVybiBmZWF0dXJlLnByb3BlcnRpZXMuaWQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBmaWx0ZXIgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgd2hlbiBpdGVyYXRpbmcgdGhvdWdoIGVhY2ggdmVjdG9yIHRpbGUgZmVhdHVyZSAodnRmKS4gWW91IGhhdmUgYWNjZXNzXG4gICAgICAgICAqIHRvIGV2ZXJ5IHByb3BlcnR5IGFzc29jaWF0ZWQgd2l0aCBhIGdpdmVuIGZlYXR1cmUgKHRoZSBmZWF0dXJlLCBhbmQgdGhlIGxheWVyKS4gWW91IGNhbiBhbHNvIGZpbHRlclxuICAgICAgICAgKiBiYXNlZCBvZiB0aGUgY29udGV4dCAoZWFjaCB0aWxlIHRoYXQgdGhlIGZlYXR1cmUgaXMgZHJhd24gb250bykuXG4gICAgICAgICAqXG4gICAgICAgICAqIFJldHVybmluZyBmYWxzZSBza2lwcyBvdmVyIHRoZSBmZWF0dXJlIGFuZCBpdCBpcyBub3QgZHJhd24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBmZWF0dXJlXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoZmVhdHVyZSwgY29udGV4dCkge1xuICAgICAgICAgICAgLy9yZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLnR5cGUgIT0gJ01vYmlsZSBNb25leSBBZ2VudCc7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiB3ZSB3YW50IHRvIGxpbmsgZXZlbnRzIGJldHdlZW4gbGF5ZXJzLCBsaWtlIGNsaWNraW5nIG9uIGEgbGFiZWwgYW5kIGFcbiAgICAgICAgICogY29ycmVzcG9uZGluZyBwb2x5Z29uIGZyZWF0dXJlLCB0aGlzIHdpbGwgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIG1hcHBpbmdcbiAgICAgICAgICogYmV0d2VlbiBsYXllcnMuIFRoaXMgcHJvdmlkZXMga25vd2xlZGdlIG9mIHdoaWNoIG90aGVyIGZlYXR1cmUgYSBnaXZlbiBmZWF0dXJlXG4gICAgICAgICAqIGlzIGxpbmtlZCB0by5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGxheWVyTmFtZSAgdGhlIGxheWVyIHdlIHdhbnQgdG8ga25vdyB0aGUgbGlua2VkIGxheWVyIGZyb21cbiAgICAgICAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBjb3JyZXNwb25kaW5nIGxpbmtlZCBsYXllclxuICAgICAgICAgKi9cbiAgICAgICAgbGF5ZXJMaW5rOiBmdW5jdGlvbiAobGF5ZXJOYW1lKSB7XG4gICAgICAgICAgICBpZiAobGF5ZXJOYW1lLmluZGV4T2YoJ19sYWJlbCcpID4gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGF5ZXJOYW1lLnJlcGxhY2UoJ19sYWJlbCcsICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBsYXllck5hbWUgKyAnX2xhYmVsJztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU3BlY2lmeSB3aGljaCBmZWF0dXJlcyBzaG91bGQgaGF2ZSBhIGNlcnRhaW4geiBpbmRleCAoaW50ZWdlcikuICBMb3dlciBudW1iZXJzIHdpbGwgZHJhdyBvbiAndGhlIGJvdHRvbScuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBmZWF0dXJlIC0gdGhlIFBCRkZlYXR1cmUgdGhhdCBjb250YWlucyBwcm9wZXJ0aWVzXG4gICAgICAgICAqL1xuICAgICAgICBsYXllck9yZGVyaW5nOiBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICAgICAgLy9UaGlzIG9ubHkgbmVlZHMgdG8gYmUgZG9uZSBmb3IgZWFjaCB0eXBlLCBub3QgbmVjZXNzYXJpbHkgZm9yIGVhY2ggZmVhdHVyZS4gQnV0IHdlJ2xsIHN0YXJ0IGhlcmUuXG4gICAgICAgICAgICBpZiAoZmVhdHVyZSAmJiBmZWF0dXJlLnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzLnpJbmRleCA9IExpYl9Db25maWdbZmVhdHVyZS5wcm9wZXJ0aWVzLnR5cGVdLnpJbmRleCB8fCA1O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHN0eWxlOmZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IHt9O1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gc3R5bGUuc2VsZWN0ZWQgPSB7fTtcbiAgICAgICAgICAgIHZhciBwb2ludFJhZGl1cyA9IDE7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIFNjYWxlRGVwZW5kZW50UG9pbnRSYWRpdXMoem9vbSl7XG4gICAgICAgICAgICAgICAgLy9TZXQgcG9pbnQgcmFkaXVzIGJhc2VkIG9uIHpvb21cbiAgICAgICAgICAgICAgICB2YXIgcG9pbnRSYWRpdXMgPSAxO1xuICAgICAgICAgICAgICAgIGlmKHpvb20gPj0gMCAmJiB6b29tIDw9IDcpe1xuICAgICAgICAgICAgICAgICAgICBwb2ludFJhZGl1cyA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoem9vbSA+IDcgJiYgem9vbSA8PSAxMCl7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50UmFkaXVzID0gMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZih6b29tID4gMTApe1xuICAgICAgICAgICAgICAgICAgICBwb2ludFJhZGl1cyA9IDQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50UmFkaXVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdHlwZSA9IGZlYXR1cmUudHlwZTtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTogLy8nUG9pbnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB1bnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYig0MiwgMTMzLCAxNzMpJztcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUucmFkaXVzID0gU2NhbGVEZXBlbmRlbnRQb2ludFJhZGl1cztcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQuY29sb3IgPSAncmdiYSgyNTUsMjU1LDAsMC41KSc7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLnJhZGl1cyA9IDU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjogLy8nTGluZVN0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVuc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgxNjEsMjE3LDE1NSwwLjgpJztcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuc2l6ZSA9IDM7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLmNvbG9yID0gJ3JnYmEoMjU1LDI1LDAsMC41KSc7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLnNpemUgPSAzO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6IC8vJ1BvbHlnb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB1bnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMTQ5LDEzOSwyNTUsMC40KSc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYigyMCwyMCwyMCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMlxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5jb2xvciA9ICdyZ2JhKDI1NSwyNSwwLDAuMyknO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5vdXRsaW5lID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZDk1MzRmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDNcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICB9LFxuXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgLy9JZiBuZWFyYnkgdG9vbCAob3IgYW55IHRvb2wpIGlzIGFjdGl2ZSwgdGhlbiBhYm9ydC5cbiAgICAgICAgICAgIC8vICBpZihfRlNQLlRvb2xNYXN0ZXIuYWN0aXZlVG9vbC5hY3RpdmUgPT0gdHJ1ZSkgcmV0dXJuO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICB2YXIgYnVmZmVyID0gX0ZTUC5Db25mZXR0aUxvYWRlci5jbGlja1RvQnVmZmVyKGV2dCk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gIC8vSWYgYWxsIGFyZSB1bmNoZWNrZWQsIHRoZW4gZXhpdCBvdXQgb2YgaGVyZVxuICAgICAgICAgICAgLy8gIGlmKE9iamVjdC5rZXlzKF9GU1AuTGlicmFyeUxpc3RCdWlsZGVyLkdldEZpbHRlck9iamVjdCgpKS5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAvL1dlIGhhdmUgdGhlIGJ1ZmZlciBhcyBnZW9qc29uLiAgU2VuZCBpdCB0byB0aGUgcG9pbnQgdGFibGUgdG8gaW50ZXJzZWN0XG4gICAgICAgICAgICAvLyAgdmFyIHRhYmxlUG9zdEFyZ3MgPSB7XG4gICAgICAgICAgICAvLyAgICByZXR1cm5maWVsZHM6ICdsYXQsbG5nLG5hbWUsdHlwZSxpZCxwaG90b3MsYnVzaW5lc3NfaG91cnMsc3RhZmZfY291bnQsaW50ZXJuZXQscHVibGljX2NvbXB1dGVyX2NvdW50LGNvbXB1dGVyX2ZlZScsXG4gICAgICAgICAgICAvLyAgICBmb3JtYXQ6ICdnZW9qc29uJyxcbiAgICAgICAgICAgIC8vICAgIHdoZXJlOiBfRlNQLlV0aWxpdGllcy5idWlsZFBvc3RHcmVzUXVlcnlFeHByZXNzaW9uKCdsaWJyYXJ5JywgX0ZTUC5MaWJyYXJ5TGlzdEJ1aWxkZXIuTGlicmFyeVNlbGVjdGlvbnMpLFxuICAgICAgICAgICAgLy8gICAgcmV0dXJuR2VvbWV0cnk6ICd5ZXMnLFxuICAgICAgICAgICAgLy8gICAgaW50ZXJzZWN0czogYnVmZmVyLFxuICAgICAgICAgICAgLy8gICAgbGltaXQ6IDIwMCAvL2FkZCBhIGxpbWl0IG9mIDIwMCBzbyB3ZSBkb24ndCBnZXQgY2FycmllZCBhd2F5XG4gICAgICAgICAgICAvLyAgfTtcbiAgICAgICAgICAgIC8vICB2YXIgcG9pbnRVcmwgPSBcImh0dHA6Ly9zcGF0aWFsc2VydmVyLnNwYXRpYWxkZXYuY29tL3NlcnZpY2VzL3RhYmxlcy9saWJyYXJ5XzIwMTQvcXVlcnlcIjtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgJC5wb3N0KHBvaW50VXJsLCB0YWJsZVBvc3RBcmdzKS5zdWNjZXNzKGZ1bmN0aW9uIChwb2ludHMsIHFzdGF0dXMpIHtcbiAgICAgICAgICAgIC8vICAgIC8vR2VvSlNPTiByZXN1bHQgb2YgcG9pbnRzXG4gICAgICAgICAgICAvLyAgICBpZiAoIXBvaW50cyB8fCBwb2ludHMuZXJyb3IpIHtcbiAgICAgICAgICAgIC8vICAgICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGZldGNoIGZlYXR1cmU6ICcgKyBwb2ludHMuZXJyb3IpO1xuICAgICAgICAgICAgLy8gICAgICByZXR1cm47XG4gICAgICAgICAgICAvLyAgICB9XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgLy9wb2ludCBpcyBhIGZlYXR1cmVjb2xsZWN0aW9uLiBvcGVuIHRoZSBwYW5lbCBhbmQgc2hvdyBzb21lIHN0dWZmLlxuICAgICAgICAgICAgLy8gICAgaWYgKHBvaW50cyAmJiBwb2ludHMuZmVhdHVyZXMgJiYgcG9pbnRzLmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vICAgICAgdmFyIGh0bWwgPSBfRlNQLlBvcHVwQnVpbGRlci5hZGRSZXN1bHRzKHBvaW50cy5mZWF0dXJlcywgX0ZTUC5Db25maWcuTElCUkFSWV9MQVlFUlMsICdsaWJyYXJ5JywgZnVuY3Rpb24gKGN1cnJlbnRQb2ludCkge1xuICAgICAgICAgICAgLy8gICAgICAgIGlmIChjdXJyZW50UG9pbnQpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgIC8vSGlnaGxpZ2h0IHBvaW50LlxuICAgICAgICAgICAgLy8gICAgICAgICAgdmFyIGxheWVycyA9IHBiZlNvdXJjZS5nZXRMYXllcnMoKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgIGlmIChsYXllcnMpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgdmFyIGxheWVyID0gbGF5ZXJzW09iamVjdC5rZXlzKGxheWVycylbMF1dOyAvL0xpYnJhcnkgbGF5ZXJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgaWYgKGxheWVyKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgLy90cnkgdG8gcGx1Y2sgdnRmXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgX0ZTUC5NYXBCdWlsZGVyLnNlbGVjdGVkQ29uZmV0dGkgPSBsYXllci5mZWF0dXJlc1tjdXJyZW50UG9pbnQucHJvcGVydGllcy5pZF07XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgaWYgKF9GU1AuTWFwQnVpbGRlci5zZWxlY3RlZENvbmZldHRpKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAvL1NldCBmZWF0dXJlIHRvIGJlIGJpZyBhbmQgaGlnaCB6LWluZGV4XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICBfRlNQLk1hcEJ1aWxkZXIuc2VsZWN0ZWRDb25mZXR0aS5zZWxlY3QoKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIGlmIChfRlNQLk1hcEJ1aWxkZXIucHJldmlvdXNseVNlbGVjdGVkQ29uZmV0dGkpIF9GU1AuTWFwQnVpbGRlci5wcmV2aW91c2x5U2VsZWN0ZWRDb25mZXR0aS5kZXNlbGVjdCgpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgX0ZTUC5NYXBCdWlsZGVyLnByZXZpb3VzbHlTZWxlY3RlZENvbmZldHRpID0gX0ZTUC5NYXBCdWlsZGVyLnNlbGVjdGVkQ29uZmV0dGk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICB9KTtcbiAgICAgICAgICAgIC8vICAgICAgaWYoaHRtbCl7XG4gICAgICAgICAgICAvLyAgICAgICAgb3BlbkNJQ09EZXRhaWxzKGh0bWwpO1xuICAgICAgICAgICAgLy8gICAgICB9XG4gICAgICAgICAgICAvLyAgICB9XG4gICAgICAgICAgICAvLyAgfSk7XG4gICAgICAgIH1cblxuICAgIH07XG4gICAgc2VydmljZS5MaWJyYXJ5X0NvbmZpZyA9IExpYl9Db25maWc7XG4gICAgc2VydmljZS5MaWJyYXJ5X0NvdW50cyA9IExpYnJhcnk7XG4gICAgc2VydmljZS5MaWJyYXJ5X0xhbmRVc2VfQ291bnRzID0gTGlicmFyeUxhbmRVc2U7XG5cbiAgICByZXR1cm4gc2VydmljZTtcblxufSk7XG5cbiIsIlxuLyoqXG4gKiBDcmVhdGVkIGJ5IERhbmllbCBCYWFoIDxkYmFhaEBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDEyLzIyLzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ1NwYXRpYWxWaWV3ZXInKS5mYWN0b3J5KCdCYW5nbGFkZXNoRmFjdG9yeScsIGZ1bmN0aW9uICgkaHR0cCkge1xuXG4gICAgdmFyIHNlcnZpY2UgPSB7fTtcblxuICAgICRodHRwLmdldCgnZGF0YS9jb3VudHJ5ZGF0YS9CYW5nbGFkZXNoLmpzb24nKS5cbiAgICAgICAgc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLkJhbmdsYWRlc2ggPSBkYXRhO1xuICAgICAgICB9KS5cbiAgICAgICAgZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgYWxlcnQoZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHNlcnZpY2U7XG5cbn0pO1xuXG4iLCJcbi8qKlxuKiBDcmVhdGVkIGJ5IERhbmllbCBCYWFoIDxkYmFhaEBzcGF0aWFsZGV2LmNvbT5cbiogICAgICAgb24gMTIvMjIvMTQuXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdTcGF0aWFsVmlld2VyJykuZmFjdG9yeSgnSW5kaWFGYWN0b3J5JywgZnVuY3Rpb24gKCRodHRwKSB7XG5cbiAgICB2YXIgc2VydmljZSA9IHt9O1xuXG4gICAgc2VydmljZS5Db25maWdEYXRhID0ge1xuICAgICAgICBDT01NRVJDSUFMX0JBTktTOiBbXG4gICAgICAgICAgICBcIkFsbGFoYWJhZCBCYW5rXCIsXG4gICAgICAgICAgICBcIkFsbGFoYWJhZCBVUCBHcmFtaW4gQmFua1wiLFxuICAgICAgICAgICAgXCJBbW1jbyBCYW5rXCIsXG4gICAgICAgICAgICBcIkFuZGhyYSBCYW5rXCIsXG4gICAgICAgICAgICBcIkFyeWFuIENvb3BlcmF0aXZlIEJhbmtcIixcbiAgICAgICAgICAgIFwiQXJ5YXZhcnQgR3JhbWluIEJhbmtcIixcbiAgICAgICAgICAgIFwiQXhpcyBCYW5rXCIsXG4gICAgICAgICAgICBcIkJhbmsgb2YgQmFyb2RhXCIsXG4gICAgICAgICAgICBcIkJhbmsgb2YgSW5kaWFcIixcbiAgICAgICAgICAgIFwiQmFuayBvZiBNYWhhcmFzaHRyYVwiLFxuICAgICAgICAgICAgXCJCYXJvZGEgVXR0YXIgUHJhZGVzaCBHcmFtaW4gQmFua1wiLFxuICAgICAgICAgICAgXCJCaGFydGl5YSBLaGFzIGFuZCBCYWNoYXQgTHRkXCIsXG4gICAgICAgICAgICBcIkJodW1pIFZpa2FzIEJhbmtcIixcbiAgICAgICAgICAgIFwiQmloYXIgR3JhbWluIEJhbmtcIixcbiAgICAgICAgICAgIFwiQm9tYmF5IE1lcmNhbnRpbGUgQ29vcGVyYXRpdmUgQmFua1wiLFxuICAgICAgICAgICAgXCJCcmFobWF2YXJ0IEJhbmtcIixcbiAgICAgICAgICAgIFwiQ2FuYXJhIEJhbmtcIixcbiAgICAgICAgICAgIFwiQ2F0aG9saWMgU3lyaWFuIEJhbmsgTHRkLlwiLFxuICAgICAgICAgICAgXCJDZW50cmFsIEJhbmsgb2YgSW5kaWFcIixcbiAgICAgICAgICAgIFwiQ2VudHJhbCBDb29wZXJhdGl2ZSBCYW5rXCIsXG4gICAgICAgICAgICBcIkNpdGliYW5rXCIsXG4gICAgICAgICAgICBcIkNpdGl6ZW4gQ29vcGVyYXRpdmUgQmFua1wiLFxuICAgICAgICAgICAgXCJDaXR5IFVuaW9uIEJhbmsgTHRkLlwiLFxuICAgICAgICAgICAgXCJDb3Jwb3JhdGlvbiBCYW5rXCIsXG4gICAgICAgICAgICBcIkRlbmEgQmFua1wiLFxuICAgICAgICAgICAgXCJEZXV0c2NoZSBCYW5rIEFHXCIsXG4gICAgICAgICAgICBcIkRldmVsb3BtZW50IEJhbmsgb2YgU2luZ2Fwb3JlXCIsXG4gICAgICAgICAgICBcIkRldmVsb3BtZW50IENvb3BlcmF0aXZlIEJhbmtcIixcbiAgICAgICAgICAgIFwiR3Vsc2hhbiBNZXJjYW50aWxlIFVyYmFuIGNvb3BlcmF0aXZlIEJhbmsgTHRkLlwiLFxuICAgICAgICAgICAgXCJIQ0JMIEJhbmtcIixcbiAgICAgICAgICAgIFwiSERGQ1wiLFxuICAgICAgICAgICAgXCJJQ0lDSSBCYW5rXCIsXG4gICAgICAgICAgICBcIklEQkkgQmFuayBMaW1pdGVkXCIsXG4gICAgICAgICAgICBcIkluZGlhbiBCYW5rXCIsXG4gICAgICAgICAgICBcIkluZGlhbiBNZXJjYW50aWxlIENvb3BlcmF0aXZlIEJhbmtcIixcbiAgICAgICAgICAgIFwiSW5kaWFuIE92ZXJzZWFzIEJhbmtcIixcbiAgICAgICAgICAgIFwiSW5kdXNJbmQgQmFuayBMaW1pdGVkXCIsXG4gICAgICAgICAgICBcIklORyBWeXN5YSBCYW5rXCIsXG4gICAgICAgICAgICBcIkthcm5hdGFrYSBCYW5rXCIsXG4gICAgICAgICAgICBcIkthcnVyIFZ5c3lhIEJhbmsgTGltaXRlZC5cIixcbiAgICAgICAgICAgIFwiS2FzaGkgR29tdGkgU2FueXVrdCBHcmFtaW4gQmFua1wiLFxuICAgICAgICAgICAgXCJLb3RhayBNYWhpbmRyYSBCYW5rIExpbWl0ZWRcIixcbiAgICAgICAgICAgIFwiS3NoZXRyaXlhIEdyYW1pbiBCYW5rXCIsXG4gICAgICAgICAgICBcIkxha3NobWkgVmlsYXMgQmFua1wiLFxuICAgICAgICAgICAgXCJNYWRoeWEgQmloYXIgR3JhbWluIEJhbmtcIixcbiAgICAgICAgICAgIFwiTWFoYW1lZGhhIEJhbmtcIixcbiAgICAgICAgICAgIFwiTm9iZWwgQ29vcGVyYXRpdmUgQmFua1wiLFxuICAgICAgICAgICAgXCJOb2lkYSBDb21tZXJjaWFsIENvb3BlcmF0aXZlIEJhbmtcIixcbiAgICAgICAgICAgIFwiT05TIEJhbmtcIixcbiAgICAgICAgICAgIFwiT3JpZW50YWwgQmFuayBvZiBDb21tZXJjZVwiLFxuICAgICAgICAgICAgXCJQQUNTIENvb3BlcmF0aXZlIEJhbmtcIixcbiAgICAgICAgICAgIFwiUHJhdGhhbWEgQmFua1wiLFxuICAgICAgICAgICAgXCJQcmltYXJ5IENvb3BlcmF0aXZlIEJhbmtcIixcbiAgICAgICAgICAgIFwiUHVuamFiICYgU2luZCBCYW5rXCIsXG4gICAgICAgICAgICBcIlB1bmphYiBOYXRpb25hbCBCYW5rXCIsXG4gICAgICAgICAgICBcIlB1cnZhbmNoYWwgQmFua1wiLFxuICAgICAgICAgICAgXCJSTUJJTCBRdWFzaSBCYW5rXCIsXG4gICAgICAgICAgICBcIlJvc2UgVmFsbGV5IEJhbmtcIixcbiAgICAgICAgICAgIFwiU2FydmEgVVAgR3JhbWluIEJhbmtcIixcbiAgICAgICAgICAgIFwiU2hpdmFsaWsgQmFua1wiLFxuICAgICAgICAgICAgXCJTaHJleWFzIEdyYW1pbiBCYW5rXCIsXG4gICAgICAgICAgICBcIlNJREJJXCIsXG4gICAgICAgICAgICBcIlN0YW5kYXJkIENoYXJ0ZXJlZCBCYW5rXCIsXG4gICAgICAgICAgICBcIlN0YXRlIEJhbmsgb2YgQmlrYW5lciBhbmQgSmFpcHVyXCIsXG4gICAgICAgICAgICBcIlN0YXRlIEJhbmsgb2YgSHlkZXJhYmFkXCIsXG4gICAgICAgICAgICBcIlN0YXRlIEJhbmsgb2YgSW5kaWFcIixcbiAgICAgICAgICAgIFwiU3RhdGUgQmFuayBvZiBNeXNvcmVcIixcbiAgICAgICAgICAgIFwiU3RhdGUgQmFuayBvZiBQYXRpYWxhXCIsXG4gICAgICAgICAgICBcIlN0YXRlIEJhbmsgb2YgVHJhdmFuY29yZVwiLFxuICAgICAgICAgICAgXCJTeW5kaWNhdGUgQmFua1wiLFxuICAgICAgICAgICAgXCJUYW1pbG5hZCBNZXJjYW50aWxlIEJhbmsgTHRkLlwiLFxuICAgICAgICAgICAgXCJUaGUgRGhhbmFsYWtzaG1pIEJhbmsgTGltaXRlZC5cIixcbiAgICAgICAgICAgIFwiVGhlIEZlZGVyYWwgQmFuayBMdGQuXCIsXG4gICAgICAgICAgICBcIlRoZSBKYW1tdSAmIEthc2htaXIgQmFuayBMdGQuXCIsXG4gICAgICAgICAgICBcIlRoZSBOYWluaXRhbCBCYW5rIEx0ZC5cIixcbiAgICAgICAgICAgIFwiVGhlIE5ldyBVcmJhbiBDb29wZXJhdGl2ZSBCYW5rXCIsXG4gICAgICAgICAgICBcIlRoZSBSYXRuYWthciBCYW5rIEx0ZC5cIixcbiAgICAgICAgICAgIFwiVGhlIFJveWFsIEJhbmsgb2YgU2NvdGxhbmQgTi5WLlwiLFxuICAgICAgICAgICAgXCJUaGUgU291dGggSW5kaWFuIEJhbmsgTHRkLlwiLFxuICAgICAgICAgICAgXCJUaGUgVlNWIENvb3BlcmF0aXZlIEJhbmtcIixcbiAgICAgICAgICAgIFwiVHVsc2kgR3JhbWluIEJhbmtcIixcbiAgICAgICAgICAgIFwiVUNDIEJhbmtcIixcbiAgICAgICAgICAgIFwiVUNPIEJhbmtcIixcbiAgICAgICAgICAgIFwiVW5pb24gQmFuayBvZiBJbmRpYVwiLFxuICAgICAgICAgICAgXCJVbml0ZWQgQmFuayBvZiBJbmRpYVwiLFxuICAgICAgICAgICAgXCJVbml0ZWQgSW5kaWEgQ29vcGVyYXRpdmUgQmFua1wiLFxuICAgICAgICAgICAgXCJVbml0ZWQgTWVyY2FudGlsZSBDby1vcCBCYW5rIEx0ZC5cIixcbiAgICAgICAgICAgIFwiVVAgQWdybyBDb29wZXJhdGlvbiBCYW5rXCIsXG4gICAgICAgICAgICBcIlVyYmFuIENvb3BlcmF0aXZlIEJhbmtcIixcbiAgICAgICAgICAgIFwiVXR0YXIgQmloYXIgR3JhbWluIEJhbmtcIixcbiAgICAgICAgICAgIFwiVXR0YXIgUHJhZGVzaCBDb29wZXJhdGl2ZSBCYW5rXCIsXG4gICAgICAgICAgICBcIlV0dGFyIFByYWRlc2ggR3JhbWluIEJhbmtcIixcbiAgICAgICAgICAgIFwiVXR0YXIgUHJhZGVzaCBTYWhrYXJpIEdyYW0gVmlrYXMgQmFua1wiLFxuICAgICAgICAgICAgXCJWaWpheWEgQmFua1wiLFxuICAgICAgICAgICAgXCJZZXMgQmFua1wiLFxuICAgICAgICAgICAgXCJaaWxhIFNhaGthcmkgQmFuayAvIERpc3RyaWN0IENvb3BlcmF0aXZlIEJhbmtcIlxuICAgICAgICBdLFxuICAgICAgICBCQU5LX0FHRU5UUzogW1xuICAgICAgICAgICAgXCJBIExpdHRsZSBXb3JsZCAvIFplcm8gTWFzcyBGb3VuZGF0aW9uXCIsXG4gICAgICAgICAgICBcIkFpcnRlbFwiLFxuICAgICAgICAgICAgXCJDYXNocG9yXCIsXG4gICAgICAgICAgICBcIkNET1RcIixcbiAgICAgICAgICAgIFwiQ29yb21hbmRlbFwiLFxuICAgICAgICAgICAgXCJFa29cIixcbiAgICAgICAgICAgIFwiRmlub1wiLFxuICAgICAgICAgICAgXCJHVElEU1wiLFxuICAgICAgICAgICAgXCJIQ0wgSW5mb3N5c3RlbXNcIixcbiAgICAgICAgICAgIFwiSWRlYVwiLFxuICAgICAgICAgICAgXCJJbmRlcGF5IG5ldHdvcmtzXCIsXG4gICAgICAgICAgICBcIkludGVncmFcIixcbiAgICAgICAgICAgIFwiT3hpZ2VuXCIsXG4gICAgICAgICAgICBcIlNhbmplZXZhbmlcIixcbiAgICAgICAgICAgIFwiU0FWRVwiLFxuICAgICAgICAgICAgXCJTSUdOXCIsXG4gICAgICAgICAgICBcIlNyZWkgU2FoYWpcIixcbiAgICAgICAgICAgIFwiU3ViLUtcIixcbiAgICAgICAgICAgIFwiVmlzaW9uIEluZGlhXCIsXG4gICAgICAgICAgICBcIlZvZGFmb25lXCJcbiAgICAgICAgXSxcbiAgICAgICAgTU9CSUxFX1BST1ZJREVSUzogW1xuXG4gICAgICAgIF0sXG4gICAgICAgIE1PTkVZX1RSQU5TRkVSX1NFUlZJQ0U6IFtcblxuICAgICAgICBdLFxuICAgICAgICBNRVRBREFUQTogW1xuICAgICAgICAgICAgXCI8c3Ryb25nPkZpbmFuY2lhbCBzZXJ2aWNlIGxvY2F0aW9uczo8L3N0cm9uZz4gQnJhbmQgRnVzaW9uLCBBdWd1c3QgMjAxNC4mbmJzcDs8YSBocmVmPSdodHRwOi8vd3d3LmJyYW5kZnVzaW9uLWFmcmljYS5jb20vJyAgdGFyZ2V0PSdfYmxhbms7Jz5CcmFuZCBGdXNpb24gd2Vic2l0ZTwvYT5cIixcbiAgICAgICAgICAgIFwiPHN0cm9uZz5Nb2JpbGUgQ292ZXJhZ2U6PC9zdHJvbmc+IENvbGxpbnMgQmFydGhvbG9tZXcgYW5kIEdTTUEsIChIYXJwZXJDb2xsaW5zIFB1Ymxpc2hlciwgRGVjIDIwMTIpXCIsXG4gICAgICAgICAgICBcIjxzdHJvbmc+UG9wdWxhdGlvbjo8L3N0cm9uZz4gVGF0ZW0gQUouIEFmcmlwb3AgRGF0YSAyMDEyLiBHYWluZXN2aWxsZSwgVW5pdGVkIFN0YXRlczogRW1lcmdpbmcgUGF0aG9nZW5zIEluc3RpdHV0ZSwgVW5pdmVyc2l0eSBvZiBGbG9yaWRhLiZuYnNwOzxhIGhyZWY9J2h0dHA6Ly93d3cuYWZyaXBvcC5vcmcvJyB0YXJnZXQ9J19ibGFuayc+QWZyaXBvcCBXZWJzaXRlPC9hPlwiLFxuICAgICAgICAgICAgXCI8c3Ryb25nPlVyYmFuIEFyZWFzOjwvc3Ryb25nPiBHbG9iYWwgUnVyYWwtVXJiYW4gTWFwcGluZyBQcm9qZWN0IChHUlVNUCksIENlbnRlciBmb3IgSW50ZXJuYXRpb25hbCBFYXJ0aCBTY2llbmNlIEluZm9ybWF0aW9uIE5ldHdvcmsgKENJRVNJTiksIENlbnRybyBJbnRlcm5hY2lvbmFsIGRlIEFncmljdWx0dXJhIFRyb3BpY2FsIChDSUFUKSwgMjAwNS4gIFBhbGlzYWRlcywgTlk6IENJRVNJTiwgQ29sdW1iaWEgVW5pdmVyc2l0eS4mbmJzcDs8YSBocmVmPSdodHRwOi8vc2VkYWMuY2llc2luLmNvbHVtYmlhLmVkdS9kYXRhL2NvbGxlY3Rpb24vZ3J1bXAtdjEnIHRhcmdldD0nX2JsYW5rJz5HUlVNUCBXZWJzaXRlPC9hPlwiXG4gICAgICAgIF0sXG4gICAgICAgIEhFWEJJTkRFU0NSSVBUSU9OOiBbXG4gICAgICAgICAgICBcIjxzdHJvbmc+TWV0aG9kb2xvZ3k8L3N0cm9uZz48cD5BcHByb3hpbWF0ZWx5IDEwS20gSGV4YWdvbmFsIEdyaWRjZWxscyAoSGV4Ymlucykgd2VyZSBjcmVhdGVkIGZvciB7eH0uICBGb3IgZWFjaCBIZXhiaW4gYXJlYSwgd2Ugc3VtbWVkIHVwIHRoZSB0b3RhbCBudW1iZXIgb2YgYWNjZXNzIHBvaW50cywgYW5kIGRpdmlkZWQgdGhhdCBudW1iZXIgYnkgdGhlIHRvdGFsIHBvcHVsYXRpb24gb2YgdGhlIEhleGJpbiAoYmFzZWQgb24gdGhlIEFmcmlwb3AgZGF0YXNldCkuIFRvIG1ha2UgdGhlIHZhbHVlcyBwZXIgY2FwaXRhLCBlYWNoIHZhbHVlIHdhcyBtdWx0aXBsaWVkIGJ5IDEwLDAwMC4gIFRoaXMgcmVzdWx0cyBpbiB0aGUgbnVtYmVyIG9mIGFjY2VzcyBwb2ludHMgcGVyIDEwLDAwMCBwZW9wbGUuICBXZSB0aGVuIGdyb3VwZWQgdGhlIHJlc3VsdGluZyByYXRpb3MgaW50byAzIGNsYXNzZXMsIGRlc2NyaWJlZCBiZWxvdy48L3A+PHN0cm9uZz5DbGFzc2lmaWNhdGlvbjwvc3Ryb25nPjxwPjx1bD48bGk+PGRpdiBjbGFzcz0nbGVmdCBIZXhjb2xvckJhclN3YXRjaCBncmVlbic+PC9kaXY+PGRpdiBjbGFzcz0nY2xhc3NpZmljYXRpb25UZXh0Jz5IaTogOCB0byAyNTA8L2Rpdj48L2xpPjxsaT48ZGl2IGNsYXNzPSdsZWZ0IEhleGNvbG9yQmFyU3dhdGNoIHllbGxvdyc+PC9kaXY+PGRpdiBjbGFzcz0nY2xhc3NpZmljYXRpb25UZXh0Jz5NZWQ6IDIuNSB0byA4PC9kaXY+PC9saT48bGk+PGRpdiBjbGFzcz0nbGVmdCBIZXhjb2xvckJhclN3YXRjaCByZWQnPjwvZGl2PjxkaXYgY2xhc3M9J2NsYXNzaWZpY2F0aW9uVGV4dCc+TG86IDAuMiB0byAyLjU8L2Rpdj48L2xpPjwvcD5cIlxuICAgICAgICBdLFxuICAgICAgICBDSUNPX0RBVEU6IFwiRmluYW5jaWFsIFNlcnZpY2UgTG9jYXRpb25zIGNvbGxlY3RlZCBTdW1tZXIgMjAxNFwiXG4gICAgfTtcbiAgICBzZXJ2aWNlLkluZGlhID0ge1xuICAgICAgICBjaWNvVVJMOiAnaHR0cDovL3NwYXRpYWxzZXJ2ZXIuc3BhdGlhbGRldi5jb20vc2VydmljZXMvdGFibGVzL3Z3X2luZGlhX2NpY29zL3F1ZXJ5JyxcbiAgICAgICAgbGlicmFyeVVSTDogJ2h0dHA6Ly9zcGF0aWFsc2VydmVyLnNwYXRpYWxkZXYuY29tL3NlcnZpY2VzL3RhYmxlcy92d19pbmRpYV9saWJyYXJpZXMvcXVlcnknLFxuICAgICAgICBoZWFsdGhVUkw6ICdodHRwOi8vc3BhdGlhbHNlcnZlci5zcGF0aWFsZGV2LmNvbS9zZXJ2aWNlcy90YWJsZXMvdndfaW5kaWFfaGVhbHRoL3F1ZXJ5JyxcbiAgICAgICAgYWdyaWN1bHR1cmVVUkw6ICdodHRwOi8vc3BhdGlhbHNlcnZlci5zcGF0aWFsZGV2LmNvbS9zZXJ2aWNlcy90YWJsZXMvdndfaW5kaWFfYWcvcXVlcnknLFxuXG4gICAgICAgIENpY29CbGFzdFVSTDogXCJzY3JpcHRzL2RhdGFibGFzdHMvS2VueWFfQ2ljb3MuZ2VvanNvblwiLFxuICAgICAgICBDb3VudHNCbGFzdFVSTDogXCJzY3JpcHRzL2RhdGFibGFzdHMvSW5kaWFfQ2ljb19Db3VudC5qc29uXCIsXG4gICAgICAgIGRyb3BQb2ludFVSTDogJ2h0dHA6Ly9zcGF0aWFsc2VydmVyLnNwYXRpYWxkZXYuY29tL3NlcnZpY2VzL3RhYmxlcy97dGFibGV9L3Jhc3Rlck9wcy96b25hbHN0YXRpc3RpY3MnLFxuICAgICAgICBhY2Nlc3NTdGF0c1VSTDogJ2h0dHA6Ly9zcGF0aWFsc2VydmVyLnNwYXRpYWxkZXYuY29tL3NlcnZpY2VzL2dlb3Byb2Nlc3NpbmcvZ2VvcHJvY2Vzc2luZ19vcGVyYXRpb24nLFxuICAgICAgICBwb3B1bGF0aW9uX3Jhc3Rlcl90YWJsZTogXCJpbmRpYV9wb3B1bGF0aW9uX3Jhc3RlclwiLFxuICAgICAgICBMaWJyYXJ5Qmxhc3RVUkw6IFwic2NyaXB0cy9kYXRhYmxhc3RzL0luZGlhX0xpYnJhcnlfQ291bnQuanNvblwiLFxuICAgICAgICBIZWFsdGhCbGFzdFVSTDogXCJzY3JpcHRzL2RhdGFibGFzdHMvSW5kaWFfSGVhbHRoX0NvdW50Lmpzb25cIixcbiAgICAgICAgQWdnQmxhc3RVUkw6IFwic2NyaXB0cy9kYXRhYmxhc3RzL0luZGlhX0FncmljdWx0dXJlX0NvdW50Lmpzb25cIixcblxuICAgICAgICBCYXNlTGF5ZXJzOiBudWxsLFxuICAgICAgICBoYXNQb3ZlcnR5RGF0YTogZmFsc2UsXG4gICAgICAgIENJQ09GaWVsZHM6IFtcIkZlYXR1cmVUeXBlXCIsIFwiU2hyQWd0XCIsIFwiUHJ2ZFwiLCBcIlBob3Rvc1wiXSxcbiAgICAgICAgRmVhdHVyZUxheWVyczoge30sXG4gICAgICAgIEFuYWx5c2lzTGF5ZXJzOiBbXSxcbiAgICAgICAgXCJDb21tZXJjaWFsIEJhbmtcIjoge1xuICAgICAgICAgICAgXCJGaWx0ZXJzXCI6IFt7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJkYXRhXCI6IHNlcnZpY2UuQ29uZmlnRGF0YS5DT01NRVJDSUFMX0JBTktTXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgICAgICAnQmFuayBBZ2VudCc6IHtcbiAgICAgICAgICAgIFwiRmlsdGVyc1wiOiBbe1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBzZXJ2aWNlLkNvbmZpZ0RhdGEuQkFOS19BR0VOVFNcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sXG4gICAgICAgICdNb2JpbGUgTW9uZXkgQWdlbnQnOiB7XG4gICAgICAgICAgICBcIkZpbHRlcnNcIjogW3tcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcImRhdGFcIjogc2VydmljZS5Db25maWdEYXRhLk1PQklMRV9QUk9WSURFUlNcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sXG4gICAgICAgICdNb25leSBUcmFuc2ZlciBTZXJ2aWNlJzoge1xuICAgICAgICAgICAgXCJGaWx0ZXJzXCI6IFt7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJkYXRhXCI6IHNlcnZpY2UuQ29uZmlnRGF0YS5NT05FWV9UUkFOU0ZFUl9TRVJWSUNFXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgICAgICBRdWlja1N0YXRzOiB7XG4gICAgICAgICAgICB0b3RhbFBvcHVsYXRpb246IDI5OTkzMTEyNixcbiAgICAgICAgICAgIHVyYmFuUGN0OiAuMDg3LFxuICAgICAgICAgICAgcnVyYWxQY3Q6IC45MTMsXG4gICAgICAgICAgICB3aXRoaW41S206IC45MjAxLFxuICAgICAgICAgICAgcnVyYWxwb3A6IDI3MzgzMDkwMSxcbiAgICAgICAgICAgIHVyYmFucG9wOiAyNjEwMDIyNVxuICAgICAgICB9LCBNYXBDZW50ZXI6IHtcbiAgICAgICAgICAgIExhdGl0dWRlOiAyNixcbiAgICAgICAgICAgIExvbmdpdHVkZTogODVcbiAgICAgICAgfSxcbiAgICAgICAgTWFwWm9vbTogNixcbiAgICAgICAgSVNPMzogJ2luZCcsXG4gICAgICAgIEJhc2VMYXllckxpc3Q6IHtcbiAgICAgICAgICAgICdVcmJhbiBBcmVhcyc6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogbnVsbCxcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVuY3k6IDAuNSxcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cDovL3RpbGVzLmZzcG1hcHMuY29tL3YyL2tlbnlhX3VyYmFuYXJlYXMve3p9L3t4fS97eX0ucG5nXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnUG9wdWxhdGlvbic6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogbnVsbCxcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVuY3k6IDAuNSxcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogXCJodHRwOi8vdGlsZXMuZnNwbWFwcy5jb20vdjIva2VueWFwb3Ave3p9L3t4fS97eX0ucG5nXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnQ2VsbCBDb3ZlcmFnZSc6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogbnVsbCxcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVuY3k6IDAuNSxcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cDovL3RpbGVzLmZzcG1hcHMuY29tL3YyL2tlbnlhX2NlbGxjb3ZlcmFnZS97en0ve3h9L3t5fS5wbmdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdDb3VudGllcyc6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogbnVsbCxcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVuY3k6IDAuNSxcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogXCJodHRwOi8vdGlsZXMuZnNwbWFwcy5jb20vdjIva2VueWFfY291bnRpZXMyMDE0XzM3ZDU5MS97en0ve3h9L3t5fS5wbmdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdEaXN0YW5jZSB0byBDSUNPJzoge1xuICAgICAgICAgICAgICAgIGluZGV4OiBudWxsLFxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW5jeTogMSxcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cDovL3RpbGVzLmZzcG1hcHMuY29tL3YyL0tFTl9lZC97en0ve3h9L3t5fS5wbmdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdBY2Nlc3MgcGVyIGNhcGl0YSc6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogbnVsbCxcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVuY3k6IDEsXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly90aWxlcy5mc3BtYXBzLmNvbS92Mi9rZW55YV9oZXhiaW5zL3t6fS97eH0ve3l9LnBuZ1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNlcnZpY2UuSW5kaWEuUXVpY2tTdGF0c1tcInRvdHBvcDVrbVwiXSA9IChzZXJ2aWNlLkluZGlhLlF1aWNrU3RhdHMud2l0aGluNUttICogc2VydmljZS5JbmRpYS5RdWlja1N0YXRzLnRvdGFsUG9wdWxhdGlvbik7XG5cbiAgICAvLyRodHRwLmdldCgnZGF0YS9jb3VudHJ5ZGF0YS9JbmRpYS5qc29uJykuXG4gICAgLy8gICAgICAgIHN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgIC8vICAgICAgICAgICAgc2VydmljZS5JbmRpYSA9IGRhdGE7XG4gICAgLy8gICAgICAgIH0pLlxuICAgIC8vICAgICAgICBlcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgLy8gICAgICAgICAgICBhbGVydChkYXRhKTtcbiAgICAvLyAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gc2VydmljZTtcblxuICAgICAgICB9KTtcblxuIiwiXG4vKipcbiAqIENyZWF0ZWQgYnkgRGFuaWVsIEJhYWggPGRiYWFoQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMTIvMjIvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnU3BhdGlhbFZpZXdlcicpLmZhY3RvcnkoJ0tlbnlhRmFjdG9yeScsIGZ1bmN0aW9uICgkaHR0cCkge1xuXG4gICAgdmFyIHNlcnZpY2UgPSB7fTtcbiAgICB2YXIgQ0lDT19Db25maWcgPSB7XG4gICAgICAgICdPZmZzaXRlIEFUTXMnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyNhNGM3OGMnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnT2Zmc2l0ZSBBVE0nLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA2XG4gICAgICAgIH0sXG4gICAgICAgICdCYW5rIEJyYW5jaGVzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjOTc3QzAwJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ0JhbmsgQnJhbmNoJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNVxuICAgICAgICB9LFxuICAgICAgICAnTUZJcyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzk3N2MwMCcsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdNRkknLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA3XG4gICAgICAgIH0sXG4gICAgICAgICdTQUNDT3MnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyNjZjhhNTcnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnU0FDQ08nLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiAxMFxuICAgICAgICB9LFxuICAgICAgICAnTW9iaWxlIE1vbmV5IEFnZW50Jzoge1xuICAgICAgICAgICAgY29sb3I6ICcjOENCN0M3JyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ01vYmlsZSBNb25leSBBZ2VudCcsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IC0xXG4gICAgICAgIH0sXG4gICAgICAgICdNRElzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjODI1RDk5JyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ01ESScsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDZcbiAgICAgICAgfSxcbiAgICAgICAgJ0NyZWRpdCBJbnN0aXR1dGlvbic6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzZDQTc2QicsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdDcmVkaXQgSW5zdGl0dXRpb24nLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA1XG4gICAgICAgIH0sXG4gICAgICAgICdNRkJzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjODI1RDk5JyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ01GQicsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDdcbiAgICAgICAgfSxcbiAgICAgICAgJ01vdG9yIFBhcmtzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjYmQ4NWIzJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ01vdG9yIFBhcmtzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogN1xuICAgICAgICB9LFxuICAgICAgICAnTW9iaWxlIE5ldHdvcmsgT3BlcmF0b3IgT3V0bGV0cyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2EyYTJhMicsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdNb2JpbGUgTmV0d29yayBPcGVyYXRvciBPdXRsZXRzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogMFxuICAgICAgICB9LFxuICAgICAgICAnUG9zdCBPZmZpY2VzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjRkZGRjAwJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ1Bvc3QgT2ZmaWNlcycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDRcbiAgICAgICAgfSxcbiAgICAgICAgJ1Bvc3QgT2ZmaWNlJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjODBhZDdiJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ1Bvc3QgT2ZmaWNlcycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDZcbiAgICAgICAgfSxcbiAgICAgICAgJ0J1cyBTdGFuZCc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzgwYWQ3YicsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdCdXMgU3RhbmRzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNlxuICAgICAgICB9LFxuICAgICAgICAnQnVzIFN0YW5kcyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzgwYWQ3YicsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdCdXMgU3RhbmRzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vS2VueWFcbiAgICAgICAgJ0luc3VyYW5jZSBQcm92aWRlcnMnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyMzMDg2QUInLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnSW5zdXJhbmNlIHByb3ZpZGVycycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDZcbiAgICAgICAgfSxcbiAgICAgICAgJ01vbmV5IFRyYW5zZmVyIFNlcnZpY2UnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM5NzdDMDAnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnTW9uZXkgVHJhbnNmZXIgU2VydmljZScsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDZcbiAgICAgICAgfSxcbiAgICAgICAgJ0RldiBGaW5hbmNlJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjOUIyNDJEJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ0RldiBGaW5hbmNlJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNlxuICAgICAgICB9LFxuICAgICAgICAnRm9yZXggQnVyZWF1cyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2NmOGE1NycsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdGb3JleCBCdXJlYXVzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNlxuICAgICAgICB9LFxuICAgICAgICAnQ2FwIE1hcmtldHMnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM4MjVEOTknLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnQ2FwIE1hcmtldHMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA2XG4gICAgICAgIH0sXG4gICAgICAgICdQZW5zaW9uIFByb3ZpZGVycyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2EyYTJhMicsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdQZW5zaW9uIHByb3ZpZGVycycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDZcbiAgICAgICAgfSxcbiAgICAgICAgJ1B1cmNoYXNlIExlYXNlIEZhY3RvcmluZyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzgwYWQ3YicsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdQdXJjaGFzZSBMZWFzZSBGYWN0b3JpbmcnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA2XG4gICAgICAgIH0sXG4gICAgICAgICdCYW5rIEFnZW50Jzoge1xuICAgICAgICAgICAgY29sb3I6ICcjODBhZDdiJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ0JhbmsgQWdlbnQnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA2XG4gICAgICAgIH0sXG4gICAgICAgICdCYW5rIGFuZCBNb3J0Z2FnZSc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzgwYWQ3YicsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdCYW5rcyBhbmQgTW9ydGdhZ2UnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA2XG4gICAgICAgIH0sXG4gICAgICAgICdDb21tZXJjaWFsIEJhbmsnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM5YjI0MmQnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnQ29tbWVyY2lhbCBCYW5rJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogM1xuICAgICAgICB9LFxuXG4gICAgICAgICdQb3N0QmFuayc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2JkODViMycsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdQb3N0IEJhbmsnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA2XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy9OaWdlcmlhIE5ldyBQb3N0IE9mZmljZXNcbiAgICAgICAgJ05JUE9TVCBQb3N0IE9mZmljZSc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzgwYWQ3YicsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdOSVBPU1QgUG9zdCBPZmZpY2VzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNlxuICAgICAgICB9LFxuICAgICAgICAnTklQT1NUIFBvc3QgU2hvcCc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzgwYWQ3YicsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdOSVBPU1QgUG9zdCBTaG9wcycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDZcbiAgICAgICAgfSxcbiAgICAgICAgJ05JUE9TVCBQb3N0YWwgQWdlbmN5Jzoge1xuICAgICAgICAgICAgY29sb3I6ICcjODBhZDdiJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ05JUE9TVCBQb3N0YWwgQWdlbmNpZXMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA2XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy9JbmRpYVxuICAgICAgICAnUG9zdGFsIE91dGxldHMnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyNjZTZiMjknLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnUG9zdGFsIE91dGxldHMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiAzXG4gICAgICAgIH0sXG4gICAgICAgICdDb21tZXJjaWFsIEJhbmtzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjMzA4NmFiJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ0NvbW1lcmNpYWwgQmFua3MnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiAyXG4gICAgICAgIH0sXG4gICAgICAgICdCYW5rIEN1c3RvbWVyIFNlcnZpY2UgUG9pbnRzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjOWIyNDJkJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ0JhbmsgQ3VzdG9tZXIgU2VydmljZSBQb2ludHMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA0XG4gICAgICAgIH0sXG4gICAgICAgICdEaXN0cmljdCc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzliMjQyZCcsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdEaXN0cmljdCcsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDZcbiAgICAgICAgfSxcbiAgICAgICAgJ1ByaXZhdGUgTGlicmFyeSc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzMwODZhYicsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdQcml2YXRlIExpYnJhcnknLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA1XG4gICAgICAgIH0sXG4gICAgICAgICdQdWJsaWMgTGlicmFyeSc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzk3N2MwMCcsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdQdWJsaWMgTGlicmFyeScsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDdcbiAgICAgICAgfSxcbiAgICAgICAgJ1ZpbGxhZ2UnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyNhNGM3OGMnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnVmlsbGFnZScsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDRcbiAgICAgICAgfSxcbiAgICAgICAgJ0FkZGl0aW9uYWwgUHJpbWFyeSBIZWFsdGggQ2VudHJlcyAoQVBIQyknOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM5YjI0MmQnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnQWRkaXRpb25hbCBQcmltYXJ5IEhlYWx0aCBDZW50cmVzIChBUEhDKScsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDZcbiAgICAgICAgfSxcbiAgICAgICAgJ0FOTSBvciBEaXN0cmljdCBUcmFpbmluZyBDZW50cmVzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjMzA4NmFiJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ0FOTSBvciBEaXN0cmljdCBUcmFpbmluZyBDZW50cmVzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNVxuICAgICAgICB9LFxuICAgICAgICAnQXBwcm92ZWQgTnVyc2luZyBUcmFpbmluZyBDZW50cmVzIChQcml2YXRlIFNlY3RvciknOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM5NzdjMDAnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnQXBwcm92ZWQgTnVyc2luZyBUcmFpbmluZyBDZW50cmVzIChQcml2YXRlIFNlY3RvciknLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA3XG4gICAgICAgIH0sXG4gICAgICAgICdDb21tdW5pdHkgSGVhbHRoIENlbnRyZSAoQ0hDKS9GaXJzdCBSZWZlcnJhbCBVbml0cyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2Q1Y2I5OCcsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdDb21tdW5pdHkgSGVhbHRoIENlbnRyZSAoQ0hDKS9GaXJzdCBSZWZlcnJhbCBVbml0cycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDRcbiAgICAgICAgfSxcbiAgICAgICAgJ0Rpc3RyaWN0IEhvc3BpdGFscyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2NlNmIyOScsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdEaXN0cmljdCBIb3NwaXRhbHMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA1XG4gICAgICAgIH0sXG4gICAgICAgICdNZWRpY2FsIENvbGxlZ2VzIGFuZCBIb3NwaXRhbHMnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM1OTQ1MmEnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnTWVkaWNhbCBDb2xsZWdlcyBhbmQgSG9zcGl0YWxzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogN1xuICAgICAgICB9LFxuICAgICAgICAnUHJpbWFyeSBIZWFsdGggQ2VudHJlIChQSEMpJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjOGNiN2M3JyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ1ByaW1hcnkgSGVhbHRoIENlbnRyZSAoUEhDKScsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDRcbiAgICAgICAgfSxcbiAgICAgICAgJ1ByaXZhdGUgaG9zcGl0YWxzIGFuZCBjbGluaWNzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjZDA5OGQ1JyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ1ByaXZhdGUgaG9zcGl0YWxzIGFuZCBjbGluaWNzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNVxuICAgICAgICB9LFxuICAgICAgICAnU3ViIERpdmlzaW9uYWwgRGlzdHJpY3QgSG9zcGl0YWxzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjYTRjNzhjJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ1N1YiBEaXZpc2lvbmFsIERpc3RyaWN0IEhvc3BpdGFscycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDdcbiAgICAgICAgfSxcbiAgICAgICAgJ1N1YiBIZWFsdGggQ2VudHJlcyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2Q1OTg5OCcsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdTdWIgSGVhbHRoIENlbnRyZXMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA3XG4gICAgICAgIH0sXG4gICAgICAgICdOdXJzaW5nIFNjaG9vbHMnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM1NjdkNTQnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnTnVyc2luZyBTY2hvb2xzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNFxuICAgICAgICB9LFxuICAgICAgICAnRGFpcnkgUHJvY2Vzc29ycyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzliMjQyZCcsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdEYWlyeSBQcm9jZXNzb3JzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNlxuICAgICAgICB9LFxuICAgICAgICAnRGF5IG9sZCBjaGljayBoYXRjaGVyaWVzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjMzA4NmFiJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ0RheSBvbGQgY2hpY2sgaGF0Y2hlcmllcycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDVcbiAgICAgICAgfSxcbiAgICAgICAgJ1ByaXZhdGUgc2VjdG9yIEFncmljdWx0dXJhbCBzZXJ2aWNlIHByb3ZpZGVycyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzk3N2MwMCcsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdQcml2YXRlIHNlY3RvciBBZ3JpY3VsdHVyYWwgc2VydmljZSBwcm92aWRlcnMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA3XG4gICAgICAgIH0sXG4gICAgICAgICdHb3Zlcm5tZW50IFZldHMnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyNkNWNiOTgnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnR292ZXJubWVudCBWZXRzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNFxuICAgICAgICB9LFxuICAgICAgICAnTWFya2V0IExvY2F0aW9ucyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2NlNmIyOScsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdNYXJrZXQgTG9jYXRpb25zJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNVxuICAgICAgICB9LFxuICAgICAgICAnQWdyby1kZWFsZXJzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjNTk0NTJhJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ0Fncm8tZGVhbGVycycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDdcbiAgICAgICAgfSxcbiAgICAgICAgJ1dhcmVob3VzZS9TdG9yYWdlL0FnZ3JlZ2F0aW9uIENlbnRyZXMnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM4Y2I3YzcnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnV2FyZWhvdXNlL1N0b3JhZ2UvQWdncmVnYXRpb24gQ2VudHJlcycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDRcbiAgICAgICAgfSxcbiAgICAgICAgJ0RhaXJ5IGNoaWxsaW5nIHBsYW50cyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2QwOThkNScsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdEYWlyeSBjaGlsbGluZyBwbGFudHMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA3XG4gICAgICAgIH0sXG4gICAgICAgICdQcm9jZXNzb3JzL3ZhbHVlIGFkZGl0aW9uIHBvaW50cyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2E0Yzc4YycsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdQcm9jZXNzb3JzL3ZhbHVlIGFkZGl0aW9uIHBvaW50cycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDdcbiAgICAgICAgfSxcbiAgICAgICAgJ0Zhcm1lciBPcmdhbmlzYXRpb25zIGFuZCBDb29wZXJhdGl2ZXMnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyNkNTk4OTgnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnRmFybWVyIE9yZ2FuaXNhdGlvbnMgYW5kIENvb3BlcmF0aXZlcycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDRcbiAgICAgICAgfSxcbiAgICAgICAgJ0FydGlmaWNpYWwgSW5zZW1pbmF0aW9uIENlbnRyZXMnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM1NjdkNTQnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnQXJ0aWZpY2lhbCBJbnNlbWluYXRpb24gQ2VudHJlcycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDRcbiAgICAgICAgfSxcbiAgICAgICAgJ05hdGlvbmFsL1JlZ2lvbmFsL1N0YXRlIFJlc2VhcmNoIFN0YXRpb25zJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjYjY5ODVlJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ05hdGlvbmFsL1JlZ2lvbmFsL1N0YXRlIFJlc2VhcmNoIFN0YXRpb25zJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNVxuICAgICAgICB9LFxuICAgICAgICAnU2VlZCBNdWx0aXBsaWVycyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2ZmNWQ1ZCcsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdTZWVkIE11bHRpcGxpZXJzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogN1xuICAgICAgICB9XG5cbiAgICB9O1xuICAgIHZhciBQcm92aWRlckRhdGEgPSB7XG4gICAgICAgIFwiQ29tbWVyY2lhbCBCYW5rXCI6IFtcbiAgICAgICAgICAgIFwiQUJDIEJhbmsgKEtlbnlhKVwiLFxuICAgICAgICAgICAgXCJCYW5rIG9mIEFmcmljYVwiLFxuICAgICAgICAgICAgXCJCYW5rIG9mIEJhcm9kYVwiLFxuICAgICAgICAgICAgXCJCYW5rIG9mIEluZGlhXCIsXG4gICAgICAgICAgICBcIkJhcmNsYXlzIEJhbmtcIixcbiAgICAgICAgICAgIFwiQ0ZDIFN0YW5iaWMgQmFua1wiLFxuICAgICAgICAgICAgXCJDaGFzZSBCYW5rIChLZW55YSlcIixcbiAgICAgICAgICAgIFwiQ2l0aWJhbmtcIixcbiAgICAgICAgICAgIFwiQ29tbWVyY2lhbCBCYW5rIG9mIEFmcmljYVwiLFxuICAgICAgICAgICAgXCJDb25zb2xpZGF0ZWQgQmFuayBvZiBLZW55YVwiLFxuICAgICAgICAgICAgXCJDb29wZXJhdGl2ZSBCYW5rIG9mIEtlbnlhXCIsXG4gICAgICAgICAgICBcIkNyZWRpdCBCYW5rXCIsXG4gICAgICAgICAgICBcIkRldmVsb3BtZW50IEJhbmsgb2YgS2VueWFcIixcbiAgICAgICAgICAgIFwiRGlhbW9uZCBUcnVzdCBCYW5rXCIsXG4gICAgICAgICAgICBcIkR1YmFpIEJhbmsgS2VueWFcIixcbiAgICAgICAgICAgIFwiRWNvYmFua1wiLFxuICAgICAgICAgICAgXCJFcXVhdG9yaWFsIENvbW1lcmNpYWwgQmFua1wiLFxuICAgICAgICAgICAgXCJFcXVpdHkgQmFua1wiLFxuICAgICAgICAgICAgXCJGYW1pbHkgQmFua1wiLFxuICAgICAgICAgICAgXCJGaWRlbGl0eSBDb21tZXJjaWFsIEJhbmsgTGltaXRlZFwiLFxuICAgICAgICAgICAgXCJGaXJzdCBDb21tdW5pdHkgQmFua1wiLFxuICAgICAgICAgICAgXCJHaXJvIENvbW1lcmNpYWwgQmFua1wiLFxuICAgICAgICAgICAgXCJHdWFyYW50ZWUgVHJ1c3QgQmFuayAoR1QpXCIsXG4gICAgICAgICAgICBcIkd1YXJkaWFuIEJhbmtcIixcbiAgICAgICAgICAgIFwiR3VsZiBBZnJpY2FuIEJhbmtcIixcbiAgICAgICAgICAgIFwiSGFiaWIgQmFua1wiLFxuICAgICAgICAgICAgXCJIYWJpYiBCYW5rIEFHIFp1cmljaFwiLFxuICAgICAgICAgICAgXCJIb3VzaW5nIEZpbmFuY2VcIixcbiAgICAgICAgICAgIFwiSSZNIEJhbmtcIixcbiAgICAgICAgICAgIFwiSW1wZXJpYWwgQmFuayBLZW55YVwiLFxuICAgICAgICAgICAgXCJKYW1paSBCb3JhIEJhbmtcIixcbiAgICAgICAgICAgIFwiS2VueWEgQ29tbWVyY2lhbCBCYW5rXCIsXG4gICAgICAgICAgICBcIkstUmVwIEJhbmtcIixcbiAgICAgICAgICAgIFwiTWlkZGxlIEVhc3QgQmFuayBLZW55YVwiLFxuICAgICAgICAgICAgXCJOYXRpb25hbCBCYW5rIG9mIEtlbnlhXCIsXG4gICAgICAgICAgICBcIk5JQyBCYW5rXCIsXG4gICAgICAgICAgICBcIk9yaWVudGFsIENvbW1lcmNpYWwgQmFua1wiLFxuICAgICAgICAgICAgXCJQYXJhbW91bnQgVW5pdmVyc2FsIEJhbmtcIixcbiAgICAgICAgICAgIFwiUHJpbWUgQmFuayAoS2VueWEpXCIsXG4gICAgICAgICAgICBcIlN0YW5kYXJkIENoYXJ0ZXJlZCBLZW55YVwiLFxuICAgICAgICAgICAgXCJUcmFucyBOYXRpb25hbCBCYW5rIEtlbnlhXCIsXG4gICAgICAgICAgICBcIlVuaXRlZCBCYW5rIG9mIEFmcmljYVwiLFxuICAgICAgICAgICAgXCJWaWN0b3JpYSBDb21tZXJjaWFsIEJhbmtcIlxuICAgICAgICBdLFxuICAgICAgICBcIkJhbmsgQWdlbnRcIjogW1xuICAgICAgICAgICAgXCJLZW55YSBDb21tZXJjaWFsIEJhbmtcIixcbiAgICAgICAgICAgIFwiUG9zdEJhbmtcIixcbiAgICAgICAgICAgIFwiQ29vcGVyYXRpdmUgQmFua1wiLFxuICAgICAgICAgICAgXCJFcXVpdHkgQmFua1wiLFxuICAgICAgICAgICAgXCJGYW1pbHkgQmFua1wiLFxuICAgICAgICAgICAgXCJPdGhlciBTZXJ2aWNlIFByb3ZpZGVyXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJNb2JpbGUgTW9uZXkgQWdlbnRcIjogW1xuICAgICAgICAgICAgJ0FpcnRlbCcsXG4gICAgICAgICAgICAnU2FmYXJpY29tJyxcbiAgICAgICAgICAgICdZdSBDYXNoJyxcbiAgICAgICAgICAgICdPcmFuZ2UnLFxuICAgICAgICAgICAgJ1RhbmdhemEnXG4gICAgICAgIF0sXG4gICAgICAgIFwiTW9uZXkgVHJhbnNmZXIgU2VydmljZVwiOiBbXG4gICAgICAgICAgICBcIk1vbmV5IEdyYW1cIixcbiAgICAgICAgICAgIFwiV2VzdGVybiBVbmlvblwiLFxuICAgICAgICAgICAgXCJFeHByZXNzIE1vbmV5XCIsXG4gICAgICAgICAgICBcIk90aGVyIFNlcnZpY2UgUHJvdmlkZXJcIlxuICAgICAgICBdXG4gICAgfTtcbiAgICB2YXIgQ0lDT3MgPSBbXTtcbiAgICB2YXIgQ0lDT3NMYW5kVXNlID0gW107XG4gICAgdmFyIENJQ09zcHJvdmlkZXJzID0gW107XG4gICAgc2VydmljZS5DSUNPc1RvdGFsID0gMDtcblxuICAgIHNlcnZpY2UuS2VueWEgPSB7XG5cbiAgICAgICAgXCJDb3VudHJ5TmFtZVwiOiBcIktlbnlhXCIsXG4gICAgICAgIFwiTWFwQ2VudGVyXCI6IHtcbiAgICAgICAgICAgIFwiTGF0aXR1ZGVcIjogMC41NzEyOCxcbiAgICAgICAgICAgIFwiTG9uZ2l0dWRlXCI6IDM3Ljc4OTUzNlxuICAgICAgICB9LFxuICAgICAgICBcIk1hcFpvb21cIjogNixcbiAgICAgICAgXCJRdWlja1N0YXRzXCI6IHtcbiAgICAgICAgXCJ0b3RhbFBvcHVsYXRpb25cIjogNDAzNTcyMzcsXG4gICAgICAgICAgICBcInVyYmFuUGN0XCI6IC4wNzMsXG4gICAgICAgICAgICBcInJ1cmFsUGN0XCI6IC45MjcsXG4gICAgICAgICAgICBcIndpdGhpbjVLbVwiOiAuNzY3LFxuICAgICAgICAgICAgXCJydXJhbHBvcFwiOiAzNzM5MzAyMyxcbiAgICAgICAgICAgIFwidXJiYW5wb3BcIjogMjk2NDAxM1xuICAgICAgICB9LFxuICAgICAgICAnRmluYW5jaWFsIFNlcnZpY2UnOiB7XG4gICAgICAgICAgICBjb2xvcjogJ3JnYigxNTcsIDMzLCA0MSknXG4gICAgICAgIH0sXG4gICAgICAgICdMaWJyYXJ5Jzoge1xuICAgICAgICAgICAgY29sb3I6ICdyZ2IoNDIsIDEzMywgMTczKSdcbiAgICAgICAgfSxcbiAgICAgICAgJ0FncmljdWx0dXJlJzoge1xuICAgICAgICAgICAgY29sb3I6ICdyZ2IoMTI3LCAxNTcsIDEwNiknXG4gICAgICAgIH0sXG4gICAgICAgICdIZWFsdGgnOiB7XG4gICAgICAgICAgICBjb2xvcjogJ3JnYigyMDksIDExMCwgMzUpJ1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHNlcnZpY2UuZ2V0Q0lDT3NDb3VudHMgPSBmdW5jdGlvbigpe1xuICAgICAgICAvLyBLRU5ZQVxuICAgICAgICAkaHR0cC5nZXQoJ2h0dHA6Ly9zcGF0aWFsc2VydmVyLnNwYXRpYWxkZXYuY29tL3NlcnZpY2VzL3RhYmxlcy9jaWNvc18yMDEzL3F1ZXJ5P3doZXJlPWNvdW50cnklM0QlMjdLZW55YSUyNyZyZXR1cm5maWVsZHM9dHlwZSZmb3JtYXQ9Z2VvanNvbiZyZXR1cm5HZW9tZXRyeT1ubyZyZXR1cm5HZW9tZXRyeUVudmVsb3Blcz1ubyZncm91cGJ5PXR5cGUmc3RhdHNkZWY9Y291bnQlM0F0eXBlJykuXG4gICAgICAgICAgICBzdWNjZXNzKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgLy9yZXNldCBhcnJheSB0byBwcmV2ZW50IGR1cGxpY2F0ZXNcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEuZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgQ0lDT3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogZGF0YS5mZWF0dXJlc1tpXS5wcm9wZXJ0aWVzLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb3VudFwiOiBkYXRhLmZlYXR1cmVzW2ldLnByb3BlcnRpZXMuY291bnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGVkXCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2UuQ0lDT3NUb3RhbCArPSBwYXJzZUludChDSUNPc1tpXS5jb3VudCk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vc2VydmljZS5wY3RQZXJUeXBlKENJQ09zKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IENJQ09zLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgQ0lDT3NbaV1bXCJwY3RcIl0gPSAoKHBhcnNlSW50KENJQ09zW2ldLmNvdW50KSAvIHNlcnZpY2UuQ0lDT3NUb3RhbCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKENJQ09zW2ldLnR5cGU9PSdNb25leSBUcmFuc2ZlciBTZXJ2aWNlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ0lDT3NbaV0udmlld0FsbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBDSUNPc1tpXS5wcm92aWRlcnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb3ZpZGVyRGF0YVtcIk1vbmV5IFRyYW5zZmVyIFNlcnZpY2VcIl0uZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ0lDT3NbaV0ucHJvdmlkZXJzLnB1c2goe3R5cGU6IHZhbCwgc2VsZWN0ZWQ6IHRydWV9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKENJQ09zW2ldLnR5cGU9PVwiQ29tbWVyY2lhbCBCYW5rXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENJQ09zW2ldLnZpZXdBbGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ0lDT3NbaV0ucHJvdmlkZXJzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBQcm92aWRlckRhdGFbXCJDb21tZXJjaWFsIEJhbmtcIl0uZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ0lDT3NbaV0ucHJvdmlkZXJzLnB1c2goe3R5cGU6IHZhbCwgc2VsZWN0ZWQ6IHRydWV9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKENJQ09zW2ldLnR5cGU9PVwiQmFuayBBZ2VudFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDSUNPc1tpXS52aWV3QWxsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENJQ09zW2ldLnByb3ZpZGVycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgUHJvdmlkZXJEYXRhW1wiQmFuayBBZ2VudFwiXS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDSUNPc1tpXS5wcm92aWRlcnMucHVzaCh7dHlwZTogdmFsLCBzZWxlY3RlZDogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoQ0lDT3NbaV0udHlwZT09XCJNb2JpbGUgTW9uZXkgQWdlbnRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ0lDT3NbaV0udmlld0FsbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBDSUNPc1tpXS5wcm92aWRlcnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb3ZpZGVyRGF0YVtcIk1vYmlsZSBNb25leSBBZ2VudFwiXS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDSUNPc1tpXS5wcm92aWRlcnMucHVzaCh7dHlwZTogdmFsLCBzZWxlY3RlZDogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFNvcnQgc2VjdG9yIGFycmF5IGJ5IGNvdW50XG4gICAgICAgICAgICAgICAgQ0lDT3Muc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYi5jb3VudCAtIGEuY291bnQ7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzZXJ2aWNlLkNJQ09zVHlwZVRvdGFsX0tlbnlhID0gQ0lDT3MubGVuZ3RoO1xuICAgICAgICAgICAgfSkuXG4gICAgICAgICAgICBlcnJvcihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEpO1xuICAgICAgICAgICAgfSk7XG5cblxuXG4gICAgfTtcbiAgICBzZXJ2aWNlLmdldENJQ09zVXJiYW5SdXJhbENvdW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGh0dHAuZ2V0KCdodHRwOi8vc3BhdGlhbHNlcnZlci5zcGF0aWFsZGV2LmNvbS9zZXJ2aWNlcy90YWJsZXMvY2ljb3NfMjAxMy9xdWVyeT93aGVyZT1jb3VudHJ5JTNEJTI3S2VueWElMjcmcmV0dXJuZmllbGRzPXR5cGUlMkNsYW5kX3VzZSZmb3JtYXQ9JTIwZ2VvanNvbiZyZXR1cm5HZW9tZXRyeT1ubyZyZXR1cm5HZW9tZXRyeUVudmVsb3Blcz1ubyZncm91cGJ5PXR5cGUlMkNsYW5kX3VzZSZzdGF0c2RlZj1jb3VudCUzQXR5cGUnKS5cbiAgICAgICAgICAgIHN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEuZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgQ0lDT3NMYW5kVXNlLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IGRhdGEuZmVhdHVyZXNbaV0ucHJvcGVydGllcy50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY291bnRcIjogZGF0YS5mZWF0dXJlc1tpXS5wcm9wZXJ0aWVzLmNvdW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYW5kX3VzZVwiOiBkYXRhLmZlYXR1cmVzW2ldLnByb3BlcnRpZXMubGFuZF91c2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RlZFwiOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSkuXG4gICAgICAgICAgICBlcnJvcihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHNlcnZpY2UuZ2V0Q0lDT3NDb3VudHMoKTtcbiAgICBzZXJ2aWNlLmdldENJQ09zVXJiYW5SdXJhbENvdW50cygpO1xuICAgIHNlcnZpY2UuTGF5ZXIgPSB7XG4gICAgICAgIHR5cGU6ICdwYmYnLFxuICAgICAgICBuYW1lOiAnRlNQIEtlbnlhJyxcbiAgICAgICAgdXJsOiBcImh0dHA6Ly9zcGF0aWFsc2VydmVyLnNwYXRpYWxkZXYuY29tL3NlcnZpY2VzL3ZlY3Rvci10aWxlcy9jaWNvc18yMDEzX2tlbnlhL3t6fS97eH0ve3l9LnBiZlwiLFxuICAgICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICAgIGNsaWNrYWJsZUxheWVyczogW10sXG5cbiAgICAgICAgZ2V0SURGb3JMYXllckZlYXR1cmU6IGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZmlsdGVyIGZ1bmN0aW9uIGdldHMgY2FsbGVkIHdoZW4gaXRlcmF0aW5nIHRob3VnaCBlYWNoIHZlY3RvciB0aWxlIGZlYXR1cmUgKHZ0ZikuIFlvdSBoYXZlIGFjY2Vzc1xuICAgICAgICAgKiB0byBldmVyeSBwcm9wZXJ0eSBhc3NvY2lhdGVkIHdpdGggYSBnaXZlbiBmZWF0dXJlICh0aGUgZmVhdHVyZSwgYW5kIHRoZSBsYXllcikuIFlvdSBjYW4gYWxzbyBmaWx0ZXJcbiAgICAgICAgICogYmFzZWQgb2YgdGhlIGNvbnRleHQgKGVhY2ggdGlsZSB0aGF0IHRoZSBmZWF0dXJlIGlzIGRyYXduIG9udG8pLlxuICAgICAgICAgKlxuICAgICAgICAgKiBSZXR1cm5pbmcgZmFsc2Ugc2tpcHMgb3ZlciB0aGUgZmVhdHVyZSBhbmQgaXQgaXMgbm90IGRyYXduLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gZmVhdHVyZVxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIGZpbHRlcjogZnVuY3Rpb24oZmVhdHVyZSwgY29udGV4dCkge1xuICAgICAgICAgICAgLy9yZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLmNvdW50cnkgPT0gJ0tlbnlhJztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIHdlIHdhbnQgdG8gbGluayBldmVudHMgYmV0d2VlbiBsYXllcnMsIGxpa2UgY2xpY2tpbmcgb24gYSBsYWJlbCBhbmQgYVxuICAgICAgICAgKiBjb3JyZXNwb25kaW5nIHBvbHlnb24gZnJlYXR1cmUsIHRoaXMgd2lsbCByZXR1cm4gdGhlIGNvcnJlc3BvbmRpbmcgbWFwcGluZ1xuICAgICAgICAgKiBiZXR3ZWVuIGxheWVycy4gVGhpcyBwcm92aWRlcyBrbm93bGVkZ2Ugb2Ygd2hpY2ggb3RoZXIgZmVhdHVyZSBhIGdpdmVuIGZlYXR1cmVcbiAgICAgICAgICogaXMgbGlua2VkIHRvLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gbGF5ZXJOYW1lICB0aGUgbGF5ZXIgd2Ugd2FudCB0byBrbm93IHRoZSBsaW5rZWQgbGF5ZXIgZnJvbVxuICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGNvcnJlc3BvbmRpbmcgbGlua2VkIGxheWVyXG4gICAgICAgICAqL1xuICAgICAgICBsYXllckxpbms6IGZ1bmN0aW9uKGxheWVyTmFtZSkge1xuICAgICAgICAgICAgaWYgKGxheWVyTmFtZS5pbmRleE9mKCdfbGFiZWwnKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxheWVyTmFtZS5yZXBsYWNlKCdfbGFiZWwnLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbGF5ZXJOYW1lICsgJ19sYWJlbCc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNwZWNpZnkgd2hpY2ggZmVhdHVyZXMgc2hvdWxkIGhhdmUgYSBjZXJ0YWluIHogaW5kZXggKGludGVnZXIpLiAgTG93ZXIgbnVtYmVycyB3aWxsIGRyYXcgb24gJ3RoZSBib3R0b20nLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gZmVhdHVyZSAtIHRoZSBQQkZGZWF0dXJlIHRoYXQgY29udGFpbnMgcHJvcGVydGllc1xuICAgICAgICAgKi9cbiAgICAgICAgbGF5ZXJPcmRlcmluZzogZnVuY3Rpb24oZmVhdHVyZSl7XG4gICAgICAgICAgICAvL1RoaXMgb25seSBuZWVkcyB0byBiZSBkb25lIGZvciBlYWNoIHR5cGUsIG5vdCBuZWNlc3NhcmlseSBmb3IgZWFjaCBmZWF0dXJlLiBCdXQgd2UnbGwgc3RhcnQgaGVyZS5cbiAgICAgICAgICAgIGlmKGZlYXR1cmUgJiYgZmVhdHVyZS5wcm9wZXJ0aWVzKXtcbiAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXMuekluZGV4ID0gQ0lDT19Db25maWdbZmVhdHVyZS5wcm9wZXJ0aWVzLnR5cGVdLnpJbmRleCB8fCA1O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHN0eWxlOiBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSB7fTtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IHN0eWxlLnNlbGVjdGVkID0ge307XG4gICAgICAgICAgICB2YXIgcG9pbnRSYWRpdXMgPSAxO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBTY2FsZURlcGVuZGVudFBvaW50UmFkaXVzKHpvb20pe1xuICAgICAgICAgICAgICAgIC8vU2V0IHBvaW50IHJhZGl1cyBiYXNlZCBvbiB6b29tXG4gICAgICAgICAgICAgICAgdmFyIHBvaW50UmFkaXVzID0gMTtcbiAgICAgICAgICAgICAgICBpZih6b29tID49IDAgJiYgem9vbSA8PSA3KXtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRSYWRpdXMgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKHpvb20gPiA3ICYmIHpvb20gPD0gMTApe1xuICAgICAgICAgICAgICAgICAgICBwb2ludFJhZGl1cyA9IDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoem9vbSA+IDEwKXtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRSYWRpdXMgPSA0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBwb2ludFJhZGl1cztcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB2YXIgdHlwZSA9IGZlYXR1cmUudHlwZTtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTogLy8nUG9pbnQnXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiKDE1NywgMzMsIDQxKSc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLnJhZGl1cyA9IFNjYWxlRGVwZW5kZW50UG9pbnRSYWRpdXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLmNvbG9yID0gJ3JnYmEoMjU1LDI1NSwwLDAuNSknO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5yYWRpdXMgPSA1O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6IC8vJ0xpbmVTdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgxNjEsMjE3LDE1NSwwLjgpJztcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuc2l6ZSA9IDM7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLmNvbG9yID0gJ3JnYmEoMjU1LDI1LDAsMC41KSc7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLnNpemUgPSAzO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6IC8vJ1BvbHlnb24nXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgxNDksMTM5LDI1NSwwLjQpJztcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiKDIwLDIwLDIwKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIC8vIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLmNvbG9yID0gJ3JnYmEoMjU1LDI1LDAsMC4zKSc7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLm91dGxpbmUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNkOTUzNGYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogM1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBzZXJ2aWNlLktlbnlhID0ge1xuICAgICAgICBcIkNvdW50cnlOYW1lXCI6IFwiS2VueWFcIixcbiAgICAgICAgXCJNYXBDZW50ZXJcIjoge1xuICAgICAgICAgICAgXCJMYXRpdHVkZVwiOiAwLjU3MTI4LFxuICAgICAgICAgICAgXCJMb25naXR1ZGVcIjogMzcuNzg5NTM2XG4gICAgICAgIH0sXG4gICAgICAgIFwiTWFwWm9vbVwiOiA2LFxuICAgICAgICBcIlF1aWNrU3RhdHNcIjoge1xuICAgICAgICAgICAgXCJ0b3RhbFBvcHVsYXRpb25cIjogNDAzNTcyMzcsXG4gICAgICAgICAgICBcInVyYmFuUGN0XCI6IC4wNzMsXG4gICAgICAgICAgICBcInJ1cmFsUGN0XCI6IC45MjcsXG4gICAgICAgICAgICBcIndpdGhpbjVLbVwiOiAuNzY3LFxuICAgICAgICAgICAgXCJydXJhbHBvcFwiOiAzNzM5MzAyMyxcbiAgICAgICAgICAgIFwidXJiYW5wb3BcIjogMjk2NDAxM1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHNlcnZpY2UuS2VueWEuUXVpY2tTdGF0c1tcInRvdHBvcDVrbVwiXSA9IChzZXJ2aWNlLktlbnlhLlF1aWNrU3RhdHMud2l0aGluNUttICogc2VydmljZS5LZW55YS5RdWlja1N0YXRzLnRvdGFsUG9wdWxhdGlvbik7XG5cbiAgICBzZXJ2aWNlLkNJQ09fQ29uZmlnID0gQ0lDT19Db25maWc7XG4gICAgc2VydmljZS5DSUNPc19Db3VudHMgPSBDSUNPcztcbiAgICBzZXJ2aWNlLkNJQ09zX1Byb3ZpZGVycyA9IENJQ09zcHJvdmlkZXJzO1xuXG4gICAgcmV0dXJuIHNlcnZpY2U7XG5cbn0pO1xuXG4iLCJcbi8qKlxuICogQ3JlYXRlZCBieSBEYW5pZWwgQmFhaCA8ZGJhYWhAc3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAxMi8yMy8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdTcGF0aWFsVmlld2VyJykuZmFjdG9yeSgnTmlnZXJpYUZhY3RvcnknLCBmdW5jdGlvbiAoJGh0dHApIHtcblxuICAgIHZhciBDSUNPX0NvbmZpZyA9IHtcbiAgICAgICAgJ09mZnNpdGUgQVRNcyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2E0Yzc4YycsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdPZmZzaXRlIEFUTScsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDZcbiAgICAgICAgfSxcbiAgICAgICAgJ0JhbmsgQnJhbmNoZXMnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM5NzdDMDAnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnQmFuayBCcmFuY2gnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA1XG4gICAgICAgIH0sXG4gICAgICAgICdNRklzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjOTc3YzAwJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ01GSScsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDdcbiAgICAgICAgfSxcbiAgICAgICAgJ1NBQ0NPcyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2NmOGE1NycsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdTQUNDTycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDEwXG4gICAgICAgIH0sXG4gICAgICAgICdNb2JpbGUgTW9uZXkgQWdlbnQnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM4Q0I3QzcnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnTW9iaWxlIE1vbmV5IEFnZW50JyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogLTFcbiAgICAgICAgfSxcbiAgICAgICAgJ01ESXMnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM4MjVEOTknLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnTURJJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNlxuICAgICAgICB9LFxuICAgICAgICAnQ3JlZGl0IEluc3RpdHV0aW9uJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjNkNBNzZCJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ0NyZWRpdCBJbnN0aXR1dGlvbicsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDVcbiAgICAgICAgfSxcbiAgICAgICAgJ01GQnMnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM4MjVEOTknLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnTUZCJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogN1xuICAgICAgICB9LFxuICAgICAgICAnTW90b3IgUGFya3MnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyNiZDg1YjMnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnTW90b3IgUGFya3MnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA3XG4gICAgICAgIH0sXG4gICAgICAgICdNb2JpbGUgTmV0d29yayBPcGVyYXRvciBPdXRsZXRzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjYTJhMmEyJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ01vYmlsZSBOZXR3b3JrIE9wZXJhdG9yIE91dGxldHMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiAwXG4gICAgICAgIH0sXG4gICAgICAgICdQb3N0IE9mZmljZXMnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyNGRkZGMDAnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnUG9zdCBPZmZpY2VzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNFxuICAgICAgICB9LFxuICAgICAgICAnUG9zdCBPZmZpY2UnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM4MGFkN2InLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnUG9zdCBPZmZpY2VzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNlxuICAgICAgICB9LFxuICAgICAgICAnQnVzIFN0YW5kJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjODBhZDdiJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ0J1cyBTdGFuZHMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA2XG4gICAgICAgIH0sXG4gICAgICAgICdCdXMgU3RhbmRzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjODBhZDdiJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ0J1cyBTdGFuZHMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA2XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy9LZW55YVxuICAgICAgICAnSW5zdXJhbmNlIFByb3ZpZGVycyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzMwODZBQicsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdJbnN1cmFuY2UgcHJvdmlkZXJzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNlxuICAgICAgICB9LFxuICAgICAgICAnTW9uZXkgVHJhbnNmZXIgU2VydmljZSc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzk3N0MwMCcsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdNb25leSBUcmFuc2ZlciBTZXJ2aWNlJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNlxuICAgICAgICB9LFxuICAgICAgICAnRGV2IEZpbmFuY2UnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM5QjI0MkQnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnRGV2IEZpbmFuY2UnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA2XG4gICAgICAgIH0sXG4gICAgICAgICdGb3JleCBCdXJlYXVzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjY2Y4YTU3JyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ0ZvcmV4IEJ1cmVhdXMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA2XG4gICAgICAgIH0sXG4gICAgICAgICdDYXAgTWFya2V0cyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzgyNUQ5OScsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdDYXAgTWFya2V0cycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDZcbiAgICAgICAgfSxcbiAgICAgICAgJ1BlbnNpb24gUHJvdmlkZXJzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjYTJhMmEyJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ1BlbnNpb24gcHJvdmlkZXJzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNlxuICAgICAgICB9LFxuICAgICAgICAnUHVyY2hhc2UgTGVhc2UgRmFjdG9yaW5nJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjODBhZDdiJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ1B1cmNoYXNlIExlYXNlIEZhY3RvcmluZycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDZcbiAgICAgICAgfSxcbiAgICAgICAgJ0JhbmsgQWdlbnQnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM4MGFkN2InLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnQmFuayBBZ2VudCcsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDZcbiAgICAgICAgfSxcbiAgICAgICAgJ0JhbmsgYW5kIE1vcnRnYWdlJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjODBhZDdiJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ0JhbmtzIGFuZCBNb3J0Z2FnZScsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDZcbiAgICAgICAgfSxcbiAgICAgICAgJ0NvbW1lcmNpYWwgQmFuayc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzliMjQyZCcsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdDb21tZXJjaWFsIEJhbmsnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiAzXG4gICAgICAgIH0sXG5cbiAgICAgICAgJ1Bvc3RCYW5rJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjYmQ4NWIzJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ1Bvc3QgQmFuaycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDZcbiAgICAgICAgfSxcblxuICAgICAgICAvL05pZ2VyaWEgTmV3IFBvc3QgT2ZmaWNlc1xuICAgICAgICAnTklQT1NUIFBvc3QgT2ZmaWNlJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjODBhZDdiJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ05JUE9TVCBQb3N0IE9mZmljZXMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA2XG4gICAgICAgIH0sXG4gICAgICAgICdOSVBPU1QgUG9zdCBTaG9wJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjODBhZDdiJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ05JUE9TVCBQb3N0IFNob3BzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNlxuICAgICAgICB9LFxuICAgICAgICAnTklQT1NUIFBvc3RhbCBBZ2VuY3knOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM4MGFkN2InLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnTklQT1NUIFBvc3RhbCBBZ2VuY2llcycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDZcbiAgICAgICAgfSxcblxuICAgICAgICAvL0luZGlhXG4gICAgICAgICdQb3N0YWwgT3V0bGV0cyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2NlNmIyOScsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdQb3N0YWwgT3V0bGV0cycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDNcbiAgICAgICAgfSxcbiAgICAgICAgJ0NvbW1lcmNpYWwgQmFua3MnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyMzMDg2YWInLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnQ29tbWVyY2lhbCBCYW5rcycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDJcbiAgICAgICAgfSxcbiAgICAgICAgJ0JhbmsgQ3VzdG9tZXIgU2VydmljZSBQb2ludHMnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM5YjI0MmQnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnQmFuayBDdXN0b21lciBTZXJ2aWNlIFBvaW50cycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDRcbiAgICAgICAgfSxcbiAgICAgICAgJ0Rpc3RyaWN0Jzoge1xuICAgICAgICAgICAgY29sb3I6ICcjOWIyNDJkJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ0Rpc3RyaWN0JyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNlxuICAgICAgICB9LFxuICAgICAgICAnUHJpdmF0ZSBMaWJyYXJ5Jzoge1xuICAgICAgICAgICAgY29sb3I6ICcjMzA4NmFiJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ1ByaXZhdGUgTGlicmFyeScsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDVcbiAgICAgICAgfSxcbiAgICAgICAgJ1B1YmxpYyBMaWJyYXJ5Jzoge1xuICAgICAgICAgICAgY29sb3I6ICcjOTc3YzAwJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ1B1YmxpYyBMaWJyYXJ5JyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogN1xuICAgICAgICB9LFxuICAgICAgICAnVmlsbGFnZSc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2E0Yzc4YycsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdWaWxsYWdlJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNFxuICAgICAgICB9LFxuICAgICAgICAnQWRkaXRpb25hbCBQcmltYXJ5IEhlYWx0aCBDZW50cmVzIChBUEhDKSc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzliMjQyZCcsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdBZGRpdGlvbmFsIFByaW1hcnkgSGVhbHRoIENlbnRyZXMgKEFQSEMpJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNlxuICAgICAgICB9LFxuICAgICAgICAnQU5NIG9yIERpc3RyaWN0IFRyYWluaW5nIENlbnRyZXMnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyMzMDg2YWInLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnQU5NIG9yIERpc3RyaWN0IFRyYWluaW5nIENlbnRyZXMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA1XG4gICAgICAgIH0sXG4gICAgICAgICdBcHByb3ZlZCBOdXJzaW5nIFRyYWluaW5nIENlbnRyZXMgKFByaXZhdGUgU2VjdG9yKSc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzk3N2MwMCcsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdBcHByb3ZlZCBOdXJzaW5nIFRyYWluaW5nIENlbnRyZXMgKFByaXZhdGUgU2VjdG9yKScsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDdcbiAgICAgICAgfSxcbiAgICAgICAgJ0NvbW11bml0eSBIZWFsdGggQ2VudHJlIChDSEMpL0ZpcnN0IFJlZmVycmFsIFVuaXRzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjZDVjYjk4JyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ0NvbW11bml0eSBIZWFsdGggQ2VudHJlIChDSEMpL0ZpcnN0IFJlZmVycmFsIFVuaXRzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNFxuICAgICAgICB9LFxuICAgICAgICAnRGlzdHJpY3QgSG9zcGl0YWxzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjY2U2YjI5JyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ0Rpc3RyaWN0IEhvc3BpdGFscycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDVcbiAgICAgICAgfSxcbiAgICAgICAgJ01lZGljYWwgQ29sbGVnZXMgYW5kIEhvc3BpdGFscyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzU5NDUyYScsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdNZWRpY2FsIENvbGxlZ2VzIGFuZCBIb3NwaXRhbHMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA3XG4gICAgICAgIH0sXG4gICAgICAgICdQcmltYXJ5IEhlYWx0aCBDZW50cmUgKFBIQyknOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM4Y2I3YzcnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnUHJpbWFyeSBIZWFsdGggQ2VudHJlIChQSEMpJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNFxuICAgICAgICB9LFxuICAgICAgICAnUHJpdmF0ZSBob3NwaXRhbHMgYW5kIGNsaW5pY3MnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyNkMDk4ZDUnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnUHJpdmF0ZSBob3NwaXRhbHMgYW5kIGNsaW5pY3MnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA1XG4gICAgICAgIH0sXG4gICAgICAgICdTdWIgRGl2aXNpb25hbCBEaXN0cmljdCBIb3NwaXRhbHMnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyNhNGM3OGMnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnU3ViIERpdmlzaW9uYWwgRGlzdHJpY3QgSG9zcGl0YWxzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogN1xuICAgICAgICB9LFxuICAgICAgICAnU3ViIEhlYWx0aCBDZW50cmVzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjZDU5ODk4JyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ1N1YiBIZWFsdGggQ2VudHJlcycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDdcbiAgICAgICAgfSxcbiAgICAgICAgJ051cnNpbmcgU2Nob29scyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzU2N2Q1NCcsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdOdXJzaW5nIFNjaG9vbHMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA0XG4gICAgICAgIH0sXG4gICAgICAgICdEYWlyeSBQcm9jZXNzb3JzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjOWIyNDJkJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ0RhaXJ5IFByb2Nlc3NvcnMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA2XG4gICAgICAgIH0sXG4gICAgICAgICdEYXkgb2xkIGNoaWNrIGhhdGNoZXJpZXMnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyMzMDg2YWInLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnRGF5IG9sZCBjaGljayBoYXRjaGVyaWVzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNVxuICAgICAgICB9LFxuICAgICAgICAnUHJpdmF0ZSBzZWN0b3IgQWdyaWN1bHR1cmFsIHNlcnZpY2UgcHJvdmlkZXJzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjOTc3YzAwJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ1ByaXZhdGUgc2VjdG9yIEFncmljdWx0dXJhbCBzZXJ2aWNlIHByb3ZpZGVycycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDdcbiAgICAgICAgfSxcbiAgICAgICAgJ0dvdmVybm1lbnQgVmV0cyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2Q1Y2I5OCcsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdHb3Zlcm5tZW50IFZldHMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA0XG4gICAgICAgIH0sXG4gICAgICAgICdNYXJrZXQgTG9jYXRpb25zJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjY2U2YjI5JyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ01hcmtldCBMb2NhdGlvbnMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA1XG4gICAgICAgIH0sXG4gICAgICAgICdBZ3JvLWRlYWxlcnMnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM1OTQ1MmEnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnQWdyby1kZWFsZXJzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogN1xuICAgICAgICB9LFxuICAgICAgICAnV2FyZWhvdXNlL1N0b3JhZ2UvQWdncmVnYXRpb24gQ2VudHJlcyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzhjYjdjNycsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdXYXJlaG91c2UvU3RvcmFnZS9BZ2dyZWdhdGlvbiBDZW50cmVzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNFxuICAgICAgICB9LFxuICAgICAgICAnRGFpcnkgY2hpbGxpbmcgcGxhbnRzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjZDA5OGQ1JyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ0RhaXJ5IGNoaWxsaW5nIHBsYW50cycsXG4gICAgICAgICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDdcbiAgICAgICAgfSxcbiAgICAgICAgJ1Byb2Nlc3NvcnMvdmFsdWUgYWRkaXRpb24gcG9pbnRzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjYTRjNzhjJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ1Byb2Nlc3NvcnMvdmFsdWUgYWRkaXRpb24gcG9pbnRzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogN1xuICAgICAgICB9LFxuICAgICAgICAnRmFybWVyIE9yZ2FuaXNhdGlvbnMgYW5kIENvb3BlcmF0aXZlcyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2Q1OTg5OCcsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdGYXJtZXIgT3JnYW5pc2F0aW9ucyBhbmQgQ29vcGVyYXRpdmVzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNFxuICAgICAgICB9LFxuICAgICAgICAnQXJ0aWZpY2lhbCBJbnNlbWluYXRpb24gQ2VudHJlcyc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzU2N2Q1NCcsXG4gICAgICAgICAgICBpbmZvTGFiZWw6ICdBcnRpZmljaWFsIEluc2VtaW5hdGlvbiBDZW50cmVzJyxcbiAgICAgICAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogNFxuICAgICAgICB9LFxuICAgICAgICAnTmF0aW9uYWwvUmVnaW9uYWwvU3RhdGUgUmVzZWFyY2ggU3RhdGlvbnMnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyNiNjk4NWUnLFxuICAgICAgICAgICAgaW5mb0xhYmVsOiAnTmF0aW9uYWwvUmVnaW9uYWwvU3RhdGUgUmVzZWFyY2ggU3RhdGlvbnMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA1XG4gICAgICAgIH0sXG4gICAgICAgICdTZWVkIE11bHRpcGxpZXJzJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjZmY1ZDVkJyxcbiAgICAgICAgICAgIGluZm9MYWJlbDogJ1NlZWQgTXVsdGlwbGllcnMnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA3XG4gICAgICAgIH1cblxuICAgIH07XG4gICAgdmFyIENJQ09zID0gW107XG4gICAgdmFyIENJQ09zTGFuZFVzZSA9IFtdO1xuICAgIHZhciBDSUNPc3Byb3ZpZGVycyA9IFtdO1xuICAgIHZhciBzZXJ2aWNlID0ge307XG4gICAgc2VydmljZS5DSUNPc1RvdGFsID0gMDtcbiAgICB2YXIgUHJvdmlkZXJEYXRhID0ge1xuICAgICAgICBcIkJhbmsgQnJhbmNoZXNcIjogW1xuICAgICAgICAgICAgJ0FjY2VzcyBCYW5rIFBsYycsXG4gICAgICAgICAgICAnQ2VudHJhbCBCYW5rIG9mIE5pZ2VyaWEnLFxuICAgICAgICAgICAgJ0NpdGkgQmFuaycsXG4gICAgICAgICAgICAnRGlhbW9uZCBCYW5rIFBsYycsXG4gICAgICAgICAgICAnRWNvYmFuayBOaWdlcmlhIFBsYycsXG4gICAgICAgICAgICAnRW50ZXJwcmlzZSBCYW5rJyxcbiAgICAgICAgICAgICdGaWRlbGl0eSBCYW5rIFBsYycsXG4gICAgICAgICAgICAnRmlyc3QgQmFuayBvZiBOaWdlcmlhIFBsYycsXG4gICAgICAgICAgICAnRmlyc3QgQ2l0eSBNb251bWVudCBCYW5rIFBsYycsXG4gICAgICAgICAgICAnR1QgQmFuaycsXG4gICAgICAgICAgICAnSmFpeiBCYW5rIFBsYycsXG4gICAgICAgICAgICAnS2V5c3RvbmUgQmFuayBMaW1pdGVkJyxcbiAgICAgICAgICAgICdNYWluc3RyZWV0IEJhbmsgTGltaXRlZCcsXG4gICAgICAgICAgICAnU2F2YW5uYWggQmFuayBvZiBOaWdlcmlhJyxcbiAgICAgICAgICAgICdTa3llIEJhbmsgUGxjJyxcbiAgICAgICAgICAgICdTdGFuYmljIElCVEMgQmFuayBQbGMnLFxuICAgICAgICAgICAgJ1N0YW5kYXJkIENoYXJ0ZXJlZCBCYW5rIEx0ZCcsXG4gICAgICAgICAgICAnU3RlcmxpbmcgQmFuayBQbGMnLFxuICAgICAgICAgICAgJ1VuaW9uIEJhbmsgb2YgTmlnZXJpYScsXG4gICAgICAgICAgICAnVW5pdGVkIEJhbmsgb2YgQWZyaWNhJyxcbiAgICAgICAgICAgICdVbml0eSBCYW5rIFBsYycsXG4gICAgICAgICAgICAnV2VtYSBCYW5rIFBsYycsXG4gICAgICAgICAgICAnWmVuaXRoIEJhbmsgUGxjJ1xuXG4gICAgICAgIF0sXG4gICAgICAgIFwiTW9iaWxlIE1vbmV5IEFnZW50XCI6IFsnRGlhbW9uZCBCYW5rJyxcbiAgICAgICAgICAgICdDZWxsdWxhbnQnLFxuICAgICAgICAgICAgJ0NoYW1zIE1vYmlsZScsXG4gICAgICAgICAgICAnRWFydGhvbGV1bSBOZXR3b3JrcycsXG4gICAgICAgICAgICAnRWNvYmFuaycsXG4gICAgICAgICAgICAnZVRyYW56YWN0IEludGVybmF0aW9uYWwnLFxuICAgICAgICAgICAgJ0ZFVFMnLFxuICAgICAgICAgICAgJ0ZpcnN0IEJhbmsgcGxjJyxcbiAgICAgICAgICAgICdGaXJzdCBCYW5rJyxcbiAgICAgICAgICAgICdGb3J0aXMgTW9iaWxlJyxcbiAgICAgICAgICAgICdHVCBCYW5rJyxcbiAgICAgICAgICAgICdNa3VkaS9NaW5vJyxcbiAgICAgICAgICAgICdNb25pdGlzZScsXG4gICAgICAgICAgICAnUGFnYXRlY2gnLFxuICAgICAgICAgICAgJ1Bhcmt3YXkgUHJvamVjdHMnLFxuICAgICAgICAgICAgJ1BheWNvbScsXG4gICAgICAgICAgICAnU3RhbmJpYycsXG4gICAgICAgICAgICAnVGVhc3knLFxuICAgICAgICAgICAgJ1ZUTmV0d29yaycsXG4gICAgICAgICAgICAnWmVuaXRoIEJhbmsnLFxuICAgICAgICAgICAgJ1ppbnRlcm5ldCdcbiAgICAgICAgXSxcbiAgICAgICAgXCJNb2JpbGUgTmV0d29yayBPcGVyYXRvciBPdXRsZXRzXCI6IFsnTVROIFJldGFpbCBPdXRsZXQnLFxuICAgICAgICAgICAgJ0FpcnRlbCcsXG4gICAgICAgICAgICAnRXRpc2FsYXQnLFxuICAgICAgICAgICAgJ0dsbydcbiAgICAgICAgXVxuICAgIH07XG5cbiAgICBzZXJ2aWNlLmdldENJQ09zQ291bnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkaHR0cC5nZXQoJ2h0dHA6Ly9zcGF0aWFsc2VydmVyLnNwYXRpYWxkZXYuY29tL3NlcnZpY2VzL3RhYmxlcy9jaWNvc18yMDEzL3F1ZXJ5P3doZXJlPWNvdW50cnklM0QlMjdOaWdlcmlhJTI3JnJldHVybmZpZWxkcz10eXBlJmZvcm1hdD1nZW9qc29uJnJldHVybkdlb21ldHJ5PW5vJnJldHVybkdlb21ldHJ5RW52ZWxvcGVzPW5vJmdyb3VwYnk9dHlwZSZzdGF0c2RlZj1jb3VudCUzQXR5cGUnKS5cbiAgICAgICAgICAgIHN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAvL3Jlc2V0IGFycmF5IHRvIHByZXZlbnQgZHVwbGljYXRlc1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5mZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBDSUNPcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBkYXRhLmZlYXR1cmVzW2ldLnByb3BlcnRpZXMudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvdW50XCI6IGRhdGEuZmVhdHVyZXNbaV0ucHJvcGVydGllcy5jb3VudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFuZF91c2VcIjogZGF0YS5mZWF0dXJlc1tpXS5wcm9wZXJ0aWVzLmxhbmRfdXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWRcIjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZS5DSUNPc1RvdGFsICs9IHBhcnNlSW50KENJQ09zW2ldLmNvdW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBDSUNPcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgcGVyY2VudGFnZSBwZXIgdHlwZVxuICAgICAgICAgICAgICAgICAgICBDSUNPc1tpXVtcInBjdFwiXSA9ICgocGFyc2VJbnQoQ0lDT3NbaV0uY291bnQpIC8gc2VydmljZS5DSUNPc1RvdGFsKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoQ0lDT3NbaV0udHlwZT09J0JhbmsgQnJhbmNoZXMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDSUNPc1tpXS52aWV3QWxsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENJQ09zW2ldLnByb3ZpZGVycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgUHJvdmlkZXJEYXRhW1wiQmFuayBCcmFuY2hlc1wiXS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDSUNPc1tpXS5wcm92aWRlcnMucHVzaCh7dHlwZTogdmFsLCBzZWxlY3RlZDogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoQ0lDT3NbaV0udHlwZT09XCJNb2JpbGUgTmV0d29yayBPcGVyYXRvciBPdXRsZXRzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENJQ09zW2ldLnZpZXdBbGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ0lDT3NbaV0ucHJvdmlkZXJzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBQcm92aWRlckRhdGFbXCJNb2JpbGUgTmV0d29yayBPcGVyYXRvciBPdXRsZXRzXCJdLmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENJQ09zW2ldLnByb3ZpZGVycy5wdXNoKHt0eXBlOiB2YWwsIHNlbGVjdGVkOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKENJQ09zW2ldLnR5cGU9PVwiTW9iaWxlIE1vbmV5IEFnZW50XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENJQ09zW2ldLnZpZXdBbGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ0lDT3NbaV0ucHJvdmlkZXJzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBQcm92aWRlckRhdGFbXCJNb2JpbGUgTW9uZXkgQWdlbnRcIl0uZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ0lDT3NbaV0ucHJvdmlkZXJzLnB1c2goe3R5cGU6IHZhbCwgc2VsZWN0ZWQ6IHRydWV9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU29ydCBzZWN0b3IgYXJyYXkgYnkgY291bnRcbiAgICAgICAgICAgICAgICBDSUNPcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiLmNvdW50IC0gYS5jb3VudDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSkuXG4gICAgICAgICAgICBlcnJvcihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcbiAgICBzZXJ2aWNlLmdldENJQ09zVXJiYW5SdXJhbENvdW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGh0dHAuZ2V0KCdodHRwOi8vc3BhdGlhbHNlcnZlci5zcGF0aWFsZGV2LmNvbS9zZXJ2aWNlcy90YWJsZXMvY2ljb3NfMjAxMy9xdWVyeT93aGVyZT1jb3VudHJ5JTNEJTI3TmlnZXJpYSUyNyZyZXR1cm5maWVsZHM9dHlwZSUyQ2xhbmRfdXNlJmZvcm1hdD0lMjBnZW9qc29uJnJldHVybkdlb21ldHJ5PW5vJnJldHVybkdlb21ldHJ5RW52ZWxvcGVzPW5vJmdyb3VwYnk9dHlwZSUyQ2xhbmRfdXNlJnN0YXRzZGVmPWNvdW50JTNBdHlwZScpLlxuICAgICAgICAgICAgc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5mZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBDSUNPc0xhbmRVc2UucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogZGF0YS5mZWF0dXJlc1tpXS5wcm9wZXJ0aWVzLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb3VudFwiOiBkYXRhLmZlYXR1cmVzW2ldLnByb3BlcnRpZXMuY291bnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhbmRfdXNlXCI6IGRhdGEuZmVhdHVyZXNbaV0ucHJvcGVydGllcy5sYW5kX3VzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGVkXCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KS5cbiAgICAgICAgICAgIGVycm9yKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgc2VydmljZS5nZXRDSUNPc1VyYmFuUnVyYWxDb3VudHMoKTtcbiAgICBzZXJ2aWNlLmdldENJQ09zQ291bnRzKCk7XG5cbiAgICBzZXJ2aWNlLmNoZWNrQWxsID0gZnVuY3Rpb24gKHNlY3Rvciwgc2VsZWN0aW9uLCBzZWxlY3RhbGwpIHtcblxuICAgICAgICBzd2l0Y2ggKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnQ0lDT1MnOlxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RhbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0YWxsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2Uuc2VsZWN0YWxsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2UuY2hlY2tCb29sID0gXCJWaWV3IEFsbFwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZXJ2aWNlLmNoZWNrQm9vbCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ0lDTyBmYWN0b3J5IGNoZWNrIGJvb2w6IFwiICsgc2VydmljZS5jaGVja0Jvb2wpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNJQ08gZmFjdG9yeSBzZWxlY3RlZCBhbGw6IFwiICsgc2VsZWN0YWxsKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDSUNPIHNlcnZpY2Ugc2VsZWN0ZWQgYWxsOiBcIiArIHNlcnZpY2Uuc2VsZWN0YWxsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RhbGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLnNlbGVjdGFsbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2UuY2hlY2tCb29sID0gXCJWaWV3IEFsbFwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZXJ2aWNlLmNoZWNrQm9vbCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ0lDTyBmYWN0b3J5IGNoZWNrIGJvb2w6IFwiICsgc2VydmljZS5jaGVja0Jvb2wpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNJQ08gZmFjdG9yeSBzZWxlY3RlZCBhbGw6IFwiICsgc2VsZWN0YWxsKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDSUNPIHNlcnZpY2Ugc2VsZWN0ZWQgYWxsOiBcIiArIHNlcnZpY2Uuc2VsZWN0YWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VjdG9yLmZvckVhY2goZnVuY3Rpb24gKG5hbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWVzLnNlbGVjdGVkID0gc2VsZWN0YWxsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBzZXJ2aWNlLmNsZWFyQWxsID0gZnVuY3Rpb24gKHNlY3Rvciwgc2VsZWN0aW9uLCBzZWxlY3RhbGwpIHtcblxuICAgICAgICBpZiAoIXNlbGVjdGFsbCkge1xuICAgICAgICAgICAgc2VsZWN0YWxsID0gZmFsc2U7XG4gICAgICAgICAgICBzZXJ2aWNlLnNlbGVjdGFsbCA9IGZhbHNlO1xuICAgICAgICAgICAgc2VydmljZS5jaGVja0Jvb2wgPSBcIkNoZWNrIEFsbFwiO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDSUNPIGZhY3RvcnkgY2hlY2sgYm9vbDogXCIgKyBzZXJ2aWNlLmNoZWNrQm9vbCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNJQ08gZmFjdG9yeSBzZWxlY3RlZCBhbGw6IFwiICsgc2VsZWN0YWxsKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ0lDTyBzZXJ2aWNlIHNlbGVjdGVkIGFsbDogXCIgKyBzZXJ2aWNlLnNlbGVjdGFsbCk7XG4gICAgICAgIH1cbiAgICAgICAgc2VjdG9yLmZvckVhY2goZnVuY3Rpb24gKG5hbWVzKSB7XG4gICAgICAgICAgICBuYW1lcy5zZWxlY3RlZCA9IHNlbGVjdGFsbDtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHNlcnZpY2UuTGF5ZXIgPSAge1xuICAgICAgICB0eXBlOiAncGJmJyxcbiAgICAgICAgbmFtZTogJ0ZTUCBOaWdlcmlhcycsXG4gICAgICAgIHVybDogXCJodHRwOi8vc3BhdGlhbHNlcnZlci5zcGF0aWFsZGV2LmNvbS9zZXJ2aWNlcy92ZWN0b3ItdGlsZXMvY2ljb3NfMjAxM19uaWdlcmlhL3t6fS97eH0ve3l9LnBiZlwiLFxuICAgICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICAgIGNsaWNrYWJsZUxheWVyczogW10sXG5cbiAgICAgICAgZ2V0SURGb3JMYXllckZlYXR1cmU6IGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZmlsdGVyIGZ1bmN0aW9uIGdldHMgY2FsbGVkIHdoZW4gaXRlcmF0aW5nIHRob3VnaCBlYWNoIHZlY3RvciB0aWxlIGZlYXR1cmUgKHZ0ZikuIFlvdSBoYXZlIGFjY2Vzc1xuICAgICAgICAgKiB0byBldmVyeSBwcm9wZXJ0eSBhc3NvY2lhdGVkIHdpdGggYSBnaXZlbiBmZWF0dXJlICh0aGUgZmVhdHVyZSwgYW5kIHRoZSBsYXllcikuIFlvdSBjYW4gYWxzbyBmaWx0ZXJcbiAgICAgICAgICogYmFzZWQgb2YgdGhlIGNvbnRleHQgKGVhY2ggdGlsZSB0aGF0IHRoZSBmZWF0dXJlIGlzIGRyYXduIG9udG8pLlxuICAgICAgICAgKlxuICAgICAgICAgKiBSZXR1cm5pbmcgZmFsc2Ugc2tpcHMgb3ZlciB0aGUgZmVhdHVyZSBhbmQgaXQgaXMgbm90IGRyYXduLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gZmVhdHVyZVxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIGZpbHRlcjogZnVuY3Rpb24oZmVhdHVyZSwgY29udGV4dCkge1xuICAgICAgICAgICAgLy9yZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLmNvdW50cnkgPT0gJ0tlbnlhJztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIHdlIHdhbnQgdG8gbGluayBldmVudHMgYmV0d2VlbiBsYXllcnMsIGxpa2UgY2xpY2tpbmcgb24gYSBsYWJlbCBhbmQgYVxuICAgICAgICAgKiBjb3JyZXNwb25kaW5nIHBvbHlnb24gZnJlYXR1cmUsIHRoaXMgd2lsbCByZXR1cm4gdGhlIGNvcnJlc3BvbmRpbmcgbWFwcGluZ1xuICAgICAgICAgKiBiZXR3ZWVuIGxheWVycy4gVGhpcyBwcm92aWRlcyBrbm93bGVkZ2Ugb2Ygd2hpY2ggb3RoZXIgZmVhdHVyZSBhIGdpdmVuIGZlYXR1cmVcbiAgICAgICAgICogaXMgbGlua2VkIHRvLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gbGF5ZXJOYW1lICB0aGUgbGF5ZXIgd2Ugd2FudCB0byBrbm93IHRoZSBsaW5rZWQgbGF5ZXIgZnJvbVxuICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGNvcnJlc3BvbmRpbmcgbGlua2VkIGxheWVyXG4gICAgICAgICAqL1xuICAgICAgICBsYXllckxpbms6IGZ1bmN0aW9uKGxheWVyTmFtZSkge1xuICAgICAgICAgICAgaWYgKGxheWVyTmFtZS5pbmRleE9mKCdfbGFiZWwnKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxheWVyTmFtZS5yZXBsYWNlKCdfbGFiZWwnLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbGF5ZXJOYW1lICsgJ19sYWJlbCc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNwZWNpZnkgd2hpY2ggZmVhdHVyZXMgc2hvdWxkIGhhdmUgYSBjZXJ0YWluIHogaW5kZXggKGludGVnZXIpLiAgTG93ZXIgbnVtYmVycyB3aWxsIGRyYXcgb24gJ3RoZSBib3R0b20nLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gZmVhdHVyZSAtIHRoZSBQQkZGZWF0dXJlIHRoYXQgY29udGFpbnMgcHJvcGVydGllc1xuICAgICAgICAgKi9cbiAgICAgICAgbGF5ZXJPcmRlcmluZzogZnVuY3Rpb24oZmVhdHVyZSl7XG4gICAgICAgICAgICAvL1RoaXMgb25seSBuZWVkcyB0byBiZSBkb25lIGZvciBlYWNoIHR5cGUsIG5vdCBuZWNlc3NhcmlseSBmb3IgZWFjaCBmZWF0dXJlLiBCdXQgd2UnbGwgc3RhcnQgaGVyZS5cbiAgICAgICAgICAgIGlmKGZlYXR1cmUgJiYgZmVhdHVyZS5wcm9wZXJ0aWVzKXtcbiAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXMuekluZGV4ID0gQ0lDT19Db25maWdbZmVhdHVyZS5wcm9wZXJ0aWVzLnR5cGVdLnpJbmRleCB8fCA1O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHN0eWxlOiBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSB7fTtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IHN0eWxlLnNlbGVjdGVkID0ge307XG4gICAgICAgICAgICB2YXIgcG9pbnRSYWRpdXMgPSAxO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBTY2FsZURlcGVuZGVudFBvaW50UmFkaXVzKHpvb20pe1xuICAgICAgICAgICAgICAgIC8vU2V0IHBvaW50IHJhZGl1cyBiYXNlZCBvbiB6b29tXG4gICAgICAgICAgICAgICAgdmFyIHBvaW50UmFkaXVzID0gMTtcbiAgICAgICAgICAgICAgICBpZih6b29tID49IDAgJiYgem9vbSA8PSA3KXtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRSYWRpdXMgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKHpvb20gPiA3ICYmIHpvb20gPD0gMTApe1xuICAgICAgICAgICAgICAgICAgICBwb2ludFJhZGl1cyA9IDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoem9vbSA+IDEwKXtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRSYWRpdXMgPSA0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBwb2ludFJhZGl1cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHR5cGUgPSBmZWF0dXJlLnR5cGU7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6IC8vJ1BvaW50J1xuICAgICAgICAgICAgICAgICAgICAvLyB1bnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYigxNTcsIDMzLCA0MSknO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5yYWRpdXMgPSBTY2FsZURlcGVuZGVudFBvaW50UmFkaXVzO1xuICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5jb2xvciA9ICdyZ2JhKDI1NSwyNTUsMCwwLjUpJztcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQucmFkaXVzID0gNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOiAvLydMaW5lU3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAvLyB1bnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMTYxLDIxNywxNTUsMC44KSc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLnNpemUgPSAzO1xuICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5jb2xvciA9ICdyZ2JhKDI1NSwyNSwwLDAuNSknO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5zaXplID0gMztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOiAvLydQb2x5Z29uJ1xuICAgICAgICAgICAgICAgICAgICAvLyB1bnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMTQ5LDEzOSwyNTUsMC40KSc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYigyMCwyMCwyMCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMlxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5jb2xvciA9ICdyZ2JhKDI1NSwyNSwwLDAuMyknO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5vdXRsaW5lID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZDk1MzRmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDNcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICB9XG5cbiAgICB9O1xuICAgIHNlcnZpY2UuTmlnZXJpYSA9IHtcbiAgICAgICAgXCJDb3VudHJ5TmFtZVwiOiBcIk5pZ2VyaWFcIixcbiAgICAgICAgXCJNYXBDZW50ZXJcIjoge1xuICAgICAgICAgICAgXCJMYXRpdHVkZVwiOiA5LjMxLFxuICAgICAgICAgICAgXCJMb25naXR1ZGVcIjogNy45M1xuICAgICAgICB9LFxuICAgICAgICBcIk1hcFpvb21cIjogNixcbiAgICAgICAgXCJRdWlja1N0YXRzXCI6IHtcbiAgICAgICAgICAgIHRvdGFsUG9wdWxhdGlvbjogMTUwODAyNzA0LFxuICAgICAgICAgICAgdXJiYW5QY3Q6IC4zMjQ5LFxuICAgICAgICAgICAgcnVyYWxQY3Q6IC42NzUwLFxuICAgICAgICAgICAgd2l0aGluNUttOiAuNDczMCxcbiAgICAgICAgICAgIHJ1cmFscG9wOiAxMDE1MjMwMjEsXG4gICAgICAgICAgICB1cmJhbnBvcDogMzgyNjQxNDksXG4gICAgICAgICAgICBsYWdvc3BvcDogMTA3Mzk4MThcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBzZXJ2aWNlLk5pZ2VyaWEuUXVpY2tTdGF0c1tcInRvdHBvcDVrbVwiXSA9IChzZXJ2aWNlLk5pZ2VyaWEuUXVpY2tTdGF0cy53aXRoaW41S20gKiBzZXJ2aWNlLk5pZ2VyaWEuUXVpY2tTdGF0cy50b3RhbFBvcHVsYXRpb24pO1xuXG4gICAgc2VydmljZS5DSUNPX0NvbmZpZyA9IENJQ09fQ29uZmlnO1xuICAgIHNlcnZpY2UuQ0lDT3NfQ291bnRzID0gQ0lDT3M7XG5cbiAgICByZXR1cm4gc2VydmljZTtcblxufSk7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ1NwYXRpYWxWaWV3ZXInKS5mYWN0b3J5KCdTZWN0b3JGYWN0b3J5JywgZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIHNlcnZpY2UgPSB7fTtcbiAgICB2YXIgY291bnRyeW5hbWUgPSAnSW5kaWEnO1xuICAgIHNlcnZpY2UuU2VsZWN0ZWRTZWN0b3IgPSAnJztcbiAgICBzZXJ2aWNlLnNlbGVjdGVkQ291bnRyeSA9ICdJbmRpYSc7XG4gICAgc2VydmljZS5zZWN0b3JTZWxlY3Rpb25zID0gW107XG5cbiAgICBzZXJ2aWNlLkNvdW50cnlMaXN0ID0ge1xuICAgICAgICBkZWZhdWx0OntcbiAgICAgICAgICAgIGNvdW50cnk6J1VnYW5kYScsXG4gICAgICAgICAgICBcIk1hcENlbnRlclwiOiB7XG4gICAgICAgICAgICAgICAgXCJMYXRpdHVkZVwiOiAxLjMsXG4gICAgICAgICAgICAgICAgXCJMb25naXR1ZGVcIjogMzJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBNYXBab29tOiA2XG4gICAgICAgIH0sS2VueWE6e1xuICAgICAgICAgICAgbGF5ZXI6J2NpY29zX2tlbnlhJ1xuICAgICAgICB9LE5pZ2VyaWE6e1xuICAgICAgICAgICAgbGF5ZXI6J2NpY29zX25pZ2VyaWEnXG4gICAgICAgIH0sXG4gICAgICAgIEluZGlhOntcbiAgICAgICAgICAgIGxheWVyOiBbJ2xpYnJhcnknLCdDSUNPUycsJ2FncmljdWx0dXJlJywnaGVhbHRoJ11cbiAgICAgICAgfSxcbiAgICAgICAgVWdhbmRhOntcbiAgICAgICAgICAgIGxheWVyOiBbJ2NpY29zXzIwMTNfdWdhbmRhJywnZWR1Y2F0aW9uXzIwMTVfdWdhbmRhJywnYWdyaWN1bHR1cmVfMjAxNV91Z2FuZGEnXVxuICAgICAgICB9LFxuICAgICAgICBjb3VudHJ5TmFtZXM6IFsnQmFuZ2xhZGVzaCcsICdVZ2FuZGEnLCAnS2VueWEnLCAnTmlnZXJpYScsICdUYW56YW5pYScsICdJbmRpYSddXG4gICAgfTtcblxuICAgIHNlcnZpY2Uuc2V0U2VsZWN0ZWRTZWN0b3IgPSBmdW5jdGlvbiAoc2VjdG9yKSB7XG4gICAgICAgIHNlcnZpY2UuU2VsZWN0ZWRTZWN0b3IgPSBzZWN0b3I7XG5cbiAgICAgICAgaWYgKHNlcnZpY2Uuc2VjdG9yU2VsZWN0aW9ucy5pbmRleE9mKHNlY3RvcikgPT0gLTEpIHtcbiAgICAgICAgICAgIHNlcnZpY2Uuc2VjdG9yU2VsZWN0aW9ucy5wdXNoKHNlY3Rvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnNlY3RvclNlbGVjdGlvbnMuc3BsaWNlKHNlcnZpY2Uuc2VjdG9yU2VsZWN0aW9ucy5pbmRleE9mKHNlY3RvciksIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VydmljZS5hbGxTZWN0b3JzID0gc2VydmljZS5zZWN0b3JTZWxlY3Rpb25zO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VjdG9yRmFjdG9yeSB0YWI6IFwiICsgc2VydmljZS5TZWxlY3RlZFNlY3Rvcik7XG4gICAgfTtcblxuICAgIHNlcnZpY2Uuc2V0Q291bnRyeSA9IGZ1bmN0aW9uIChjb3VudHJ5KSB7XG4gICAgICAgIHNlcnZpY2Uuc2VsZWN0ZWRDb3VudHJ5ID0gY291bnRyeTtcbiAgICAgICAgY29uc29sZS5sb2coXCJDb3VudHJ5IFNlbGVjdGlvbjogXCIgKyBzZXJ2aWNlLnNlbGVjdGVkQ291bnRyeSk7XG4gICAgfTtcblxuICAgIHJldHVybiBzZXJ2aWNlO1xuXG59KTsiLCJcbi8qKlxuICogQ3JlYXRlZCBieSBEYW5pZWwgQmFhaCA8ZGJhYWhAc3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAxMi8yMi8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdTcGF0aWFsVmlld2VyJykuZmFjdG9yeSgnVGFuemFuaWFGYWN0b3J5JywgZnVuY3Rpb24gKCRodHRwKSB7XG5cbiAgICB2YXIgc2VydmljZSA9IHt9O1xuXG4gICAgJGh0dHAuZ2V0KCdkYXRhL2NvdW50cnlkYXRhL1RhbnphbmlhLmpzb24nKS5cbiAgICAgICAgc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLlRhbnphbmlhID0gZGF0YTtcbiAgICAgICAgfSkuXG4gICAgICAgIGVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIGFsZXJ0KGRhdGEpO1xuICAgICAgICB9KTtcblxuICAgIHJldHVybiBzZXJ2aWNlO1xuXG59KTtcblxuIiwiXG4vKipcbiAqIENyZWF0ZWQgYnkgRGFuaWVsIEJhYWggPGRiYWFoQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMTIvMjIvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnU3BhdGlhbFZpZXdlcicpLmZhY3RvcnkoJ1VnYW5kYUZhY3RvcnknLCBmdW5jdGlvbiAoJGh0dHApIHtcblxuICAgIHZhciBzZXJ2aWNlID0ge307XG4gICAgdmFyIENJQ09zID0gW107XG4gICAgdmFyIEVkdWNhdGlvbiA9IFtdO1xuICAgIHZhciBBZyA9IFtdO1xuICAgIHZhciBlZHVjYXRpb25fdHlwZV91cmwgPSAnaHR0cDovL3NwYXRpYWxzZXJ2ZXIuc3BhdGlhbGRldi5jb20vc2VydmljZXMvdGFibGVzL2VkdWNhdGlvbl8yMDE1L3F1ZXJ5P3JldHVybmZpZWxkcz10eXBlJmZvcm1hdD1nZW9qc29uJnJldHVybkdlb21ldHJ5PW5vJnJldHVybkdlb21ldHJ5RW52ZWxvcGVzPW5vJmdyb3VwYnk9dHlwZSZzdGF0c2RlZj1jb3VudCUzQXR5cGUnO1xuICAgIHZhciBhZ190eXBlX3VybCA9ICdodHRwOi8vc3BhdGlhbHNlcnZlci5zcGF0aWFsZGV2LmNvbS9zZXJ2aWNlcy90YWJsZXMvYWdyaWN1bHR1cmVfMjAxNS9xdWVyeT9yZXR1cm5maWVsZHM9dHlwZSZmb3JtYXQ9Z2VvanNvbiZyZXR1cm5HZW9tZXRyeT1ubyZyZXR1cm5HZW9tZXRyeUVudmVsb3Blcz1ubyZncm91cGJ5PXR5cGUmc3RhdHNkZWY9Y291bnQlM0F0eXBlJztcblxuICAgIHZhciBQcm92aWRlckRhdGEgPSB7XG4gICAgICAgICdNaWNyb2ZpbmFuY2UgZGVwb3NpdCB0YWtpbmcgaW5zdGl0dXRpb24nIDogW1xuICAgICAgICAgICAgXCJQUklERSBNaWNyb2ZpbmFuY2UgTHRkIChNREkpXCIsXG4gICAgICAgICAgICBcIlVHQUZPREVcIixcbiAgICAgICAgICAgIFwiRklOQ0EgVWdhbmRhIEx0ZCAoTURJKVwiLFxuICAgICAgICAgICAgXCJVZ2FuZGEgRmluYW5jZSBUcnVzdCBMdGRcIlxuICAgICAgICBdLFxuICAgICAgICAnTW9iaWxlIE1vbmV5IEFnZW50JzogW1wiYXdcIiwgXCJvclwiLCBcIm10blwiLCBcIm1wXCIsIFwiZXpcIiwgXCJtc1wiLCBcIm1jXCJdLFxuICAgICAgICAnQ3JlZGl0IGluc3RpdHV0aW9ucyc6IFtcIlBvc3QgQmFuayBVZ2FuZGEgTHRkXCIsIFwiT3Bwb3J0dW5pdHkgVWdhbmRhIEx0ZFwiXVxuICAgIH07XG5cbiAgICBzZXJ2aWNlLkNJQ09zVG90YWwgPSAwO1xuICAgIHNlcnZpY2UuQWdUb3RhbCA9IDA7XG4gICAgc2VydmljZS5FZHVjYXRpb25Ub3RhbCA9IDA7XG5cblxuICAgIHNlcnZpY2UuVWdhbmRhID0ge1xuXG4gICAgICAgIFwiQ291bnRyeU5hbWVcIjogXCJVZ2FuZGFcIixcbiAgICAgICAgXCJNYXBDZW50ZXJcIjoge1xuICAgICAgICAgICAgXCJMYXRpdHVkZVwiOiAxLjMsXG4gICAgICAgICAgICBcIkxvbmdpdHVkZVwiOiAzMlxuICAgICAgICB9LFxuICAgICAgICBcIk1hcFpvb21cIjogNyxcbiAgICAgICAgUXVpY2tTdGF0czoge1xuICAgICAgICAgICAgdG90YWxQb3B1bGF0aW9uOiAzMzQyNDkyMixcbiAgICAgICAgICAgIHVyYmFuUGN0OiAuMTI3NixcbiAgICAgICAgICAgIHJ1cmFsUGN0OiAuODcyMyxcbiAgICAgICAgICAgIHdpdGhpbjVLbTogLjQyNjcsXG4gICAgICAgICAgICBydXJhbHBvcDogMjkxMzg2MjcsXG4gICAgICAgICAgICB1cmJhbnBvcDogMTI4MzM1MixcbiAgICAgICAgICAgIGthbXBhbGFwb3A6IDI5ODIwMjBcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBzZXJ2aWNlLmdldEFnQ291bnRzID0gZnVuY3Rpb24oKXtcbiAgICAgICAgJGh0dHAuZ2V0KGFnX3R5cGVfdXJsKS5cbiAgICAgICAgICAgIHN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEuZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgQWcucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogZGF0YS5mZWF0dXJlc1tpXS5wcm9wZXJ0aWVzLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvdW50XCI6IGRhdGEuZmVhdHVyZXNbaV0ucHJvcGVydGllcy5jb3VudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYW5kX3VzZVwiOiBkYXRhLmZlYXR1cmVzW2ldLnByb3BlcnRpZXMubGFuZF91c2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGVkXCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLkFnVG90YWwgKz0gcGFyc2VJbnQoQWdbaV0uY291bnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgcGVyY2VudGFnZSBwZXIgdHlwZVxuICAgICAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8QWcubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgICAgIEFnW2ldW1wicGN0XCJdPSgocGFyc2VJbnQoQWdbaV0uY291bnQpL3NlcnZpY2UuQWdUb3RhbCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTb3J0IHNlY3RvciBhcnJheSBieSBjb3VudFxuICAgICAgICAgICAgICAgIEFnLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIuY291bnQtIGEuY291bnQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5cbiAgICAgICAgICAgIGVycm9yKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIHNlcnZpY2UuZ2V0Q0lDT3NDb3VudHMgPSBmdW5jdGlvbigpe1xuICAgICAgICAvLyBVR0FOREFcbiAgICAgICAgJGh0dHAuZ2V0KCdodHRwOi8vc3BhdGlhbHNlcnZlci5zcGF0aWFsZGV2LmNvbS9zZXJ2aWNlcy90YWJsZXMvdWdhbmRhX2NpY29zXzIwMTUvcXVlcnk/d2hlcmU9Y291bnRyeSUzRCUyN1VnYW5kYSUyNyZyZXR1cm5maWVsZHM9dHlwZSZmb3JtYXQ9Z2VvanNvbiZyZXR1cm5HZW9tZXRyeT1ubyZyZXR1cm5HZW9tZXRyeUVudmVsb3Blcz1ubyZncm91cGJ5PXR5cGUmc3RhdHNkZWY9Y291bnQlM0F0eXBlJykuXG4gICAgICAgICAgICBzdWNjZXNzKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgLy9yZXNldCBhcnJheSB0byBwcmV2ZW50IGR1cGxpY2F0ZXNcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEuZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5mZWF0dXJlc1tpXS5wcm9wZXJ0aWVzLnR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENJQ09zLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogZGF0YS5mZWF0dXJlc1tpXS5wcm9wZXJ0aWVzLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY291bnRcIjogZGF0YS5mZWF0dXJlc1tpXS5wcm9wZXJ0aWVzLmNvdW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWRcIjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2UuQ0lDT3NUb3RhbCArPSBwYXJzZUludChkYXRhLmZlYXR1cmVzW2ldLnByb3BlcnRpZXMuY291bnRfdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBnZXQgcGVyY2VudGFnZSBvZiBDSUNPIHR5cGVcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IENJQ09zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIENJQ09zW2ldW1wicGN0XCJdID0gKChwYXJzZUludChDSUNPc1tpXS5jb3VudCkgLyBzZXJ2aWNlLkNJQ09zVG90YWwpKTtcblxuICAgICAgICAgICAgICAgICAgICAvLy8vYWRkIHByb3ZpZGVyIGxpc3RcbiAgICAgICAgICAgICAgICAgICAgLy9pZihDSUNPc1tpXS50eXBlPT0nTWljcm9maW5hbmNlIGRlcG9zaXQgdGFraW5nIGluc3RpdHV0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICBDSUNPc1tpXS52aWV3QWxsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgQ0lDT3NbaV0ucHJvdmlkZXJzID0gW107XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIFByb3ZpZGVyRGF0YVtcIk1pY3JvZmluYW5jZSBkZXBvc2l0IHRha2luZyBpbnN0aXR1dGlvblwiXS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgIENJQ09zW2ldLnByb3ZpZGVycy5wdXNoKHt0eXBlOiB2YWwsIHNlbGVjdGVkOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvL31cbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy9pZihDSUNPc1tpXS50eXBlPT0nTW9iaWxlIE1vbmV5IEFnZW50Jykge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICBDSUNPc1tpXS52aWV3QWxsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgQ0lDT3NbaV0ucHJvdmlkZXJzID0gW107XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIFByb3ZpZGVyRGF0YVtcIk1vYmlsZSBNb25leSBBZ2VudFwiXS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgIENJQ09zW2ldLnByb3ZpZGVycy5wdXNoKHt0eXBlOiB2YWwsIHNlbGVjdGVkOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvL31cbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy9pZihDSUNPc1tpXS50eXBlPT0nQ3JlZGl0IGluc3RpdHV0aW9ucycpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgQ0lDT3NbaV0udmlld0FsbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIENJQ09zW2ldLnByb3ZpZGVycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICBQcm92aWRlckRhdGFbXCJDcmVkaXQgaW5zdGl0dXRpb25zXCJdLmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgQ0lDT3NbaV0ucHJvdmlkZXJzLnB1c2goe3R5cGU6IHZhbCwgc2VsZWN0ZWQ6IHRydWV9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFNvcnQgc2VjdG9yIGFycmF5IGJ5IGNvdW50XG4gICAgICAgICAgICAgICAgQ0lDT3Muc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYi5jb3VudCAtIGEuY291bnQ7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pLlxuICAgICAgICAgICAgZXJyb3IoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfTtcbiAgICBzZXJ2aWNlLmdldEVkdWNhdGlvbkNvdW50cyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICRodHRwLmdldChlZHVjYXRpb25fdHlwZV91cmwpLlxuICAgICAgICAgICAgc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5mZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBFZHVjYXRpb24ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogZGF0YS5mZWF0dXJlc1tpXS5wcm9wZXJ0aWVzLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvdW50XCI6IGRhdGEuZmVhdHVyZXNbaV0ucHJvcGVydGllcy5jb3VudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYW5kX3VzZVwiOiBkYXRhLmZlYXR1cmVzW2ldLnByb3BlcnRpZXMubGFuZF91c2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGVkXCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLkVkdWNhdGlvblRvdGFsICs9IHBhcnNlSW50KEVkdWNhdGlvbltpXS5jb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBwZXJjZW50YWdlIHBlciB0eXBlXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpPTA7aTxFZHVjYXRpb24ubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgICAgIEVkdWNhdGlvbltpXVtcInBjdFwiXT0oKHBhcnNlSW50KEVkdWNhdGlvbltpXS5jb3VudCkvc2VydmljZS5FZHVjYXRpb25Ub3RhbCkpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gU29ydCBzZWN0b3IgYXJyYXkgYnkgY291bnRcbiAgICAgICAgICAgICAgICBFZHVjYXRpb24uc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYi5jb3VudC0gYS5jb3VudDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLlxuICAgICAgICAgICAgZXJyb3IoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBzZXJ2aWNlLmdldEFnQ291bnRzKCk7XG4gICAgc2VydmljZS5nZXRDSUNPc0NvdW50cygpO1xuICAgIHNlcnZpY2UuZ2V0RWR1Y2F0aW9uQ291bnRzKCk7XG5cbiAgICBzZXJ2aWNlLkFnX0NvdW50cyA9IEFnO1xuICAgIHNlcnZpY2UuQ0lDT3NfQ291bnRzID0gQ0lDT3M7XG4gICAgc2VydmljZS5FZHVjYXRpb25fQ291bnRzID0gRWR1Y2F0aW9uO1xuXG4gICAgcmV0dXJuIHNlcnZpY2U7XG5cbn0pO1xuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgYW5kIFJpY2ggR3dvemR6IDxyZ3dvemR6QHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNS8yMS8xNC5cbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ1NwYXRpYWxWaWV3ZXInKS5mYWN0b3J5KCdEb251dHMnLCBmdW5jdGlvbiAoKSB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBEMyBEb251dCB0aGF0IGlzIGxvY2F0ZWQgaW4gdGhlIGRldGFpbHMgcGFuZWwuXG4gICAqL1xuICBmdW5jdGlvbiBFeHBhbmRvRG9udXQoZW50aXRpZXMsIHZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5LCB3cmFwcGVyLCBsYWJlbFBvc2l0aW9uKSB7XG5cbiAgICB2YXIgZGF0YSxcbiAgICAgIHRtcERhdGFzZXQsXG4gICAgICBkYXRhc2V0LFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICByYWRpdXMsXG4gICAgICBjb2xvcixcbiAgICAgIHBpZSxcbiAgICAgIGFyYyxcbiAgICAgIHN2ZyxcbiAgICAgIHBhdGgsXG4gICAgICByZXBvcnRpbmdWYWx1ZUFycixcbiAgICAgIHJlcG9ydGluZ1ZhbHVlLFxuICAgICAgbGFiZWxXcmFwcGVyO1xuXG4gICAgZGF0YSA9IHt9O1xuXG4gICAgd3JhcHBlciA9ICQod3JhcHBlcilbMF07XG4gICAgJCh3cmFwcGVyKS5odG1sKCcnKTtcbiAgICB0aGlzLndyYXBwZXIgPSB3cmFwcGVyO1xuICAgIHRoaXMubGFiZWxXcmFwcGVyID0gbnVsbDtcbiAgICB0aGlzLnN2ZyA9IG51bGw7XG5cbiAgICBpZih0eXBlb2YgbGFiZWxQb3NpdGlvbiA9PT0gJ3VuZGVmaW5lZCcgfHwgKGxhYmVsUG9zaXRpb24gIT09ICd0b3AnICYmIGxhYmVsUG9zaXRpb24gIT09ICdib3R0b20nKSkge1xuICAgICAgbGFiZWxQb3NpdGlvbiA9ICd0b3AnXG4gICAgfVxuXG4gICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBlbnRpdGllc1xuICAgIGZvciAodmFyIGogPSAwLCBqTWF4ID0gZW50aXRpZXMubGVuZ3RoOyBqIDwgak1heDsgaisrKSB7XG5cbiAgICAgIC8vIFNwbGl0IHRoZSBzZW1pLWNvbG9uIGRlbGltaXRlZCBzdHJpbmcgb2YgcmVwb3J0aW5nIHZhbHVlc1xuICAgICAgaWYoZW50aXRpZXNbal1bJ3NlY3Rvcl9fYyddID09PSBudWxsKSB7XG4gICAgICAgIHJlcG9ydGluZ1ZhbHVlQXJyID0gWy05OTk5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcG9ydGluZ1ZhbHVlQXJyID0gZW50aXRpZXNbal1bJ3NlY3Rvcl9fYyddLnRvU3RyaW5nKCkuc3BsaXQoJzsnKTtcbiAgICAgIH1cbiAgICAgIC8vIExvb3AgdGhydSB0aGUgcmVwb3J0aW5nIHZhbHVlc1xuICAgICAgZm9yICh2YXIgayA9IDAsIGtNYXggPSByZXBvcnRpbmdWYWx1ZUFyci5sZW5ndGg7IGsgPCBrTWF4OyBrKyspIHtcblxuICAgICAgICAvLyB0aGlzIGl0ZXJhdGlvbidzIHJlcG9ydGluZyB2YWx1ZVxuICAgICAgICByZXBvcnRpbmdWYWx1ZSA9IHJlcG9ydGluZ1ZhbHVlQXJyW2tdO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYWxyZWFkeSBjb21lIGFjcm9zcyB0aGlzIGlkIGJlZm9yZSAoYW5kIHN0YXJ0ZWQgYSBjb3VudCBvZiBpdHMgZnJlcXVlbmN5KSwgaW5jcmVtZW50IHRoZSBjb3VudFxuICAgICAgICBpZihkYXRhLmhhc093blByb3BlcnR5KHJlcG9ydGluZ1ZhbHVlKSkge1xuICAgICAgICAgIGRhdGFbcmVwb3J0aW5nVmFsdWVdWydjb3VudCddKys7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChyZXBvcnRpbmdWYWx1ZSA9PT0gJycpe1xuICAgICAgICAgIC8vIE51bGwgcmVwb3J0IGlkJ3MgY29tZSB0aHJvdWdoIGFzIGFuIGVtcHR5IHN0cmluZyBiZWNhdXNlIHNwbGl0dGluZyBhbiBlbXB0eSBzdHJpbmcsIGNyZWF0ZXMgYW4gYXJyYXkgd2l0aCBvbmUgZW1wdHkgc3RyaW5nXG4gICAgICAgICAgLy8gIFdlJ3JlIGFzc2lnbmluZyB0aGVzZSB0byBhIHZhbHVlIG9mIC05OTk5XG5cbiAgICAgICAgICAvLyBJbmNyZW1lbnQgdGhlIGNvdW50IG9mIC05OTk5XG4gICAgICAgICAgaWYoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnLTk5OTknKSkge1xuICAgICAgICAgICAgZGF0YVsnLTk5OTknXVsnY291bnQnXSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgdGhlIGZpcnN0IG51bGwgaWQsIGNyZWF0ZSBhbiBvYmplY3QgcHJvcGVydHkgYW5kIHN0YXJ0IHRoZSBjb3VudGVyXG4gICAgICAgICAgICBkYXRhWyctOTk5OSddID0ge1xuICAgICAgICAgICAgICAnY291bnQnOiAxLFxuICAgICAgICAgICAgICAnY29sb3InOiB2aXN1YWxpemF0aW9uRGljdGlvbmFyeVstOTk5OV0uY29sb3IsXG4gICAgICAgICAgICAgICdhbGlhcyc6IHZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5Wy05OTk5XS5sYWJlbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICB2YXIgcmVwb3J0aW5nUHJvcGVydGllcyA9IHZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5W3JlcG9ydGluZ1ZhbHVlXTtcblxuICAgICAgICAgIGlmICghcmVwb3J0aW5nUHJvcGVydGllcykge1xuICAgICAgICAgICAgcmVwb3J0aW5nUHJvcGVydGllcyA9IHtcbiAgICAgICAgICAgICAgY29sb3I6ICcjMjQwMjAxJyxcbiAgICAgICAgICAgICAgYWxpYXM6IHJlcG9ydGluZ1ZhbHVlIHx8ICdVbmtub3duJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgd2Ugc2VlIHRoaXMgaWQsIGNyZWF0ZSBhbiBvYmplY3QgcHJvcGVydHkgYW5kIHN0YXJ0IHRoZSBjb3VudGVyXG4gICAgICAgICAgZGF0YVtyZXBvcnRpbmdWYWx1ZV0gPSB7XG4gICAgICAgICAgICAnY291bnQnOiAxLFxuICAgICAgICAgICAgJ2NvbG9yJzogcmVwb3J0aW5nUHJvcGVydGllcy5jb2xvcixcbiAgICAgICAgICAgICdhbGlhcyc6IHJlcG9ydGluZ1Byb3BlcnRpZXMubGFiZWxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIHByZXAgZGF0YXNldCBmb3IgRDM7IG5lZWQgYSB0ZW1wIGRhdGFzZXQgdG8gZGVhbCB3aXRoIG1lcmdpbmcgb2YgZGF0YSBjb3VudHMgZm9yICdvdGhlcicgY2F0ZWdvcnlcbiAgICB0bXBEYXRhc2V0ID0gW107XG4gICAgZGF0YXNldCA9IFtdO1xuXG4gICAgLy8gUHVzaCBwcm9wZXJ0aWVzIGZyb20gb2JqZWN0IGhvbGRpbmcgdGhlIGNhdGVnb3J5IGNvdW50cy9jb2xvcnMgY2F0ZWdvcmllcyBpbnRvIGFuIG9iamVjdCBhcnJheVxuICAgIGZvciAodmFyIGogaW4gZGF0YSkge1xuICAgICAgdG1wRGF0YXNldC5wdXNoKGRhdGFbal0pO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBhbiBvYmplY3QgdGhhdCB3aWxsIG1lcmdlIHRoZSBjb3VudCBmcm9tIGFsbCBjbGFzc2lmaWNhdGlvbiBjYXRlcmdvcmllcyB0aGF0IHdlJ3ZlIGRlZW1lZCBhcyAnb3RoZXInJ1xuICAgIHZhciBtZXJnZWRPdGhlciA9IHtcbiAgICAgICdjb3VudCc6IDAsXG4gICAgICAnY29sb3InOiB2aXN1YWxpemF0aW9uRGljdGlvbmFyeVstOTk5OV0uY29sb3IsXG4gICAgICAnYWxpYXMnOiB2aXN1YWxpemF0aW9uRGljdGlvbmFyeVstOTk5OV0ubGFiZWxcbiAgICB9O1xuXG4gICAgLy8gTWVyZ2UgYWxsICdvdGhlcicgb2JqZWN0czsgd2UgZGV0ZXJtaW5lIHdoaWNoIGFyZSAnb3RoZXInIGJ5IHRlc3RpbmcgdG8gc2VlIGlmIGl0cyBiZWVuIGFzc2lnbmVkIHRoZSAnb3RoZXInIGNvbG9yXG4gICAgZm9yICh2YXIgayA9IDAsIGtNYXggPSB0bXBEYXRhc2V0Lmxlbmd0aDsgayA8IGtNYXg7IGsrKykge1xuXG4gICAgICBpZih0bXBEYXRhc2V0W2tdLmNvbG9yID09PSB2aXN1YWxpemF0aW9uRGljdGlvbmFyeVstOTk5OV0uY29sb3IpIHtcbiAgICAgICAgbWVyZ2VkT3RoZXIuY291bnQgPSBtZXJnZWRPdGhlci5jb3VudCArIHRtcERhdGFzZXRba10uY291bnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhc2V0LnB1c2godG1wRGF0YXNldFtrXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBtZXJnZSBvYmplZHQgdG8gdGhlIGRhdGFzZXQgd2Ugd2lsbCB1c2UgaW4gZG9udXQgY2hhcnRcbiAgICBkYXRhc2V0LnB1c2gobWVyZ2VkT3RoZXIpO1xuXG5cbiAgICAvLyBVc2UgalF1ZXJ5IHRvIGdldCB0aGlzIGNsdXN0ZXIgbWFya2VycyBoZWlnaHQgYW5kIHdpZHRoIChzZXQgaW4gdGhlIENTUylcbiAgICB3aWR0aCA9ICQod3JhcHBlcikud2lkdGgoKSAqIDAuNjU7XG4gICAgaGVpZ2h0ID0gJCh3cmFwcGVyKS5oZWlnaHQoKSAqIDAuNjU7XG5cbiAgICBpZihoZWlnaHQgPT09IDApIHtcbiAgICAgIGhlaWdodCA9IHdpZHRoO1xuICAgIH1cblxuICAgIHJhZGl1cyA9ICAoTWF0aC5taW4od2lkdGgsIGhlaWdodCkgLyAyKSAtIDEwO1xuICAgIGxhYmVsV3JhcHBlciA9ICQoJzxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7IG1hcmdpbjogMTBweCAwO1wiID48L2Rpdj4nKS5hcHBlbmRUbyh3cmFwcGVyKTtcbiAgICB2YXIgbGFiZWxTd2F0Y2ggPSAkKCc8ZGl2IHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2s7IHdpZHRoOiAxZW07IGhlaWdodDogMWVtOyBib3JkZXItcmFkaXVzOiA1MCVcIj48L2Rpdj4nKS5hcHBlbmRUbyhsYWJlbFdyYXBwZXIpO1xuICAgIHZhciBsYWJlbFRleHQgPSAkKCc8ZGl2IHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2s7IHBhZGRpbmctbGVmdDogMTBweDttYXJnaW4tdG9wOiAtLjRlbTt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiPjwvZGl2PicpLmFwcGVuZFRvKGxhYmVsV3JhcHBlcik7XG5cbiAgICBwaWUgPSBkMy5sYXlvdXQucGllKClcbiAgICAgIC5zb3J0KG51bGwpO1xuXG4gICAgYXJjID0gZDMuc3ZnLmFyYygpXG4gICAgICAuaW5uZXJSYWRpdXMocmFkaXVzLXJhZGl1cyAqIDAuNClcbiAgICAgIC5vdXRlclJhZGl1cyhyYWRpdXMpO1xuXG4gICAgdmFyIGFyY092ZXIgPSBkMy5zdmcuYXJjKClcbiAgICAgIC5vdXRlclJhZGl1cyhyYWRpdXMgKyAxMClcbiAgICAgIC5pbm5lclJhZGl1cygocmFkaXVzLXJhZGl1cyAqIDAuNCkgKyAxMCk7XG5cbiAgICAvLyBOb3RlIHRoYXQgd2UgYWRkICdjbHVzdGVyRG9udXQnIGFzIGEgc2VsZWN0b3JcbiAgICBzdmcgPSBkMy5zZWxlY3Qod3JhcHBlcikuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgd2lkdGggLyAyICsgXCIsXCIgKyBoZWlnaHQgLyAyICsgXCIpXCIpO1xuXG4gICAgdGhpcy5wYXRoID0gc3ZnLnNlbGVjdEFsbChcInBhdGhcIilcbiAgICAgIC5kYXRhKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBkYXRhT2JqQXJyLFxuICAgICAgICAgIGRhdGFBcnIsXG4gICAgICAgICAgcGllRGF0YTtcblxuICAgICAgICBkYXRhT2JqQXJyID0gZGF0YXNldDtcblxuICAgICAgICBkYXRhQXJyID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlNYXggPSBkYXRhT2JqQXJyLmxlbmd0aDsgaSA8IGlNYXg7IGkrKykge1xuICAgICAgICAgIGRhdGFBcnIucHVzaChkYXRhT2JqQXJyW2ldWydjb3VudCddKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBpZURhdGEgPSBwaWUoZGF0YUFycik7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlNYXggPSBwaWVEYXRhLmxlbmd0aDsgaSA8IGlNYXg7IGkrKykge1xuICAgICAgICAgIHBpZURhdGFbaV0uZGF0YSA9IGRhdGFPYmpBcnJbaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGllRGF0YTtcbiAgICAgIH0pXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCwgaikge1xuICAgICAgICByZXR1cm4gZC5kYXRhLmNvbG9yO1xuICAgICAgfSlcbiAgICAgIC5hdHRyKFwiZFwiLCBhcmMpXG4gICAgICAuYXR0cihcImN1cnNvclwiLFwicG9pbnRlclwiKVxuICAgICAgLmF0dHIoXCJjdXJzb3JcIixcInBvaW50ZXJcIilcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihkLCBpKSB7XG5cbiAgICAgICAgLy8gY2xlYXIgcHJldmlvdXNseSBhY3RpdmUgY2hhcnQgd2VkZ2VcbiAgICAgICAgZDMuc2VsZWN0KHdyYXBwZXIpLnNlbGVjdEFsbCgncGF0aCcpLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbigxMDApXG4gICAgICAgICAgLmF0dHIoXCJkXCIsIGFyYylcbiAgICAgICAgICAuYXR0cignb3BhY2l0eScsMSlcbiAgICAgICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywxKVxuICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCdyZ2JhKDI1NSwyNTUsMjU1LDEpJyk7XG5cbiAgICAgICAgLy8gTWFrZSB0aGUgbW91c2VvdmVyIHdlZGdlIGFjdGl2ZVxuICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKDEwMClcbiAgICAgICAgICAuYXR0cihcImRcIiwgYXJjT3ZlcilcbiAgICAgICAgICAuYXR0cignb3BhY2l0eScsMC44KVxuICAgICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLDIpXG4gICAgICAgICAgLmF0dHIoJ3N0cm9rZScsJ3JnYmEoMjU1LDI1NSwyNTUsMSknKTtcblxuICAgICAgICAvLyBNYWtlIGFwcHJvcHJpYXRlIGxhYmVsXG4gICAgICAgICQobGFiZWxTd2F0Y2gpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGQuZGF0YS5jb2xvcik7XG4gICAgICAgICQobGFiZWxUZXh0KS5odG1sKGQuZGF0YS5hbGlhcyk7XG5cbiAgICAgICAgLy8gU2hvdyB0aGUgbGFiZWwgaWYgY3VycmVudGx5IGhpZGRlblxuICAgICAgICBpZigkKHNlbGYuY2FwdGlvbikuY3NzKCdkaXNwbGF5JykgPT09ICdub25lJykge1xuICAgICAgICAgICQobGFiZWxXcmFwcGVyKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy8ub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbihkLGkpIHt9KVxuICAgICAgLmVhY2goZnVuY3Rpb24oZCwgaSkge1xuXG4gICAgICAgIC8vIG9uIGxvYWQsIHdlIHdhbnQgdGhlIGxhcmdlc3QgY2hhcnQgd2VkZ2UgdG8gYmUgYWN0aXZld1xuICAgICAgICBpZihpICE9PSAwICApe1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oMTAwKVxuICAgICAgICAgIC5hdHRyKFwiZFwiLCBhcmNPdmVyKVxuICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywwLjgpXG4gICAgICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsMilcbiAgICAgICAgICAuYXR0cignc3Ryb2tlJywncmdiYSgyNTUsMjU1LDI1NSwxKScpO1xuXG4gICAgICAgIC8vIG1ha2UgdGhlIGxhYmVsXG4gICAgICAgICQobGFiZWxTd2F0Y2gpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGQuZGF0YS5jb2xvcik7XG4gICAgICAgICQobGFiZWxUZXh0KS5odG1sKGQuZGF0YS5hbGlhcyk7XG5cbiAgICAgICAgaWYoJChsYWJlbFdyYXBwZXIpLmNzcygnZGlzcGxheScpID09PSAnbm9uZScpIHtcbiAgICAgICAgICAkKGxhYmVsV3JhcHBlcikuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBpZihsYWJlbFBvc2l0aW9uID09PSAndG9wJykge1xuICAgICAgbGFiZWxXcmFwcGVyLnByZXBlbmRUbyh3cmFwcGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFiZWxXcmFwcGVyLmFwcGVuZFRvKHdyYXBwZXIpO1xuICAgIH1cblxuICAgIHRoaXMubGFiZWxXcmFwcGVyID0gbGFiZWxXcmFwcGVyO1xuICAgIHRoaXMuc3ZnID0gc3ZnO1xuICB9XG5cblxuXG5cbiAgZnVuY3Rpb24gbWFrZVZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5KGNhdGVnb3J5RW50aXRpZXMsIG9wdHMpe1xuXG4gICAgdmFyIG9wdGlvbnMgPSBvcHRzIHx8IHt9O1xuXG4gICAgb3B0aW9ucy51bmFzc2lnbmVkQ29sb3IgPSBvcHRpb25zLnVuYXNzaWduZWRDb2xvciB8fCAnI0NDQ0NDQyc7XG4gICAgb3B0aW9ucy51bmFzc2lnbmVkTGFiZWwgPSBvcHRpb25zLnVuYXNzaWduZWRMYWJlbCB8fCAnTm90IEFzc2lnbmVkJztcblxuICAgIHZhciBkZWZhdWx0UGFsZXR0ZSA9IFtcIiMwMDk0MDBcIiwgXCIjRkZDOTNBXCIsIFwiI0ZGMzg0OVwiLCBcIiMxNzFDRThcIiwgXCIjMDVGRkQ5XCIsIFwiI0VDOEUyRlwiLCBcIiM2RUQ0NDRcIiwgXCIjOTU1NkVGXCIsIFwiIzIxNzVERVwiLCBcIiNFMjNCNURcIiwgXCIjMWY3N2I0XCIsIFwiI2FlYzdlOFwiLCBcIiNmZjdmMGVcIiwgXCIjZmZiYjc4XCIsIFwiIzJjYTAyY1wiLCBcIiM5OGRmOGFcIiwgXCIjZDYyNzI4XCIsIFwiI2ZmOTg5NlwiLCBcIiM5NDY3YmRcIiwgXCIjYzViMGQ1XCIsIFwiIzhjNTY0YlwiLCBcIiNjNDljOTRcIiwgXCIjZTM3N2MyXCIsIFwiI2Y3YjZkMlwiLCBcIiM3ZjdmN2ZcIiwgXCIjYzdjN2M3XCIsIFwiI2JjYmQyMlwiLCBcIiNkYmRiOGRcIiwgXCIjMTdiZWNmXCIsIFwiIzllZGFlNVwiLCBcIiMwMDk0MDBcIiwgXCIjRkZDOTNBXCIsIFwiI0ZGMzg0OVwiLCBcIiMxNzFDRThcIiwgXCIjMDVGRkQ5XCIsIFwiI0VDOEUyRlwiLCBcIiM2RUQ0NDRcIiwgXCIjOTU1NkVGXCIsIFwiIzIxNzVERVwiLCBcIiNFMjNCNURcIiwgXCIjMWY3N2I0XCIsIFwiI2FlYzdlOFwiLCBcIiNmZjdmMGVcIiwgXCIjZmZiYjc4XCIsIFwiIzJjYTAyY1wiLCBcIiM5OGRmOGFcIiwgXCIjZDYyNzI4XCIsIFwiI2ZmOTg5NlwiLCBcIiM5NDY3YmRcIiwgXCIjYzViMGQ1XCIsIFwiIzhjNTY0YlwiLCBcIiNjNDljOTRcIiwgXCIjZTM3N2MyXCIsIFwiI2Y3YjZkMlwiLCBcIiM3ZjdmN2ZcIiwgXCIjYzdjN2M3XCIsIFwiI2JjYmQyMlwiLCBcIiNkYmRiOGRcIiwgXCIjMTdiZWNmXCIsIFwiIzllZGFlNVwiXTtcblxuICAgIHZhciBkaWN0aW9uYXJ5ID0ge307XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgY2F0ZWdvcnlFbnRpdGllcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICB2YXIgY29sb3IgPSBudWxsO1xuXG4gICAgICBpZihpIDwgZGVmYXVsdFBhbGV0dGUubGVuZ3RoKSB7XG4gICAgICAgIGNvbG9yID0gZGVmYXVsdFBhbGV0dGVbaV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaW5kZXggPSBpICUgZGVmYXVsdFBhbGV0dGUubGVuZ3RoIC0gMTtcbiAgICAgICAgY29sb3IgPSBkZWZhdWx0UGFsZXR0ZVtpbmRleF07XG4gICAgICB9XG4gICAgICBkaWN0aW9uYXJ5W2NhdGVnb3J5RW50aXRpZXNbaV0udmFsdWVdID0ge1xuICAgICAgICB2YWx1ZTogY2F0ZWdvcnlFbnRpdGllc1tpXS52YWx1ZSxcbiAgICAgICAgbGFiZWw6IGNhdGVnb3J5RW50aXRpZXNbaV0ubGFiZWwsXG4gICAgICAgIGNvbG9yOiBjb2xvclxuICAgICAgfTtcblxuICAgIH1cblxuICAgIGRpY3Rpb25hcnlbLTk5OTldID0ge1xuICAgICAgdmFsdWU6IC05OTk5LFxuICAgICAgbGFiZWw6IG9wdGlvbnMudW5hc3NpZ25lZExhYmVsLFxuICAgICAgY29sb3I6IG9wdGlvbnMudW5hc3NpZ25lZENvbG9yXG4gICAgfTtcblxuICAgIHJldHVybiBkaWN0aW9uYXJ5O1xuICB9XG5cblxuICAvKipcbiAgICogUHVibGljIGZ1bmN0aW9ucyB0aGF0IGFyZSBhY2Nlc3NpYmxlIGVsc2V3aGVyZSBpbiB0aGUgYXBwLlxuICAgKiBFeDogRG9udXRzLmNyZWF0ZURldGFpbHNEb251dChhcmcxLCBhcmcyKTtcbiAgICovXG4gIHJldHVybiB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgRDMgZG9udXQgdGhhdCBnb2VzIGFyb3VuZCBhIGxhYmVsIG9uIHRoZSBtYXAuXG4gICAgICovXG4gICAgY3JlYXRlTGFiZWxEb251dDogZnVuY3Rpb24oc2VjdG9ycywgcHJvamVjdHMsIGRpdklkKSB7XG4gICAgICB2YXIgdml6RGljdGlvbmFyeSA9IG1ha2VWaXN1YWxpemF0aW9uRGljdGlvbmFyeShzZWN0b3JzKTtcbiAgICAgIHZhciBkb251dCA9IG5ldyBFeHBhbmRvRG9udXQocHJvamVjdHMsIHZpekRpY3Rpb25hcnksIGRpdklkICwgJ2JvdHRvbScpO1xuICAgICAgJChkaXZJZCkucHJlcGVuZCgnPGRpdiBpZD1cInNlY3RvcnMtaGVhZGluZ1wiIGNsYXNzPVwiaGVhZGluZ1wiPlNlY3RvcnM8L2Rpdj4nKTtcbiAgICAgIHJldHVybiBkb251dDtcbiAgICB9XG5cbiAgfTtcblxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDMvMTgvMTQuXG4gKi9cblxuLyoqXG4gKiBBbGwgb2YgdGhlIGxheWVyIG5hbWVzIG5lZWQgdG8gYmUgbG93ZXJjYXNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdTcGF0aWFsVmlld2VyJykuc2VydmljZSgnTGF5ZXJDb25maWcnLCBmdW5jdGlvbiAoJHN0YXRlUGFyYW1zLCAkcm9vdFNjb3BlKSB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGF5ZXJzIHNwZWNpZmllZCBpbiB0aGlzIG1haW4gTGF5ZXJDb25maWcgbW9kdWxlIGFyZSBpbnRlZ3JhbCB0byBTcGF0aWFsVmlld2VyXG4gICAgICogYW5kIHNob3VsZCBub3QgYmUgY2hhbmdlZCBieSB0aGUgdXNlci5cbiAgICAgKi9cblxuICAgIHZhciBjdXJyZW50bGF5ZXJzID0gW107XG5cbiAgICB2YXIgbGF5ZXJzID0gW107XG5cbiAgICAkcm9vdFNjb3BlLiRvbignbGF5ZXJzLXVwZGF0ZScsIGZ1bmN0aW9uIChlLGwpIHtcbiAgICAgICAgLy8gc2V0IGN1cnJlbnQgbGF5ZXJzIGZvciBtYXAuanMgc2NvcGUuYWxsU2VjdG9yc1xuICAgICAgICBsYXllcnMgPSAkc3RhdGVQYXJhbXMubGF5ZXJzLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgbGF5ZXJzLmZvckVhY2goZnVuY3Rpb24gKHZhbCwgaWR4KSB7XG4gICAgICAgICAgICBpZiAoaWR4ICE9PSAwICYmIGN1cnJlbnRsYXllcnMuaW5kZXhPZih2YWwpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGxheWVycy5wdXNoKHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgICB2YXIgQWxsRmVhdHVyZXMgPSBbXTtcblxuICAgIHZhciBjb2xsZWN0TGF5ZXJGZWF0dXJlcyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKEFsbEZlYXR1cmVzLmxlbmd0aCA9PSBjdXJyZW50bGF5ZXJzLmxlbmd0aCl7XG4gICAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2RldGFpbHMnLCBBbGxGZWF0dXJlcyk7XG4gICAgICAgICAgICBBbGxGZWF0dXJlcyA9IFtdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vR0FETSBjb3VudHJ5IGV4dGVudHMsIGxldmVsIDBcbiAgICB0aGlzLmNvdW50cnlleHRlbnRzID0ge1xuICAgICAgICB0eXBlOiAnZ2VvanNvbicsXG4gICAgICAgIHVybDogJ2RhdGEvdndfZ2FkbV9yYXdfZ2VvbS5nZW9qc29uJ1xuICAgIH07XG5cbiAgICAvL0FSQyBSZWdpb24gZXh0ZW50c1xuICAgIHRoaXMuYXJjcmVnaW9uZXh0ZW50cyA9IHtcbiAgICAgICAgdHlwZTogJ2dlb2pzb24nLFxuICAgICAgICB1cmw6ICdkYXRhL2FyY19yZWdpb25fZXh0ZW50cy5nZW9qc29uJ1xuICAgIH07XG5cbiAgICB2YXIgY29uZmlnTGF5ZXJzID0gW1xuICAgICAgICByZXF1aXJlKCcuLi8uLi9jb25maWcvbGF5ZXJzL2Jhc2VtYXBzLmpzJyksXG4gICAgICAgIC8vcmVxdWlyZSgnLi4vLi4vY29uZmlnL2xheWVycy9jc3YuanMnKSxcbiAgICAgICAgLy9yZXF1aXJlKCcuLi8uLi9jb25maWcvbGF5ZXJzL2dlb2pzb24uanMnKSxcbiAgICAgICAgLy9yZXF1aXJlKCcuLi8uLi9jb25maWcvbGF5ZXJzL2ttbC5qcycpLFxuICAgICAgICAvL3JlcXVpcmUoJy4uLy4uL2NvbmZpZy9sYXllcnMvb3RoZXIuanMnKSxcbiAgICAgICAgcmVxdWlyZSgnLi4vLi4vY29uZmlnL2xheWVycy9wYmYuanMnKVxuICAgICAgICAvL3JlcXVpcmUoJy4uLy4uL2NvbmZpZy9sYXllcnMvd21zLmpzJyksXG4gICAgICAgIC8vcmVxdWlyZSgnLi4vLi4vY29uZmlnL2xheWVycy94eXouanMnKVxuICAgIF07XG5cbiAgICAvLyBhZGQgYWxsIGxheWVycyBhbmQgcmVtb3ZlIGZyb20gY291bnRyeSBmYWN0b3JpZXNcbiAgICAvLyByZWZlcmVuY2UgaW4gZmlsdGVycy5qc1xuICAgIHRoaXMuY29uZmlnTGF5ZXJzID0ge307XG4gICAgdGhpcy5jb25maWdMYXllcnNbJ2NpY29zX3VnYW5kYSddID0gY29uZmlnTGF5ZXJzWzFdWydjaWNvc191Z2FuZGEnXTtcbiAgICB0aGlzLmNvbmZpZ0xheWVyc1snZWR1Y2F0aW9uX3VnYW5kYSddID0gY29uZmlnTGF5ZXJzWzFdWydlZHVjYXRpb25fdWdhbmRhJ107XG4gICAgdGhpcy5jb25maWdMYXllcnNbJ2FncmljdWx0dXJlX3VnYW5kYSddID0gY29uZmlnTGF5ZXJzWzFdWydhZ3JpY3VsdHVyZV91Z2FuZGEnXTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjb25maWdMYXllcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGNmZyA9IGNvbmZpZ0xheWVyc1tpXTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGNmZykge1xuICAgICAgICAgICAgdGhpc1trZXldID0gY2ZnW2tleV07XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaWR4ID0gMDtcblxuICAgIC8vIHdhdGNoIGZvciB3aGVuIHVzZXIgZGV0YWlscyBwYW5lbCBpbmRleCBjaGFuZ2VzXG4gICAgJHJvb3RTY29wZS4kb24oJ2FjdGl2ZWlkeCcsIGZ1bmN0aW9uIChldmVudCwgYXJncykge1xuICAgICAgICAvLyBhY3RpdmVpZHggY2hhbmdlcyBtdWx0aXBsZXMgdGltZXMgaW4gZGV0YWlscy5qcywgc28gb25seSBydW4gd2hlbiBkZXRhaWxzIGluZGV4ICE9IGFjdGl2ZWlkeFxuICAgICAgICBpZiAoaWR4ICE9PSBhcmdzLnByb3BlcnRpZXMuaW5kZXggJiYgYXJncy5wcm9wZXJ0aWVzLmluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICBpZHggPSBhcmdzLnByb3BlcnRpZXMuaW5kZXg7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuY29uZmlnTGF5ZXJzWydjaWNvc191Z2FuZGEnXVsnb25DbGljayddID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICRyb290U2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoZXZ0ICYmIGV2dC5mZWF0dXJlcyAmJiBldnQuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIEFsbEZlYXR1cmVzLnB1c2goZXZ0LmZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgICBjb2xsZWN0TGF5ZXJGZWF0dXJlcygpO1xuICAgICAgICAgICAgICAgIC8vJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkZXRhaWxzJywgZXZ0LmZlYXR1cmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5jb25maWdMYXllcnNbJ2VkdWNhdGlvbl91Z2FuZGEnXVsnb25DbGljayddID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICRyb290U2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoZXZ0ICYmIGV2dC5mZWF0dXJlcyAmJiBldnQuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIEFsbEZlYXR1cmVzLnB1c2goZXZ0LmZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgICBjb2xsZWN0TGF5ZXJGZWF0dXJlcygpO1xuICAgICAgICAgICAgICAgIC8vJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkZXRhaWxzJywgZXZ0LmZlYXR1cmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5jb25maWdMYXllcnNbJ2FncmljdWx0dXJlX3VnYW5kYSddWydvbkNsaWNrJ10gPSBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYXBwbHkoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChldnQgJiYgZXZ0LmZlYXR1cmVzICYmIGV2dC5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgQWxsRmVhdHVyZXMucHVzaChldnQuZmVhdHVyZXMpO1xuICAgICAgICAgICAgICAgIGNvbGxlY3RMYXllckZlYXR1cmVzKCk7XG4gICAgICAgICAgICAgICAgLy8kcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2RldGFpbHMnLCBldnQuZmVhdHVyZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIEZvciBsYXllcnMsIHdlIHRyeSBhbmQgZ2V0IGFuIGFsaWFzIGZvciBldmVyeXRoaW5nLCBzbyBpZiBpdCdzIGEgVVJMIHRoYXRcbiAgICAgKiBkb2VzIG5vdCBtYXRjaCwgd2UganVzdCB3YW50IHRvIHJldHVybiBpdHNlbGYgc28gd2UgY2FuIGZldGNoIHRoYXQgZ2l2ZW4gdXJsLlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICB0aGlzLmZpbmQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB2YXIgdmFsID0gdGhpc1tuYW1lXSB8fCB0aGlzW25hbWUudG9Mb3dlckNhc2UoKV07XG4gICAgICAgIGlmICh0eXBlb2YgdmFsICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUuc2xpY2UoMCwgNCkudG9Mb3dlckNhc2UoKSA9PT0gJ2h0dHAnKSB7XG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmVycm9yKCdDT1VMRCBOT1QgRklORCBBTElBUzogJyArIG5hbWUpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMy8xOC8xNC5cbiAqL1xuXG4vKipcbiAqIENvbmZpZyBGaWxlIGZvciBTdG9yaWVzIFBhbmVsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ1NwYXRpYWxWaWV3ZXInKS5zZXJ2aWNlKCdTdG9yaWVzQ29uZmlnJywgZnVuY3Rpb24gKCkge1xuXG4gIC8qKlxuICAgKiBTdG9yaWVzIFBhbmVsIExpc3RcbiAgICpcbiAgICogTGlzdCBvZiBzdG9yaWVzIHRoYXQgZ2V0IHNob3duIGluIHRoZSBTdG9yaWVzIFBhbmVsLiBFZGl0IHRoaXMgdG8gYWRkIG9yIHJlbW92ZVxuICAgKiBzdG9yaWVzIHRoYXQgdGhlIHVzZXIgd2lsbCBzZWUgYXMgY2hvaWNlcy4gQWxsIHN0b3JpZXMsIGluY2x1ZGluZyBvbmVzIG5vdCBpbiB0aGlzXG4gICAqIGxpc3QsIGNhbiBzdGlsbCBiZSBtYW51YWxseSByZWZlcmVuY2VkIGluIHRoZSB1cmwuIFRoaXMgaXMganVzdCBmb3IgdGhlIFVzZXIgSW50ZXJmYWNlLlxuICAgKi9cbiAgdGhpcy5zdG9yaWVzID0gW1xuICAgICdoYWl5YW4nLFxuICAgICdlYm9sYScsXG4gIF07XG5cblxuICAvKipcbiAgICogU3Rvcmllc1xuICAgKlxuICAgKiBBbGwgc3RvcnkgYWxpYXNlcyBjYW4gYmUgcmVmZXJyZWQgdG8gaW4gdGhlIHVybC4gVGhlIGNvcnJlc3BvbmRpbmdcbiAgICogcGF0aCB0byB0aGUgdGh1bWJuYWlsIGluIHRoZSBTdG9yaWVzIFBhbmVsIHNob3VsZCBiZTpcbiAgICogICAgaW1hZ2VzL3thbGlhc05hbWV9LmpwZ1xuICAgKlxuICAgKi9cblxuICB0aGlzLmhhaXlhbiA9IHtcbiAgICB1cmw6ICcvbWFwZm9saW8vaW5kZXguaHRtbCMvbWFwQDEyLjc2ODk0NiwxMjIuNDg2NTcyLDYob3J0aG8sdGhlbWVjb3VudCxnZGFjcyk/dGhlbWU9ZGlzYXN0ZXImZGV0YWlscy1wYW5lbD1vcGVuJnNmX2lkPWEwRWQwMDAwMDBxWm50VUVBUycsXG4gICAgbmFtZTogJ1R5cGhvb24gSGFpeWFuIFJlc3BvbnNlJyxcbiAgICBkYXRlOiAnMjAxMy0xMC0xMicsXG4gICAgdGh1bWJuYWlsOiAnaW1hZ2VzL3N0b3JpZXMvaGFpeWFuLnBuZycsXG4gICAga2V5d29yZHM6ICdUeXBob29uLCBEaXNhc3RlciBSZXNwb25zZSwgSGFpeWFuLCBEaXNhc3RlciwgQU1FRSdcbiAgfTtcbiAgdGhpcy5lYm9sYSA9IHtcbiAgICB1cmw6ICcvbWFwZm9saW8vaW5kZXguaHRtbCMvbWFwQDE1LjA3MjEyNCwtMy40NjA2OTMsNihvcnRobyx0aGVtZWNvdW50LGdkYWNzKT90aGVtZT1kaXNhc3RlcicsXG4gICAgbmFtZTogJ0Vib2xhIE91dGJyZWFrIFJlc29wbnNlJyxcbiAgICBkYXRlOiAnMjAxNC0xNS01JyxcbiAgICB0aHVtYm5haWw6ICdpbWFnZXMvc3Rvcmllcy9lYm9sYS5wbmcnLFxuICAgIGtleXdvcmRzOiAnRWJvbGEsIERpc2FzdGVyIFJlc3BvbnNlLCBHdWluZWEsIERpc2Vhc2UsIE1hbGksIEFmcmljYSdcblxuXG4gIH07XG5cbiAgLyoqXG4gICAqIEZvciBsYXllcnMsIHdlIHRyeSBhbmQgZ2V0IGFuIGFsaWFzIGZvciBldmVyeXRoaW5nLCBzbyBpZiBpdCdzIGEgVVJMIHRoYXRcbiAgICogZG9lcyBub3QgbWF0Y2gsIHdlIGp1c3Qgd2FudCB0byByZXR1cm4gaXRzZWxmIHNvIHdlIGNhbiBmZXRjaCB0aGF0IGdpdmVuIHVybC5cbiAgICpcbiAgICogQHBhcmFtIG5hbWVcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICB0aGlzLmZpbmQgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIHZhbCA9IHRoaXNbbmFtZV0gfHwgdGhpc1tuYW1lLnRvTG93ZXJDYXNlKCldO1xuICAgIGlmICh0eXBlb2YgdmFsICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIGlmIChuYW1lLnNsaWNlKDAsIDQpLnRvTG93ZXJDYXNlKCkgPT09ICdodHRwJykge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoJ0NPVUxEIE5PVCBGSU5EIEFMSUFTOiAnICsgbmFtZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA2LzMvMTQuXG4gKi9cblxudmFyIFJlc291cmNlID0gcmVxdWlyZSgnLi9yZXNvdXJjZScpO1xudmFyICRyb290U2NvcGUgPSByZXF1aXJlKCcuL3ZlY3RvcicpLiRyb290U2NvcGU7XG5cbm1vZHVsZS5leHBvcnRzID0gR2VvSlNPTjtcblxuLyoqXG4gKiBUaGlzIGlzIGEgYmFzaWMgR2VvSlNPTiBWZWN0b3JQcm92aWRlci5cbiAqIEBwYXJhbSBjb25maWdcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBHZW9KU09OKGNvbmZpZykge1xuICBSZXNvdXJjZS5jYWxsKHRoaXMsIGNvbmZpZyk7XG4gIHRoaXMuX2dlb2pzb24gPSBudWxsO1xufVxuXG5HZW9KU09OLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUmVzb3VyY2UucHJvdG90eXBlKTtcbkdlb0pTT04ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VvSlNPTjtcblxuR2VvSlNPTi5wcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbiAoY2IpIHtcbiAgaWYgKHRoaXMuX2dlb2pzb24gJiYgdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2IodGhpcy5fZ2VvanNvbik7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBzZWxmID0gdGhpcztcbiAgUmVzb3VyY2UucHJvdG90eXBlLmZldGNoLmNhbGwodGhpcywgZnVuY3Rpb24oZGF0YSkge1xuICAgIHNlbGYuX2dlb2pzb24gPSBkYXRhO1xuICAgIGlmICh0eXBlb2Ygc2VsZi5fY29uZmlnLnByb3BlcnRpZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoIGRhdGEudHlwZSA9PT0gJ0ZlYXR1cmVDb2xsZWN0aW9uJykge1xuICAgICAgICB2YXIgZmVhdHMgPSBkYXRhLmZlYXR1cmVzO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZmVhdHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICB2YXIgZmVhdCA9IGZlYXRzW2ldO1xuICAgICAgICAgIGlmICghZmVhdC5wcm9wZXJ0aWVzKSBmZWF0LnByb3BlcnRpZXMgPSB7fTtcbiAgICAgICAgICBhbmd1bGFyLmV4dGVuZChmZWF0LnByb3BlcnRpZXMsIHNlbGYuX2NvbmZpZy5wcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHsgLy8gYSBmZWF0dXJlIG9yIGEgZ2VvbWV0cnkgdHlwZVxuICAgICAgICBpZiAoIWRhdGEucHJvcGVydGllcykgZGF0YS5wcm9wZXJ0aWVzID0ge307XG4gICAgICAgIGFuZ3VsYXIuZXh0ZW5kKGRhdGEucHJvcGVydGllcywgc2VsZi5fY29uZmlnLnByb3BlcnRpZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHNlbGYuX2dlb2pzb24pO1xuICB9KTtcbn07XG5cbkdlb0pTT04ucHJvdG90eXBlLmdldExheWVyID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLl9nZW9qc29uTGF5ZXIpIHJldHVybiB0aGlzLl9nZW9qc29uTGF5ZXI7XG4gIHZhciBsYXllciA9ICBSZXNvdXJjZS5wcm90b3R5cGUuZ2V0TGF5ZXIuY2FsbCh0aGlzKTtcbiAgdGhpcy5mZXRjaChmdW5jdGlvbihnZW9qc29uKXtcbiAgICBsYXllci5hZGREYXRhKGdlb2pzb24pO1xuICAgIGxheWVyLmVhY2hMYXllcihmdW5jdGlvbiAobCkge1xuICAgICAgbC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZGV0YWlscycsIGwpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gbGF5ZXI7XG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA2LzMvMTQuXG4gKi9cblxudmFyIFJlc291cmNlID0gcmVxdWlyZSgnLi9yZXNvdXJjZScpO1xudmFyICRyb290U2NvcGUgPSByZXF1aXJlKCcuL3ZlY3RvcicpLiRyb290U2NvcGU7XG52YXIgdG9HZW9KU09OID0gcmVxdWlyZSgnLi92ZWN0b3InKS50b0dlb0pTT047XG52YXIgJCA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJDtcblxubW9kdWxlLmV4cG9ydHMgPSBLTUw7XG5cbi8qKlxuICogQSBLTUwgUmVzb3VyY2UgZmV0Y2hlcyBLTUwgYW5kIHBhcnNlcyBpdCB3aXRoIHRvZ2VvanNvbi5qc1xuICogTm90ZSB0aGF0IHRvZ2VvanNvbi5qcyBoYXMgYnVncyBhbmQgZG9lcyBub3QgYWNjdXJhdGVseSBwYXJzZVxuICogc29tZSBvZiB0aGUgS01MIHNvdXJjZXMgd2UgaGF2ZSB0ZXN0ZWQgd2l0aC4gVGhpcyBsaWJyYXJ5IGhhc1xuICogYmVlbiBtb2RpZmllZCB3aXRoIG15IGhvdGZpeGVzLlxuICpcbiAqIEBwYXJhbSBjb25maWdcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBLTUwoY29uZmlnKSB7XG4gIFJlc291cmNlLmNhbGwodGhpcywgY29uZmlnKTtcbiAgdGhpcy5fZ2VvanNvbiA9IG51bGw7XG59XG5cbktNTC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFJlc291cmNlLnByb3RvdHlwZSk7XG5LTUwucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gS01MO1xuXG5LTUwucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24gKGNiKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgUmVzb3VyY2UucHJvdG90eXBlLmZldGNoLmNhbGwodGhpcywgZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciB4bWwgPSAkLnBhcnNlWE1MKGRhdGEpO1xuICAgIHNlbGYuX2dlb2pzb24gPSB0b0dlb0pTT04ua21sKHhtbCk7XG4gICAgaWYgKHR5cGVvZiBzZWxmLl9jb25maWcucHJvcGVydGllcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICh0eXBlb2Ygc2VsZi5fZ2VvanNvbi5wcm9wZXJ0aWVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzZWxmLl9nZW9qc29uLnByb3BlcnRpZXMgPSB7fTtcbiAgICAgIH1cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kKHNlbGYuX2dlb2pzb24ucHJvcGVydGllcywgc2VsZi5fY29uZmlnLnByb3BlcnRpZXMpO1xuICAgICAgc2VsZi5fZ2VvanNvbi5wcm9wZXJ0aWVzLnNyY1R5cGUgPSAna21sJztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2Ioc2VsZi5fZ2VvanNvbiwgc2VsZik7XG4gIH0pO1xufTtcblxuS01MLnByb3RvdHlwZS5nZXRMYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuX2dlb2pzb25MYXllcikgcmV0dXJuIHRoaXMuX2dlb2pzb25MYXllcjtcbiAgdmFyIGxheWVyID0gIFJlc291cmNlLnByb3RvdHlwZS5nZXRMYXllci5jYWxsKHRoaXMpO1xuICB0aGlzLmZldGNoKGZ1bmN0aW9uKGdlb2pzb24pe1xuICAgIGxheWVyLmFkZERhdGEoZ2VvanNvbik7XG4gICAgbGF5ZXIuZWFjaExheWVyKGZ1bmN0aW9uIChsKSB7XG4gICAgICBsLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkZXRhaWxzJywgbCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBsYXllcjtcbn07XG5cbktNTC5wcm90b3R5cGUuZWFjaExheWVyID0gZnVuY3Rpb24gKGNiKSB7XG4gIHRoaXMuX2VhY2hMYXllckNhbGxiYWNrID0gY2I7XG4gIHRoaXMuZmV0Y2goZnVuY3Rpb24oZ2VvanNvbiwgc2VsZil7XG4gICAgdmFyIGxheWVycyA9IHNlbGYuX2dlb2pzb25MYXllci5fbGF5ZXJzO1xuICAgIGZvciAodmFyIGtleSBpbiBsYXllcnMpIHtcbiAgICAgIHZhciBsYXllciA9IGxheWVyc1trZXldO1xuICAgICAgY2IobGF5ZXIpO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA2LzMvMTQuXG4gKi9cblxudmFyIHJlc291cmNlcyA9IHJlcXVpcmUoJy4vdmVjdG9yJykucmVzb3VyY2VzO1xudmFyICRodHRwID0gcmVxdWlyZSgnLi92ZWN0b3InKS4kaHR0cDtcblxubW9kdWxlLmV4cG9ydHMgPSBSZXNvdXJjZTtcblxuLyoqXG4gKiBBbGwgVmVjdG9yUHJvdmlkZXIgcmVzb3VyY2VzIGFyZSBjaGlsZHJlbiBvZiB0aGlzIGNsYXNzLlxuICogQHBhcmFtIGNvbmZpZ1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFJlc291cmNlKGNvbmZpZykge1xuICByZXNvdXJjZXMucHVzaCh0aGlzKTtcbiAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB0aGlzLl91cmwgPSBudWxsO1xuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICB0aGlzLl91cmwgPSBjb25maWcudXJsO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX3VybCA9IGNvbmZpZztcbiAgfVxuXG4gIHRoaXMuX2VhY2hMYXllckNhbGxiYWNrID0gbnVsbDtcbiAgdGhpcy5fZ2VvanNvbkxheWVyID0gbnVsbDtcbn1cblxuXG4vKipcbiAqIEZldGNoZXMgZGF0YSBmcm9tIHRoZSBnaXZlbiB1cmwgb2YgYSByZXNvdXJjZS5cbiAqIFN1YmNsYXNzZXMgdGhlbiBoYW5kbGUgdGhlIGNhbGxiYWNrIGFjY29yZGluZ2x5LlxuICpcbiAqIE5lZWRzIHRvIGFsc28gdHJ5IHRvIGdldCBhIHJlc291cmNlIHZpYSB0aGUgQ2h1YmJzXG4gKiBwcm94eS5cbiAqXG4gKiBAcGFyYW0gY2JcbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24oY2IpIHtcbiAgdmFyIHByb3h5UGF0aCA9IGNvbmZpZy5wcm94eVBhdGgodGhpcy5fdXJsKTtcbiAgJGh0dHAuZ2V0KHRoaXMuX3VybCwge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XG4gICAgY2IoZGF0YSk7XG4gIH0pLmVycm9yKGZ1bmN0aW9uKCkge1xuICAgIC8vIHRyeWluZyBwcm94eVxuICAgICRodHRwLmdldChwcm94eVBhdGgsIHtjYWNoZTogdHJ1ZX0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cykge1xuICAgICAgY2IoZGF0YSk7XG4gICAgfSkuZXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIGZldGNoIGZyb206IFwiICsgcHJveHlQYXRoKTtcbiAgICB9KTtcbiAgfSk7XG5cbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBMZWFmbGV0IEdlb0pTT04gTGF5ZXIgYXNzb2NpYXRlZCB3aXRoIHRoZVxuICogUmVzb3VyY2Ugb3IgY3JlYXRlcyBhIG5ldyBvbmUuXG4gKlxuICogQHJldHVybnMge251bGx8Kn1cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLmdldExheWVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIHRoaXMuX2dlb2pzb25MYXllciAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5fZ2VvanNvbkxheWVyICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dlb2pzb25MYXllcjtcbiAgfVxuXG4gIHRoaXMuX2dlb2pzb25MYXllciA9IEwuZ2VvSnNvbih0aGlzLl9nZW9qc29uIHx8IG51bGwsIHtcbiAgICBzdHlsZTogZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgaWYgKHR5cGVvZiBmZWF0dXJlLnByb3BlcnRpZXMuc3R5bGVGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLnN0eWxlRm4oZmVhdHVyZS5wcm9wZXJ0aWVzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBMLm1hcGJveC5zaW1wbGVzdHlsZS5zdHlsZShmZWF0dXJlKTtcbiAgICB9LFxuICAgIHBvaW50VG9MYXllcjogZnVuY3Rpb24oZmVhdHVyZSwgbGF0bG9uKSB7XG4gICAgICBpZiAoIWZlYXR1cmUucHJvcGVydGllcykgZmVhdHVyZS5wcm9wZXJ0aWVzID0ge307XG4gICAgICBpZiAoZmVhdHVyZS5wcm9wZXJ0aWVzLnNjYWxlKSB7XG4gICAgICAgIHJldHVybiBMLmNpcmNsZU1hcmtlcihsYXRsb24sIHtcbiAgICAgICAgICBmaWxsQ29sb3I6IGZlYXR1cmUucHJvcGVydGllcy5jb2xvciB8fCAnI0ZGMDAwMCcsXG4gICAgICAgICAgcmFkaXVzOiAyMCAqIGZlYXR1cmUucHJvcGVydGllcy5zY2FsZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBMLm1hcGJveC5tYXJrZXIuc3R5bGUoZmVhdHVyZSwgbGF0bG9uKTtcbiAgICB9XG4gIH0pLmVhY2hMYXllcih0aGlzLl9lYWNoTGF5ZXJDYWxsYmFjayk7XG5cblxuICByZXR1cm4gdGhpcy5fZ2VvanNvbkxheWVyO1xufTtcblxuUmVzb3VyY2UucHJvdG90eXBlLmVhY2hMYXllciA9IGZ1bmN0aW9uIChjYikge1xuICB0aGlzLl9lYWNoTGF5ZXJDYWxsYmFjayA9IGNiO1xuICB0aGlzLl9nZW9qc29uTGF5ZXIuZWFjaExheWVyKGNiKTtcbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDMvMTkvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnU3BhdGlhbFZpZXdlcicpLmZhY3RvcnkoJ1ZlY3RvclByb3ZpZGVyJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRsb2NhdGlvbiwgJGh0dHAsIExheWVyQ29uZmlnKSB7XG5cbiAgdmFyIHZlY3RvciA9IHJlcXVpcmUoJy4vdmVjdG9yJyk7XG4gIHZlY3Rvci5zZXRJbmplY3RvcnMoJHJvb3RTY29wZSwgJGxvY2F0aW9uLCAkaHR0cCwgTGF5ZXJDb25maWcpO1xuXG4gIHZhciBSZXNvdXJjZSA9IHJlcXVpcmUoJy4vUmVzb3VyY2UnKTtcbiAgdmFyIEdlb0pTT04gPSByZXF1aXJlKCcuL0dlb0pTT04nKTtcbiAgdmFyIEtNTCA9IHJlcXVpcmUoJy4vS01MJyk7XG4gIHZhciBDU1YgPSByZXF1aXJlKCcuL2NzdicpO1xuXG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgdXNlZCBieSB0aGUgZmFjdG9yeSB0byBkeW5hbWljYWxseSBzdGF0ZSB0aGUgdHlwZSAoY2xhc3MpXG4gICAqIHRoYXQgaXQgd2FudHMgdG8gaW5zdGFudGlhdGUuXG4gICAqXG4gICAqIEB0eXBlIHt7Z2VvanNvbjogR2VvSlNPTiwga21sOiBLTUwsIGNzdjogQ1NWfX1cbiAgICovXG4gIHZhciB0eXBlcyA9IHtcbiAgICBnZW9qc29uOiBHZW9KU09OLFxuICAgIGttbDogS01MLFxuICAgIGNzdjogQ1NWXG4gIH07XG5cblxuICByZXR1cm4ge1xuICAgIC8qKlxuICAgICAqIFlvdSBjYW4gZXhwbGljaXRseSBuYW1lIHRoZSB0eXBlIG9mIHJlc291cmNlLiBJZiBub3QsXG4gICAgICogd2Ugd2lsbCBmaWd1cmUgaXQgb3V0IGZvciB5b3UuLi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXNvdXJjZU5hbWVcbiAgICAgKiBAcGFyYW0gdHlwZVxuICAgICAqL1xuICAgIGNyZWF0ZVJlc291cmNlOiBmdW5jdGlvbiAocmVzb3VyY2VOYW1lLCB0eXBlKSB7XG4gICAgICB2YXIgY29uZmlnID0gTGF5ZXJDb25maWcuZmluZChyZXNvdXJjZU5hbWUpO1xuICAgICAgaWYgKGNvbmZpZyA9PT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdWZWN0b3JQcm92aWRlcjogSW52YWxpZCBSZXNvdXJjZSBDb25maWd1cmF0aW9uIE5hbWUuIENoZWNrIExheWVyQ29uZmlnIEZpbGUuLi4nKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSB8fCBjb25maWcudHlwZSkge1xuICAgICAgICAvLyBpZiB0aGUgcmVzb3VyY2UgaXMganVzdCBhIHN0cmluZywgdGhlbiBpdCBzaG91bGQgYmUgYSB1cmxcbiAgICAgICAgcmV0dXJuIG5ldyB0eXBlc1sodHlwZSB8fCBjb25maWcudHlwZSkudG9Mb3dlckNhc2UoKV0oY29uZmlnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjb25maWcuc2xpY2UoY29uZmlnLmxlbmd0aCAtIDMpLnRvTG93ZXJDYXNlKCkgPT09ICdrbWwnKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBLTUwoY29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb25maWcuc2xpY2UoY29uZmlnLmxlbmd0aCAtIDMpLnRvTG93ZXJDYXNlKCkgPT09ICdjc3YnKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBDU1YoY29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBOSCBUT0RPIENoZWNrIGEgYml0IG1vcmUgaW50byBpZiB0aGlzIHJlc291cmNlIGlzIHZhbGlkIEdlb0pTT05cbiAgICAgICAgcmV0dXJuIG5ldyBHZW9KU09OKGNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gIH07XG5cblxufSk7XG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBSeWFuIFdoaXRsZXkgPHJ3aGl0bGV5QHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNi8zLzE0LlxuICovXG5cbnZhciBSZXNvdXJjZSA9IHJlcXVpcmUoJy4vcmVzb3VyY2UnKTtcbnZhciAkcm9vdFNjb3BlID0gcmVxdWlyZSgnLi92ZWN0b3InKS4kcm9vdFNjb3BlO1xudmFyICQgPSByZXF1aXJlKCcuL3ZlY3RvcicpLiQ7XG5cbm1vZHVsZS5leHBvcnRzID0gQ1NWO1xuXG4vKipcbiAqIEEgQ1NWIFJlc291cmNlIGZldGNoZXMgQ1NWIGFuZCBwYXJzZXMgaXRcbiAqXG4gKiBAcGFyYW0gY29uZmlnXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ1NWKGNvbmZpZykge1xuICBSZXNvdXJjZS5jYWxsKHRoaXMsIGNvbmZpZyk7XG4gIHRoaXMuX2dlb2pzb24gPSBudWxsO1xufVxuXG5DU1YucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShSZXNvdXJjZS5wcm90b3R5cGUpO1xuQ1NWLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENTVjtcblxuQ1NWLnByb3RvdHlwZS5sYXRGaWVsZFN0cmluZ3MgPSBbXCJsYXRcIiwgXCJsYXRpdHVkZVwiLCBcInlcIiwgXCJ5Y2VudGVyXCJdO1xuQ1NWLnByb3RvdHlwZS5sb25nRmllbGRTdHJpbmdzID0gW1wibG9uXCIsIFwibG9uZ1wiLCBcImxvbmdpdHVkZVwiLCBcInhcIiwgXCJ4Y2VudGVyXCIsIFwibG5nXCJdO1xuXG5DU1YucHJvdG90eXBlLmdldExheWVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5fZ2VvanNvbkxheWVyKSByZXR1cm4gdGhpcy5fZ2VvanNvbkxheWVyO1xuICB2YXIgbGF5ZXIgPSBSZXNvdXJjZS5wcm90b3R5cGUuZ2V0TGF5ZXIuY2FsbCh0aGlzKTtcbiAgdGhpcy5mZXRjaChmdW5jdGlvbiAoZ2VvanNvbikge1xuICAgIGxheWVyLmFkZERhdGEoZ2VvanNvbik7XG4gICAgbGF5ZXIuZWFjaExheWVyKGZ1bmN0aW9uIChsKSB7XG4gICAgICBsLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkZXRhaWxzJywgbCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBsYXllcjtcbn07XG5cbkNTVi5wcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbiAoY2IpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBSZXNvdXJjZS5wcm90b3R5cGUuZmV0Y2guY2FsbCh0aGlzLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgIC8vZGF0YSBzaG91bGQgYmUgdGhlIHJhdyBjc3YuXG5cbiAgICBzZWxmLl9nZW9qc29uID0gc2VsZi5wcm9jZXNzQ3N2RGF0YShkYXRhKTtcblxuICAgIGlmICh0eXBlb2Ygc2VsZi5fY29uZmlnLnByb3BlcnRpZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICBhbmd1bGFyLmV4dGVuZChzZWxmLl9nZW9qc29uLnByb3BlcnRpZXMsIHNlbGYuX2NvbmZpZy5wcm9wZXJ0aWVzKTtcbiAgICAgIHNlbGYuX2dlb2pzb24ucHJvcGVydGllcy5zcmNUeXBlID0gJ2Nzdic7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHNlbGYuX2dlb2pzb24sIHNlbGYpO1xuICB9KTtcbn07XG5cbkNTVi5wcm90b3R5cGUuaGFuZGxlQ3N2ID0gZnVuY3Rpb24gKGZpbGUsIGxheWVyKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgaWYgKGZpbGUuZGF0YSkge1xuICAgIHZhciBkZWNvZGVkID0gdGhpcy5ieXRlc1RvU3RyaW5nKHNlbGYuQmFzZTY0LmRlY29kZShmaWxlLmRhdGEpKTtcbiAgICBzZWxmLnByb2Nlc3NDc3ZEYXRhKGRlY29kZWQpO1xuICB9IGVsc2Uge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkZpbmlzaGVkIHJlYWRpbmcgQ1NWIGRhdGFcIik7XG4gICAgICBzZWxmLnByb2Nlc3NDc3ZEYXRhKHJlYWRlci5yZXN1bHQsIGxheWVyKTtcbiAgICB9O1xuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICB9XG59O1xuXG5DU1YucHJvdG90eXBlLmdldFNlcGFyYXRvciA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgdmFyIHNlcGFyYXRvcnMgPSBbXCIsXCIsIFwiICAgICAgXCIsIFwiO1wiLCBcInxcIl07XG4gIHZhciBtYXhTZXBhcmF0b3JMZW5ndGggPSAwO1xuICB2YXIgbWF4U2VwYXJhdG9yVmFsdWUgPSBcIlwiO1xuICAkLmVhY2goc2VwYXJhdG9ycywgZnVuY3Rpb24gKGlkeCwgc2VwYXJhdG9yKSB7XG4gICAgdmFyIGxlbmd0aCA9IHN0cmluZy5zcGxpdChzZXBhcmF0b3IpLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoID4gbWF4U2VwYXJhdG9yTGVuZ3RoKSB7XG4gICAgICBtYXhTZXBhcmF0b3JMZW5ndGggPSBsZW5ndGg7XG4gICAgICBtYXhTZXBhcmF0b3JWYWx1ZSA9IHNlcGFyYXRvcjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbWF4U2VwYXJhdG9yVmFsdWU7XG59O1xuXG5DU1YucHJvdG90eXBlLmJ5dGVzVG9TdHJpbmcgPSBmdW5jdGlvbiAoYikge1xuICB2YXIgcyA9IFtdO1xuICAkLmVhY2goYiwgZnVuY3Rpb24gKGlkeCwgYykge1xuICAgIHMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGMpKTtcbiAgfSk7XG4gIHJldHVybiBzLmpvaW4oXCJcIik7XG59O1xuXG5DU1YucHJvdG90eXBlLnByb2Nlc3NDc3ZEYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgdmFyIG5ld0xpbmVJZHggPSBkYXRhLmluZGV4T2YoXCJcXG5cIik7XG4gIHZhciBmaXJzdExpbmUgPSAkLnRyaW0oZGF0YS5zdWJzdHIoMCwgbmV3TGluZUlkeCkpOyAvL3JlbW92ZSBleHRyYSB3aGl0ZXNwYWNlLCBub3Qgc3VyZSBpZiBJIG5lZWQgdG8gZG8gdGhpcyBzaW5jZSBJIHRocmV3IG91dCBzcGFjZSBkZWxpbWl0ZXJzXG4gIHZhciBzZXBhcmF0b3IgPSB0aGlzLmdldFNlcGFyYXRvcihmaXJzdExpbmUpO1xuICB2YXIgY3N2U3RvcmUgPSAkLmNzdi50b09iamVjdHMoZGF0YSk7XG4gIHZhciBmaWVsZE5hbWVzID0gZmlyc3RMaW5lLnNwbGl0KHNlcGFyYXRvcik7XG5cbiAgdmFyIGxhdEZpZWxkID0gbnVsbDtcbiAgdmFyIGxvbmdGaWVsZCA9IG51bGw7XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIC8vRmluZCBMYXQvTG5nIGNvbHVtbnNcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGZpZWxkTmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgZmllbGROYW1lID0gZmllbGROYW1lc1tpXTtcbiAgICB2YXIgbWF0Y2hJZDtcbiAgICBtYXRjaElkID0gJC5pbkFycmF5KGZpZWxkTmFtZS50b0xvd2VyQ2FzZSgpLCBzZWxmLmxhdEZpZWxkU3RyaW5ncyk7XG4gICAgaWYgKG1hdGNoSWQgIT09IC0xKSB7XG4gICAgICBsYXRGaWVsZCA9IGZpZWxkTmFtZTtcbiAgICB9XG5cbiAgICBtYXRjaElkID0gJC5pbkFycmF5KGZpZWxkTmFtZS50b0xvd2VyQ2FzZSgpLCBzZWxmLmxvbmdGaWVsZFN0cmluZ3MpO1xuICAgIGlmIChtYXRjaElkICE9PSAtMSkge1xuICAgICAgbG9uZ0ZpZWxkID0gZmllbGROYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vSWYgTWlzc2luZyBMYXRmaWVsZCBvciBMb25nRmllbGQsIHRoZW4gZXhpdC5cbiAgaWYgKCFsYXRGaWVsZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIWxvbmdGaWVsZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBvdXRwdXRHZW9KU09OID0ge1xuICAgIFwidHlwZVwiOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXG4gICAgXCJmZWF0dXJlc1wiOiBbXVxuICB9O1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjc3ZTdG9yZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciByb3cgPSBjc3ZTdG9yZVtpXTtcbiAgICB2YXIgbGF0aXR1ZGUgPSBwYXJzZUZsb2F0KHJvd1tsYXRGaWVsZF0pO1xuICAgIHZhciBsb25naXR1ZGUgPSBwYXJzZUZsb2F0KHJvd1tsb25nRmllbGRdKTtcblxuICAgIGlmIChpc05hTihsYXRpdHVkZSkgfHwgaXNOYU4obG9uZ2l0dWRlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vY3JlYXRlIEdlb0pTT04gZnJhZ21lbnRcbiAgICBvdXRwdXRHZW9KU09OLmZlYXR1cmVzLnB1c2goe1xuICAgICAgXCJ0eXBlXCI6IFwiRmVhdHVyZVwiLFxuICAgICAgXCJnZW9tZXRyeVwiOiB7XCJ0eXBlXCI6IFwiUG9pbnRcIiwgXCJjb29yZGluYXRlc1wiOiBbbG9uZ2l0dWRlLCBsYXRpdHVkZV19LFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHJvd1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dEdlb0pTT047XG59O1xuXG5DU1YucHJvdG90eXBlLmVhY2hMYXllciA9IGZ1bmN0aW9uIChjYikge1xuICB0aGlzLl9lYWNoTGF5ZXJDYWxsYmFjayA9IGNiO1xuICB0aGlzLmZldGNoKGZ1bmN0aW9uIChnZW9qc29uLCBzZWxmKSB7XG4gICAgdmFyIGxheWVycyA9IHNlbGYuX2dlb2pzb25MYXllci5fbGF5ZXJzO1xuICAgIGZvciAodmFyIGtleSBpbiBsYXllcnMpIHtcbiAgICAgIHZhciBsYXllciA9IGxheWVyc1trZXldO1xuICAgICAgY2IobGF5ZXIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqXG4gKiAgQmFzZTY0IGVuY29kZSAvIGRlY29kZVxuICogIGh0dHA6Ly93d3cud2VidG9vbGtpdC5pbmZvL1xuICpcbiAqKi9cbkNTVi5wcm90b3R5cGUuQmFzZTY0ID0ge1xuXG4gIC8vIHByaXZhdGUgcHJvcGVydHlcbiAgX2tleVN0cjogXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiLFxuXG4gIC8vIHB1YmxpYyBtZXRob2QgZm9yIGVuY29kaW5nXG4gIGVuY29kZTogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgdmFyIG91dHB1dCA9IFwiXCI7XG4gICAgdmFyIGNocjEsIGNocjIsIGNocjMsIGVuYzEsIGVuYzIsIGVuYzMsIGVuYzQ7XG4gICAgdmFyIGkgPSAwO1xuXG4gICAgaW5wdXQgPSBCYXNlNjQuX3V0ZjhfZW5jb2RlKGlucHV0KTtcblxuICAgIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XG5cbiAgICAgIGNocjEgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XG4gICAgICBjaHIyID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xuICAgICAgY2hyMyA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcblxuICAgICAgZW5jMSA9IGNocjEgPj4gMjtcbiAgICAgIGVuYzIgPSAoKGNocjEgJiAzKSA8PCA0KSB8IChjaHIyID4+IDQpO1xuICAgICAgZW5jMyA9ICgoY2hyMiAmIDE1KSA8PCAyKSB8IChjaHIzID4+IDYpO1xuICAgICAgZW5jNCA9IGNocjMgJiA2MztcblxuICAgICAgaWYgKGlzTmFOKGNocjIpKSB7XG4gICAgICAgIGVuYzMgPSBlbmM0ID0gNjQ7XG4gICAgICB9IGVsc2UgaWYgKGlzTmFOKGNocjMpKSB7XG4gICAgICAgIGVuYzQgPSA2NDtcbiAgICAgIH1cblxuICAgICAgb3V0cHV0ID0gb3V0cHV0ICtcbiAgICAgICAgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmMxKSArIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jMikgK1xuICAgICAgICB0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzMpICsgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmM0KTtcblxuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH0sXG5cbiAgLy8gcHVibGljIG1ldGhvZCBmb3IgZGVjb2RpbmdcbiAgZGVjb2RlOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICB2YXIgb3V0cHV0ID0gXCJcIjtcbiAgICB2YXIgY2hyMSwgY2hyMiwgY2hyMztcbiAgICB2YXIgZW5jMSwgZW5jMiwgZW5jMywgZW5jNDtcbiAgICB2YXIgaSA9IDA7XG5cbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1teQS1aYS16MC05XFwrXFwvXFw9XS9nLCBcIlwiKTtcblxuICAgIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XG5cbiAgICAgIGVuYzEgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XG4gICAgICBlbmMyID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuICAgICAgZW5jMyA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcbiAgICAgIGVuYzQgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XG5cbiAgICAgIGNocjEgPSAoZW5jMSA8PCAyKSB8IChlbmMyID4+IDQpO1xuICAgICAgY2hyMiA9ICgoZW5jMiAmIDE1KSA8PCA0KSB8IChlbmMzID4+IDIpO1xuICAgICAgY2hyMyA9ICgoZW5jMyAmIDMpIDw8IDYpIHwgZW5jNDtcblxuICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIxKTtcblxuICAgICAgaWYgKGVuYzMgIT0gNjQpIHtcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIyKTtcbiAgICAgIH1cbiAgICAgIGlmIChlbmM0ICE9IDY0KSB7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMyk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBvdXRwdXQgPSB0aGlzLkJhc2U2NC5fdXRmOF9kZWNvZGUob3V0cHV0KTtcblxuICAgIHJldHVybiBvdXRwdXQ7XG5cbiAgfSxcblxuICAvLyBwcml2YXRlIG1ldGhvZCBmb3IgVVRGLTggZW5jb2RpbmdcbiAgX3V0ZjhfZW5jb2RlOiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xcclxcbi9nLCBcIlxcblwiKTtcbiAgICB2YXIgdXRmdGV4dCA9IFwiXCI7XG5cbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IHN0cmluZy5sZW5ndGg7IG4rKykge1xuXG4gICAgICB2YXIgYyA9IHN0cmluZy5jaGFyQ29kZUF0KG4pO1xuXG4gICAgICBpZiAoYyA8IDEyOCkge1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG4gICAgICB9IGVsc2UgaWYgKChjID4gMTI3KSAmJiAoYyA8IDIwNDgpKSB7XG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyA+PiA2KSB8IDE5Mik7XG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPj4gMTIpIHwgMjI0KTtcbiAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyA+PiA2KSAmIDYzKSB8IDEyOCk7XG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gdXRmdGV4dDtcbiAgfSxcblxuICAvLyBwcml2YXRlIG1ldGhvZCBmb3IgVVRGLTggZGVjb2RpbmdcbiAgX3V0ZjhfZGVjb2RlOiBmdW5jdGlvbiAodXRmdGV4dCkge1xuICAgIHZhciBzdHJpbmcgPSBcIlwiO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgYyA9IGMxID0gYzIgPSAwO1xuXG4gICAgd2hpbGUgKGkgPCB1dGZ0ZXh0Lmxlbmd0aCkge1xuXG4gICAgICBjID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkpO1xuXG4gICAgICBpZiAoYyA8IDEyOCkge1xuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcbiAgICAgICAgaSsrO1xuICAgICAgfSBlbHNlIGlmICgoYyA+IDE5MSkgJiYgKGMgPCAyMjQpKSB7XG4gICAgICAgIGMyID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkgKyAxKTtcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjICYgMzEpIDw8IDYpIHwgKGMyICYgNjMpKTtcbiAgICAgICAgaSArPSAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYzIgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSArIDEpO1xuICAgICAgICBjMyA9IHV0ZnRleHQuY2hhckNvZGVBdChpICsgMik7XG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyAmIDE1KSA8PCAxMikgfCAoKGMyICYgNjMpIDw8IDYpIHwgKGMzICYgNjMpKTtcbiAgICAgICAgaSArPSAzO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA2LzMvMTQuXG4gKi9cblxudmFyIHJlc291cmNlcyA9IHJlcXVpcmUoJy4vdmVjdG9yJykucmVzb3VyY2VzO1xudmFyICRodHRwID0gcmVxdWlyZSgnLi92ZWN0b3InKS4kaHR0cDtcblxubW9kdWxlLmV4cG9ydHMgPSBSZXNvdXJjZTtcblxuLyoqXG4gKiBBbGwgVmVjdG9yUHJvdmlkZXIgcmVzb3VyY2VzIGFyZSBjaGlsZHJlbiBvZiB0aGlzIGNsYXNzLlxuICogQHBhcmFtIGNvbmZpZ1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFJlc291cmNlKGNvbmZpZykge1xuICByZXNvdXJjZXMucHVzaCh0aGlzKTtcbiAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB0aGlzLl91cmwgPSBudWxsO1xuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICB0aGlzLl91cmwgPSBjb25maWcudXJsO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX3VybCA9IGNvbmZpZztcbiAgfVxuXG4gIHRoaXMuX2VhY2hMYXllckNhbGxiYWNrID0gbnVsbDtcbiAgdGhpcy5fZ2VvanNvbkxheWVyID0gbnVsbDtcbn1cblxuXG4vKipcbiAqIEZldGNoZXMgZGF0YSBmcm9tIHRoZSBnaXZlbiB1cmwgb2YgYSByZXNvdXJjZS5cbiAqIFN1YmNsYXNzZXMgdGhlbiBoYW5kbGUgdGhlIGNhbGxiYWNrIGFjY29yZGluZ2x5LlxuICpcbiAqIE5lZWRzIHRvIGFsc28gdHJ5IHRvIGdldCBhIHJlc291cmNlIHZpYSB0aGUgQ2h1YmJzXG4gKiBwcm94eS5cbiAqXG4gKiBAcGFyYW0gY2JcbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24oY2IpIHtcbiAgdmFyIHByb3h5UGF0aCA9IGNvbmZpZy5wcm94eVBhdGgodGhpcy5fdXJsKTtcbiAgJGh0dHAuZ2V0KHRoaXMuX3VybCwge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XG4gICAgY2IoZGF0YSk7XG4gIH0pLmVycm9yKGZ1bmN0aW9uKCkge1xuICAgIC8vIHRyeWluZyBwcm94eVxuICAgICRodHRwLmdldChwcm94eVBhdGgsIHtjYWNoZTogdHJ1ZX0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cykge1xuICAgICAgY2IoZGF0YSk7XG4gICAgfSkuZXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIGZldGNoIGZyb206IFwiICsgcHJveHlQYXRoKTtcbiAgICB9KTtcbiAgfSk7XG5cbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBMZWFmbGV0IEdlb0pTT04gTGF5ZXIgYXNzb2NpYXRlZCB3aXRoIHRoZVxuICogUmVzb3VyY2Ugb3IgY3JlYXRlcyBhIG5ldyBvbmUuXG4gKlxuICogQHJldHVybnMge251bGx8Kn1cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLmdldExheWVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIHRoaXMuX2dlb2pzb25MYXllciAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5fZ2VvanNvbkxheWVyICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dlb2pzb25MYXllcjtcbiAgfVxuXG4gIHRoaXMuX2dlb2pzb25MYXllciA9IEwuZ2VvSnNvbih0aGlzLl9nZW9qc29uIHx8IG51bGwsIHtcbiAgICBzdHlsZTogZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgaWYgKHR5cGVvZiBmZWF0dXJlLnByb3BlcnRpZXMuc3R5bGVGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLnN0eWxlRm4oZmVhdHVyZS5wcm9wZXJ0aWVzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBMLm1hcGJveC5zaW1wbGVzdHlsZS5zdHlsZShmZWF0dXJlKTtcbiAgICB9LFxuICAgIHBvaW50VG9MYXllcjogZnVuY3Rpb24oZmVhdHVyZSwgbGF0bG9uKSB7XG4gICAgICBpZiAoIWZlYXR1cmUucHJvcGVydGllcykgZmVhdHVyZS5wcm9wZXJ0aWVzID0ge307XG4gICAgICBpZiAoZmVhdHVyZS5wcm9wZXJ0aWVzLnNjYWxlKSB7XG4gICAgICAgIHJldHVybiBMLmNpcmNsZU1hcmtlcihsYXRsb24sIHtcbiAgICAgICAgICBmaWxsQ29sb3I6IGZlYXR1cmUucHJvcGVydGllcy5jb2xvciB8fCAnI0ZGMDAwMCcsXG4gICAgICAgICAgcmFkaXVzOiAyMCAqIGZlYXR1cmUucHJvcGVydGllcy5zY2FsZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBMLm1hcGJveC5tYXJrZXIuc3R5bGUoZmVhdHVyZSwgbGF0bG9uKTtcbiAgICB9XG4gIH0pLmVhY2hMYXllcih0aGlzLl9lYWNoTGF5ZXJDYWxsYmFjayk7XG5cblxuICByZXR1cm4gdGhpcy5fZ2VvanNvbkxheWVyO1xufTtcblxuUmVzb3VyY2UucHJvdG90eXBlLmVhY2hMYXllciA9IGZ1bmN0aW9uIChjYikge1xuICB0aGlzLl9lYWNoTGF5ZXJDYWxsYmFjayA9IGNiO1xuICB0aGlzLl9nZW9qc29uTGF5ZXIuZWFjaExheWVyKGNiKTtcbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDYvMy8xNC5cbiAqL1xuXG52YXIgdmVjdG9yID0ge307XG5tb2R1bGUuZXhwb3J0cyA9IHZlY3RvcjtcblxudmVjdG9yLnNldEluamVjdG9ycyA9IGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkbG9jYXRpb24sICRodHRwLCBMYXllckNvbmZpZykge1xuICB2ZWN0b3IuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XG4gIHZlY3Rvci4kbG9jYXRpb24gPSAkbG9jYXRpb247XG4gIHZlY3Rvci4kaHR0cCA9ICRodHRwO1xuICB2ZWN0b3IuTGF5ZXJDb25maWcgPSBMYXllckNvbmZpZztcbn07XG5cbnZlY3Rvci5hbmd1bGFyID0gYW5ndWxhcjtcbnZlY3Rvci5MID0gTDtcbnZlY3Rvci4kID0gJDtcbnZlY3Rvci50b0dlb0pTT04gPSB0b0dlb0pTT047XG5cblxuLyoqXG4gKiBFdmVyeSByZXNvdXJjZSB0aGF0IGhhcyBiZWVuIGluc3RhbnRpYXRlZC5cbiAqIEB0eXBlIHtBcnJheX1cbiAqL1xudmFyIHJlc291cmNlcyA9IHZlY3Rvci5yZXNvdXJjZXMgPSBbXTtcbmRlYnVnLnJlc291cmNlcyA9IHJlc291cmNlcztcblxudmFyIGNlbnRlckxldmVsID0gdmVjdG9yLmNlbnRlckxldmVsID0gMDtcbiJdfQ==
