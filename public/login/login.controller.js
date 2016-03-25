'use strict';
  app.controller('loginCtrl', ["$scope", "$http", "$timeout", "$location", function ($scope, $http, $timeout, $location) {
    $scope.email = '';
    $scope.password = '';
    let newLogin = {};
 
    // create a newLogin and locally save it remotely
    $scope.login = function () {
        newLogin = {
            email: $scope.email,
            password: $scope.password
        };
        $http.post('/login', JSON.stringify(newLogin))
            .then( function(response, data) {
                $location.path('/home');
        }),  function(response) {
            console.log("there was an error")
        }
        newLogin = {};
    };
}]);