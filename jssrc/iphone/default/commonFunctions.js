//Type your code here
var commonUtils = {
    displayPopUp: function(currentobj, id, message) {
        currentobj.view[id].isVisible = true;
        currentobj.view[id].lblMessage.text = message;
        com.popup.errorMessage.show();
    }
};