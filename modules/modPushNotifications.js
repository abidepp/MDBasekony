//Type your code here
var gblKsid = "";
function setupPushCallBacks(){
  kony.print("************ setupPushCallBacks called *********");
  try{
    var callbacks = {  onsuccessfulregistration: callbackRegisterSuccess, 
                     onfailureregistration: callbackRegisterFailure,
                     onlinenotification: callbackOnlinePush, 
                     offlinenotification: callbackOfflinePush,
                     onsuccessfulderegistration: callbackDeregisterSuccess, 
                     onfailurederegistration: callbackDeregisterFailure
                    }; 

    kony.push.setCallbacks(callbacks);

  }catch(err){
    globalException("PushNotification","setupPushCallBacks",err);
  }
}

function callbackRegisterSuccess(regId)
{
  try
  {
    var authorization_header;
    var authentication_headers = {};
    var inputparams = {};
    inputparams["userid"]= "jacquline.joseph@cognizant.com";//gblKPNSAppID.toString();  
    inputparams["password"]= "Kony@12345";


    var servicename="AuthenticateUser";
    var operationname = "login";
    invokeService(servicename, operationname, authentication_headers, inputparams, function(result)
                  {
      kony.print("AuthenticateUserSuccessCallBack"+JSON.stringify(result));
      authorization_header = result.claims_token[0].value;
      kony.print("authorization_header---->"+authorization_header);


      kony.print("callbackRegisterSuccess");
      kony.print("************ callbackRegisterSuccess() called *********");
      kony.print("Registration Token: " + regId);
      var datTim = ""+kony.os.date()+""+kony.os.time()
      kony.print ("kony time"+datTim);

      var gblUserID = Math.floor(Math.random() * 2000000);
      kony.print("gblUserID-->"+gblUserID);

      var osType = getOSType();
      kony.print("osType-->"+osType);

      var headers = {
        "X-Kony-Authorization": authorization_header
      };



      var kpns_inputparams = {
        //       subscriptionService :{}
      };
      kpns_inputparams["appId"]= "80ab6410-bbeb-4422-aed1-21f73e861019";//gblKPNSAppID.toString();  
      kpns_inputparams["deviceId"]=kony.os.deviceInfo().deviceid;
      kpns_inputparams["ufid"]=gblUserID;//gblKPNS_PushConfig.KPNS_SubcriberID;
      kpns_inputparams["sid"]=regId;
      kpns_inputparams["osType"]=osType;
      kpns_inputparams["deviceName"]=kony.os.deviceInfo().model;
      kpns_inputparams["authToken"]= "";

      var servicename="KPNS";
      var operationname = "Subscribe";
      kony.print("callbackRegisterSuccess inputparams"+JSON.stringify(kpns_inputparams));
      //     function invokeService(serviceName, operation, headers, inputParams, successCallBack, failureCallBack, currentController)
      invokeService(servicename, operationname, headers, kpns_inputparams, onCallBackRegisterKPNS_Push, onCallBackRegisterKPNS_Failure, ""); 
    }, function(error){
      kony.print("AuthenticateUserFailureCallBack"+JSON.stringify(error));
    }, "");

  }
  catch(err)
  {
    kony.print("callbackRegisterSuccess exception"+err);
  }
}

