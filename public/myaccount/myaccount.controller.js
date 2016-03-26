
  'use strict';
  app.controller('myaccountCtrl', ["$scope", "$timeout", "$location", "$http", function ($scope, $timeout, $location, $http) {
    $scope.userData = {};
    $scope.newEmail = '';
    $scope.newPhone = '';
    $scope.newAddress = '';
    $scope.newCity = '';
    $scope.newState = '';
    $scope.newZip = '';
    let phone = '';

    $http.get('/user/myaccount')
    .success(function(user) {
        $scope.userData = user;
        console.log(user);
    }).error(function() {
        console.log("there was an error")
    });

    $scope.updatePhone = function () {
        phone = $scope.newPhone;
        console.log("phone", phone);
        $http.put('/user/myaccount/phone', phone)
        .then( function (response, data) {
            console.log("phone number was updated to ", phone);
        }),  function(response) {
            console.log("there was an error")
        }
        $scope.userData.phone = $scope.newPhone;
        $scope.newPhone = '';
    };

}]);