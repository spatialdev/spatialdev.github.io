/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 10/17/14.
 */
debug = {};

var Map = require('./map');
var Charts = require('./charts');
var Data = require('./data');
var Print = require('./print');

function getRoute() {
  var hash = window.location.hash;
  var params = hash.slice(1).split('&');
  var paramObj = {};
  for (var i = 0, len = params.length; i < len; i++) {
    var param = params[i];
    var pArr = param.split('=');
    var key = pArr[0];
    var val = pArr[1];
    paramObj[key] = val;
  }
  return paramObj;
}

var route = getRoute();
var dataFetched = false;
var id = route.id || 2442;
var origin = route.origin || 'http://fspmaps.com/';

function setActiveSectorFromRoute(route) {
  if (!route.sector) return;
  $('.nav-tabs a[href="#' + route.sector + '"]').tab('show');
}
setActiveSectorFromRoute(route);

var tabsInitialized = {};

function setupTab(sector) {
  if (!dataFetched) {
    return;
  }
  if (tabsInitialized[sector]) {
    return;
  }
  setupSector(sector);
  tabsInitialized[sector] = true;
}

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  var sector = e.target.hash.slice(1);
  setupTab(sector);
});

var vectorgator = {
  fsp: null,
  library: null,
  health: null,
  agriculture: null
};

Data.fetch(id, function(data) {
  debug.vectorgator = vectorgator = data;
  dataFetched = true;
  setupName();
  var activeSector = route.sector || 'fsp';
  setupTab(activeSector);
});

function setupName() {
  var adm1 = vectorgator.fsp.adm1_name;
  var adm2 = vectorgator.fsp.adm2_name;

  // district
  if (adm2) {
    var title = 'India District Summary';
    $('#page-header').html(title);
    $('.region-name-header').html(adm2 + ', ' + adm1);
    document.title = title;
  }
  // state
  else {
    var title = 'India State Summary';
    $('#page-header').html(title);
    $('.region-name-header').html(adm1);
    document.title = title;
  }
}

function setupSector(sector) {
  if (sector === 'fsp') {
    setupFSP();
  }
  if (sector === 'library') {
    setupLibrary();
  }
  if (sector === 'health') {
    setupHealth();
  }
  if (sector === 'agriculture') {
    setupAgriculture();
  }
}

function setupFSP() {
  Map.init('fsp', 'cicos_2014', vectorgator.fsp.bbox, id);
  var sectorName = 'fsp';
  var sector = vectorgator[sectorName];

  // Total Count
  $('#' + sectorName + '-total-count').html(numberWithCommas(sector.total_count));

  // Status
  var status = sector.status;
  var active = status['Active'] || 0;
  var inactive = status['Not Active'] || 0;
  var percent = (active / (active + inactive)) * 100;
  if (isNaN(percent)) {
    percent = 0;
  }
  var $statusProgress = $('#' + sectorName + '-status-progress');
  $statusProgress.css('width', percent+'%').attr('aria-valuenow', percent);
  $statusProgress.html(percent.toFixed(2) + '% Active');
  $('#' + sectorName + '-num-active').html(numberWithCommas(active));
  $('#' + sectorName + '-num-inactive').html(numberWithCommas(inactive));

  // Land Use
  var land_use = sector.land_use;
  var percent = (land_use.Urban / (land_use.Urban + land_use.Rural)) * 100;
  if (isNaN(percent)) {
    percent = 0;
  }
  $('#' + sectorName + '-urban-rural-progress').css('width', percent+'%').attr('aria-valuenow', percent);
  $('#' + sectorName + '-urban-rural-progress').html(percent.toFixed(2) + '% Urban');
  $('#' + sectorName + '-num-urban').html(numberWithCommas(land_use.Urban));
  $('#' + sectorName + '-num-rural').html(numberWithCommas(land_use.Rural));

  Charts.createFSP(sector);
}

