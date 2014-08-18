/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/18/14.
 */

/**
 * All of the layer names need to be lowercase.
 */
module.exports = angular.module('SpatialViewer').service('LayerConfig', function () {

  /**
   * The layers specified in this main LayerConfig module are integral to SpatailViewer
   * and should not be changed by the user.
   */

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
    require('../../config/layers/csv.js'),
    require('../../config/layers/geojson.js'),
    require('../../config/layers/kml.js'),
    require('../../config/layers/other.js'),
    require('../../config/layers/pbf.js'),
    require('../../config/layers/wms.js'),
    require('../../config/layers/xyz.js')
  ];

  for (var i = 0, len = configLayers.length; i < len; i++) {
    var cfg = configLayers[i];
    for (var key in cfg) {
      this[key] = cfg[key];
    }
  }

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
