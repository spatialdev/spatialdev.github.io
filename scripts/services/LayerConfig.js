/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/18/14.
 */

/**
 * All of the layer names need to be lowercase.
 */
module.exports = angular.module('SpatialViewer').service('LayerConfig', function () {

  /**
   * The layers specified in this main LayerConfig module are integral to SpatialViewer
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

  this.CICOS = {
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
          style.color = CICO_Config[feature.properties.type].color;
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

  this.library = {
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
      //if (feature && feature.properties) {
      //  feature.properties.zIndex = _FSP.Config.LIBRARY_LAYERS[feature.properties.type].zIndex || 5;
      //}
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
          style.color = CICO_Config[feature.properties.type].color;
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

  this.health =  {
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
      //if (feature && feature.properties) {
      //  feature.properties.zIndex = _FSP.Config.HEALTH_LAYERS[feature.properties.type].zIndex || 5;
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
          style.color = CICO_Config[feature.properties.type].color;
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

  this.agriculture = {
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
      //if (feature && feature.properties) {
      //  feature.properties.zIndex = _FSP.Config.AG_LAYERS[feature.properties.type].zIndex || 5;
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
          style.color = CICO_Config[feature.properties.type].color;
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

  for (var i = 0, len = configLayers.length;  i < len; i++) {
    var cfg = configLayers[i];
    for (var key in cfg) {
      this[key] = cfg[key];
      console.log(this[key]);
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

});
