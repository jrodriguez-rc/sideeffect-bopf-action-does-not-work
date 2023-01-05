sap.ui.define(["sap/ui/core/mvc/Controller"],
function (){
    "use strict";
    return {
        GenerateCode: function(oEvent) {

            var oSource = oEvent.getSource();
            var oObject = oSource.getBindingContext().getObject();
            if (oObject && oObject.URLGenerateCode && oObject.URLGenerateCode != "") {
                window.open(oObject.URLGenerateCode,'popup','width=600,height=600');
            }
            
        }
    };
});
