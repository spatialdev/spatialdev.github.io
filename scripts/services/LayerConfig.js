/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/18/14.
 */

/**
 * All of the layer names need to be lowercase.
 */
module.exports = angular.module('GeoAngular').service('LayerConfig', function () {

  /**
   * Basemaps Panel List
   *
   * List of basemaps that get shown in the Basemaps Panel. Edit this to add or remove
   * basemaps that the user will see as choices. All basemaps, including ones not in this
   * list, can still be manually referenced in the url. This is just for the User Interface.
   */
  this.basemaps = [
    'osmhot',
    'osm',
    'satellite',
    'ortho',
    'toner',
    'dark',
    'github',
    'mozilla',
    'green',
    'osmcycle',
    'osmtransport',
    'osmmapquest',
    'natgeo',
    'usgstopo',
    'esritopo',
    'ocean',
    'lightgray',
    'watercolor'
  ];


  /**
   * Basemaps
   *
   * All basemap aliases that can be referred to in the url. The corresponding
   * path to the thumbnail in the Basemaps Panel should be:
   *    images/{aliasName}.jpg
   *
   */

  this.osmhot = {
    url: 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    name: 'Humanitarian OpenStreetMap',
    type: 'basemap'
  };
  this.redcross = {
    url: 'https://{s}.tiles.mapbox.com/v3/americanredcross.hcji22de/{z}/{x}/{y}.png',
    name: 'Red Cross',
    type: 'basemap'
  };

  this.satellite = {
    url: 'https://{s}.tiles.mapbox.com/v3/examples.map-qfyrx5r8/{z}/{x}/{y}.png',
    name: 'Mapbox Satellite',
    type: 'basemap'
  };
  this.mozilla = {
    url: 'http://{s}.tiles.mapbox.com/v3/mozilla-webprod.e91ef8b3/{z}/{x}/{y}.png',
    name: 'Mozilla',
    type: 'basemap'
  };
  this.github = {
    url: 'http://{s}.tiles.mapbox.com/v3/github.map-xgq2svrz/{z}/{x}/{y}.png',
    name: 'Github',
    type: 'basemap'
  };
  this.green = {
    url: 'http://{s}.tiles.mapbox.com/v3/examples.map-3gisupiu/{z}/{x}/{y}.png',
    name: 'Green Theme',
    type: 'basemap'
  };
  this.dark = {
    url: 'http://{s}.tiles.mapbox.com/v3/spatialdev.map-c9z2cyef/{z}/{x}/{y}.png',
    name: 'Dark Theme',
    type: 'basemap'
  };

  this.osm = {
    url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    name: 'Standard OpenStreetMap',
    type: 'basemap'
  };
  this.osmcycle = {
    url: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
    name: 'Cycle OpenStreetMap',
    type: 'basemap'
  };
  this.osmtransport = {
    url: 'http://{s}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png',
    name: 'Transport OpenStreetMap',
    type: 'basemap'
  };
  this.osmmapquest = {
    url: 'http://otile3.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
    name: 'MapQuest OpenStreetMap',
    type: 'basemap'
  };

  this.natgeo = {
    url: 'http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
    name: 'National Geographic',
    type: 'basemap'
  };
  this.usgstopo = {
    url: 'http://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer/tile/{z}/{y}/{x}',
    name: 'USGS Topographic',
    type: 'basemap'
  };
  this.ortho = {
    url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    name: 'Orthographic',
    type: 'basemap'
  };
  this.ocean = {
    url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}',
    name: 'Ocean Bathymetric',
    type: 'basemap'
  };
  this.lightgray = {
    url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    name: 'Light Gray',
    type: 'basemap'
  };
  this.esritopo = {
    url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    name: 'Esri Topographic',
    type: 'basemap'
  };

  this.toner = {
    url: 'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png',
    name: 'Stamen Toner',
    type: 'basemap'
  };
  this.watercolor = {
    url: 'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png',
    name: 'Stamen Watercolor',
    type: 'basemap'
  };


  /**
   * GeoJSON
   *
   * Note: Specifying the properties extends the properties object of the retrieved GeoJSON.
   * Styling adheres to the Github/Mapbox GeoJSON Styling Spec:
   *
   * https://help.github.com/articles/mapping-geojson-files-on-github
   * https://github.com/mapbox/simplestyle-spec/tree/master/1.1.0
   *
   */
  this.usgsearthquake = {
    type: 'geojson',
    url: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson',
    properties: {
      'title': 'USGS Realtime Earthquakes Feed (Week)'

    }
  };

  this.phl = {
    type: 'geojson',
    url: 'data/test/phl.geojson',
    properties: {
      "title": 'The Philippines',
      "stroke": 'white',
      "stroke-width": 2,
      "dash-array": '3',
      "stroke-opacity": 1,
      "fill": "green",
      "fill-opacity": 0.7,
      legend: ""
    }
  };

  this.wa = {
    type: 'geojson',
    url: 'data/test/washington.geojson',
    properties: {
      title: 'Washington (State)',
      fill: "#FFBE00",
      legend: ""
    }
  };

  this.wafires = {
    type: 'geojson',
    url: 'data/test/state_wa_lrg_fires.geojson',
    properties: {
      "title": "Washington Fires",
      "stroke": "#FF8800",
      "stroke-width": 1,
      "fill": "#FFBE00",
      "fill-opacity": 0.5,
      legend: ""
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


  /**
   * bbox
   *
   * This is universal to all layers, and bboxurl fetches the feature itinerary. This is in turn used to find the center
   * feature for the breadcrumbs as well as fetch the features that apply to a BBoxGeoJSON object.
   *
   * @type {{bboxurl: *, centerurl: *}}
   */
  this.bbox = {
    bboxurl: config.chubbsPath('services/custom/custom_operation?name=getidsbyextent&format=json&bbox=:bbox'),
    // used to get the center feature. can get any feature you want by id
    featurl: config.chubbsPath('services/custom/custom_operation?name=getfeaturesbyid&format=geojson&gadm_level=:level&ids=:ids')
  };


  /**
   * KML
   */
  this.gdacs = {
    name: 'GDACS: Global Disaster Alert and Coordination System',
    type: 'kml',
    url: 'http://www.gdacs.org/xml/gdacs.kml',
    properties: {
      legend: ''
    }
  };
  this.gdacstest = {
    name: 'GDACS Test',
    type: 'kml',
    url: 'data/test/gdacs.kml',
    properties: {
      legend: ''
    }
  };
  this.earthquakes = {
    name: 'USGS Earthquakes',
    type: 'kml',
    url: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week_age.kml',
    properties: {
      legend: ''
    }
  };
  this.earthquakestest = {
    name: 'USGS Earthquakes Test',
    type: 'kml',
    url: 'data/test/usgs-earthquakes.kml',
    properties: {
      legend: ''
    }
  };


  /**
   * CSV
   */
  this.ugandafsp = {
    name: 'Uganda Financial Service Providers',
    type: 'csv',
    url: 'data/test/uganda.csv',
    properties: {
      legend: ''
    }
  };
  this.sampletracks = {
    name: 'Sample GPS Tracks',
    type: 'csv',
    url: 'data/test/sample-tracks.csv',
    properties: {
      legend: ''
    }
  };


  /**
   * WMS
   */
  this.airtemp = {
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
  this.sanandreas = {
    name: 'San Andreas Scenario ShakeMap M7.8 (1857 Rupture)',
    type: 'wms',
    url: 'http://lacrmt.sahanafoundation.org:8080/geoserver/wms?LAYERS=lacrmt%3Ainund2&',
    transparent: false,
    layers: 'lacrmt:sanandreas78',
    properties: {
      legend: ""
    }
  };

  this.landcover = {
    name: 'MODIS Landcover 2009',
    type: 'wms',
    url: 'http://ags.servirlabs.net/ArcGIS/services/ReferenceNode/MODIS_Landcover_Type1_2009/MapServer/WMSServer',
    layers: '0',
    properties: {
      legend: ""
    }
  };

  this.growingperiod = {
    name: 'Average Length of Growing Period (days)',
    type: 'wms',
    url: 'http://apps.harvestchoice.org/arcgis/services/MapServices/cell_values_4/MapServer/WMSServer',
    layers: '15',
    properties: {
      legend: ""
    }
  };

  /**
   * XYZ
   */
  this.clouds = {
    name: 'Cloud Cover',
    type: 'xyz',
    url: 'http://{s}.tile.openweathermap.org/map/clouds_cls/{z}/{x}/{y}.png',
    opacity: 0.5 // optional. opacity is 0.5 if not specified
  };

  this.precipitation = {
    name: 'Precipitation',
    type: 'xyz',
    url: 'http://{s}.tile.openweathermap.org/map/precipitation/{z}/{x}/{y}.png',
    opacity: 0.5
  };

  this.precipitationclassic = {
    name: 'Precipitation (Classic)',
    type: 'xyz',
    url: 'http://{s}.tile.openweathermap.org/map/precipitation_cls/{z}/{x}/{y}.png',
    opacity: 0.4
  };

  this.rain = {
    name: 'Rain',
    type: 'xyz',
    url: 'http://{s}.tile.openweathermap.org/map/rain/{z}/{x}/{y}.png'
  };

  this.rainclassic = {
    name: 'Rain (Classic)',
    type: 'xyz',
    url: 'http://{s}.tile.openweathermap.org/map/rain_cls/{z}/{x}/{y}.png'
  };

  this.pressure = {
    name: 'Pressure',
    type: 'xyz',
    url: 'http://{s}.tile.openweathermap.org/map/pressure/{z}/{x}/{y}.png'
  };

  this.pressurecontour = {
    name: 'Pressure Contour',
    type: 'xyz',
    url: 'http://{s}.tile.openweathermap.org/map/pressure_cntr/{z}/{x}/{y}.png',
    opacity: 0.9
  };

  this.temperature = {
    name: 'Temperature',
    type: 'xyz',
    url: 'http://{s}.tile.openweathermap.org/map/temp/{z}/{x}/{y}.png'
  };

  this.wind = {
    name: 'Wind',
    type: 'xyz',
    url: 'http://{s}.tile.openweathermap.org/map/wind/{z}/{x}/{y}.png'
  };

  this.snow = {
    name: 'Snow',
    type: 'xyz',
    url: 'http://{s}.tile.openweathermap.org/map/snow/{z}/{x}/{y}.png'
  };


  /**
   * Other (Vector Provider attempts to figure out the vector type)
   */
  this.usoutline = 'http://eric.clst.org/wupl/Stuff/gz_2010_us_outline_20m.json';

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
