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

//layer.osmhot = {
//  url: 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
//  name: 'Humanitarian OpenStreetMap',
//  type: 'basemap'
//};

layer.redcross = {
  url: 'https://{s}.tiles.mapbox.com/v3/americanredcross.hcji22de/{z}/{x}/{y}.png',
  name: 'Red Cross',
  type: 'basemap'
};

layer.satellite = {
  url: 'https://{s}.tiles.mapbox.com/v3/examples.map-qfyrx5r8/{z}/{x}/{y}.png',
  name: 'Mapbox Satellite',
  type: 'basemap'
};

layer.mozilla = {
  url: 'http://{s}.tiles.mapbox.com/v3/mozilla-webprod.e91ef8b3/{z}/{x}/{y}.png',
  name: 'Mozilla',
  type: 'basemap'
};

layer.github = {
  url: 'http://{s}.tiles.mapbox.com/v3/github.map-xgq2svrz/{z}/{x}/{y}.png',
  name: 'Github',
  type: 'basemap'
};

layer.green = {
  url: 'http://{s}.tiles.mapbox.com/v3/examples.map-3gisupiu/{z}/{x}/{y}.png',
  name: 'Green Theme',
  type: 'basemap'
};

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

layer.osmcycle = {
  url: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
  name: 'Cycle OpenStreetMap',
  type: 'basemap'
};

layer.osmtransport = {
  url: 'http://{s}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png',
  name: 'Transport OpenStreetMap',
  type: 'basemap'
};

layer.osmmapquest = {
  url: 'http://otile3.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
  name: 'MapQuest OpenStreetMap',
  type: 'basemap'
};

layer.natgeo = {
  url: 'http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
  name: 'National Geographic',
  type: 'basemap'
};

layer.usgstopo = {
  url: 'http://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer/tile/{z}/{y}/{x}',
  name: 'USGS Topographic',
  type: 'basemap'
};

layer.ortho = {
  url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  name: 'Orthographic',
  type: 'basemap'
};

layer.ocean = {
  url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}',
  name: 'Ocean Bathymetric',
  type: 'basemap'
};

layer.lightgray = {
  url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
  name: 'Light Gray',
  type: 'basemap'
};

layer.esritopo = {
  url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  name: 'Esri Topographic',
  type: 'basemap'
};

layer.toner = {
  url: 'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png',
  name: 'Stamen Toner',
  type: 'basemap'
};

layer.watercolor = {
  url: 'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png',
  name: 'Stamen Watercolor',
  type: 'basemap'
};
