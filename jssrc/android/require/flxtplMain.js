define("flxtplMain", function() {
    return function(controller) {
        var flxtplMain = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "220dp",
            "id": "flxtplMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxtplMain.setDefaultUnit(kony.flex.DP);
        var lbl = new kony.ui.Label({
            "bottom": "5%",
            "id": "lbl",
            "isVisible": false,
            "left": "0%",
            "skin": "defLabel",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblID = new kony.ui.Label({
            "id": "lblID",
            "isVisible": false,
            "left": "50%",
            "skin": "defLabel",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "50dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var img = new kony.ui.Image2({
            "height": "100%",
            "id": "img",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "2%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxtplMain.add(lbl, lblID, img);
        return flxtplMain;
    }
})