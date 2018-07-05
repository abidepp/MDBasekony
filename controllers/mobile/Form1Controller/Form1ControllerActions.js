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
    /** onClick defined for Butt **/
    AS_Button_dbd55a04edeb45db833051cab3aaf72f: function AS_Button_dbd55a04edeb45db833051cab3aaf72f(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmTrailers");
        ntf.navigate();
    },
    /** onClick defined for btnstatus **/
    AS_Button_f14d417443a4444eaeace0f7b1af3ccd: function AS_Button_f14d417443a4444eaeace0f7b1af3ccd(eventobject) {
        var self = this;
        if (boolConnectionToMF) {
            this.view.errorMessage.isVisible = true;
            this.view.errorMessage.lblMessageText = "connected to mobile fabric";
        }
    },
    /** onClick defined for btn **/
    AS_Button_ee196f39e7a4464da078538873535f90: function AS_Button_ee196f39e7a4464da078538873535f90(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmHome");
        ntf.navigate();
    },
    /** onClick defined for btnone **/
    AS_Button_c45384d0c10c4bdd8d6271cabcb0fc72: function AS_Button_c45384d0c10c4bdd8d6271cabcb0fc72(eventobject) {
        var self = this;
    },
    /** onClick defined for Buttonpush **/
    AS_Button_bac147c0b70946a1822f496ac470871c: function AS_Button_bac147c0b70946a1822f496ac470871c(eventobject) {
        var self = this;
        return pushMessage.call(this);
    },
    /** onClick defined for errorMessage **/
    AS_UWI_db90c76028274513aae745830ba8b906: function AS_UWI_db90c76028274513aae745830ba8b906(eventobject) {
        var self = this;
        this.view.errorMessage.isVisible = false;
    },
    /** postShow defined for Form1 **/
    AS_Form_dd460ee88b534c2cb7fad08044527c1c: function AS_Form_dd460ee88b534c2cb7fad08044527c1c(eventobject) {
        var self = this;
        // Form1.Image0dabec52560754b.src = "cogs_result";
        //touchID.authUsingTouchID();
    }
});