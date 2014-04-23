var filterReposArray =[];

function init(){
  githubInfoSpatialDev();

  getSpatialDevRepos();


}

function createRepoStats(data){





  var followers = data.data.followers;
  $("#num-followers").html(followers);


}

function getMostRecentUpdatedRepos(reposArray){

  var mostRecentUpdatedRepos = reposArray;

  var recentList = mostRecentUpdatedRepos.slice(0,4);



  for (var i=0, len=recentList.length; i<len; i++) {
      recentItem = recentList[i];
      console.log(recentItem);

      var name = recentItem.name;
      var htmlURL = recentItem.html_url;
      var updatedDate = recentItem.updated_at;

      var updatedDate = updatedDate.split('T')[0];

      var RecentRepoList = $("<li class='repos'><span class='name'><a href='" + htmlURL + "'>" + name + "  </a></span><span class='repoDate'>" + updatedDate + "</span></lo>").appendTo("#recently-updated-repos");

  }


}

function githubInfoSpatialDev(){

    var postArgs = {

    };

    var url = 'https://api.github.com/users/spatialdev';

    $.getJSON(url + "?callback=?", postArgs).done(function (data) {

      console.log(data);
      //createReposCards(data);

      createRepoStats(data);

      //formatTrendObject(data);

    }).fail(function (jqxhr, textStatus, error) {
        var err = textStatus + ', ' + error;
        console.log("Request Failed: " + err);
    });
}

function getSpatialDevRepos(){

    // console.log(data);
    // createReposCards(data);


    var postArgs = {

      type: "public",
      sort: "updated"


    };


    var url = 'https://api.github.com/users/spatialdev/repos';

    $.getJSON(url + "?callback=?", postArgs).done(function (data) {

    	console.log(data);
      //createReposCards(data);

      getFilterRepos(data);

      var numberRepos = data.data.length;
      console.log(numberRepos);

      $("#num-repos").html(numberRepos);

      //formatTrendObject(data);

    }).fail(function (jqxhr, textStatus, error) {
        var err = textStatus + ', ' + error;
        console.log("Request Failed: " + err);
    });
}

function getFilterRepos(data){

  filterReposArray = [];

      $.each(data.data, function (id, item) {

          var forksBool = item.fork;
          // console.log(forksBool);

          var hasName = item.name;
          // console.log(hasName);

          var haslanguage = item.language;

          if (forksBool == false) {

            filterReposArray.push(item);
          }

      });



      // console.log(filterReposArray);
      createReposCards(filterReposArray);
      getMostRecentUpdatedRepos(filterReposArray)

}

function formatTrendObject(data) {
    //Take in data from DB, format and group so that each crop variety's table is strucutured here.
    //Should have 4 rows, one for each plot_type.  But sometimes, data may  not exist for all of those.
    //Columns should contain any additional properties

    repoData = data;

    //repoData = data;


    var groupArray = [];
    for (var i=0, len=repoData.length; i<len; i+=3) {
        groupArray.push([repoData[i],repoData[i+1],repoData[i+2]]);

    }

    // console.log(groupArray);
    return groupArray;
}

function createReposCards(data){

  repoGroupData = formatTrendObject(data);

  var repoTable = $("<table class='repoTable'></table>").appendTo("#repos");
  //var tableHead = $("<tr><th>#</th><th>Village</th><th>Type</th><th>Crop</th><th>Plot Size</th>").appendTo(varietyTable);

  // var Statistics = '<td><div id="repoCard" class="workFrame mid" onclick="javascript:location.href=' + "'" +  "htmlURL" + "'" + '"><div class="repoTag"></div><div class="workImage"></div><div class="workText"><div class="workTitle wordwrap">' + "repoName" + '</div><div class="workSubTitle">' + "repoLanguage" + '</div><div class="workDescription">' + "repoDesc" + '</div>' + "footer" + '</div></div></td>';
  //
  // var RecentUpdates = '<td><div id="repoCard" class="workFrame mid" onclick="javascript:location.href=' + "'" +  "htmlURL" + "'" + '"><div class="repoTag"></div><div class="workImage"></div><div class="workText"><div class="workTitle wordwrap">' + "repoName" + '</div><div class="workSubTitle">' + "repoLanguage" + '</div><div class="workDescription">' + "repoDesc" + '</div>' + "footer" + '</div></div></td>';
  //
  //
  // $("<tr><td>"+ Statistics + "</td><td>"+ RecentUpdates + "</td></tr>").appendTo(repoTable);
  //


  $.each(repoGroupData, function (idx, item) {

  //console.log(idx);
  //console.log(item);


    //var repoTextWrapper = null;

    //var html = null;
    var htmlArray = [];

    $.each(item, function (idx, item) {

      if (item){

        var repoName = item.name;
        var repoDesc = item.description;
        var repoLanguage = item.language;
        var htmlURL = item.html_url;
        var watchers = item.watchers_count;
        var forks = item.forks_count;

        var fork = item.fork;



        var footer= '<div class="repo-footer"><span class="watchers">' + watchers + ' <i class="fa fa-star"></i></a></span><span class="forks">' + forks + ' <i class="fa fa-code-fork"></i></a></span></div>';

        var string = '<td><div id="repoCard" class="workFrame" onclick="javascript:location.href=' + "'" +  htmlURL + "'" + '"><div class="repoTag"></div><div class="workImage"></div><div class="workText"><div class="workTitle wordwrap">' + repoName + '</div><div class="workSubTitle">' + repoLanguage + '</div><div class="workDescription">' + repoDesc + '</div>' + footer + '</div></div></td>';


        var html = [string];

        htmlArray.push(html);

      }



    });

    //console.log(htmlArray);




    $("<tr>"+ htmlArray[0] + htmlArray[1] + htmlArray[2] || "" + "</tr>").appendTo(repoTable);

  });

}

function clickedWorkImage(htmlURL){

  console.log(htmlURL);

}
