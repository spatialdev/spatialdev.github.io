/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 4/9/14.
 */

module.exports = angular.module('SpatialViewer').controller('DetailsCtrl', function ($scope, $rootScope, $state, $stateParams, $http, SectorFactory,
                                                                                     Donuts, $filter, IndiaFactory, KenyaFactory, NigeriaFactory,
                                                                                     CICOFilterFactory, HealthFilterFactory, AgFilterFactory,
                                                                                     LibraryFilterFactory) {
    $scope.details = {};
    $scope.library = {};

    $scope.toolTipDiv = null;

    $scope.navTab = 'countryoverview';

    $scope.salesforceUrl = config.salesforceUrl;
    $scope.ShowAllSectors = false;

    $scope.getSelectedSector = function () {

        // watch for change in sector, not tab
        if ($scope.navTab !== 'countryoverview') {
            $scope.title = $scope.selectedSector;
        } else {
            $scope.title = "Overview - Bihar & Uttar Pradesh";
        }

        switch ($scope.selectedSector) {
            case 'Agriculture':
                $scope.APData = AgFilterFactory.Ag_Counts;
                $scope.sectortotal = AgFilterFactory.AgTotal;
                $scope.APChart(AgFilterFactory.Ag_LandUse_Counts);
                console.log("case: agriculture");
                break;
            case 'CICOS':
            case 'Financial Service':
                // Check which country is selected
                if($scope.selection == 'India'){
                    $scope.APData = CICOFilterFactory.CICOs_Counts;
                    $scope.sectortotal = CICOFilterFactory.CICOsTotal;
                    $scope.APChart(CICOFilterFactory.CICOs_LandUse_Counts);
                    console.log("case: India CICOS");

                }
                if($scope.selection == 'Kenya'){
                    $scope.APData = CICOFilterFactory.CICOs_Counts_Kenya;
                    $scope.sectortotal = CICOFilterFactory.CICOsTotal_Kenya;
                    console.log("case: Kenya CICOS");
                }
                if($scope.selection == 'Nigeria'){
                    $scope.APData = NigeriaFactory.CICOs_Counts;
                    $scope.sectortotal = NigeriaFactory.CICOsTotal;
                    console.log("case: Nigeria CICOS");
                }
                break;
            case 'Health':
                $scope.APData = HealthFilterFactory.Health_Counts;
                $scope.sectortotal = HealthFilterFactory.HealthTotal;
                $scope.APChart(HealthFilterFactory.Health_LandUse_Counts);
                console.log("case: Health");
                break;
            case 'Library':
                $scope.APData = LibraryFilterFactory.Library_Counts;
                $scope.sectortotal = LibraryFilterFactory.LibraryTotal;
                $scope.APChart(LibraryFilterFactory.Library_LandUse_Counts);
                console.log("case: Library");
                break;
            default:
                if($scope.selection == 'India'){
                    $scope.APData = CICOFilterFactory.CICOs_Counts;
                    $scope.sectortotal = CICOFilterFactory.CICOsTotal;
                    $scope.APChart(CICOFilterFactory.CICOs_LandUse_Counts);
                    console.log("case: India CICOS");

                } if($scope.selection == 'Kenya'){
                    $scope.APData = CICOFilterFactory.CICOs_Counts_Kenya;
                    $scope.sectortotal = CICOFilterFactory.CICOsTotal_Kenya;
                    console.log("case: Kenya CICOS");
                }
                //$scope.APData = CICOFilterFactory.CICOs_Counts;
                //$scope.sectortotal = CICOFilterFactory.CICOsTotal;
                //$scope.APChart(CICOFilterFactory.CICOs_LandUse_Counts);
                //console.log("case: default");
        }
    };

    $rootScope.$on('LibraryDetails', function(event,args){
        if(args) {
            console.log('Library Details: ' + args);
            $scope.library = args.features;
            $scope.librarydetails = [];

            $scope.library.forEach(function(val) {
                $scope.librarydetails.push((val));
            });

            console.log($scope.librarydetails);
        }
    });



    //Watch for change in country
    $scope.$watch(function () {
        return SectorFactory.selectedCountry;
    }, function () {
        $scope.selection = SectorFactory.selectedCountry;
        $scope.getSelectedSector();
        switch ($scope.selection) {
            case 'India':
                $scope.QuickStats = IndiaFactory.India.QuickStats;
                $scope.title = "Overview - Bihar & Uttar Pradesh";
                console.log("India QuickStats");
                break;
            case 'Kenya':
                $scope.QuickStats = KenyaFactory.Kenya.QuickStats;
                $scope.title = "Overview - Kenya";
                $scope.SectorTypes = ['Financial Service'];
                console.log("Kenya QuickStats " + $scope.QuickStats);
                break;
            case 'Nigeria':
                $scope.QuickStats = NigeriaFactory.Nigeria.QuickStats;
                $scope.title = "Overview - Nigeria";
                $scope.SectorTypes = ['Financial Service'];
                console.log("Nigeria QuickStats " + $scope.QuickStats);
                break;
            default:
                $scope.QuickStats = IndiaFactory.India.QuickStats;
                $scope.title = "Overview - Bihar & Uttar Pradesh";

        }
        console.log(" ------ Details.js Current Country has changed to: " + $scope.selection);
    });

    $http.get('data/sf-object-field-hash.json', {cached: true}).success(function (sfFieldHash) {
        $scope.sfFieldHash = sfFieldHash;
    });

    $scope.APChart = function (sector) {
        //Clear old ones
        $("#d3Container").html("");

        if (!$scope.toolTipDiv) {
            $scope.toolTipDiv = d3.select("#SiteWrapper").append("div")
                .attr("class", "tooltip")
                .style("opacity", 0);
        }

        var margin = {top: 20, right: 20, bottom: 260, left: 200},
            width = 650 - margin.left - margin.right,
            height = 600 - margin.top - margin.bottom;

        var x0 = d3.scale.ordinal()
            .rangeRoundBands([0, width], .1);

        var x1 = d3.scale.ordinal();

        var y = d3.scale.linear()
            .range([height, 0]);

        var color = d3.scale.ordinal()
            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

        var xAxis = d3.svg.axis()
            .scale(x0)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .tickFormat(d3.format(".2s"));

        var svg = d3.select("#d3Container").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var landUseTypes = [];

        for (var i = 0; i < sector.length; i++) {
            if (landUseTypes.includes(sector[i].land_use) == false) {
                landUseTypes.push(sector[i].land_use);
            }
        }

        //Always rearrange array.
        //Move Urban to 1st slot
        //Then Rural, then whatever else
        var goal = ['Urban', 'Rural'],
            index,
            holder;

        for (var i = 0, gl = goal.length; i < gl; i++) {
            index = landUseTypes.indexOf(goal[i]);
            holder = landUseTypes.splice(index, 1)[0];
            landUseTypes.splice(i, 0, holder);
        }

        var cicoTypes = []; //Get unique list of cico types
        var cicoTypesObject = {}; //Get unique list of cico types
        var maxCounts = []; //keep the cico counts here.

        //for (var i=0;i<sector.length;i++){
        //    if (!cicoTypesObject[sector[i].type]) {
        //        cicoTypes.push(sector[i].type);
        //        cicoTypesObject[sector[i].type] = { name: sector[i].type, counts: [] };
        //    }
        //}

        sector.forEach(function (item) {
            if (!cicoTypesObject[item.type]) {
                cicoTypes.push(item.type);
                cicoTypesObject[item.type] = {name: item.type, counts: []};
            }
        });

        //Get list of counts by cico type
        cicoTypes.forEach(function (item, idx) {
            sector.forEach(function (citem, ixdx) {
                if (citem.type == item) {
                    //If it's a match, add the count to the array
                    cicoTypesObject[item].counts.push({
                        name: citem.land_use,
                        value: citem.count,
                        landUse: citem.land_use,
                        FeatureType: citem.type
                    });
                    maxCounts.push(+citem.count);
                }
            });
        });

        x0.domain(cicoTypes.map(function (d) {
            return d;
        })); //Get x axis values (CICO Type)
        x1.domain(landUseTypes).rangeRoundBands([0, x0.rangeBand()]);
        y.domain([0, d3.max(maxCounts)]);

        //XAxis Labels
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            //.selectAll(".tick text")
            //.call(wrap, x0.rangeBand());
            .attr("transform", function (d) {
                return "rotate(-45)"
            });

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("# Access Points");

        var state = svg.selectAll(".state")
            .data(cicoTypes)
            .enter().append("g")
            .attr("class", "state")
            .attr("transform", function (d) {
                return "translate(" + (x0(d) + 10) + ",0)";
            });

        var rect = state.selectAll("rect")
            .data(function (d) {
                return cicoTypesObject[d].counts;
            })
            .enter().append("rect")
            .attr("width", x1.rangeBand())
            .attr("x", function (d) {
                return x1(d.landUse);
            })
            .attr("y", function (d) {
                return y(d.value);
            })
            .attr("height", function (d) {
                return height - y(d.value);
            })
            .style("fill", function (d) {
                return color(d.landUse);
            })
            .on("mouseover", function (d) {
                $scope.toolTipDiv.transition()
                    .duration(200)
                    .style("opacity", .9);
                $scope.toolTipDiv.html("<span class='ttLandUse'>" + d.landUse + ":</span> <br/><span class='d3Tooltip'>" + $filter('number')(d.value, 0) + "</span><br> " + d.FeatureType)
                    .style("left", (d3.event.layerX + 10) + "px")
                    .style("top", (d3.event.layerY - 60) + "px");
            })
            .on("mousemove", function (d) {
                $scope.toolTipDiv.style("left", (d3.event.layerX + 10) + "px")
                    .style("top", (d3.event.layerY - 60) + "px");
            })
            .on("mouseout", function (d) {
                $scope.toolTipDiv.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        var legend = svg.selectAll(".legend")
            .data(landUseTypes.slice())
            .enter().append("g")
            .attr("class", "legend")
            .attr("transform", function (d, i) {
                return "translate(-20," + i * 20 + ")";
            });

        legend.append("rect")
            .attr("x", width - 18)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", color);

        legend.append("text")
            .attr("x", width - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function (d) {
                return d;
            });
    };

    $scope.showRfa = function (details, value) {
        details.showRfa = true;
        value.showRfa = true;
    };

    $scope.hideRfa = function (details, value) {
        details.showRfa = false;
        value.showRfa = false;
    };

    $scope.showIndicators = function (details, value) {
        details.showIndicators = true;
        value.showIndicators = true;
    };

    $scope.hideIndicators = function (details, value) {
        details.showIndicators = false;
        value.showIndicators = false;
    };

    $scope.showRisks = function (details, value) {
        details.showRisks = true;
        value.showRisks = true;
    };

    $scope.hideRisks = function (details, value) {
        details.showRisks = false;
        value.showRisks = false;
    };

    $scope.showStatuses = function (details, value) {
        details.showStatuses = true;
        value.showStatuses = true;
    };

    $scope.hideStatuses = function (details, value) {
        details.showStatuses = false;
        value.showStatuses = false;
    };

    $scope.label = function (key) {

        var desc = key;

        // disaster
        if ($stateParams.theme === 'disaster') {

            if ($scope.sfFieldHash.Disaster__c[key]) {
                desc = $scope.sfFieldHash.Disaster__c[key].label || key;
            }

            if ($scope.sfFieldHash.Location__c[key]) {
                desc = $scope.sfFieldHash.Location__c[key].label || key;
            }

            if ($scope.sfFieldHash.Disaster_Location__c[key]) {
                desc = $scope.sfFieldHash.Disaster_Location__c[key].label || key;
            }

            if ($scope.sfFieldHash.Request_For_Assistance__c[key]) {
                desc = $scope.sfFieldHash.Request_For_Assistance__c[key].label || key;
            }

            return desc;
        }

        // contextual layer
        if ($scope.contextualLayer) {
            return key;
        }


        if ($stateParams.theme === 'projectRisk') {
            // project
            if ($scope.sfFieldHash.Project__c[key]) {
                desc = $scope.sfFieldHash.Project__c[key].label || key;
            }

            if ($scope.sfFieldHash.Location__c[key]) {
                desc = $scope.sfFieldHash.Location__c[key].label || key;
            }

            if ($scope.sfFieldHash.Risk__c[key]) {
                desc = $scope.sfFieldHash.Risk__c[key].label || key;
            }

            return desc;
        }


        if ($stateParams.theme === 'projectHealth') {
            // project
            if ($scope.sfFieldHash.Project__c[key]) {
                desc = $scope.sfFieldHash.Project__c[key].label || key;
            }

            if ($scope.sfFieldHash.Location__c[key]) {
                desc = $scope.sfFieldHash.Location__c[key].label || key;
            }

            if ($scope.sfFieldHash.Project_Evaluation__c[key]) {
                desc = $scope.sfFieldHash.Project_Evaluation__c[key].label || key;
            }

            return desc;
        }

        // project
        if ($scope.sfFieldHash.Project__c[key]) {
            desc = $scope.sfFieldHash.Project__c[key].label || key;
        }

        if ($scope.sfFieldHash.Location__c[key]) {
            desc = $scope.sfFieldHash.Location__c[key].label || key;
        }

        if ($scope.sfFieldHash.Indicator__c[key]) {
            desc = $scope.sfFieldHash.Indicator__c[key].label || key;
        }

        if ($scope.sfFieldHash.Indicator_Value__c[key]) {
            desc = $scope.sfFieldHash.Indicator_Value__c[key].label || key;
        }

        if ($scope.sfFieldHash.Logframe_Element__c[key]) {
            desc = $scope.sfFieldHash.Logframe_Element__c[key].label || key;
        }

        return desc;

    };

    $scope.tooltip = function (key) {
//    (sfFieldHash[key].inlineHelpText || '') + ' FieldName: ' + key

        var desc = '';

        // disaster
        if ($stateParams.theme === 'disaster') {

            if ($scope.sfFieldHash.Disaster__c[key]) {
                desc = $scope.sfFieldHash.Disaster__c[key].inlineHelpText || '';
            }

            if ($scope.sfFieldHash.Location__c[key]) {
                desc = $scope.sfFieldHash.Location__c[key].inlineHelpText || '';
            }

            if ($scope.sfFieldHash.Disaster_Location__c[key]) {
                desc = $scope.sfFieldHash.Disaster_Location__c[key].inlineHelpText || '';
            }

            if ($scope.sfFieldHash.Request_For_Assistance__c[key]) {
                desc = $scope.sfFieldHash.Request_For_Assistance__c[key].inlineHelpText || '';
            }

            return desc + ' FieldName: ' + key;
        }

        // contextual layer
        if ($scope.contextualLayer) {
            return 'FieldName: ' + key;
        }

        if ($stateParams.theme === 'projectRisk') {
            if ($scope.sfFieldHash.Project__c[key]) {
                desc = $scope.sfFieldHash.Project__c[key].inlineHelpText || '';
            }

            if ($scope.sfFieldHash.Location__c[key]) {
                desc = $scope.sfFieldHash.Location__c[key].inlineHelpText || '';
            }

            if ($scope.sfFieldHash.Risk__c[key]) {
                desc = $scope.sfFieldHash.Risk__c[key].inlineHelpText || '';
            }

            return desc + ' FieldName: ' + key;
        }

        if ($stateParams.theme === 'projectHealth') {
            if ($scope.sfFieldHash.Project__c[key]) {
                desc = $scope.sfFieldHash.Project__c[key].inlineHelpText || '';
            }

            if ($scope.sfFieldHash.Location__c[key]) {
                desc = $scope.sfFieldHash.Location__c[key].inlineHelpText || '';
            }

            if ($scope.sfFieldHash.Project_Evaluation__c[key]) {
                desc = $scope.sfFieldHash.Project_Evaluation__c[key].inlineHelpText || '';
            }
            return desc + ' FieldName: ' + key;
        }

        // project
        if ($scope.sfFieldHash.Project__c[key]) {
            desc = $scope.sfFieldHash.Project__c[key].inlineHelpText || '';
        }

        if ($scope.sfFieldHash.Location__c[key]) {
            desc = $scope.sfFieldHash.Location__c[key].inlineHelpText || '';
        }

        if ($scope.sfFieldHash.Indicator__c[key]) {
            desc = $scope.sfFieldHash.Indicator__c[key].inlineHelpText || '';
        }

        if ($scope.sfFieldHash.Indicator_Value__c[key]) {
            desc = $scope.sfFieldHash.Indicator_Value__c[key].inlineHelpText || '';
        }

        if ($scope.sfFieldHash.Logframe_Element__c[key]) {
            desc = $scope.sfFieldHash.Logframe_Element__c[key].inlineHelpText || '';
        }

        return desc + ' FieldName: ' + key;

    };

    //Init selectedFeatureTitle property

    // CICO config has filter data (name,type,count,color,zindex) for every sector
    $scope.CICOcfg = CICOFilterFactory.CICO_Config;


    // Set sector total on page load
    $scope.$watch(function () {
        return CICOFilterFactory.CICOsTotal;
    }, function () {
        $scope.sectortotal = CICOFilterFactory.CICOsTotal;
    });

    // Watch for change in right details navTab
    $scope.$watch('navTab', function () {
        if ($scope.selection == 'India') {
            if ($scope.navTab !== 'countryoverview') {
                $scope.title = $scope.selectedSector;
            } else {
                $scope.title = "Overview - Bihar & Uttar Pradesh";
            }
            // set default bar chart to CICOs
        //    if ($scope.selectedSector == 'CICOS') {
        //        $scope.APChart(CICOFilterFactory.CICOs_LandUse_Counts);
        //    }
        //} else {
        //    //$scope.title = "Overview - Kenya";
        //}
        }});

    // Watch for change in selected Sector
    $scope.$watch(function () {
        return SectorFactory.SelectedSector;
    }, function() {
        $scope.selectedSector = SectorFactory.SelectedSector;
        $scope.getSelectedSector();
    });

    $scope.toggleSectorShow = function(){
        $scope.ShowAllSectors = !$scope.ShowAllSectors;
    };

    $scope.toggleState = function (stateName) {
        var state = $state.current.name !== stateName ? stateName : 'main';
        $state.go(state, $stateParams);
    };

    $scope.itemsList = true;
    $scope.details = false;


    //Initialize the dummy project/disaster click results
    $scope.groupings = {};

    $scope.alertUserToClick = true;

    $scope.$on('details', function (event, featureLayer) {
        $scope.alertUserToClick = false;
        var properties = featureLayer.feature.properties;
        $scope.feature = featureLayer.feature;
        $scope.title = $scope.featureTitle = properties.name || properties.title || 'Selected Feature';
        if (properties.salesforce) { // salesforce theme badge selected
            $scope.contextualLayer = false;
            $scope.groupings = properties.salesforce;
            $scope.numThemeItems = $.map(properties.salesforce, function (n) {
                return n
            }).length;
            $scope.showList();
            $scope.openParam('details-panel');
            $scope.createDonuts();
        } else { // standard geojson, show properties as details

            $scope.contextualLayer = (properties.sf_id ? false : true);
            $scope.showDetails(properties);
            $scope.openParam('details-panel');
        }
        $scope.resizeDetailsPanel();
    });

    $scope.$on('route-update', function () {
        var sf_id = $stateParams.sf_id;
        $scope.theme = $stateParams.theme;
        if ($scope.alertUserToClick === false) return;
        if (sf_id && typeof sf_id === 'string') {
            var url = config.chubbsPath('services/custom/custom_operation?name=doecostextsearch&format=json&text=') + sf_id;
            $http.get(url).success(function (result, status) {
                if (result[0]) {
                    $rootScope.$broadcast('details', {feature: {properties: result[0]}});
                }
            });
        }
    });

    $scope.createDonuts = function () {
        // uses jquery to put donut in a div.
        if ($scope.groupings && $scope.groupings.Projects) {
            Donuts.createLabelDonut($scope.sfFieldHash.Project__c.sector__c.picklistValues, $scope.groupings.Projects, '#details-donut');
        }
    };

    $scope.moreLess = 'More';

    $scope.toggleMoreLess = function () {
        if ($scope.moreLess === 'More') {
            $scope.moreLess = 'Less';
        } else {
            $scope.moreLess = 'More';
        }
        //Resize;
        $scope.resizeDetailsPanel();
    };

    $scope.showDetails = function (item, themeItems, idx) {
        if (item.sf_id) {
            $rootScope.setParamWithVal('sf_id', item.sf_id);
        }
        if (item.name || item.title) {
            $scope.title = item.name || item.title;
        }
        if (typeof idx === 'number') $scope.activeThemeItemIdx = idx;
        if (themeItems) $scope.activeThemeItemsList = themeItems;
        $scope.itemsList = false;
        $scope.details = removeUnwantedItems(formatDetails(item, $stateParams.theme), $stateParams.theme);
        if (!$scope.contextualLayer) {
            $scope.lessDetails = removeUnwantedItems(lessDetails(formatDetails(item, $stateParams.theme)), $stateParams.theme);
        }

        //Filter/Format RFAs and Indicators
        if ($scope.details.requestsForAssistance && typeof $scope.details.requestsForAssistance === 'array') {
            //Filter/Format
            $scope.details.requestsForAssistance = $scope.details.requestsForAssistance.map(function (rfa) {
                return removeUnwantedItems(formatDetails(rfa, "RFA"), "RFA");
            });
        }

        if ($scope.details.indicators && typeof $scope.details.indicators === 'array') {
            //Filter/Format
            $scope.details.indicators = $scope.details.indicators.map(function (indicator) {
                return removeUnwantedItems(formatDetails(indicator, "indicator"), "indicator");
            });
        }

        if ($scope.details.risks && typeof $scope.details.risks === 'array') {
            //Filter/Format
//          $scope.details.risks = $scope.details.risks.map(function (risk) {
//              return removeUnwantedItems(formatDetails(risk, "risk"), "risk");
//          });
        }

        if ($scope.details.statuses && typeof $scope.details.statuses === 'array') {
            //Filter/Format
//          $scope.details.statuses = $scope.details.statuses.map(function (status) {
//              return removeUnwantedItems(formatDetails(status, "status"), "status");
//          });
        }

        $scope.resizeDetailsPanel();
    };

    function removeUnwantedItems(details, type) {
        var passthroughDetails = {};
        var blacklistDictionary = config.unwantedProjectDetails;

        if (type === 'disaster') {
            blacklistDictionary = config.unwantedDisasterDetails;
        }
        else if (type === 'project') {
            blacklistDictionary = config.unwantedProjectDetails;
        }
        else if (type === 'RFA') {
            blacklistDictionary = config.unwantedRFADetails;
        }
        else if (type === 'indicator') {
            blacklistDictionary = config.unwantedIndicatorDetails;
        }

        for (var key in details) {
            var blacklisted = blacklistDictionary[key];
            if (blacklisted && (typeof blacklisted === 'function')) {
                //evaluate the function to decide if the key should be shown.
                blacklisted = blacklisted(details[key]);
            }
            if (!blacklisted) {
                //Allow the item thru if it is not blacklisted
                passthroughDetails[key] = details[key];
            }
        }

        return passthroughDetails;
    }

    function formatDetails(details, type) {
        var formattedDetails = {};
        var formattingDictionary = config.projectDetailsFormatting;

        if (type === 'disaster') {
            formattingDictionary = config.disasterDetailsFormatting;
        }
        else if (type === 'project') {
            formattingDictionary = config.projectDetailsFormatting;
        }
        else if (type === 'RFA') {
            formattingDictionary = config.RFADetailsFormatting;
        }
        else if (type === 'indicator') {
            formattingDictionary = config.indicatorDetailsFormatting;
        }

        for (var key in details) {
            var formatter = formattingDictionary[key];
            if (formatter) {
                switch (formatter.split(",")[0]) {
                    case "currency":
                        formattedDetails[key] = $filter('currency')(details[key], (formatter.split(",")[1] || "USD"));
                        break;

                    case "number":
                        formattedDetails[key] = $filter('number')(details[key]);
                        break;

                    case "date":
                        formattedDetails[key] = $filter('date')(details[key], "yyyy-dd-MM");
                        break;
                    case "rfaName":
                        formattedDetails[key] = $scope.details.location__r_admin_0__c + ' ' + $scope.details.disaster_type__c + ' - ' + details.appeal_source__c;
                        break;

                    default:
                        formattedDetails[key] = details[key];
                }
            }
            else {
                //No formatting
                formattedDetails[key] = details[key];
            }
        }

        return formattedDetails;
    }

    function lessDetails(details) {
        var lessDetails = [];
        if ($stateParams.theme === 'disaster') {
            for (var i = 0, len = config.disasterDetailsShortList.length; i < len; i++) {
                var key = config.disasterDetailsShortList[i];
                lessDetails.push({
                    key: key,
                    value: details[key]
                });
            }
        } else {
            var projectDetailsShortList = config.projectDetailsShortList;
            for (var i = 0, len = projectDetailsShortList.length; i < len; i++) {
                var key = projectDetailsShortList[i];
                lessDetails.push({
                    key: key,
                    value: details[key]
                });
            }
        }
        return lessDetails;
    }

    $scope.nextThemeItem = function () {
        var len = $scope.activeThemeItemsList.length;
        if (++$scope.activeThemeItemIdx >= len) $scope.activeThemeItemIdx = 0;
        var item = $scope.activeThemeItemsList[$scope.activeThemeItemIdx];
        $scope.showDetails(item);
    };

    $scope.prevThemeItem = function () {
        var len = $scope.activeThemeItemsList.length;
        if (--$scope.activeThemeItemIdx < 0) $scope.activeThemeItemIdx = len - 1;
        var item = $scope.activeThemeItemsList[$scope.activeThemeItemIdx];
        $scope.showDetails(item);
    };

    $scope.showList = function () {
        $scope.title = $scope.featureTitle;
        $scope.itemsList = true;
        $scope.details = false;
    };

    $scope.resizeDetailsPanel = function () {
        var height = $('#MapCtrl').height() - 200; //Magic Number

        //height is the value that the entire details panel should never exceed.
        //Within the panel itself, the inner container needs to adjust its height based on the contents of the panel.
        //Sometimes, there are tabs, and sometimes the project/disaster description can be quite long.
        //In these cases, then innerContainer should shrink to fit within the max-height of the outer panel (height)

        //Find the top of the innerContainer, and subtract from the max height of the panel.  That's what the max-height of the inner panel should be
        var innerTop = $('#DetailsPanel .InnerContainer').position().top;
        var bottomHeight = $(".details-bottom-buttons.pull-right").height();

        $('#DetailsPanel .InnerContainer ').css("max-height", height - innerTop - bottomHeight);
    };

    //Connect the layout onresize end event
    window.layout.panes.center.bind("layoutpaneonresize_end", $scope.resizeDetailsPanel);

    //For Init.
    $scope.resizeDetailsPanel();

    $scope.save = function (data, name) {
        var json = JSON.stringify(data, null, 2);
        var blob = new Blob([json], {type: 'text/plain'});
        var downloadLink = document.createElement("a");
        var url = (window.webkitURL != null ? window.webkitURL : window.URL);
        downloadLink.href = url.createObjectURL(blob);
        downloadLink.download = name || 'feature.geojson';
        downloadLink.click();
    };

});
