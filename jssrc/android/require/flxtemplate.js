define("flxtemplate", function() {
    return function(controller) {
        var flxtemplate = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "220dp",
            "id": "flxtemplate",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxtemplate.setDefaultUnit(kony.flex.DP);
        var imgPoster = new kony.ui.Image2({
            "centerX": "50%",
            "height": "150dp",
            "id": "imgPoster",
            "isVisible": true,
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "35dp",
            "width": "150dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTitle = new kony.ui.Label({
            "id": "lblTitle",
            "isVisible": true,
            "left": "0%",
            "skin": "defLabel",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": "100%",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxtemplate.add(imgPoster, lblTitle);
        return flxtemplate;
    }
})