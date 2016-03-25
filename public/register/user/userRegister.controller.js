
  app.controller('userRegisterCtrl', ["$scope", "$timeout", "$location", function ($scope, $timeout, $location) {
    const form = document.querySelector('form')
    $scope.isDriver;
    $scope.email = '';
    $scope.phone = '';
    $scope.address = '';
    $scope.city = '';
    $scope.state = '';
    $scope.zip = '';
    $scope.password = '';
    let newUser = {};
 
    // create a new user locally save it remotely
    $scope.createUser = function () {
        newUser = {
            isDriver: $scope.isDriver,
            email: $scope.email,
            phone: $scope.phone,
            address: $scope.address,
            city: $scope.city,
            state: $scope.state,
            zip: $scope.zip
        };
        $http.post('/user', JSON.stringify(newUser)).
            then( function successCallback(response, data) {
        }),  function errorCallback(response) {
            console.log("there was an error")
        }
        newUser = {};
    };
}]);