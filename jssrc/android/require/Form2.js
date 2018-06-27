define("Form2", function() {
    return function(controller) {
        function addWidgetsForm2() {
            this.setDefaultUnit(kony.flex.DP);
            var Dg = new kony.ui.DataGrid({
                "columnHeadersConfig": [{
                    "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Col 1",
                    "columnHeaderType": "text",
                    "columnID": "col1",
                    "columnText": "Not Defined",
                    "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
                    "columnWidthInPercentage": 33,
                    "ide_onClick": null,
                    "isColumnSortable": false
                }, {
                    "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Col 2",
                    "columnHeaderType": "text",
                    "columnID": "col2",
                    "columnText": "Not Defined",
                    "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
                    "columnWidthInPercentage": 34,
                    "ide_onClick": null,
                    "isColumnSortable": false
                }, {
                    "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Col 3",
                    "columnHeaderType": "text",
                    "columnID": "col3",
                    "columnText": "Not Defined",
                    "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
                    "columnWidthInPercentage": 33,
                    "ide_onClick": null,
                    "isColumnSortable": false
                }, ],
                "data": [{
                    "col1": "RC 11",
                    "col2": "RC 12",
                    "col3": "RC 13"
                }, {
                    "col1": "RC 21",
                    "col2": "RC 22",
                    "col3": "RC 23"
                }, {
                    "col1": "RC 31",
                    "col2": "RC 32",
                    "col3": "RC 33"
                }, {
                    "col1": "RC 41",
                    "col2": "RC 42",
                    "col3": "RC 43"
                }],
                "headerSkin": "slDataGridHead",
                "height": "100%",
                "id": "Dg",
                "isMultiSelect": false,
                "isVisible": true,
                "left": "0%",
                "rowAlternateSkin": "slDataGridAltRow",
                "rowCount": 4,
                "rowFocusSkin": "slDataGridFocusedRow",
                "rowNormalSkin": "slDataGridRow",
                "showColumnHeaders": false,
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.add(Dg);
        };
        return [{
            "addWidgets": addWidgetsForm2,
            "enabledForIdleTimeout": false,
            "id": "Form2",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_a348300bf7e643c4844119c3ab7429f7,
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