'use strict';

const app = angular.module('rescueRRApp', [
  'rescueRRApp.register',
  'ui.router',
  'ngRoute',
  'ui.bootstrap'
])
app.config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
    .when('/driver', {
        templateUrl: 'register/register.html',
        controller: 'registerCtrl'
      })
      .otherwise('/', {
        templateUrl: 'register/register.html',
        controller: 'registerCtrl'
      })

    $locationProvider.html5Mode(true);
  });


