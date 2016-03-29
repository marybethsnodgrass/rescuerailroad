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
        $http.post('/user/:_id', JSON.stringify(newLogin))
            .then( function(response, data) {
                // authService.loginConfirmed()
                $location.path('/myaccount');
        }),  function(response) {
            console.log("there was an error")
        }
        newLogin = {};
    };
}]);