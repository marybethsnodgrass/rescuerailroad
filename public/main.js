'use strict';

const app = angular.module('rescueRRApp', [
  'ngRoute'
]);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when('/register', {
        templateUrl: 'mainCtrlViews/userType.html',
        controller: 'mainCtrl'
      })
    .when('/driverRegister', {
        templateUrl: 'register/driver/driverRegister.html',
        controller: 'driverRegisterCtrl'
      })
    .when('/groupRegister', {
        templateUrl: 'register/group/groupRegister.html',
        controller: 'groupRegisterCtrl'
      })
    .when('/about', {
        templateUrl: 'mainCtrlViews/about.html',
        controller: 'mainCtrl'
      })
    .when('/home', {
        templateUrl: 'mainCtrlViews/home.html',
        controller: 'mainCtrl'
      })
      .otherwise({
        templateUrl: 'mainCtrlViews/home.html',
        controller: 'mainCtrl'
      })
}]);


