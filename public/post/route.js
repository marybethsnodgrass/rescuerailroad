'use strict';
  app.controller('routePostCtrl', ["$scope", "$http", "$timeout", "$location", function ($scope, $http, $timeout, $location) {
    // $scope.animalName = '';
    // $scope.animalExternalId = '';
    // $scope.destGroupName = '';
    // $scope.animalType = '';
    // $scope.weight = '';
    // $scope.gender = '';
    // $scope.breed = '';
    // $scope.age = '';

    let newRoute = {};
 
    // create a new user locally save it remotely
    $scope.createAnimalPost = function () {
        newRoute = {
            // animalName: $scope.animalName,
            // animalExternalId: $scope.animalExternalId,
            // destGroupName: $scope.destGroupName,
            // animalType: $scope.animalType,
            // weight: $scope.weight,
            // gender: $scope.gender,
            // breed: $scope.breed,
            // age: $scope.age
        };
        $http.post('/route', JSON.stringify(newRoute))
            .success(function (data, status, headers) {
                console.log(status);
                console.log("created route");
              })
            .error(function (data, status, header) {
                console.log(status);
              });
        newRoute = {};
    };
}]);