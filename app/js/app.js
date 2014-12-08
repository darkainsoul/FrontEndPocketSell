'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profile', {templateUrl: 'partials/profile.html', controller: 'MyCtrl2'});
  $routeProvider.when('/pos', {templateUrl: 'partials/pos.html', controller: 'MyCtrl2'});
  $routeProvider.when('/products', {templateUrl: 'partials/products.html', controller: 'MyCtrl2'});
  $routeProvider.when('/loyalty', {templateUrl: 'partials/loyalty.html', controller: 'MyCtrl2'});
  $routeProvider.when('/transactions', {templateUrl: 'partials/transactions.html', controller: 'MyCtrl2'});
  $routeProvider.when('/tables', {templateUrl: 'partials/tables.html', controller: 'MyCtrl2'});
  $routeProvider.when('/statistics', {templateUrl: 'partials/statistics.html', controller: 'MyCtrl2'});
  $routeProvider.when('/employees', {templateUrl: 'partials/employees.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/pos'});
}]);
