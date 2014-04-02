function getSpatialDevRepos(){

    // console.log(data);
    // createReposCards(data);


    var postArgs = {


    };


    var url = 'https://api.github.com/users/spatialdev/repos';

    $.getJSON(url + "?callback=?", postArgs).done(function (data) {

    	console.log(data);
      createReposCards(data);

      //formatTrendObject(data);

    }).fail(function (jqxhr, textStatus, error) {
        var err = textStatus + ', ' + error;
        console.log("Request Failed: " + err);
    });
}

function formatTrendObject(data) {
    //Take in data from DB, format and group so that each crop variety's table is strucutured here.
    //Should have 4 rows, one for each plot_type.  But sometimes, data may  not exist for all of those.
    //Columns should contain any additional properties

    repoData = data.data;

    //repoData = data;

    console.log(repoData.length);

    var groupArray = [];
    for (var i=0, len=repoData.length; i<len; i+=3) {
        groupArray.push([repoData[i] || "",repoData[i+1] || "",repoData[i+2] || ""]);

    }

    // for (var key in groupArray) {
    //
    // }
    console.log(groupArray);
    return groupArray;
}

function createReposCards(data){

  repoGroupData = formatTrendObject(data);

  var repoTable = $("<table></table>").appendTo(".imageGallery");
  //var tableHead = $("<tr><th>#</th><th>Village</th><th>Type</th><th>Crop</th><th>Plot Size</th>").appendTo(varietyTable);

  $.each(repoGroupData, function (idx, item) {

  //console.log(idx);
  console.log(item);


    //var repoTextWrapper = null;

    //var html = null;
    var htmlArray = [];

    $.each(item, function (idx, item) {

      // //console.log(item.name);
      var repoName = item.name;
      var repoDesc = item.description;
      var repoLanguage = item.language;
      var htmlURL = item.html_url;

      //html = ''; //declare string inside function
        //html += '<tr>';
        var html = ['<td><div id="' + repoName + '" class="workFrame mid" onclick="clickedWorkImage(this);"><div class="workImage"></div><div class="workText"><div class="workTitle Arab">' + repoName + '</div><div class="workSubTitle">' + repoLanguage + '</div><div class="workDescription">' + repoDesc + '</div></div></div></td>'];
        //html += '</tr>';
        htmlArray.push(html);


    });

    console.log(htmlArray);

    // $(html + "<td></td><td></td><td></td></tr>").appendTo('tbody');

    $("<tr><td>"+ htmlArray[0] + "</td><td>"+ htmlArray[1] + "</td><td>"+ htmlArray[2] + "</td></tr>").appendTo(repoTable);

    // $('tbody').append(html);

    // html = null;



  });


  //$(html).appendTo(repoTable);


}
