define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		}
	};
});


define(function() {
	
	return {
      _lblerrmsg : "",
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
			defineGetter(this,"lblErrMessage",function() {
              return this._lblerrmsg;
            });
          
          defineSetter(this,"lblErrMessage", function(val) {
            
            this._lblerrmsg = val;
            this.view.lblMessage.text = val;
            
          });
		},                
      
      setText : function(val) { 
        kony.print("Txt val ::"+val);
      	this.view.lblMessage.text = val;
      },
      
      empty : function() {
        
      },
	};
  
});