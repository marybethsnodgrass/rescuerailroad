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
        $http.post('/user/:id', JSON.stringify(newLogin))
            .success( function (data, status, header) {
                // authService.loginConfirmed()
                $location.path('/myaccount');
            })
            .error(function (data, status, header) {
                console.log(status);
            });
        newLogin = {};
    };
}]);