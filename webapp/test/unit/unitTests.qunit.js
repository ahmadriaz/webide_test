/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"tcs/oc/name/zbinding/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});