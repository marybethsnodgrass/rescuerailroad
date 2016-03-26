
  'use strict';
  app.controller('myaccountCtrl', ["$scope", "$timeout", "$location", "$http", function ($scope, $timeout, $location, $http) {
    $scope.userData = {};
    $scope.userType = '';
    $scope.email = '';
    $scope.phone = '';
    $scope.address = '';
    $scope.city = '';
    $scope.state = '';
    $scope.zip = '';
    $scope.firstname = '';
    $scope.lastname = '';
    $scope.dlState = '';
    $scope.dlNum = '';
    $scope.sponsorID = '';

    $http.get('/user/myaccount')
    .success(function(user) {
        $scope.userData = user;
        console.log(user);
    }).error(function() {
        console.log("there was an error")
    });

}]);