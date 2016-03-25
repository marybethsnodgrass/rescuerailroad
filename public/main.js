'use strict';

const app = angular.module('rescueRRApp', [
  'ngRoute'
]);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when('/userRegister', {
        templateUrl: 'register/user/userRegister.html',
        controller: 'userRegisterCtrl'
      })
    .when('/login', {
        templateUrl: 'login/login.html',
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


