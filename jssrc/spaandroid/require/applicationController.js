define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("com.popup.errorMessage", "errorMessage", "errorMessageController");
        kony.application.registerMaster({
            "namespace": "com.popup",
            "classname": "errorMessage",
            "name": "com.popup.errorMessage"
        });
        kony.mvc.registry.add("Form1", "Form1", "Form1Controller");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("Form1").navigate();
    }
});