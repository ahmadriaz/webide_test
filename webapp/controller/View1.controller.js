sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("tcs.oc.name.zbinding.controller.View1", {
		onInit: function () {
			var serviceUrl = "/mypath/V2/Northwind/Northwind.svc/";
			var model = new sap.ui.model.odata.v2.ODataModel(serviceUrl);
			this.getView().byId("s1").setModel(model);
			this.getView().byId("l1").setModel(model);
		
			
			
			
			
			
	
			
		// 	var serviceUrl = "/mypath/V2/Northwind/Northwind.svc";
		// 	var model = new sap.ui.model.odata.v2.ODataModel(serviceUrl);
			
		// 	var jModel = new sap.ui.model.json.JSONModel("model/data.json");
		// 	//jModel.loadData("model/data.json");
		// 	//this.getView().byId("s1").setModel(jModel);
		// 	this.getView().byId("s1").setModel(model);
		// //	this.getView().byId("s1").bindElement("/Customers/results/0");
			
		// 	this.getView().byId("l1").setModel(model);
		// 	var oTemplate = new sap.m.StandardListItem({
		// 		title : "{CompanyName}"
		// 	});
		// 	this.getView().byId("l1").bindAggregation("items", "/Customers", oTemplate);
		// 	//this.getView().byId("c1").bindProperty("value", "/CustomerID");
		} 
	});
});