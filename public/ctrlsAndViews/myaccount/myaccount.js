'use strict';
app.controller('myaccountCtrl', ["$scope", "$timeout", "$location", "$http", function ($scope, $timeout, $location, $http, updateMyAcct) {
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
    let newUserData = {};
    let newDriverData = {};
    let newGroupData = {};

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

    $scope.updateGroupData = function () {
        console.log("$scope.userData", $scope.userData);
        newGroupData = {
            _id: $scope.userData._id,
            groupName: $scope.newGroupName || $scope.userData.groupName,
            userId: $scope.userData.userId
        }
        console.log("newGroupData", newGroupData);
        // updateMyAcct.groupData(newGroupData);
        newGroupData = {};
    };

    $scope.updateDriverData = function () {
        console.log("$scope.userData", $scope.userData); 
        newDriverData = {
            _id: $scope.userData._id,
            firstName: $scope.newFirstName || $scope.userData.firstName,
            lastName: $scope.newLastName || $scope.userData.lastName,
            dlState: $scope.newDlState || $scope.userData.dlState,
            dlNum: $scope.newDlNum || $scope.userData.dlNum,
            userId: $scope.userData.userId
        }
        console.log("newDriverData", newDriverData);
        // updateMyAcct.driverData(newDriverData);
        newDriverData = {};
    };

    $scope.updateUserData = function () {
        console.log("$scope.userData", $scope.userData); 
        newUserData = {
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
        console.log("$scope.newState", $scope.newState);
        console.log("newUserData", newUserData);
        // updateMyAcct.userData(newUserData);
        newUserData = {};
    };
}]);