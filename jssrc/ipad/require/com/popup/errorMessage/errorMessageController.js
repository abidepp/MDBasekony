define(function() {
    var controller = require("com/popup/errorMessage/usererrorMessageController");
    var actions = require("com/popup/errorMessage/errorMessageControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});