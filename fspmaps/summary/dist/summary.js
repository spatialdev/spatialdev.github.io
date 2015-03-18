(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/nick/code/FSPMaps-Leaflet/summary/src/charts.js":[function(require,module,exports){
var Config = require('./config');

var Charts = {};

var defaultPalette = [
  '#9b242d',
  '#3086ab',
  '#977c00',
  '#a4c78c',
  '#ce6b29',
  '#59452a',
  '#8cb7c7',
  '#d098d5',
  '#d59898',
  '#567d54',
  '#b6985e',
  '#ff5d5d',
  '#d5cb98'
];

Charts.createFSP = function(fsp) {
  fspTypesBar(fsp.type);
  fspTypesPie(fsp.type);
  fspAssocBusBar(fsp.assoc_business);
  fspAssocBusPie(fsp.assoc_business);
  fspAssocBankBar(fsp.assoc_bank);
  fspAssocBankPie(fsp.assoc_bank);
};

function formatBarFlotData(data, sector) {
  var flotData = [];
  var ticks = [];
  var keys = Object.keys(data).sort();
  for (var i = 0, len = keys.length; i < len; i++) {
    var name = keys[i];
    if (name === 'null') {
      continue;
    }
    var count = data[name];
    var color = '#4D5360'; // dark grey
    var config = Config[sector][name];
    if (config) {
      color = config.color;
    }
    var dataObj = {
      data: [[i, count]],
      color: color
    };
    ticks.push([i, name.replace(/\//g, ' / ')]);
    flotData.push(dataObj);
  }
  return {ticks:ticks, flotData:flotData};
}

function formatBarFlotDataRandColor(data) {
  var flotData = [];
  var ticks = [];
  var keys = Object.keys(data).sort();
  for (var i = 0, len = keys.length; i < len; i++) {
    var name = keys[i];
    if (name === 'null') {
      continue;
    }
    var count = data[name];
    var color = defaultPalette[i];
    var dataObj = {
      data: [[i, count]],
      color: color
    };
    ticks.push([i, name.replace(/\//g, ' / ')]);
    flotData.push(dataObj);
  }
  return {ticks:ticks, flotData:flotData};
}

function fspTypesBar(type) {
  var format = formatBarFlotData(type, 'fsp');
  var flotData = format.flotData;
  var ticks = format.ticks;

  if (flotData.length === 0) {
    $('#fsp-types-bar').html('<h2>No Data Available</h2>');
    return;
  }

  $.plot('#fsp-types-bar', flotData, {
    series: {
      bars: {
        show: true,
        barWidth: 0.6,
        align: "center"
      }
    },
    grid: {
      hoverable: true,
      clickable: true
    },
    xaxis: {
      ticks: ticks
    }
  });

  $('#fsp-types-bar').bind("plothover", function (event, pos, item) {
    tooltip(pos, item);
  });
}

function fspAssocBusBar(bus) {
  var format = formatBarFlotDataRandColor(bus);
  var flotData = format.flotData;
  var ticks = format.ticks;

  if (flotData.length === 0) {
    $('#fsp-assoc-bus-bar').html('<h2>No Data Available</h2>');
    return;
  }

  $.plot("#fsp-assoc-bus-bar", flotData, {
    series: {
      bars: {
        show: true,
        barWidth: 0.6,
        align: "center"
      }
    },
    grid: {
      hoverable: true,
      clickable: true
    },
    xaxis: {
      ticks: ticks
    }
  });

  $('#fsp-assoc-bus-bar').bind("plothover", function (event, pos, item) {
    tooltip(pos, item);
  });

}

function fspAssocBankBar(bank) {
  var format = formatBarFlotDataRandColor(bank);
  var flotData = format.flotData;
  var ticks = format.ticks;

  if (flotData.length === 0) {
    $('#fsp-assoc-bank-bar').html('<h2>No Data Available</h2>');
    return;
  }

  $.plot("#fsp-assoc-bank-bar", flotData, {
    series: {
      bars: {
        show: true,
        barWidth: 0.6,
        align: "center"
      }
    },
    grid: {
      hoverable: true,
      clickable: true
    },
    xaxis: {
      ticks: ticks
    }
  });

  $('#fsp-assoc-bank-bar').bind("plothover", function (event, pos, item) {
    tooltip(pos, item);
  });
}

function formatPieFlotData(data, sector) {
  var flotData = [];
  var keys = Object.keys(data).sort();
  for (var i = 0, len = keys.length; i < len; i++) {
    var name = keys[i];
    if (name === 'null') {
      continue;
    }
    var count = data[name];
    var color = '#4D5360'; // dark grey
    var config = Config[sector][name];
    if (config) {
      color = config.color;
    }
    var dataObj = {
      data: count,
      color: color,
      label: name.replace(/\//g, ' / ')
    };
    flotData.push(dataObj);
  }
  return flotData;
}

function formatPieFlotDataRandColor(data) {
  var flotData = [];
  var keys = Object.keys(data).sort();
  for (var i = 0, len = keys.length; i < len; i++) {
    var name = keys[i];
    if (name === 'null') {
      continue;
    }
    var typeCount = data[name];
    var color = defaultPalette[i];

    var dataObj = {
      data: typeCount,
      color: color,
      label: name.replace(/\//g, ' / ')
    };
    flotData.push(dataObj);
  }
  return flotData;
}

function pieFormatter(label, series) {
  if (label.length > 10) {
    var words = label.split(' ');
    if (words[2]) {
      words[1] = words[1] + '<br/>';
      label = words.join(' ');
    }
  }
  if (series.percent < 15) {
    return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + Math.round(series.percent) + "%</div>";
  }
  return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
}

function createLabelObject() {
  return {
    show: true,
    radius: 0.6,
    formatter: pieFormatter,
    threshold: 0.08,
    background: {
      opacity: 0
    }
  };
}

function fspTypesPie(type) {
  var flotData = formatPieFlotData(type, 'fsp');

  if (flotData.length === 0) {
    return;
  }

  $.plot('#fsp-types-pie', flotData, {
    series: {
      pie: {
        show: true,
        radius: 1,
        label: createLabelObject()
      }
    },
    grid: {
      hoverable: true,
      clickable: true
    },
    legend: {
      show: true
    }
  });

  $('#fsp-types-pie').bind("plothover", function (event, pos, item) {
    tooltipPie(pos, item);
  });

}

function fspAssocBusPie(bus) {
  var flotData = formatPieFlotDataRandColor(bus);

  if (flotData.length === 0) {
    return;
  }

  $.plot('#fsp-assoc-bus-pie', flotData, {
    series: {
      pie: {
        show: true,
        radius: 1,
        label: createLabelObject()
      }
    },
    grid: {
      hoverable: true,
      clickable: true
    },
    legend: {
      show: true
    }
  });

  $('#fsp-assoc-bus-pie').bind("plothover", function (event, pos, item) {
    tooltipPie(pos, item);
  });

}

function fspAssocBankPie(bank) {
  var flotData = formatPieFlotDataRandColor(bank);

  if (flotData.length === 0) {
    return;
  }

  $.plot('#fsp-assoc-bank-pie', flotData, {
    series: {
      pie: {
        show: true,
        radius: 1,
        label: createLabelObject()
      }
    },
    grid: {
      hoverable: true,
      clickable: true
    },
    legend: {
      show: true
    }
  });

  $('#fsp-assoc-bank-pie').bind("plothover", function (event, pos, item) {
    tooltipPie(pos, item);
  });

}


/**
 * LIBRARY
 */
Charts.createLibrary = function(library) {
  libraryTypesBar(library.type);
  libraryTypesPie(library.type);
};

function libraryTypesBar(type) {
  var format = formatBarFlotData(type, 'library');
  var flotData = format.flotData;
  var ticks = format.ticks;

  if (flotData.length === 0) {
    $('#library-types-bar').html('<h2>No Data Available</h2>');
    return;
  }

  $.plot("#library-types-bar", flotData, {
    series: {
      bars: {
        show: true,
        barWidth: 0.6,
        align: "center"
      }
    },
    grid: {
      hoverable: true,
      clickable: true
    },
    xaxis: {
      ticks: ticks
    }
  });

  $('#library-types-bar').bind("plothover", function (event, pos, item) {
    tooltip(pos, item);
  });
}

function libraryTypesPie(type) {
  var flotData = formatPieFlotData(type, 'library');

  if (flotData.length === 0) {
    return;
  }

  $.plot('#library-types-pie', flotData, {
    series: {
      pie: {
        show: true,
        radius: 1,
        label: createLabelObject()
      }
    },
    grid: {
      hoverable: true,
      clickable: true
    },
    legend: {
      show: true
    }
  });

  $('#library-types-pie').bind("plothover", function (event, pos, item) {
    tooltipPie(pos, item);
  });

}

/**
 * HEALTH
 */
Charts.createHealth = function(health) {
  healthTypesBar(health.type);
  healthTypesPie(health.type);
};

function healthTypesBar(type) {
  var format = formatBarFlotData(type, 'health');
  var flotData = format.flotData;
  var ticks = format.ticks;

  if (flotData.length === 0) {
    $('#health-types-bar').html('<h2>No Data Available</h2>');
    return;
  }

  $.plot("#health-types-bar", flotData, {
    series: {
      bars: {
        show: true,
        barWidth: 0.6,
        align: "center"
      }
    },
    grid: {
      hoverable: true,
      clickable: true
    },
    xaxis: {
      ticks: ticks
    }
  });

  $('#health-types-bar').bind("plothover", function (event, pos, item) {
    tooltip(pos, item);
  });
}

function healthTypesPie(type) {
  var flotData = formatPieFlotData(type, 'health');

  if (flotData.length === 0) {
    return;
  }

  $.plot('#health-types-pie', flotData, {
    series: {
      pie: {
        show: true,
        radius: 1,
        label: createLabelObject()
      }
    },
    grid: {
      hoverable: true,
      clickable: true
    },
    legend: {
      show: true
    }
  });

  $('#health-types-pie').bind("plothover", function (event, pos, item) {
    tooltipPie(pos, item);
  });
}

/**
 * AGRICULTURE
 */
Charts.createAgriculture = function(agriculture) {
  agricultureTypesBar(agriculture.type);
  agricultureTypesPie(agriculture.type);
  agricultureSeedMultiplierBar(agriculture.seed_muliplier);
  agricultureSeedMultiplierPie(agriculture.seed_muliplier);
};

function agricultureTypesBar(type) {
  var format = formatBarFlotData(type, 'agriculture');
  var flotData = format.flotData;
  var ticks = format.ticks;

  if (flotData.length === 0) {
    $('#agriculture-types-bar').html('<h2>No Data Available</h2>');
    return;
  }

  $.plot("#agriculture-types-bar", flotData, {
    series: {
      bars: {
        show: true,
        barWidth: 0.6,
        align: "center"
      }
    },
    grid: {
      hoverable: true,
      clickable: true
    },
    xaxis: {
      ticks: ticks
    }
  });

  $('#agriculture-types-bar').bind("plothover", function (event, pos, item) {
    tooltip(pos, item);
  });
}

function agricultureTypesPie(type) {
  var flotData = formatPieFlotData(type, 'agriculture');

  if (flotData.length === 0) {
    return;
  }

  $.plot('#agriculture-types-pie', flotData, {
    series: {
      pie: {
        show: true,
        radius: 1,
        label: createLabelObject()
      }
    },
    grid: {
      hoverable: true,
      clickable: true
    },
    legend: {
      show: true
    }
  });

  $('#agriculture-types-pie').bind("plothover", function (event, pos, item) {
    tooltipPie(pos, item);
  });

}

function agricultureSeedMultiplierBar(multiplier) {
  var format = formatBarFlotDataRandColor(multiplier, 'agriculture');
  var flotData = format.flotData;
  var ticks = format.ticks;

  if (flotData.length === 0) {
    $('#agriculture-seed_muliplier-bar').html('<h2>No Data Available</h2>');
    return;
  }

  $.plot("#agriculture-seed_muliplier-bar", flotData, {
    series: {
      bars: {
        show: true,
        barWidth: 0.6,
        align: "center"
      }
    },
    grid: {
      hoverable: true,
      clickable: true
    },
    xaxis: {
      ticks: ticks
    }
  });

  $('#agriculture-seed_muliplier-bar').bind("plothover", function (event, pos, item) {
    tooltip(pos, item);
  });

}

function agricultureSeedMultiplierPie(multiplier) {
  var flotData = formatPieFlotDataRandColor(multiplier, 'agriculture');

  if (flotData.length === 0) {
    return;
  }

  $.plot('#agriculture-seed_muliplier-pie', flotData, {
    series: {
      pie: {
        show: true,
        radius: 1,
        label: createLabelObject()
      }
    },
    grid: {
      hoverable: true,
      clickable: true
    },
    legend: {
      show: true
    }
  });

  $('#agriculture-seed_muliplier-pie').bind("plothover", function (event, pos, item) {
    tooltipPie(pos, item);
  });
}

function tooltip(pos, item) {
  if (item) {
    var count = item.datapoint[1];
    $("#tooltip").html('<div class="summary-blue-number">'+numberWithCommas(count)+'</div>'+item.series.xaxis.ticks[item.seriesIndex].label)
        .css({top: pos.pageY-30, left: pos.pageX+10})
        .fadeIn(200);
  } else {
    $("#tooltip").hide();
  }
}

function tooltipPie(pos, item) {
  if (item) {
    var count = item.datapoint[1][0][1];
    $("#tooltip").html('<div class="summary-blue-number">'+numberWithCommas(count)+'</div>'+item.series.label)
        .css({top: pos.pageY-30, left: pos.pageX+10})
        .fadeIn(200);
  } else {
    $("#tooltip").hide();
  }
}

function numberWithCommas(x) {
  if (typeof x === 'undefined' || x === null) {
    return 0;
  }
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

module.exports = Charts;

},{"./config":"/Users/nick/code/FSPMaps-Leaflet/summary/src/config.js"}],"/Users/nick/code/FSPMaps-Leaflet/summary/src/config.js":[function(require,module,exports){
module.exports = {
  fsp: {
    'Offsite ATMs': {
      color: '#a4c78c',
      infoLabel: 'Offsite ATM',
      providers: null,
      zIndex: 6
    },
    'Bank Branches': {
      color: '#977C00',
      infoLabel: 'Bank Branch',
      providers: null,
      zIndex: 5
    },
    'MFIs': {
      color: '#977c00',
      infoLabel: 'MFI',
      providers: null,
      zIndex: 7
    },
    'SACCOs': {
      color: '#cf8a57',
      infoLabel: 'SACCO',
      providers: null,
      zIndex: 10
    },
    'Mobile Money Agent': {
      color: '#8CB7C7',
      infoLabel: 'Mobile Money Agent',
      providers: null,
      zIndex: -1
    },
    'MDIs': {
      color: '#825D99',
      infoLabel: 'MDI',
      providers: null,
      zIndex: 6
    },
    'Credit Institution': {
      color: '#6CA76B',
      infoLabel: 'Credit Institution',
      providers: null,
      zIndex: 5
    },
    'MFBs': {
      color: '#825D99',
      infoLabel: 'MFB',
      providers: null,
      zIndex: 7
    },
    'Motor Parks': {
      color: '#bd85b3',
      infoLabel: 'Motor Parks',
      providers: null,
      zIndex: 7
    },
    'Mobile Network Operator Outlets': {
      color: '#a2a2a2',
      infoLabel: 'Mobile Network Operator Outlets',
      providers: null,
      zIndex: 0
    },
    'Post Offices': {
      color: '#FFFF00',
      infoLabel: 'Post Offices',
      providers: null,
      zIndex: 4
    },
    'Post Office': {
      color: '#80ad7b',
      infoLabel: 'Post Offices',
      providers: null,
      zIndex: 6
    },
    'Bus Stand': {
      color: '#80ad7b',
      infoLabel: 'Bus Stands',
      providers: null,
      zIndex: 6
    },
    'Bus Stands': {
      color: '#80ad7b',
      infoLabel: 'Bus Stands',
      providers: null,
      zIndex: 6
    },

    //Kenya
    'Insurance Providers': {
      color: '#3086AB',
      infoLabel: 'Insurance providers',
      providers: null,
      zIndex: 6
    },
    'Money Transfer Service': {
      color: '#977C00',
      infoLabel: 'Money Transfer Service',
      providers: null,
      zIndex: 6
    },
    'Dev Finance': {
      color: '#9B242D',
      infoLabel: 'Dev Finance',
      providers: null,
      zIndex: 6
    },
    'Forex Bureaus': {
      color: '#cf8a57',
      infoLabel: 'Forex Bureaus',
      providers: null,
      zIndex: 6
    },
    'Cap Markets': {
      color: '#825D99',
      infoLabel: 'Cap Markets',
      providers: null,
      zIndex: 6
    },
    'Pension Providers': {
      color: '#a2a2a2',
      infoLabel: 'Pension providers',
      providers: null,
      zIndex: 6
    },
    'Purchase Lease Factoring': {
      color: '#80ad7b',
      infoLabel: 'Purchase Lease Factoring',
      providers: null,
      zIndex: 6
    },
    'Bank Agent': {
      color: '#80ad7b',
      infoLabel: 'Bank Agent',
      providers: null,
      zIndex: 6
    },
    'Bank and Mortgage': {
      color: '#80ad7b',
      infoLabel: 'Banks and Mortgage',
      providers: null,
      zIndex: 6
    },
    'Commercial Bank': {
      color: '#80ad7b',
      infoLabel: 'Commercial Bank',
      providers: null,
      zIndex: 3
    },

    'PostBank': {
      color: '#bd85b3',
      infoLabel: 'Post Bank',
      providers: null,
      zIndex: 6
    },

    //Nigeria New Post Offices
    'NIPOST Post Office': {
      color: '#80ad7b',
      infoLabel: 'NIPOST Post Offices',
      providers: null,
      zIndex: 6
    },
    'NIPOST Post Shop': {
      color: '#80ad7b',
      infoLabel: 'NIPOST Post Shops',
      providers: null,
      zIndex: 6
    },
    'NIPOST Postal Agency': {
      color: '#80ad7b',
      infoLabel: 'NIPOST Postal Agencies',
      providers: null,
      zIndex: 6
    },

    //India
    'Postal Outlets': {
      color: '#ce6b29',
      infoLabel: 'Postal Outlets',
      providers: null,
      zIndex: 3
    },
    'Commercial Banks': {
      color: '#3086ab',
      infoLabel: 'Commercial Banks',
      providers: null,
      zIndex: 2
    },
    'Bank Customer Service Points': {
      color: '#9b242d',
      infoLabel: 'Bank Customer Service Points',
      providers: null,
      zIndex: 4
    }
  },

  library: {
    'District': {
      color: '#9b242d',
      infoLabel: 'District',
      providers: null,
      zIndex: 6
    },
    'Private Library': {
      color: '#3086ab',
      infoLabel: 'Private Library',
      providers: null,
      zIndex: 5
    },
    'Public Library': {
      color: '#977c00',
      infoLabel: 'Public Library',
      providers: null,
      zIndex: 7
    },
    'Village': {
      color: '#a4c78c',
      infoLabel: 'Village',
      providers: null,
      zIndex: 4
    }
  },

  health: {
    'Additional Primary Health Centres (APHC)': {
      color: '#9b242d',
      infoLabel: 'Additional Primary Health Centres (APHC)',
      providers: null,
      zIndex: 6
    },
    'ANM or District Training Centres': {
      color: '#3086ab',
      infoLabel: 'ANM or District Training Centres',
      providers: null,
      zIndex: 5
    },
    'Approved Nursing Training Centres (Private Sector)': {
      color: '#977c00',
      infoLabel: 'Approved Nursing Training Centres (Private Sector)',
      providers: null,
      zIndex: 7
    },
    'Community Health Centre (CHC)/First Referral Units': {
      color: '#d5cb98',
      infoLabel: 'Community Health Centre (CHC)/First Referral Units',
      providers: null,
      zIndex: 4
    },
    'District Hospitals': {
      color: '#ce6b29',
      infoLabel: 'District Hospitals',
      providers: null,
      zIndex: 5
    },
    'Medical Colleges and Hospitals': {
      color: '#59452a',
      infoLabel: 'Medical Colleges and Hospitals',
      providers: null,
      zIndex: 7
    },
    'Primary Health Centre (PHC)': {
      color: '#8cb7c7',
      infoLabel: 'Primary Health Centre (PHC)',
      providers: null,
      zIndex: 4
    },
    'Private hospitals and clinics': {
      color: '#d098d5',
      infoLabel: 'Private hospitals and clinics',
      providers: null,
      zIndex: 5
    },
    'Sub Divisional District Hospitals': {
      color: '#a4c78c',
      infoLabel: 'Sub Divisional District Hospitals',
      providers: null,
      zIndex: 7
    },
    'Sub Health Centres': {
      color: '#d59898',
      infoLabel: 'Sub Divisional District Hospitals',
      providers: null,
      zIndex: 7
    },
    'Nursing Schools': {
      color: '#567d54',
      infoLabel: 'Nursing Schools',
      providers: null,
      zIndex: 4
    }
  },

  agriculture: {
    'Dairy Processors': {
      color: '#9b242d',
      infoLabel: 'Dairy Processors',
      providers: null,
      zIndex: 6
    },
    'Day old chick hatcheries': {
      color: '#3086ab',
      infoLabel: 'Day old chick hatcheries',
      providers: null,
      zIndex: 5
    },
    'Private sector Agricultural service providers': {
      color: '#977c00',
      infoLabel: 'Private sector Agricultural service providers',
      providers: null,
      zIndex: 7
    },
    'Government Vets': {
      color: '#d5cb98',
      infoLabel: 'Government Vets',
      providers: null,
      zIndex: 4
    },
    'Market Locations': {
      color: '#ce6b29',
      infoLabel: 'Market Locations',
      providers: null,
      zIndex: 5
    },
    'Agro-dealers': {
      color: '#59452a',
      infoLabel: 'Agro-dealers',
      providers: null,
      zIndex: 7
    },
    'Warehouse/Storage/Aggregation Centres': {
      color: '#8cb7c7',
      infoLabel: 'Primary Health Centre (PHC)',
      providers: null,
      zIndex: 4
    },
    'Dairy chilling plants': {
      color: '#d098d5',
      infoLabel: 'Dairy chilling plants',
      providers: null,
      zIndex: 7
    },
    'Processors/value addition points': {
      color: '#a4c78c',
      infoLabel: 'Processors/value addition points',
      providers: null,
      zIndex: 7
    },
    'Farmer Organisations and Cooperatives': {
      color: '#d59898',
      infoLabel: 'Farmer Organisations and Cooperatives',
      providers: null,
      zIndex: 4
    },
    'Artificial Insemination Centres': {
      color: '#567d54',
      infoLabel: 'Primary Health Centre (PHC)',
      providers: null,
      zIndex: 4
    },
    'National/Regional/State Research Stations': {
      color: '#b6985e',
      infoLabel: 'Warehouse/Storage/Aggregation Centres',
      providers: null,
      zIndex: 5
    },
    'Seed Multipliers': {
      color: '#ff5d5d',
      infoLabel: 'Dairy chilling plants',
      providers: null,
      zIndex: 7
    }
  }

};


},{}],"/Users/nick/code/FSPMaps-Leaflet/summary/src/data.js":[function(require,module,exports){
var vectorgatorOrigin = 'http://spatialserver.spatialdev.com/fsp/2014/';

var vectorgator = {
  fsp: null,
  library: null,
  health: null,
  agriculture: null
};


var fetches = 4;

function fetch(id, cb) {
  $.getJSON(vectorgatorOrigin + 'fsp/aggregations-full/' + id + '.json', function(data) {
    data.assoc_bank = filterToOther(data.assoc_bank, 1);
    data.assoc_business = filterToOther(data.assoc_business, 1);
    vectorgator.fsp = data;
    --fetches;
    ajaxComplete(cb);
  });

  $.getJSON(vectorgatorOrigin + 'library/aggregations-full/' + id + '.json', function(data) {
    vectorgator.library = data;
    --fetches;
    ajaxComplete(cb);
  });

  $.getJSON(vectorgatorOrigin + 'health/aggregations/' + id + '.json', function(data) {
    vectorgator.health = data;
    --fetches;
    ajaxComplete(cb);
  });

  $.getJSON(vectorgatorOrigin + 'agriculture/aggregations/' + id + '.json', function(data) {
    vectorgator.agriculture = data;
    --fetches;
    ajaxComplete(cb);
  });
}


function ajaxComplete(cb) {
  if (fetches > 0) return;
  cb(vectorgator);
}

function filterToOther(obj, percentCutoff) {
  var filteredObj = {
    Other: 0
  };
  var total = 0;
  for (var key in obj) {
    total += obj[key];
  }
  for (var key in obj) {
    var val = obj[key];
    var perc = (val / total) * 100;
    if (perc < percentCutoff) {
      filteredObj.Other += val;
    } else {
      filteredObj[key] = val;
    }
  }
  return filteredObj;
}

module.exports = {
  fetch: fetch
};
},{}],"/Users/nick/code/FSPMaps-Leaflet/summary/src/main.js":[function(require,module,exports){
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
},{"./charts":"/Users/nick/code/FSPMaps-Leaflet/summary/src/charts.js","./data":"/Users/nick/code/FSPMaps-Leaflet/summary/src/data.js","./map":"/Users/nick/code/FSPMaps-Leaflet/summary/src/map.js","./print":"/Users/nick/code/FSPMaps-Leaflet/summary/src/print.js"}],"/Users/nick/code/FSPMaps-Leaflet/summary/src/map.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 10/17/14.
 */

var Config = require('./config');

var Map = {};

Map.init = function(sector, pointsTable, bbox, id) {
  var domId = sector + '-map';

  // create a map in the "map" div, set the view to a given place and zoom
  var map = L.map(domId, {
    scrollWheelZoom: false
  });

  var bounds = L.geoJson(bbox).getBounds();
  map.fitBounds(bounds);

  // add an OpenStreetMap tile layer
  L.tileLayer('http://b.tiles.mapbox.com/v3/cugos.jolef8gc/{z}/{x}/{y}.png').addTo(map);

  var id = parseInt(id);
  var boundaryMvt = new L.TileLayer.MVTSource(boundaryConfig(id));
  var pointsMvt = new L.TileLayer.MVTSource(pointsConfig(sector, pointsTable, id));

  map.addLayer(pointsMvt);
  map.addLayer(boundaryMvt);

  $('.leaflet-control-attribution').remove();
};

function boundaryConfig(boundaryId) {
  return {
    url: "http://spatialserver.spatialdev.com/services/vector-tiles/gaul_fsp_india/{z}/{x}/{y}.pbf",
    debug: false,
    visibleLayers: ['gaul_2014_adm1', 'gaul_2014_adm1_label', 'gaul_2014_adm2', 'gaul_2014_adm2_label'],
    getIDForLayerFeature: function(feature) {
      return feature._id;
    },

    /**
     * The filter function gets called when iterating though each vector tile feature (vtf). You have access
     * to every property associated with a given feature (the feature, and the layer). You can also filter
     * based of the context (each tile that the feature is drawn onto).
     *
     * Returning false skips over the feature and it is not drawn.
     *
     * @param feature
     * @returns {boolean}
     */
    filter: function(feature, context) {
      if ( feature._id === boundaryId ) {
        return true;
      }
      return false;
    },

    style: function(feature, ajaxData) {
      var style = {};

      var type = feature.type;
      switch (type) {
        case 1: //'Point'
          style.color = 'rgba(18,105,250,0)';
          style.radius = 5;
          style.selected = {
            color: 'rgba(255,255,0,0.5)',
            radius: 6
          };
          break;
        case 2: //'LineString'
          style.color = 'rgba(18,105,250,0.8)';
          style.size = 3;
          style.selected = {
            color: 'rgba(255,25,0,0.5)',
            size: 4
          };
          break;
        case 3: //'Polygon'

          style.color = 'rgba(18,105,250,0)';

          style.outline = {
            color: '#0077ac',
            size: 2
          };
          break;
      }

      return style;
    },

    /**
     * When we want to link events between layers, like clicking on a label and a
     * corresponding polygon freature, this will return the corresponding mapping
     * between layers. This provides knowledge of which other feature a given feature
     * is linked to.
     *
     * @param layerName  the layer we want to know the linked layer from
     * @returns {string} returns corresponding linked layer
     */
    layerLink: function(layerName) {
      if (layerName.indexOf('_label') > -1) {
        return layerName.replace('_label','');
      }
      return layerName + '_label';
    }
  };
}


function pointsConfig(sector, pointsTable, id) {
  return {
    url: "http://spatialserver.spatialdev.com/services/postgis/" + pointsTable + "/geom/vector-tiles/{z}/{x}/{y}.pbf?fields=type,id&where=gaul_2014_adm1%3d" + id + "%20or%20gaul_2014_adm2%3d" + id,
    debug: false,
    clickableLayers: null,

    getIDForLayerFeature: function (feature) {
      return feature.properties.id;
    },

    /**
     * The filter function gets called when iterating though each vector tile feature (vtf). You have access
     * to every property associated with a given feature (the feature, and the layer). You can also filter
     * based of the context (each tile that the feature is drawn onto).
     *
     * Returning false skips over the feature and it is not drawn.
     *
     * @param feature
     * @returns {boolean}
     */
    filter: function (feature, context) {
      //return feature.properties.type != 'Mobile Money Agent';
      return true;
    },

    /**
     * When we want to link events between layers, like clicking on a label and a
     * corresponding polygon freature, this will return the corresponding mapping
     * between layers. This provides knowledge of which other feature a given feature
     * is linked to.
     *
     * @param layerName  the layer we want to know the linked layer from
     * @returns {string} returns corresponding linked layer
     */
    layerLink: function (layerName) {
      if (layerName.indexOf('_label') > -1) {
        return layerName.replace('_label', '');
      }
      return layerName + '_label';
    },

    /**
     * Specify which features should have a certain z index (integer).  Lower numbers will draw on 'the bottom'.
     *
     * @param feature - the PBFFeature that contains properties
     */
    layerOrdering: function (feature) {
      //This only needs to be done for each type, not necessarily for each feature. But we'll start here.
      if (feature && feature.properties) {
        feature.properties.zIndex = Config[sector][feature.properties.type].zIndex || 5;
      }
    },

    style: function (feature) {
      var style = {};
      var selected = style.selected = {};
      var pointRadius = 1;

      function ScaleDependentPointRadius(zoom) {
        //Set point radius based on zoom
        var pointRadius = 1;
        if (zoom >= 0 && zoom <= 6) {
          pointRadius = 1;
        }
        else if (zoom > 6 && zoom <= 9) {
          pointRadius = 2;
        }
        else if (zoom > 9 && zoom <= 11) {
          pointRadius = 3;
        }
        else if (zoom > 11) {
          pointRadius = 4;
        }

        return pointRadius;
      }

      var type = feature.type;
      switch (type) {
        case 1: //'Point'
          // unselected
          style.color = Config[sector][feature.properties.type].color || '#3086AB';
          style.radius = ScaleDependentPointRadius;
          // selected
          selected.color = style.color; //same color
          selected.radius = 8; //but bigger
          selected.lineWidth = 1; //outline width
          selected.strokeStyle = "#f2f2f2"; //outline color
          break;

      }

      return style;
    }
  };
}



module.exports = Map;
},{"./config":"/Users/nick/code/FSPMaps-Leaflet/summary/src/config.js"}],"/Users/nick/code/FSPMaps-Leaflet/summary/src/print.js":[function(require,module,exports){

function print() {

  var printPostArgs = {
    url: window.location.href,
    //url: "http://spatialserver.spatialdev.com/FSPMaps-Leaflet/summary/#id=2442&sector=fsp", ///For Test
    imageformat: 'png',
    format: 'json' ,
    //viewportheight: mapHeight,
    viewportwidth: 1300
  };

  //Setup button state
  onImageExportStart();

  $.ajax({
    type: "POST",
    url: 'http://print.spatialdev.com',
    data: printPostArgs,
    success: onImageExport,
    error: onError
  });

}

function onImageExportStart(){
  //Alter state of buttons while exporting.
  $("#openBtn").removeClass("on");
  $("#exportBtn .loading").addClass("on");
  $("#exportBtn .content").removeClass("on");
  $("#exportBtn #export-glyph").removeClass("on");
  $("#resetButton").removeClass("on");
}

function onImageExport(result) {
  //instead, show a button/hyperlink for the user to open the image.
  $("#openBtn a.open").attr("href", result.image).addClass("on");
  $("#openBtn").addClass("on");
  $("#exportBtn").removeClass("on");
  $("#exportBtn .loading").removeClass("on");
  $("#exportBtn .content").removeClass("on");
  $("#exportBtn #export-glyph").removeClass("on");
  $("#resetButton").addClass("on");
}

function resetExportButtons() {
  //instead, show a button/hyperlink for the user to open the image.
  $("#openBtn").removeClass("on");
  $("#exportBtn").addClass("on");
  $("#exportBtn .loading").removeClass("on");
  $("#exportBtn .content").addClass("on");
  $("#exportBtn #export-glyph").addClass("on");
  $("#resetButton").removeClass("on");
}


function onError(cb) {

}

module.exports = {
  print: print,
  reset: resetExportButtons
};
},{}]},{},["/Users/nick/code/FSPMaps-Leaflet/summary/src/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY2hhcnRzLmpzIiwic3JjL2NvbmZpZy5qcyIsInNyYy9kYXRhLmpzIiwic3JjL21haW4uanMiLCJzcmMvbWFwLmpzIiwic3JjL3ByaW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3bkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeFhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBDb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpO1xuXG52YXIgQ2hhcnRzID0ge307XG5cbnZhciBkZWZhdWx0UGFsZXR0ZSA9IFtcbiAgJyM5YjI0MmQnLFxuICAnIzMwODZhYicsXG4gICcjOTc3YzAwJyxcbiAgJyNhNGM3OGMnLFxuICAnI2NlNmIyOScsXG4gICcjNTk0NTJhJyxcbiAgJyM4Y2I3YzcnLFxuICAnI2QwOThkNScsXG4gICcjZDU5ODk4JyxcbiAgJyM1NjdkNTQnLFxuICAnI2I2OTg1ZScsXG4gICcjZmY1ZDVkJyxcbiAgJyNkNWNiOTgnXG5dO1xuXG5DaGFydHMuY3JlYXRlRlNQID0gZnVuY3Rpb24oZnNwKSB7XG4gIGZzcFR5cGVzQmFyKGZzcC50eXBlKTtcbiAgZnNwVHlwZXNQaWUoZnNwLnR5cGUpO1xuICBmc3BBc3NvY0J1c0Jhcihmc3AuYXNzb2NfYnVzaW5lc3MpO1xuICBmc3BBc3NvY0J1c1BpZShmc3AuYXNzb2NfYnVzaW5lc3MpO1xuICBmc3BBc3NvY0JhbmtCYXIoZnNwLmFzc29jX2JhbmspO1xuICBmc3BBc3NvY0JhbmtQaWUoZnNwLmFzc29jX2JhbmspO1xufTtcblxuZnVuY3Rpb24gZm9ybWF0QmFyRmxvdERhdGEoZGF0YSwgc2VjdG9yKSB7XG4gIHZhciBmbG90RGF0YSA9IFtdO1xuICB2YXIgdGlja3MgPSBbXTtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKS5zb3J0KCk7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBrZXlzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIG5hbWUgPSBrZXlzW2ldO1xuICAgIGlmIChuYW1lID09PSAnbnVsbCcpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB2YXIgY291bnQgPSBkYXRhW25hbWVdO1xuICAgIHZhciBjb2xvciA9ICcjNEQ1MzYwJzsgLy8gZGFyayBncmV5XG4gICAgdmFyIGNvbmZpZyA9IENvbmZpZ1tzZWN0b3JdW25hbWVdO1xuICAgIGlmIChjb25maWcpIHtcbiAgICAgIGNvbG9yID0gY29uZmlnLmNvbG9yO1xuICAgIH1cbiAgICB2YXIgZGF0YU9iaiA9IHtcbiAgICAgIGRhdGE6IFtbaSwgY291bnRdXSxcbiAgICAgIGNvbG9yOiBjb2xvclxuICAgIH07XG4gICAgdGlja3MucHVzaChbaSwgbmFtZS5yZXBsYWNlKC9cXC8vZywgJyAvICcpXSk7XG4gICAgZmxvdERhdGEucHVzaChkYXRhT2JqKTtcbiAgfVxuICByZXR1cm4ge3RpY2tzOnRpY2tzLCBmbG90RGF0YTpmbG90RGF0YX07XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEJhckZsb3REYXRhUmFuZENvbG9yKGRhdGEpIHtcbiAgdmFyIGZsb3REYXRhID0gW107XG4gIHZhciB0aWNrcyA9IFtdO1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpLnNvcnQoKTtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGtleXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgbmFtZSA9IGtleXNbaV07XG4gICAgaWYgKG5hbWUgPT09ICdudWxsJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHZhciBjb3VudCA9IGRhdGFbbmFtZV07XG4gICAgdmFyIGNvbG9yID0gZGVmYXVsdFBhbGV0dGVbaV07XG4gICAgdmFyIGRhdGFPYmogPSB7XG4gICAgICBkYXRhOiBbW2ksIGNvdW50XV0sXG4gICAgICBjb2xvcjogY29sb3JcbiAgICB9O1xuICAgIHRpY2tzLnB1c2goW2ksIG5hbWUucmVwbGFjZSgvXFwvL2csICcgLyAnKV0pO1xuICAgIGZsb3REYXRhLnB1c2goZGF0YU9iaik7XG4gIH1cbiAgcmV0dXJuIHt0aWNrczp0aWNrcywgZmxvdERhdGE6ZmxvdERhdGF9O1xufVxuXG5mdW5jdGlvbiBmc3BUeXBlc0Jhcih0eXBlKSB7XG4gIHZhciBmb3JtYXQgPSBmb3JtYXRCYXJGbG90RGF0YSh0eXBlLCAnZnNwJyk7XG4gIHZhciBmbG90RGF0YSA9IGZvcm1hdC5mbG90RGF0YTtcbiAgdmFyIHRpY2tzID0gZm9ybWF0LnRpY2tzO1xuXG4gIGlmIChmbG90RGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAkKCcjZnNwLXR5cGVzLWJhcicpLmh0bWwoJzxoMj5ObyBEYXRhIEF2YWlsYWJsZTwvaDI+Jyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgJC5wbG90KCcjZnNwLXR5cGVzLWJhcicsIGZsb3REYXRhLCB7XG4gICAgc2VyaWVzOiB7XG4gICAgICBiYXJzOiB7XG4gICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgIGJhcldpZHRoOiAwLjYsXG4gICAgICAgIGFsaWduOiBcImNlbnRlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICBob3ZlcmFibGU6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIHhheGlzOiB7XG4gICAgICB0aWNrczogdGlja3NcbiAgICB9XG4gIH0pO1xuXG4gICQoJyNmc3AtdHlwZXMtYmFyJykuYmluZChcInBsb3Rob3ZlclwiLCBmdW5jdGlvbiAoZXZlbnQsIHBvcywgaXRlbSkge1xuICAgIHRvb2x0aXAocG9zLCBpdGVtKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZzcEFzc29jQnVzQmFyKGJ1cykge1xuICB2YXIgZm9ybWF0ID0gZm9ybWF0QmFyRmxvdERhdGFSYW5kQ29sb3IoYnVzKTtcbiAgdmFyIGZsb3REYXRhID0gZm9ybWF0LmZsb3REYXRhO1xuICB2YXIgdGlja3MgPSBmb3JtYXQudGlja3M7XG5cbiAgaWYgKGZsb3REYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICQoJyNmc3AtYXNzb2MtYnVzLWJhcicpLmh0bWwoJzxoMj5ObyBEYXRhIEF2YWlsYWJsZTwvaDI+Jyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgJC5wbG90KFwiI2ZzcC1hc3NvYy1idXMtYmFyXCIsIGZsb3REYXRhLCB7XG4gICAgc2VyaWVzOiB7XG4gICAgICBiYXJzOiB7XG4gICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgIGJhcldpZHRoOiAwLjYsXG4gICAgICAgIGFsaWduOiBcImNlbnRlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICBob3ZlcmFibGU6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIHhheGlzOiB7XG4gICAgICB0aWNrczogdGlja3NcbiAgICB9XG4gIH0pO1xuXG4gICQoJyNmc3AtYXNzb2MtYnVzLWJhcicpLmJpbmQoXCJwbG90aG92ZXJcIiwgZnVuY3Rpb24gKGV2ZW50LCBwb3MsIGl0ZW0pIHtcbiAgICB0b29sdGlwKHBvcywgaXRlbSk7XG4gIH0pO1xuXG59XG5cbmZ1bmN0aW9uIGZzcEFzc29jQmFua0JhcihiYW5rKSB7XG4gIHZhciBmb3JtYXQgPSBmb3JtYXRCYXJGbG90RGF0YVJhbmRDb2xvcihiYW5rKTtcbiAgdmFyIGZsb3REYXRhID0gZm9ybWF0LmZsb3REYXRhO1xuICB2YXIgdGlja3MgPSBmb3JtYXQudGlja3M7XG5cbiAgaWYgKGZsb3REYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICQoJyNmc3AtYXNzb2MtYmFuay1iYXInKS5odG1sKCc8aDI+Tm8gRGF0YSBBdmFpbGFibGU8L2gyPicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gICQucGxvdChcIiNmc3AtYXNzb2MtYmFuay1iYXJcIiwgZmxvdERhdGEsIHtcbiAgICBzZXJpZXM6IHtcbiAgICAgIGJhcnM6IHtcbiAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgYmFyV2lkdGg6IDAuNixcbiAgICAgICAgYWxpZ246IFwiY2VudGVyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGdyaWQ6IHtcbiAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgeGF4aXM6IHtcbiAgICAgIHRpY2tzOiB0aWNrc1xuICAgIH1cbiAgfSk7XG5cbiAgJCgnI2ZzcC1hc3NvYy1iYW5rLWJhcicpLmJpbmQoXCJwbG90aG92ZXJcIiwgZnVuY3Rpb24gKGV2ZW50LCBwb3MsIGl0ZW0pIHtcbiAgICB0b29sdGlwKHBvcywgaXRlbSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRQaWVGbG90RGF0YShkYXRhLCBzZWN0b3IpIHtcbiAgdmFyIGZsb3REYXRhID0gW107XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSkuc29ydCgpO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0ga2V5cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBuYW1lID0ga2V5c1tpXTtcbiAgICBpZiAobmFtZSA9PT0gJ251bGwnKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdmFyIGNvdW50ID0gZGF0YVtuYW1lXTtcbiAgICB2YXIgY29sb3IgPSAnIzRENTM2MCc7IC8vIGRhcmsgZ3JleVxuICAgIHZhciBjb25maWcgPSBDb25maWdbc2VjdG9yXVtuYW1lXTtcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICBjb2xvciA9IGNvbmZpZy5jb2xvcjtcbiAgICB9XG4gICAgdmFyIGRhdGFPYmogPSB7XG4gICAgICBkYXRhOiBjb3VudCxcbiAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgIGxhYmVsOiBuYW1lLnJlcGxhY2UoL1xcLy9nLCAnIC8gJylcbiAgICB9O1xuICAgIGZsb3REYXRhLnB1c2goZGF0YU9iaik7XG4gIH1cbiAgcmV0dXJuIGZsb3REYXRhO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRQaWVGbG90RGF0YVJhbmRDb2xvcihkYXRhKSB7XG4gIHZhciBmbG90RGF0YSA9IFtdO1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpLnNvcnQoKTtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGtleXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgbmFtZSA9IGtleXNbaV07XG4gICAgaWYgKG5hbWUgPT09ICdudWxsJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHZhciB0eXBlQ291bnQgPSBkYXRhW25hbWVdO1xuICAgIHZhciBjb2xvciA9IGRlZmF1bHRQYWxldHRlW2ldO1xuXG4gICAgdmFyIGRhdGFPYmogPSB7XG4gICAgICBkYXRhOiB0eXBlQ291bnQsXG4gICAgICBjb2xvcjogY29sb3IsXG4gICAgICBsYWJlbDogbmFtZS5yZXBsYWNlKC9cXC8vZywgJyAvICcpXG4gICAgfTtcbiAgICBmbG90RGF0YS5wdXNoKGRhdGFPYmopO1xuICB9XG4gIHJldHVybiBmbG90RGF0YTtcbn1cblxuZnVuY3Rpb24gcGllRm9ybWF0dGVyKGxhYmVsLCBzZXJpZXMpIHtcbiAgaWYgKGxhYmVsLmxlbmd0aCA+IDEwKSB7XG4gICAgdmFyIHdvcmRzID0gbGFiZWwuc3BsaXQoJyAnKTtcbiAgICBpZiAod29yZHNbMl0pIHtcbiAgICAgIHdvcmRzWzFdID0gd29yZHNbMV0gKyAnPGJyLz4nO1xuICAgICAgbGFiZWwgPSB3b3Jkcy5qb2luKCcgJyk7XG4gICAgfVxuICB9XG4gIGlmIChzZXJpZXMucGVyY2VudCA8IDE1KSB7XG4gICAgcmV0dXJuIFwiPGRpdiBzdHlsZT0nZm9udC1zaXplOjhwdDsgdGV4dC1hbGlnbjpjZW50ZXI7IHBhZGRpbmc6MnB4OyBjb2xvcjp3aGl0ZTsnPlwiICsgTWF0aC5yb3VuZChzZXJpZXMucGVyY2VudCkgKyBcIiU8L2Rpdj5cIjtcbiAgfVxuICByZXR1cm4gXCI8ZGl2IHN0eWxlPSdmb250LXNpemU6OHB0OyB0ZXh0LWFsaWduOmNlbnRlcjsgcGFkZGluZzoycHg7IGNvbG9yOndoaXRlOyc+XCIgKyBsYWJlbCArIFwiPGJyLz5cIiArIE1hdGgucm91bmQoc2VyaWVzLnBlcmNlbnQpICsgXCIlPC9kaXY+XCI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxhYmVsT2JqZWN0KCkge1xuICByZXR1cm4ge1xuICAgIHNob3c6IHRydWUsXG4gICAgcmFkaXVzOiAwLjYsXG4gICAgZm9ybWF0dGVyOiBwaWVGb3JtYXR0ZXIsXG4gICAgdGhyZXNob2xkOiAwLjA4LFxuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZzcFR5cGVzUGllKHR5cGUpIHtcbiAgdmFyIGZsb3REYXRhID0gZm9ybWF0UGllRmxvdERhdGEodHlwZSwgJ2ZzcCcpO1xuXG4gIGlmIChmbG90RGF0YS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAkLnBsb3QoJyNmc3AtdHlwZXMtcGllJywgZmxvdERhdGEsIHtcbiAgICBzZXJpZXM6IHtcbiAgICAgIHBpZToge1xuICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICByYWRpdXM6IDEsXG4gICAgICAgIGxhYmVsOiBjcmVhdGVMYWJlbE9iamVjdCgpXG4gICAgICB9XG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICBob3ZlcmFibGU6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIGxlZ2VuZDoge1xuICAgICAgc2hvdzogdHJ1ZVxuICAgIH1cbiAgfSk7XG5cbiAgJCgnI2ZzcC10eXBlcy1waWUnKS5iaW5kKFwicGxvdGhvdmVyXCIsIGZ1bmN0aW9uIChldmVudCwgcG9zLCBpdGVtKSB7XG4gICAgdG9vbHRpcFBpZShwb3MsIGl0ZW0pO1xuICB9KTtcblxufVxuXG5mdW5jdGlvbiBmc3BBc3NvY0J1c1BpZShidXMpIHtcbiAgdmFyIGZsb3REYXRhID0gZm9ybWF0UGllRmxvdERhdGFSYW5kQ29sb3IoYnVzKTtcblxuICBpZiAoZmxvdERhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgJC5wbG90KCcjZnNwLWFzc29jLWJ1cy1waWUnLCBmbG90RGF0YSwge1xuICAgIHNlcmllczoge1xuICAgICAgcGllOiB7XG4gICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgIHJhZGl1czogMSxcbiAgICAgICAgbGFiZWw6IGNyZWF0ZUxhYmVsT2JqZWN0KClcbiAgICAgIH1cbiAgICB9LFxuICAgIGdyaWQ6IHtcbiAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgbGVnZW5kOiB7XG4gICAgICBzaG93OiB0cnVlXG4gICAgfVxuICB9KTtcblxuICAkKCcjZnNwLWFzc29jLWJ1cy1waWUnKS5iaW5kKFwicGxvdGhvdmVyXCIsIGZ1bmN0aW9uIChldmVudCwgcG9zLCBpdGVtKSB7XG4gICAgdG9vbHRpcFBpZShwb3MsIGl0ZW0pO1xuICB9KTtcblxufVxuXG5mdW5jdGlvbiBmc3BBc3NvY0JhbmtQaWUoYmFuaykge1xuICB2YXIgZmxvdERhdGEgPSBmb3JtYXRQaWVGbG90RGF0YVJhbmRDb2xvcihiYW5rKTtcblxuICBpZiAoZmxvdERhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgJC5wbG90KCcjZnNwLWFzc29jLWJhbmstcGllJywgZmxvdERhdGEsIHtcbiAgICBzZXJpZXM6IHtcbiAgICAgIHBpZToge1xuICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICByYWRpdXM6IDEsXG4gICAgICAgIGxhYmVsOiBjcmVhdGVMYWJlbE9iamVjdCgpXG4gICAgICB9XG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICBob3ZlcmFibGU6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIGxlZ2VuZDoge1xuICAgICAgc2hvdzogdHJ1ZVxuICAgIH1cbiAgfSk7XG5cbiAgJCgnI2ZzcC1hc3NvYy1iYW5rLXBpZScpLmJpbmQoXCJwbG90aG92ZXJcIiwgZnVuY3Rpb24gKGV2ZW50LCBwb3MsIGl0ZW0pIHtcbiAgICB0b29sdGlwUGllKHBvcywgaXRlbSk7XG4gIH0pO1xuXG59XG5cblxuLyoqXG4gKiBMSUJSQVJZXG4gKi9cbkNoYXJ0cy5jcmVhdGVMaWJyYXJ5ID0gZnVuY3Rpb24obGlicmFyeSkge1xuICBsaWJyYXJ5VHlwZXNCYXIobGlicmFyeS50eXBlKTtcbiAgbGlicmFyeVR5cGVzUGllKGxpYnJhcnkudHlwZSk7XG59O1xuXG5mdW5jdGlvbiBsaWJyYXJ5VHlwZXNCYXIodHlwZSkge1xuICB2YXIgZm9ybWF0ID0gZm9ybWF0QmFyRmxvdERhdGEodHlwZSwgJ2xpYnJhcnknKTtcbiAgdmFyIGZsb3REYXRhID0gZm9ybWF0LmZsb3REYXRhO1xuICB2YXIgdGlja3MgPSBmb3JtYXQudGlja3M7XG5cbiAgaWYgKGZsb3REYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICQoJyNsaWJyYXJ5LXR5cGVzLWJhcicpLmh0bWwoJzxoMj5ObyBEYXRhIEF2YWlsYWJsZTwvaDI+Jyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgJC5wbG90KFwiI2xpYnJhcnktdHlwZXMtYmFyXCIsIGZsb3REYXRhLCB7XG4gICAgc2VyaWVzOiB7XG4gICAgICBiYXJzOiB7XG4gICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgIGJhcldpZHRoOiAwLjYsXG4gICAgICAgIGFsaWduOiBcImNlbnRlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICBob3ZlcmFibGU6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIHhheGlzOiB7XG4gICAgICB0aWNrczogdGlja3NcbiAgICB9XG4gIH0pO1xuXG4gICQoJyNsaWJyYXJ5LXR5cGVzLWJhcicpLmJpbmQoXCJwbG90aG92ZXJcIiwgZnVuY3Rpb24gKGV2ZW50LCBwb3MsIGl0ZW0pIHtcbiAgICB0b29sdGlwKHBvcywgaXRlbSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsaWJyYXJ5VHlwZXNQaWUodHlwZSkge1xuICB2YXIgZmxvdERhdGEgPSBmb3JtYXRQaWVGbG90RGF0YSh0eXBlLCAnbGlicmFyeScpO1xuXG4gIGlmIChmbG90RGF0YS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAkLnBsb3QoJyNsaWJyYXJ5LXR5cGVzLXBpZScsIGZsb3REYXRhLCB7XG4gICAgc2VyaWVzOiB7XG4gICAgICBwaWU6IHtcbiAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgcmFkaXVzOiAxLFxuICAgICAgICBsYWJlbDogY3JlYXRlTGFiZWxPYmplY3QoKVxuICAgICAgfVxuICAgIH0sXG4gICAgZ3JpZDoge1xuICAgICAgaG92ZXJhYmxlOiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIHNob3c6IHRydWVcbiAgICB9XG4gIH0pO1xuXG4gICQoJyNsaWJyYXJ5LXR5cGVzLXBpZScpLmJpbmQoXCJwbG90aG92ZXJcIiwgZnVuY3Rpb24gKGV2ZW50LCBwb3MsIGl0ZW0pIHtcbiAgICB0b29sdGlwUGllKHBvcywgaXRlbSk7XG4gIH0pO1xuXG59XG5cbi8qKlxuICogSEVBTFRIXG4gKi9cbkNoYXJ0cy5jcmVhdGVIZWFsdGggPSBmdW5jdGlvbihoZWFsdGgpIHtcbiAgaGVhbHRoVHlwZXNCYXIoaGVhbHRoLnR5cGUpO1xuICBoZWFsdGhUeXBlc1BpZShoZWFsdGgudHlwZSk7XG59O1xuXG5mdW5jdGlvbiBoZWFsdGhUeXBlc0Jhcih0eXBlKSB7XG4gIHZhciBmb3JtYXQgPSBmb3JtYXRCYXJGbG90RGF0YSh0eXBlLCAnaGVhbHRoJyk7XG4gIHZhciBmbG90RGF0YSA9IGZvcm1hdC5mbG90RGF0YTtcbiAgdmFyIHRpY2tzID0gZm9ybWF0LnRpY2tzO1xuXG4gIGlmIChmbG90RGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAkKCcjaGVhbHRoLXR5cGVzLWJhcicpLmh0bWwoJzxoMj5ObyBEYXRhIEF2YWlsYWJsZTwvaDI+Jyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgJC5wbG90KFwiI2hlYWx0aC10eXBlcy1iYXJcIiwgZmxvdERhdGEsIHtcbiAgICBzZXJpZXM6IHtcbiAgICAgIGJhcnM6IHtcbiAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgYmFyV2lkdGg6IDAuNixcbiAgICAgICAgYWxpZ246IFwiY2VudGVyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGdyaWQ6IHtcbiAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgeGF4aXM6IHtcbiAgICAgIHRpY2tzOiB0aWNrc1xuICAgIH1cbiAgfSk7XG5cbiAgJCgnI2hlYWx0aC10eXBlcy1iYXInKS5iaW5kKFwicGxvdGhvdmVyXCIsIGZ1bmN0aW9uIChldmVudCwgcG9zLCBpdGVtKSB7XG4gICAgdG9vbHRpcChwb3MsIGl0ZW0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGVhbHRoVHlwZXNQaWUodHlwZSkge1xuICB2YXIgZmxvdERhdGEgPSBmb3JtYXRQaWVGbG90RGF0YSh0eXBlLCAnaGVhbHRoJyk7XG5cbiAgaWYgKGZsb3REYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gICQucGxvdCgnI2hlYWx0aC10eXBlcy1waWUnLCBmbG90RGF0YSwge1xuICAgIHNlcmllczoge1xuICAgICAgcGllOiB7XG4gICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgIHJhZGl1czogMSxcbiAgICAgICAgbGFiZWw6IGNyZWF0ZUxhYmVsT2JqZWN0KClcbiAgICAgIH1cbiAgICB9LFxuICAgIGdyaWQ6IHtcbiAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgbGVnZW5kOiB7XG4gICAgICBzaG93OiB0cnVlXG4gICAgfVxuICB9KTtcblxuICAkKCcjaGVhbHRoLXR5cGVzLXBpZScpLmJpbmQoXCJwbG90aG92ZXJcIiwgZnVuY3Rpb24gKGV2ZW50LCBwb3MsIGl0ZW0pIHtcbiAgICB0b29sdGlwUGllKHBvcywgaXRlbSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEFHUklDVUxUVVJFXG4gKi9cbkNoYXJ0cy5jcmVhdGVBZ3JpY3VsdHVyZSA9IGZ1bmN0aW9uKGFncmljdWx0dXJlKSB7XG4gIGFncmljdWx0dXJlVHlwZXNCYXIoYWdyaWN1bHR1cmUudHlwZSk7XG4gIGFncmljdWx0dXJlVHlwZXNQaWUoYWdyaWN1bHR1cmUudHlwZSk7XG4gIGFncmljdWx0dXJlU2VlZE11bHRpcGxpZXJCYXIoYWdyaWN1bHR1cmUuc2VlZF9tdWxpcGxpZXIpO1xuICBhZ3JpY3VsdHVyZVNlZWRNdWx0aXBsaWVyUGllKGFncmljdWx0dXJlLnNlZWRfbXVsaXBsaWVyKTtcbn07XG5cbmZ1bmN0aW9uIGFncmljdWx0dXJlVHlwZXNCYXIodHlwZSkge1xuICB2YXIgZm9ybWF0ID0gZm9ybWF0QmFyRmxvdERhdGEodHlwZSwgJ2FncmljdWx0dXJlJyk7XG4gIHZhciBmbG90RGF0YSA9IGZvcm1hdC5mbG90RGF0YTtcbiAgdmFyIHRpY2tzID0gZm9ybWF0LnRpY2tzO1xuXG4gIGlmIChmbG90RGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAkKCcjYWdyaWN1bHR1cmUtdHlwZXMtYmFyJykuaHRtbCgnPGgyPk5vIERhdGEgQXZhaWxhYmxlPC9oMj4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAkLnBsb3QoXCIjYWdyaWN1bHR1cmUtdHlwZXMtYmFyXCIsIGZsb3REYXRhLCB7XG4gICAgc2VyaWVzOiB7XG4gICAgICBiYXJzOiB7XG4gICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgIGJhcldpZHRoOiAwLjYsXG4gICAgICAgIGFsaWduOiBcImNlbnRlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICBob3ZlcmFibGU6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIHhheGlzOiB7XG4gICAgICB0aWNrczogdGlja3NcbiAgICB9XG4gIH0pO1xuXG4gICQoJyNhZ3JpY3VsdHVyZS10eXBlcy1iYXInKS5iaW5kKFwicGxvdGhvdmVyXCIsIGZ1bmN0aW9uIChldmVudCwgcG9zLCBpdGVtKSB7XG4gICAgdG9vbHRpcChwb3MsIGl0ZW0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWdyaWN1bHR1cmVUeXBlc1BpZSh0eXBlKSB7XG4gIHZhciBmbG90RGF0YSA9IGZvcm1hdFBpZUZsb3REYXRhKHR5cGUsICdhZ3JpY3VsdHVyZScpO1xuXG4gIGlmIChmbG90RGF0YS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAkLnBsb3QoJyNhZ3JpY3VsdHVyZS10eXBlcy1waWUnLCBmbG90RGF0YSwge1xuICAgIHNlcmllczoge1xuICAgICAgcGllOiB7XG4gICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgIHJhZGl1czogMSxcbiAgICAgICAgbGFiZWw6IGNyZWF0ZUxhYmVsT2JqZWN0KClcbiAgICAgIH1cbiAgICB9LFxuICAgIGdyaWQ6IHtcbiAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgbGVnZW5kOiB7XG4gICAgICBzaG93OiB0cnVlXG4gICAgfVxuICB9KTtcblxuICAkKCcjYWdyaWN1bHR1cmUtdHlwZXMtcGllJykuYmluZChcInBsb3Rob3ZlclwiLCBmdW5jdGlvbiAoZXZlbnQsIHBvcywgaXRlbSkge1xuICAgIHRvb2x0aXBQaWUocG9zLCBpdGVtKTtcbiAgfSk7XG5cbn1cblxuZnVuY3Rpb24gYWdyaWN1bHR1cmVTZWVkTXVsdGlwbGllckJhcihtdWx0aXBsaWVyKSB7XG4gIHZhciBmb3JtYXQgPSBmb3JtYXRCYXJGbG90RGF0YVJhbmRDb2xvcihtdWx0aXBsaWVyLCAnYWdyaWN1bHR1cmUnKTtcbiAgdmFyIGZsb3REYXRhID0gZm9ybWF0LmZsb3REYXRhO1xuICB2YXIgdGlja3MgPSBmb3JtYXQudGlja3M7XG5cbiAgaWYgKGZsb3REYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICQoJyNhZ3JpY3VsdHVyZS1zZWVkX211bGlwbGllci1iYXInKS5odG1sKCc8aDI+Tm8gRGF0YSBBdmFpbGFibGU8L2gyPicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gICQucGxvdChcIiNhZ3JpY3VsdHVyZS1zZWVkX211bGlwbGllci1iYXJcIiwgZmxvdERhdGEsIHtcbiAgICBzZXJpZXM6IHtcbiAgICAgIGJhcnM6IHtcbiAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgYmFyV2lkdGg6IDAuNixcbiAgICAgICAgYWxpZ246IFwiY2VudGVyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGdyaWQ6IHtcbiAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgeGF4aXM6IHtcbiAgICAgIHRpY2tzOiB0aWNrc1xuICAgIH1cbiAgfSk7XG5cbiAgJCgnI2FncmljdWx0dXJlLXNlZWRfbXVsaXBsaWVyLWJhcicpLmJpbmQoXCJwbG90aG92ZXJcIiwgZnVuY3Rpb24gKGV2ZW50LCBwb3MsIGl0ZW0pIHtcbiAgICB0b29sdGlwKHBvcywgaXRlbSk7XG4gIH0pO1xuXG59XG5cbmZ1bmN0aW9uIGFncmljdWx0dXJlU2VlZE11bHRpcGxpZXJQaWUobXVsdGlwbGllcikge1xuICB2YXIgZmxvdERhdGEgPSBmb3JtYXRQaWVGbG90RGF0YVJhbmRDb2xvcihtdWx0aXBsaWVyLCAnYWdyaWN1bHR1cmUnKTtcblxuICBpZiAoZmxvdERhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgJC5wbG90KCcjYWdyaWN1bHR1cmUtc2VlZF9tdWxpcGxpZXItcGllJywgZmxvdERhdGEsIHtcbiAgICBzZXJpZXM6IHtcbiAgICAgIHBpZToge1xuICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICByYWRpdXM6IDEsXG4gICAgICAgIGxhYmVsOiBjcmVhdGVMYWJlbE9iamVjdCgpXG4gICAgICB9XG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICBob3ZlcmFibGU6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIGxlZ2VuZDoge1xuICAgICAgc2hvdzogdHJ1ZVxuICAgIH1cbiAgfSk7XG5cbiAgJCgnI2FncmljdWx0dXJlLXNlZWRfbXVsaXBsaWVyLXBpZScpLmJpbmQoXCJwbG90aG92ZXJcIiwgZnVuY3Rpb24gKGV2ZW50LCBwb3MsIGl0ZW0pIHtcbiAgICB0b29sdGlwUGllKHBvcywgaXRlbSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b29sdGlwKHBvcywgaXRlbSkge1xuICBpZiAoaXRlbSkge1xuICAgIHZhciBjb3VudCA9IGl0ZW0uZGF0YXBvaW50WzFdO1xuICAgICQoXCIjdG9vbHRpcFwiKS5odG1sKCc8ZGl2IGNsYXNzPVwic3VtbWFyeS1ibHVlLW51bWJlclwiPicrbnVtYmVyV2l0aENvbW1hcyhjb3VudCkrJzwvZGl2PicraXRlbS5zZXJpZXMueGF4aXMudGlja3NbaXRlbS5zZXJpZXNJbmRleF0ubGFiZWwpXG4gICAgICAgIC5jc3Moe3RvcDogcG9zLnBhZ2VZLTMwLCBsZWZ0OiBwb3MucGFnZVgrMTB9KVxuICAgICAgICAuZmFkZUluKDIwMCk7XG4gIH0gZWxzZSB7XG4gICAgJChcIiN0b29sdGlwXCIpLmhpZGUoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b29sdGlwUGllKHBvcywgaXRlbSkge1xuICBpZiAoaXRlbSkge1xuICAgIHZhciBjb3VudCA9IGl0ZW0uZGF0YXBvaW50WzFdWzBdWzFdO1xuICAgICQoXCIjdG9vbHRpcFwiKS5odG1sKCc8ZGl2IGNsYXNzPVwic3VtbWFyeS1ibHVlLW51bWJlclwiPicrbnVtYmVyV2l0aENvbW1hcyhjb3VudCkrJzwvZGl2PicraXRlbS5zZXJpZXMubGFiZWwpXG4gICAgICAgIC5jc3Moe3RvcDogcG9zLnBhZ2VZLTMwLCBsZWZ0OiBwb3MucGFnZVgrMTB9KVxuICAgICAgICAuZmFkZUluKDIwMCk7XG4gIH0gZWxzZSB7XG4gICAgJChcIiN0b29sdGlwXCIpLmhpZGUoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBudW1iZXJXaXRoQ29tbWFzKHgpIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAndW5kZWZpbmVkJyB8fCB4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgcmV0dXJuIHgudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hhcnRzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZzcDoge1xuICAgICdPZmZzaXRlIEFUTXMnOiB7XG4gICAgICBjb2xvcjogJyNhNGM3OGMnLFxuICAgICAgaW5mb0xhYmVsOiAnT2Zmc2l0ZSBBVE0nLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA2XG4gICAgfSxcbiAgICAnQmFuayBCcmFuY2hlcyc6IHtcbiAgICAgIGNvbG9yOiAnIzk3N0MwMCcsXG4gICAgICBpbmZvTGFiZWw6ICdCYW5rIEJyYW5jaCcsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDVcbiAgICB9LFxuICAgICdNRklzJzoge1xuICAgICAgY29sb3I6ICcjOTc3YzAwJyxcbiAgICAgIGluZm9MYWJlbDogJ01GSScsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDdcbiAgICB9LFxuICAgICdTQUNDT3MnOiB7XG4gICAgICBjb2xvcjogJyNjZjhhNTcnLFxuICAgICAgaW5mb0xhYmVsOiAnU0FDQ08nLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiAxMFxuICAgIH0sXG4gICAgJ01vYmlsZSBNb25leSBBZ2VudCc6IHtcbiAgICAgIGNvbG9yOiAnIzhDQjdDNycsXG4gICAgICBpbmZvTGFiZWw6ICdNb2JpbGUgTW9uZXkgQWdlbnQnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiAtMVxuICAgIH0sXG4gICAgJ01ESXMnOiB7XG4gICAgICBjb2xvcjogJyM4MjVEOTknLFxuICAgICAgaW5mb0xhYmVsOiAnTURJJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogNlxuICAgIH0sXG4gICAgJ0NyZWRpdCBJbnN0aXR1dGlvbic6IHtcbiAgICAgIGNvbG9yOiAnIzZDQTc2QicsXG4gICAgICBpbmZvTGFiZWw6ICdDcmVkaXQgSW5zdGl0dXRpb24nLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA1XG4gICAgfSxcbiAgICAnTUZCcyc6IHtcbiAgICAgIGNvbG9yOiAnIzgyNUQ5OScsXG4gICAgICBpbmZvTGFiZWw6ICdNRkInLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA3XG4gICAgfSxcbiAgICAnTW90b3IgUGFya3MnOiB7XG4gICAgICBjb2xvcjogJyNiZDg1YjMnLFxuICAgICAgaW5mb0xhYmVsOiAnTW90b3IgUGFya3MnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA3XG4gICAgfSxcbiAgICAnTW9iaWxlIE5ldHdvcmsgT3BlcmF0b3IgT3V0bGV0cyc6IHtcbiAgICAgIGNvbG9yOiAnI2EyYTJhMicsXG4gICAgICBpbmZvTGFiZWw6ICdNb2JpbGUgTmV0d29yayBPcGVyYXRvciBPdXRsZXRzJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogMFxuICAgIH0sXG4gICAgJ1Bvc3QgT2ZmaWNlcyc6IHtcbiAgICAgIGNvbG9yOiAnI0ZGRkYwMCcsXG4gICAgICBpbmZvTGFiZWw6ICdQb3N0IE9mZmljZXMnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA0XG4gICAgfSxcbiAgICAnUG9zdCBPZmZpY2UnOiB7XG4gICAgICBjb2xvcjogJyM4MGFkN2InLFxuICAgICAgaW5mb0xhYmVsOiAnUG9zdCBPZmZpY2VzJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogNlxuICAgIH0sXG4gICAgJ0J1cyBTdGFuZCc6IHtcbiAgICAgIGNvbG9yOiAnIzgwYWQ3YicsXG4gICAgICBpbmZvTGFiZWw6ICdCdXMgU3RhbmRzJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogNlxuICAgIH0sXG4gICAgJ0J1cyBTdGFuZHMnOiB7XG4gICAgICBjb2xvcjogJyM4MGFkN2InLFxuICAgICAgaW5mb0xhYmVsOiAnQnVzIFN0YW5kcycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDZcbiAgICB9LFxuXG4gICAgLy9LZW55YVxuICAgICdJbnN1cmFuY2UgUHJvdmlkZXJzJzoge1xuICAgICAgY29sb3I6ICcjMzA4NkFCJyxcbiAgICAgIGluZm9MYWJlbDogJ0luc3VyYW5jZSBwcm92aWRlcnMnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA2XG4gICAgfSxcbiAgICAnTW9uZXkgVHJhbnNmZXIgU2VydmljZSc6IHtcbiAgICAgIGNvbG9yOiAnIzk3N0MwMCcsXG4gICAgICBpbmZvTGFiZWw6ICdNb25leSBUcmFuc2ZlciBTZXJ2aWNlJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogNlxuICAgIH0sXG4gICAgJ0RldiBGaW5hbmNlJzoge1xuICAgICAgY29sb3I6ICcjOUIyNDJEJyxcbiAgICAgIGluZm9MYWJlbDogJ0RldiBGaW5hbmNlJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogNlxuICAgIH0sXG4gICAgJ0ZvcmV4IEJ1cmVhdXMnOiB7XG4gICAgICBjb2xvcjogJyNjZjhhNTcnLFxuICAgICAgaW5mb0xhYmVsOiAnRm9yZXggQnVyZWF1cycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDZcbiAgICB9LFxuICAgICdDYXAgTWFya2V0cyc6IHtcbiAgICAgIGNvbG9yOiAnIzgyNUQ5OScsXG4gICAgICBpbmZvTGFiZWw6ICdDYXAgTWFya2V0cycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDZcbiAgICB9LFxuICAgICdQZW5zaW9uIFByb3ZpZGVycyc6IHtcbiAgICAgIGNvbG9yOiAnI2EyYTJhMicsXG4gICAgICBpbmZvTGFiZWw6ICdQZW5zaW9uIHByb3ZpZGVycycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDZcbiAgICB9LFxuICAgICdQdXJjaGFzZSBMZWFzZSBGYWN0b3JpbmcnOiB7XG4gICAgICBjb2xvcjogJyM4MGFkN2InLFxuICAgICAgaW5mb0xhYmVsOiAnUHVyY2hhc2UgTGVhc2UgRmFjdG9yaW5nJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogNlxuICAgIH0sXG4gICAgJ0JhbmsgQWdlbnQnOiB7XG4gICAgICBjb2xvcjogJyM4MGFkN2InLFxuICAgICAgaW5mb0xhYmVsOiAnQmFuayBBZ2VudCcsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDZcbiAgICB9LFxuICAgICdCYW5rIGFuZCBNb3J0Z2FnZSc6IHtcbiAgICAgIGNvbG9yOiAnIzgwYWQ3YicsXG4gICAgICBpbmZvTGFiZWw6ICdCYW5rcyBhbmQgTW9ydGdhZ2UnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA2XG4gICAgfSxcbiAgICAnQ29tbWVyY2lhbCBCYW5rJzoge1xuICAgICAgY29sb3I6ICcjODBhZDdiJyxcbiAgICAgIGluZm9MYWJlbDogJ0NvbW1lcmNpYWwgQmFuaycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDNcbiAgICB9LFxuXG4gICAgJ1Bvc3RCYW5rJzoge1xuICAgICAgY29sb3I6ICcjYmQ4NWIzJyxcbiAgICAgIGluZm9MYWJlbDogJ1Bvc3QgQmFuaycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDZcbiAgICB9LFxuXG4gICAgLy9OaWdlcmlhIE5ldyBQb3N0IE9mZmljZXNcbiAgICAnTklQT1NUIFBvc3QgT2ZmaWNlJzoge1xuICAgICAgY29sb3I6ICcjODBhZDdiJyxcbiAgICAgIGluZm9MYWJlbDogJ05JUE9TVCBQb3N0IE9mZmljZXMnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA2XG4gICAgfSxcbiAgICAnTklQT1NUIFBvc3QgU2hvcCc6IHtcbiAgICAgIGNvbG9yOiAnIzgwYWQ3YicsXG4gICAgICBpbmZvTGFiZWw6ICdOSVBPU1QgUG9zdCBTaG9wcycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDZcbiAgICB9LFxuICAgICdOSVBPU1QgUG9zdGFsIEFnZW5jeSc6IHtcbiAgICAgIGNvbG9yOiAnIzgwYWQ3YicsXG4gICAgICBpbmZvTGFiZWw6ICdOSVBPU1QgUG9zdGFsIEFnZW5jaWVzJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogNlxuICAgIH0sXG5cbiAgICAvL0luZGlhXG4gICAgJ1Bvc3RhbCBPdXRsZXRzJzoge1xuICAgICAgY29sb3I6ICcjY2U2YjI5JyxcbiAgICAgIGluZm9MYWJlbDogJ1Bvc3RhbCBPdXRsZXRzJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogM1xuICAgIH0sXG4gICAgJ0NvbW1lcmNpYWwgQmFua3MnOiB7XG4gICAgICBjb2xvcjogJyMzMDg2YWInLFxuICAgICAgaW5mb0xhYmVsOiAnQ29tbWVyY2lhbCBCYW5rcycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDJcbiAgICB9LFxuICAgICdCYW5rIEN1c3RvbWVyIFNlcnZpY2UgUG9pbnRzJzoge1xuICAgICAgY29sb3I6ICcjOWIyNDJkJyxcbiAgICAgIGluZm9MYWJlbDogJ0JhbmsgQ3VzdG9tZXIgU2VydmljZSBQb2ludHMnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA0XG4gICAgfVxuICB9LFxuXG4gIGxpYnJhcnk6IHtcbiAgICAnRGlzdHJpY3QnOiB7XG4gICAgICBjb2xvcjogJyM5YjI0MmQnLFxuICAgICAgaW5mb0xhYmVsOiAnRGlzdHJpY3QnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA2XG4gICAgfSxcbiAgICAnUHJpdmF0ZSBMaWJyYXJ5Jzoge1xuICAgICAgY29sb3I6ICcjMzA4NmFiJyxcbiAgICAgIGluZm9MYWJlbDogJ1ByaXZhdGUgTGlicmFyeScsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDVcbiAgICB9LFxuICAgICdQdWJsaWMgTGlicmFyeSc6IHtcbiAgICAgIGNvbG9yOiAnIzk3N2MwMCcsXG4gICAgICBpbmZvTGFiZWw6ICdQdWJsaWMgTGlicmFyeScsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDdcbiAgICB9LFxuICAgICdWaWxsYWdlJzoge1xuICAgICAgY29sb3I6ICcjYTRjNzhjJyxcbiAgICAgIGluZm9MYWJlbDogJ1ZpbGxhZ2UnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA0XG4gICAgfVxuICB9LFxuXG4gIGhlYWx0aDoge1xuICAgICdBZGRpdGlvbmFsIFByaW1hcnkgSGVhbHRoIENlbnRyZXMgKEFQSEMpJzoge1xuICAgICAgY29sb3I6ICcjOWIyNDJkJyxcbiAgICAgIGluZm9MYWJlbDogJ0FkZGl0aW9uYWwgUHJpbWFyeSBIZWFsdGggQ2VudHJlcyAoQVBIQyknLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA2XG4gICAgfSxcbiAgICAnQU5NIG9yIERpc3RyaWN0IFRyYWluaW5nIENlbnRyZXMnOiB7XG4gICAgICBjb2xvcjogJyMzMDg2YWInLFxuICAgICAgaW5mb0xhYmVsOiAnQU5NIG9yIERpc3RyaWN0IFRyYWluaW5nIENlbnRyZXMnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA1XG4gICAgfSxcbiAgICAnQXBwcm92ZWQgTnVyc2luZyBUcmFpbmluZyBDZW50cmVzIChQcml2YXRlIFNlY3RvciknOiB7XG4gICAgICBjb2xvcjogJyM5NzdjMDAnLFxuICAgICAgaW5mb0xhYmVsOiAnQXBwcm92ZWQgTnVyc2luZyBUcmFpbmluZyBDZW50cmVzIChQcml2YXRlIFNlY3RvciknLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA3XG4gICAgfSxcbiAgICAnQ29tbXVuaXR5IEhlYWx0aCBDZW50cmUgKENIQykvRmlyc3QgUmVmZXJyYWwgVW5pdHMnOiB7XG4gICAgICBjb2xvcjogJyNkNWNiOTgnLFxuICAgICAgaW5mb0xhYmVsOiAnQ29tbXVuaXR5IEhlYWx0aCBDZW50cmUgKENIQykvRmlyc3QgUmVmZXJyYWwgVW5pdHMnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA0XG4gICAgfSxcbiAgICAnRGlzdHJpY3QgSG9zcGl0YWxzJzoge1xuICAgICAgY29sb3I6ICcjY2U2YjI5JyxcbiAgICAgIGluZm9MYWJlbDogJ0Rpc3RyaWN0IEhvc3BpdGFscycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDVcbiAgICB9LFxuICAgICdNZWRpY2FsIENvbGxlZ2VzIGFuZCBIb3NwaXRhbHMnOiB7XG4gICAgICBjb2xvcjogJyM1OTQ1MmEnLFxuICAgICAgaW5mb0xhYmVsOiAnTWVkaWNhbCBDb2xsZWdlcyBhbmQgSG9zcGl0YWxzJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogN1xuICAgIH0sXG4gICAgJ1ByaW1hcnkgSGVhbHRoIENlbnRyZSAoUEhDKSc6IHtcbiAgICAgIGNvbG9yOiAnIzhjYjdjNycsXG4gICAgICBpbmZvTGFiZWw6ICdQcmltYXJ5IEhlYWx0aCBDZW50cmUgKFBIQyknLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA0XG4gICAgfSxcbiAgICAnUHJpdmF0ZSBob3NwaXRhbHMgYW5kIGNsaW5pY3MnOiB7XG4gICAgICBjb2xvcjogJyNkMDk4ZDUnLFxuICAgICAgaW5mb0xhYmVsOiAnUHJpdmF0ZSBob3NwaXRhbHMgYW5kIGNsaW5pY3MnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA1XG4gICAgfSxcbiAgICAnU3ViIERpdmlzaW9uYWwgRGlzdHJpY3QgSG9zcGl0YWxzJzoge1xuICAgICAgY29sb3I6ICcjYTRjNzhjJyxcbiAgICAgIGluZm9MYWJlbDogJ1N1YiBEaXZpc2lvbmFsIERpc3RyaWN0IEhvc3BpdGFscycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDdcbiAgICB9LFxuICAgICdTdWIgSGVhbHRoIENlbnRyZXMnOiB7XG4gICAgICBjb2xvcjogJyNkNTk4OTgnLFxuICAgICAgaW5mb0xhYmVsOiAnU3ViIERpdmlzaW9uYWwgRGlzdHJpY3QgSG9zcGl0YWxzJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogN1xuICAgIH0sXG4gICAgJ051cnNpbmcgU2Nob29scyc6IHtcbiAgICAgIGNvbG9yOiAnIzU2N2Q1NCcsXG4gICAgICBpbmZvTGFiZWw6ICdOdXJzaW5nIFNjaG9vbHMnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA0XG4gICAgfVxuICB9LFxuXG4gIGFncmljdWx0dXJlOiB7XG4gICAgJ0RhaXJ5IFByb2Nlc3NvcnMnOiB7XG4gICAgICBjb2xvcjogJyM5YjI0MmQnLFxuICAgICAgaW5mb0xhYmVsOiAnRGFpcnkgUHJvY2Vzc29ycycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDZcbiAgICB9LFxuICAgICdEYXkgb2xkIGNoaWNrIGhhdGNoZXJpZXMnOiB7XG4gICAgICBjb2xvcjogJyMzMDg2YWInLFxuICAgICAgaW5mb0xhYmVsOiAnRGF5IG9sZCBjaGljayBoYXRjaGVyaWVzJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogNVxuICAgIH0sXG4gICAgJ1ByaXZhdGUgc2VjdG9yIEFncmljdWx0dXJhbCBzZXJ2aWNlIHByb3ZpZGVycyc6IHtcbiAgICAgIGNvbG9yOiAnIzk3N2MwMCcsXG4gICAgICBpbmZvTGFiZWw6ICdQcml2YXRlIHNlY3RvciBBZ3JpY3VsdHVyYWwgc2VydmljZSBwcm92aWRlcnMnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA3XG4gICAgfSxcbiAgICAnR292ZXJubWVudCBWZXRzJzoge1xuICAgICAgY29sb3I6ICcjZDVjYjk4JyxcbiAgICAgIGluZm9MYWJlbDogJ0dvdmVybm1lbnQgVmV0cycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDRcbiAgICB9LFxuICAgICdNYXJrZXQgTG9jYXRpb25zJzoge1xuICAgICAgY29sb3I6ICcjY2U2YjI5JyxcbiAgICAgIGluZm9MYWJlbDogJ01hcmtldCBMb2NhdGlvbnMnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA1XG4gICAgfSxcbiAgICAnQWdyby1kZWFsZXJzJzoge1xuICAgICAgY29sb3I6ICcjNTk0NTJhJyxcbiAgICAgIGluZm9MYWJlbDogJ0Fncm8tZGVhbGVycycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDdcbiAgICB9LFxuICAgICdXYXJlaG91c2UvU3RvcmFnZS9BZ2dyZWdhdGlvbiBDZW50cmVzJzoge1xuICAgICAgY29sb3I6ICcjOGNiN2M3JyxcbiAgICAgIGluZm9MYWJlbDogJ1ByaW1hcnkgSGVhbHRoIENlbnRyZSAoUEhDKScsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDRcbiAgICB9LFxuICAgICdEYWlyeSBjaGlsbGluZyBwbGFudHMnOiB7XG4gICAgICBjb2xvcjogJyNkMDk4ZDUnLFxuICAgICAgaW5mb0xhYmVsOiAnRGFpcnkgY2hpbGxpbmcgcGxhbnRzJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogN1xuICAgIH0sXG4gICAgJ1Byb2Nlc3NvcnMvdmFsdWUgYWRkaXRpb24gcG9pbnRzJzoge1xuICAgICAgY29sb3I6ICcjYTRjNzhjJyxcbiAgICAgIGluZm9MYWJlbDogJ1Byb2Nlc3NvcnMvdmFsdWUgYWRkaXRpb24gcG9pbnRzJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogN1xuICAgIH0sXG4gICAgJ0Zhcm1lciBPcmdhbmlzYXRpb25zIGFuZCBDb29wZXJhdGl2ZXMnOiB7XG4gICAgICBjb2xvcjogJyNkNTk4OTgnLFxuICAgICAgaW5mb0xhYmVsOiAnRmFybWVyIE9yZ2FuaXNhdGlvbnMgYW5kIENvb3BlcmF0aXZlcycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDRcbiAgICB9LFxuICAgICdBcnRpZmljaWFsIEluc2VtaW5hdGlvbiBDZW50cmVzJzoge1xuICAgICAgY29sb3I6ICcjNTY3ZDU0JyxcbiAgICAgIGluZm9MYWJlbDogJ1ByaW1hcnkgSGVhbHRoIENlbnRyZSAoUEhDKScsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDRcbiAgICB9LFxuICAgICdOYXRpb25hbC9SZWdpb25hbC9TdGF0ZSBSZXNlYXJjaCBTdGF0aW9ucyc6IHtcbiAgICAgIGNvbG9yOiAnI2I2OTg1ZScsXG4gICAgICBpbmZvTGFiZWw6ICdXYXJlaG91c2UvU3RvcmFnZS9BZ2dyZWdhdGlvbiBDZW50cmVzJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogNVxuICAgIH0sXG4gICAgJ1NlZWQgTXVsdGlwbGllcnMnOiB7XG4gICAgICBjb2xvcjogJyNmZjVkNWQnLFxuICAgICAgaW5mb0xhYmVsOiAnRGFpcnkgY2hpbGxpbmcgcGxhbnRzJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogN1xuICAgIH1cbiAgfVxuXG59O1xuXG4iLCJ2YXIgdmVjdG9yZ2F0b3JPcmlnaW4gPSAnaHR0cDovL3NwYXRpYWxzZXJ2ZXIuc3BhdGlhbGRldi5jb20vZnNwLzIwMTQvJztcblxudmFyIHZlY3RvcmdhdG9yID0ge1xuICBmc3A6IG51bGwsXG4gIGxpYnJhcnk6IG51bGwsXG4gIGhlYWx0aDogbnVsbCxcbiAgYWdyaWN1bHR1cmU6IG51bGxcbn07XG5cblxudmFyIGZldGNoZXMgPSA0O1xuXG5mdW5jdGlvbiBmZXRjaChpZCwgY2IpIHtcbiAgJC5nZXRKU09OKHZlY3RvcmdhdG9yT3JpZ2luICsgJ2ZzcC9hZ2dyZWdhdGlvbnMtZnVsbC8nICsgaWQgKyAnLmpzb24nLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgZGF0YS5hc3NvY19iYW5rID0gZmlsdGVyVG9PdGhlcihkYXRhLmFzc29jX2JhbmssIDEpO1xuICAgIGRhdGEuYXNzb2NfYnVzaW5lc3MgPSBmaWx0ZXJUb090aGVyKGRhdGEuYXNzb2NfYnVzaW5lc3MsIDEpO1xuICAgIHZlY3RvcmdhdG9yLmZzcCA9IGRhdGE7XG4gICAgLS1mZXRjaGVzO1xuICAgIGFqYXhDb21wbGV0ZShjYik7XG4gIH0pO1xuXG4gICQuZ2V0SlNPTih2ZWN0b3JnYXRvck9yaWdpbiArICdsaWJyYXJ5L2FnZ3JlZ2F0aW9ucy1mdWxsLycgKyBpZCArICcuanNvbicsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2ZWN0b3JnYXRvci5saWJyYXJ5ID0gZGF0YTtcbiAgICAtLWZldGNoZXM7XG4gICAgYWpheENvbXBsZXRlKGNiKTtcbiAgfSk7XG5cbiAgJC5nZXRKU09OKHZlY3RvcmdhdG9yT3JpZ2luICsgJ2hlYWx0aC9hZ2dyZWdhdGlvbnMvJyArIGlkICsgJy5qc29uJywgZnVuY3Rpb24oZGF0YSkge1xuICAgIHZlY3RvcmdhdG9yLmhlYWx0aCA9IGRhdGE7XG4gICAgLS1mZXRjaGVzO1xuICAgIGFqYXhDb21wbGV0ZShjYik7XG4gIH0pO1xuXG4gICQuZ2V0SlNPTih2ZWN0b3JnYXRvck9yaWdpbiArICdhZ3JpY3VsdHVyZS9hZ2dyZWdhdGlvbnMvJyArIGlkICsgJy5qc29uJywgZnVuY3Rpb24oZGF0YSkge1xuICAgIHZlY3RvcmdhdG9yLmFncmljdWx0dXJlID0gZGF0YTtcbiAgICAtLWZldGNoZXM7XG4gICAgYWpheENvbXBsZXRlKGNiKTtcbiAgfSk7XG59XG5cblxuZnVuY3Rpb24gYWpheENvbXBsZXRlKGNiKSB7XG4gIGlmIChmZXRjaGVzID4gMCkgcmV0dXJuO1xuICBjYih2ZWN0b3JnYXRvcik7XG59XG5cbmZ1bmN0aW9uIGZpbHRlclRvT3RoZXIob2JqLCBwZXJjZW50Q3V0b2ZmKSB7XG4gIHZhciBmaWx0ZXJlZE9iaiA9IHtcbiAgICBPdGhlcjogMFxuICB9O1xuICB2YXIgdG90YWwgPSAwO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgdG90YWwgKz0gb2JqW2tleV07XG4gIH1cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIHZhciB2YWwgPSBvYmpba2V5XTtcbiAgICB2YXIgcGVyYyA9ICh2YWwgLyB0b3RhbCkgKiAxMDA7XG4gICAgaWYgKHBlcmMgPCBwZXJjZW50Q3V0b2ZmKSB7XG4gICAgICBmaWx0ZXJlZE9iai5PdGhlciArPSB2YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlcmVkT2JqW2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG4gIHJldHVybiBmaWx0ZXJlZE9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZldGNoOiBmZXRjaFxufTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDEwLzE3LzE0LlxuICovXG5kZWJ1ZyA9IHt9O1xuXG52YXIgTWFwID0gcmVxdWlyZSgnLi9tYXAnKTtcbnZhciBDaGFydHMgPSByZXF1aXJlKCcuL2NoYXJ0cycpO1xudmFyIERhdGEgPSByZXF1aXJlKCcuL2RhdGEnKTtcbnZhciBQcmludCA9IHJlcXVpcmUoJy4vcHJpbnQnKTtcblxuZnVuY3Rpb24gZ2V0Um91dGUoKSB7XG4gIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gIHZhciBwYXJhbXMgPSBoYXNoLnNsaWNlKDEpLnNwbGl0KCcmJyk7XG4gIHZhciBwYXJhbU9iaiA9IHt9O1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGFyYW1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIHBhcmFtID0gcGFyYW1zW2ldO1xuICAgIHZhciBwQXJyID0gcGFyYW0uc3BsaXQoJz0nKTtcbiAgICB2YXIga2V5ID0gcEFyclswXTtcbiAgICB2YXIgdmFsID0gcEFyclsxXTtcbiAgICBwYXJhbU9ialtrZXldID0gdmFsO1xuICB9XG4gIHJldHVybiBwYXJhbU9iajtcbn1cblxudmFyIHJvdXRlID0gZ2V0Um91dGUoKTtcbnZhciBkYXRhRmV0Y2hlZCA9IGZhbHNlO1xudmFyIGlkID0gcm91dGUuaWQgfHwgMjQ0MjtcbnZhciBvcmlnaW4gPSByb3V0ZS5vcmlnaW4gfHwgJ2h0dHA6Ly9mc3BtYXBzLmNvbS8nO1xuXG5mdW5jdGlvbiBzZXRBY3RpdmVTZWN0b3JGcm9tUm91dGUocm91dGUpIHtcbiAgaWYgKCFyb3V0ZS5zZWN0b3IpIHJldHVybjtcbiAgJCgnLm5hdi10YWJzIGFbaHJlZj1cIiMnICsgcm91dGUuc2VjdG9yICsgJ1wiXScpLnRhYignc2hvdycpO1xufVxuc2V0QWN0aXZlU2VjdG9yRnJvbVJvdXRlKHJvdXRlKTtcblxudmFyIHRhYnNJbml0aWFsaXplZCA9IHt9O1xuXG5mdW5jdGlvbiBzZXR1cFRhYihzZWN0b3IpIHtcbiAgaWYgKCFkYXRhRmV0Y2hlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAodGFic0luaXRpYWxpemVkW3NlY3Rvcl0pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgc2V0dXBTZWN0b3Ioc2VjdG9yKTtcbiAgdGFic0luaXRpYWxpemVkW3NlY3Rvcl0gPSB0cnVlO1xufVxuXG4kKCdhW2RhdGEtdG9nZ2xlPVwidGFiXCJdJykub24oJ3Nob3duLmJzLnRhYicsIGZ1bmN0aW9uIChlKSB7XG4gIHZhciBzZWN0b3IgPSBlLnRhcmdldC5oYXNoLnNsaWNlKDEpO1xuICBzZXR1cFRhYihzZWN0b3IpO1xufSk7XG5cbnZhciB2ZWN0b3JnYXRvciA9IHtcbiAgZnNwOiBudWxsLFxuICBsaWJyYXJ5OiBudWxsLFxuICBoZWFsdGg6IG51bGwsXG4gIGFncmljdWx0dXJlOiBudWxsXG59O1xuXG5EYXRhLmZldGNoKGlkLCBmdW5jdGlvbihkYXRhKSB7XG4gIGRlYnVnLnZlY3RvcmdhdG9yID0gdmVjdG9yZ2F0b3IgPSBkYXRhO1xuICBkYXRhRmV0Y2hlZCA9IHRydWU7XG4gIHNldHVwTmFtZSgpO1xuICB2YXIgYWN0aXZlU2VjdG9yID0gcm91dGUuc2VjdG9yIHx8ICdmc3AnO1xuICBzZXR1cFRhYihhY3RpdmVTZWN0b3IpO1xufSk7XG5cbmZ1bmN0aW9uIHNldHVwTmFtZSgpIHtcbiAgdmFyIGFkbTEgPSB2ZWN0b3JnYXRvci5mc3AuYWRtMV9uYW1lO1xuICB2YXIgYWRtMiA9IHZlY3RvcmdhdG9yLmZzcC5hZG0yX25hbWU7XG5cbiAgLy8gZGlzdHJpY3RcbiAgaWYgKGFkbTIpIHtcbiAgICB2YXIgdGl0bGUgPSAnSW5kaWEgRGlzdHJpY3QgU3VtbWFyeSc7XG4gICAgJCgnI3BhZ2UtaGVhZGVyJykuaHRtbCh0aXRsZSk7XG4gICAgJCgnLnJlZ2lvbi1uYW1lLWhlYWRlcicpLmh0bWwoYWRtMiArICcsICcgKyBhZG0xKTtcbiAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xuICB9XG4gIC8vIHN0YXRlXG4gIGVsc2Uge1xuICAgIHZhciB0aXRsZSA9ICdJbmRpYSBTdGF0ZSBTdW1tYXJ5JztcbiAgICAkKCcjcGFnZS1oZWFkZXInKS5odG1sKHRpdGxlKTtcbiAgICAkKCcucmVnaW9uLW5hbWUtaGVhZGVyJykuaHRtbChhZG0xKTtcbiAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldHVwU2VjdG9yKHNlY3Rvcikge1xuICBpZiAoc2VjdG9yID09PSAnZnNwJykge1xuICAgIHNldHVwRlNQKCk7XG4gIH1cbiAgaWYgKHNlY3RvciA9PT0gJ2xpYnJhcnknKSB7XG4gICAgc2V0dXBMaWJyYXJ5KCk7XG4gIH1cbiAgaWYgKHNlY3RvciA9PT0gJ2hlYWx0aCcpIHtcbiAgICBzZXR1cEhlYWx0aCgpO1xuICB9XG4gIGlmIChzZWN0b3IgPT09ICdhZ3JpY3VsdHVyZScpIHtcbiAgICBzZXR1cEFncmljdWx0dXJlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0dXBGU1AoKSB7XG4gIE1hcC5pbml0KCdmc3AnLCAnY2ljb3NfMjAxNCcsIHZlY3RvcmdhdG9yLmZzcC5iYm94LCBpZCk7XG4gIHZhciBzZWN0b3JOYW1lID0gJ2ZzcCc7XG4gIHZhciBzZWN0b3IgPSB2ZWN0b3JnYXRvcltzZWN0b3JOYW1lXTtcblxuICAvLyBUb3RhbCBDb3VudFxuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLXRvdGFsLWNvdW50JykuaHRtbChudW1iZXJXaXRoQ29tbWFzKHNlY3Rvci50b3RhbF9jb3VudCkpO1xuXG4gIC8vIFN0YXR1c1xuICB2YXIgc3RhdHVzID0gc2VjdG9yLnN0YXR1cztcbiAgdmFyIGFjdGl2ZSA9IHN0YXR1c1snQWN0aXZlJ10gfHwgMDtcbiAgdmFyIGluYWN0aXZlID0gc3RhdHVzWydOb3QgQWN0aXZlJ10gfHwgMDtcbiAgdmFyIHBlcmNlbnQgPSAoYWN0aXZlIC8gKGFjdGl2ZSArIGluYWN0aXZlKSkgKiAxMDA7XG4gIGlmIChpc05hTihwZXJjZW50KSkge1xuICAgIHBlcmNlbnQgPSAwO1xuICB9XG4gIHZhciAkc3RhdHVzUHJvZ3Jlc3MgPSAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLXN0YXR1cy1wcm9ncmVzcycpO1xuICAkc3RhdHVzUHJvZ3Jlc3MuY3NzKCd3aWR0aCcsIHBlcmNlbnQrJyUnKS5hdHRyKCdhcmlhLXZhbHVlbm93JywgcGVyY2VudCk7XG4gICRzdGF0dXNQcm9ncmVzcy5odG1sKHBlcmNlbnQudG9GaXhlZCgyKSArICclIEFjdGl2ZScpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1hY3RpdmUnKS5odG1sKG51bWJlcldpdGhDb21tYXMoYWN0aXZlKSk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLWluYWN0aXZlJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKGluYWN0aXZlKSk7XG5cbiAgLy8gTGFuZCBVc2VcbiAgdmFyIGxhbmRfdXNlID0gc2VjdG9yLmxhbmRfdXNlO1xuICB2YXIgcGVyY2VudCA9IChsYW5kX3VzZS5VcmJhbiAvIChsYW5kX3VzZS5VcmJhbiArIGxhbmRfdXNlLlJ1cmFsKSkgKiAxMDA7XG4gIGlmIChpc05hTihwZXJjZW50KSkge1xuICAgIHBlcmNlbnQgPSAwO1xuICB9XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctdXJiYW4tcnVyYWwtcHJvZ3Jlc3MnKS5jc3MoJ3dpZHRoJywgcGVyY2VudCsnJScpLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwZXJjZW50KTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy11cmJhbi1ydXJhbC1wcm9ncmVzcycpLmh0bWwocGVyY2VudC50b0ZpeGVkKDIpICsgJyUgVXJiYW4nKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tdXJiYW4nKS5odG1sKG51bWJlcldpdGhDb21tYXMobGFuZF91c2UuVXJiYW4pKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tcnVyYWwnKS5odG1sKG51bWJlcldpdGhDb21tYXMobGFuZF91c2UuUnVyYWwpKTtcblxuICBDaGFydHMuY3JlYXRlRlNQKHNlY3Rvcik7XG59XG5cbmZ1bmN0aW9uIHNldHVwTGlicmFyeSgpIHtcbiAgTWFwLmluaXQoJ2xpYnJhcnknLCAnbGlicmFyeV8yMDE0JywgdmVjdG9yZ2F0b3IubGlicmFyeS5iYm94LCBpZCk7XG4gIHZhciBzZWN0b3JOYW1lID0gJ2xpYnJhcnknO1xuICB2YXIgc2VjdG9yID0gdmVjdG9yZ2F0b3Jbc2VjdG9yTmFtZV07XG5cbiAgLy8gVG90YWwgQ291bnRcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy10b3RhbC1jb3VudCcpLmh0bWwobnVtYmVyV2l0aENvbW1hcyhzZWN0b3IudG90YWxfY291bnQpKTtcblxuICAvLyBJbnRlcm5ldCBBY2Nlc3NcbiAgdmFyIHN0YXR1cyA9IHNlY3Rvci5pbnRlcm5ldDtcbiAgdmFyIGFjdGl2ZSA9IHN0YXR1c1snWWVzJ107XG4gIHZhciBpbmFjdGl2ZSA9IHN0YXR1c1snTm8nXTtcbiAgdmFyIHBlcmNlbnQgPSAoYWN0aXZlIC8gKGFjdGl2ZSArIGluYWN0aXZlKSkgKiAxMDA7XG4gIGlmIChpc05hTihwZXJjZW50KSkge1xuICAgIHBlcmNlbnQgPSAwO1xuICB9XG4gIHZhciAkaW50ZXJuZXRQcm9ncmVzcyA9ICQoJyMnICsgc2VjdG9yTmFtZSArICctaW50ZXJuZXQtcHJvZ3Jlc3MnKTtcbiAgJGludGVybmV0UHJvZ3Jlc3MuY3NzKCd3aWR0aCcsIHBlcmNlbnQrJyUnKS5hdHRyKCdhcmlhLXZhbHVlbm93JywgcGVyY2VudCk7XG4gICRpbnRlcm5ldFByb2dyZXNzLmh0bWwocGVyY2VudC50b0ZpeGVkKDIpICsgJyUgV2l0aCBBY2Nlc3MnKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tYWNjZXNzJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKGFjdGl2ZSkpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1uby1hY2Nlc3MnKS5odG1sKG51bWJlcldpdGhDb21tYXMoaW5hY3RpdmUpKTtcblxuICAvLyBMYW5kIFVzZVxuICB2YXIgbGFuZF91c2UgPSBzZWN0b3IubGFuZF91c2U7XG4gIHZhciBwZXJjZW50ID0gKGxhbmRfdXNlLlVyYmFuIC8gKGxhbmRfdXNlLlVyYmFuICsgbGFuZF91c2UuUnVyYWwpKSAqIDEwMDtcbiAgaWYgKGlzTmFOKHBlcmNlbnQpKSB7XG4gICAgcGVyY2VudCA9IDA7XG4gIH1cbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy11cmJhbi1ydXJhbC1wcm9ncmVzcycpLmNzcygnd2lkdGgnLCBwZXJjZW50KyclJykuYXR0cignYXJpYS12YWx1ZW5vdycsIHBlcmNlbnQpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLXVyYmFuLXJ1cmFsLXByb2dyZXNzJykuaHRtbChwZXJjZW50LnRvRml4ZWQoMikgKyAnJSBVcmJhbicpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS11cmJhbicpLmh0bWwobnVtYmVyV2l0aENvbW1hcyhsYW5kX3VzZS5VcmJhbikpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1ydXJhbCcpLmh0bWwobnVtYmVyV2l0aENvbW1hcyhsYW5kX3VzZS5SdXJhbCkpO1xuXG4gIC8vIENvbXB1dGVyc1xuICB2YXIgc3RhdHVzID0gc2VjdG9yLmNvbXB1dGVycztcbiAgdmFyIHllcyA9IHN0YXR1c1snWWVzJ10gfHwgMDtcbiAgdmFyIG5vID0gc3RhdHVzWydObyddIHx8IDA7XG4gIHZhciBwZXJjZW50ID0gKHllcyAvICh5ZXMgKyBubykpICogMTAwO1xuICBpZiAoaXNOYU4ocGVyY2VudCkpIHtcbiAgICBwZXJjZW50ID0gMDtcbiAgfVxuICB2YXIgJGNvbXB1dGVyUHJvZ3Jlc3MgPSAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLWNvbXB1dGVyLXByb2dyZXNzJyk7XG4gICRjb21wdXRlclByb2dyZXNzLmNzcygnd2lkdGgnLCBwZXJjZW50KyclJykuYXR0cignYXJpYS12YWx1ZW5vdycsIHBlcmNlbnQpO1xuICAkY29tcHV0ZXJQcm9ncmVzcy5odG1sKHBlcmNlbnQudG9GaXhlZCgyKSArICclIFdpdGggQ29tcHV0ZXJzJyk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLWNvbXB1dGVycycpLmh0bWwobnVtYmVyV2l0aENvbW1hcyh5ZXMpKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tbm8tY29tcHV0ZXJzJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKG5vKSk7XG5cbiAgLy8gQ29tcHV0ZXIgRmVlXG4gIHZhciBzdGF0dXMgPSBzZWN0b3IuY29tcHV0ZXJfZmVlO1xuICB2YXIgeWVzID0gc3RhdHVzWydZZXMnXSB8fCAwO1xuICB2YXIgbm8gPSBzdGF0dXNbJ05vJ10gfHwgMDtcbiAgdmFyIHBlcmNlbnQgPSAoeWVzIC8gKHllcyArIG5vKSkgKiAxMDA7XG4gIGlmIChpc05hTihwZXJjZW50KSkge1xuICAgIHBlcmNlbnQgPSAwO1xuICB9XG4gIHZhciAkZmVlUHJvZ3Jlc3MgPSAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLWZlZS1wcm9ncmVzcycpO1xuICAkZmVlUHJvZ3Jlc3MuY3NzKCd3aWR0aCcsIHBlcmNlbnQrJyUnKS5hdHRyKCdhcmlhLXZhbHVlbm93JywgcGVyY2VudCk7XG4gICRmZWVQcm9ncmVzcy5odG1sKHBlcmNlbnQudG9GaXhlZCgyKSArICclIENoYXJnaW5nIEFjY2VzcyBGZWUnKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tZmVlJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKHllcykpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1uby1mZWUnKS5odG1sKG51bWJlcldpdGhDb21tYXMobm8pKTtcblxuICAvLyBGaWN0aW9uXG4gIHZhciBzdGF0dXMgPSBzZWN0b3IuZmljdGlvbjtcbiAgdmFyIHllcyA9IHN0YXR1c1snWWVzJ10gfHwgMDtcbiAgdmFyIG5vID0gc3RhdHVzWydObyddIHx8IDA7XG4gIHZhciBwZXJjZW50ID0gKHllcyAvICh5ZXMgKyBubykpICogMTAwO1xuICBpZiAoaXNOYU4ocGVyY2VudCkpIHtcbiAgICBwZXJjZW50ID0gMDtcbiAgfVxuICB2YXIgJGZpY3Rpb25Qcm9ncmVzcyA9ICQoJyMnICsgc2VjdG9yTmFtZSArICctZmljdGlvbi1wcm9ncmVzcycpO1xuICAkZmljdGlvblByb2dyZXNzLmNzcygnd2lkdGgnLCBwZXJjZW50KyclJykuYXR0cignYXJpYS12YWx1ZW5vdycsIHBlcmNlbnQpO1xuICAkZmljdGlvblByb2dyZXNzLmh0bWwocGVyY2VudC50b0ZpeGVkKDIpICsgJyUgV2l0aCBGaWN0aW9uJyk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLWZpY3Rpb24nKS5odG1sKG51bWJlcldpdGhDb21tYXMoeWVzKSk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLW5vLWZpY3Rpb24nKS5odG1sKG51bWJlcldpdGhDb21tYXMobm8pKTtcblxuICAvLyBOb24gRmljdGlvblxuICB2YXIgc3RhdHVzID0gc2VjdG9yLm5vbl9maWN0aW9uO1xuICB2YXIgeWVzID0gc3RhdHVzWydZZXMnXSB8fCAwO1xuICB2YXIgbm8gPSBzdGF0dXNbJ05vJ10gfHwgMDtcbiAgdmFyIHBlcmNlbnQgPSAoeWVzIC8gKHllcyArIG5vKSkgKiAxMDA7XG4gIGlmIChpc05hTihwZXJjZW50KSkge1xuICAgIHBlcmNlbnQgPSAwO1xuICB9XG4gIHZhciAkbm9uRmljdGlvblByb2dyZXNzID0gJCgnIycgKyBzZWN0b3JOYW1lICsgJy1ub24tZmljdGlvbi1wcm9ncmVzcycpO1xuICAkbm9uRmljdGlvblByb2dyZXNzLmNzcygnd2lkdGgnLCBwZXJjZW50KyclJykuYXR0cignYXJpYS12YWx1ZW5vdycsIHBlcmNlbnQpO1xuICAkbm9uRmljdGlvblByb2dyZXNzLmh0bWwocGVyY2VudC50b0ZpeGVkKDIpICsgJyUgV2l0aCBOb24gRmljdGlvbicpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1ub24tZmljdGlvbicpLmh0bWwobnVtYmVyV2l0aENvbW1hcyh5ZXMpKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tbm8tbm9uLWZpY3Rpb24nKS5odG1sKG51bWJlcldpdGhDb21tYXMobm8pKTtcblxuICAvLyBOZXdzcGFwZXJzXG4gIHZhciBzdGF0dXMgPSBzZWN0b3IubmV3c3BhcGVycztcbiAgdmFyIHllcyA9IHN0YXR1c1snWWVzJ10gfHwgMDtcbiAgdmFyIG5vID0gc3RhdHVzWydObyddIHx8IDA7XG4gIHZhciBwZXJjZW50ID0gKHllcyAvICh5ZXMgKyBubykpICogMTAwO1xuICBpZiAoaXNOYU4ocGVyY2VudCkpIHtcbiAgICBwZXJjZW50ID0gMDtcbiAgfVxuICB2YXIgJG5ld3NwYXBlcnNQcm9ncmVzcyA9ICQoJyMnICsgc2VjdG9yTmFtZSArICctbmV3c3BhcGVycy1wcm9ncmVzcycpO1xuICAkbmV3c3BhcGVyc1Byb2dyZXNzLmNzcygnd2lkdGgnLCBwZXJjZW50KyclJykuYXR0cignYXJpYS12YWx1ZW5vdycsIHBlcmNlbnQpO1xuICAkbmV3c3BhcGVyc1Byb2dyZXNzLmh0bWwocGVyY2VudC50b0ZpeGVkKDIpICsgJyUgV2l0aCBOZXdzcGFwZXJzJyk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLW5ld3NwYXBlcnMnKS5odG1sKG51bWJlcldpdGhDb21tYXMoeWVzKSk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLW5vLW5ld3NwYXBlcnMnKS5odG1sKG51bWJlcldpdGhDb21tYXMobm8pKTtcblxuICAvLyBFbmN5Y2xvcGVkaWFzXG4gIHZhciBzdGF0dXMgPSBzZWN0b3IuZW5jeWNsb3BlZGlhcztcbiAgdmFyIHllcyA9IHN0YXR1c1snWWVzJ10gfHwgMDtcbiAgdmFyIG5vID0gc3RhdHVzWydObyddIHx8IDA7XG4gIHZhciBwZXJjZW50ID0gKHllcyAvICh5ZXMgKyBubykpICogMTAwO1xuICBpZiAoaXNOYU4ocGVyY2VudCkpIHtcbiAgICBwZXJjZW50ID0gMDtcbiAgfVxuICB2YXIgJGVuY3ljbG9wZWRpYXNQcm9ncmVzcyA9ICQoJyMnICsgc2VjdG9yTmFtZSArICctZW5jeWNsb3BlZGlhcy1wcm9ncmVzcycpO1xuICAkZW5jeWNsb3BlZGlhc1Byb2dyZXNzLmNzcygnd2lkdGgnLCBwZXJjZW50KyclJykuYXR0cignYXJpYS12YWx1ZW5vdycsIHBlcmNlbnQpO1xuICAkZW5jeWNsb3BlZGlhc1Byb2dyZXNzLmh0bWwocGVyY2VudC50b0ZpeGVkKDIpICsgJyUgV2l0aCBFbmN5Y2xvcGVkaWFzJyk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLWVuY3ljbG9wZWRpYXMnKS5odG1sKG51bWJlcldpdGhDb21tYXMoeWVzKSk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLW5vLWVuY3ljbG9wZWRpYXMnKS5odG1sKG51bWJlcldpdGhDb21tYXMobm8pKTtcblxuICBDaGFydHMuY3JlYXRlTGlicmFyeShzZWN0b3IpO1xufVxuXG5mdW5jdGlvbiBzZXR1cEhlYWx0aCgpIHtcbiAgTWFwLmluaXQoJ2hlYWx0aCcsICdoZWFsdGhfMjAxNCcsIHZlY3RvcmdhdG9yLmhlYWx0aC5iYm94LCBpZCk7XG4gIHZhciBzZWN0b3JOYW1lID0gJ2hlYWx0aCc7XG4gIHZhciBzZWN0b3IgPSB2ZWN0b3JnYXRvcltzZWN0b3JOYW1lXTtcblxuICAvLyBUb3RhbCBDb3VudFxuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLXRvdGFsLWNvdW50JykuaHRtbChudW1iZXJXaXRoQ29tbWFzKHNlY3Rvci50b3RhbF9jb3VudCkpO1xuXG4gIC8vIFN0YXR1c1xuICB2YXIgc3RhdHVzID0gc2VjdG9yLmZ1bmN0aW9uYWw7XG4gIHZhciBhY3RpdmUgPSBzdGF0dXNbJ1llcyddO1xuICB2YXIgaW5hY3RpdmUgPSBzdGF0dXNbJ05vJ107XG4gIHZhciBwZXJjZW50ID0gKGFjdGl2ZSAvIChhY3RpdmUgKyBpbmFjdGl2ZSkpICogMTAwO1xuICBpZiAoaXNOYU4ocGVyY2VudCkpIHtcbiAgICBwZXJjZW50ID0gMDtcbiAgfVxuICB2YXIgJHN0YXR1c1Byb2dyZXNzID0gJCgnIycgKyBzZWN0b3JOYW1lICsgJy1zdGF0dXMtcHJvZ3Jlc3MnKTtcbiAgJHN0YXR1c1Byb2dyZXNzLmNzcygnd2lkdGgnLCBwZXJjZW50KyclJykuYXR0cignYXJpYS12YWx1ZW5vdycsIHBlcmNlbnQpO1xuICAkc3RhdHVzUHJvZ3Jlc3MuaHRtbChwZXJjZW50LnRvRml4ZWQoMikgKyAnJSBBY3RpdmUnKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tYWN0aXZlJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKGFjdGl2ZSkpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1pbmFjdGl2ZScpLmh0bWwobnVtYmVyV2l0aENvbW1hcyhpbmFjdGl2ZSkpO1xuXG4gIC8vIExhbmQgVXNlXG4gIHZhciBsYW5kX3VzZSA9IHNlY3Rvci5sYW5kX3VzZTtcbiAgdmFyIHBlcmNlbnQgPSAobGFuZF91c2UuVXJiYW4gLyAobGFuZF91c2UuVXJiYW4gKyBsYW5kX3VzZS5SdXJhbCkpICogMTAwO1xuICBpZiAoaXNOYU4ocGVyY2VudCkpIHtcbiAgICBwZXJjZW50ID0gMDtcbiAgfVxuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLXVyYmFuLXJ1cmFsLXByb2dyZXNzJykuY3NzKCd3aWR0aCcsIHBlcmNlbnQrJyUnKS5hdHRyKCdhcmlhLXZhbHVlbm93JywgcGVyY2VudCk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctdXJiYW4tcnVyYWwtcHJvZ3Jlc3MnKS5odG1sKHBlcmNlbnQudG9GaXhlZCgyKSArICclIFVyYmFuJyk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLXVyYmFuJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKGxhbmRfdXNlLlVyYmFuKSk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLXJ1cmFsJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKGxhbmRfdXNlLlJ1cmFsKSk7XG5cbiAgLy8gQWNjZXNzIFJvYWRcbiAgdmFyIHN0YXR1cyA9IHNlY3Rvci5hY2Nlc3Nfcm9hZDtcbiAgdmFyIHllcyA9IHN0YXR1c1snWWVzJ10gfHwgMDtcbiAgdmFyIG5vID0gc3RhdHVzWydObyddIHx8IDA7XG4gIHZhciBwZXJjZW50ID0gKHllcyAvICh5ZXMgKyBubykpICogMTAwO1xuICBpZiAoaXNOYU4ocGVyY2VudCkpIHtcbiAgICBwZXJjZW50ID0gMDtcbiAgfVxuICB2YXIgJGFjY2Vzc1JvYWRQcm9ncmVzcyA9ICQoJyMnICsgc2VjdG9yTmFtZSArICctYWNjZXNzLXJvYWQtcHJvZ3Jlc3MnKTtcbiAgJGFjY2Vzc1JvYWRQcm9ncmVzcy5jc3MoJ3dpZHRoJywgcGVyY2VudCsnJScpLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwZXJjZW50KTtcbiAgJGFjY2Vzc1JvYWRQcm9ncmVzcy5odG1sKHBlcmNlbnQudG9GaXhlZCgyKSArICclIFdpdGggQWNjZXNzIFJvYWQnKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tYWNjZXNzLXJvYWQnKS5odG1sKG51bWJlcldpdGhDb21tYXMoeWVzKSk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLW5vLWFjY2Vzcy1yb2FkJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKG5vKSk7XG5cbiAgLy8gQmxvb2QgVHJhbnNmdXNpb25cbiAgdmFyIHN0YXR1cyA9IHNlY3Rvci5ibG9vZF90cmFuc2Z1c2lvbjtcbiAgdmFyIHllcyA9IHN0YXR1c1snWWVzJ10gfHwgMDtcbiAgdmFyIG5vID0gc3RhdHVzWydObyddIHx8IDA7XG4gIHZhciBwZXJjZW50ID0gKHllcyAvICh5ZXMgKyBubykpICogMTAwO1xuICBpZiAoaXNOYU4ocGVyY2VudCkpIHtcbiAgICBwZXJjZW50ID0gMDtcbiAgfVxuICB2YXIgJGJsb29kX3RyYW5zZnVzaW9uUHJvZ3Jlc3MgPSAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLWJsb29kLXRyYW5zZnVzaW9uLXByb2dyZXNzJyk7XG4gICRibG9vZF90cmFuc2Z1c2lvblByb2dyZXNzLmNzcygnd2lkdGgnLCBwZXJjZW50KyclJykuYXR0cignYXJpYS12YWx1ZW5vdycsIHBlcmNlbnQpO1xuICAkYmxvb2RfdHJhbnNmdXNpb25Qcm9ncmVzcy5odG1sKHBlcmNlbnQudG9GaXhlZCgyKSArICclIEJsb29kIFRyYW5zZnVzaW9uIEF2YWlsYWJsZScpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1ibG9vZC10cmFuc2Z1c2lvbicpLmh0bWwobnVtYmVyV2l0aENvbW1hcyh5ZXMpKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tbm8tYmxvb2QtdHJhbnNmdXNpb24nKS5odG1sKG51bWJlcldpdGhDb21tYXMobm8pKTtcblxuICAvLyBEaXNwZW5zYXJ5XG4gIHZhciBzdGF0dXMgPSBzZWN0b3IuZGlzcGVuc2FyeTtcbiAgdmFyIHllcyA9IHN0YXR1c1snWWVzJ10gfHwgMDtcbiAgdmFyIG5vID0gc3RhdHVzWydObyddIHx8IDA7XG4gIHZhciBwZXJjZW50ID0gKHllcyAvICh5ZXMgKyBubykpICogMTAwO1xuICBpZiAoaXNOYU4ocGVyY2VudCkpIHtcbiAgICBwZXJjZW50ID0gMDtcbiAgfVxuICB2YXIgJGRpc3BlbnNhcnlQcm9ncmVzcyA9ICQoJyMnICsgc2VjdG9yTmFtZSArICctZGlzcGVuc2FyeS1wcm9ncmVzcycpO1xuICAkZGlzcGVuc2FyeVByb2dyZXNzLmNzcygnd2lkdGgnLCBwZXJjZW50KyclJykuYXR0cignYXJpYS12YWx1ZW5vdycsIHBlcmNlbnQpO1xuICAkZGlzcGVuc2FyeVByb2dyZXNzLmh0bWwocGVyY2VudC50b0ZpeGVkKDIpICsgJyUgV2l0aCBEaXNwZW5zYXJ5Jyk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLWRpc3BlbnNhcnknKS5odG1sKG51bWJlcldpdGhDb21tYXMoeWVzKSk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLW5vLWRpc3BlbnNhcnknKS5odG1sKG51bWJlcldpdGhDb21tYXMobm8pKTtcblxuICAvLyBFbGVjdHJpY2l0eVxuICB2YXIgc3RhdHVzID0gc2VjdG9yLmVsZWN0cmljaXR5O1xuICB2YXIgeWVzID0gc3RhdHVzWydZZXMnXSB8fCAwO1xuICB2YXIgbm8gPSBzdGF0dXNbJ05vJ10gfHwgMDtcbiAgdmFyIHBlcmNlbnQgPSAoeWVzIC8gKHllcyArIG5vKSkgKiAxMDA7XG4gIGlmIChpc05hTihwZXJjZW50KSkge1xuICAgIHBlcmNlbnQgPSAwO1xuICB9XG4gIHZhciAkZWxlY3RyaWNpdHlQcm9ncmVzcyA9ICQoJyMnICsgc2VjdG9yTmFtZSArICctZWxlY3RyaWNpdHktcHJvZ3Jlc3MnKTtcbiAgJGVsZWN0cmljaXR5UHJvZ3Jlc3MuY3NzKCd3aWR0aCcsIHBlcmNlbnQrJyUnKS5hdHRyKCdhcmlhLXZhbHVlbm93JywgcGVyY2VudCk7XG4gICRlbGVjdHJpY2l0eVByb2dyZXNzLmh0bWwocGVyY2VudC50b0ZpeGVkKDIpICsgJyUgV2l0aCBFbGVjdHJpY2l0eScpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1lbGVjdHJpY2l0eScpLmh0bWwobnVtYmVyV2l0aENvbW1hcyh5ZXMpKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tbm8tZWxlY3RyaWNpdHknKS5odG1sKG51bWJlcldpdGhDb21tYXMobm8pKTtcblxuICAvLyBJbW11bml6YXRpb25cbiAgdmFyIHN0YXR1cyA9IHNlY3Rvci5pbW11bml6YXRpb247XG4gIHZhciB5ZXMgPSBzdGF0dXNbJ1llcyddIHx8IDA7XG4gIHZhciBubyA9IHN0YXR1c1snTm8nXSB8fCAwO1xuICB2YXIgcGVyY2VudCA9ICh5ZXMgLyAoeWVzICsgbm8pKSAqIDEwMDtcbiAgaWYgKGlzTmFOKHBlcmNlbnQpKSB7XG4gICAgcGVyY2VudCA9IDA7XG4gIH1cbiAgdmFyICRpbW11bml6YXRpb25Qcm9ncmVzcyA9ICQoJyMnICsgc2VjdG9yTmFtZSArICctaW1tdW5pemF0aW9uLXByb2dyZXNzJyk7XG4gICRpbW11bml6YXRpb25Qcm9ncmVzcy5jc3MoJ3dpZHRoJywgcGVyY2VudCsnJScpLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwZXJjZW50KTtcbiAgJGltbXVuaXphdGlvblByb2dyZXNzLmh0bWwocGVyY2VudC50b0ZpeGVkKDIpICsgJyUgV2l0aCBJbW11bml6YXRpb24nKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0taW1tdW5pemF0aW9uJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKHllcykpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1uby1pbW11bml6YXRpb24nKS5odG1sKG51bWJlcldpdGhDb21tYXMobm8pKTtcblxuICAvLyBQaGFybWFjaXN0XG4gIHZhciBzdGF0dXMgPSBzZWN0b3IucGhhcm1hY2lzdDtcbiAgdmFyIHllcyA9IHN0YXR1c1snWWVzJ10gfHwgMDtcbiAgdmFyIG5vID0gc3RhdHVzWydObyddIHx8IDA7XG4gIHZhciBwZXJjZW50ID0gKHllcyAvICh5ZXMgKyBubykpICogMTAwO1xuICBpZiAoaXNOYU4ocGVyY2VudCkpIHtcbiAgICBwZXJjZW50ID0gMDtcbiAgfVxuICB2YXIgJHBoYXJtYWNpc3RQcm9ncmVzcyA9ICQoJyMnICsgc2VjdG9yTmFtZSArICctcGhhcm1hY2lzdC1wcm9ncmVzcycpO1xuICAkcGhhcm1hY2lzdFByb2dyZXNzLmNzcygnd2lkdGgnLCBwZXJjZW50KyclJykuYXR0cignYXJpYS12YWx1ZW5vdycsIHBlcmNlbnQpO1xuICAkcGhhcm1hY2lzdFByb2dyZXNzLmh0bWwocGVyY2VudC50b0ZpeGVkKDIpICsgJyUgV2l0aCBQaGFybWFjaXN0Jyk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLXBoYXJtYWNpc3QnKS5odG1sKG51bWJlcldpdGhDb21tYXMoeWVzKSk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLW5vLXBoYXJtYWNpc3QnKS5odG1sKG51bWJlcldpdGhDb21tYXMobm8pKTtcblxuICAvLyBPcGVuIDI0IC8gN1xuICB2YXIgc3RhdHVzID0gc2VjdG9yLnBoY18yNF83O1xuICB2YXIgeWVzID0gc3RhdHVzWydZZXMnXSB8fCAwO1xuICB2YXIgbm8gPSBzdGF0dXNbJ05vJ10gfHwgMDtcbiAgdmFyIHBlcmNlbnQgPSAoeWVzIC8gKHllcyArIG5vKSkgKiAxMDA7XG4gIGlmIChpc05hTihwZXJjZW50KSkge1xuICAgIHBlcmNlbnQgPSAwO1xuICB9XG4gIHZhciAkb3BlbjI0N1Byb2dyZXNzID0gJCgnIycgKyBzZWN0b3JOYW1lICsgJy1vcGVuLTI0LTctcHJvZ3Jlc3MnKTtcbiAgJG9wZW4yNDdQcm9ncmVzcy5jc3MoJ3dpZHRoJywgcGVyY2VudCsnJScpLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwZXJjZW50KTtcbiAgJG9wZW4yNDdQcm9ncmVzcy5odG1sKHBlcmNlbnQudG9GaXhlZCgyKSArICclIE9wZW4gMjQgLyA3Jyk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLW9wZW4tMjQtNycpLmh0bWwobnVtYmVyV2l0aENvbW1hcyh5ZXMpKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tbm8tb3Blbi0yNC03JykuaHRtbChudW1iZXJXaXRoQ29tbWFzKG5vKSk7XG5cbiAgLy8gUnVubmluZyBXYXRlclxuICB2YXIgc3RhdHVzID0gc2VjdG9yLnJ1bm5pbmdfd2F0ZXI7XG4gIHZhciB5ZXMgPSBzdGF0dXNbJ1llcyddIHx8IDA7XG4gIHZhciBubyA9IHN0YXR1c1snTm8nXSB8fCAwO1xuICB2YXIgcGVyY2VudCA9ICh5ZXMgLyAoeWVzICsgbm8pKSAqIDEwMDtcbiAgaWYgKGlzTmFOKHBlcmNlbnQpKSB7XG4gICAgcGVyY2VudCA9IDA7XG4gIH1cbiAgdmFyICRydW5uaW5nX3dhdGVyUHJvZ3Jlc3MgPSAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLXJ1bm5pbmctd2F0ZXItcHJvZ3Jlc3MnKTtcbiAgJHJ1bm5pbmdfd2F0ZXJQcm9ncmVzcy5jc3MoJ3dpZHRoJywgcGVyY2VudCsnJScpLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwZXJjZW50KTtcbiAgJHJ1bm5pbmdfd2F0ZXJQcm9ncmVzcy5odG1sKHBlcmNlbnQudG9GaXhlZCgyKSArICclIFdpdGggUnVubmluZyBXYXRlcicpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1ydW5uaW5nLXdhdGVyJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKHllcykpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1uby1ydW5uaW5nLXdhdGVyJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKG5vKSk7XG5cbiAgQ2hhcnRzLmNyZWF0ZUhlYWx0aChzZWN0b3IpO1xufVxuXG5mdW5jdGlvbiBzZXR1cEFncmljdWx0dXJlKCkge1xuICBNYXAuaW5pdCgnYWdyaWN1bHR1cmUnLCAnYWdyaWN1bHR1cmVfMjAxNCcsIHZlY3RvcmdhdG9yLmFncmljdWx0dXJlLmJib3gsIGlkKTtcbiAgdmFyIHNlY3Rvck5hbWUgPSAnYWdyaWN1bHR1cmUnO1xuICB2YXIgc2VjdG9yID0gdmVjdG9yZ2F0b3Jbc2VjdG9yTmFtZV07XG5cbiAgLy8gVG90YWwgQ291bnRcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy10b3RhbC1jb3VudCcpLmh0bWwobnVtYmVyV2l0aENvbW1hcyhzZWN0b3IudG90YWxfY291bnQpKTtcblxuICAvLyBGZXJ0aWxpemVyXG4gIHZhciBzdGF0dXMgPSBzZWN0b3IuZmVydGlsaXplcjtcbiAgdmFyIGFjdGl2ZSA9IHN0YXR1c1snWWVzJ107XG4gIHZhciBpbmFjdGl2ZSA9IHN0YXR1c1snTm8nXTtcbiAgdmFyIHBlcmNlbnQgPSAoYWN0aXZlIC8gKGFjdGl2ZSArIGluYWN0aXZlKSkgKiAxMDA7XG4gIGlmIChpc05hTihwZXJjZW50KSkge1xuICAgIHBlcmNlbnQgPSAwO1xuICB9XG4gIHZhciAkZmVydGlsaXplclByb2dyZXNzID0gJCgnIycgKyBzZWN0b3JOYW1lICsgJy12ZW5kaW5nLWZlcnRpbGl6ZXItcHJvZ3Jlc3MnKTtcbiAgJGZlcnRpbGl6ZXJQcm9ncmVzcy5jc3MoJ3dpZHRoJywgcGVyY2VudCsnJScpLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwZXJjZW50KTtcbiAgJGZlcnRpbGl6ZXJQcm9ncmVzcy5odG1sKHBlcmNlbnQudG9GaXhlZCgyKSArICclIFZlbmRpbmcgRmVydGlsaXplcicpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS12ZW5kaW5nJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKGFjdGl2ZSkpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1ub3QtdmVuZGluZycpLmh0bWwobnVtYmVyV2l0aENvbW1hcyhpbmFjdGl2ZSkpO1xuXG4gIC8vIExhbmQgVXNlXG4gIHZhciBsYW5kX3VzZSA9IHNlY3Rvci5sYW5kX3VzZTtcbiAgdmFyIHBlcmNlbnQgPSAobGFuZF91c2UuVXJiYW4gLyAobGFuZF91c2UuVXJiYW4gKyBsYW5kX3VzZS5SdXJhbCkpICogMTAwO1xuICBpZiAoaXNOYU4ocGVyY2VudCkpIHtcbiAgICBwZXJjZW50ID0gMDtcbiAgfVxuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLXVyYmFuLXJ1cmFsLXByb2dyZXNzJykuY3NzKCd3aWR0aCcsIHBlcmNlbnQrJyUnKS5hdHRyKCdhcmlhLXZhbHVlbm93JywgcGVyY2VudCk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctdXJiYW4tcnVyYWwtcHJvZ3Jlc3MnKS5odG1sKHBlcmNlbnQudG9GaXhlZCgyKSArICclIFVyYmFuJyk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLXVyYmFuJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKGxhbmRfdXNlLlVyYmFuKSk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLXJ1cmFsJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKGxhbmRfdXNlLlJ1cmFsKSk7XG5cbiAgLy8gQnJhbmRlZFxuICB2YXIgc3RhdHVzID0gc2VjdG9yLmJyYW5kZWQ7XG4gIHZhciB5ZXMgPSBzdGF0dXNbJ1llcyddIHx8IDA7XG4gIHZhciBubyA9IHN0YXR1c1snTm8nXSB8fCAwO1xuICB2YXIgcGVyY2VudCA9ICh5ZXMgLyAoeWVzICsgbm8pKSAqIDEwMDtcbiAgaWYgKGlzTmFOKHBlcmNlbnQpKSB7XG4gICAgcGVyY2VudCA9IDA7XG4gIH1cbiAgdmFyICRicmFuZGVkUHJvZ3Jlc3MgPSAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLWJyYW5kZWQtcHJvZ3Jlc3MnKTtcbiAgJGJyYW5kZWRQcm9ncmVzcy5jc3MoJ3dpZHRoJywgcGVyY2VudCsnJScpLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwZXJjZW50KTtcbiAgJGJyYW5kZWRQcm9ncmVzcy5odG1sKHBlcmNlbnQudG9GaXhlZCgyKSArICclIEhhcyBCcmFuZGluZycpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1icmFuZGVkJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKHllcykpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1uby1icmFuZGVkJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKG5vKSk7XG5cbiAgLy8gVG9vbHMgLyBFcXVpcG1lbnRcbiAgdmFyIHN0YXR1cyA9IHNlY3Rvci50b29sc19lcXVpcG1lbnQ7XG4gIHZhciB5ZXMgPSBzdGF0dXNbJ1llcyddIHx8IDA7XG4gIHZhciBubyA9IHN0YXR1c1snTm8nXSB8fCAwO1xuICB2YXIgcGVyY2VudCA9ICh5ZXMgLyAoeWVzICsgbm8pKSAqIDEwMDtcbiAgaWYgKGlzTmFOKHBlcmNlbnQpKSB7XG4gICAgcGVyY2VudCA9IDA7XG4gIH1cbiAgdmFyICR0b29sc19lcXVpcG1lbnRQcm9ncmVzcyA9ICQoJyMnICsgc2VjdG9yTmFtZSArICctdG9vbHNfZXF1aXBtZW50LXByb2dyZXNzJyk7XG4gICR0b29sc19lcXVpcG1lbnRQcm9ncmVzcy5jc3MoJ3dpZHRoJywgcGVyY2VudCsnJScpLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwZXJjZW50KTtcbiAgJHRvb2xzX2VxdWlwbWVudFByb2dyZXNzLmh0bWwocGVyY2VudC50b0ZpeGVkKDIpICsgJyUgU2VsbGluZyBUb29scyAvIEVxdWlwbWVudCcpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS10b29sc19lcXVpcG1lbnQnKS5odG1sKG51bWJlcldpdGhDb21tYXMoeWVzKSk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLW5vLXRvb2xzX2VxdWlwbWVudCcpLmh0bWwobnVtYmVyV2l0aENvbW1hcyhubykpO1xuXG4gIENoYXJ0cy5jcmVhdGVBZ3JpY3VsdHVyZShzZWN0b3IpO1xufVxuXG5mdW5jdGlvbiBudW1iZXJXaXRoQ29tbWFzKHgpIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAndW5kZWZpbmVkJyB8fCB4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgcmV0dXJuIHgudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XG59XG5cblxuZnVuY3Rpb24gc2V0dXBFeHBvcnRCdXR0b24oKXtcbiAgJChcIiNleHBvcnRCdG5cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgUHJpbnQucHJpbnQoKTtcbiAgfSk7XG5cbiAgLy9SZXNldCBzdGF0ZSB3aGVuIHJlc2V0IGJ1dHRvbiBpcyBjbGlja2VkLlxuICAkKFwiI3Jlc2V0QnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICBQcmludC5yZXNldCgpO1xuICB9KVxufVxuXG5zZXR1cEV4cG9ydEJ1dHRvbigpOyIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMTAvMTcvMTQuXG4gKi9cblxudmFyIENvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnJyk7XG5cbnZhciBNYXAgPSB7fTtcblxuTWFwLmluaXQgPSBmdW5jdGlvbihzZWN0b3IsIHBvaW50c1RhYmxlLCBiYm94LCBpZCkge1xuICB2YXIgZG9tSWQgPSBzZWN0b3IgKyAnLW1hcCc7XG5cbiAgLy8gY3JlYXRlIGEgbWFwIGluIHRoZSBcIm1hcFwiIGRpdiwgc2V0IHRoZSB2aWV3IHRvIGEgZ2l2ZW4gcGxhY2UgYW5kIHpvb21cbiAgdmFyIG1hcCA9IEwubWFwKGRvbUlkLCB7XG4gICAgc2Nyb2xsV2hlZWxab29tOiBmYWxzZVxuICB9KTtcblxuICB2YXIgYm91bmRzID0gTC5nZW9Kc29uKGJib3gpLmdldEJvdW5kcygpO1xuICBtYXAuZml0Qm91bmRzKGJvdW5kcyk7XG5cbiAgLy8gYWRkIGFuIE9wZW5TdHJlZXRNYXAgdGlsZSBsYXllclxuICBMLnRpbGVMYXllcignaHR0cDovL2IudGlsZXMubWFwYm94LmNvbS92My9jdWdvcy5qb2xlZjhnYy97en0ve3h9L3t5fS5wbmcnKS5hZGRUbyhtYXApO1xuXG4gIHZhciBpZCA9IHBhcnNlSW50KGlkKTtcbiAgdmFyIGJvdW5kYXJ5TXZ0ID0gbmV3IEwuVGlsZUxheWVyLk1WVFNvdXJjZShib3VuZGFyeUNvbmZpZyhpZCkpO1xuICB2YXIgcG9pbnRzTXZ0ID0gbmV3IEwuVGlsZUxheWVyLk1WVFNvdXJjZShwb2ludHNDb25maWcoc2VjdG9yLCBwb2ludHNUYWJsZSwgaWQpKTtcblxuICBtYXAuYWRkTGF5ZXIocG9pbnRzTXZ0KTtcbiAgbWFwLmFkZExheWVyKGJvdW5kYXJ5TXZ0KTtcblxuICAkKCcubGVhZmxldC1jb250cm9sLWF0dHJpYnV0aW9uJykucmVtb3ZlKCk7XG59O1xuXG5mdW5jdGlvbiBib3VuZGFyeUNvbmZpZyhib3VuZGFyeUlkKSB7XG4gIHJldHVybiB7XG4gICAgdXJsOiBcImh0dHA6Ly9zcGF0aWFsc2VydmVyLnNwYXRpYWxkZXYuY29tL3NlcnZpY2VzL3ZlY3Rvci10aWxlcy9nYXVsX2ZzcF9pbmRpYS97en0ve3h9L3t5fS5wYmZcIixcbiAgICBkZWJ1ZzogZmFsc2UsXG4gICAgdmlzaWJsZUxheWVyczogWydnYXVsXzIwMTRfYWRtMScsICdnYXVsXzIwMTRfYWRtMV9sYWJlbCcsICdnYXVsXzIwMTRfYWRtMicsICdnYXVsXzIwMTRfYWRtMl9sYWJlbCddLFxuICAgIGdldElERm9yTGF5ZXJGZWF0dXJlOiBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICByZXR1cm4gZmVhdHVyZS5faWQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaWx0ZXIgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgd2hlbiBpdGVyYXRpbmcgdGhvdWdoIGVhY2ggdmVjdG9yIHRpbGUgZmVhdHVyZSAodnRmKS4gWW91IGhhdmUgYWNjZXNzXG4gICAgICogdG8gZXZlcnkgcHJvcGVydHkgYXNzb2NpYXRlZCB3aXRoIGEgZ2l2ZW4gZmVhdHVyZSAodGhlIGZlYXR1cmUsIGFuZCB0aGUgbGF5ZXIpLiBZb3UgY2FuIGFsc28gZmlsdGVyXG4gICAgICogYmFzZWQgb2YgdGhlIGNvbnRleHQgKGVhY2ggdGlsZSB0aGF0IHRoZSBmZWF0dXJlIGlzIGRyYXduIG9udG8pLlxuICAgICAqXG4gICAgICogUmV0dXJuaW5nIGZhbHNlIHNraXBzIG92ZXIgdGhlIGZlYXR1cmUgYW5kIGl0IGlzIG5vdCBkcmF3bi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmZWF0dXJlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZmlsdGVyOiBmdW5jdGlvbihmZWF0dXJlLCBjb250ZXh0KSB7XG4gICAgICBpZiAoIGZlYXR1cmUuX2lkID09PSBib3VuZGFyeUlkICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgc3R5bGU6IGZ1bmN0aW9uKGZlYXR1cmUsIGFqYXhEYXRhKSB7XG4gICAgICB2YXIgc3R5bGUgPSB7fTtcblxuICAgICAgdmFyIHR5cGUgPSBmZWF0dXJlLnR5cGU7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAxOiAvLydQb2ludCdcbiAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDE4LDEwNSwyNTAsMCknO1xuICAgICAgICAgIHN0eWxlLnJhZGl1cyA9IDU7XG4gICAgICAgICAgc3R5bGUuc2VsZWN0ZWQgPSB7XG4gICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LDI1NSwwLDAuNSknLFxuICAgICAgICAgICAgcmFkaXVzOiA2XG4gICAgICAgICAgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOiAvLydMaW5lU3RyaW5nJ1xuICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMTgsMTA1LDI1MCwwLjgpJztcbiAgICAgICAgICBzdHlsZS5zaXplID0gMztcbiAgICAgICAgICBzdHlsZS5zZWxlY3RlZCA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsMjUsMCwwLjUpJyxcbiAgICAgICAgICAgIHNpemU6IDRcbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6IC8vJ1BvbHlnb24nXG5cbiAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDE4LDEwNSwyNTAsMCknO1xuXG4gICAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzAwNzdhYycsXG4gICAgICAgICAgICBzaXplOiAyXG4gICAgICAgICAgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHdlIHdhbnQgdG8gbGluayBldmVudHMgYmV0d2VlbiBsYXllcnMsIGxpa2UgY2xpY2tpbmcgb24gYSBsYWJlbCBhbmQgYVxuICAgICAqIGNvcnJlc3BvbmRpbmcgcG9seWdvbiBmcmVhdHVyZSwgdGhpcyB3aWxsIHJldHVybiB0aGUgY29ycmVzcG9uZGluZyBtYXBwaW5nXG4gICAgICogYmV0d2VlbiBsYXllcnMuIFRoaXMgcHJvdmlkZXMga25vd2xlZGdlIG9mIHdoaWNoIG90aGVyIGZlYXR1cmUgYSBnaXZlbiBmZWF0dXJlXG4gICAgICogaXMgbGlua2VkIHRvLlxuICAgICAqXG4gICAgICogQHBhcmFtIGxheWVyTmFtZSAgdGhlIGxheWVyIHdlIHdhbnQgdG8ga25vdyB0aGUgbGlua2VkIGxheWVyIGZyb21cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGNvcnJlc3BvbmRpbmcgbGlua2VkIGxheWVyXG4gICAgICovXG4gICAgbGF5ZXJMaW5rOiBmdW5jdGlvbihsYXllck5hbWUpIHtcbiAgICAgIGlmIChsYXllck5hbWUuaW5kZXhPZignX2xhYmVsJykgPiAtMSkge1xuICAgICAgICByZXR1cm4gbGF5ZXJOYW1lLnJlcGxhY2UoJ19sYWJlbCcsJycpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxheWVyTmFtZSArICdfbGFiZWwnO1xuICAgIH1cbiAgfTtcbn1cblxuXG5mdW5jdGlvbiBwb2ludHNDb25maWcoc2VjdG9yLCBwb2ludHNUYWJsZSwgaWQpIHtcbiAgcmV0dXJuIHtcbiAgICB1cmw6IFwiaHR0cDovL3NwYXRpYWxzZXJ2ZXIuc3BhdGlhbGRldi5jb20vc2VydmljZXMvcG9zdGdpcy9cIiArIHBvaW50c1RhYmxlICsgXCIvZ2VvbS92ZWN0b3ItdGlsZXMve3p9L3t4fS97eX0ucGJmP2ZpZWxkcz10eXBlLGlkJndoZXJlPWdhdWxfMjAxNF9hZG0xJTNkXCIgKyBpZCArIFwiJTIwb3IlMjBnYXVsXzIwMTRfYWRtMiUzZFwiICsgaWQsXG4gICAgZGVidWc6IGZhbHNlLFxuICAgIGNsaWNrYWJsZUxheWVyczogbnVsbCxcblxuICAgIGdldElERm9yTGF5ZXJGZWF0dXJlOiBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgcmV0dXJuIGZlYXR1cmUucHJvcGVydGllcy5pZDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGZpbHRlciBmdW5jdGlvbiBnZXRzIGNhbGxlZCB3aGVuIGl0ZXJhdGluZyB0aG91Z2ggZWFjaCB2ZWN0b3IgdGlsZSBmZWF0dXJlICh2dGYpLiBZb3UgaGF2ZSBhY2Nlc3NcbiAgICAgKiB0byBldmVyeSBwcm9wZXJ0eSBhc3NvY2lhdGVkIHdpdGggYSBnaXZlbiBmZWF0dXJlICh0aGUgZmVhdHVyZSwgYW5kIHRoZSBsYXllcikuIFlvdSBjYW4gYWxzbyBmaWx0ZXJcbiAgICAgKiBiYXNlZCBvZiB0aGUgY29udGV4dCAoZWFjaCB0aWxlIHRoYXQgdGhlIGZlYXR1cmUgaXMgZHJhd24gb250bykuXG4gICAgICpcbiAgICAgKiBSZXR1cm5pbmcgZmFsc2Ugc2tpcHMgb3ZlciB0aGUgZmVhdHVyZSBhbmQgaXQgaXMgbm90IGRyYXduLlxuICAgICAqXG4gICAgICogQHBhcmFtIGZlYXR1cmVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBmaWx0ZXI6IGZ1bmN0aW9uIChmZWF0dXJlLCBjb250ZXh0KSB7XG4gICAgICAvL3JldHVybiBmZWF0dXJlLnByb3BlcnRpZXMudHlwZSAhPSAnTW9iaWxlIE1vbmV5IEFnZW50JztcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHdlIHdhbnQgdG8gbGluayBldmVudHMgYmV0d2VlbiBsYXllcnMsIGxpa2UgY2xpY2tpbmcgb24gYSBsYWJlbCBhbmQgYVxuICAgICAqIGNvcnJlc3BvbmRpbmcgcG9seWdvbiBmcmVhdHVyZSwgdGhpcyB3aWxsIHJldHVybiB0aGUgY29ycmVzcG9uZGluZyBtYXBwaW5nXG4gICAgICogYmV0d2VlbiBsYXllcnMuIFRoaXMgcHJvdmlkZXMga25vd2xlZGdlIG9mIHdoaWNoIG90aGVyIGZlYXR1cmUgYSBnaXZlbiBmZWF0dXJlXG4gICAgICogaXMgbGlua2VkIHRvLlxuICAgICAqXG4gICAgICogQHBhcmFtIGxheWVyTmFtZSAgdGhlIGxheWVyIHdlIHdhbnQgdG8ga25vdyB0aGUgbGlua2VkIGxheWVyIGZyb21cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGNvcnJlc3BvbmRpbmcgbGlua2VkIGxheWVyXG4gICAgICovXG4gICAgbGF5ZXJMaW5rOiBmdW5jdGlvbiAobGF5ZXJOYW1lKSB7XG4gICAgICBpZiAobGF5ZXJOYW1lLmluZGV4T2YoJ19sYWJlbCcpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIGxheWVyTmFtZS5yZXBsYWNlKCdfbGFiZWwnLCAnJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGF5ZXJOYW1lICsgJ19sYWJlbCc7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNwZWNpZnkgd2hpY2ggZmVhdHVyZXMgc2hvdWxkIGhhdmUgYSBjZXJ0YWluIHogaW5kZXggKGludGVnZXIpLiAgTG93ZXIgbnVtYmVycyB3aWxsIGRyYXcgb24gJ3RoZSBib3R0b20nLlxuICAgICAqXG4gICAgICogQHBhcmFtIGZlYXR1cmUgLSB0aGUgUEJGRmVhdHVyZSB0aGF0IGNvbnRhaW5zIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBsYXllck9yZGVyaW5nOiBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgLy9UaGlzIG9ubHkgbmVlZHMgdG8gYmUgZG9uZSBmb3IgZWFjaCB0eXBlLCBub3QgbmVjZXNzYXJpbHkgZm9yIGVhY2ggZmVhdHVyZS4gQnV0IHdlJ2xsIHN0YXJ0IGhlcmUuXG4gICAgICBpZiAoZmVhdHVyZSAmJiBmZWF0dXJlLnByb3BlcnRpZXMpIHtcbiAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzLnpJbmRleCA9IENvbmZpZ1tzZWN0b3JdW2ZlYXR1cmUucHJvcGVydGllcy50eXBlXS56SW5kZXggfHwgNTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3R5bGU6IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICB2YXIgc3R5bGUgPSB7fTtcbiAgICAgIHZhciBzZWxlY3RlZCA9IHN0eWxlLnNlbGVjdGVkID0ge307XG4gICAgICB2YXIgcG9pbnRSYWRpdXMgPSAxO1xuXG4gICAgICBmdW5jdGlvbiBTY2FsZURlcGVuZGVudFBvaW50UmFkaXVzKHpvb20pIHtcbiAgICAgICAgLy9TZXQgcG9pbnQgcmFkaXVzIGJhc2VkIG9uIHpvb21cbiAgICAgICAgdmFyIHBvaW50UmFkaXVzID0gMTtcbiAgICAgICAgaWYgKHpvb20gPj0gMCAmJiB6b29tIDw9IDYpIHtcbiAgICAgICAgICBwb2ludFJhZGl1cyA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoem9vbSA+IDYgJiYgem9vbSA8PSA5KSB7XG4gICAgICAgICAgcG9pbnRSYWRpdXMgPSAyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHpvb20gPiA5ICYmIHpvb20gPD0gMTEpIHtcbiAgICAgICAgICBwb2ludFJhZGl1cyA9IDM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoem9vbSA+IDExKSB7XG4gICAgICAgICAgcG9pbnRSYWRpdXMgPSA0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBvaW50UmFkaXVzO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZSA9IGZlYXR1cmUudHlwZTtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIDE6IC8vJ1BvaW50J1xuICAgICAgICAgIC8vIHVuc2VsZWN0ZWRcbiAgICAgICAgICBzdHlsZS5jb2xvciA9IENvbmZpZ1tzZWN0b3JdW2ZlYXR1cmUucHJvcGVydGllcy50eXBlXS5jb2xvciB8fCAnIzMwODZBQic7XG4gICAgICAgICAgc3R5bGUucmFkaXVzID0gU2NhbGVEZXBlbmRlbnRQb2ludFJhZGl1cztcbiAgICAgICAgICAvLyBzZWxlY3RlZFxuICAgICAgICAgIHNlbGVjdGVkLmNvbG9yID0gc3R5bGUuY29sb3I7IC8vc2FtZSBjb2xvclxuICAgICAgICAgIHNlbGVjdGVkLnJhZGl1cyA9IDg7IC8vYnV0IGJpZ2dlclxuICAgICAgICAgIHNlbGVjdGVkLmxpbmVXaWR0aCA9IDE7IC8vb3V0bGluZSB3aWR0aFxuICAgICAgICAgIHNlbGVjdGVkLnN0cm9rZVN0eWxlID0gXCIjZjJmMmYyXCI7IC8vb3V0bGluZSBjb2xvclxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9XG4gIH07XG59XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDsiLCJcbmZ1bmN0aW9uIHByaW50KCkge1xuXG4gIHZhciBwcmludFBvc3RBcmdzID0ge1xuICAgIHVybDogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgLy91cmw6IFwiaHR0cDovL3NwYXRpYWxzZXJ2ZXIuc3BhdGlhbGRldi5jb20vRlNQTWFwcy1MZWFmbGV0L3N1bW1hcnkvI2lkPTI0NDImc2VjdG9yPWZzcFwiLCAvLy9Gb3IgVGVzdFxuICAgIGltYWdlZm9ybWF0OiAncG5nJyxcbiAgICBmb3JtYXQ6ICdqc29uJyAsXG4gICAgLy92aWV3cG9ydGhlaWdodDogbWFwSGVpZ2h0LFxuICAgIHZpZXdwb3J0d2lkdGg6IDEzMDBcbiAgfTtcblxuICAvL1NldHVwIGJ1dHRvbiBzdGF0ZVxuICBvbkltYWdlRXhwb3J0U3RhcnQoKTtcblxuICAkLmFqYXgoe1xuICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgIHVybDogJ2h0dHA6Ly9wcmludC5zcGF0aWFsZGV2LmNvbScsXG4gICAgZGF0YTogcHJpbnRQb3N0QXJncyxcbiAgICBzdWNjZXNzOiBvbkltYWdlRXhwb3J0LFxuICAgIGVycm9yOiBvbkVycm9yXG4gIH0pO1xuXG59XG5cbmZ1bmN0aW9uIG9uSW1hZ2VFeHBvcnRTdGFydCgpe1xuICAvL0FsdGVyIHN0YXRlIG9mIGJ1dHRvbnMgd2hpbGUgZXhwb3J0aW5nLlxuICAkKFwiI29wZW5CdG5cIikucmVtb3ZlQ2xhc3MoXCJvblwiKTtcbiAgJChcIiNleHBvcnRCdG4gLmxvYWRpbmdcIikuYWRkQ2xhc3MoXCJvblwiKTtcbiAgJChcIiNleHBvcnRCdG4gLmNvbnRlbnRcIikucmVtb3ZlQ2xhc3MoXCJvblwiKTtcbiAgJChcIiNleHBvcnRCdG4gI2V4cG9ydC1nbHlwaFwiKS5yZW1vdmVDbGFzcyhcIm9uXCIpO1xuICAkKFwiI3Jlc2V0QnV0dG9uXCIpLnJlbW92ZUNsYXNzKFwib25cIik7XG59XG5cbmZ1bmN0aW9uIG9uSW1hZ2VFeHBvcnQocmVzdWx0KSB7XG4gIC8vaW5zdGVhZCwgc2hvdyBhIGJ1dHRvbi9oeXBlcmxpbmsgZm9yIHRoZSB1c2VyIHRvIG9wZW4gdGhlIGltYWdlLlxuICAkKFwiI29wZW5CdG4gYS5vcGVuXCIpLmF0dHIoXCJocmVmXCIsIHJlc3VsdC5pbWFnZSkuYWRkQ2xhc3MoXCJvblwiKTtcbiAgJChcIiNvcGVuQnRuXCIpLmFkZENsYXNzKFwib25cIik7XG4gICQoXCIjZXhwb3J0QnRuXCIpLnJlbW92ZUNsYXNzKFwib25cIik7XG4gICQoXCIjZXhwb3J0QnRuIC5sb2FkaW5nXCIpLnJlbW92ZUNsYXNzKFwib25cIik7XG4gICQoXCIjZXhwb3J0QnRuIC5jb250ZW50XCIpLnJlbW92ZUNsYXNzKFwib25cIik7XG4gICQoXCIjZXhwb3J0QnRuICNleHBvcnQtZ2x5cGhcIikucmVtb3ZlQ2xhc3MoXCJvblwiKTtcbiAgJChcIiNyZXNldEJ1dHRvblwiKS5hZGRDbGFzcyhcIm9uXCIpO1xufVxuXG5mdW5jdGlvbiByZXNldEV4cG9ydEJ1dHRvbnMoKSB7XG4gIC8vaW5zdGVhZCwgc2hvdyBhIGJ1dHRvbi9oeXBlcmxpbmsgZm9yIHRoZSB1c2VyIHRvIG9wZW4gdGhlIGltYWdlLlxuICAkKFwiI29wZW5CdG5cIikucmVtb3ZlQ2xhc3MoXCJvblwiKTtcbiAgJChcIiNleHBvcnRCdG5cIikuYWRkQ2xhc3MoXCJvblwiKTtcbiAgJChcIiNleHBvcnRCdG4gLmxvYWRpbmdcIikucmVtb3ZlQ2xhc3MoXCJvblwiKTtcbiAgJChcIiNleHBvcnRCdG4gLmNvbnRlbnRcIikuYWRkQ2xhc3MoXCJvblwiKTtcbiAgJChcIiNleHBvcnRCdG4gI2V4cG9ydC1nbHlwaFwiKS5hZGRDbGFzcyhcIm9uXCIpO1xuICAkKFwiI3Jlc2V0QnV0dG9uXCIpLnJlbW92ZUNsYXNzKFwib25cIik7XG59XG5cblxuZnVuY3Rpb24gb25FcnJvcihjYikge1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcmludDogcHJpbnQsXG4gIHJlc2V0OiByZXNldEV4cG9ydEJ1dHRvbnNcbn07Il19
