'use strict';
  app.controller('routePostCtrl', ["$scope", "$http", "$timeout", "$location", function ($scope, $http, $timeout, $location) {
    $scope.originCity = '';
    $scope.originState = '';
    $scope.originZip = '';
    $scope.originDate = '';
    $scope.originTime = '';
    $scope.destCity = '';
    $scope.destState = '';
    $scope.destZip = '';
    $scope.destDate = '';
    $scope.destTime = '';

    let newRoute = {};
 
    // only works after i delete table and restart node..
    $scope.createRoutePost = function () {
        newRoute = {
            originCity: $scope.originCity,
            originState: $scope.originState,
            originZip: $scope.originZip,
            originDate: $scope.originDate,
            originTime: $scope.originTime,
            destCity: $scope.destCity,
            destState: $scope.destState,
            destZip: $scope.destZip,
            destDate: $scope.destDate,
            destTime: $scope.destTime
        };
        $http.post('/route', JSON.stringify(newRoute))
            .success(function (data, status, headers) {
                console.log(status);
                console.log("created route");
                $location.path('/routeSearch');
              })
            .error(function (data, status, header) {
                console.log(status);
              });
        newRoute = {};
    };
}]);