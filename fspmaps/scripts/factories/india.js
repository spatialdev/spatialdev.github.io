
/**
* Created by Daniel Baah <dbaah@spatialdev.com>
*       on 12/22/14.
*/

module.exports = angular.module('SpatialViewer').factory('IndiaFactory', function ($http) {

    var service = {};

    service.ConfigData = {
        COMMERCIAL_BANKS: [
            "Allahabad Bank",
            "Allahabad UP Gramin Bank",
            "Ammco Bank",
            "Andhra Bank",
            "Aryan Cooperative Bank",
            "Aryavart Gramin Bank",
            "Axis Bank",
            "Bank of Baroda",
            "Bank of India",
            "Bank of Maharashtra",
            "Baroda Uttar Pradesh Gramin Bank",
            "Bhartiya Khas and Bachat Ltd",
            "Bhumi Vikas Bank",
            "Bihar Gramin Bank",
            "Bombay Mercantile Cooperative Bank",
            "Brahmavart Bank",
            "Canara Bank",
            "Catholic Syrian Bank Ltd.",
            "Central Bank of India",
            "Central Cooperative Bank",
            "Citibank",
            "Citizen Cooperative Bank",
            "City Union Bank Ltd.",
            "Corporation Bank",
            "Dena Bank",
            "Deutsche Bank AG",
            "Development Bank of Singapore",
            "Development Cooperative Bank",
            "Gulshan Mercantile Urban cooperative Bank Ltd.",
            "HCBL Bank",
            "HDFC",
            "ICICI Bank",
            "IDBI Bank Limited",
            "Indian Bank",
            "Indian Mercantile Cooperative Bank",
            "Indian Overseas Bank",
            "IndusInd Bank Limited",
            "ING Vysya Bank",
            "Karnataka Bank",
            "Karur Vysya Bank Limited.",
            "Kashi Gomti Sanyukt Gramin Bank",
            "Kotak Mahindra Bank Limited",
            "Kshetriya Gramin Bank",
            "Lakshmi Vilas Bank",
            "Madhya Bihar Gramin Bank",
            "Mahamedha Bank",
            "Nobel Cooperative Bank",
            "Noida Commercial Cooperative Bank",
            "ONS Bank",
            "Oriental Bank of Commerce",
            "PACS Cooperative Bank",
            "Prathama Bank",
            "Primary Cooperative Bank",
            "Punjab & Sind Bank",
            "Punjab National Bank",
            "Purvanchal Bank",
            "RMBIL Quasi Bank",
            "Rose Valley Bank",
            "Sarva UP Gramin Bank",
            "Shivalik Bank",
            "Shreyas Gramin Bank",
            "SIDBI",
            "Standard Chartered Bank",
            "State Bank of Bikaner and Jaipur",
            "State Bank of Hyderabad",
            "State Bank of India",
            "State Bank of Mysore",
            "State Bank of Patiala",
            "State Bank of Travancore",
            "Syndicate Bank",
            "Tamilnad Mercantile Bank Ltd.",
            "The Dhanalakshmi Bank Limited.",
            "The Federal Bank Ltd.",
            "The Jammu & Kashmir Bank Ltd.",
            "The Nainital Bank Ltd.",
            "The New Urban Cooperative Bank",
            "The Ratnakar Bank Ltd.",
            "The Royal Bank of Scotland N.V.",
            "The South Indian Bank Ltd.",
            "The VSV Cooperative Bank",
            "Tulsi Gramin Bank",
            "UCC Bank",
            "UCO Bank",
            "Union Bank of India",
            "United Bank of India",
            "United India Cooperative Bank",
            "United Mercantile Co-op Bank Ltd.",
            "UP Agro Cooperation Bank",
            "Urban Cooperative Bank",
            "Uttar Bihar Gramin Bank",
            "Uttar Pradesh Cooperative Bank",
            "Uttar Pradesh Gramin Bank",
            "Uttar Pradesh Sahkari Gram Vikas Bank",
            "Vijaya Bank",
            "Yes Bank",
            "Zila Sahkari Bank / District Cooperative Bank"
        ],
        BANK_AGENTS: [
            "A Little World / Zero Mass Foundation",
            "Airtel",
            "Cashpor",
            "CDOT",
            "Coromandel",
            "Eko",
            "Fino",
            "GTIDS",
            "HCL Infosystems",
            "Idea",
            "Indepay networks",
            "Integra",
            "Oxigen",
            "Sanjeevani",
            "SAVE",
            "SIGN",
            "Srei Sahaj",
            "Sub-K",
            "Vision India",
            "Vodafone"
        ],
        MOBILE_PROVIDERS: [

        ],
        MONEY_TRANSFER_SERVICE: [

        ],
        METADATA: [
            "<strong>Financial service locations:</strong> Brand Fusion, August 2014.&nbsp;<a href='http://www.brandfusion-africa.com/'  target='_blank;'>Brand Fusion website</a>",
            "<strong>Mobile Coverage:</strong> Collins Bartholomew and GSMA, (HarperCollins Publisher, Dec 2012)",
            "<strong>Population:</strong> Tatem AJ. Afripop Data 2012. Gainesville, United States: Emerging Pathogens Institute, University of Florida.&nbsp;<a href='http://www.afripop.org/' target='_blank'>Afripop Website</a>",
            "<strong>Urban Areas:</strong> Global Rural-Urban Mapping Project (GRUMP), Center for International Earth Science Information Network (CIESIN), Centro Internacional de Agricultura Tropical (CIAT), 2005.  Palisades, NY: CIESIN, Columbia University.&nbsp;<a href='http://sedac.ciesin.columbia.edu/data/collection/grump-v1' target='_blank'>GRUMP Website</a>"
        ],
        HEXBINDESCRIPTION: [
            "<strong>Methodology</strong><p>Approximately 10Km Hexagonal Gridcells (Hexbins) were created for {x}.  For each Hexbin area, we summed up the total number of access points, and divided that number by the total population of the Hexbin (based on the Afripop dataset). To make the values per capita, each value was multiplied by 10,000.  This results in the number of access points per 10,000 people.  We then grouped the resulting ratios into 3 classes, described below.</p><strong>Classification</strong><p><ul><li><div class='left HexcolorBarSwatch green'></div><div class='classificationText'>Hi: 8 to 250</div></li><li><div class='left HexcolorBarSwatch yellow'></div><div class='classificationText'>Med: 2.5 to 8</div></li><li><div class='left HexcolorBarSwatch red'></div><div class='classificationText'>Lo: 0.2 to 2.5</div></li></p>"
        ],
        CICO_DATE: "Financial Service Locations collected Summer 2014"
    };
    service.India = {
        cicoURL: 'http://spatialserver.spatialdev.com/services/tables/vw_india_cicos/query',
        libraryURL: 'http://spatialserver.spatialdev.com/services/tables/vw_india_libraries/query',
        healthURL: 'http://spatialserver.spatialdev.com/services/tables/vw_india_health/query',
        agricultureURL: 'http://spatialserver.spatialdev.com/services/tables/vw_india_ag/query',

        CicoBlastURL: "scripts/datablasts/Kenya_Cicos.geojson",
        CountsBlastURL: "scripts/datablasts/India_Cico_Count.json",
        dropPointURL: 'http://spatialserver.spatialdev.com/services/tables/{table}/rasterOps/zonalstatistics',
        accessStatsURL: 'http://spatialserver.spatialdev.com/services/geoprocessing/geoprocessing_operation',
        population_raster_table: "india_population_raster",
        LibraryBlastURL: "scripts/datablasts/India_Library_Count.json",
        HealthBlastURL: "scripts/datablasts/India_Health_Count.json",
        AggBlastURL: "scripts/datablasts/India_Agriculture_Count.json",

        BaseLayers: null,
        hasPovertyData: false,
        CICOFields: ["FeatureType", "ShrAgt", "Prvd", "Photos"],
        FeatureLayers: {},
        AnalysisLayers: [],
        "Commercial Bank": {
            "Filters": [{
                "name": "",
                "data": service.ConfigData.COMMERCIAL_BANKS
            }]
        },
        'Bank Agent': {
            "Filters": [{
                "name": "",
                "data": service.ConfigData.BANK_AGENTS
            }]
        },
        'Mobile Money Agent': {
            "Filters": [{
                "name": "",
                "data": service.ConfigData.MOBILE_PROVIDERS
            }]
        },
        'Money Transfer Service': {
            "Filters": [{
                "name": "",
                "data": service.ConfigData.MONEY_TRANSFER_SERVICE
            }]
        },
        QuickStats: {
            totalPopulation: 299931126,
            urbanPct: .087,
            ruralPct: .913,
            within5Km: .9201,
            ruralpop: 273830901,
            urbanpop: 26100225
        }, MapCenter: {
            Latitude: 26,
            Longitude: 85
        },
        MapZoom: 6,
        ISO3: 'ind',
        BaseLayerList: {
            'Urban Areas': {
                index: null,
                transparency: 0.5,
                visible: false,
                url: "http://tiles.fspmaps.com/v2/kenya_urbanareas/{z}/{x}/{y}.png"
            },
            'Population': {
                index: null,
                transparency: 0.5,
                visible: true,
                url: "http://tiles.fspmaps.com/v2/kenyapop/{z}/{x}/{y}.png"
            },
            'Cell Coverage': {
                index: null,
                transparency: 0.5,
                visible: false,
                url: "http://tiles.fspmaps.com/v2/kenya_cellcoverage/{z}/{x}/{y}.png"
            },
            'Counties': {
                index: null,
                transparency: 0.5,
                visible: true,
                url: "http://tiles.fspmaps.com/v2/kenya_counties2014_37d591/{z}/{x}/{y}.png"
            },
            'Distance to CICO': {
                index: null,
                transparency: 1,
                visible: false,
                url: "http://tiles.fspmaps.com/v2/KEN_ed/{z}/{x}/{y}.png"
            },
            'Access per capita': {
                index: null,
                transparency: 1,
                visible: false,
                url: "http://tiles.fspmaps.com/v2/kenya_hexbins/{z}/{x}/{y}.png"
            }
        }
    };
    service.India.QuickStats["totpop5km"] = (service.India.QuickStats.within5Km * service.India.QuickStats.totalPopulation);

    //$http.get('data/countrydata/India.json').
    //        success(function(data) {
    //            service.India = data;
    //        }).
    //        error(function(data) {
    //            alert(data);
    //        });

    return service;

        });
