/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 10/17/14.
 */

var Config = require('./config');

var Map = {};

Map.init = function(sector, pointsTable, bbox, id) {
  var domId = sector + '-map';

  // create a map in the "map" div, set the view to a given place and zoom
  var map = L.map(domId, {
    scrollWheelZoom: false
  });

  var bounds = L.geoJson(bbox).getBounds();
  map.fitBounds(bounds);

  // add an OpenStreetMap tile layer
  L.tileLayer('http://b.tiles.mapbox.com/v3/cugos.jolef8gc/{z}/{x}/{y}.png').addTo(map);

  var id = parseInt(id);
  var boundaryMvt = new L.TileLayer.MVTSource(boundaryConfig(id));
  var pointsMvt = new L.TileLayer.MVTSource(pointsConfig(sector, pointsTable, id));

  map.addLayer(pointsMvt);
  map.addLayer(boundaryMvt);

  $('.leaflet-control-attribution').remove();
};

function boundaryConfig(boundaryId) {
  return {
    url: "http://spatialserver.spatialdev.com/services/vector-tiles/gaul_fsp_india/{z}/{x}/{y}.pbf",
    debug: false,
    visibleLayers: ['gaul_2014_adm1', 'gaul_2014_adm1_label', 'gaul_2014_adm2', 'gaul_2014_adm2_label'],
    getIDForLayerFeature: function(feature) {
      return feature._id;
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
      if ( feature._id === boundaryId ) {
        return true;
      }
      return false;
    },

    style: function(feature, ajaxData) {
      var style = {};

      var type = feature.type;
      switch (type) {
        case 1: //'Point'
          style.color = 'rgba(18,105,250,0)';
          style.radius = 5;
          style.selected = {
            color: 'rgba(255,255,0,0.5)',
            radius: 6
          };
          break;
        case 2: //'LineString'
          style.color = 'rgba(18,105,250,0.8)';
          style.size = 3;
          style.selected = {
            color: 'rgba(255,25,0,0.5)',
            size: 4
          };
          break;
        case 3: //'Polygon'

          style.color = 'rgba(18,105,250,0)';

          style.outline = {
            color: '#0077ac',
            size: 2
          };
          break;
      }

      return style;
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
        return layerName.replace('_label','');
      }
      return layerName + '_label';
    }
  };
}


function pointsConfig(sector, pointsTable, id) {
  return {
    url: "http://spatialserver.spatialdev.com/services/postgis/" + pointsTable + "/geom/vector-tiles/{z}/{x}/{y}.pbf?fields=type,id&where=gaul_2014_adm1%3d" + id + "%20or%20gaul_2014_adm2%3d" + id,
    debug: false,
    clickableLayers: null,

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
        feature.properties.zIndex = Config[sector][feature.properties.type].zIndex || 5;
      }
    },

    style: function (feature) {
      var style = {};
      var selected = style.selected = {};
      var pointRadius = 1;

      function ScaleDependentPointRadius(zoom) {
        //Set point radius based on zoom
        var pointRadius = 1;
        if (zoom >= 0 && zoom <= 6) {
          pointRadius = 1;
        }
        else if (zoom > 6 && zoom <= 9) {
          pointRadius = 2;
        }
        else if (zoom > 9 && zoom <= 11) {
          pointRadius = 3;
        }
        else if (zoom > 11) {
          pointRadius = 4;
        }

        return pointRadius;
      }

      var type = feature.type;
      switch (type) {
        case 1: //'Point'
          // unselected
          style.color = Config[sector][feature.properties.type].color || '#3086AB';
          style.radius = ScaleDependentPointRadius;
          // selected
          selected.color = style.color; //same color
          selected.radius = 8; //but bigger
          selected.lineWidth = 1; //outline width
          selected.strokeStyle = "#f2f2f2"; //outline color
          break;

      }

      return style;
    }
  };
}



module.exports = Map;