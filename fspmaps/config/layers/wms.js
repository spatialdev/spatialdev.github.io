var layer = module.exports = {};

/**
 * WMS
 */

layer.airtemp = {
  name: 'NOAA Air Temperature',
  type: 'wms',
  url: 'http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs',
  transparent: true,      // default true
  format: 'image/png',    // default 'image/png'
  layers: 'OBS_MET_TEMP',
  properties: {
    legend: ""
  }
};

// Not working??? works in QGIS. Most layers, however, don't even work in QGIS.
layer.sanandreas = {
  name: 'San Andreas Scenario ShakeMap M7.8 (1857 Rupture)',
  type: 'wms',
  url: 'http://lacrmt.sahanafoundation.org:8080/geoserver/wms?LAYERS=lacrmt%3Ainund2&',
  transparent: false,
  layers: 'lacrmt:sanandreas78',
  properties: {
    legend: ""
  }
};

layer.landcover = {
  name: 'MODIS Landcover 2009',
  type: 'wms',
  url: 'http://ags.servirlabs.net/ArcGIS/services/ReferenceNode/MODIS_Landcover_Type1_2009/MapServer/WMSServer',
  layers: '0',
  properties: {
    legend: ""
  }
};

layer.growingperiod = {
  name: 'Average Length of Growing Period (days)',
  type: 'wms',
  url: 'http://apps.harvestchoice.org/arcgis/services/MapServices/cell_values_4/MapServer/WMSServer',
  layers: '15',
  properties: {
    legend: ""
  }
};
