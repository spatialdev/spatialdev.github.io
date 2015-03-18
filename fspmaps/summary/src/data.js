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