
  app.controller('driverRegisterCtrl', ["$scope", "$timeout", "$location", "$http", function ($scope, $timeout, $location, $http) {
    const form = document.querySelector('form')
    $scope.firstname = '';
    $scope.lastname = '';
    $scope.email = '';
    $scope.phone = '';
    $scope.address = '';
    $scope.city = '';
    $scope.state = '';
    $scope.zip = '';
    $scope.dlState = '';
    $scope.dlNum = '';
    $scope.sponsorID = '';
    let newDriver = {};
 
    // create a new driver locally save it remotely
    $scope.createDriver = function () {
        newDriver = {
            firstname: $scope.firstname,
            lastname: $scope.lastname,
            email: $scope.email,
            phone: $scope.phone,
            address: $scope.address,
            city: $scope.city,
            state: $scope.state,
            zip: $scope.zip,
            dlState: $scope.dlState,
            dlNum: $scope.dlNum,
            sponsorID: $scope.sponsorID
        };
        console.log("went through creating new driver");
        //the console.log above is not working currently
        $http.post('/driver', JSON.stringify(newDriver)).
            then( function successCallback(response, data) {
            // $location.path('/driver/{newDriver._id');
        }),  function errorCallback(response) {
            console.log("there was an error")
        }
        $scope.newDriver = {};
    };

}]);