function setupLibrary() {
  Map.init('library', 'library_2014', vectorgator.library.bbox, id);
  var sectorName = 'library';
  var sector = vectorgator[sectorName];

  // Total Count
  $('#' + sectorName + '-total-count').html(numberWithCommas(sector.total_count));

  // Internet Access
  var status = sector.internet;
  var active = status['Yes'];
  var inactive = status['No'];
  var percent = (active / (active + inactive)) * 100;
  if (isNaN(percent)) {
    percent = 0;
  }
  var $internetProgress = $('#' + sectorName + '-internet-progress');
  $internetProgress.css('width', percent+'%').attr('aria-valuenow', percent);
  $internetProgress.html(percent.toFixed(2) + '% With Access');
  $('#' + sectorName + '-num-access').html(numberWithCommas(active));
  $('#' + sectorName + '-num-no-access').html(numberWithCommas(inactive));

  // Land Use
  var land_use = sector.land_use;
  var percent = (land_use.Urban / (land_use.Urban + land_use.Rural)) * 100;
  if (isNaN(percent)) {
    percent = 0;
  }
  $('#' + sectorName + '-urban-rural-progress').css('width', percent+'%').attr('aria-valuenow', percent);
  $('#' + sectorName + '-urban-rural-progress').html(percent.toFixed(2) + '% Urban');
  $('#' + sectorName + '-num-urban').html(numberWithCommas(land_use.Urban));
  $('#' + sectorName + '-num-rural').html(numberWithCommas(land_use.Rural));

  // Computers
  var status = sector.computers;
  var yes = status['Yes'] || 0;
  var no = status['No'] || 0;
  var percent = (yes / (yes + no)) * 100;
  if (isNaN(percent)) {
    percent = 0;
  }
  var $computerProgress = $('#' + sectorName + '-computer-progress');
  $computerProgress.css('width', percent+'%').attr('aria-valuenow', percent);
  $computerProgress.html(percent.toFixed(2) + '% With Computers');
  $('#' + sectorName + '-num-computers').html(numberWithCommas(yes));
  $('#' + sectorName + '-num-no-computers').html(numberWithCommas(no));

  // Computer Fee
  var status = sector.computer_fee;
  var yes = status['Yes'] || 0;
  var no = status['No'] || 0;
  var percent = (yes / (yes + no)) * 100;
  if (isNaN(percent)) {
    percent = 0;
  }
  var $feeProgress = $('#' + sectorName + '-fee-progress');
  $feeProgress.css('width', percent+'%').attr('aria-valuenow', percent);
  $feeProgress.html(percent.toFixed(2) + '% Charging Access Fee');
  $('#' + sectorName + '-num-fee').html(numberWithCommas(yes));
  $('#' + sectorName + '-num-no-fee').html(numberWithCommas(no));

  // Fiction
  var status = sector.fiction;
  var yes = status['Yes'] || 0;
  var no = status['No'] || 0;
  var percent = (yes / (yes + no)) * 100;
  if (isNaN(percent)) {
    percent = 0;
  }
  var $fictionProgress = $('#' + sectorName + '-fiction-progress');
  $fictionProgress.css('width', percent+'%').attr('aria-valuenow', percent);
  $fictionProgress.html(percent.toFixed(2) + '% With Fiction');
  $('#' + sectorName + '-num-fiction').html(numberWithCommas(yes));
  $('#' + sectorName + '-num-no-fiction').html(numberWithCommas(no));

  // Non Fiction
  var status = sector.non_fiction;
  var yes = status['Yes'] || 0;
  var no = status['No'] || 0;
  var percent = (yes / (yes + no)) * 100;
  if (isNaN(percent)) {
    percent = 0;
  }
  var $nonFictionProgress = $('#' + sectorName + '-non-fiction-progress');
  $nonFictionProgress.css('width', percent+'%').attr('aria-valuenow', percent);
  $nonFictionProgress.html(percent.toFixed(2) + '% With Non Fiction');
  $('#' + sectorName + '-num-non-fiction').html(numberWithCommas(yes));
  $('#' + sectorName + '-num-no-non-fiction').html(numberWithCommas(no));

  // Newspapers
  var status = sector.newspapers;
  var yes = status['Yes'] || 0;
  var no = status['No'] || 0;
  var percent = (yes / (yes + no)) * 100;
  if (isNaN(percent)) {
    percent = 0;
  }
  var $newspapersProgress = $('#' + sectorName + '-newspapers-progress');
  $newspapersProgress.css('width', percent+'%').attr('aria-valuenow', percent);
  $newspapersProgress.html(percent.toFixed(2) + '% With Newspapers');
  $('#' + sectorName + '-num-newspapers').html(numberWithCommas(yes));
  $('#' + sectorName + '-num-no-newspapers').html(numberWithCommas(no));

  // Encyclopedias
  var status = sector.encyclopedias;
  var yes = status['Yes'] || 0;
  var no = status['No'] || 0;
  var percent = (yes / (yes + no)) * 100;
  if (isNaN(percent)) {
    percent = 0;
  }
  var $encyclopediasProgress = $('#' + sectorName + '-encyclopedias-progress');
  $encyclopediasProgress.css('width', percent+'%').attr('aria-valuenow', percent);
  $encyclopediasProgress.html(percent.toFixed(2) + '% With Encyclopedias');
  $('#' + sectorName + '-num-encyclopedias').html(numberWithCommas(yes));
  $('#' + sectorName + '-num-no-encyclopedias').html(numberWithCommas(no));

  Charts.createLibrary(sector);
}

