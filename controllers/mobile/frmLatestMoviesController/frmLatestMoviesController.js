define({ 

 //Type your controller code here 
  
  loadFormLatestMovies : function()
  {
    this.view.postShow = this.populateSegment;
  	this.view.tabView.gridMovies.onRowSelected = this.getSelectedGridData;
    
  },
  
  getSelectedGridData: function()
  {
//     var data = this.view.tabView.gridMovies.selectedCellItem;
//     kony.print("selectedCellItem"+data);
//     var dataTwo = this.view.tabView.gridMovies.selectedCellIndex;
//     kony.print("selectedCellIndex"+dataTwo);
//     var dataThree = this.view.tabView.gridMovies.selectedIndex;
//     kony.print("selectedIndex"+dataThree);
//     var dataFour = this.view.tabView.gridMovies.selectedIndices;
//     kony.print("selectedIndices"+dataFour);
    let dataFive = this.view.tabView.gridMovies.selectedItem;
    kony.print("selectedItem"+dataFive);
//     var dataSix = this.view.tabView.gridMovies.selectedItems;
//     kony.print("selectedItems"+dataSix);
    let movieID = dataFive.col3id;
    if(movieID !== null || movieID !== undefined)
      {
        var inputParams = {
          api_key : "6c899bbd67713e8f2720b10f00b18807",
          movieID : movieID,
  		  language : "en-US"
        };
        var headers = {};
        kony.print("invoke service");
    invokeService("CreditsAndDetails", "getDetailsAndCredits", headers, inputParams, "getDetailsAndCreditsSuccessCallback", "getDetailsAndCreditsFailureCallback", this);
      }
    
  },
  
  getDetailsAndCreditsSuccessCallback : function(response)
  {
    try
      {
         kony.print("getDetailsAndCreditsSuccessCallback"+response);
      }
    catch(err)
      {
        kony.print("getDetailsAndCreditsSuccessCallback exception"+err);
      }
  },
  
  getDetailsAndCreditsFailureCallback : function(error)
  {
    try
      {
        kony.print("getDetailsAndCreditsFailureCallback"+error);
      }
    catch(err)
      {
        kony.print("getDetailsAndCreditsFailureCallback exception"+err);
      }
  },
  
  populateSegment: function()
  {
    kony.print("---->populate segment called");
//     this.view.SegmentMovies.widgetDataMap = {
//       "lblID":"lblID",
//       "lbl":"lbl",
//       "img": "img"
//     };
    var headers = {};
    var inputParams = {
      api_key : "6c899bbd67713e8f2720b10f00b18807",
      language: "en-US",
      page: 1
    };
    kony.print("---->calling invoke service");
    invokeService("popularAll", "popularMoviesTV", headers, inputParams, "loadSegmentSuccessCallBack", "loadSegmentFailureCallback", this);
  },
  
  loadSegmentSuccessCallBack: function (response)
  {
    kony.print("loadSegmentSuccessCallBack response--->"+JSON.stringify(response));
//   	this.view.errorMessage.lblMessageText = response;
    
    
    var movieDetails = [];
    var movie_posters = [];
    var show_posters = [];
    movieDetails = response.results;
    kony.print("loadSegmentSuccessCallBack"+movieDetails.length);
    
    for(var i = 0; i < movieDetails.length-2; i+=3)
      {
        var moviesData= {};
        var tvshowData= {};
        if(movieDetails[i].title !== undefined)
        {
          moviesData = 
            {
            "col1" : CONSTANTS.image_link+movieDetails[i].poster_path,
            "col1id" : movieDetails[i].id,
            "col2" : CONSTANTS.image_link+movieDetails[i+1].poster_path,
            "col2id" : movieDetails[i].id,
            "col3" : CONSTANTS.image_link+movieDetails[i+2].poster_path,
            "col3id" : movieDetails[i].id
          };  
           movie_posters.push(moviesData);
        }
        else if(movieDetails[i].name !== undefined)
        {
          tvshowData = 
            {
            "col1" : CONSTANTS.image_link+movieDetails[i].poster_path,
            "col1id" : movieDetails[i].id,
            "col2" : CONSTANTS.image_link+movieDetails[i+1].poster_path,
            "col2id" : movieDetails[i].id,
            "col3" : CONSTANTS.image_link+movieDetails[i+2].poster_path,
            "col3id" : movieDetails[i].id
          };
          show_posters.push(tvshowData); 
        }
   
      }
    
    
//     this.view.SegmentMovies.setData(data);
   
    this.view.tabView.gridMovies.addAll(movie_posters);
    this.view.tabView.gridTvShows.addAll(show_posters);
    kony.print("grid data data set successfully");
},
  
  loadSegmentFailureCallback: function (err)
  {
 	kony.print("loadSegmentFailureCallback"+err); 
}

 });