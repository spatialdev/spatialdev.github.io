/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

module.exports = angular.module('SpatialViewer').controller('FiltersCtrl', function ($scope, $http, $state, $stateParams, $rootScope,
                                                                                     SectorFactory, CICOFilterFactory, HealthFilterFactory,
                                                                                     LibraryFilterFactory, AgFilterFactory, LayerConfig,
                                                                                     IndiaFactory,KenyaFactory,NigeriaFactory) {
    $scope.params = $stateParams;
    $scope.navTab = 'CICOS';
    $scope.allSectors = [];
    $scope.HealthLayer = HealthFilterFactory.Layer;
    $scope.AgLayer = AgFilterFactory.Layer;
    $scope.LibraryLayer = LibraryFilterFactory.Layer;
    $scope.CICOLayer = CICOFilterFactory.Layer;
    $scope.CICOLayer_Kenya = CICOFilterFactory.Layer_Kenya;
    $scope.CICOLayer_Nigeria = NigeriaFactory.Layer;
    $scope.CICOSector = CICOFilterFactory.CICOs_Counts;
    $scope.top3 = false;
    $scope.ShowAllSectors = false;
    $scope.SearchBar = false;
    $scope.AgTop3 = [];
    $scope.t3 = [];

    // Move this to Factories
    $scope.Sectorcfg = {
        'Financial Service': {
            color: 'rgb(157, 33, 41)'
        },
        'Library': {
            color: 'rgb(42, 133, 173)'
        },
        'Agriculture': {
            color: 'rgb(209, 110, 35)'

        },
        'Health': {
            color: 'rgb(127, 157, 106)'
        }
    };

    $scope.toggleSearchBar = function(){
        $scope.SearchBar = !$scope.SearchBar;
    };

    // Function is called after Country has changed
    // $scope.CICOSector can either contain Kenya/India/Nigeria data
    $scope.setFilters = function () {
        if ($scope.selection == 'Kenya') {
            $scope.CICOSector = CICOFilterFactory.CICOs_Counts_Kenya;
            $scope.CICOSector.viewAll = true;
        }
        if($scope.selection == 'India'){
            $scope.CICOSector = CICOFilterFactory.CICOs_Counts;
            //$scope.CICOSector.viewAll = false;
            //$scope.HealthSector.viewAll = true;
        }
        if($scope.selection == 'Nigeria'){
            $scope.CICOSector = NigeriaFactory.CICOs_Counts;
            $scope.CICOSector.viewAll = true;
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
                $scope.ShowAllSectors = true;
                $scope.KenyaOn = false;
                $scope.NigeriaOn = false;
                //$scope.CICOSelections = [];
                $scope.CICOTop3 = [];
                $scope.t3 = [];
                console.log("India On " + $scope.IndiaOn);
                break;
            case 'Kenya':
                $scope.IndiaOn = false;
                $scope.KenyaOn = true;
                $scope.NigeriaOn = false;
                $scope.ShowAllSectors = true;
                //$scope.CICOSelections = [];
                $scope.CICOTop3 = [];
                $scope.t3 = [];
                $scope.QuickStats = KenyaFactory.Kenya.QuickStats;
                $scope.title = "Overview - Kenya";
                console.log("Kenya QuickStats " + $scope.QuickStats);
                break;
            case 'Nigeria':
                $scope.IndiaOn = false;
                $scope.KenyaOn = false;
                $scope.NigeriaOn = true;
                $scope.ShowAllSectors = true;
                //$scope.CICOSelections = [];
                $scope.CICOTop3 = [];
                $scope.t3 = [];
                $scope.QuickStats = NigeriaFactory.Nigeria.QuickStats;
                $scope.title = "Overview - Nigeria";
                console.log("Nigeria QuickStats " + $scope.QuickStats);
            default:
                $scope.QuickStats = IndiaFactory.India.QuickStats;

        }
    });

    $scope.HealthSector = HealthFilterFactory.Health_Counts;
    $scope.AgSector = AgFilterFactory.Ag_Counts;
    $scope.LibrarySector = LibraryFilterFactory.Library_Counts;

    // Check box are checked by default
    //$scope.CICOSector.selectedAll = false;
    $scope.HealthSector.viewAll = true;
    //$scope.AgSector.selectedAll = false;
    //$scope.LibrarySector.selectedAll = false;
    $scope.LibrarySector.viewAll = true;
    $scope.CICOSector.viewAll = true;
    $scope.AgSector.viewAll = true;
    $scope.checkedBool = "View All";
    $scope.selectedSector = 'CICOS';

    // Get selected tab
    $scope.setSelectedSector = function (selection) {
        SectorFactory.setSelectedSector(selection);
        $scope.selectedSector = SectorFactory.SelectedSector;
        console.log("Selected Sector: " + $scope.selectedSector);
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
            } else {
                $scope.HealthSector[i].selected = false;
            }
        }
    };

    $scope.checkAllLibrary = function (){
        for (var i = 0; i < $scope.LibrarySector.length; i++) {
            if ($scope.LibrarySector.selectedAll == true) {
                $scope.LibrarySector[i].selected = true;
            } else {
                $scope.LibrarySector[i].selected = false;
            }
        }
    };

    $scope.checkAllAg = function (){
        for (var i = 0; i < $scope.AgSector.length; i++) {
            if ($scope.AgSector.selectedAll == true) {
                $scope.AgSector[i].selected = true;
            } else {
                $scope.AgSector[i].selected = false;
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
            if($scope.selection == 'India') {
                $scope.CICOLayer.active = true;
            }
            if($scope.selection == 'Kenya'){
                $scope.CICOLayer_Kenya.active = true;
            }
            if($scope.selection == 'Nigeria'){
                $scope.CICOLayer_Nigeria.active = true;
            }

            $scope.checkAllCICO();
        } else {
            if($scope.selection == 'India') {
                $scope.CICOLayer.active = false;
            }
            if($scope.selection == 'Kenya'){
                $scope.CICOLayer_Kenya.active = false;
            }
            if($scope.selection == 'Nigeria'){
                $scope.CICOLayer_Nigeria.active = false;
            }
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
            $scope.HealthLayer.active = false;
            $scope.checkAllHealth();
        }

        console.log("Checked Bool: " + $scope.checkedBool);
        console.log("Selected All: " + $scope.HealthSector.selectedAll);
        console.log("Active? " + $scope.HealthLayer.active);
    };

    $scope.filterLibrary = function () {
        //LibraryFilterFactory.checkAll($scope.LibrarySector, $scope.selectedSector, $scope.LibrarySector.selectedAll);
        //$scope.checkedBool = LibraryFilterFactory.checkBool;

        $scope.LibrarySector.selectedAll = !$scope.LibrarySector.selectedAll;

        // Toggle ag sector later
        if ($scope.LibrarySector.selectedAll == true) {
            $scope.LibraryLayer.active = true;
            $scope.checkAllLibrary();
        } else {
            $scope.LibraryLayer.active = false;
            $scope.checkAllLibrary();
        }

        console.log("Checked Bool: " + $scope.checkedBool);
        console.log("Selected All: " + $scope.LibrarySector.selectedAll);
        console.log("Active? " + $scope.LibraryLayer.active);

    };

    $scope.filterAg = function () {
        //AgFilterFactory.checkAll($scope.AgSector, $scope.selectedSector, $scope.AgSector.selectedAll);
        //$scope.checkedBool = AgFilterFactory.checkBool;
        $scope.AgSector.selectedAll = !$scope.AgSector.selectedAll;

        // Toggle ag sector later
        if ($scope.AgSector.selectedAll == true) {
            $scope.AgLayer.active = true;
            $scope.checkAllAg();
        } else {
            $scope.AgLayer.active = false;
            $scope.checkAllAg();
        }

        console.log("Checked Bool: " + $scope.checkedBool);
        console.log("Selected All: " + $scope.AgSector.selectedAll);
        console.log("Active? " + $scope.AgLayer.active);

    };

    $scope.toggleViewAllHealth = function() {
        $scope.HealthSector.viewAll = !$scope.HealthSector.viewAll;

    };

    $scope.toggleViewAllAg = function() {
        $scope.AgSector.viewAll = !$scope.AgSector.viewAll;
    };

    $scope.toggleViewAllLibrary = function() {
        $scope.LibrarySector.viewAll = !$scope.LibrarySector.viewAll;
    };

    $scope.toggleViewAllCICOS = function() {
        $scope.CICOSector.viewAll = !$scope.CICOSector.viewAll;
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
        $scope.CICOSelections_obj = {};
        $scope.CICOTop3 = [];
        $scope.t3 = [];
        var cico_sector ='';

        if($scope.selection == 'India') {
            cico_sector = 'CICOS';
        }
        if($scope.selection == 'Kenya') {
            cico_sector = 'cicos_kenya';
        }
        if($scope.selection == 'Nigeria') {
            cico_sector = 'cicos_nigeria';
        }

        //save selection index
        var sidx = 0;
        var order = 0;

        //Add to CICO Selections
        for (var i = 0; i < $scope.CICOSector.length; i++) {
            if ($scope.CICOSector[i].selected == true) {
                $scope.CICOSelections.push({
                        type: $scope.CICOSector[i].type,
                        selected: $scope.CICOSector[i].selected,
                        sector: cico_sector
                    }
            );
                //$scope.t3.push(sector);
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

        // Add object containing layer name to cico selections so map will remove the last sector (map.js findLayer())
        if($scope.CICOSelections.length == 0){
            $scope.CICOSelections.push({sector: cico_sector});
        }

        //var CICOSelectionsLength = $scope.CICOSelections.length;
        //// Hard coded 16
        //if ($scope.selection == 'Kenya' && CICOSelectionsLength < CICOFilterFactory.CICOsTypeTotal_Kenya) {
        //    $scope.CICOSector.selectedAll = false;
        //} else {
        //    $scope.CICOSector.selectedAll = true;
        //}

        //for(var i=$scope.CICOSelections.length-1;i<3;i++){
        //  $scope.CICOTop3.push($scope.CICOSelections[i]);
        //}

        console.log("TOP 3: " + $scope.CICOTop3);
        console.log("length: " + CICOSelectionsLength + " " + $scope.CICOSelections);
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
        $scope.AgSelections_obj = {};
        $scope.AgTop3 = [];
        $scope.t3 = [];

        var ag_sector ='';

        if($scope.selection == 'India') {
            ag_sector = 'agriculture';
        }

        //save selection index
        var sidx = 0;
        var order = 0;

        //Add to Ag Selections
        for (var i = 0; i < $scope.AgSector.length; i++) {
            if ($scope.AgSector[i].selected == true) {
                $scope.AgSelections.push({
                        type: $scope.AgSector[i].type,
                        selected: $scope.AgSector[i].selected,
                        sector: ag_sector
                    }
                );
                //$scope.t3.push(sector);
                //Add to Top 3 array
                for (var j = 0; j < $scope.AgSelections.length; j++) {
                    // Top 3 includes the LAST 3 Ag selections
                    if ($scope.AgTop3.includes($scope.AgSelections[$scope.AgSelections.length - 1]) == false) {
                        if ($scope.AgTop3.length >= 3) {
                            $scope.AgTop3.splice(sidx, 1, $scope.AgSelections[$scope.AgSelections.length - 1]);
                            $scope.top3 = ($scope.AgTop3.length > 0);
                            $scope.AgSector.viewAll = false;
                            if (sidx <2){sidx++;} else {sidx = 0;}
                        } else {
                            $scope.AgTop3.push($scope.AgSelections[$scope.AgSelections.length - 1]);
                            $scope.top3 = ($scope.AgTop3.length > 0);
                            //$scope.AgSector.viewAll = false;

                        }
                    }
                }
            }
        }

        // Add object containing layer name to health selections so map will remove the last sector (map.js findLayer())
        if($scope.AgSelections.length == 0){
            $scope.AgSelections.push({sector: ag_sector});
        }

        //var AgSelectionsLength = $scope.AgSelections.length;
        //// Hard coded 16
        //if ($scope.selection == 'Kenya' && AgSelectionsLength < AgFilterFactory.AgsTypeTotal_Kenya) {
        //    $scope.AgSector.selectedAll = false;
        //} else {
        //    $scope.AgSector.selectedAll = true;
        //}

        //for(var i=$scope.AgSelections.length-1;i<3;i++){
        //  $scope.AgTop3.push($scope.AgSelections[i]);
        //}

        console.log("TOP 3: " + $scope.AgTop3);
        console.log("length: " + AgSelectionsLength + " " + $scope.AgSelections);
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
        $scope.HealthSelections_obj = {};
        $scope.HealthTop3 = [];
        $scope.t3 = [];

        var health_sector ='';

        if($scope.selection == 'India') {
            health_sector = 'health';
        }

        //save selection index
        var sidx = 0;
        var order = 0;

        //Add to Health Selections
        for (var i = 0; i < $scope.HealthSector.length; i++) {
            if ($scope.HealthSector[i].selected == true) {
                $scope.HealthSelections.push({
                        type: $scope.HealthSector[i].type,
                        selected: $scope.HealthSector[i].selected,
                        sector: health_sector
                    }
                );
                //$scope.t3.push(sector);
                //Add to Top 3 array
                for (var j = 0; j < $scope.HealthSelections.length; j++) {
                    // Top 3 includes the LAST 3 Health selections
                    if ($scope.HealthTop3.includes($scope.HealthSelections[$scope.HealthSelections.length - 1]) == false) {
                        if ($scope.HealthTop3.length >= 3) {
                            $scope.HealthTop3.splice(sidx, 1, $scope.HealthSelections[$scope.HealthSelections.length - 1]);
                            $scope.top3 = ($scope.HealthTop3.length > 0);
                            $scope.HealthSector.viewAll = false;
                            if (sidx <2){sidx++;} else {sidx = 0;}
                        } else {
                            $scope.HealthTop3.push($scope.HealthSelections[$scope.HealthSelections.length - 1]);
                            $scope.top3 = ($scope.HealthTop3.length > 0);
                            //$scope.HealthSector.viewAll = false;

                        }
                    }
                }
            }
        }

        // Add object containing layer name to health selections so map will remove the last sector (map.js findLayer())
        if($scope.HealthSelections.length == 0){
            $scope.HealthSelections.push({sector: health_sector});
        }

        //var HealthSelectionsLength = $scope.HealthSelections.length;
        //// Hard coded 16
        //if ($scope.selection == 'Kenya' && HealthSelectionsLength < HealthFilterFactory.HealthsTypeTotal_Kenya) {
        //    $scope.HealthSector.selectedAll = false;
        //} else {
        //    $scope.HealthSector.selectedAll = true;
        //}

        //for(var i=$scope.HealthSelections.length-1;i<3;i++){
        //  $scope.HealthTop3.push($scope.HealthSelections[i]);
        //}

        console.log("TOP 3: " + $scope.HealthTop3);
        console.log("length: " + HealthSelectionsLength + " " + $scope.HealthSelections);
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
        $scope.LibrarySelections_obj = {};
        $scope.LibraryTop3 = [];
        $scope.t3 = [];

        var library_sector ='';

        if($scope.selection == 'India') {
            library_sector = 'library';
        }

        //save selection index
        var sidx = 0;
        var order = 0;

        //Add to Library Selections
        for (var i = 0; i < $scope.LibrarySector.length; i++) {
            if ($scope.LibrarySector[i].selected == true) {
                $scope.LibrarySelections.push({
                        type: $scope.LibrarySector[i].type,
                        selected: $scope.LibrarySector[i].selected,
                        sector: library_sector
                    }
                );
                //Library only has 4 sub sectors; top 3 is unnecessary
                //$scope.t3.push(sector);
                //Add to Top 3 array
                //for (var j = 0; j < $scope.LibrarySelections.length; j++) {
                //    // Top 3 includes the LAST 3 Library selections
                //    if ($scope.LibraryTop3.includes($scope.LibrarySelections[$scope.LibrarySelections.length - 1]) == false) {
                //        if ($scope.LibraryTop3.length >= 3) {
                //            $scope.LibraryTop3.splice(sidx, 1, $scope.LibrarySelections[$scope.LibrarySelections.length - 1]);
                //            $scope.top3 = ($scope.LibraryTop3.length > 0);
                //            $scope.LibrarySector.viewAll = false;
                //            if (sidx <2){sidx++;} else {sidx = 0;}
                //        } else {
                //            $scope.LibraryTop3.push($scope.LibrarySelections[$scope.LibrarySelections.length - 1]);
                //            $scope.top3 = ($scope.LibraryTop3.length > 0);
                //            //$scope.LibrarySector.viewAll = false;
                //
                //        }
                //    }
                //}
            }
        }

        // Add object containing layer name to library selections so map will remove the last sector (map.js findLayer())
        if($scope.LibrarySelections.length == 0){
            $scope.LibrarySelections.push({sector: library_sector});
        }

        //var LibrarySelectionsLength = $scope.LibrarySelections.length;
        //// Hard coded 16
        //if ($scope.selection == 'Kenya' && LibrarySelectionsLength < LibraryFilterFactory.LibrarysTypeTotal_Kenya) {
        //    $scope.LibrarySector.selectedAll = false;
        //} else {
        //    $scope.LibrarySector.selectedAll = true;
        //}

        //for(var i=$scope.LibrarySelections.length-1;i<3;i++){
        //  $scope.LibraryTop3.push($scope.LibrarySelections[i]);
        //}

        console.log("TOP 3: " + $scope.LibraryTop3);
        //console.log("length: " + LibrarySelectionsLength + " " + $scope.LibrarySelections);
    };

    // BroadCast change in AgSelections
    $scope.$watch('AgSelections', function (){
        $rootScope.$broadcast('AgSelections',$scope.AgSelections);
    });

    $scope.$watch('CICOSelections', function (){
        $rootScope.$broadcast('CICOSelections',$scope.CICOSelections);
    });

    $scope.$watch('HealthSelections', function (){
        $rootScope.$broadcast('HealthSelections',$scope.HealthSelections);
    });

    $scope.$watch('LibrarySelections', function (){
        $rootScope.$broadcast('LibrarySelections',$scope.LibrarySelections);
    });

    // Watch for change in selected Sector
    $scope.$watch(function () {
            return SectorFactory.SelectedSector;
        }, function () {
            $scope.selectedSector = SectorFactory.SelectedSector;
            $scope.allSectors = SectorFactory.allSectors;
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

        if($scope.selection == 'Kenya'){
            layerKey = 'cicos_kenya';
            layer = $scope.CICOLayer_Kenya;
        }

        if($scope.selection == 'Nigeria'){
            layerKey = 'cicos_nigeria';
            layer = $scope.CICOLayer_Nigeria;
        }

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
