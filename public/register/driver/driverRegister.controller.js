
  app.controller('driverRegisterCtrl', ["$scope", "$timeout", "$location", "$http", function ($scope, $timeout, $location, $http) {
    const form = document.querySelector('form')
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
        $http.post('/driver', JSON.stringify(newDriver)).
            then( function successCallback(response, data) {
        }),  function errorCallback(response) {
            console.log("there was an error")
        }
        newDriver = {};
    };

}]);