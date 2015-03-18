(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/SpatialDev/Documents/SpatialViewer/summary/src/charts.js":[function(require,module,exports){
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

},{"./config":"/Users/SpatialDev/Documents/SpatialViewer/summary/src/config.js"}],"/Users/SpatialDev/Documents/SpatialViewer/summary/src/config.js":[function(require,module,exports){
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


},{}],"/Users/SpatialDev/Documents/SpatialViewer/summary/src/data.js":[function(require,module,exports){
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
},{}],"/Users/SpatialDev/Documents/SpatialViewer/summary/src/main.js":[function(require,module,exports){
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
},{"./charts":"/Users/SpatialDev/Documents/SpatialViewer/summary/src/charts.js","./data":"/Users/SpatialDev/Documents/SpatialViewer/summary/src/data.js","./map":"/Users/SpatialDev/Documents/SpatialViewer/summary/src/map.js","./print":"/Users/SpatialDev/Documents/SpatialViewer/summary/src/print.js"}],"/Users/SpatialDev/Documents/SpatialViewer/summary/src/map.js":[function(require,module,exports){
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
},{"./config":"/Users/SpatialDev/Documents/SpatialViewer/summary/src/config.js"}],"/Users/SpatialDev/Documents/SpatialViewer/summary/src/print.js":[function(require,module,exports){

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
},{}]},{},["/Users/SpatialDev/Documents/SpatialViewer/summary/src/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvbGliL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL1NwYXRpYWxEZXYvRG9jdW1lbnRzL1NwYXRpYWxWaWV3ZXIvc3VtbWFyeS9zcmMvY2hhcnRzLmpzIiwiL1VzZXJzL1NwYXRpYWxEZXYvRG9jdW1lbnRzL1NwYXRpYWxWaWV3ZXIvc3VtbWFyeS9zcmMvY29uZmlnLmpzIiwiL1VzZXJzL1NwYXRpYWxEZXYvRG9jdW1lbnRzL1NwYXRpYWxWaWV3ZXIvc3VtbWFyeS9zcmMvZGF0YS5qcyIsIi9Vc2Vycy9TcGF0aWFsRGV2L0RvY3VtZW50cy9TcGF0aWFsVmlld2VyL3N1bW1hcnkvc3JjL21haW4uanMiLCIvVXNlcnMvU3BhdGlhbERldi9Eb2N1bWVudHMvU3BhdGlhbFZpZXdlci9zdW1tYXJ5L3NyYy9tYXAuanMiLCIvVXNlcnMvU3BhdGlhbERldi9Eb2N1bWVudHMvU3BhdGlhbFZpZXdlci9zdW1tYXJ5L3NyYy9wcmludC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgQ29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcnKTtcblxudmFyIENoYXJ0cyA9IHt9O1xuXG52YXIgZGVmYXVsdFBhbGV0dGUgPSBbXG4gICcjOWIyNDJkJyxcbiAgJyMzMDg2YWInLFxuICAnIzk3N2MwMCcsXG4gICcjYTRjNzhjJyxcbiAgJyNjZTZiMjknLFxuICAnIzU5NDUyYScsXG4gICcjOGNiN2M3JyxcbiAgJyNkMDk4ZDUnLFxuICAnI2Q1OTg5OCcsXG4gICcjNTY3ZDU0JyxcbiAgJyNiNjk4NWUnLFxuICAnI2ZmNWQ1ZCcsXG4gICcjZDVjYjk4J1xuXTtcblxuQ2hhcnRzLmNyZWF0ZUZTUCA9IGZ1bmN0aW9uKGZzcCkge1xuICBmc3BUeXBlc0Jhcihmc3AudHlwZSk7XG4gIGZzcFR5cGVzUGllKGZzcC50eXBlKTtcbiAgZnNwQXNzb2NCdXNCYXIoZnNwLmFzc29jX2J1c2luZXNzKTtcbiAgZnNwQXNzb2NCdXNQaWUoZnNwLmFzc29jX2J1c2luZXNzKTtcbiAgZnNwQXNzb2NCYW5rQmFyKGZzcC5hc3NvY19iYW5rKTtcbiAgZnNwQXNzb2NCYW5rUGllKGZzcC5hc3NvY19iYW5rKTtcbn07XG5cbmZ1bmN0aW9uIGZvcm1hdEJhckZsb3REYXRhKGRhdGEsIHNlY3Rvcikge1xuICB2YXIgZmxvdERhdGEgPSBbXTtcbiAgdmFyIHRpY2tzID0gW107XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSkuc29ydCgpO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0ga2V5cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBuYW1lID0ga2V5c1tpXTtcbiAgICBpZiAobmFtZSA9PT0gJ251bGwnKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdmFyIGNvdW50ID0gZGF0YVtuYW1lXTtcbiAgICB2YXIgY29sb3IgPSAnIzRENTM2MCc7IC8vIGRhcmsgZ3JleVxuICAgIHZhciBjb25maWcgPSBDb25maWdbc2VjdG9yXVtuYW1lXTtcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICBjb2xvciA9IGNvbmZpZy5jb2xvcjtcbiAgICB9XG4gICAgdmFyIGRhdGFPYmogPSB7XG4gICAgICBkYXRhOiBbW2ksIGNvdW50XV0sXG4gICAgICBjb2xvcjogY29sb3JcbiAgICB9O1xuICAgIHRpY2tzLnB1c2goW2ksIG5hbWUucmVwbGFjZSgvXFwvL2csICcgLyAnKV0pO1xuICAgIGZsb3REYXRhLnB1c2goZGF0YU9iaik7XG4gIH1cbiAgcmV0dXJuIHt0aWNrczp0aWNrcywgZmxvdERhdGE6ZmxvdERhdGF9O1xufVxuXG5mdW5jdGlvbiBmb3JtYXRCYXJGbG90RGF0YVJhbmRDb2xvcihkYXRhKSB7XG4gIHZhciBmbG90RGF0YSA9IFtdO1xuICB2YXIgdGlja3MgPSBbXTtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKS5zb3J0KCk7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBrZXlzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIG5hbWUgPSBrZXlzW2ldO1xuICAgIGlmIChuYW1lID09PSAnbnVsbCcpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB2YXIgY291bnQgPSBkYXRhW25hbWVdO1xuICAgIHZhciBjb2xvciA9IGRlZmF1bHRQYWxldHRlW2ldO1xuICAgIHZhciBkYXRhT2JqID0ge1xuICAgICAgZGF0YTogW1tpLCBjb3VudF1dLFxuICAgICAgY29sb3I6IGNvbG9yXG4gICAgfTtcbiAgICB0aWNrcy5wdXNoKFtpLCBuYW1lLnJlcGxhY2UoL1xcLy9nLCAnIC8gJyldKTtcbiAgICBmbG90RGF0YS5wdXNoKGRhdGFPYmopO1xuICB9XG4gIHJldHVybiB7dGlja3M6dGlja3MsIGZsb3REYXRhOmZsb3REYXRhfTtcbn1cblxuZnVuY3Rpb24gZnNwVHlwZXNCYXIodHlwZSkge1xuICB2YXIgZm9ybWF0ID0gZm9ybWF0QmFyRmxvdERhdGEodHlwZSwgJ2ZzcCcpO1xuICB2YXIgZmxvdERhdGEgPSBmb3JtYXQuZmxvdERhdGE7XG4gIHZhciB0aWNrcyA9IGZvcm1hdC50aWNrcztcblxuICBpZiAoZmxvdERhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgJCgnI2ZzcC10eXBlcy1iYXInKS5odG1sKCc8aDI+Tm8gRGF0YSBBdmFpbGFibGU8L2gyPicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gICQucGxvdCgnI2ZzcC10eXBlcy1iYXInLCBmbG90RGF0YSwge1xuICAgIHNlcmllczoge1xuICAgICAgYmFyczoge1xuICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICBiYXJXaWR0aDogMC42LFxuICAgICAgICBhbGlnbjogXCJjZW50ZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgZ3JpZDoge1xuICAgICAgaG92ZXJhYmxlOiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgICB4YXhpczoge1xuICAgICAgdGlja3M6IHRpY2tzXG4gICAgfVxuICB9KTtcblxuICAkKCcjZnNwLXR5cGVzLWJhcicpLmJpbmQoXCJwbG90aG92ZXJcIiwgZnVuY3Rpb24gKGV2ZW50LCBwb3MsIGl0ZW0pIHtcbiAgICB0b29sdGlwKHBvcywgaXRlbSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmc3BBc3NvY0J1c0JhcihidXMpIHtcbiAgdmFyIGZvcm1hdCA9IGZvcm1hdEJhckZsb3REYXRhUmFuZENvbG9yKGJ1cyk7XG4gIHZhciBmbG90RGF0YSA9IGZvcm1hdC5mbG90RGF0YTtcbiAgdmFyIHRpY2tzID0gZm9ybWF0LnRpY2tzO1xuXG4gIGlmIChmbG90RGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAkKCcjZnNwLWFzc29jLWJ1cy1iYXInKS5odG1sKCc8aDI+Tm8gRGF0YSBBdmFpbGFibGU8L2gyPicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gICQucGxvdChcIiNmc3AtYXNzb2MtYnVzLWJhclwiLCBmbG90RGF0YSwge1xuICAgIHNlcmllczoge1xuICAgICAgYmFyczoge1xuICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICBiYXJXaWR0aDogMC42LFxuICAgICAgICBhbGlnbjogXCJjZW50ZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgZ3JpZDoge1xuICAgICAgaG92ZXJhYmxlOiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgICB4YXhpczoge1xuICAgICAgdGlja3M6IHRpY2tzXG4gICAgfVxuICB9KTtcblxuICAkKCcjZnNwLWFzc29jLWJ1cy1iYXInKS5iaW5kKFwicGxvdGhvdmVyXCIsIGZ1bmN0aW9uIChldmVudCwgcG9zLCBpdGVtKSB7XG4gICAgdG9vbHRpcChwb3MsIGl0ZW0pO1xuICB9KTtcblxufVxuXG5mdW5jdGlvbiBmc3BBc3NvY0JhbmtCYXIoYmFuaykge1xuICB2YXIgZm9ybWF0ID0gZm9ybWF0QmFyRmxvdERhdGFSYW5kQ29sb3IoYmFuayk7XG4gIHZhciBmbG90RGF0YSA9IGZvcm1hdC5mbG90RGF0YTtcbiAgdmFyIHRpY2tzID0gZm9ybWF0LnRpY2tzO1xuXG4gIGlmIChmbG90RGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAkKCcjZnNwLWFzc29jLWJhbmstYmFyJykuaHRtbCgnPGgyPk5vIERhdGEgQXZhaWxhYmxlPC9oMj4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAkLnBsb3QoXCIjZnNwLWFzc29jLWJhbmstYmFyXCIsIGZsb3REYXRhLCB7XG4gICAgc2VyaWVzOiB7XG4gICAgICBiYXJzOiB7XG4gICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgIGJhcldpZHRoOiAwLjYsXG4gICAgICAgIGFsaWduOiBcImNlbnRlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICBob3ZlcmFibGU6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIHhheGlzOiB7XG4gICAgICB0aWNrczogdGlja3NcbiAgICB9XG4gIH0pO1xuXG4gICQoJyNmc3AtYXNzb2MtYmFuay1iYXInKS5iaW5kKFwicGxvdGhvdmVyXCIsIGZ1bmN0aW9uIChldmVudCwgcG9zLCBpdGVtKSB7XG4gICAgdG9vbHRpcChwb3MsIGl0ZW0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0UGllRmxvdERhdGEoZGF0YSwgc2VjdG9yKSB7XG4gIHZhciBmbG90RGF0YSA9IFtdO1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpLnNvcnQoKTtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGtleXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgbmFtZSA9IGtleXNbaV07XG4gICAgaWYgKG5hbWUgPT09ICdudWxsJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHZhciBjb3VudCA9IGRhdGFbbmFtZV07XG4gICAgdmFyIGNvbG9yID0gJyM0RDUzNjAnOyAvLyBkYXJrIGdyZXlcbiAgICB2YXIgY29uZmlnID0gQ29uZmlnW3NlY3Rvcl1bbmFtZV07XG4gICAgaWYgKGNvbmZpZykge1xuICAgICAgY29sb3IgPSBjb25maWcuY29sb3I7XG4gICAgfVxuICAgIHZhciBkYXRhT2JqID0ge1xuICAgICAgZGF0YTogY291bnQsXG4gICAgICBjb2xvcjogY29sb3IsXG4gICAgICBsYWJlbDogbmFtZS5yZXBsYWNlKC9cXC8vZywgJyAvICcpXG4gICAgfTtcbiAgICBmbG90RGF0YS5wdXNoKGRhdGFPYmopO1xuICB9XG4gIHJldHVybiBmbG90RGF0YTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0UGllRmxvdERhdGFSYW5kQ29sb3IoZGF0YSkge1xuICB2YXIgZmxvdERhdGEgPSBbXTtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKS5zb3J0KCk7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBrZXlzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIG5hbWUgPSBrZXlzW2ldO1xuICAgIGlmIChuYW1lID09PSAnbnVsbCcpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB2YXIgdHlwZUNvdW50ID0gZGF0YVtuYW1lXTtcbiAgICB2YXIgY29sb3IgPSBkZWZhdWx0UGFsZXR0ZVtpXTtcblxuICAgIHZhciBkYXRhT2JqID0ge1xuICAgICAgZGF0YTogdHlwZUNvdW50LFxuICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgbGFiZWw6IG5hbWUucmVwbGFjZSgvXFwvL2csICcgLyAnKVxuICAgIH07XG4gICAgZmxvdERhdGEucHVzaChkYXRhT2JqKTtcbiAgfVxuICByZXR1cm4gZmxvdERhdGE7XG59XG5cbmZ1bmN0aW9uIHBpZUZvcm1hdHRlcihsYWJlbCwgc2VyaWVzKSB7XG4gIGlmIChsYWJlbC5sZW5ndGggPiAxMCkge1xuICAgIHZhciB3b3JkcyA9IGxhYmVsLnNwbGl0KCcgJyk7XG4gICAgaWYgKHdvcmRzWzJdKSB7XG4gICAgICB3b3Jkc1sxXSA9IHdvcmRzWzFdICsgJzxici8+JztcbiAgICAgIGxhYmVsID0gd29yZHMuam9pbignICcpO1xuICAgIH1cbiAgfVxuICBpZiAoc2VyaWVzLnBlcmNlbnQgPCAxNSkge1xuICAgIHJldHVybiBcIjxkaXYgc3R5bGU9J2ZvbnQtc2l6ZTo4cHQ7IHRleHQtYWxpZ246Y2VudGVyOyBwYWRkaW5nOjJweDsgY29sb3I6d2hpdGU7Jz5cIiArIE1hdGgucm91bmQoc2VyaWVzLnBlcmNlbnQpICsgXCIlPC9kaXY+XCI7XG4gIH1cbiAgcmV0dXJuIFwiPGRpdiBzdHlsZT0nZm9udC1zaXplOjhwdDsgdGV4dC1hbGlnbjpjZW50ZXI7IHBhZGRpbmc6MnB4OyBjb2xvcjp3aGl0ZTsnPlwiICsgbGFiZWwgKyBcIjxici8+XCIgKyBNYXRoLnJvdW5kKHNlcmllcy5wZXJjZW50KSArIFwiJTwvZGl2PlwiO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMYWJlbE9iamVjdCgpIHtcbiAgcmV0dXJuIHtcbiAgICBzaG93OiB0cnVlLFxuICAgIHJhZGl1czogMC42LFxuICAgIGZvcm1hdHRlcjogcGllRm9ybWF0dGVyLFxuICAgIHRocmVzaG9sZDogMC4wOCxcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICBvcGFjaXR5OiAwXG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBmc3BUeXBlc1BpZSh0eXBlKSB7XG4gIHZhciBmbG90RGF0YSA9IGZvcm1hdFBpZUZsb3REYXRhKHR5cGUsICdmc3AnKTtcblxuICBpZiAoZmxvdERhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgJC5wbG90KCcjZnNwLXR5cGVzLXBpZScsIGZsb3REYXRhLCB7XG4gICAgc2VyaWVzOiB7XG4gICAgICBwaWU6IHtcbiAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgcmFkaXVzOiAxLFxuICAgICAgICBsYWJlbDogY3JlYXRlTGFiZWxPYmplY3QoKVxuICAgICAgfVxuICAgIH0sXG4gICAgZ3JpZDoge1xuICAgICAgaG92ZXJhYmxlOiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIHNob3c6IHRydWVcbiAgICB9XG4gIH0pO1xuXG4gICQoJyNmc3AtdHlwZXMtcGllJykuYmluZChcInBsb3Rob3ZlclwiLCBmdW5jdGlvbiAoZXZlbnQsIHBvcywgaXRlbSkge1xuICAgIHRvb2x0aXBQaWUocG9zLCBpdGVtKTtcbiAgfSk7XG5cbn1cblxuZnVuY3Rpb24gZnNwQXNzb2NCdXNQaWUoYnVzKSB7XG4gIHZhciBmbG90RGF0YSA9IGZvcm1hdFBpZUZsb3REYXRhUmFuZENvbG9yKGJ1cyk7XG5cbiAgaWYgKGZsb3REYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gICQucGxvdCgnI2ZzcC1hc3NvYy1idXMtcGllJywgZmxvdERhdGEsIHtcbiAgICBzZXJpZXM6IHtcbiAgICAgIHBpZToge1xuICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICByYWRpdXM6IDEsXG4gICAgICAgIGxhYmVsOiBjcmVhdGVMYWJlbE9iamVjdCgpXG4gICAgICB9XG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICBob3ZlcmFibGU6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIGxlZ2VuZDoge1xuICAgICAgc2hvdzogdHJ1ZVxuICAgIH1cbiAgfSk7XG5cbiAgJCgnI2ZzcC1hc3NvYy1idXMtcGllJykuYmluZChcInBsb3Rob3ZlclwiLCBmdW5jdGlvbiAoZXZlbnQsIHBvcywgaXRlbSkge1xuICAgIHRvb2x0aXBQaWUocG9zLCBpdGVtKTtcbiAgfSk7XG5cbn1cblxuZnVuY3Rpb24gZnNwQXNzb2NCYW5rUGllKGJhbmspIHtcbiAgdmFyIGZsb3REYXRhID0gZm9ybWF0UGllRmxvdERhdGFSYW5kQ29sb3IoYmFuayk7XG5cbiAgaWYgKGZsb3REYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gICQucGxvdCgnI2ZzcC1hc3NvYy1iYW5rLXBpZScsIGZsb3REYXRhLCB7XG4gICAgc2VyaWVzOiB7XG4gICAgICBwaWU6IHtcbiAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgcmFkaXVzOiAxLFxuICAgICAgICBsYWJlbDogY3JlYXRlTGFiZWxPYmplY3QoKVxuICAgICAgfVxuICAgIH0sXG4gICAgZ3JpZDoge1xuICAgICAgaG92ZXJhYmxlOiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIHNob3c6IHRydWVcbiAgICB9XG4gIH0pO1xuXG4gICQoJyNmc3AtYXNzb2MtYmFuay1waWUnKS5iaW5kKFwicGxvdGhvdmVyXCIsIGZ1bmN0aW9uIChldmVudCwgcG9zLCBpdGVtKSB7XG4gICAgdG9vbHRpcFBpZShwb3MsIGl0ZW0pO1xuICB9KTtcblxufVxuXG5cbi8qKlxuICogTElCUkFSWVxuICovXG5DaGFydHMuY3JlYXRlTGlicmFyeSA9IGZ1bmN0aW9uKGxpYnJhcnkpIHtcbiAgbGlicmFyeVR5cGVzQmFyKGxpYnJhcnkudHlwZSk7XG4gIGxpYnJhcnlUeXBlc1BpZShsaWJyYXJ5LnR5cGUpO1xufTtcblxuZnVuY3Rpb24gbGlicmFyeVR5cGVzQmFyKHR5cGUpIHtcbiAgdmFyIGZvcm1hdCA9IGZvcm1hdEJhckZsb3REYXRhKHR5cGUsICdsaWJyYXJ5Jyk7XG4gIHZhciBmbG90RGF0YSA9IGZvcm1hdC5mbG90RGF0YTtcbiAgdmFyIHRpY2tzID0gZm9ybWF0LnRpY2tzO1xuXG4gIGlmIChmbG90RGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAkKCcjbGlicmFyeS10eXBlcy1iYXInKS5odG1sKCc8aDI+Tm8gRGF0YSBBdmFpbGFibGU8L2gyPicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gICQucGxvdChcIiNsaWJyYXJ5LXR5cGVzLWJhclwiLCBmbG90RGF0YSwge1xuICAgIHNlcmllczoge1xuICAgICAgYmFyczoge1xuICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICBiYXJXaWR0aDogMC42LFxuICAgICAgICBhbGlnbjogXCJjZW50ZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgZ3JpZDoge1xuICAgICAgaG92ZXJhYmxlOiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgICB4YXhpczoge1xuICAgICAgdGlja3M6IHRpY2tzXG4gICAgfVxuICB9KTtcblxuICAkKCcjbGlicmFyeS10eXBlcy1iYXInKS5iaW5kKFwicGxvdGhvdmVyXCIsIGZ1bmN0aW9uIChldmVudCwgcG9zLCBpdGVtKSB7XG4gICAgdG9vbHRpcChwb3MsIGl0ZW0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbGlicmFyeVR5cGVzUGllKHR5cGUpIHtcbiAgdmFyIGZsb3REYXRhID0gZm9ybWF0UGllRmxvdERhdGEodHlwZSwgJ2xpYnJhcnknKTtcblxuICBpZiAoZmxvdERhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgJC5wbG90KCcjbGlicmFyeS10eXBlcy1waWUnLCBmbG90RGF0YSwge1xuICAgIHNlcmllczoge1xuICAgICAgcGllOiB7XG4gICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgIHJhZGl1czogMSxcbiAgICAgICAgbGFiZWw6IGNyZWF0ZUxhYmVsT2JqZWN0KClcbiAgICAgIH1cbiAgICB9LFxuICAgIGdyaWQ6IHtcbiAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgbGVnZW5kOiB7XG4gICAgICBzaG93OiB0cnVlXG4gICAgfVxuICB9KTtcblxuICAkKCcjbGlicmFyeS10eXBlcy1waWUnKS5iaW5kKFwicGxvdGhvdmVyXCIsIGZ1bmN0aW9uIChldmVudCwgcG9zLCBpdGVtKSB7XG4gICAgdG9vbHRpcFBpZShwb3MsIGl0ZW0pO1xuICB9KTtcblxufVxuXG4vKipcbiAqIEhFQUxUSFxuICovXG5DaGFydHMuY3JlYXRlSGVhbHRoID0gZnVuY3Rpb24oaGVhbHRoKSB7XG4gIGhlYWx0aFR5cGVzQmFyKGhlYWx0aC50eXBlKTtcbiAgaGVhbHRoVHlwZXNQaWUoaGVhbHRoLnR5cGUpO1xufTtcblxuZnVuY3Rpb24gaGVhbHRoVHlwZXNCYXIodHlwZSkge1xuICB2YXIgZm9ybWF0ID0gZm9ybWF0QmFyRmxvdERhdGEodHlwZSwgJ2hlYWx0aCcpO1xuICB2YXIgZmxvdERhdGEgPSBmb3JtYXQuZmxvdERhdGE7XG4gIHZhciB0aWNrcyA9IGZvcm1hdC50aWNrcztcblxuICBpZiAoZmxvdERhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgJCgnI2hlYWx0aC10eXBlcy1iYXInKS5odG1sKCc8aDI+Tm8gRGF0YSBBdmFpbGFibGU8L2gyPicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gICQucGxvdChcIiNoZWFsdGgtdHlwZXMtYmFyXCIsIGZsb3REYXRhLCB7XG4gICAgc2VyaWVzOiB7XG4gICAgICBiYXJzOiB7XG4gICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgIGJhcldpZHRoOiAwLjYsXG4gICAgICAgIGFsaWduOiBcImNlbnRlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICBob3ZlcmFibGU6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIHhheGlzOiB7XG4gICAgICB0aWNrczogdGlja3NcbiAgICB9XG4gIH0pO1xuXG4gICQoJyNoZWFsdGgtdHlwZXMtYmFyJykuYmluZChcInBsb3Rob3ZlclwiLCBmdW5jdGlvbiAoZXZlbnQsIHBvcywgaXRlbSkge1xuICAgIHRvb2x0aXAocG9zLCBpdGVtKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhlYWx0aFR5cGVzUGllKHR5cGUpIHtcbiAgdmFyIGZsb3REYXRhID0gZm9ybWF0UGllRmxvdERhdGEodHlwZSwgJ2hlYWx0aCcpO1xuXG4gIGlmIChmbG90RGF0YS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAkLnBsb3QoJyNoZWFsdGgtdHlwZXMtcGllJywgZmxvdERhdGEsIHtcbiAgICBzZXJpZXM6IHtcbiAgICAgIHBpZToge1xuICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICByYWRpdXM6IDEsXG4gICAgICAgIGxhYmVsOiBjcmVhdGVMYWJlbE9iamVjdCgpXG4gICAgICB9XG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICBob3ZlcmFibGU6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIGxlZ2VuZDoge1xuICAgICAgc2hvdzogdHJ1ZVxuICAgIH1cbiAgfSk7XG5cbiAgJCgnI2hlYWx0aC10eXBlcy1waWUnKS5iaW5kKFwicGxvdGhvdmVyXCIsIGZ1bmN0aW9uIChldmVudCwgcG9zLCBpdGVtKSB7XG4gICAgdG9vbHRpcFBpZShwb3MsIGl0ZW0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBBR1JJQ1VMVFVSRVxuICovXG5DaGFydHMuY3JlYXRlQWdyaWN1bHR1cmUgPSBmdW5jdGlvbihhZ3JpY3VsdHVyZSkge1xuICBhZ3JpY3VsdHVyZVR5cGVzQmFyKGFncmljdWx0dXJlLnR5cGUpO1xuICBhZ3JpY3VsdHVyZVR5cGVzUGllKGFncmljdWx0dXJlLnR5cGUpO1xuICBhZ3JpY3VsdHVyZVNlZWRNdWx0aXBsaWVyQmFyKGFncmljdWx0dXJlLnNlZWRfbXVsaXBsaWVyKTtcbiAgYWdyaWN1bHR1cmVTZWVkTXVsdGlwbGllclBpZShhZ3JpY3VsdHVyZS5zZWVkX211bGlwbGllcik7XG59O1xuXG5mdW5jdGlvbiBhZ3JpY3VsdHVyZVR5cGVzQmFyKHR5cGUpIHtcbiAgdmFyIGZvcm1hdCA9IGZvcm1hdEJhckZsb3REYXRhKHR5cGUsICdhZ3JpY3VsdHVyZScpO1xuICB2YXIgZmxvdERhdGEgPSBmb3JtYXQuZmxvdERhdGE7XG4gIHZhciB0aWNrcyA9IGZvcm1hdC50aWNrcztcblxuICBpZiAoZmxvdERhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgJCgnI2FncmljdWx0dXJlLXR5cGVzLWJhcicpLmh0bWwoJzxoMj5ObyBEYXRhIEF2YWlsYWJsZTwvaDI+Jyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgJC5wbG90KFwiI2FncmljdWx0dXJlLXR5cGVzLWJhclwiLCBmbG90RGF0YSwge1xuICAgIHNlcmllczoge1xuICAgICAgYmFyczoge1xuICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICBiYXJXaWR0aDogMC42LFxuICAgICAgICBhbGlnbjogXCJjZW50ZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgZ3JpZDoge1xuICAgICAgaG92ZXJhYmxlOiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgICB4YXhpczoge1xuICAgICAgdGlja3M6IHRpY2tzXG4gICAgfVxuICB9KTtcblxuICAkKCcjYWdyaWN1bHR1cmUtdHlwZXMtYmFyJykuYmluZChcInBsb3Rob3ZlclwiLCBmdW5jdGlvbiAoZXZlbnQsIHBvcywgaXRlbSkge1xuICAgIHRvb2x0aXAocG9zLCBpdGVtKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFncmljdWx0dXJlVHlwZXNQaWUodHlwZSkge1xuICB2YXIgZmxvdERhdGEgPSBmb3JtYXRQaWVGbG90RGF0YSh0eXBlLCAnYWdyaWN1bHR1cmUnKTtcblxuICBpZiAoZmxvdERhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgJC5wbG90KCcjYWdyaWN1bHR1cmUtdHlwZXMtcGllJywgZmxvdERhdGEsIHtcbiAgICBzZXJpZXM6IHtcbiAgICAgIHBpZToge1xuICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICByYWRpdXM6IDEsXG4gICAgICAgIGxhYmVsOiBjcmVhdGVMYWJlbE9iamVjdCgpXG4gICAgICB9XG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICBob3ZlcmFibGU6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIGxlZ2VuZDoge1xuICAgICAgc2hvdzogdHJ1ZVxuICAgIH1cbiAgfSk7XG5cbiAgJCgnI2FncmljdWx0dXJlLXR5cGVzLXBpZScpLmJpbmQoXCJwbG90aG92ZXJcIiwgZnVuY3Rpb24gKGV2ZW50LCBwb3MsIGl0ZW0pIHtcbiAgICB0b29sdGlwUGllKHBvcywgaXRlbSk7XG4gIH0pO1xuXG59XG5cbmZ1bmN0aW9uIGFncmljdWx0dXJlU2VlZE11bHRpcGxpZXJCYXIobXVsdGlwbGllcikge1xuICB2YXIgZm9ybWF0ID0gZm9ybWF0QmFyRmxvdERhdGFSYW5kQ29sb3IobXVsdGlwbGllciwgJ2FncmljdWx0dXJlJyk7XG4gIHZhciBmbG90RGF0YSA9IGZvcm1hdC5mbG90RGF0YTtcbiAgdmFyIHRpY2tzID0gZm9ybWF0LnRpY2tzO1xuXG4gIGlmIChmbG90RGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAkKCcjYWdyaWN1bHR1cmUtc2VlZF9tdWxpcGxpZXItYmFyJykuaHRtbCgnPGgyPk5vIERhdGEgQXZhaWxhYmxlPC9oMj4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAkLnBsb3QoXCIjYWdyaWN1bHR1cmUtc2VlZF9tdWxpcGxpZXItYmFyXCIsIGZsb3REYXRhLCB7XG4gICAgc2VyaWVzOiB7XG4gICAgICBiYXJzOiB7XG4gICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgIGJhcldpZHRoOiAwLjYsXG4gICAgICAgIGFsaWduOiBcImNlbnRlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICBob3ZlcmFibGU6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIHhheGlzOiB7XG4gICAgICB0aWNrczogdGlja3NcbiAgICB9XG4gIH0pO1xuXG4gICQoJyNhZ3JpY3VsdHVyZS1zZWVkX211bGlwbGllci1iYXInKS5iaW5kKFwicGxvdGhvdmVyXCIsIGZ1bmN0aW9uIChldmVudCwgcG9zLCBpdGVtKSB7XG4gICAgdG9vbHRpcChwb3MsIGl0ZW0pO1xuICB9KTtcblxufVxuXG5mdW5jdGlvbiBhZ3JpY3VsdHVyZVNlZWRNdWx0aXBsaWVyUGllKG11bHRpcGxpZXIpIHtcbiAgdmFyIGZsb3REYXRhID0gZm9ybWF0UGllRmxvdERhdGFSYW5kQ29sb3IobXVsdGlwbGllciwgJ2FncmljdWx0dXJlJyk7XG5cbiAgaWYgKGZsb3REYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gICQucGxvdCgnI2FncmljdWx0dXJlLXNlZWRfbXVsaXBsaWVyLXBpZScsIGZsb3REYXRhLCB7XG4gICAgc2VyaWVzOiB7XG4gICAgICBwaWU6IHtcbiAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgcmFkaXVzOiAxLFxuICAgICAgICBsYWJlbDogY3JlYXRlTGFiZWxPYmplY3QoKVxuICAgICAgfVxuICAgIH0sXG4gICAgZ3JpZDoge1xuICAgICAgaG92ZXJhYmxlOiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIHNob3c6IHRydWVcbiAgICB9XG4gIH0pO1xuXG4gICQoJyNhZ3JpY3VsdHVyZS1zZWVkX211bGlwbGllci1waWUnKS5iaW5kKFwicGxvdGhvdmVyXCIsIGZ1bmN0aW9uIChldmVudCwgcG9zLCBpdGVtKSB7XG4gICAgdG9vbHRpcFBpZShwb3MsIGl0ZW0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG9vbHRpcChwb3MsIGl0ZW0pIHtcbiAgaWYgKGl0ZW0pIHtcbiAgICB2YXIgY291bnQgPSBpdGVtLmRhdGFwb2ludFsxXTtcbiAgICAkKFwiI3Rvb2x0aXBcIikuaHRtbCgnPGRpdiBjbGFzcz1cInN1bW1hcnktYmx1ZS1udW1iZXJcIj4nK251bWJlcldpdGhDb21tYXMoY291bnQpKyc8L2Rpdj4nK2l0ZW0uc2VyaWVzLnhheGlzLnRpY2tzW2l0ZW0uc2VyaWVzSW5kZXhdLmxhYmVsKVxuICAgICAgICAuY3NzKHt0b3A6IHBvcy5wYWdlWS0zMCwgbGVmdDogcG9zLnBhZ2VYKzEwfSlcbiAgICAgICAgLmZhZGVJbigyMDApO1xuICB9IGVsc2Uge1xuICAgICQoXCIjdG9vbHRpcFwiKS5oaWRlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9vbHRpcFBpZShwb3MsIGl0ZW0pIHtcbiAgaWYgKGl0ZW0pIHtcbiAgICB2YXIgY291bnQgPSBpdGVtLmRhdGFwb2ludFsxXVswXVsxXTtcbiAgICAkKFwiI3Rvb2x0aXBcIikuaHRtbCgnPGRpdiBjbGFzcz1cInN1bW1hcnktYmx1ZS1udW1iZXJcIj4nK251bWJlcldpdGhDb21tYXMoY291bnQpKyc8L2Rpdj4nK2l0ZW0uc2VyaWVzLmxhYmVsKVxuICAgICAgICAuY3NzKHt0b3A6IHBvcy5wYWdlWS0zMCwgbGVmdDogcG9zLnBhZ2VYKzEwfSlcbiAgICAgICAgLmZhZGVJbigyMDApO1xuICB9IGVsc2Uge1xuICAgICQoXCIjdG9vbHRpcFwiKS5oaWRlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbnVtYmVyV2l0aENvbW1hcyh4KSB7XG4gIGlmICh0eXBlb2YgeCA9PT0gJ3VuZGVmaW5lZCcgfHwgeCA9PT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIHJldHVybiB4LnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJ0cztcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBmc3A6IHtcbiAgICAnT2Zmc2l0ZSBBVE1zJzoge1xuICAgICAgY29sb3I6ICcjYTRjNzhjJyxcbiAgICAgIGluZm9MYWJlbDogJ09mZnNpdGUgQVRNJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogNlxuICAgIH0sXG4gICAgJ0JhbmsgQnJhbmNoZXMnOiB7XG4gICAgICBjb2xvcjogJyM5NzdDMDAnLFxuICAgICAgaW5mb0xhYmVsOiAnQmFuayBCcmFuY2gnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA1XG4gICAgfSxcbiAgICAnTUZJcyc6IHtcbiAgICAgIGNvbG9yOiAnIzk3N2MwMCcsXG4gICAgICBpbmZvTGFiZWw6ICdNRkknLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA3XG4gICAgfSxcbiAgICAnU0FDQ09zJzoge1xuICAgICAgY29sb3I6ICcjY2Y4YTU3JyxcbiAgICAgIGluZm9MYWJlbDogJ1NBQ0NPJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogMTBcbiAgICB9LFxuICAgICdNb2JpbGUgTW9uZXkgQWdlbnQnOiB7XG4gICAgICBjb2xvcjogJyM4Q0I3QzcnLFxuICAgICAgaW5mb0xhYmVsOiAnTW9iaWxlIE1vbmV5IEFnZW50JyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogLTFcbiAgICB9LFxuICAgICdNRElzJzoge1xuICAgICAgY29sb3I6ICcjODI1RDk5JyxcbiAgICAgIGluZm9MYWJlbDogJ01ESScsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDZcbiAgICB9LFxuICAgICdDcmVkaXQgSW5zdGl0dXRpb24nOiB7XG4gICAgICBjb2xvcjogJyM2Q0E3NkInLFxuICAgICAgaW5mb0xhYmVsOiAnQ3JlZGl0IEluc3RpdHV0aW9uJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogNVxuICAgIH0sXG4gICAgJ01GQnMnOiB7XG4gICAgICBjb2xvcjogJyM4MjVEOTknLFxuICAgICAgaW5mb0xhYmVsOiAnTUZCJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogN1xuICAgIH0sXG4gICAgJ01vdG9yIFBhcmtzJzoge1xuICAgICAgY29sb3I6ICcjYmQ4NWIzJyxcbiAgICAgIGluZm9MYWJlbDogJ01vdG9yIFBhcmtzJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogN1xuICAgIH0sXG4gICAgJ01vYmlsZSBOZXR3b3JrIE9wZXJhdG9yIE91dGxldHMnOiB7XG4gICAgICBjb2xvcjogJyNhMmEyYTInLFxuICAgICAgaW5mb0xhYmVsOiAnTW9iaWxlIE5ldHdvcmsgT3BlcmF0b3IgT3V0bGV0cycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDBcbiAgICB9LFxuICAgICdQb3N0IE9mZmljZXMnOiB7XG4gICAgICBjb2xvcjogJyNGRkZGMDAnLFxuICAgICAgaW5mb0xhYmVsOiAnUG9zdCBPZmZpY2VzJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogNFxuICAgIH0sXG4gICAgJ1Bvc3QgT2ZmaWNlJzoge1xuICAgICAgY29sb3I6ICcjODBhZDdiJyxcbiAgICAgIGluZm9MYWJlbDogJ1Bvc3QgT2ZmaWNlcycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDZcbiAgICB9LFxuICAgICdCdXMgU3RhbmQnOiB7XG4gICAgICBjb2xvcjogJyM4MGFkN2InLFxuICAgICAgaW5mb0xhYmVsOiAnQnVzIFN0YW5kcycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDZcbiAgICB9LFxuICAgICdCdXMgU3RhbmRzJzoge1xuICAgICAgY29sb3I6ICcjODBhZDdiJyxcbiAgICAgIGluZm9MYWJlbDogJ0J1cyBTdGFuZHMnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA2XG4gICAgfSxcblxuICAgIC8vS2VueWFcbiAgICAnSW5zdXJhbmNlIFByb3ZpZGVycyc6IHtcbiAgICAgIGNvbG9yOiAnIzMwODZBQicsXG4gICAgICBpbmZvTGFiZWw6ICdJbnN1cmFuY2UgcHJvdmlkZXJzJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogNlxuICAgIH0sXG4gICAgJ01vbmV5IFRyYW5zZmVyIFNlcnZpY2UnOiB7XG4gICAgICBjb2xvcjogJyM5NzdDMDAnLFxuICAgICAgaW5mb0xhYmVsOiAnTW9uZXkgVHJhbnNmZXIgU2VydmljZScsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDZcbiAgICB9LFxuICAgICdEZXYgRmluYW5jZSc6IHtcbiAgICAgIGNvbG9yOiAnIzlCMjQyRCcsXG4gICAgICBpbmZvTGFiZWw6ICdEZXYgRmluYW5jZScsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDZcbiAgICB9LFxuICAgICdGb3JleCBCdXJlYXVzJzoge1xuICAgICAgY29sb3I6ICcjY2Y4YTU3JyxcbiAgICAgIGluZm9MYWJlbDogJ0ZvcmV4IEJ1cmVhdXMnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA2XG4gICAgfSxcbiAgICAnQ2FwIE1hcmtldHMnOiB7XG4gICAgICBjb2xvcjogJyM4MjVEOTknLFxuICAgICAgaW5mb0xhYmVsOiAnQ2FwIE1hcmtldHMnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA2XG4gICAgfSxcbiAgICAnUGVuc2lvbiBQcm92aWRlcnMnOiB7XG4gICAgICBjb2xvcjogJyNhMmEyYTInLFxuICAgICAgaW5mb0xhYmVsOiAnUGVuc2lvbiBwcm92aWRlcnMnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA2XG4gICAgfSxcbiAgICAnUHVyY2hhc2UgTGVhc2UgRmFjdG9yaW5nJzoge1xuICAgICAgY29sb3I6ICcjODBhZDdiJyxcbiAgICAgIGluZm9MYWJlbDogJ1B1cmNoYXNlIExlYXNlIEZhY3RvcmluZycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDZcbiAgICB9LFxuICAgICdCYW5rIEFnZW50Jzoge1xuICAgICAgY29sb3I6ICcjODBhZDdiJyxcbiAgICAgIGluZm9MYWJlbDogJ0JhbmsgQWdlbnQnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA2XG4gICAgfSxcbiAgICAnQmFuayBhbmQgTW9ydGdhZ2UnOiB7XG4gICAgICBjb2xvcjogJyM4MGFkN2InLFxuICAgICAgaW5mb0xhYmVsOiAnQmFua3MgYW5kIE1vcnRnYWdlJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogNlxuICAgIH0sXG4gICAgJ0NvbW1lcmNpYWwgQmFuayc6IHtcbiAgICAgIGNvbG9yOiAnIzgwYWQ3YicsXG4gICAgICBpbmZvTGFiZWw6ICdDb21tZXJjaWFsIEJhbmsnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiAzXG4gICAgfSxcblxuICAgICdQb3N0QmFuayc6IHtcbiAgICAgIGNvbG9yOiAnI2JkODViMycsXG4gICAgICBpbmZvTGFiZWw6ICdQb3N0IEJhbmsnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA2XG4gICAgfSxcblxuICAgIC8vTmlnZXJpYSBOZXcgUG9zdCBPZmZpY2VzXG4gICAgJ05JUE9TVCBQb3N0IE9mZmljZSc6IHtcbiAgICAgIGNvbG9yOiAnIzgwYWQ3YicsXG4gICAgICBpbmZvTGFiZWw6ICdOSVBPU1QgUG9zdCBPZmZpY2VzJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogNlxuICAgIH0sXG4gICAgJ05JUE9TVCBQb3N0IFNob3AnOiB7XG4gICAgICBjb2xvcjogJyM4MGFkN2InLFxuICAgICAgaW5mb0xhYmVsOiAnTklQT1NUIFBvc3QgU2hvcHMnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA2XG4gICAgfSxcbiAgICAnTklQT1NUIFBvc3RhbCBBZ2VuY3knOiB7XG4gICAgICBjb2xvcjogJyM4MGFkN2InLFxuICAgICAgaW5mb0xhYmVsOiAnTklQT1NUIFBvc3RhbCBBZ2VuY2llcycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDZcbiAgICB9LFxuXG4gICAgLy9JbmRpYVxuICAgICdQb3N0YWwgT3V0bGV0cyc6IHtcbiAgICAgIGNvbG9yOiAnI2NlNmIyOScsXG4gICAgICBpbmZvTGFiZWw6ICdQb3N0YWwgT3V0bGV0cycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDNcbiAgICB9LFxuICAgICdDb21tZXJjaWFsIEJhbmtzJzoge1xuICAgICAgY29sb3I6ICcjMzA4NmFiJyxcbiAgICAgIGluZm9MYWJlbDogJ0NvbW1lcmNpYWwgQmFua3MnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiAyXG4gICAgfSxcbiAgICAnQmFuayBDdXN0b21lciBTZXJ2aWNlIFBvaW50cyc6IHtcbiAgICAgIGNvbG9yOiAnIzliMjQyZCcsXG4gICAgICBpbmZvTGFiZWw6ICdCYW5rIEN1c3RvbWVyIFNlcnZpY2UgUG9pbnRzJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogNFxuICAgIH1cbiAgfSxcblxuICBsaWJyYXJ5OiB7XG4gICAgJ0Rpc3RyaWN0Jzoge1xuICAgICAgY29sb3I6ICcjOWIyNDJkJyxcbiAgICAgIGluZm9MYWJlbDogJ0Rpc3RyaWN0JyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogNlxuICAgIH0sXG4gICAgJ1ByaXZhdGUgTGlicmFyeSc6IHtcbiAgICAgIGNvbG9yOiAnIzMwODZhYicsXG4gICAgICBpbmZvTGFiZWw6ICdQcml2YXRlIExpYnJhcnknLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA1XG4gICAgfSxcbiAgICAnUHVibGljIExpYnJhcnknOiB7XG4gICAgICBjb2xvcjogJyM5NzdjMDAnLFxuICAgICAgaW5mb0xhYmVsOiAnUHVibGljIExpYnJhcnknLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA3XG4gICAgfSxcbiAgICAnVmlsbGFnZSc6IHtcbiAgICAgIGNvbG9yOiAnI2E0Yzc4YycsXG4gICAgICBpbmZvTGFiZWw6ICdWaWxsYWdlJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogNFxuICAgIH1cbiAgfSxcblxuICBoZWFsdGg6IHtcbiAgICAnQWRkaXRpb25hbCBQcmltYXJ5IEhlYWx0aCBDZW50cmVzIChBUEhDKSc6IHtcbiAgICAgIGNvbG9yOiAnIzliMjQyZCcsXG4gICAgICBpbmZvTGFiZWw6ICdBZGRpdGlvbmFsIFByaW1hcnkgSGVhbHRoIENlbnRyZXMgKEFQSEMpJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogNlxuICAgIH0sXG4gICAgJ0FOTSBvciBEaXN0cmljdCBUcmFpbmluZyBDZW50cmVzJzoge1xuICAgICAgY29sb3I6ICcjMzA4NmFiJyxcbiAgICAgIGluZm9MYWJlbDogJ0FOTSBvciBEaXN0cmljdCBUcmFpbmluZyBDZW50cmVzJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogNVxuICAgIH0sXG4gICAgJ0FwcHJvdmVkIE51cnNpbmcgVHJhaW5pbmcgQ2VudHJlcyAoUHJpdmF0ZSBTZWN0b3IpJzoge1xuICAgICAgY29sb3I6ICcjOTc3YzAwJyxcbiAgICAgIGluZm9MYWJlbDogJ0FwcHJvdmVkIE51cnNpbmcgVHJhaW5pbmcgQ2VudHJlcyAoUHJpdmF0ZSBTZWN0b3IpJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogN1xuICAgIH0sXG4gICAgJ0NvbW11bml0eSBIZWFsdGggQ2VudHJlIChDSEMpL0ZpcnN0IFJlZmVycmFsIFVuaXRzJzoge1xuICAgICAgY29sb3I6ICcjZDVjYjk4JyxcbiAgICAgIGluZm9MYWJlbDogJ0NvbW11bml0eSBIZWFsdGggQ2VudHJlIChDSEMpL0ZpcnN0IFJlZmVycmFsIFVuaXRzJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogNFxuICAgIH0sXG4gICAgJ0Rpc3RyaWN0IEhvc3BpdGFscyc6IHtcbiAgICAgIGNvbG9yOiAnI2NlNmIyOScsXG4gICAgICBpbmZvTGFiZWw6ICdEaXN0cmljdCBIb3NwaXRhbHMnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA1XG4gICAgfSxcbiAgICAnTWVkaWNhbCBDb2xsZWdlcyBhbmQgSG9zcGl0YWxzJzoge1xuICAgICAgY29sb3I6ICcjNTk0NTJhJyxcbiAgICAgIGluZm9MYWJlbDogJ01lZGljYWwgQ29sbGVnZXMgYW5kIEhvc3BpdGFscycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDdcbiAgICB9LFxuICAgICdQcmltYXJ5IEhlYWx0aCBDZW50cmUgKFBIQyknOiB7XG4gICAgICBjb2xvcjogJyM4Y2I3YzcnLFxuICAgICAgaW5mb0xhYmVsOiAnUHJpbWFyeSBIZWFsdGggQ2VudHJlIChQSEMpJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogNFxuICAgIH0sXG4gICAgJ1ByaXZhdGUgaG9zcGl0YWxzIGFuZCBjbGluaWNzJzoge1xuICAgICAgY29sb3I6ICcjZDA5OGQ1JyxcbiAgICAgIGluZm9MYWJlbDogJ1ByaXZhdGUgaG9zcGl0YWxzIGFuZCBjbGluaWNzJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogNVxuICAgIH0sXG4gICAgJ1N1YiBEaXZpc2lvbmFsIERpc3RyaWN0IEhvc3BpdGFscyc6IHtcbiAgICAgIGNvbG9yOiAnI2E0Yzc4YycsXG4gICAgICBpbmZvTGFiZWw6ICdTdWIgRGl2aXNpb25hbCBEaXN0cmljdCBIb3NwaXRhbHMnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA3XG4gICAgfSxcbiAgICAnU3ViIEhlYWx0aCBDZW50cmVzJzoge1xuICAgICAgY29sb3I6ICcjZDU5ODk4JyxcbiAgICAgIGluZm9MYWJlbDogJ1N1YiBEaXZpc2lvbmFsIERpc3RyaWN0IEhvc3BpdGFscycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDdcbiAgICB9LFxuICAgICdOdXJzaW5nIFNjaG9vbHMnOiB7XG4gICAgICBjb2xvcjogJyM1NjdkNTQnLFxuICAgICAgaW5mb0xhYmVsOiAnTnVyc2luZyBTY2hvb2xzJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogNFxuICAgIH1cbiAgfSxcblxuICBhZ3JpY3VsdHVyZToge1xuICAgICdEYWlyeSBQcm9jZXNzb3JzJzoge1xuICAgICAgY29sb3I6ICcjOWIyNDJkJyxcbiAgICAgIGluZm9MYWJlbDogJ0RhaXJ5IFByb2Nlc3NvcnMnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA2XG4gICAgfSxcbiAgICAnRGF5IG9sZCBjaGljayBoYXRjaGVyaWVzJzoge1xuICAgICAgY29sb3I6ICcjMzA4NmFiJyxcbiAgICAgIGluZm9MYWJlbDogJ0RheSBvbGQgY2hpY2sgaGF0Y2hlcmllcycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDVcbiAgICB9LFxuICAgICdQcml2YXRlIHNlY3RvciBBZ3JpY3VsdHVyYWwgc2VydmljZSBwcm92aWRlcnMnOiB7XG4gICAgICBjb2xvcjogJyM5NzdjMDAnLFxuICAgICAgaW5mb0xhYmVsOiAnUHJpdmF0ZSBzZWN0b3IgQWdyaWN1bHR1cmFsIHNlcnZpY2UgcHJvdmlkZXJzJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogN1xuICAgIH0sXG4gICAgJ0dvdmVybm1lbnQgVmV0cyc6IHtcbiAgICAgIGNvbG9yOiAnI2Q1Y2I5OCcsXG4gICAgICBpbmZvTGFiZWw6ICdHb3Zlcm5tZW50IFZldHMnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA0XG4gICAgfSxcbiAgICAnTWFya2V0IExvY2F0aW9ucyc6IHtcbiAgICAgIGNvbG9yOiAnI2NlNmIyOScsXG4gICAgICBpbmZvTGFiZWw6ICdNYXJrZXQgTG9jYXRpb25zJyxcbiAgICAgIHByb3ZpZGVyczogbnVsbCxcbiAgICAgIHpJbmRleDogNVxuICAgIH0sXG4gICAgJ0Fncm8tZGVhbGVycyc6IHtcbiAgICAgIGNvbG9yOiAnIzU5NDUyYScsXG4gICAgICBpbmZvTGFiZWw6ICdBZ3JvLWRlYWxlcnMnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA3XG4gICAgfSxcbiAgICAnV2FyZWhvdXNlL1N0b3JhZ2UvQWdncmVnYXRpb24gQ2VudHJlcyc6IHtcbiAgICAgIGNvbG9yOiAnIzhjYjdjNycsXG4gICAgICBpbmZvTGFiZWw6ICdQcmltYXJ5IEhlYWx0aCBDZW50cmUgKFBIQyknLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA0XG4gICAgfSxcbiAgICAnRGFpcnkgY2hpbGxpbmcgcGxhbnRzJzoge1xuICAgICAgY29sb3I6ICcjZDA5OGQ1JyxcbiAgICAgIGluZm9MYWJlbDogJ0RhaXJ5IGNoaWxsaW5nIHBsYW50cycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDdcbiAgICB9LFxuICAgICdQcm9jZXNzb3JzL3ZhbHVlIGFkZGl0aW9uIHBvaW50cyc6IHtcbiAgICAgIGNvbG9yOiAnI2E0Yzc4YycsXG4gICAgICBpbmZvTGFiZWw6ICdQcm9jZXNzb3JzL3ZhbHVlIGFkZGl0aW9uIHBvaW50cycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDdcbiAgICB9LFxuICAgICdGYXJtZXIgT3JnYW5pc2F0aW9ucyBhbmQgQ29vcGVyYXRpdmVzJzoge1xuICAgICAgY29sb3I6ICcjZDU5ODk4JyxcbiAgICAgIGluZm9MYWJlbDogJ0Zhcm1lciBPcmdhbmlzYXRpb25zIGFuZCBDb29wZXJhdGl2ZXMnLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA0XG4gICAgfSxcbiAgICAnQXJ0aWZpY2lhbCBJbnNlbWluYXRpb24gQ2VudHJlcyc6IHtcbiAgICAgIGNvbG9yOiAnIzU2N2Q1NCcsXG4gICAgICBpbmZvTGFiZWw6ICdQcmltYXJ5IEhlYWx0aCBDZW50cmUgKFBIQyknLFxuICAgICAgcHJvdmlkZXJzOiBudWxsLFxuICAgICAgekluZGV4OiA0XG4gICAgfSxcbiAgICAnTmF0aW9uYWwvUmVnaW9uYWwvU3RhdGUgUmVzZWFyY2ggU3RhdGlvbnMnOiB7XG4gICAgICBjb2xvcjogJyNiNjk4NWUnLFxuICAgICAgaW5mb0xhYmVsOiAnV2FyZWhvdXNlL1N0b3JhZ2UvQWdncmVnYXRpb24gQ2VudHJlcycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDVcbiAgICB9LFxuICAgICdTZWVkIE11bHRpcGxpZXJzJzoge1xuICAgICAgY29sb3I6ICcjZmY1ZDVkJyxcbiAgICAgIGluZm9MYWJlbDogJ0RhaXJ5IGNoaWxsaW5nIHBsYW50cycsXG4gICAgICBwcm92aWRlcnM6IG51bGwsXG4gICAgICB6SW5kZXg6IDdcbiAgICB9XG4gIH1cblxufTtcblxuIiwidmFyIHZlY3RvcmdhdG9yT3JpZ2luID0gJ2h0dHA6Ly9zcGF0aWFsc2VydmVyLnNwYXRpYWxkZXYuY29tL2ZzcC8yMDE0Lyc7XG5cbnZhciB2ZWN0b3JnYXRvciA9IHtcbiAgZnNwOiBudWxsLFxuICBsaWJyYXJ5OiBudWxsLFxuICBoZWFsdGg6IG51bGwsXG4gIGFncmljdWx0dXJlOiBudWxsXG59O1xuXG5cbnZhciBmZXRjaGVzID0gNDtcblxuZnVuY3Rpb24gZmV0Y2goaWQsIGNiKSB7XG4gICQuZ2V0SlNPTih2ZWN0b3JnYXRvck9yaWdpbiArICdmc3AvYWdncmVnYXRpb25zLWZ1bGwvJyArIGlkICsgJy5qc29uJywgZnVuY3Rpb24oZGF0YSkge1xuICAgIGRhdGEuYXNzb2NfYmFuayA9IGZpbHRlclRvT3RoZXIoZGF0YS5hc3NvY19iYW5rLCAxKTtcbiAgICBkYXRhLmFzc29jX2J1c2luZXNzID0gZmlsdGVyVG9PdGhlcihkYXRhLmFzc29jX2J1c2luZXNzLCAxKTtcbiAgICB2ZWN0b3JnYXRvci5mc3AgPSBkYXRhO1xuICAgIC0tZmV0Y2hlcztcbiAgICBhamF4Q29tcGxldGUoY2IpO1xuICB9KTtcblxuICAkLmdldEpTT04odmVjdG9yZ2F0b3JPcmlnaW4gKyAnbGlicmFyeS9hZ2dyZWdhdGlvbnMtZnVsbC8nICsgaWQgKyAnLmpzb24nLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmVjdG9yZ2F0b3IubGlicmFyeSA9IGRhdGE7XG4gICAgLS1mZXRjaGVzO1xuICAgIGFqYXhDb21wbGV0ZShjYik7XG4gIH0pO1xuXG4gICQuZ2V0SlNPTih2ZWN0b3JnYXRvck9yaWdpbiArICdoZWFsdGgvYWdncmVnYXRpb25zLycgKyBpZCArICcuanNvbicsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2ZWN0b3JnYXRvci5oZWFsdGggPSBkYXRhO1xuICAgIC0tZmV0Y2hlcztcbiAgICBhamF4Q29tcGxldGUoY2IpO1xuICB9KTtcblxuICAkLmdldEpTT04odmVjdG9yZ2F0b3JPcmlnaW4gKyAnYWdyaWN1bHR1cmUvYWdncmVnYXRpb25zLycgKyBpZCArICcuanNvbicsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2ZWN0b3JnYXRvci5hZ3JpY3VsdHVyZSA9IGRhdGE7XG4gICAgLS1mZXRjaGVzO1xuICAgIGFqYXhDb21wbGV0ZShjYik7XG4gIH0pO1xufVxuXG5cbmZ1bmN0aW9uIGFqYXhDb21wbGV0ZShjYikge1xuICBpZiAoZmV0Y2hlcyA+IDApIHJldHVybjtcbiAgY2IodmVjdG9yZ2F0b3IpO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJUb090aGVyKG9iaiwgcGVyY2VudEN1dG9mZikge1xuICB2YXIgZmlsdGVyZWRPYmogPSB7XG4gICAgT3RoZXI6IDBcbiAgfTtcbiAgdmFyIHRvdGFsID0gMDtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIHRvdGFsICs9IG9ialtrZXldO1xuICB9XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICB2YXIgdmFsID0gb2JqW2tleV07XG4gICAgdmFyIHBlcmMgPSAodmFsIC8gdG90YWwpICogMTAwO1xuICAgIGlmIChwZXJjIDwgcGVyY2VudEN1dG9mZikge1xuICAgICAgZmlsdGVyZWRPYmouT3RoZXIgKz0gdmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWx0ZXJlZE9ialtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmlsdGVyZWRPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmZXRjaDogZmV0Y2hcbn07IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAxMC8xNy8xNC5cbiAqL1xuZGVidWcgPSB7fTtcblxudmFyIE1hcCA9IHJlcXVpcmUoJy4vbWFwJyk7XG52YXIgQ2hhcnRzID0gcmVxdWlyZSgnLi9jaGFydHMnKTtcbnZhciBEYXRhID0gcmVxdWlyZSgnLi9kYXRhJyk7XG52YXIgUHJpbnQgPSByZXF1aXJlKCcuL3ByaW50Jyk7XG5cbmZ1bmN0aW9uIGdldFJvdXRlKCkge1xuICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICB2YXIgcGFyYW1zID0gaGFzaC5zbGljZSgxKS5zcGxpdCgnJicpO1xuICB2YXIgcGFyYW1PYmogPSB7fTtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhcmFtcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBwYXJhbSA9IHBhcmFtc1tpXTtcbiAgICB2YXIgcEFyciA9IHBhcmFtLnNwbGl0KCc9Jyk7XG4gICAgdmFyIGtleSA9IHBBcnJbMF07XG4gICAgdmFyIHZhbCA9IHBBcnJbMV07XG4gICAgcGFyYW1PYmpba2V5XSA9IHZhbDtcbiAgfVxuICByZXR1cm4gcGFyYW1PYmo7XG59XG5cbnZhciByb3V0ZSA9IGdldFJvdXRlKCk7XG52YXIgZGF0YUZldGNoZWQgPSBmYWxzZTtcbnZhciBpZCA9IHJvdXRlLmlkIHx8IDI0NDI7XG52YXIgb3JpZ2luID0gcm91dGUub3JpZ2luIHx8ICdodHRwOi8vZnNwbWFwcy5jb20vJztcblxuZnVuY3Rpb24gc2V0QWN0aXZlU2VjdG9yRnJvbVJvdXRlKHJvdXRlKSB7XG4gIGlmICghcm91dGUuc2VjdG9yKSByZXR1cm47XG4gICQoJy5uYXYtdGFicyBhW2hyZWY9XCIjJyArIHJvdXRlLnNlY3RvciArICdcIl0nKS50YWIoJ3Nob3cnKTtcbn1cbnNldEFjdGl2ZVNlY3RvckZyb21Sb3V0ZShyb3V0ZSk7XG5cbnZhciB0YWJzSW5pdGlhbGl6ZWQgPSB7fTtcblxuZnVuY3Rpb24gc2V0dXBUYWIoc2VjdG9yKSB7XG4gIGlmICghZGF0YUZldGNoZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHRhYnNJbml0aWFsaXplZFtzZWN0b3JdKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHNldHVwU2VjdG9yKHNlY3Rvcik7XG4gIHRhYnNJbml0aWFsaXplZFtzZWN0b3JdID0gdHJ1ZTtcbn1cblxuJCgnYVtkYXRhLXRvZ2dsZT1cInRhYlwiXScpLm9uKCdzaG93bi5icy50YWInLCBmdW5jdGlvbiAoZSkge1xuICB2YXIgc2VjdG9yID0gZS50YXJnZXQuaGFzaC5zbGljZSgxKTtcbiAgc2V0dXBUYWIoc2VjdG9yKTtcbn0pO1xuXG52YXIgdmVjdG9yZ2F0b3IgPSB7XG4gIGZzcDogbnVsbCxcbiAgbGlicmFyeTogbnVsbCxcbiAgaGVhbHRoOiBudWxsLFxuICBhZ3JpY3VsdHVyZTogbnVsbFxufTtcblxuRGF0YS5mZXRjaChpZCwgZnVuY3Rpb24oZGF0YSkge1xuICBkZWJ1Zy52ZWN0b3JnYXRvciA9IHZlY3RvcmdhdG9yID0gZGF0YTtcbiAgZGF0YUZldGNoZWQgPSB0cnVlO1xuICBzZXR1cE5hbWUoKTtcbiAgdmFyIGFjdGl2ZVNlY3RvciA9IHJvdXRlLnNlY3RvciB8fCAnZnNwJztcbiAgc2V0dXBUYWIoYWN0aXZlU2VjdG9yKTtcbn0pO1xuXG5mdW5jdGlvbiBzZXR1cE5hbWUoKSB7XG4gIHZhciBhZG0xID0gdmVjdG9yZ2F0b3IuZnNwLmFkbTFfbmFtZTtcbiAgdmFyIGFkbTIgPSB2ZWN0b3JnYXRvci5mc3AuYWRtMl9uYW1lO1xuXG4gIC8vIGRpc3RyaWN0XG4gIGlmIChhZG0yKSB7XG4gICAgdmFyIHRpdGxlID0gJ0luZGlhIERpc3RyaWN0IFN1bW1hcnknO1xuICAgICQoJyNwYWdlLWhlYWRlcicpLmh0bWwodGl0bGUpO1xuICAgICQoJy5yZWdpb24tbmFtZS1oZWFkZXInKS5odG1sKGFkbTIgKyAnLCAnICsgYWRtMSk7XG4gICAgZG9jdW1lbnQudGl0bGUgPSB0aXRsZTtcbiAgfVxuICAvLyBzdGF0ZVxuICBlbHNlIHtcbiAgICB2YXIgdGl0bGUgPSAnSW5kaWEgU3RhdGUgU3VtbWFyeSc7XG4gICAgJCgnI3BhZ2UtaGVhZGVyJykuaHRtbCh0aXRsZSk7XG4gICAgJCgnLnJlZ2lvbi1uYW1lLWhlYWRlcicpLmh0bWwoYWRtMSk7XG4gICAgZG9jdW1lbnQudGl0bGUgPSB0aXRsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXR1cFNlY3RvcihzZWN0b3IpIHtcbiAgaWYgKHNlY3RvciA9PT0gJ2ZzcCcpIHtcbiAgICBzZXR1cEZTUCgpO1xuICB9XG4gIGlmIChzZWN0b3IgPT09ICdsaWJyYXJ5Jykge1xuICAgIHNldHVwTGlicmFyeSgpO1xuICB9XG4gIGlmIChzZWN0b3IgPT09ICdoZWFsdGgnKSB7XG4gICAgc2V0dXBIZWFsdGgoKTtcbiAgfVxuICBpZiAoc2VjdG9yID09PSAnYWdyaWN1bHR1cmUnKSB7XG4gICAgc2V0dXBBZ3JpY3VsdHVyZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldHVwRlNQKCkge1xuICBNYXAuaW5pdCgnZnNwJywgJ2NpY29zXzIwMTQnLCB2ZWN0b3JnYXRvci5mc3AuYmJveCwgaWQpO1xuICB2YXIgc2VjdG9yTmFtZSA9ICdmc3AnO1xuICB2YXIgc2VjdG9yID0gdmVjdG9yZ2F0b3Jbc2VjdG9yTmFtZV07XG5cbiAgLy8gVG90YWwgQ291bnRcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy10b3RhbC1jb3VudCcpLmh0bWwobnVtYmVyV2l0aENvbW1hcyhzZWN0b3IudG90YWxfY291bnQpKTtcblxuICAvLyBTdGF0dXNcbiAgdmFyIHN0YXR1cyA9IHNlY3Rvci5zdGF0dXM7XG4gIHZhciBhY3RpdmUgPSBzdGF0dXNbJ0FjdGl2ZSddIHx8IDA7XG4gIHZhciBpbmFjdGl2ZSA9IHN0YXR1c1snTm90IEFjdGl2ZSddIHx8IDA7XG4gIHZhciBwZXJjZW50ID0gKGFjdGl2ZSAvIChhY3RpdmUgKyBpbmFjdGl2ZSkpICogMTAwO1xuICBpZiAoaXNOYU4ocGVyY2VudCkpIHtcbiAgICBwZXJjZW50ID0gMDtcbiAgfVxuICB2YXIgJHN0YXR1c1Byb2dyZXNzID0gJCgnIycgKyBzZWN0b3JOYW1lICsgJy1zdGF0dXMtcHJvZ3Jlc3MnKTtcbiAgJHN0YXR1c1Byb2dyZXNzLmNzcygnd2lkdGgnLCBwZXJjZW50KyclJykuYXR0cignYXJpYS12YWx1ZW5vdycsIHBlcmNlbnQpO1xuICAkc3RhdHVzUHJvZ3Jlc3MuaHRtbChwZXJjZW50LnRvRml4ZWQoMikgKyAnJSBBY3RpdmUnKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tYWN0aXZlJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKGFjdGl2ZSkpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1pbmFjdGl2ZScpLmh0bWwobnVtYmVyV2l0aENvbW1hcyhpbmFjdGl2ZSkpO1xuXG4gIC8vIExhbmQgVXNlXG4gIHZhciBsYW5kX3VzZSA9IHNlY3Rvci5sYW5kX3VzZTtcbiAgdmFyIHBlcmNlbnQgPSAobGFuZF91c2UuVXJiYW4gLyAobGFuZF91c2UuVXJiYW4gKyBsYW5kX3VzZS5SdXJhbCkpICogMTAwO1xuICBpZiAoaXNOYU4ocGVyY2VudCkpIHtcbiAgICBwZXJjZW50ID0gMDtcbiAgfVxuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLXVyYmFuLXJ1cmFsLXByb2dyZXNzJykuY3NzKCd3aWR0aCcsIHBlcmNlbnQrJyUnKS5hdHRyKCdhcmlhLXZhbHVlbm93JywgcGVyY2VudCk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctdXJiYW4tcnVyYWwtcHJvZ3Jlc3MnKS5odG1sKHBlcmNlbnQudG9GaXhlZCgyKSArICclIFVyYmFuJyk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLXVyYmFuJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKGxhbmRfdXNlLlVyYmFuKSk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLXJ1cmFsJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKGxhbmRfdXNlLlJ1cmFsKSk7XG5cbiAgQ2hhcnRzLmNyZWF0ZUZTUChzZWN0b3IpO1xufVxuXG5mdW5jdGlvbiBzZXR1cExpYnJhcnkoKSB7XG4gIE1hcC5pbml0KCdsaWJyYXJ5JywgJ2xpYnJhcnlfMjAxNCcsIHZlY3RvcmdhdG9yLmxpYnJhcnkuYmJveCwgaWQpO1xuICB2YXIgc2VjdG9yTmFtZSA9ICdsaWJyYXJ5JztcbiAgdmFyIHNlY3RvciA9IHZlY3RvcmdhdG9yW3NlY3Rvck5hbWVdO1xuXG4gIC8vIFRvdGFsIENvdW50XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctdG90YWwtY291bnQnKS5odG1sKG51bWJlcldpdGhDb21tYXMoc2VjdG9yLnRvdGFsX2NvdW50KSk7XG5cbiAgLy8gSW50ZXJuZXQgQWNjZXNzXG4gIHZhciBzdGF0dXMgPSBzZWN0b3IuaW50ZXJuZXQ7XG4gIHZhciBhY3RpdmUgPSBzdGF0dXNbJ1llcyddO1xuICB2YXIgaW5hY3RpdmUgPSBzdGF0dXNbJ05vJ107XG4gIHZhciBwZXJjZW50ID0gKGFjdGl2ZSAvIChhY3RpdmUgKyBpbmFjdGl2ZSkpICogMTAwO1xuICBpZiAoaXNOYU4ocGVyY2VudCkpIHtcbiAgICBwZXJjZW50ID0gMDtcbiAgfVxuICB2YXIgJGludGVybmV0UHJvZ3Jlc3MgPSAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLWludGVybmV0LXByb2dyZXNzJyk7XG4gICRpbnRlcm5ldFByb2dyZXNzLmNzcygnd2lkdGgnLCBwZXJjZW50KyclJykuYXR0cignYXJpYS12YWx1ZW5vdycsIHBlcmNlbnQpO1xuICAkaW50ZXJuZXRQcm9ncmVzcy5odG1sKHBlcmNlbnQudG9GaXhlZCgyKSArICclIFdpdGggQWNjZXNzJyk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLWFjY2VzcycpLmh0bWwobnVtYmVyV2l0aENvbW1hcyhhY3RpdmUpKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tbm8tYWNjZXNzJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKGluYWN0aXZlKSk7XG5cbiAgLy8gTGFuZCBVc2VcbiAgdmFyIGxhbmRfdXNlID0gc2VjdG9yLmxhbmRfdXNlO1xuICB2YXIgcGVyY2VudCA9IChsYW5kX3VzZS5VcmJhbiAvIChsYW5kX3VzZS5VcmJhbiArIGxhbmRfdXNlLlJ1cmFsKSkgKiAxMDA7XG4gIGlmIChpc05hTihwZXJjZW50KSkge1xuICAgIHBlcmNlbnQgPSAwO1xuICB9XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctdXJiYW4tcnVyYWwtcHJvZ3Jlc3MnKS5jc3MoJ3dpZHRoJywgcGVyY2VudCsnJScpLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwZXJjZW50KTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy11cmJhbi1ydXJhbC1wcm9ncmVzcycpLmh0bWwocGVyY2VudC50b0ZpeGVkKDIpICsgJyUgVXJiYW4nKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tdXJiYW4nKS5odG1sKG51bWJlcldpdGhDb21tYXMobGFuZF91c2UuVXJiYW4pKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tcnVyYWwnKS5odG1sKG51bWJlcldpdGhDb21tYXMobGFuZF91c2UuUnVyYWwpKTtcblxuICAvLyBDb21wdXRlcnNcbiAgdmFyIHN0YXR1cyA9IHNlY3Rvci5jb21wdXRlcnM7XG4gIHZhciB5ZXMgPSBzdGF0dXNbJ1llcyddIHx8IDA7XG4gIHZhciBubyA9IHN0YXR1c1snTm8nXSB8fCAwO1xuICB2YXIgcGVyY2VudCA9ICh5ZXMgLyAoeWVzICsgbm8pKSAqIDEwMDtcbiAgaWYgKGlzTmFOKHBlcmNlbnQpKSB7XG4gICAgcGVyY2VudCA9IDA7XG4gIH1cbiAgdmFyICRjb21wdXRlclByb2dyZXNzID0gJCgnIycgKyBzZWN0b3JOYW1lICsgJy1jb21wdXRlci1wcm9ncmVzcycpO1xuICAkY29tcHV0ZXJQcm9ncmVzcy5jc3MoJ3dpZHRoJywgcGVyY2VudCsnJScpLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwZXJjZW50KTtcbiAgJGNvbXB1dGVyUHJvZ3Jlc3MuaHRtbChwZXJjZW50LnRvRml4ZWQoMikgKyAnJSBXaXRoIENvbXB1dGVycycpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1jb21wdXRlcnMnKS5odG1sKG51bWJlcldpdGhDb21tYXMoeWVzKSk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLW5vLWNvbXB1dGVycycpLmh0bWwobnVtYmVyV2l0aENvbW1hcyhubykpO1xuXG4gIC8vIENvbXB1dGVyIEZlZVxuICB2YXIgc3RhdHVzID0gc2VjdG9yLmNvbXB1dGVyX2ZlZTtcbiAgdmFyIHllcyA9IHN0YXR1c1snWWVzJ10gfHwgMDtcbiAgdmFyIG5vID0gc3RhdHVzWydObyddIHx8IDA7XG4gIHZhciBwZXJjZW50ID0gKHllcyAvICh5ZXMgKyBubykpICogMTAwO1xuICBpZiAoaXNOYU4ocGVyY2VudCkpIHtcbiAgICBwZXJjZW50ID0gMDtcbiAgfVxuICB2YXIgJGZlZVByb2dyZXNzID0gJCgnIycgKyBzZWN0b3JOYW1lICsgJy1mZWUtcHJvZ3Jlc3MnKTtcbiAgJGZlZVByb2dyZXNzLmNzcygnd2lkdGgnLCBwZXJjZW50KyclJykuYXR0cignYXJpYS12YWx1ZW5vdycsIHBlcmNlbnQpO1xuICAkZmVlUHJvZ3Jlc3MuaHRtbChwZXJjZW50LnRvRml4ZWQoMikgKyAnJSBDaGFyZ2luZyBBY2Nlc3MgRmVlJyk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLWZlZScpLmh0bWwobnVtYmVyV2l0aENvbW1hcyh5ZXMpKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tbm8tZmVlJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKG5vKSk7XG5cbiAgLy8gRmljdGlvblxuICB2YXIgc3RhdHVzID0gc2VjdG9yLmZpY3Rpb247XG4gIHZhciB5ZXMgPSBzdGF0dXNbJ1llcyddIHx8IDA7XG4gIHZhciBubyA9IHN0YXR1c1snTm8nXSB8fCAwO1xuICB2YXIgcGVyY2VudCA9ICh5ZXMgLyAoeWVzICsgbm8pKSAqIDEwMDtcbiAgaWYgKGlzTmFOKHBlcmNlbnQpKSB7XG4gICAgcGVyY2VudCA9IDA7XG4gIH1cbiAgdmFyICRmaWN0aW9uUHJvZ3Jlc3MgPSAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLWZpY3Rpb24tcHJvZ3Jlc3MnKTtcbiAgJGZpY3Rpb25Qcm9ncmVzcy5jc3MoJ3dpZHRoJywgcGVyY2VudCsnJScpLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwZXJjZW50KTtcbiAgJGZpY3Rpb25Qcm9ncmVzcy5odG1sKHBlcmNlbnQudG9GaXhlZCgyKSArICclIFdpdGggRmljdGlvbicpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1maWN0aW9uJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKHllcykpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1uby1maWN0aW9uJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKG5vKSk7XG5cbiAgLy8gTm9uIEZpY3Rpb25cbiAgdmFyIHN0YXR1cyA9IHNlY3Rvci5ub25fZmljdGlvbjtcbiAgdmFyIHllcyA9IHN0YXR1c1snWWVzJ10gfHwgMDtcbiAgdmFyIG5vID0gc3RhdHVzWydObyddIHx8IDA7XG4gIHZhciBwZXJjZW50ID0gKHllcyAvICh5ZXMgKyBubykpICogMTAwO1xuICBpZiAoaXNOYU4ocGVyY2VudCkpIHtcbiAgICBwZXJjZW50ID0gMDtcbiAgfVxuICB2YXIgJG5vbkZpY3Rpb25Qcm9ncmVzcyA9ICQoJyMnICsgc2VjdG9yTmFtZSArICctbm9uLWZpY3Rpb24tcHJvZ3Jlc3MnKTtcbiAgJG5vbkZpY3Rpb25Qcm9ncmVzcy5jc3MoJ3dpZHRoJywgcGVyY2VudCsnJScpLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwZXJjZW50KTtcbiAgJG5vbkZpY3Rpb25Qcm9ncmVzcy5odG1sKHBlcmNlbnQudG9GaXhlZCgyKSArICclIFdpdGggTm9uIEZpY3Rpb24nKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tbm9uLWZpY3Rpb24nKS5odG1sKG51bWJlcldpdGhDb21tYXMoeWVzKSk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLW5vLW5vbi1maWN0aW9uJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKG5vKSk7XG5cbiAgLy8gTmV3c3BhcGVyc1xuICB2YXIgc3RhdHVzID0gc2VjdG9yLm5ld3NwYXBlcnM7XG4gIHZhciB5ZXMgPSBzdGF0dXNbJ1llcyddIHx8IDA7XG4gIHZhciBubyA9IHN0YXR1c1snTm8nXSB8fCAwO1xuICB2YXIgcGVyY2VudCA9ICh5ZXMgLyAoeWVzICsgbm8pKSAqIDEwMDtcbiAgaWYgKGlzTmFOKHBlcmNlbnQpKSB7XG4gICAgcGVyY2VudCA9IDA7XG4gIH1cbiAgdmFyICRuZXdzcGFwZXJzUHJvZ3Jlc3MgPSAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW5ld3NwYXBlcnMtcHJvZ3Jlc3MnKTtcbiAgJG5ld3NwYXBlcnNQcm9ncmVzcy5jc3MoJ3dpZHRoJywgcGVyY2VudCsnJScpLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwZXJjZW50KTtcbiAgJG5ld3NwYXBlcnNQcm9ncmVzcy5odG1sKHBlcmNlbnQudG9GaXhlZCgyKSArICclIFdpdGggTmV3c3BhcGVycycpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1uZXdzcGFwZXJzJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKHllcykpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1uby1uZXdzcGFwZXJzJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKG5vKSk7XG5cbiAgLy8gRW5jeWNsb3BlZGlhc1xuICB2YXIgc3RhdHVzID0gc2VjdG9yLmVuY3ljbG9wZWRpYXM7XG4gIHZhciB5ZXMgPSBzdGF0dXNbJ1llcyddIHx8IDA7XG4gIHZhciBubyA9IHN0YXR1c1snTm8nXSB8fCAwO1xuICB2YXIgcGVyY2VudCA9ICh5ZXMgLyAoeWVzICsgbm8pKSAqIDEwMDtcbiAgaWYgKGlzTmFOKHBlcmNlbnQpKSB7XG4gICAgcGVyY2VudCA9IDA7XG4gIH1cbiAgdmFyICRlbmN5Y2xvcGVkaWFzUHJvZ3Jlc3MgPSAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLWVuY3ljbG9wZWRpYXMtcHJvZ3Jlc3MnKTtcbiAgJGVuY3ljbG9wZWRpYXNQcm9ncmVzcy5jc3MoJ3dpZHRoJywgcGVyY2VudCsnJScpLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwZXJjZW50KTtcbiAgJGVuY3ljbG9wZWRpYXNQcm9ncmVzcy5odG1sKHBlcmNlbnQudG9GaXhlZCgyKSArICclIFdpdGggRW5jeWNsb3BlZGlhcycpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1lbmN5Y2xvcGVkaWFzJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKHllcykpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1uby1lbmN5Y2xvcGVkaWFzJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKG5vKSk7XG5cbiAgQ2hhcnRzLmNyZWF0ZUxpYnJhcnkoc2VjdG9yKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBIZWFsdGgoKSB7XG4gIE1hcC5pbml0KCdoZWFsdGgnLCAnaGVhbHRoXzIwMTQnLCB2ZWN0b3JnYXRvci5oZWFsdGguYmJveCwgaWQpO1xuICB2YXIgc2VjdG9yTmFtZSA9ICdoZWFsdGgnO1xuICB2YXIgc2VjdG9yID0gdmVjdG9yZ2F0b3Jbc2VjdG9yTmFtZV07XG5cbiAgLy8gVG90YWwgQ291bnRcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy10b3RhbC1jb3VudCcpLmh0bWwobnVtYmVyV2l0aENvbW1hcyhzZWN0b3IudG90YWxfY291bnQpKTtcblxuICAvLyBTdGF0dXNcbiAgdmFyIHN0YXR1cyA9IHNlY3Rvci5mdW5jdGlvbmFsO1xuICB2YXIgYWN0aXZlID0gc3RhdHVzWydZZXMnXTtcbiAgdmFyIGluYWN0aXZlID0gc3RhdHVzWydObyddO1xuICB2YXIgcGVyY2VudCA9IChhY3RpdmUgLyAoYWN0aXZlICsgaW5hY3RpdmUpKSAqIDEwMDtcbiAgaWYgKGlzTmFOKHBlcmNlbnQpKSB7XG4gICAgcGVyY2VudCA9IDA7XG4gIH1cbiAgdmFyICRzdGF0dXNQcm9ncmVzcyA9ICQoJyMnICsgc2VjdG9yTmFtZSArICctc3RhdHVzLXByb2dyZXNzJyk7XG4gICRzdGF0dXNQcm9ncmVzcy5jc3MoJ3dpZHRoJywgcGVyY2VudCsnJScpLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwZXJjZW50KTtcbiAgJHN0YXR1c1Byb2dyZXNzLmh0bWwocGVyY2VudC50b0ZpeGVkKDIpICsgJyUgQWN0aXZlJyk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLWFjdGl2ZScpLmh0bWwobnVtYmVyV2l0aENvbW1hcyhhY3RpdmUpKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0taW5hY3RpdmUnKS5odG1sKG51bWJlcldpdGhDb21tYXMoaW5hY3RpdmUpKTtcblxuICAvLyBMYW5kIFVzZVxuICB2YXIgbGFuZF91c2UgPSBzZWN0b3IubGFuZF91c2U7XG4gIHZhciBwZXJjZW50ID0gKGxhbmRfdXNlLlVyYmFuIC8gKGxhbmRfdXNlLlVyYmFuICsgbGFuZF91c2UuUnVyYWwpKSAqIDEwMDtcbiAgaWYgKGlzTmFOKHBlcmNlbnQpKSB7XG4gICAgcGVyY2VudCA9IDA7XG4gIH1cbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy11cmJhbi1ydXJhbC1wcm9ncmVzcycpLmNzcygnd2lkdGgnLCBwZXJjZW50KyclJykuYXR0cignYXJpYS12YWx1ZW5vdycsIHBlcmNlbnQpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLXVyYmFuLXJ1cmFsLXByb2dyZXNzJykuaHRtbChwZXJjZW50LnRvRml4ZWQoMikgKyAnJSBVcmJhbicpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS11cmJhbicpLmh0bWwobnVtYmVyV2l0aENvbW1hcyhsYW5kX3VzZS5VcmJhbikpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1ydXJhbCcpLmh0bWwobnVtYmVyV2l0aENvbW1hcyhsYW5kX3VzZS5SdXJhbCkpO1xuXG4gIC8vIEFjY2VzcyBSb2FkXG4gIHZhciBzdGF0dXMgPSBzZWN0b3IuYWNjZXNzX3JvYWQ7XG4gIHZhciB5ZXMgPSBzdGF0dXNbJ1llcyddIHx8IDA7XG4gIHZhciBubyA9IHN0YXR1c1snTm8nXSB8fCAwO1xuICB2YXIgcGVyY2VudCA9ICh5ZXMgLyAoeWVzICsgbm8pKSAqIDEwMDtcbiAgaWYgKGlzTmFOKHBlcmNlbnQpKSB7XG4gICAgcGVyY2VudCA9IDA7XG4gIH1cbiAgdmFyICRhY2Nlc3NSb2FkUHJvZ3Jlc3MgPSAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLWFjY2Vzcy1yb2FkLXByb2dyZXNzJyk7XG4gICRhY2Nlc3NSb2FkUHJvZ3Jlc3MuY3NzKCd3aWR0aCcsIHBlcmNlbnQrJyUnKS5hdHRyKCdhcmlhLXZhbHVlbm93JywgcGVyY2VudCk7XG4gICRhY2Nlc3NSb2FkUHJvZ3Jlc3MuaHRtbChwZXJjZW50LnRvRml4ZWQoMikgKyAnJSBXaXRoIEFjY2VzcyBSb2FkJyk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLWFjY2Vzcy1yb2FkJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKHllcykpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1uby1hY2Nlc3Mtcm9hZCcpLmh0bWwobnVtYmVyV2l0aENvbW1hcyhubykpO1xuXG4gIC8vIEJsb29kIFRyYW5zZnVzaW9uXG4gIHZhciBzdGF0dXMgPSBzZWN0b3IuYmxvb2RfdHJhbnNmdXNpb247XG4gIHZhciB5ZXMgPSBzdGF0dXNbJ1llcyddIHx8IDA7XG4gIHZhciBubyA9IHN0YXR1c1snTm8nXSB8fCAwO1xuICB2YXIgcGVyY2VudCA9ICh5ZXMgLyAoeWVzICsgbm8pKSAqIDEwMDtcbiAgaWYgKGlzTmFOKHBlcmNlbnQpKSB7XG4gICAgcGVyY2VudCA9IDA7XG4gIH1cbiAgdmFyICRibG9vZF90cmFuc2Z1c2lvblByb2dyZXNzID0gJCgnIycgKyBzZWN0b3JOYW1lICsgJy1ibG9vZC10cmFuc2Z1c2lvbi1wcm9ncmVzcycpO1xuICAkYmxvb2RfdHJhbnNmdXNpb25Qcm9ncmVzcy5jc3MoJ3dpZHRoJywgcGVyY2VudCsnJScpLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwZXJjZW50KTtcbiAgJGJsb29kX3RyYW5zZnVzaW9uUHJvZ3Jlc3MuaHRtbChwZXJjZW50LnRvRml4ZWQoMikgKyAnJSBCbG9vZCBUcmFuc2Z1c2lvbiBBdmFpbGFibGUnKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tYmxvb2QtdHJhbnNmdXNpb24nKS5odG1sKG51bWJlcldpdGhDb21tYXMoeWVzKSk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLW5vLWJsb29kLXRyYW5zZnVzaW9uJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKG5vKSk7XG5cbiAgLy8gRGlzcGVuc2FyeVxuICB2YXIgc3RhdHVzID0gc2VjdG9yLmRpc3BlbnNhcnk7XG4gIHZhciB5ZXMgPSBzdGF0dXNbJ1llcyddIHx8IDA7XG4gIHZhciBubyA9IHN0YXR1c1snTm8nXSB8fCAwO1xuICB2YXIgcGVyY2VudCA9ICh5ZXMgLyAoeWVzICsgbm8pKSAqIDEwMDtcbiAgaWYgKGlzTmFOKHBlcmNlbnQpKSB7XG4gICAgcGVyY2VudCA9IDA7XG4gIH1cbiAgdmFyICRkaXNwZW5zYXJ5UHJvZ3Jlc3MgPSAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLWRpc3BlbnNhcnktcHJvZ3Jlc3MnKTtcbiAgJGRpc3BlbnNhcnlQcm9ncmVzcy5jc3MoJ3dpZHRoJywgcGVyY2VudCsnJScpLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwZXJjZW50KTtcbiAgJGRpc3BlbnNhcnlQcm9ncmVzcy5odG1sKHBlcmNlbnQudG9GaXhlZCgyKSArICclIFdpdGggRGlzcGVuc2FyeScpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1kaXNwZW5zYXJ5JykuaHRtbChudW1iZXJXaXRoQ29tbWFzKHllcykpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1uby1kaXNwZW5zYXJ5JykuaHRtbChudW1iZXJXaXRoQ29tbWFzKG5vKSk7XG5cbiAgLy8gRWxlY3RyaWNpdHlcbiAgdmFyIHN0YXR1cyA9IHNlY3Rvci5lbGVjdHJpY2l0eTtcbiAgdmFyIHllcyA9IHN0YXR1c1snWWVzJ10gfHwgMDtcbiAgdmFyIG5vID0gc3RhdHVzWydObyddIHx8IDA7XG4gIHZhciBwZXJjZW50ID0gKHllcyAvICh5ZXMgKyBubykpICogMTAwO1xuICBpZiAoaXNOYU4ocGVyY2VudCkpIHtcbiAgICBwZXJjZW50ID0gMDtcbiAgfVxuICB2YXIgJGVsZWN0cmljaXR5UHJvZ3Jlc3MgPSAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLWVsZWN0cmljaXR5LXByb2dyZXNzJyk7XG4gICRlbGVjdHJpY2l0eVByb2dyZXNzLmNzcygnd2lkdGgnLCBwZXJjZW50KyclJykuYXR0cignYXJpYS12YWx1ZW5vdycsIHBlcmNlbnQpO1xuICAkZWxlY3RyaWNpdHlQcm9ncmVzcy5odG1sKHBlcmNlbnQudG9GaXhlZCgyKSArICclIFdpdGggRWxlY3RyaWNpdHknKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tZWxlY3RyaWNpdHknKS5odG1sKG51bWJlcldpdGhDb21tYXMoeWVzKSk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLW5vLWVsZWN0cmljaXR5JykuaHRtbChudW1iZXJXaXRoQ29tbWFzKG5vKSk7XG5cbiAgLy8gSW1tdW5pemF0aW9uXG4gIHZhciBzdGF0dXMgPSBzZWN0b3IuaW1tdW5pemF0aW9uO1xuICB2YXIgeWVzID0gc3RhdHVzWydZZXMnXSB8fCAwO1xuICB2YXIgbm8gPSBzdGF0dXNbJ05vJ10gfHwgMDtcbiAgdmFyIHBlcmNlbnQgPSAoeWVzIC8gKHllcyArIG5vKSkgKiAxMDA7XG4gIGlmIChpc05hTihwZXJjZW50KSkge1xuICAgIHBlcmNlbnQgPSAwO1xuICB9XG4gIHZhciAkaW1tdW5pemF0aW9uUHJvZ3Jlc3MgPSAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLWltbXVuaXphdGlvbi1wcm9ncmVzcycpO1xuICAkaW1tdW5pemF0aW9uUHJvZ3Jlc3MuY3NzKCd3aWR0aCcsIHBlcmNlbnQrJyUnKS5hdHRyKCdhcmlhLXZhbHVlbm93JywgcGVyY2VudCk7XG4gICRpbW11bml6YXRpb25Qcm9ncmVzcy5odG1sKHBlcmNlbnQudG9GaXhlZCgyKSArICclIFdpdGggSW1tdW5pemF0aW9uJyk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLWltbXVuaXphdGlvbicpLmh0bWwobnVtYmVyV2l0aENvbW1hcyh5ZXMpKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tbm8taW1tdW5pemF0aW9uJykuaHRtbChudW1iZXJXaXRoQ29tbWFzKG5vKSk7XG5cbiAgLy8gUGhhcm1hY2lzdFxuICB2YXIgc3RhdHVzID0gc2VjdG9yLnBoYXJtYWNpc3Q7XG4gIHZhciB5ZXMgPSBzdGF0dXNbJ1llcyddIHx8IDA7XG4gIHZhciBubyA9IHN0YXR1c1snTm8nXSB8fCAwO1xuICB2YXIgcGVyY2VudCA9ICh5ZXMgLyAoeWVzICsgbm8pKSAqIDEwMDtcbiAgaWYgKGlzTmFOKHBlcmNlbnQpKSB7XG4gICAgcGVyY2VudCA9IDA7XG4gIH1cbiAgdmFyICRwaGFybWFjaXN0UHJvZ3Jlc3MgPSAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLXBoYXJtYWNpc3QtcHJvZ3Jlc3MnKTtcbiAgJHBoYXJtYWNpc3RQcm9ncmVzcy5jc3MoJ3dpZHRoJywgcGVyY2VudCsnJScpLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwZXJjZW50KTtcbiAgJHBoYXJtYWNpc3RQcm9ncmVzcy5odG1sKHBlcmNlbnQudG9GaXhlZCgyKSArICclIFdpdGggUGhhcm1hY2lzdCcpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1waGFybWFjaXN0JykuaHRtbChudW1iZXJXaXRoQ29tbWFzKHllcykpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1uby1waGFybWFjaXN0JykuaHRtbChudW1iZXJXaXRoQ29tbWFzKG5vKSk7XG5cbiAgLy8gT3BlbiAyNCAvIDdcbiAgdmFyIHN0YXR1cyA9IHNlY3Rvci5waGNfMjRfNztcbiAgdmFyIHllcyA9IHN0YXR1c1snWWVzJ10gfHwgMDtcbiAgdmFyIG5vID0gc3RhdHVzWydObyddIHx8IDA7XG4gIHZhciBwZXJjZW50ID0gKHllcyAvICh5ZXMgKyBubykpICogMTAwO1xuICBpZiAoaXNOYU4ocGVyY2VudCkpIHtcbiAgICBwZXJjZW50ID0gMDtcbiAgfVxuICB2YXIgJG9wZW4yNDdQcm9ncmVzcyA9ICQoJyMnICsgc2VjdG9yTmFtZSArICctb3Blbi0yNC03LXByb2dyZXNzJyk7XG4gICRvcGVuMjQ3UHJvZ3Jlc3MuY3NzKCd3aWR0aCcsIHBlcmNlbnQrJyUnKS5hdHRyKCdhcmlhLXZhbHVlbm93JywgcGVyY2VudCk7XG4gICRvcGVuMjQ3UHJvZ3Jlc3MuaHRtbChwZXJjZW50LnRvRml4ZWQoMikgKyAnJSBPcGVuIDI0IC8gNycpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1vcGVuLTI0LTcnKS5odG1sKG51bWJlcldpdGhDb21tYXMoeWVzKSk7XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctbnVtLW5vLW9wZW4tMjQtNycpLmh0bWwobnVtYmVyV2l0aENvbW1hcyhubykpO1xuXG4gIC8vIFJ1bm5pbmcgV2F0ZXJcbiAgdmFyIHN0YXR1cyA9IHNlY3Rvci5ydW5uaW5nX3dhdGVyO1xuICB2YXIgeWVzID0gc3RhdHVzWydZZXMnXSB8fCAwO1xuICB2YXIgbm8gPSBzdGF0dXNbJ05vJ10gfHwgMDtcbiAgdmFyIHBlcmNlbnQgPSAoeWVzIC8gKHllcyArIG5vKSkgKiAxMDA7XG4gIGlmIChpc05hTihwZXJjZW50KSkge1xuICAgIHBlcmNlbnQgPSAwO1xuICB9XG4gIHZhciAkcnVubmluZ193YXRlclByb2dyZXNzID0gJCgnIycgKyBzZWN0b3JOYW1lICsgJy1ydW5uaW5nLXdhdGVyLXByb2dyZXNzJyk7XG4gICRydW5uaW5nX3dhdGVyUHJvZ3Jlc3MuY3NzKCd3aWR0aCcsIHBlcmNlbnQrJyUnKS5hdHRyKCdhcmlhLXZhbHVlbm93JywgcGVyY2VudCk7XG4gICRydW5uaW5nX3dhdGVyUHJvZ3Jlc3MuaHRtbChwZXJjZW50LnRvRml4ZWQoMikgKyAnJSBXaXRoIFJ1bm5pbmcgV2F0ZXInKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tcnVubmluZy13YXRlcicpLmh0bWwobnVtYmVyV2l0aENvbW1hcyh5ZXMpKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tbm8tcnVubmluZy13YXRlcicpLmh0bWwobnVtYmVyV2l0aENvbW1hcyhubykpO1xuXG4gIENoYXJ0cy5jcmVhdGVIZWFsdGgoc2VjdG9yKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBBZ3JpY3VsdHVyZSgpIHtcbiAgTWFwLmluaXQoJ2FncmljdWx0dXJlJywgJ2FncmljdWx0dXJlXzIwMTQnLCB2ZWN0b3JnYXRvci5hZ3JpY3VsdHVyZS5iYm94LCBpZCk7XG4gIHZhciBzZWN0b3JOYW1lID0gJ2FncmljdWx0dXJlJztcbiAgdmFyIHNlY3RvciA9IHZlY3RvcmdhdG9yW3NlY3Rvck5hbWVdO1xuXG4gIC8vIFRvdGFsIENvdW50XG4gICQoJyMnICsgc2VjdG9yTmFtZSArICctdG90YWwtY291bnQnKS5odG1sKG51bWJlcldpdGhDb21tYXMoc2VjdG9yLnRvdGFsX2NvdW50KSk7XG5cbiAgLy8gRmVydGlsaXplclxuICB2YXIgc3RhdHVzID0gc2VjdG9yLmZlcnRpbGl6ZXI7XG4gIHZhciBhY3RpdmUgPSBzdGF0dXNbJ1llcyddO1xuICB2YXIgaW5hY3RpdmUgPSBzdGF0dXNbJ05vJ107XG4gIHZhciBwZXJjZW50ID0gKGFjdGl2ZSAvIChhY3RpdmUgKyBpbmFjdGl2ZSkpICogMTAwO1xuICBpZiAoaXNOYU4ocGVyY2VudCkpIHtcbiAgICBwZXJjZW50ID0gMDtcbiAgfVxuICB2YXIgJGZlcnRpbGl6ZXJQcm9ncmVzcyA9ICQoJyMnICsgc2VjdG9yTmFtZSArICctdmVuZGluZy1mZXJ0aWxpemVyLXByb2dyZXNzJyk7XG4gICRmZXJ0aWxpemVyUHJvZ3Jlc3MuY3NzKCd3aWR0aCcsIHBlcmNlbnQrJyUnKS5hdHRyKCdhcmlhLXZhbHVlbm93JywgcGVyY2VudCk7XG4gICRmZXJ0aWxpemVyUHJvZ3Jlc3MuaHRtbChwZXJjZW50LnRvRml4ZWQoMikgKyAnJSBWZW5kaW5nIEZlcnRpbGl6ZXInKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tdmVuZGluZycpLmh0bWwobnVtYmVyV2l0aENvbW1hcyhhY3RpdmUpKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tbm90LXZlbmRpbmcnKS5odG1sKG51bWJlcldpdGhDb21tYXMoaW5hY3RpdmUpKTtcblxuICAvLyBMYW5kIFVzZVxuICB2YXIgbGFuZF91c2UgPSBzZWN0b3IubGFuZF91c2U7XG4gIHZhciBwZXJjZW50ID0gKGxhbmRfdXNlLlVyYmFuIC8gKGxhbmRfdXNlLlVyYmFuICsgbGFuZF91c2UuUnVyYWwpKSAqIDEwMDtcbiAgaWYgKGlzTmFOKHBlcmNlbnQpKSB7XG4gICAgcGVyY2VudCA9IDA7XG4gIH1cbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy11cmJhbi1ydXJhbC1wcm9ncmVzcycpLmNzcygnd2lkdGgnLCBwZXJjZW50KyclJykuYXR0cignYXJpYS12YWx1ZW5vdycsIHBlcmNlbnQpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLXVyYmFuLXJ1cmFsLXByb2dyZXNzJykuaHRtbChwZXJjZW50LnRvRml4ZWQoMikgKyAnJSBVcmJhbicpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS11cmJhbicpLmh0bWwobnVtYmVyV2l0aENvbW1hcyhsYW5kX3VzZS5VcmJhbikpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1ydXJhbCcpLmh0bWwobnVtYmVyV2l0aENvbW1hcyhsYW5kX3VzZS5SdXJhbCkpO1xuXG4gIC8vIEJyYW5kZWRcbiAgdmFyIHN0YXR1cyA9IHNlY3Rvci5icmFuZGVkO1xuICB2YXIgeWVzID0gc3RhdHVzWydZZXMnXSB8fCAwO1xuICB2YXIgbm8gPSBzdGF0dXNbJ05vJ10gfHwgMDtcbiAgdmFyIHBlcmNlbnQgPSAoeWVzIC8gKHllcyArIG5vKSkgKiAxMDA7XG4gIGlmIChpc05hTihwZXJjZW50KSkge1xuICAgIHBlcmNlbnQgPSAwO1xuICB9XG4gIHZhciAkYnJhbmRlZFByb2dyZXNzID0gJCgnIycgKyBzZWN0b3JOYW1lICsgJy1icmFuZGVkLXByb2dyZXNzJyk7XG4gICRicmFuZGVkUHJvZ3Jlc3MuY3NzKCd3aWR0aCcsIHBlcmNlbnQrJyUnKS5hdHRyKCdhcmlhLXZhbHVlbm93JywgcGVyY2VudCk7XG4gICRicmFuZGVkUHJvZ3Jlc3MuaHRtbChwZXJjZW50LnRvRml4ZWQoMikgKyAnJSBIYXMgQnJhbmRpbmcnKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tYnJhbmRlZCcpLmh0bWwobnVtYmVyV2l0aENvbW1hcyh5ZXMpKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tbm8tYnJhbmRlZCcpLmh0bWwobnVtYmVyV2l0aENvbW1hcyhubykpO1xuXG4gIC8vIFRvb2xzIC8gRXF1aXBtZW50XG4gIHZhciBzdGF0dXMgPSBzZWN0b3IudG9vbHNfZXF1aXBtZW50O1xuICB2YXIgeWVzID0gc3RhdHVzWydZZXMnXSB8fCAwO1xuICB2YXIgbm8gPSBzdGF0dXNbJ05vJ10gfHwgMDtcbiAgdmFyIHBlcmNlbnQgPSAoeWVzIC8gKHllcyArIG5vKSkgKiAxMDA7XG4gIGlmIChpc05hTihwZXJjZW50KSkge1xuICAgIHBlcmNlbnQgPSAwO1xuICB9XG4gIHZhciAkdG9vbHNfZXF1aXBtZW50UHJvZ3Jlc3MgPSAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLXRvb2xzX2VxdWlwbWVudC1wcm9ncmVzcycpO1xuICAkdG9vbHNfZXF1aXBtZW50UHJvZ3Jlc3MuY3NzKCd3aWR0aCcsIHBlcmNlbnQrJyUnKS5hdHRyKCdhcmlhLXZhbHVlbm93JywgcGVyY2VudCk7XG4gICR0b29sc19lcXVpcG1lbnRQcm9ncmVzcy5odG1sKHBlcmNlbnQudG9GaXhlZCgyKSArICclIFNlbGxpbmcgVG9vbHMgLyBFcXVpcG1lbnQnKTtcbiAgJCgnIycgKyBzZWN0b3JOYW1lICsgJy1udW0tdG9vbHNfZXF1aXBtZW50JykuaHRtbChudW1iZXJXaXRoQ29tbWFzKHllcykpO1xuICAkKCcjJyArIHNlY3Rvck5hbWUgKyAnLW51bS1uby10b29sc19lcXVpcG1lbnQnKS5odG1sKG51bWJlcldpdGhDb21tYXMobm8pKTtcblxuICBDaGFydHMuY3JlYXRlQWdyaWN1bHR1cmUoc2VjdG9yKTtcbn1cblxuZnVuY3Rpb24gbnVtYmVyV2l0aENvbW1hcyh4KSB7XG4gIGlmICh0eXBlb2YgeCA9PT0gJ3VuZGVmaW5lZCcgfHwgeCA9PT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIHJldHVybiB4LnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xufVxuXG5cbmZ1bmN0aW9uIHNldHVwRXhwb3J0QnV0dG9uKCl7XG4gICQoXCIjZXhwb3J0QnRuXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgIFByaW50LnByaW50KCk7XG4gIH0pO1xuXG4gIC8vUmVzZXQgc3RhdGUgd2hlbiByZXNldCBidXR0b24gaXMgY2xpY2tlZC5cbiAgJChcIiNyZXNldEJ1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgUHJpbnQucmVzZXQoKTtcbiAgfSlcbn1cblxuc2V0dXBFeHBvcnRCdXR0b24oKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDEwLzE3LzE0LlxuICovXG5cbnZhciBDb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpO1xuXG52YXIgTWFwID0ge307XG5cbk1hcC5pbml0ID0gZnVuY3Rpb24oc2VjdG9yLCBwb2ludHNUYWJsZSwgYmJveCwgaWQpIHtcbiAgdmFyIGRvbUlkID0gc2VjdG9yICsgJy1tYXAnO1xuXG4gIC8vIGNyZWF0ZSBhIG1hcCBpbiB0aGUgXCJtYXBcIiBkaXYsIHNldCB0aGUgdmlldyB0byBhIGdpdmVuIHBsYWNlIGFuZCB6b29tXG4gIHZhciBtYXAgPSBMLm1hcChkb21JZCwge1xuICAgIHNjcm9sbFdoZWVsWm9vbTogZmFsc2VcbiAgfSk7XG5cbiAgdmFyIGJvdW5kcyA9IEwuZ2VvSnNvbihiYm94KS5nZXRCb3VuZHMoKTtcbiAgbWFwLmZpdEJvdW5kcyhib3VuZHMpO1xuXG4gIC8vIGFkZCBhbiBPcGVuU3RyZWV0TWFwIHRpbGUgbGF5ZXJcbiAgTC50aWxlTGF5ZXIoJ2h0dHA6Ly9iLnRpbGVzLm1hcGJveC5jb20vdjMvY3Vnb3Muam9sZWY4Z2Mve3p9L3t4fS97eX0ucG5nJykuYWRkVG8obWFwKTtcblxuICB2YXIgaWQgPSBwYXJzZUludChpZCk7XG4gIHZhciBib3VuZGFyeU12dCA9IG5ldyBMLlRpbGVMYXllci5NVlRTb3VyY2UoYm91bmRhcnlDb25maWcoaWQpKTtcbiAgdmFyIHBvaW50c012dCA9IG5ldyBMLlRpbGVMYXllci5NVlRTb3VyY2UocG9pbnRzQ29uZmlnKHNlY3RvciwgcG9pbnRzVGFibGUsIGlkKSk7XG5cbiAgbWFwLmFkZExheWVyKHBvaW50c012dCk7XG4gIG1hcC5hZGRMYXllcihib3VuZGFyeU12dCk7XG5cbiAgJCgnLmxlYWZsZXQtY29udHJvbC1hdHRyaWJ1dGlvbicpLnJlbW92ZSgpO1xufTtcblxuZnVuY3Rpb24gYm91bmRhcnlDb25maWcoYm91bmRhcnlJZCkge1xuICByZXR1cm4ge1xuICAgIHVybDogXCJodHRwOi8vc3BhdGlhbHNlcnZlci5zcGF0aWFsZGV2LmNvbS9zZXJ2aWNlcy92ZWN0b3ItdGlsZXMvZ2F1bF9mc3BfaW5kaWEve3p9L3t4fS97eX0ucGJmXCIsXG4gICAgZGVidWc6IGZhbHNlLFxuICAgIHZpc2libGVMYXllcnM6IFsnZ2F1bF8yMDE0X2FkbTEnLCAnZ2F1bF8yMDE0X2FkbTFfbGFiZWwnLCAnZ2F1bF8yMDE0X2FkbTInLCAnZ2F1bF8yMDE0X2FkbTJfbGFiZWwnXSxcbiAgICBnZXRJREZvckxheWVyRmVhdHVyZTogZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgcmV0dXJuIGZlYXR1cmUuX2lkO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmlsdGVyIGZ1bmN0aW9uIGdldHMgY2FsbGVkIHdoZW4gaXRlcmF0aW5nIHRob3VnaCBlYWNoIHZlY3RvciB0aWxlIGZlYXR1cmUgKHZ0ZikuIFlvdSBoYXZlIGFjY2Vzc1xuICAgICAqIHRvIGV2ZXJ5IHByb3BlcnR5IGFzc29jaWF0ZWQgd2l0aCBhIGdpdmVuIGZlYXR1cmUgKHRoZSBmZWF0dXJlLCBhbmQgdGhlIGxheWVyKS4gWW91IGNhbiBhbHNvIGZpbHRlclxuICAgICAqIGJhc2VkIG9mIHRoZSBjb250ZXh0IChlYWNoIHRpbGUgdGhhdCB0aGUgZmVhdHVyZSBpcyBkcmF3biBvbnRvKS5cbiAgICAgKlxuICAgICAqIFJldHVybmluZyBmYWxzZSBza2lwcyBvdmVyIHRoZSBmZWF0dXJlIGFuZCBpdCBpcyBub3QgZHJhd24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZmVhdHVyZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGZpbHRlcjogZnVuY3Rpb24oZmVhdHVyZSwgY29udGV4dCkge1xuICAgICAgaWYgKCBmZWF0dXJlLl9pZCA9PT0gYm91bmRhcnlJZCApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIHN0eWxlOiBmdW5jdGlvbihmZWF0dXJlLCBhamF4RGF0YSkge1xuICAgICAgdmFyIHN0eWxlID0ge307XG5cbiAgICAgIHZhciB0eXBlID0gZmVhdHVyZS50eXBlO1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgMTogLy8nUG9pbnQnXG4gICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgxOCwxMDUsMjUwLDApJztcbiAgICAgICAgICBzdHlsZS5yYWRpdXMgPSA1O1xuICAgICAgICAgIHN0eWxlLnNlbGVjdGVkID0ge1xuICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMCwwLjUpJyxcbiAgICAgICAgICAgIHJhZGl1czogNlxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogLy8nTGluZVN0cmluZydcbiAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDE4LDEwNSwyNTAsMC44KSc7XG4gICAgICAgICAgc3R5bGUuc2l6ZSA9IDM7XG4gICAgICAgICAgc3R5bGUuc2VsZWN0ZWQgPSB7XG4gICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LDI1LDAsMC41KScsXG4gICAgICAgICAgICBzaXplOiA0XG4gICAgICAgICAgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOiAvLydQb2x5Z29uJ1xuXG4gICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgxOCwxMDUsMjUwLDApJztcblxuICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICBjb2xvcjogJyMwMDc3YWMnLFxuICAgICAgICAgICAgc2l6ZTogMlxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB3ZSB3YW50IHRvIGxpbmsgZXZlbnRzIGJldHdlZW4gbGF5ZXJzLCBsaWtlIGNsaWNraW5nIG9uIGEgbGFiZWwgYW5kIGFcbiAgICAgKiBjb3JyZXNwb25kaW5nIHBvbHlnb24gZnJlYXR1cmUsIHRoaXMgd2lsbCByZXR1cm4gdGhlIGNvcnJlc3BvbmRpbmcgbWFwcGluZ1xuICAgICAqIGJldHdlZW4gbGF5ZXJzLiBUaGlzIHByb3ZpZGVzIGtub3dsZWRnZSBvZiB3aGljaCBvdGhlciBmZWF0dXJlIGEgZ2l2ZW4gZmVhdHVyZVxuICAgICAqIGlzIGxpbmtlZCB0by5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsYXllck5hbWUgIHRoZSBsYXllciB3ZSB3YW50IHRvIGtub3cgdGhlIGxpbmtlZCBsYXllciBmcm9tXG4gICAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBjb3JyZXNwb25kaW5nIGxpbmtlZCBsYXllclxuICAgICAqL1xuICAgIGxheWVyTGluazogZnVuY3Rpb24obGF5ZXJOYW1lKSB7XG4gICAgICBpZiAobGF5ZXJOYW1lLmluZGV4T2YoJ19sYWJlbCcpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIGxheWVyTmFtZS5yZXBsYWNlKCdfbGFiZWwnLCcnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsYXllck5hbWUgKyAnX2xhYmVsJztcbiAgICB9XG4gIH07XG59XG5cblxuZnVuY3Rpb24gcG9pbnRzQ29uZmlnKHNlY3RvciwgcG9pbnRzVGFibGUsIGlkKSB7XG4gIHJldHVybiB7XG4gICAgdXJsOiBcImh0dHA6Ly9zcGF0aWFsc2VydmVyLnNwYXRpYWxkZXYuY29tL3NlcnZpY2VzL3Bvc3RnaXMvXCIgKyBwb2ludHNUYWJsZSArIFwiL2dlb20vdmVjdG9yLXRpbGVzL3t6fS97eH0ve3l9LnBiZj9maWVsZHM9dHlwZSxpZCZ3aGVyZT1nYXVsXzIwMTRfYWRtMSUzZFwiICsgaWQgKyBcIiUyMG9yJTIwZ2F1bF8yMDE0X2FkbTIlM2RcIiArIGlkLFxuICAgIGRlYnVnOiBmYWxzZSxcbiAgICBjbGlja2FibGVMYXllcnM6IG51bGwsXG5cbiAgICBnZXRJREZvckxheWVyRmVhdHVyZTogZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgIHJldHVybiBmZWF0dXJlLnByb3BlcnRpZXMuaWQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaWx0ZXIgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgd2hlbiBpdGVyYXRpbmcgdGhvdWdoIGVhY2ggdmVjdG9yIHRpbGUgZmVhdHVyZSAodnRmKS4gWW91IGhhdmUgYWNjZXNzXG4gICAgICogdG8gZXZlcnkgcHJvcGVydHkgYXNzb2NpYXRlZCB3aXRoIGEgZ2l2ZW4gZmVhdHVyZSAodGhlIGZlYXR1cmUsIGFuZCB0aGUgbGF5ZXIpLiBZb3UgY2FuIGFsc28gZmlsdGVyXG4gICAgICogYmFzZWQgb2YgdGhlIGNvbnRleHQgKGVhY2ggdGlsZSB0aGF0IHRoZSBmZWF0dXJlIGlzIGRyYXduIG9udG8pLlxuICAgICAqXG4gICAgICogUmV0dXJuaW5nIGZhbHNlIHNraXBzIG92ZXIgdGhlIGZlYXR1cmUgYW5kIGl0IGlzIG5vdCBkcmF3bi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmZWF0dXJlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZmlsdGVyOiBmdW5jdGlvbiAoZmVhdHVyZSwgY29udGV4dCkge1xuICAgICAgLy9yZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLnR5cGUgIT0gJ01vYmlsZSBNb25leSBBZ2VudCc7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB3ZSB3YW50IHRvIGxpbmsgZXZlbnRzIGJldHdlZW4gbGF5ZXJzLCBsaWtlIGNsaWNraW5nIG9uIGEgbGFiZWwgYW5kIGFcbiAgICAgKiBjb3JyZXNwb25kaW5nIHBvbHlnb24gZnJlYXR1cmUsIHRoaXMgd2lsbCByZXR1cm4gdGhlIGNvcnJlc3BvbmRpbmcgbWFwcGluZ1xuICAgICAqIGJldHdlZW4gbGF5ZXJzLiBUaGlzIHByb3ZpZGVzIGtub3dsZWRnZSBvZiB3aGljaCBvdGhlciBmZWF0dXJlIGEgZ2l2ZW4gZmVhdHVyZVxuICAgICAqIGlzIGxpbmtlZCB0by5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsYXllck5hbWUgIHRoZSBsYXllciB3ZSB3YW50IHRvIGtub3cgdGhlIGxpbmtlZCBsYXllciBmcm9tXG4gICAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBjb3JyZXNwb25kaW5nIGxpbmtlZCBsYXllclxuICAgICAqL1xuICAgIGxheWVyTGluazogZnVuY3Rpb24gKGxheWVyTmFtZSkge1xuICAgICAgaWYgKGxheWVyTmFtZS5pbmRleE9mKCdfbGFiZWwnKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiBsYXllck5hbWUucmVwbGFjZSgnX2xhYmVsJywgJycpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxheWVyTmFtZSArICdfbGFiZWwnO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZ5IHdoaWNoIGZlYXR1cmVzIHNob3VsZCBoYXZlIGEgY2VydGFpbiB6IGluZGV4IChpbnRlZ2VyKS4gIExvd2VyIG51bWJlcnMgd2lsbCBkcmF3IG9uICd0aGUgYm90dG9tJy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmZWF0dXJlIC0gdGhlIFBCRkZlYXR1cmUgdGhhdCBjb250YWlucyBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgbGF5ZXJPcmRlcmluZzogZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgIC8vVGhpcyBvbmx5IG5lZWRzIHRvIGJlIGRvbmUgZm9yIGVhY2ggdHlwZSwgbm90IG5lY2Vzc2FyaWx5IGZvciBlYWNoIGZlYXR1cmUuIEJ1dCB3ZSdsbCBzdGFydCBoZXJlLlxuICAgICAgaWYgKGZlYXR1cmUgJiYgZmVhdHVyZS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgIGZlYXR1cmUucHJvcGVydGllcy56SW5kZXggPSBDb25maWdbc2VjdG9yXVtmZWF0dXJlLnByb3BlcnRpZXMudHlwZV0uekluZGV4IHx8IDU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0eWxlOiBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgdmFyIHN0eWxlID0ge307XG4gICAgICB2YXIgc2VsZWN0ZWQgPSBzdHlsZS5zZWxlY3RlZCA9IHt9O1xuICAgICAgdmFyIHBvaW50UmFkaXVzID0gMTtcblxuICAgICAgZnVuY3Rpb24gU2NhbGVEZXBlbmRlbnRQb2ludFJhZGl1cyh6b29tKSB7XG4gICAgICAgIC8vU2V0IHBvaW50IHJhZGl1cyBiYXNlZCBvbiB6b29tXG4gICAgICAgIHZhciBwb2ludFJhZGl1cyA9IDE7XG4gICAgICAgIGlmICh6b29tID49IDAgJiYgem9vbSA8PSA2KSB7XG4gICAgICAgICAgcG9pbnRSYWRpdXMgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHpvb20gPiA2ICYmIHpvb20gPD0gOSkge1xuICAgICAgICAgIHBvaW50UmFkaXVzID0gMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh6b29tID4gOSAmJiB6b29tIDw9IDExKSB7XG4gICAgICAgICAgcG9pbnRSYWRpdXMgPSAzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHpvb20gPiAxMSkge1xuICAgICAgICAgIHBvaW50UmFkaXVzID0gNDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwb2ludFJhZGl1cztcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGUgPSBmZWF0dXJlLnR5cGU7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAxOiAvLydQb2ludCdcbiAgICAgICAgICAvLyB1bnNlbGVjdGVkXG4gICAgICAgICAgc3R5bGUuY29sb3IgPSBDb25maWdbc2VjdG9yXVtmZWF0dXJlLnByb3BlcnRpZXMudHlwZV0uY29sb3IgfHwgJyMzMDg2QUInO1xuICAgICAgICAgIHN0eWxlLnJhZGl1cyA9IFNjYWxlRGVwZW5kZW50UG9pbnRSYWRpdXM7XG4gICAgICAgICAgLy8gc2VsZWN0ZWRcbiAgICAgICAgICBzZWxlY3RlZC5jb2xvciA9IHN0eWxlLmNvbG9yOyAvL3NhbWUgY29sb3JcbiAgICAgICAgICBzZWxlY3RlZC5yYWRpdXMgPSA4OyAvL2J1dCBiaWdnZXJcbiAgICAgICAgICBzZWxlY3RlZC5saW5lV2lkdGggPSAxOyAvL291dGxpbmUgd2lkdGhcbiAgICAgICAgICBzZWxlY3RlZC5zdHJva2VTdHlsZSA9IFwiI2YyZjJmMlwiOyAvL291dGxpbmUgY29sb3JcbiAgICAgICAgICBicmVhaztcblxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuICB9O1xufVxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7IiwiXG5mdW5jdGlvbiBwcmludCgpIHtcblxuICB2YXIgcHJpbnRQb3N0QXJncyA9IHtcbiAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgIC8vdXJsOiBcImh0dHA6Ly9zcGF0aWFsc2VydmVyLnNwYXRpYWxkZXYuY29tL0ZTUE1hcHMtTGVhZmxldC9zdW1tYXJ5LyNpZD0yNDQyJnNlY3Rvcj1mc3BcIiwgLy8vRm9yIFRlc3RcbiAgICBpbWFnZWZvcm1hdDogJ3BuZycsXG4gICAgZm9ybWF0OiAnanNvbicgLFxuICAgIC8vdmlld3BvcnRoZWlnaHQ6IG1hcEhlaWdodCxcbiAgICB2aWV3cG9ydHdpZHRoOiAxMzAwXG4gIH07XG5cbiAgLy9TZXR1cCBidXR0b24gc3RhdGVcbiAgb25JbWFnZUV4cG9ydFN0YXJ0KCk7XG5cbiAgJC5hamF4KHtcbiAgICB0eXBlOiBcIlBPU1RcIixcbiAgICB1cmw6ICdodHRwOi8vcHJpbnQuc3BhdGlhbGRldi5jb20nLFxuICAgIGRhdGE6IHByaW50UG9zdEFyZ3MsXG4gICAgc3VjY2Vzczogb25JbWFnZUV4cG9ydCxcbiAgICBlcnJvcjogb25FcnJvclxuICB9KTtcblxufVxuXG5mdW5jdGlvbiBvbkltYWdlRXhwb3J0U3RhcnQoKXtcbiAgLy9BbHRlciBzdGF0ZSBvZiBidXR0b25zIHdoaWxlIGV4cG9ydGluZy5cbiAgJChcIiNvcGVuQnRuXCIpLnJlbW92ZUNsYXNzKFwib25cIik7XG4gICQoXCIjZXhwb3J0QnRuIC5sb2FkaW5nXCIpLmFkZENsYXNzKFwib25cIik7XG4gICQoXCIjZXhwb3J0QnRuIC5jb250ZW50XCIpLnJlbW92ZUNsYXNzKFwib25cIik7XG4gICQoXCIjZXhwb3J0QnRuICNleHBvcnQtZ2x5cGhcIikucmVtb3ZlQ2xhc3MoXCJvblwiKTtcbiAgJChcIiNyZXNldEJ1dHRvblwiKS5yZW1vdmVDbGFzcyhcIm9uXCIpO1xufVxuXG5mdW5jdGlvbiBvbkltYWdlRXhwb3J0KHJlc3VsdCkge1xuICAvL2luc3RlYWQsIHNob3cgYSBidXR0b24vaHlwZXJsaW5rIGZvciB0aGUgdXNlciB0byBvcGVuIHRoZSBpbWFnZS5cbiAgJChcIiNvcGVuQnRuIGEub3BlblwiKS5hdHRyKFwiaHJlZlwiLCByZXN1bHQuaW1hZ2UpLmFkZENsYXNzKFwib25cIik7XG4gICQoXCIjb3BlbkJ0blwiKS5hZGRDbGFzcyhcIm9uXCIpO1xuICAkKFwiI2V4cG9ydEJ0blwiKS5yZW1vdmVDbGFzcyhcIm9uXCIpO1xuICAkKFwiI2V4cG9ydEJ0biAubG9hZGluZ1wiKS5yZW1vdmVDbGFzcyhcIm9uXCIpO1xuICAkKFwiI2V4cG9ydEJ0biAuY29udGVudFwiKS5yZW1vdmVDbGFzcyhcIm9uXCIpO1xuICAkKFwiI2V4cG9ydEJ0biAjZXhwb3J0LWdseXBoXCIpLnJlbW92ZUNsYXNzKFwib25cIik7XG4gICQoXCIjcmVzZXRCdXR0b25cIikuYWRkQ2xhc3MoXCJvblwiKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRFeHBvcnRCdXR0b25zKCkge1xuICAvL2luc3RlYWQsIHNob3cgYSBidXR0b24vaHlwZXJsaW5rIGZvciB0aGUgdXNlciB0byBvcGVuIHRoZSBpbWFnZS5cbiAgJChcIiNvcGVuQnRuXCIpLnJlbW92ZUNsYXNzKFwib25cIik7XG4gICQoXCIjZXhwb3J0QnRuXCIpLmFkZENsYXNzKFwib25cIik7XG4gICQoXCIjZXhwb3J0QnRuIC5sb2FkaW5nXCIpLnJlbW92ZUNsYXNzKFwib25cIik7XG4gICQoXCIjZXhwb3J0QnRuIC5jb250ZW50XCIpLmFkZENsYXNzKFwib25cIik7XG4gICQoXCIjZXhwb3J0QnRuICNleHBvcnQtZ2x5cGhcIikuYWRkQ2xhc3MoXCJvblwiKTtcbiAgJChcIiNyZXNldEJ1dHRvblwiKS5yZW1vdmVDbGFzcyhcIm9uXCIpO1xufVxuXG5cbmZ1bmN0aW9uIG9uRXJyb3IoY2IpIHtcblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJpbnQ6IHByaW50LFxuICByZXNldDogcmVzZXRFeHBvcnRCdXR0b25zXG59OyJdfQ==
