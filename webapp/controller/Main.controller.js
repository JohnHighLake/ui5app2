sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("jg.ui5app2.controller.Main", {
        onInit: function () {
            var oModel = this.getOwnerComponent().getModel();
            this.getView().setModel(oModel);
        }
    });
});
