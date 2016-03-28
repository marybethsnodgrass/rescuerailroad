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
            .success(function (data, status, headers) {
                console.log(status);
                console.log("$scope.userType", $scope.userType);
                if ($scope.userType === 'group') {
                    $location.path('/groupRegister');
                } else if ($scope.userType === 'driver') {
                    $location.path('/driverRegister');
                } else {
                    $location.path('/home');
                }
              })
            .error(function (data, status, header) {
                console.log(status);
              });
        newUser = {};
    };
}]);