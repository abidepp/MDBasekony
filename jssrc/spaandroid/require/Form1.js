define("Form1", function() {
    return function(controller) {
        function addWidgetsForm1() {
            this.setDefaultUnit(kony.flex.DP);
            var FlexContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlexContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexContainer.setDefaultUnit(kony.flex.DP);
            var btn = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btn",
                "isVisible": true,
                "left": "57dp",
                "onClick": controller.AS_Button_i81e51154e094f1d9724047781051b9b,
                "skin": "defBtnNormal",
                "text": "Button",
                "top": "181dp",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer.add(btn);
            var Image0dabec52560754b = new kony.ui.Image2({
                "height": "150dp",
                "id": "Image0dabec52560754b",
                "isVisible": true,
                "left": "103dp",
                "skin": "sample",
                "src": "imagedrag.png",
                "top": "20dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.add(FlexContainer, Image0dabec52560754b);
        };
        return [{
            "addWidgets": addWidgetsForm1,
            "enabledForIdleTimeout": false,
            "id": "Form1",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_dd460ee88b534c2cb7fad08044527c1c,
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});