function setupHealth() {
  Map.init('health', 'health_2014', vectorgator.health.bbox, id);
  var sectorName = 'health';
  var sector = vectorgator[sectorName];

  // Total Count
  $('#' + sectorName + '-total-count').html(numberWithCommas(sector.total_count));

  // Status
  var status = sector.functional;
  var active = status['Yes'];
  var inactive = status['No'];
  var percent = (active / (active + inactive)) * 100;
  if (isNaN(percent)) {
    percent = 0;
  }
  var $statusProgress = $('#' + sectorName + '-status-progress');
  $statusProgress.css('width', percent+'%').attr('aria-valuenow', percent);
  $statusProgress.html(percent.toFixed(2) + '% Active');
  $('#' + sectorName + '-num-active').html(numberWithCommas(active));
  $('#' + sectorName + '-num-inactive').html(numberWithCommas(inactive));

  // Land Use
  var land_use = sector.land_use;
  var percent = (land_use.Urban / (land_use.Urban + land_use.Rural)) * 100;
  if (isNaN(percent)) {
    percent = 0;
  }
  $('#' + sectorName + '-urban-rural-progress').css('width', percent+'%').attr('aria-valuenow', percent);
  $('#' + sectorName + '-urban-rural-progress').html(percent.toFixed(2) + '% Urban');
  $('#' + sectorName + '-num-urban').html(numberWithCommas(land_use.Urban));
  $('#' + sectorName + '-num-rural').html(numberWithCommas(land_use.Rural));

  // Access Road
  var status = sector.access_road;
  var yes = status['Yes'] || 0;
  var no = status['No'] || 0;
  var percent = (yes / (yes + no)) * 100;
  if (isNaN(percent)) {
    percent = 0;
  }
  var $accessRoadProgress = $('#' + sectorName + '-access-road-progress');
  $accessRoadProgress.css('width', percent+'%').attr('aria-valuenow', percent);
  $accessRoadProgress.html(percent.toFixed(2) + '% With Access Road');
  $('#' + sectorName + '-num-access-road').html(numberWithCommas(yes));
  $('#' + sectorName + '-num-no-access-road').html(numberWithCommas(no));

  // Blood Transfusion
  var status = sector.blood_transfusion;
  var yes = status['Yes'] || 0;
  var no = status['No'] || 0;
  var percent = (yes / (yes + no)) * 100;
  if (isNaN(percent)) {
    percent = 0;
  }
  var $blood_transfusionProgress = $('#' + sectorName + '-blood-transfusion-progress');
  $blood_transfusionProgress.css('width', percent+'%').attr('aria-valuenow', percent);
  $blood_transfusionProgress.html(percent.toFixed(2) + '% Blood Transfusion Available');
  $('#' + sectorName + '-num-blood-transfusion').html(numberWithCommas(yes));
  $('#' + sectorName + '-num-no-blood-transfusion').html(numberWithCommas(no));

  // Dispensary
  var status = sector.dispensary;
  var yes = status['Yes'] || 0;
  var no = status['No'] || 0;
  var percent = (yes / (yes + no)) * 100;
  if (isNaN(percent)) {
    percent = 0;
  }
  var $dispensaryProgress = $('#' + sectorName + '-dispensary-progress');
  $dispensaryProgress.css('width', percent+'%').attr('aria-valuenow', percent);
  $dispensaryProgress.html(percent.toFixed(2) + '% With Dispensary');
  $('#' + sectorName + '-num-dispensary').html(numberWithCommas(yes));
  $('#' + sectorName + '-num-no-dispensary').html(numberWithCommas(no));

  // Electricity
  var status = sector.electricity;
  var yes = status['Yes'] || 0;
  var no = status['No'] || 0;
  var percent = (yes / (yes + no)) * 100;
  if (isNaN(percent)) {
    percent = 0;
  }
  var $electricityProgress = $('#' + sectorName + '-electricity-progress');
  $electricityProgress.css('width', percent+'%').attr('aria-valuenow', percent);
  $electricityProgress.html(percent.toFixed(2) + '% With Electricity');
  $('#' + sectorName + '-num-electricity').html(numberWithCommas(yes));
  $('#' + sectorName + '-num-no-electricity').html(numberWithCommas(no));

  // Immunization
  var status = sector.immunization;
  var yes = status['Yes'] || 0;
  var no = status['No'] || 0;
  var percent = (yes / (yes + no)) * 100;
  if (isNaN(percent)) {
    percent = 0;
  }
  var $immunizationProgress = $('#' + sectorName + '-immunization-progress');
  $immunizationProgress.css('width', percent+'%').attr('aria-valuenow', percent);
  $immunizationProgress.html(percent.toFixed(2) + '% With Immunization');
  $('#' + sectorName + '-num-immunization').html(numberWithCommas(yes));
  $('#' + sectorName + '-num-no-immunization').html(numberWithCommas(no));

  // Pharmacist
  var status = sector.pharmacist;
  var yes = status['Yes'] || 0;
  var no = status['No'] || 0;
  var percent = (yes / (yes + no)) * 100;
  if (isNaN(percent)) {
    percent = 0;
  }
  var $pharmacistProgress = $('#' + sectorName + '-pharmacist-progress');
  $pharmacistProgress.css('width', percent+'%').attr('aria-valuenow', percent);
  $pharmacistProgress.html(percent.toFixed(2) + '% With Pharmacist');
  $('#' + sectorName + '-num-pharmacist').html(numberWithCommas(yes));
  $('#' + sectorName + '-num-no-pharmacist').html(numberWithCommas(no));

  // Open 24 / 7
  var status = sector.phc_24_7;
  var yes = status['Yes'] || 0;
  var no = status['No'] || 0;
  var percent = (yes / (yes + no)) * 100;
  if (isNaN(percent)) {
    percent = 0;
  }
  var $open247Progress = $('#' + sectorName + '-open-24-7-progress');
  $open247Progress.css('width', percent+'%').attr('aria-valuenow', percent);
  $open247Progress.html(percent.toFixed(2) + '% Open 24 / 7');
  $('#' + sectorName + '-num-open-24-7').html(numberWithCommas(yes));
  $('#' + sectorName + '-num-no-open-24-7').html(numberWithCommas(no));

  // Running Water
  var status = sector.running_water;
  var yes = status['Yes'] || 0;
  var no = status['No'] || 0;
  var percent = (yes / (yes + no)) * 100;
  if (isNaN(percent)) {
    percent = 0;
  }
  var $running_waterProgress = $('#' + sectorName + '-running-water-progress');
  $running_waterProgress.css('width', percent+'%').attr('aria-valuenow', percent);
  $running_waterProgress.html(percent.toFixed(2) + '% With Running Water');
  $('#' + sectorName + '-num-running-water').html(numberWithCommas(yes));
  $('#' + sectorName + '-num-no-running-water').html(numberWithCommas(no));

  Charts.createHealth(sector);
}

