define({ 

 //Type your controller code here 
  
  loadTrailerForm : function()
  {
    var headers = {};
    var inputparams = 
        {
          movie_id : "400535",
          language : "en-US",
          api_key : "6c899bbd67713e8f2720b10f00b18807"
        };
    var serviceName = "MoviesInfo";
    var operation = "getVideos";
    kony.print("loadTrailerFormservice call"+JSON.stringify(inputparams));
    invokeService(serviceName, operation, headers, inputparams, "loadTrailerFormsuccessCallBack", "loadTrailerFormfailureCallBack", this);
  },
  
  loadTrailerFormsuccessCallBack : function(response)
  {
    try
      {
        if(status === "success")
          {
            if(httpStatusCode === "200")
              {
                kony.print("loadTrailerFormsuccessCallBack"+JSON.stringify(response));
              }
            else
              {
                 kony.print("httpStatusCode is not 200");
              }
          }
        else
          {
             kony.print("loadTrailerForm service failed");
          }
        
      }
    catch(err)
      {
        kony.print("loadTrailerFormsuccessCallBack exception"+err);
      }
  },
  
  loadTrailerFormfailureCallBack : function(error)
  {
    try{
      kony.print("loadTrailerFormfailureCallBack"+JSON.stringify(error));
    }
    catch(err)
      {
        kony.print("loadTrailerFormfailureCallBack exception"+err);
      }
  }

 });