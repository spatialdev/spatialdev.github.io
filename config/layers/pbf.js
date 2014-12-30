var layer = module.exports = {};

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

layer.cicos = {
  type: 'pbf',
  name: 'FSP Cico Points',
  url: "http://spatialserver.spatialdev.com/services/vector-tiles/FSPCicos2013/{z}/{x}/{y}.pbf",
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

  styleFor: function(feature) {
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
        style.color = CICO_Config[feature.properties.type].ClusterColor || '#3086AB';
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

layer.IndiaCICOS = {
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
      style.color = '#3086AB';
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

    var buffer = _FSP.ConfettiLoader.clickToBuffer(evt);

    //If all are unchecked, then exit out of here
    if(Object.keys(_FSP.LayerListBuilder.GetFilterObject()).length == 0) return;

    _FSP.TableBuilder.scrapeCICOSelections();

    //We have the buffer as geojson.  Send it to the point table to intersect
    var tablePostArgs = {
      returnfields: 'lat,lng,name,assoc_bank,assoc_business,form_submitted,type,id,photos',
      format: 'geojson',
      where: _FSP.ProximityTool.buildCICOQueryExpression(_FSP.TableBuilder.CICOSelections),
      returnGeometry: 'yes',
      intersects: buffer,
      limit: 200 //add a limit of 200 so we don't get carried away
    };
    var pointUrl = "http://spatialserver.spatialdev.com/services/tables/cicos_2014/query";

    $.post(pointUrl, tablePostArgs).success(function (points, qstatus) {
      //GeoJSON result of points
      if (!points || points.error) {
        console.error('Unable to fetch feature: ' + points.error);
        return;
      }

      //point is a featurecollection. open the panel and show some stuff.
      if (points && points.features && points.features.length > 0) {
        var html = _FSP.PopupBuilder.addResults(points.features, _FSP.Config.CICO_LAYERS, 'fsp', function (currentPoint) {
          if (currentPoint) {
            //Highlight point.
            var layers = pbfSource.getLayers();
            if (layers) {
              var layer = layers[Object.keys(layers)[0]]; //Cico layer
              if (layer) {
                //try to pluck vtf
                _FSP.MapBuilder.selectedConfetti = layer.features[currentPoint.properties.id];
                if (_FSP.MapBuilder.selectedConfetti) {
                  //Set feature to be big and high z-index
                  _FSP.MapBuilder.selectedConfetti.select();
                  if (_FSP.MapBuilder.previouslySelectedConfetti) _FSP.MapBuilder.previouslySelectedConfetti.deselect();
                  _FSP.MapBuilder.previouslySelectedConfetti = _FSP.MapBuilder.selectedConfetti;
                }
              }
            }
          }
        });
        if(html){
          openCICODetails(html);
        }
      }
    });

  }

};

// All possible CICO layer (combined from all countries)
var CICO_Config = {
  'Offsite ATMs': {
    ClusterColor: '#3086AB',
    InfoLabel: 'Offsite ATM',
    Providers: null,
    zIndex: 3
  },
  'Bank Branches': {
    ClusterColor: '#977C00',
    InfoLabel: 'Bank Branch',
    Providers: null,
    zIndex: 2
  },
  'MFIs': {
    ClusterColor: '#9B242D',
    InfoLabel: 'MFI',
    Providers: null,
    zIndex: 1
  },
  'SACCOs': {
    ClusterColor: '#cf8a57',
    InfoLabel: 'SACCO',
    Providers: null,
    zIndex: 10
  },
  'Mobile Money Agent': {
    ClusterColor: '#8CB7C7',
    InfoLabel: 'Mobile Money Agent',
    Providers: null,
    zIndex: -1
  },
  'MDIs': {
    ClusterColor: '#825D99',
    InfoLabel: 'MDI',
    Providers: null,
    zIndex: 6
  },
  'Credit Institution': {
    ClusterColor: '#6CA76B',
    InfoLabel: 'Credit Institution',
    Providers: null,
    zIndex: 5
  },
  'MFBs': {
    ClusterColor: '#825D99',
    InfoLabel: 'MFB',
    Providers: null,
    zIndex: 7
  },
  'Motor Parks': {
    ClusterColor: '#bd85b3',
    InfoLabel: 'Motor Parks',
    Providers: null,
    zIndex: 7
  },
  'Mobile Network Operator Outlets': {
    ClusterColor: '#a2a2a2',
    InfoLabel: 'Mobile Network Operator Outlets',
    Providers: null,
    zIndex: 0
  },
  'Post Offices': {
    ClusterColor: '#80ad7b',
    InfoLabel: 'Post Offices',
    Providers: null,
    zIndex: 5
  },
  'Post Office': {
    ClusterColor: '#80ad7b',
    InfoLabel: 'Post Offices',
    Providers: null,
    zIndex: 6
  },
  'Bus Stand': {
    ClusterColor: '#80ad7b',
    InfoLabel: 'Bus Stands',
    Providers: null,
    zIndex: 6
  },
  'Bus Stands': {
    ClusterColor: '#80ad7b',
    InfoLabel: 'Bus Stands',
    Providers: null,
    zIndex: 6
  }


  //Kenya
  ,
  'Insurance Providers': {
    ClusterColor: '#3086AB',
    InfoLabel: 'Insurance Providers',
    Providers: null,
    zIndex: 6
  },
  'Money Transfer Service': {
    ClusterColor: '#977C00',
    InfoLabel: 'Money Transfer Service',
    Providers: null,
    zIndex: 6
  },
  'Dev Finance': {
    ClusterColor: '#9B242D',
    InfoLabel: 'Dev Finance',
    Providers: null,
    zIndex: 6
  },
  'Forex Bureaus': {
    ClusterColor: '#cf8a57',
    InfoLabel: 'Forex Bureaus',
    Providers: null,
    zIndex: 6
  },
  'Cap Markets': {
    ClusterColor: '#825D99',
    InfoLabel: 'Cap Markets',
    Providers: null,
    zIndex: 6
  },
  'Pension Providers': {
    ClusterColor: '#a2a2a2',
    InfoLabel: 'Pension Providers',
    Providers: null,
    zIndex: 6
  },
  'Purchase Lease Factoring': {
    ClusterColor: '#80ad7b',
    InfoLabel: 'Purchase Lease Factoring',
    Providers: null,
    zIndex: 6
  },
  'Bank Agent': {
    ClusterColor: '#80ad7b',
    InfoLabel: 'Bank Agent',
    Providers: null,
    zIndex: 6
  },
  'Bank and Mortgage': {
    ClusterColor: '#80ad7b',
    InfoLabel: 'Banks and Mortgage',
    Providers: null,
    zIndex: 6
  },
  'Commercial Bank': {
    ClusterColor: '#80ad7b',
    InfoLabel: 'Commercial Bank',
    Providers: null,
    zIndex: 6
  },
  'PostBank': {
    ClusterColor: '#bd85b3',
    InfoLabel: 'Post Bank',
    Providers: null,
    zIndex: 6
  },

  //Nigeria New Post Offices
  'NIPOST Post Office': {
    ClusterColor: '#80ad7b',
    InfoLabel: 'NIPOST Post Offices',
    Providers: null,
    zIndex: 6
  },
  'NIPOST Post Shop': {
    ClusterColor: '#80ad7b',
    InfoLabel: 'NIPOST Post Shops',
    Providers: null,
    zIndex: 6
  },
  'NIPOST Postal Agency': {
    ClusterColor: '#80ad7b',
    InfoLabel: 'NIPOST Postal Agencies',
    Providers: null,
    zIndex: 6
  }
};
