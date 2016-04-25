'use strict';

const app = angular.module('rescueRRApp', [
  'ngRoute', 'angular-toArrayFilter', 'http-auth-interceptor'
]);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when('/about', {
        templateUrl: 'ctrlsAndViews/mainCtrlViews/about.html',
        controller: 'mainCtrl'
      })
    .when('/home', {
        templateUrl: 'ctrlsAndViews/mainCtrlViews/home.html',
        controller: 'mainCtrl'
      })
    .when('/routePost', {
        templateUrl: 'ctrlsAndViews/post/route.html',
        controller: 'routePostCtrl'
      })
    .when('/routeSearch', {
        templateUrl: 'ctrlsAndViews/search/route.html',
        controller: 'routeSearchCtrl'
      })
    .when('/animalPost', {
        templateUrl: 'ctrlsAndViews/post/animal.html',
        controller: 'animalPostCtrl'
      })
    .when('/animalSearch', {
        templateUrl: 'ctrlsAndViews/search/animal.html',
        controller: 'animalSearchCtrl'
      })
    .when('/groupDirectory', {
        templateUrl: 'ctrlsAndViews/groupdirectory/groupDir.html',
        controller: 'groupDirCtrl'
      })
    .when('/contact', {
        templateUrl: 'ctrlsAndViews/mainCtrlViews/contact.html',
        controller: 'mainCtrl'
      })
    .when('/myaccount', {
        templateUrl: 'ctrlsAndViews/myaccount/myaccount.html',
        controller: 'myaccountCtrl'
      })
    .when('/myaccountdriver', {
        templateUrl: 'ctrlsAndViews/myaccount/myaccountdriver.html',
        controller: 'myaccountCtrl'
      })
    .when('/myaccountgroupuserinfo', {
        templateUrl: 'ctrlsAndViews/myaccount/myaccountgroupuserinfo.html',
        controller: 'myaccountCtrl'
      })
    .when('/myaccountgroupgroupinfo', {
        templateUrl: 'ctrlsAndViews/myaccount/myaccountgroupgroupinfo.html',
        controller: 'myaccountCtrl'
      })
    .when('/userRegister', {
        templateUrl: 'ctrlsAndViews/register/user/userRegister.html',
        controller: 'userRegisterCtrl'
      })
    .when('/driverRegister', {
        templateUrl: 'ctrlsAndViews/register/driver/driverRegister.html',
        controller: 'driverRegisterCtrl'
      })
    .when('/groupRegister', {
        templateUrl: 'ctrlsAndViews/register/group/groupRegister.html',
        controller: 'groupRegisterCtrl'
      })
    .when('/login', {
        templateUrl: 'ctrlsAndViews/login/login.html',
        controller: 'mainCtrl'
      })
      .otherwise({
        templateUrl: 'ctrlsAndViews/mainCtrlViews/home.html',
        controller: 'mainCtrl'
      })
}]);


