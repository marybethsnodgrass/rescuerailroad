
  app.controller('driverRegisterCtrl', ["$scope", "$timeout", "$location", "$http", function ($scope, $timeout, $location, $http) {
    $scope.firstname = '';
    $scope.lastname = '';
    $scope.dlState = '';
    $scope.dlNum = '';
    $scope.sponsorID = '';
    let newDriver = {};

    // create a new driver locally save it remotely
    $scope.createDriver = function () {
        newDriver = {
            firstname: $scope.firstname,
            lastname: $scope.lastname,
            dlState: $scope.dlState,
            dlNum: $scope.dlNum,
            sponsorID: $scope.sponsorID
        };
        $http.post('/driver', JSON.stringify(newDriver))
        .success(function (data, status, headers) {
             console.log(status);
             $location.path('/home');
        })
        .error(function (data, status, header) {
            console.log(status);
        });
        newDriver = {};
    };

}]);