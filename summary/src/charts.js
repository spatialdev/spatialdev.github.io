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
