
  app.controller('groupRegisterCtrl', ["$scope", "$timeout", "$location", function ($scope, $timeout, $location) {
    const form = document.querySelector('form')
    $scope.userType = 'group';
    $scope.groupname = '';
    $scope.email = '';
    $scope.phone = '';
    $scope.address = '';
    $scope.city = '';
    $scope.state = '';
    $scope.zip = '';
    $scope.password = '';
    let newGroup = {};

      //redirect to group register view if usertype group radio button is selected
    $scope.redirectUserType = function () {
        $location.path('/driverRegister');
    }
 
    // create a new driver locally save it remotely
    $scope.createGroup = function () {
        newGroup = {
            groupname: $scope.groupname,
            email: $scope.email,
            phone: $scope.phone,
            address: $scope.address,
            city: $scope.city,
            state: $scope.state,
            zip: $scope.zip
        };
        $http.post('/group', JSON.stringify(newGroup)).
            then( function successCallback(response, data) {
        }),  function errorCallback(response) {
            console.log("there was an error")
        }
        $scope.Group = {};
    };
}]);