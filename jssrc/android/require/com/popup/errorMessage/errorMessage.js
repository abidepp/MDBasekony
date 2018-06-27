define(function() {
    return function(controller) {
        var errorMessage = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "isMaster": true,
            "height": "20%",
            "id": "errorMessage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "slFbox",
            "width": "80%"
        }, {}, {});
        errorMessage.setDefaultUnit(kony.flex.DP);
        var lblMessage = new kony.ui.Label({
            "id": "lblMessage",
            "isVisible": true,
            "left": "119dp",
            "skin": "defLabel",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "18dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var btnOK = new kony.ui.Button({
            "centerX": "50%",
            "centerY": "80%",
            "focusSkin": "defBtnFocus",
            "height": "50dp",
            "id": "btnOK",
            "isVisible": true,
            "onClick": controller.AS_onClick_dba45a43b1894af395640aebfe1cd845,
            "skin": "defBtnNormal",
            "text": "OK",
            "top": "0dp",
            "width": "100dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        errorMessage.add(lblMessage, btnOK);
        return errorMessage;
    }
})