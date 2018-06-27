//Type your code here
var appData = {
    Appkey: "e51ffaa6d0e4c7c55adbc39553d93e43",
    Appsecret: "1425b36ebbebbf21d893473becb817c7",
    serviceurl: "https://100008191.auth.konycloud.com/appconfig"
};
// checkIfNetworkAvailable : function()
// {
//   return kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
// }
function connectToMF() {
    client = new kony.sdk();
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        try {
            kony.print("connecting to MF");
            client.init(appData.Appkey, appData.Appsecret, appData.serviceurl, initServicesuccessCallback, initServicefailureCallback);
        } catch (error) {
            kony.print("exception handled", +JSON.stringify(error));
        }
    } else {
        kony.print("Network not available");
    }
}

function initServicesuccessCallback() {
    kony.print("success");
    commonUtils.displayPopUp(this, errorMessagepopup, "success");
}

function initServicefailureCallback() {
    kony.print("failure");
}
var touchID = {
    authUsingTouchID: function() {
        kony.print("inside touchID function");
        var configMap = {
            "promptMessage": "PLEASE AUTHENTICATE USING YOUR TOUCH ID"
        };
        kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID, statusCB, config);
    },
    statusCB: function(status, message) {
        if (status == 5000) {
            kony.ui.Alert({
                message: "AUTHENTICATION SUCCESSFULL",
                alertType: constants.ALERT_TYPE_INFO,
                yesLabel: "Close"
            }, {});
        } else {
            var messg = status + message;
            kony.ui.Alert({
                message: messg,
                alertType: constants.ALERT_TYPE_INFO,
                yesLabel: "Close"
            }, {});
        }
    }
}