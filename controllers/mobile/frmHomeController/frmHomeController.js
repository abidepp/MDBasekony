define({ 

  //Type your controller code here 
  loadHomeForm: function()
  {
    try
    {
      var headers = {};
      var inputParams = 
          {
            api_key : "6c899bbd67713e8f2720b10f00b18807",
            language: "en-US",
            page: 1
          };
      kony.print("---->calling invoke service");    
      invokeService("popularAll", "popularMoviesTV", headers, inputParams, "loadSegscrolloneSuccessCallBack", "loadSegscrolloneFailureCallback", this);

    }
    catch(err)
    {
      kony.print("loadHomeForm exception"+err);
    }
  },

  loadSegscrolloneSuccessCallBack : function(response)
  {
    try{
      kony.print("loadSegscrolloneSuccessCallBack response--->"+JSON.stringify(response));
      //   	this.view.errorMessage.lblMessageText = response;


      var movieDetails = [];
      var movies = [];
      var tvShows = [];
      movieDetails = response.results;
      kony.print("loadSegscrolloneSuccessCallBack"+movieDetails.length);

      for(var i = 0; i < movieDetails.length; i++)
      {
        var moviesData= {};
        var tvshowData= {};
        if(movieDetails[i].title !== undefined)
        {
          moviesData = 
            {
            "imgPoster" : {"src":CONSTANTS.image_link+movieDetails[i].poster_path},
            "lblTitle":{"text":movieDetails[i].title}
          };   
          movies.push(moviesData);
        }
        else if(movieDetails[i].name !== undefined)
        {
          tvshowData = 
            {
            "imgPoster" : {"src":CONSTANTS.image_link+movieDetails[i].poster_path},
            "lblTitle":{"text":movieDetails[i].name}
          };
          tvShows.push(tvshowData);
        }
      
      }


      this.view.segScrollOne.setData(movies);
      this.view.SegScrolltwo.setData(tvShows);
      kony.print("Segscrollone data set successfully");
    }
    catch(err)
    {
      kony.print("loadSegscrolloneSuccessCallBack exception"+err);
    }

  },

  loadSegscrolloneFailureCallback : function(err)
  {
    kony.print("loadSegscrolloneFailureCallback"+JSON.stringify(err));
  }


});