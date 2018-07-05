//Type your code here

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
    kony.print("callbackRegisterSuccess");
    kony.print("************ callbackRegisterSuccess() called *********");
    kony.print("Registration Token: " + regId);
    var datTim = ""+kony.os.date()+""+kony.os.time()
    kony.print ("kony time"+datTim);
    
    var gblUserID = Math.floor(Math.random() * 2000000);

    var kpns_inputparams = {};
    kpns_inputparams["appId"]= "80ab6410-bbeb-4422-aed1-21f73e861019";//gblKPNSAppID.toString();  
    kpns_inputparams["deviceId"]=kony.os.deviceInfo().deviceid;
    kpns_inputparams["ufid"]=gblUserID;//gblKPNS_PushConfig.KPNS_SubcriberID;
    kpns_inputparams["sid"]=regId;
    kpns_inputparams["osType"]=getOSType();
    kpns_inputparams["deviceName"]=kony.os.deviceInfo().model;

    var servicename="KPNS";
    var operationname = "Subscribe";
invokeService(serviceName, operation, headers, inputParams, successCallBack, failureCallBack, currentController)
    invokeService(servicename, kpns_inputparams, operationname, onCallBackRegisterKPNS_Push);    
  }
  catch(err)
  {
    kony.print("callbackRegisterSuccess exception");
  }
}

function onCallBackRegisterKPNS_Push()
{
  try
  {
    var ksid;
    if(status==400){ 
      var resultTab = getErrorResponse(status,resulttable);
      if(resultTab!=null){	
        if(resulttable["opstatus"]==0){	
          //dismissSyncLoadingScreen();	  
          kony.print("Result from the Service "+JSON.stringify(resultTab));
          k_sid = resulttable["ksid"];
          kony.print("KSID = "+k_sid);
          if(resulttable["httpStatusCode"]=="200" || resulttable["httpStatusCode"]==200){
            if(resulttable["ksid"].length>0 && resulttable["ksid"]!== undefined && resulttable["ksid"]!== null){
              kony.print("Service RegisterKPNS_Push success");
              isRegistered = 1;
              var message="Service RegisterKPNS_Push success "+resulttable["httpStatusCode"];

            }else{
              kony.print("Service RegisterKPNS_Push failed");
            }
          }else{
            var message="Service RegisterKPNS_Push failed "+resulttable["httpStatusCode"];
            kony.print("Service RegisterKPNS_Push failed "+resulttable["httpStatusCode"]);
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
    }else{
      kony.print("Status is "+status);
    }
  }
  catch(err)
  {
    kony.print("onCallBackRegisterKPNS_Push exception "+err)
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
    switch(osType)
    {
      case "iphone":
      case "ipad":
      case "ipod":
        config = [0, 1, 2];
        break;
      case "androidgcm": 
        kony.print("googleProjID: "+googleProjID);
        // config={senderid:"1092680107276"}; // use for GCM the sender ID is going to be the project ID associated with the account
        config={senderid: "1092680107276" };	  // use for C2DM
        break;  
      case "blackberry":
        config = { 
          appid:"4575-s5B6359ee2651IM7y53r1D114cy84012338",
          port:34560,
          bpasurl:"http://cp4575.pushapi.eval.blackberry.com",
          appicon:"icon.png",
          starappicon:"starappicon.png",
          statusbaricon:"statusicon.png"
        };
        break;
      case "windows": 
        config={
          remoteimageurls:["http://www.qr.com.qa/publishingimages/newlogo.jpg", "http://www.qr.com.qa/publishingimages/newlogo.jpg"],//http://www.mofa.gov.qa/mofastyles/images/mofa-logo.png
          enableraw:true,
          enabletile:false,
          enabletoast:true
        };
        break;

    }
    kony.print("config: "+JSON.stringify(config));
    kony.push.register(config);
  }catch(err){
    globalException("PushNotification","registerPhone",err);
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

  }catch(err){
    globalException("PushNotification","getOSType",err);
  }
}