function onCallBackRegisterKPNS_Push(response)
{
  try
  {
    kony.print("Result from the Service KPNS"+JSON.stringify(response));
    var ksid;
 

      if(response!=null){	
        if(response["opstatus"]==0){	
          //dismissSyncLoadingScreen();	  
          kony.print("Result from the Service "+JSON.stringify(response));
          k_sid = response["ksid"];
          kony.print("KSID = "+k_sid);
          gblKsid = k_sid;
          if(response["httpStatusCode"]=="200" || response["httpStatusCode"]==200){
            if(response["ksid"].length>0 && response["ksid"]!== undefined && response["ksid"]!== null){
              kony.print("Service RegisterKPNS_Push success");
              isRegistered = 1;
              var message="Service RegisterKPNS_Push success "+response["httpStatusCode"];

            }else{
              kony.print("Service RegisterKPNS_Push failed");
            }
          }else{
            var message="Service RegisterKPNS_Push failed "+response["httpStatusCode"];
            kony.print("Service RegisterKPNS_Push failed "+response["httpStatusCode"]);
            //dismissSyncLoadingScreen();
          }
        }else{
          //dismissSyncLoadingScreen();
          kony.print("opstatus is not equal to zero");
        }
      }else{
        kony.print("Resulttable is null");
        // dismissSyncLoadingScreen();
      }
      // dismissSyncLoadingScreen();
    
  }
  catch(err)
  {
    kony.print("onCallBackRegisterKPNS_Push exception "+err)
  }
}

function onCallBackRegisterKPNS_Failure(error)
{
  try
  {
    kony.print("onCallBackRegisterKPNS_Failure"+error);
  }
  catch(err)
  {
    kony.print("onCallBackRegisterKPNS_Failure exception"+err);
  }
}


function callbackRegisterFailure()
{
  try
  {
    kony.print("callbackRegisterFailure");
  }
  catch(err)
  {
    kony.print("callbackRegisterFailure exception");
  }
}

function callbackOnlinePush()
{
  try
  {
    kony.print("callbackOnlinePush");
  }
  catch(err)
  {
    kony.print("callbackOnlinePush exception");
  }
}

function callbackOfflinePush()
{
  try
  {
    kony.print("callbackOfflinePush");
  }
  catch(err)
  {
    kony.print("callbackOfflinePush exception");
  }
}

function callbackDeregisterSuccess()
{
  try
  {
    kony.print("callbackDeregisterSuccess");
  }
  catch(err)
  {
    kony.print("callbackDeregisterSuccess exception");
  }
}

function callbackDeregisterFailure()
{
  try
  {
    kony.print("callbackDeregisterFailure");
  }
  catch(err)
  {
    kony.print("callbackDeregisterFailure exception");
  }
}


function registerPhone(){
  try{
    kony.print("************ registeriPhone() called *********");
    var config;  // badges, sounds, alerts
    var osType=getOSType();
    kony.print("value returned is"+osType);
    //     switch(osType)
    //     {
    //       case "iphone":
    //         config = [0, 1, 2];
    //         break;
    //       case "ipad":
    //         config = [0, 1, 2];
    //         break;
    //       case "ipod":
    //         config = [0, 1, 2];
    //         break;
    //       case "androidgcm": 
    //     kony.print("googleProjID:"+googleProjID);
    // config={senderid:"1092680107276"}; // use for GCM the sender ID is going to be the project ID associated with the account
    //     config={senderid: "1092680107276" };	  // use for C2DM
    //         break;  
    //       case "blackberry":
    //         config = { 
    //           appid:"4575-s5B6359ee2651IM7y53r1D114cy84012338",
    //           port:34560,
    //           bpasurl:"http://cp4575.pushapi.eval.blackberry.com",
    //           appicon:"icon.png",
    //           starappicon:"starappicon.png",
    //           statusbaricon:"statusicon.png"
    //         };
    //         break;
    //       case "windows": 
    //         config={
    //           remoteimageurls:["http://www.qr.com.qa/publishingimages/newlogo.jpg", "http://www.qr.com.qa/publishingimages/newlogo.jpg"],//http://www.mofa.gov.qa/mofastyles/images/mofa-logo.png
    //           enableraw:true,
    //           enabletile:false,
    //           enabletoast:true
    //         };
    //         break;
    //       default:
    //         kony.print("inside default case");
    //         break;


    //     }
    kony.print("config: "+JSON.stringify({senderid:"1092680107276"}));
    kony.push.register({senderid:"1092680107276"});
  }catch(err){
    //     globalException("PushNotification","registerPhone",err);
    kony.print("exception at registerPhone");
  }
}


