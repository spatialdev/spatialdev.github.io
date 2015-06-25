/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 4/10/14.
 */

var config = {};

config.chubbsPath = function (relPath) {
  return window.location.protocol + "//" + window.location.host + "/" + relPath;
};

config.proxyPath = function (path) {
  return config.chubbsPath('services/utilities/proxy?url=' + path);
};


/**
 * Country specific settings
 * @type {{India: {MapCenter: {Latitude: number, Longitude: number}}}}
 */

config.MapLocation = {
    MapCenter: {
      Latitude: 26,
      Longitude: 85
    },
    MapZoom: 6
};

config.QuickStats = {
  totalPopulation: 299931126,
  urbanPct: .087,
  ruralPct: .913,
  within5Km: .9201,
  ruralpop: 273830901,
  urbanpop: 26100225
};
