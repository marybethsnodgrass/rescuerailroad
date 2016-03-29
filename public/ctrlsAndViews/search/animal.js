'use strict';
app.controller('animalSearchCtrl', ["$scope", "$http", "$timeout", "$location", function ($scope, $http, $timeout, $location) {
    $scope.animalData = {};
    $scope.search = '';

    $http.get('/animal')
    .success(function(animal) {
        $scope.animalData = animal;
        console.log($scope.animalData);
    }).error(function() {
        console.log("there was an error")
    });

}]);