define("frmLatestMovies", function() {
    return function(controller) {
        function addWidgetsfrmLatestMovies() {
            this.setDefaultUnit(kony.flex.DP);
            var tabView = new kony.ui.TabPane({
                "activeSkin": "tabCanvas",
                "activeTabs": [0],
                "height": "100%",
                "id": "tabView",
                "inactiveSkin": "tabCanvasInactive",
                "isVisible": true,
                "layoutType": constants.CONTAINER_LAYOUT_BOX,
                "left": "0%",
                "top": "0%",
                "viewConfig": {
                    "collapsibleViewConfig": {
                        "imagePosition": constants.TABPANE_COLLAPSIBLE_IMAGE_POSITION_RIGHT,
                        "tabNameAlignment": constants.TABPANE_COLLAPSIBLE_TABNAME_ALIGNMENT_LEFT,
                        "toggleTabs": false
                    },
                    "pageViewConfig": {
                        "needPageIndicator": true
                    },
                    "tabViewConfig": {
                        "headerPosition": constants.TAB_HEADER_POSITION_TOP,
                        "image1": "tableftarrow.png",
                        "image2": "tabrightarrow.png"
                    },
                },
                "viewType": constants.TABPANE_VIEW_TYPE_TABVIEW,
                "width": "100%",
                "zIndex": 1
            }, {
                "layoutType": constants.CONTAINER_LAYOUT_BOX,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "tabHeaderHeight": 64
            });
            var tabMovies = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "tabMovies",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "orientation": constants.BOX_LAYOUT_VERTICAL,
                "skin": "slTab",
                "tabName": "Movies",
                "width": "100%"
            }, {
                "layoutType": kony.flex.FREE_FORM,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            tabMovies.setDefaultUnit(kony.flex.DP);
            var gridMovies = new kony.ui.DataGrid({
                "columnHeadersConfig": [{
                    "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Col 1",
                    "columnHeaderType": "text",
                    "columnID": "col1",
                    "columnText": "Not Defined",
                    "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
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
                    "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
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
                    "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
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
                "id": "gridMovies",
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
            tabMovies.add(gridMovies);
            tabView.addTab("tabMovies", "Movies", null, tabMovies, null);
            var tabshows = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "tabshows",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "orientation": constants.BOX_LAYOUT_VERTICAL,
                "skin": "slTab",
                "tabName": "TV shows",
                "width": "100%"
            }, {
                "layoutType": kony.flex.FREE_FORM,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            tabshows.setDefaultUnit(kony.flex.DP);
            var gridTvShows = new kony.ui.DataGrid({
                "columnHeadersConfig": [{
                    "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Col 1",
                    "columnHeaderType": "text",
                    "columnID": "col1",
                    "columnText": "Not Defined",
                    "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
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
                    "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
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
                    "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
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
                "id": "gridTvShows",
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
            tabshows.add(gridTvShows);
            tabView.addTab("tabshows", "TV shows", null, tabshows, null);
            var FlexMoviePopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80%",
                "id": "FlexMoviePopup",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "5.04%",
                "skin": "slFbox",
                "top": "10.00%",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            FlexMoviePopup.setDefaultUnit(kony.flex.DP);
            var ImageView = new kony.ui.Image2({
                "height": "30%",
                "id": "ImageView",
                "isVisible": true,
                "left": "0%",
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FlexCast = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "FlexCast",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0%",
                "skin": "slFbox",
                "top": "10%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexCast.setDefaultUnit(kony.flex.DP);
            var Imageone = new kony.ui.Image2({
                "height": "60dp",
                "id": "Imageone",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "5dp",
                "width": "60dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Imagetwo = new kony.ui.Image2({
                "height": "60dp",
                "id": "Imagetwo",
                "isVisible": true,
                "left": "50dp",
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "5dp",
                "width": "60dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Imagethree = new kony.ui.Image2({
                "height": "60dp",
                "id": "Imagethree",
                "isVisible": true,
                "left": "50dp",
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "5dp",
                "width": "60dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexCast.add(Imageone, Imagetwo, Imagethree);
            FlexMoviePopup.add(ImageView, FlexCast);
            this.add(tabView, FlexMoviePopup);
        };
        return [{
            "addWidgets": addWidgetsfrmLatestMovies,
            "enabledForIdleTimeout": false,
            "id": "frmLatestMovies",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_a7322ef2f877403da298cfad23470e64,
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