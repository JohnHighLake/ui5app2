/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"jg/ui5app2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});