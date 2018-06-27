define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("com.konymp.CardWithPeek", "CardWithPeek", "CardWithPeekController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "CardWithPeek",
            "name": "com.konymp.CardWithPeek"
        });
        kony.mvc.registry.add("com.popup.errorMessage", "errorMessage", "errorMessageController");
        kony.application.registerMaster({
            "namespace": "com.popup",
            "classname": "errorMessage",
            "name": "com.popup.errorMessage"
        });
        kony.mvc.registry.add("flxtplMain", "flxtplMain", "flxtplMainController");
        kony.mvc.registry.add("flxtemplate", "flxtemplate", "flxtemplateController");
        kony.mvc.registry.add("Form1", "Form1", "Form1Controller");
        kony.mvc.registry.add("Form2", "Form2", "Form2Controller");
        kony.mvc.registry.add("frmHome", "frmHome", "frmHomeController");
        kony.mvc.registry.add("frmLatestMovies", "frmLatestMovies", "frmLatestMoviesController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("Form1").navigate();
    }
});