function getOSType(){
  try{
    kony.print("************ getOSType() called *********");
    var osprops = kony.os.deviceInfo();
    kony.print("OS Details:"+ JSON.stringify(osprops));
    var ostype = osprops["name"];
    kony.print("getOSType:::osprops['name'] "+ostype);


    if (kony.string.startsWith(ostype, "iph", true) == true){
      gblPlatform="iphone";
      return "iphone";
    }else if (kony.string.startsWith(ostype, "ipo", true) == true){
      gblPlatform="iphone";
      return "ipod";
    }else if (kony.string.startsWith(ostype, "ipa", true) == true){
      gblPlatform="ipad";
      return "ipad";
    }else if (kony.string.startsWith(ostype, "android", true) == true){
      kony.print("starts with android");
      kony.application.setApplicationProperties({statusBarColor: "67113E", statusBarForegroundColor: "67113E", statusBarHidden: false, statusBarStyle: constants.STATUS_BAR_STYLE_LIGHT_CONTENT});
      gblPlatform="android";
      return "androidgcm";
    }else if (kony.string.startsWith(ostype, "black", true) == true){
      return "blackberry";
    }else if (kony.string.startsWith(ostype, "Win", true) == true){
      gblPlatform = "windows";
      kony.print("getOSType::: gblplatform "+gblPlatform);
      if(ostype === "WindowsPhone"){
        return "windows";
      }
      kony.application.setApplicationProperties({statusBarColor: "67113E"});
      return "windows";

    }else if(kony.string.startsWith(ostype, "thinclient", true) == true  ||  gblChannel === "desktop"){
      gblPlatform = "desktop";
      return "desktop";
    }
    else
    {
      return "noValue";
    }

  }catch(err){
    globalException("PushNotification","getOSType",err);
  }
}

function pushMessage()
{
  try
  {
    kony.print("inside pushMessage");
    var header = {};
    var inputparams = {
      "messageRequest" : {
        "appId" : "80ab6410-bbeb-4422-aed1-21f73e861019",
        "global" : { },
        "messages" : {
          "message" : {
            "content" : {
              "priorityService" : "true",
              "data" : "you got a sample push",
              "mimeType" : "text/plain"
            },
            "overrideMessageId" : 0,
            "startTimestamp" : 0,
            "expiryTimestamp" : 0,
            "subscribers" : {
              "subscriber" : [ {
                "ksid" : gblKsid
              } ],
              "segmentCriteria" : "xxx"
            },
            "platformSpecificProps" : { },
            "type" : "PUSH"
          }
        }
      }
    };
    
    kony.print("inputparams pushMessage"+ JSON.stringify(inputparams));
    var servicename = "KPNS";
    var operationname = "pushMessage";
    invokeService(servicename, operationname, header, inputparams, pushMessageSuccessCallback, pushMessageFailureCallback, "");


  }
  catch(err)
  {
    kony.print("pushMessage exception"+err);
  }
}

function pushMessageSuccessCallback(response)
{
  try
    {
      kony.print("pushMessageSuccessCallback"+ JSON.stringify(response));
    }
  catch(err)
    {
      kony.print("pushMessageSuccessCallback exception"+err);
    }
}

function pushMessageFailureCallback(error)
{
  try
    {
      kony.print("pushMessageFailureCallback"+ JSON.stringify(error));
    }
  catch(err)
    {
      kony.print("pushMessageFailureCallback exception"+err);
    }
}
/*


Sample Request	Sample Response
{
  "messageRequest" : {
    "appId" : "xxxx",
    "global" : { },
    "messages" : {
      "message" : {
        "content" : {
          "priorityService" : "false",
          "data" : "xxxx",
          "mimeType" : "text/plain"
        },
        "overrideMessageId" : 0,
        "startTimestamp" : 0,
        "expiryTimestamp" : 0,
        "subscribers" : {
          "subscriber" : [ {
            "ksid" : "xxxx"
          } ],
          "segmentCriteria" : "xxx"
        },
        "platformSpecificProps" : { },
        "type" : "PUSH"
      }
    }
  }
}
*/