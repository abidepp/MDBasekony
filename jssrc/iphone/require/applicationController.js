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
        kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
        kony.application.setDefaultTextboxPadding(false);
        kony.application.setRespectImageSizeForImageWidgetAlignment(true);
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("Form1").navigate();
    }
});