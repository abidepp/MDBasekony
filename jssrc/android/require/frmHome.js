define("frmHome", function() {
    return function(controller) {
        function addWidgetsfrmHome() {
            this.setDefaultUnit(kony.flex.DP);
            var flxScrollone = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "30%",
                "id": "flxScrollone",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "10%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxScrollone.setDefaultUnit(kony.flex.DP);
            var segScrollOne = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "imgPoster": "imagedrag.png",
                    "lblTitle": "Label"
                }, {
                    "imgPoster": "imagedrag.png",
                    "lblTitle": "Label"
                }, {
                    "imgPoster": "imagedrag.png",
                    "lblTitle": "Label"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "segScrollOne",
                "isVisible": true,
                "left": "0%",
                "needPageIndicator": false,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxtemplate",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "separatorThickness": 0,
                "showScrollbars": true,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
                "widgetDataMap": {
                    "flxtemplate": "flxtemplate",
                    "imgPoster": "imgPoster",
                    "lblTitle": "lblTitle"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxScrollone.add(segScrollOne);
            var flxScrolltwo = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "30%",
                "id": "flxScrolltwo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "10%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxScrolltwo.setDefaultUnit(kony.flex.DP);
            var SegScrolltwo = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "imgPoster": "imagedrag.png",
                    "lblTitle": "Label"
                }, {
                    "imgPoster": "imagedrag.png",
                    "lblTitle": "Label"
                }, {
                    "imgPoster": "imagedrag.png",
                    "lblTitle": "Label"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "SegScrolltwo",
                "isVisible": true,
                "left": "0%",
                "needPageIndicator": false,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxtemplate",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "separatorThickness": 0,
                "showScrollbars": true,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
                "widgetDataMap": {
                    "flxtemplate": "flxtemplate",
                    "imgPoster": "imgPoster",
                    "lblTitle": "lblTitle"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxScrolltwo.add(SegScrolltwo);
            this.add(flxScrollone, flxScrolltwo);
        };
        return [{
            "addWidgets": addWidgetsfrmHome,
            "enabledForIdleTimeout": false,
            "id": "frmHome",
            "layoutType": kony.flex.FLOW_VERTICAL,
            "needAppMenu": false,
            "preShow": controller.AS_Form_d7ec3974397e431f9c08030c1f808820,
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FLOW_VERTICAL,
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