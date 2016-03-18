'use strict';

const app = angular.module('rescueRRApp', [
  'ngRoute'
]);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when('/driverRegister', {
        templateUrl: 'register/driver/driverRegister.html',
        controller: 'driverRegisterCtrl'
      })
    .when('/groupRegister', {
        templateUrl: 'register/group/groupRegister.html',
        controller: 'groupRegisterCtrl'
      })
      .otherwise({
        templateUrl: 'register/driver/driverRegister.html',
        controller: 'driverRegisterCtrl'
      })
}]);


