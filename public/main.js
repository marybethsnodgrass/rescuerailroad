'use strict';

const app = angular.module('rescueRRApp', [
  'ngRoute', 'angular-toArrayFilter'
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
    .when('/myaccount', {
        templateUrl: 'myaccount/myaccount.html',
        controller: 'myaccountCtrl'
      })
    .when('/driverRegister', {
        templateUrl: 'register/driver/driverRegister.html',
        controller: 'driverRegisterCtrl'
      })
    .when('/groupRegister', {
        templateUrl: 'register/group/groupRegister.html',
        controller: 'groupRegisterCtrl'
      })
    .when('/animalPost', {
        templateUrl: 'post/animal.html',
        controller: 'animalPostCtrl'
      })
    .when('/groupDirectory', {
        templateUrl: 'groupdirectory/groupDir.html',
        controller: 'groupDirCtrl'
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


