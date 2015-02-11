/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

module.exports = angular.module('SpatialViewer').controller('FiltersCtrl', function ($scope, $http, $state, $stateParams, $rootScope,
                                                                                     SectorFactory, CICOFilterFactory, HealthFilterFactory,
                                                                                     LibraryFilterFactory, AgFilterFactory, LayerConfig,
                                                                                     IndiaFactory,KenyaFactory) {
    $scope.params = $stateParams;
    $scope.navTab = 'CICOS';

    $scope.HealthLayer = HealthFilterFactory.Layer;
    $scope.AgLayer = AgFilterFactory.Layer;
    $scope.LibraryLayer = LibraryFilterFactory.Layer;
    $scope.CICOLayer = CICOFilterFactory.Layer;
    $scope.CICOSector = CICOFilterFactory.CICOs_Counts;
    $scope.top3 = false;

    $scope.SectorTypes = {
        typeNames: ['Financial Service', 'Library', 'Agriculture', 'Health']
    };

    // Move this to Factories
    $scope.Sectorcfg = {
        'Financial Service': {
            color: 'rgb(157, 33, 41)'
        },
        'Library': {
            color: 'rgb(42, 133, 173)'
        },
        'Agriculture': {
            color: 'rgb(127, 157, 106)'
        },
        'Health': {
            color: 'rgb(209, 110, 35)'
        }
    };

    $scope.setFilters = function () {
        if ($scope.selection == 'Kenya') {
            $scope.CICOSector = CICOFilterFactory.CICOs_Counts_Kenya;
            //$scope.CICOSector.viewAll = true;
        } else {
            $scope.CICOSector = CICOFilterFactory.CICOs_Counts;
            //$scope.CICOSector.viewAll = false;
            //$scope.HealthSector.viewAll = true;
        }
    };

    $scope.$watch(function () {
        return SectorFactory.selectedCountry;
    }, function () {
        $scope.selection = SectorFactory.selectedCountry;
        console.log(" ------ Details.js Current Country has changed to: " + $scope.selection);
        $scope.setFilters();

        switch ($scope.selection) {
            case 'India':
                $scope.QuickStats = IndiaFactory.India.QuickStats;
                $scope.title = "Overview - Bihar & Uttar Pradesh";
                console.log("India QuickStats");
                $scope.IndiaOn = true;
                $scope.CICOSelections = [];
                $scope.CICOTop3 = [];
                $scope.t3 = [];
                console.log("India On " + $scope.IndiaOn);
                break;
            case 'Kenya':
                $scope.IndiaOn = false;
                $scope.CICOSelections = [];
                $scope.CICOTop3 = [];
                $scope.t3 = [];
                $scope.QuickStats = KenyaFactory.Kenya.QuickStats;
                $scope.title = "Overview - Kenya";
                console.log("Kenya QuickStats " + $scope.QuickStats);
                break;
            default:
                $scope.QuickStats = IndiaFactory.India.QuickStats;

        }
    });

    $scope.HealthSector = HealthFilterFactory.Health_Counts;
    $scope.AgSector = AgFilterFactory.Ag_Counts;
    $scope.LibrarySector = LibraryFilterFactory.Library_Counts;

    // Check box are checked by default
    $scope.CICOSector.selectedAll = false;
    $scope.HealthSector.selectedAll = false;
    $scope.AgSector.selectedAll = false;
    $scope.LibrarySector.selectedAll = false;
    $scope.checkedBool = "View All";
    $scope.selectedSector = 'CICOS';

    // Get selected tab
    $scope.setSelectedSector = function (selection) {
        $scope.selectedSector = selection;
        console.log("Selected Sector: " + $scope.selectedSector);
        SectorFactory.setSelectedSector(selection);
    };

    $scope.checkAllCICO = function () {
        for (var i = 0; i < $scope.CICOSector.length; i++) {
            if ($scope.CICOSector.selectedAll == true) {
                $scope.CICOSector[i].selected = true;
            } else {
                $scope.CICOSector[i].selected = false;
            }
        }
    };

    $scope.checkAllHealth = function (){
        for (var i = 0; i < $scope.HealthSector.length; i++) {
            if ($scope.HealthSector.selectedAll == true) {
                $scope.HealthSector[i].selected = true;
            }
        }
    };

    // Handle Check/Uncheck All filters
    $scope.filterCICO = function () {
        //CICOFilterFactory.checkAll($scope.CICOSector, $scope.selectedSector, $scope.CICOSector.selectedAll);
        // set scope variables to mirror factory properties
        //$scope.checkedBool = CICOFilterFactory.checkBool;
        //$scope.CICOSector.selectedAll = CICOFilterFactory.selectall;

        $scope.CICOSector.selectedAll = !$scope.CICOSector.selectedAll;

        // Toggle cicos sector later
        if ($scope.CICOSector.selectedAll == true) {
            $scope.CICOLayer.active = true;
            $scope.checkAllCICO();
        } else {
            $scope.CICOLayer.active = false;
            $scope.checkAllCICO();

        }

        console.log("CICO Checked Bool: " + $scope.checkedBool);
        console.log("CICO Selected All: " + $scope.CICOSector.selectedAll);
        console.log("CICO Active? " + $scope.CICOLayer.active);

    };

    $scope.filterHealth = function () {
        // Run check all from Health Factory
        //HealthFilterFactory.checkAll($scope.HealthSector, $scope.selectedSector, $scope.HealthSector.selectedAll);
        //// set scope variables to mirror factory properties
        //$scope.checkedBool = HealthFilterFactory.checkBool;

        $scope.HealthSector.selectedAll = !$scope.HealthSector.selectedAll;

        // Toggle health sector later
        if ($scope.HealthSector.selectedAll == true) {
            $scope.HealthLayer.active = true;
            $scope.checkAllHealth();
        } else {
            $scope.HealthLayer.active = false
        }

        console.log("Checked Bool: " + $scope.checkedBool);
        console.log("Selected All: " + $scope.HealthSector.selectedAll);
        console.log("Active? " + $scope.HealthLayer.active);
    };

    $scope.filterLibrary = function () {
        LibraryFilterFactory.checkAll($scope.LibrarySector, $scope.selectedSector, $scope.LibrarySector.selectedAll);
        $scope.checkedBool = LibraryFilterFactory.checkBool;
        $scope.LibrarySector.selectedAll = LibraryFilterFactory.selectall;

        // Toggle ag sector later
        if ($scope.LibrarySector.selectedAll == true) {
            $scope.LibraryLayer.active = true;
        } else {
            $scope.LibraryLayer.active = false
        }

        console.log("Checked Bool: " + $scope.checkedBool);
        console.log("Selected All: " + $scope.LibrarySector.selectedAll);
        console.log("Active? " + $scope.LibraryLayer.active);

    };

    $scope.filterAg = function () {
        AgFilterFactory.checkAll($scope.AgSector, $scope.selectedSector, $scope.AgSector.selectedAll);
        $scope.checkedBool = AgFilterFactory.checkBool;
        $scope.AgSector.selectedAll = AgFilterFactory.selectall;

        // Toggle ag sector later
        if ($scope.AgSector.selectedAll == true) {
            $scope.AgLayer.active = true;
        } else {
            $scope.AgLayer.active = false
        }

        console.log("Checked Bool: " + $scope.checkedBool);
        console.log("Selected All: " + $scope.AgSector.selectedAll);
        console.log("Active? " + $scope.AgLayer.active);

    };

    $scope.toggleViewAll = function() {
        $scope.CICOSector.viewAll = !$scope.CICOSector.viewAll;
        $scope.HealthSector.viewAll = !$scope.HealthSector.viewAll;
    };

    // Handle filters clicks events
    $scope.setCICOSelection = function (sector, checked) {
        // Set selected value for each sector based on checkbox
        for (var i = 0; i < $scope.CICOSector.length; i++) {
            if (sector == $scope.CICOSector[i].type) {
                $scope.CICOSector[i].selected = checked;
                break;
            }
            console.log(sector + ": " + checked);
        }
        // Save selected Filters into array
        $scope.CICOSelections = [];
        $scope.CICOTop3 = [];
        $scope.t3 = [];

        //save selection index
        var sidx = 0;
        var order = 0;

        //Add to CICO Selections
        for (var i = 0; i < $scope.CICOSector.length; i++) {
            if ($scope.CICOSector[i].selected == true) {
                $scope.CICOSelections.push(
                    {
                        type: $scope.CICOSector[i].type,
                        selected: $scope.CICOSector[i].selected
                    });
                $scope.t3.push(sector);
                //Add to Top 3 array
                for (var j = 0; j < $scope.CICOSelections.length; j++) {
                    // Top 3 includes the LAST 3 CICO selections
                    if ($scope.CICOTop3.includes($scope.CICOSelections[$scope.CICOSelections.length - 1]) == false) {
                        if ($scope.CICOTop3.length >= 3) {
                            $scope.CICOTop3.splice(sidx, 1, $scope.CICOSelections[$scope.CICOSelections.length - 1]);
                            $scope.top3 = ($scope.CICOTop3.length > 0);
                            $scope.CICOSector.viewAll = false;
                            if (sidx <2){sidx++;} else {sidx = 0;}
                        } else {
                            $scope.CICOTop3.push($scope.CICOSelections[$scope.CICOSelections.length - 1]);
                            $scope.top3 = ($scope.CICOTop3.length > 0);
                            //$scope.CICOSector.viewAll = false;

                        }
                    }
                }
            }
        }


        var CICOSelectionsLength = $scope.CICOSelections.length;
        // Hard coded 16
        if ($scope.selection == 'Kenya' && CICOSelectionsLength < CICOFilterFactory.CICOsTypeTotal_Kenya) {
            $scope.CICOSector.selectedAll = false;
        } else {
            $scope.CICOSector.selectedAll = true;
        }

        //for(var i=$scope.CICOSelections.length-1;i<3;i++){
        //  $scope.CICOTop3.push($scope.CICOSelections[i]);
        //}

        console.log("TOP 3: " + $scope.CICOTop3);
        console.log("length: " + CICOSelectionsLength + " " + $scope.CICOSelections);
    };
    $scope.setHealthSelection = function (sector, checked) {
        // Set selected value for each sector based on checkbox
        for (var i = 0; i < $scope.HealthSector.length; i++) {
            if (sector == $scope.HealthSector[i].type) {
                $scope.HealthSector[i].selected = checked;
                break;
            }
            console.log(sector + ": " + checked);
        }
        // Save selected Filters into array
        $scope.HealthSelections = [];
        for (var i = 0; i < $scope.HealthSector.length; i++) {
            if ($scope.HealthSector[i].selected == true) {
                $scope.HealthSelections.push($scope.HealthSector[i].type);
            }
        }

        console.log($scope.HealthSelections);
    };
    $scope.setLibrarySelection = function (sector, checked) {
        // Set selected value for each sector based on checkbox
        for (var i = 0; i < $scope.LibrarySector.length; i++) {
            if (sector == $scope.LibrarySector[i].type) {
                $scope.LibrarySector[i].selected = checked;
                break;
            }
            console.log(sector + ": " + checked);
        }
        // Save selected Filters into array
        $scope.LibrarySelections = [];
        for (var i = 0; i < $scope.LibrarySector.length; i++) {
            if ($scope.LibrarySector[i].selected == true) {
                $scope.LibrarySelections.push($scope.LibrarySector[i].type);
            }
        }

        console.log($scope.LibrarySelections);
    };
    $scope.setAgSelection = function (sector, checked) {
        // Set selected value for each sector based on checkbox
        for (var i = 0; i < $scope.AgSector.length; i++) {
            if (sector == $scope.AgSector[i].type) {
                $scope.AgSector[i].selected = checked;
                break;
            }
            console.log(sector + ": " + checked);
        }
        // Save selected Filters into array
        $scope.AgSelections = [];
        for (var i = 0; i < $scope.AgSector.length; i++) {
            if ($scope.AgSector[i].selected == true) {
                $scope.AgSelections.push($scope.AgSector[i].type);
            }
        }

        console.log($scope.AgSelections);
    };

    // Watch for change in selected Sector
    $scope.$watch(function () {
            return SectorFactory.selectedSector;
        }, function () {
            $scope.selectedSector = SectorFactory.selectedSector;
        }
    );

    $scope.submitFilter = function () {
        $stateParams.filters = $scope.whereClause;
        var state = $state.current.name || 'main';
        $state.go(state, $stateParams);
    };

    $scope.clearAllFilters = function () {
        //$scope.AgSector.selectedAll = false;
        //$scope.LibrarySector.selectedAll = false;
        //
        //$scope.scrapeCICOSelection();
        //$scope.scrapeHealthSelection();
        //
        //LibraryFilterFactory.clearAll($scope.LibrarySector,$scope.selectedSector,$scope.LibrarySector.selectedAll);
        //$scope.checkedBool = LibraryFilterFactory.checkBool;
        //AgFilterFactory.clearAll($scope.AgSector,$scope.selectedSector,$scope.AgSector.selectedAll);
        //$scope.checkedBool = AgFilterFactory.checkBool;
    };

    $scope.scrapeCICOSelection = function () {
        $scope.CICOSector.selectedAll = false;
        $scope.CICOLayer.active = false;
        CICOFilterFactory.clearAll($scope.CICOSector, $scope.selectedSector, $scope.CICOSector.selectedAll);
        $scope.checkedBool = CICOFilterFactory.checkBool;
        $scope.CICOSector.selectedAll = CICOFilterFactory.selectall;

        console.log("CICO Checked Bool: " + $scope.checkedBool);
        console.log("CICO Selected All: " + $scope.CICOSector.selectedAll);
        console.log("CICO Active? " + $scope.CICOLayer.active);
    };

    $scope.scrapeHealthSelection = function () {
        $scope.HealthSector.selectedAll = false;
        $scope.HealthLayer.active = false;
        HealthFilterFactory.clearAll($scope.HealthSector, $scope.selectedSector, $scope.HealthSector.selectedAll);
        $scope.checkedBool = HealthFilterFactory.checkBool;
        $scope.HealthSector.selectedAll = HealthFilterFactory.selectall;

        console.log("Health Checked Bool: " + $scope.checkedBool);
        console.log("Health Selected All: " + $scope.HealthSector.selectedAll);
        console.log("Health Active? " + $scope.HealthLayer.active);

    };

    $scope.gadmLevel = $stateParams.level || 'auto';

    $scope.$watch('gadmLevel', function (newValue) {
        $stateParams.level = newValue;
        var state = $state.current.name || 'main';
        $state.go(state, $stateParams);
    });

    $scope.$on('zoom-update', function () {
        console.log("zoom: " + $stateParams.zoom);
        $scope.zoom = parseInt($stateParams.zoom);
    });

    //NH TODO: Not yet fully implemented - possible extra feature...
    /**
     * Layers that are active on the map but are not mentioned in LayerConfig
     * @type {{}}
     */
    $scope.nomadLayers = {};

    /**
     * When the route changes, we should see what layers we have on there and have the layers
     * in the panels checked accordingly.
     */
    $scope.$on('layers-update', function (evt, layers) {

        // github gists
        $scope.listGists();

        // reset the nomad layers
        for (var nk in $scope.nomadLayers) {
            $scope.nomadLayers[nk].active = false;
        }

        // reset the layer config layers
        for (var lck in LayerConfig) {
            if (typeof LayerConfig[lck] === 'object' && LayerConfig[lck] !== null) {
                LayerConfig[lck].active = false;
            }
        }

        /**
         * Check if the layer is active in map layers
         */
        $scope.mapLayers = layers;
        // skip the first layer, the basemap
        for (var i = 1, len = layers.length; i < len; i++) {
            var l = layers[i];
            // layer is in the layer config
            if (typeof LayerConfig[l] === 'object' && LayerConfig[l] !== null) {
                LayerConfig[l].active = true;
            }
            // layer is a github gist
            else if ($scope.gists[l]) {
                $scope.gists[l].active = true;
            }
            // layer is a not in the layer config. it's nomadic.
            else {
                $scope.nomadLayers[l] = {
                    name: l,
                    url: l,
                    active: true
                }
            }
        }
    });

    $scope.toggleMapLayer = function (layerKey, layer) {

        // add layer
        if (layer.active === true) {
            $scope.mapLayers.push(layerKey);

            // remove layer
        } else {
            $scope.mapLayers = $.grep($scope.mapLayers, function (routeLayer) {
                return routeLayer !== layerKey;
            });
            console.log("Not active");
        }

        $stateParams.layers = $scope.mapLayers.join(',');
        var state = $state.current.name || 'main';
        $state.go(state, $stateParams);

    };

    $scope.removeMapLayer = function (layerKey, layer) {

        // remove layer
        if (layer.active === false) {

            $scope.mapLayers = $.grep($scope.mapLayers, function (routeLayer) {
                return routeLayer !== layerKey;
            });
            console.log("Not active");
        }

        $stateParams.layers = $scope.mapLayers.join(',');
        var state = $state.current.name || 'main';
        $state.go(state, $stateParams);

    };

    $scope.listGists = function () {
        $scope.gists = gists.fetch();
        if ($scope.gists) {
            $scope.numGists = Object.keys($scope.gists).length;
        } else {
            $scope.numGists = 0;
        }
    };
    $scope.listGists();

});
