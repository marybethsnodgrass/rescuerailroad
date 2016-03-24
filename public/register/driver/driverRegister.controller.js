
  app.controller('driverRegisterCtrl', ["$scope", "$timeout", "$location", "$http", function ($scope, $timeout, $location, $http) {
    const form = document.querySelector('form')
    $scope.userType = "driver";
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
    $scope.password = '';
    let newDriver = {};

    //redirect to group register view if usertype group radio button is selected
    $scope.redirectUserType = function () {
        $location.path('/groupRegister');
    }
 
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
            sponsorID: $scope.sponsorID,
            password: $scope.password
        };
        $http.post('/driver', JSON.stringify(newDriver)).
            then( function successCallback(response, data) {
        }),  function errorCallback(response) {
            console.log("there was an error")
        }
        $scope.newDriver = {};
    };

}]);