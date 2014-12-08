'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

 }])
  .controller('MenuPocketSell', [function() {
var lista = [
  	{ 
  		Name: 'Empleados', 
  		Active: true,
  		OrderNumber: 7,
  		url: "employees"
  	},
  	{ 
  		Name: 'Reportes', 
  		Active: true,
  		OrderNumber: 6,
  		url:"statistics"
  	},
  	{ 
  		Name: 'Mesas', 
  		Active: true,
  		OrderNumber: 5,
  		url:"tables"
  	},
  	{ 
  		Name: 'Transacciones', 
  		Active: true,
  		OrderNumber: 4,
  		url:"transactions"
  	},
  	{ 
  		Name: 'Planes de Lealtad', 
  		Active: true,
  		OrderNumber: 3,
  		url:"loyalty"
  	},
  	{ 
  		Name: 'Productos', 
  		Active: true,
  		OrderNumber: 2,
  		url:"products"
  	},
  	{ 
  		Name: 'Caja', 
  		Active: true,
  		OrderNumber: 1,
  		url:"pos"
  	},
  	{ 
  		Name: 'Nombre Comercio', 
  		Active: true,
  		OrderNumber: 0,
  		url:"profile"
  	}
  ];
this.menu = lista;        

this.tab = 0;

	this.selectTab = function(setTab){
		this.tab = setTab;
	};

	this.isSelected = function(checkTab){
		return this.tab = checkTab;
	};
  }]);