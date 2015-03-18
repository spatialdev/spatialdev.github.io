var layer = module.exports = {};

/**
 * KML
 */

layer.gdacs = {
  name: 'GDACS: Global Disaster Alert and Coordination System',
  type: 'kml',
  url: 'http://www.gdacs.org/xml/gdacs.kml',
  properties: {
    legend: ''
  }
};

layer.gdacstest = {
  name: 'GDACS Test',
  type: 'kml',
  url: 'data/test/gdacs.kml',
  properties: {
    legend: ''
  }
};

layer.earthquakes = {
  name: 'USGS Earthquakes',
  type: 'kml',
  url: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week_age.kml',
  properties: {
    legend: ''
  }
};

layer.earthquakestest = {
  name: 'USGS Earthquakes Test',
  type: 'kml',
  url: 'data/test/usgs-earthquakes.kml',
  properties: {
    legend: ''
  }
};