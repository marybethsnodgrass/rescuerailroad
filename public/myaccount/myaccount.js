
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

    $http.get('/user/:id')
    .success(function(user) {
        $scope.userData = user;
        console.log("$scope.userData.user", $scope.userData.user);
        if ($scope.userData.user.userType === 'driver') {
            $location.path('/myaccountdriver');
            //doesn't work for driver
        } else if ($scope.userData.user.userType === 'group') {
            $location.path('/myaccountgroup');
            //but works for group...
        } else {
            $location.path('/myaccount');
        }
    }).error(function() {
        console.log("there was an error")
    });

    $scope.updatePhone = function () {
        phone = $scope.newPhone;
        console.log("phone", phone);
        $http.put('/user/:id', phone)
        .then( function (response, data) {
            console.log("phone number was updated to ", phone);
        }),  function(response) {
            console.log("there was an error")
        }
        $scope.userData.phone = $scope.newPhone;
        $scope.newPhone = '';
    };

}]);