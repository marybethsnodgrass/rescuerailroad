'use strict';
  app.controller('animalPostCtrl', ["$scope", "$http", "$timeout", "$location", function ($scope, $http, $timeout, $location) {
    $scope.animalName = '';
    $scope.animalExternalId = '';
    $scope.destCity = '';
    $scope.destState = '';
    $scope.animalType = '';
    $scope.weight = '';
    $scope.gender = '';
    $scope.breed = '';
    $scope.age = '';

    let newAnimal = {};
 
    // create a new animal post and locally save it remotely
    $scope.createAnimalPost = function () {
        newAnimal = {
            animalName: $scope.animalName,
            animalExternalId: $scope.animalExternalId,
            destCity: $scope.destCity,
            destState: $scope.destState,
            animalType: $scope.animalType,
            weight: $scope.weight,
            gender: $scope.gender,
            breed: $scope.breed,
            age: $scope.age
        };
        $http.post('/animal', JSON.stringify(newAnimal))
            .success(function (data, status, headers) {
                console.log(status);
                console.log(`created animal with name ${$scope.animalName}`);
                $location.path('/animalSearch');
              })
            .error(function (data, status, header) {
                console.log(status);
              });
        newAnimal = {};
    };
}]);