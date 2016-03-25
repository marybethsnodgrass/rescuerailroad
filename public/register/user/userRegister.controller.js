'use strict';
  app.controller('userRegisterCtrl', ["$scope", "$http", "$timeout", "$location", function ($scope, $http, $timeout, $location) {
    $scope.userType = '';
    $scope.email = '';
    $scope.phone = '';
    $scope.address = '';
    $scope.city = '';
    $scope.state = '';
    $scope.zip = '';
    $scope.password = '';
    $scope.verify = '';
    let newUser = {};
 
    // create a new user locally save it remotely
    $scope.createUser = function () {
        newUser = {
            userType: $scope.userType,
            email: $scope.email,
            phone: $scope.phone,
            address: $scope.address,
            city: $scope.city,
            state: $scope.state,
            zip: $scope.zip,
            password: $scope.password,
            verify: $scope.verify
        };
        $http.post('/user/create', JSON.stringify(newUser))
            .then( function (response, data) {
                $location.path('/home');
        }),  function(response) {
            console.log("there was an error")
        }
        newUser = {};
    };
}]);