'use strict';

const app = angular.module('rescueRRApp', [
  'ngRoute'
]);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when('/driverRegister', {
        templateUrl: 'register/register.html',
        controller: 'registerCtrl'
      })
      .otherwise({
        templateUrl: 'register/register.html',
        controller: 'registerCtrl'
      })
}]);


