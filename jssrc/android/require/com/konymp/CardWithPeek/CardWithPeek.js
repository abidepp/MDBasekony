define(function() {
    return function(controller) {
        var CardWithPeek = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "CardWithPeek",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "postShow": controller.AS_FlexContainer_h9e7986fd51840c1a318d68d099e7a56,
            "skin": "Copykonympcarousel0g612a6e337b04d",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        CardWithPeek.setDefaultUnit(kony.flex.DP);
        var flxImageholder = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "36%",
            "id": "flxImageholder",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "onTouchEnd": controller.AS_FlexContainer_b6f078d2abae478fa1d56b88775d4087,
            "onTouchStart": controller.AS_FlexContainer_af76b314344c4d37a2949de468b46b2a,
            "skin": "CopyCopyslFbox",
            "top": "0%",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flxImageholder.setDefaultUnit(kony.flex.DP);
        var flx1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flx1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20%",
            "skin": "CopyslFbox3",
            "top": "8%",
            "width": "60%",
            "zIndex": 1
        }, {}, {});
        flx1.setDefaultUnit(kony.flex.DP);
        var img1 = new kony.ui.Image2({
            "height": "100%",
            "id": "img1",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyslImage4",
            "src": "kony_mp_carousel3_slides1.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flx1.add(img1);
        var flx2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flx2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "85%",
            "skin": "CopyslFbox3",
            "top": "8%",
            "width": "60%",
            "zIndex": 2
        }, {}, {});
        flx2.setDefaultUnit(kony.flex.DP);
        var img2 = new kony.ui.Image2({
            "height": "100%",
            "id": "img2",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyslImage4",
            "src": "kony_mp_carousel3_slides2.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flx2.add(img2);
        var flx3 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flx3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "85%",
            "skin": "CopyslFbox3",
            "top": "8%",
            "width": "60%",
            "zIndex": 1
        }, {}, {});
        flx3.setDefaultUnit(kony.flex.DP);
        var img3 = new kony.ui.Image2({
            "height": "100%",
            "id": "img3",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyslImage4",
            "src": "kony_mp_carousel3_slides3.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flx3.add(img3);
        var flx4 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flx4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "85%",
            "skin": "CopyslFbox3",
            "top": "8%",
            "width": "60%",
            "zIndex": 1
        }, {}, {});
        flx4.setDefaultUnit(kony.flex.DP);
        var img4 = new kony.ui.Image2({
            "height": "100%",
            "id": "img4",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyslImage4",
            "src": "kony_mp_carousel3_slides4.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flx4.add(img4);
        flxImageholder.add(flx1, flx2, flx3, flx4);
        var lblHeading = new kony.ui.Label({
            "id": "lblHeading",
            "isVisible": true,
            "left": "5%",
            "skin": "Copykonympcarousel3",
            "text": "Litore Hotel & SPA",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "40%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblPrice = new kony.ui.Label({
            "id": "lblPrice",
            "isVisible": true,
            "right": "5.50%",
            "skin": "Copykonympcarousel5",
            "text": "$199.95",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "40.40%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxStar = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxStar",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "5%",
            "skin": "CopyslFbox3",
            "top": "43.80%",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flxStar.setDefaultUnit(kony.flex.DP);
        var imgStar1 = new kony.ui.Image2({
            "height": "20dp",
            "id": "imgStar1",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyslImage4",
            "src": "kony_mp_carousel3_star_active.png",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgStar2 = new kony.ui.Image2({
            "height": "20dp",
            "id": "imgStar2",
            "isVisible": true,
            "left": "0.70%",
            "skin": "CopyslImage4",
            "src": "kony_mp_carousel3_star_active.png",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgStar3 = new kony.ui.Image2({
            "height": "20dp",
            "id": "imgStar3",
            "isVisible": true,
            "left": "0.70%",
            "skin": "CopyslImage4",
            "src": "kony_mp_carousel3_star_active.png",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgStar4 = new kony.ui.Image2({
            "height": "20dp",
            "id": "imgStar4",
            "isVisible": true,
            "left": "0.70%",
            "skin": "CopyslImage4",
            "src": "kony_mp_carousel3_star_active.png",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgStar5 = new kony.ui.Image2({
            "height": "20dp",
            "id": "imgStar5",
            "isVisible": true,
            "left": "0.70%",
            "skin": "CopyslImage4",
            "src": "kony_mp_carousel3_star_inactive.png",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxStar.add(imgStar1, imgStar2, imgStar3, imgStar4, imgStar5);
        var lblLocation = new kony.ui.Label({
            "id": "lblLocation",
            "isVisible": true,
            "left": "11.50%",
            "skin": "Copykonympcarousel4",
            "text": "Am Rehsprung 35, Holzlar, 53229 New York, USA",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "49%",
            "width": "60%",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgLocation = new kony.ui.Image2({
            "height": "22dp",
            "id": "imgLocation",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage4",
            "src": "kony_mp_carousel3_location.png",
            "top": "49%",
            "width": "22dp",
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblServicesIncluded = new kony.ui.Label({
            "id": "lblServicesIncluded",
            "isVisible": true,
            "left": "5%",
            "skin": "Copykonympcarousel0cb0b3e90ceab40",
            "text": "Services Included:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "56%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxServices = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "220dp",
            "id": "flxServices",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "CopyslFbox3",
            "top": "60%",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flxServices.setDefaultUnit(kony.flex.DP);
        var flxWifi = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25dp",
            "id": "flxWifi",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox3",
            "top": "2%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxWifi.setDefaultUnit(kony.flex.DP);
        var imgWifi = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgWifi",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage4",
            "src": "kony_mp_carousel3_wifi.png",
            "top": "0dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblWifi = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblWifi",
            "isVisible": true,
            "left": "16%",
            "skin": "Copykonympcarousel2",
            "text": "Free Wifi",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxWifi.add(imgWifi, lblWifi);
        var flxParking = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25dp",
            "id": "flxParking",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox3",
            "top": "2%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxParking.setDefaultUnit(kony.flex.DP);
        var imgParking = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgParking",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage4",
            "src": "kony_mp_carousel3_parking.png",
            "top": "0dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblParking = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblParking",
            "isVisible": true,
            "left": "16%",
            "skin": "Copykonympcarousel2",
            "text": "Free Parking",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxParking.add(imgParking, lblParking);
        var flxGreatView = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25dp",
            "id": "flxGreatView",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox3",
            "top": "2%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxGreatView.setDefaultUnit(kony.flex.DP);
        var imgGreatView = new kony.ui.Image2({
            "height": "23dp",
            "id": "imgGreatView",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage4",
            "src": "kony_mp_carousel3_view.png",
            "top": "0dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblGreatView = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblGreatView",
            "isVisible": true,
            "left": "16%",
            "skin": "Copykonympcarousel2",
            "text": "Great View",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxGreatView.add(imgGreatView, lblGreatView);
        var flxKingSizeBed = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25dp",
            "id": "flxKingSizeBed",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox3",
            "top": "2%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxKingSizeBed.setDefaultUnit(kony.flex.DP);
        var imgKingSizeBed = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgKingSizeBed",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage4",
            "src": "kony_mp_carousel3_bed.png",
            "top": "0dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblKingSizeBed = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblKingSizeBed",
            "isVisible": true,
            "left": "16%",
            "skin": "Copykonympcarousel2",
            "text": "King Size Bed",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxKingSizeBed.add(imgKingSizeBed, lblKingSizeBed);
        var flxTaxiBook = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25dp",
            "id": "flxTaxiBook",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox3",
            "top": "2%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxTaxiBook.setDefaultUnit(kony.flex.DP);
        var imgTaxiBook = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgTaxiBook",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage4",
            "src": "kony_mp_carousel3_taxi.png",
            "top": "0dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTaxiBook = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblTaxiBook",
            "isVisible": true,
            "left": "16%",
            "skin": "Copykonympcarousel2",
            "text": "Taxi Booking",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxTaxiBook.add(imgTaxiBook, lblTaxiBook);
        var flxDisGuests = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25dp",
            "id": "flxDisGuests",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox3",
            "top": "2%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxDisGuests.setDefaultUnit(kony.flex.DP);
        var imgDisGuests = new kony.ui.Image2({
            "centerY": "50%",
            "height": "25dp",
            "id": "imgDisGuests",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage4",
            "src": "kony_mp_carousel3_disabled.png",
            "top": "0dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDisGuests = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblDisGuests",
            "isVisible": true,
            "left": "16%",
            "skin": "Copykonympcarousel2",
            "text": "Facilities for disabled guests",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxDisGuests.add(imgDisGuests, lblDisGuests);
        flxServices.add(flxWifi, flxParking, flxGreatView, flxKingSizeBed, flxTaxiBook, flxDisGuests);
        var flxBookBtn = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "6.50%",
            "id": "flxBookBtn",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "21dp",
            "skin": "Copykonympcarousel",
            "top": "91%",
            "width": "93.10%",
            "zIndex": 5
        }, {}, {});
        flxBookBtn.setDefaultUnit(kony.flex.DP);
        var lblBookBtn = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblBookBtn",
            "isVisible": true,
            "skin": "CopykonympCarousel1",
            "text": "Book Hotel",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxBookBtn.add(lblBookBtn);
        var mapView = new kony.ui.Map({
            "calloutWidth": 80,
            "defaultPinImage": "kony_mp_carousel2_pin.png",
            "height": "60dp",
            "id": "mapView",
            "isVisible": true,
            "provider": constants.MAP_PROVIDER_GOOGLE,
            "right": "5.50%",
            "top": "45.70%",
            "width": "80dp",
            "zIndex": 5
        }, {}, {
            "mode": constants.MAP_VIEW_MODE_NORMAL,
            "showZoomControl": true,
            "zoomLevel": 4
        });
        CardWithPeek.add(flxImageholder, lblHeading, lblPrice, flxStar, lblLocation, imgLocation, lblServicesIncluded, flxServices, flxBookBtn, mapView);
        return CardWithPeek;
    }
})