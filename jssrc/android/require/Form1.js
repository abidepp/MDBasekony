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
            var btnform2 = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnform2",
                "isVisible": true,
                "left": "55dp",
                "onClick": controller.AS_Button_a1f4eabb171e4e3fa4e3131e614f5848,
                "skin": "defBtnNormal",
                "text": "latest form",
                "top": "339dp",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer.add(btnform2);
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
            var errorMessage = new com.popup.errorMessage({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "20%",
                "id": "errorMessage",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox",
                "width": "80%"
            }, {}, {});
            errorMessage.onClick = controller.AS_UWI_db90c76028274513aae745830ba8b906;
            var btnstatus = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnstatus",
                "isVisible": true,
                "left": "55dp",
                "onClick": controller.AS_Button_ae12cf45f32d44e99a32b838a5d1da88,
                "skin": "defBtnNormal",
                "text": "connection status",
                "top": "245dp",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btn = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btn",
                "isVisible": true,
                "left": "58dp",
                "onClick": controller.AS_Button_d96415dc43904b2eb7b6268f9d61b094,
                "skin": "defBtnNormal",
                "text": "home form",
                "top": "443dp",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnone = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnone",
                "isVisible": true,
                "left": "65dp",
                "onClick": controller.AS_Button_f6f848f83f4d4a31aebd9c0222b67ec5,
                "skin": "defBtnNormal",
                "text": "sample form",
                "top": "549dp",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.add(FlexContainer, Image0dabec52560754b, errorMessage, btnstatus, btn, btnone);
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
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});