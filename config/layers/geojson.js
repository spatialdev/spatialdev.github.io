var layer = module.exports = {};

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

layer.usgsearthquake = {
  type: 'geojson',
  url: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson',
  properties: {
    'title': 'USGS Realtime Earthquakes Feed (Week)'

  }
};

layer.phl = {
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

layer.wa = {
  type: 'geojson',
  url: 'data/test/washington.geojson',
  properties: {
    title: 'Washington (State)',
    fill: "#FFBE00",
    legend: ""
  }
};

layer.wafires = {
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