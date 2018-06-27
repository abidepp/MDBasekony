//Type your code here
var appData = {
    Appkey: "e51ffaa6d0e4c7c55adbc39553d93e43",
    Appsecret: "1425b36ebbebbf21d893473becb817c7",
    serviceurl: "https://100008191.auth.konycloud.com/appconfig"
};
var boolConnectionToMF = false;
// checkIfNetworkAvailable : function()
// {
//   return kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
// }
/* *****
----------------commented to check auto init------------
*/
// function connectToMF()
// {
//   client = new kony.sdk();
//   if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
//     {
//       try
//         {     
//       	  kony.print("---->connecting to MF");
//       	  client.init(appData.Appkey, appData.Appsecret, appData.serviceurl, initServicesuccessCallback, initServicefailureCallback);
//         }
//       catch(error)
//         {
//           kony.print("exception handled",+JSON.stringify(error));
//           boolConnectionToMF = false;
//         }
//     }
//   else
//     {
//       kony.print("Network not available");
//     }
// }
function initServicesuccessCallback() {
    kony.print("---->success MF connection");
    boolConnectionToMF = true;
    //commonUtils.displayPopUp(this, errorMessagepopup, "success");
}

function initServicefailureCallback() {
    boolConnectionToMF = false;
    kony.print("---->failure MF connection");
}

function invokeService(serviceName, operation, headers, inputParams, successCallBack, failureCallBack, currentController) {
    try {
        kony.print("---->inside invokeService");
        var client = kony.sdk.getCurrentInstance();
        if (client !== null) {
            var serviceObj = client.getIntegrationService(serviceName);
            kony.print("---->inside invoke service after service object" + serviceObj);
            serviceObj.invokeOperation(operation, headers, inputParams, function(result) {
                //         kony.print("movies service"+JSON.Stringify(result));
                kony.print("----> invokeService success callback" + result);
                currentController[successCallBack](result);
                kony.print("----> invokeService success callback called");
            }, function(result) {
                kony.print("----> invokeService failure callback" + JSON.stringify(result));
                currentController[failureCallBack](result);
                kony.print("----> invokeService failure callback called");
            });
        } else {
            kony.print("could not initialize fabric");
        }
    } catch (err) {
        kony.print("invokeService exception--->" + err);
    }
}
var touchID = {
    statusCB: function() {
        if (false) {
            kony.ui.Alert({
                message: "AUTHENTICATION SUCCESSFULL",
                alertType: constants.ALERT_TYPE_INFO,
                yesLabel: "Close"
            }, {});
        } else {
            //var messg = status+message;
            kony.ui.Alert({
                message: "AUTHENTICATION SUCCESSFULL",
                alertType: constants.ALERT_TYPE_INFO,
                yesLabel: "Close"
            }, {});
        }
    },
    //   authUsingTouchID : function()
    // {
    //   kony.print("inside touchID function");
    //   var configMap = {"promptMessage" : "PLEASE AUTHENTICATE USING YOUR TOUCH ID"
    //                    };
    //   kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID,statusCB,config);
    // }
}