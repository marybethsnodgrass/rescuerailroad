'use strict';
app.controller('routeSearchCtrl', ["$scope", "$http", "$timeout", "$location", function ($scope, $http, $timeout, $location) {
    $scope.routeData = {};
    $scope.search = '';

    $http.get('/route')
    .success(function(route) {
        $scope.routeData = route;
        console.log($scope.routeData);
    }).error(function() {
        console.log("there was an error")
    });

}]);