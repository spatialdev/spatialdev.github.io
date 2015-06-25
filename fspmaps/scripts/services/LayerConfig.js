/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/18/14.
 */

/**
 * All of the layer names need to be lowercase.
 */
module.exports = angular.module('SpatialViewer').service('LayerConfig', function ($stateParams, $rootScope) {

    /**
     * The layers specified in this main LayerConfig module are integral to SpatialViewer
     * and should not be changed by the user.
     */

    var currentlayers = [];

    var layers = [];

    $rootScope.$on('layers-update', function (e,l) {
        // set current layers for map.js scope.allSectors
        layers = $stateParams.layers.split(",");
        layers.forEach(function (val, idx) {
            if (idx !== 0 && currentlayers.indexOf(val) == -1) {
                currentlayers.push(val);
            }
        });

    });

    var AllFeatures = [];

    var collectLayerFeatures = function(){
        if(AllFeatures.length == currentlayers.length){
            $rootScope.$broadcast('details', AllFeatures);
            AllFeatures = [];
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

    // add all layers and remove from country factories
    // reference in filters.js
    this.configLayers = {};
    this.configLayers['cicos_uganda'] = configLayers[1]['cicos_uganda'];
    this.configLayers['education_uganda'] = configLayers[1]['education_uganda'];
    this.configLayers['agriculture_uganda'] = configLayers[1]['agriculture_uganda'];

    for (var i = 0, len = configLayers.length; i < len; i++) {
        var cfg = configLayers[i];
        for (var key in cfg) {
            this[key] = cfg[key];
            //console.log(this[key]);
        }
    }

    var idx = 0;

    // watch for when user details panel index changes
    $rootScope.$on('activeidx', function (event, args) {
        // activeidx changes multiples times in details.js, so only run when details index != activeidx
        if (idx !== args.properties.index && args.properties.index !== 0) {
            idx = args.properties.index;
        }
    });

    this.configLayers['cicos_uganda']['onClick'] = function(evt) {
        $rootScope.$apply(function(){
            if (evt && evt.features && evt.features.length > 0) {
                AllFeatures.push(evt.features);
                //collectLayerFeatures();
                $rootScope.$broadcast('details', evt.features);
            }
        })
    };

    this.configLayers['education_uganda']['onClick'] = function(evt) {
        $rootScope.$apply(function(){
            if (evt && evt.features && evt.features.length > 0) {
                AllFeatures.push(evt.features);
                //collectLayerFeatures();
                $rootScope.$broadcast('details', evt.features);
            }
        })
    };

    this.configLayers['agriculture_uganda']['onClick'] = function(evt) {
        $rootScope.$apply(function(){
            if (evt && evt.features && evt.features.length > 0) {
                AllFeatures.push(evt.features);
                //collectLayerFeatures();
                $rootScope.$broadcast('details', evt.features);
            }
        })
    };


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
