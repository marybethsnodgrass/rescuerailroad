'use strict';
app.controller('groupDirCtrl', ["$scope", "$http", "$timeout", "$location", function ($scope, $http, $timeout, $location) {
    $scope.groupData = {};

    $http.get('/group')
    .success(function(group) {
        $scope.groupData = group;
        console.log($scope.groupData);
    }).error(function() {
        console.log("there was an error")
    });

}]);