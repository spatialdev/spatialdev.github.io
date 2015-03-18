
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