var layer = module.exports = {};

/**
 * XYZ
 */
layer.clouds = {
  name: 'Cloud Cover',
  type: 'xyz',
  url: 'http://{s}.tile.openweathermap.org/map/clouds_cls/{z}/{x}/{y}.png',
  opacity: 0.5 // optional. opacity is 0.5 if not specified
};

layer.precipitation = {
  name: 'Precipitation',
  type: 'xyz',
  url: 'http://{s}.tile.openweathermap.org/map/precipitation/{z}/{x}/{y}.png',
  opacity: 0.5
};

layer.precipitationclassic = {
  name: 'Precipitation (Classic)',
  type: 'xyz',
  url: 'http://{s}.tile.openweathermap.org/map/precipitation_cls/{z}/{x}/{y}.png',
  opacity: 0.4
};

layer.rain = {
  name: 'Rain',
  type: 'xyz',
  url: 'http://{s}.tile.openweathermap.org/map/rain/{z}/{x}/{y}.png'
};

layer.rainclassic = {
  name: 'Rain (Classic)',
  type: 'xyz',
  url: 'http://{s}.tile.openweathermap.org/map/rain_cls/{z}/{x}/{y}.png'
};

layer.pressure = {
  name: 'Pressure',
  type: 'xyz',
  url: 'http://{s}.tile.openweathermap.org/map/pressure/{z}/{x}/{y}.png'
};

layer.pressurecontour = {
  name: 'Pressure Contour',
  type: 'xyz',
  url: 'http://{s}.tile.openweathermap.org/map/pressure_cntr/{z}/{x}/{y}.png',
  opacity: 0.9
};

layer.temperature = {
  name: 'Temperature',
  type: 'xyz',
  url: 'http://{s}.tile.openweathermap.org/map/temp/{z}/{x}/{y}.png'
};

layer.wind = {
  name: 'Wind',
  type: 'xyz',
  url: 'http://{s}.tile.openweathermap.org/map/wind/{z}/{x}/{y}.png'
};

layer.snow = {
  name: 'Snow',
  type: 'xyz',
  url: 'http://{s}.tile.openweathermap.org/map/snow/{z}/{x}/{y}.png'
};
