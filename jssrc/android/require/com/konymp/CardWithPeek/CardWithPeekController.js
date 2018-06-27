define(function() {
    var controller = require("com/konymp/CardWithPeek/userCardWithPeekController");
    var actions = require("com/konymp/CardWithPeek/CardWithPeekControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});