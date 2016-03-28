'use strict';

const app = angular.module('rescueRRApp', [
  'ngRoute', 'angular-toArrayFilter'
]);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when('/about', {
        templateUrl: 'mainCtrlViews/about.html',
        controller: 'mainCtrl'
      })
    .when('/home', {
        templateUrl: 'mainCtrlViews/home.html',
        controller: 'mainCtrl'
      })
    .when('/animalPost', {
        templateUrl: 'post/animal.html',
        controller: 'animalPostCtrl'
      })
    .when('/routePost', {
        templateUrl: 'post/route.html',
        controller: 'routePostCtrl'
      })
    .when('/routeSearch', {
        templateUrl: 'search/route.html',
        controller: 'routeSearchCtrl'
      })
    .when('/animalSearch', {
        templateUrl: 'search/animal.html',
        controller: 'animalSearchCtrl'
      })
    .when('/groupDirectory', {
        templateUrl: 'groupdirectory/groupDir.html',
        controller: 'groupDirCtrl'
      })
    .when('/contact', {
        templateUrl: 'mainCtrlViews/contact.html',
        controller: 'mainCtrl'
      })
    .when('/myaccount', {
        templateUrl: 'myaccount/myaccount.html',
        controller: 'myaccountCtrl'
      })
    .when('/userRegister', {
        templateUrl: 'register/user/userRegister.html',
        controller: 'userRegisterCtrl'
      })
    .when('/driverRegister', {
        templateUrl: 'register/driver/driverRegister.html',
        controller: 'driverRegisterCtrl'
      })
    .when('/groupRegister', {
        templateUrl: 'register/group/groupRegister.html',
        controller: 'groupRegisterCtrl'
      })
    .when('/login', {
        templateUrl: 'login/login.html',
        controller: 'mainCtrl'
      })
      .otherwise({
        templateUrl: 'mainCtrlViews/home.html',
        controller: 'mainCtrl'
      })
}]);


