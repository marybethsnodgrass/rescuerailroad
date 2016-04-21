
  'use strict';
  app.controller('myaccountCtrl', ["$scope", "$timeout", "$location", "$http", function ($scope, $timeout, $location, $http) {
    $scope.newPhone = '';
    $scope.newAddress = '';
    $scope.newCity = '';
    $scope.newState = '';
    $scope.newZip = '';
    $scope.newEmail = '';
    $scope.newGroupName = '';
    $scope.newFirstName = '';
    $scope.newLastName = '';
    $scope.newDlState = '';
    $scope.newDlNum = '';
    let phone = '';
    let newUserData = {};

    $http.get('/user/:id')
    .success(function(user) {
        $scope.userData = user;
        if (!user) {
            $location.path('/myaccount');
        } else if ($scope.userData.user.userType === 'driver') {
            $location.path('/myaccountdriver');
        } else if ($scope.userData.user.userType === 'group') {
            $location.path('/myaccountgroup');
        } else {
            $location.path('/myaccount');
        }
    }).error(function() {
        console.log("there was an error")
    });

    $scope.updateAcctData = function () {
        console.log("$scope.userData", $scope.userData);
        if ($location.path('/myaccountgroup')) {
            newUserData = {
                _id: $scope.userData._id,
                userId: $scope.userData.userId,
                groupName: $scope.newGroupName || $scope.userData.groupName,
                user: {
                    _id: $scope.userData.user._id,
                    phone:$scope.newPhone || $scope.userData.user.phone,
                    address: $scope.newAddress || $scope.userData.user.address,
                    city: $scope.newCity || $scope.userData.user.city,
                    state: $scope.newState || $scope.userData.user.state,
                    zip: $scope.newZip || $scope.userData.user.zip,
                    email: $scope.newEmail || $scope.userData.user.email,
                    password: $scope.userData.user.password,
                    userType: $scope.userData.user.userType
                }
            }
        } else if ($location.path('/myaccountdriver')) {
            newUserData = {
                phone:$scope.newPhone || $scope.userData.user.phone,
                address: $scope.newAddress || $scope.userData.user.address,
                city: $scope.newCity || $scope.userData.user.city,
                state: $scope.newState || $scope.userData.user.state,
                zip: $scope.newZip || $scope.userData.user.zip,
                email: $scope.newEmail || $scope.userData.user.email,
                firstName: $scope.newFirstName || $scope.userData.user.firstName,
                lastName: $scope.newLastName || $scope.userData.user.lastName,
                dlState: $scope.newDlState || $scope.userData.user.dlState,
                dlNum: $scope.newDlNum || $scope.userData.user.dlNum
            }
        } else {
            console.log("error");
        }
        console.log("newUserData", newUserData);

        // $http.put('/user/:id', {phone:phone})
        // .then( function (response, data) {
        //     console.log("phone number was updated to ", phone);
        // }),  function(response) {
        //     console.log("there was an error")
        // }
        // $scope.userData.phone = $scope.newPhone;
        // $scope.newPhone = '';
    };


}]);