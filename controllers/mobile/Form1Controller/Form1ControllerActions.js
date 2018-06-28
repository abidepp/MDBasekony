define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnform2 **/
    AS_Button_a1f4eabb171e4e3fa4e3131e614f5848: function AS_Button_a1f4eabb171e4e3fa4e3131e614f5848(eventobject) {
        var self = this;
        var formData = new kony.mvc.Navigation("frmLatestMovies");
        formData.navigate();
        kony.print("navigation to latest movies called");
    },
    /** onClick defined for errorMessage **/
    AS_UWI_db90c76028274513aae745830ba8b906: function AS_UWI_db90c76028274513aae745830ba8b906(eventobject) {
        var self = this;
        this.view.errorMessage.isVisible = false;
    },
    /** onClick defined for btnstatus **/
    AS_Button_ae12cf45f32d44e99a32b838a5d1da88: function AS_Button_ae12cf45f32d44e99a32b838a5d1da88(eventobject) {
        var self = this;
        if (boolConnectionToMF) {
            this.view.errorMessage.isVisible = true;
            this.view.errorMessage.lblMessageText = "connected to mobile fabric";
        }
    },
    /** onClick defined for btn **/
    AS_Button_d96415dc43904b2eb7b6268f9d61b094: function AS_Button_d96415dc43904b2eb7b6268f9d61b094(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmHome");
        ntf.navigate();
    },
    /** onClick defined for btnone **/
    AS_Button_f6f848f83f4d4a31aebd9c0222b67ec5: function AS_Button_f6f848f83f4d4a31aebd9c0222b67ec5(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("Form2");
        ntf.navigate();
    },
    /** postShow defined for Form1 **/
    AS_Form_dd460ee88b534c2cb7fad08044527c1c: function AS_Form_dd460ee88b534c2cb7fad08044527c1c(eventobject) {
        var self = this;
        // Form1.Image0dabec52560754b.src = "cogs_result";
        //touchID.authUsingTouchID();
    }
});