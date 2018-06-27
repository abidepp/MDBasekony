//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "MDBase",
    appName: "MDBase",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.0.36",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "MDBase",
    isturlbase: "https://cognizantdigital-dev.konycloud.com/services",
    isMFApp: true,
    appKey: "e51ffaa6d0e4c7c55adbc39553d93e43",
    appSecret: "1425b36ebbebbf21d893473becb817c7",
    serviceUrl: "https://100008191.auth.konycloud.com/appconfig",
    svcDoc: {
        "selflink": "https://100008191.auth.konycloud.com/appconfig",
        "messagingsvc": {
            "appId": "80ab6410-bbeb-4422-aed1-21f73e861019",
            "url": "https://cognizantdigital-dev.messaging.konycloud.com/api/v1"
        },
        "integsvc": {
            "TVshow": "https://cognizantdigital-dev.konycloud.com/services/TVshow",
            "popularAll": "https://cognizantdigital-dev.konycloud.com/services/popularAll",
            "MoviesInfo": "https://cognizantdigital-dev.konycloud.com/services/MoviesInfo",
            "Session": "https://cognizantdigital-dev.konycloud.com/services/Session"
        },
        "service_doc_etag": "000001643BC6A318",
        "appId": "80ab6410-bbeb-4422-aed1-21f73e861019",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "MDB2903",
        "reportingsvc": {
            "session": "https://cognizantdigital-dev.konycloud.com/services/IST",
            "custom": "https://cognizantdigital-dev.konycloud.com/services/CMS"
        },
        "baseId": "93973cfc-bd5b-42b5-a550-18b083d54003",
        "services_meta": {
            "TVshow": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://cognizantdigital-dev.konycloud.com/services/TVshow"
            },
            "popularAll": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://cognizantdigital-dev.konycloud.com/services/popularAll"
            },
            "MoviesInfo": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://cognizantdigital-dev.konycloud.com/services/MoviesInfo"
            },
            "Session": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://cognizantdigital-dev.konycloud.com/services/Session"
            }
        }
    },
    runtimeAppVersion: "1.0",
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: "https://100008191.auth.konycloud.com/appconfig",
    secureurl: "https://100008191.auth.konycloud.com/appconfig"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        isMVC: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 8200
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: applicationController.appInit,
        showstartupform: function() {
            var startForm = new kony.mvc.Navigation("Form1");
            startForm.navigate();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_KonyLogger"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_binarydata"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.ND_binary_util"
    });
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;