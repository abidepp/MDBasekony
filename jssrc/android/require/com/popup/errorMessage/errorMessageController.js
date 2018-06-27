define(function() {
    var controller = require("com/popup/errorMessage/usererrorMessageController");
    var actions = require("com/popup/errorMessage/errorMessageControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "lblMessageText", function(val) {
            this.view.lblMessage.text = val;
        });
        defineGetter(this, "lblMessageText", function() {
            return this.view.lblMessage.text;
        });
        defineSetter(this, "isVisible1", function(val) {
            this.view.btnOK.isVisible = val;
        });
        defineGetter(this, "isVisible1", function() {
            return this.view.btnOK.isVisible;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_onClick_dba45a43b1894af395640aebfe1cd845 = function() {
        if (this.onClick) {
            this.onClick.apply(this, arguments);
        }
    }
    return controller;
});