function setupAgriculture() {
  Map.init('agriculture', 'agriculture_2014', vectorgator.agriculture.bbox, id);
  var sectorName = 'agriculture';
  var sector = vectorgator[sectorName];

  // Total Count
  $('#' + sectorName + '-total-count').html(numberWithCommas(sector.total_count));

  // Fertilizer
  var status = sector.fertilizer;
  var active = status['Yes'];
  var inactive = status['No'];
  var percent = (active / (active + inactive)) * 100;
  if (isNaN(percent)) {
    percent = 0;
  }
  var $fertilizerProgress = $('#' + sectorName + '-vending-fertilizer-progress');
  $fertilizerProgress.css('width', percent+'%').attr('aria-valuenow', percent);
  $fertilizerProgress.html(percent.toFixed(2) + '% Vending Fertilizer');
  $('#' + sectorName + '-num-vending').html(numberWithCommas(active));
  $('#' + sectorName + '-num-not-vending').html(numberWithCommas(inactive));

  // Land Use
  var land_use = sector.land_use;
  var percent = (land_use.Urban / (land_use.Urban + land_use.Rural)) * 100;
  if (isNaN(percent)) {
    percent = 0;
  }
  $('#' + sectorName + '-urban-rural-progress').css('width', percent+'%').attr('aria-valuenow', percent);
  $('#' + sectorName + '-urban-rural-progress').html(percent.toFixed(2) + '% Urban');
  $('#' + sectorName + '-num-urban').html(numberWithCommas(land_use.Urban));
  $('#' + sectorName + '-num-rural').html(numberWithCommas(land_use.Rural));

  // Branded
  var status = sector.branded;
  var yes = status['Yes'] || 0;
  var no = status['No'] || 0;
  var percent = (yes / (yes + no)) * 100;
  if (isNaN(percent)) {
    percent = 0;
  }
  var $brandedProgress = $('#' + sectorName + '-branded-progress');
  $brandedProgress.css('width', percent+'%').attr('aria-valuenow', percent);
  $brandedProgress.html(percent.toFixed(2) + '% Has Branding');
  $('#' + sectorName + '-num-branded').html(numberWithCommas(yes));
  $('#' + sectorName + '-num-no-branded').html(numberWithCommas(no));

  // Tools / Equipment
  var status = sector.tools_equipment;
  var yes = status['Yes'] || 0;
  var no = status['No'] || 0;
  var percent = (yes / (yes + no)) * 100;
  if (isNaN(percent)) {
    percent = 0;
  }
  var $tools_equipmentProgress = $('#' + sectorName + '-tools_equipment-progress');
  $tools_equipmentProgress.css('width', percent+'%').attr('aria-valuenow', percent);
  $tools_equipmentProgress.html(percent.toFixed(2) + '% Selling Tools / Equipment');
  $('#' + sectorName + '-num-tools_equipment').html(numberWithCommas(yes));
  $('#' + sectorName + '-num-no-tools_equipment').html(numberWithCommas(no));

  Charts.createAgriculture(sector);
}

function numberWithCommas(x) {
  if (typeof x === 'undefined' || x === null) {
    return 0;
  }
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function setupExportButton(){
  $("#exportBtn").on("click", function(){
      Print.print();
  });

  //Reset state when reset button is clicked.
  $("#resetButton").on("click", function(){
    Print.reset();
  })
}

setupExportButton();