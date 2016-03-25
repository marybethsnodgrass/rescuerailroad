
  app.controller('groupRegisterCtrl', ["$scope", "$timeout", "$location", function ($scope, $timeout, $location) {
    const form = document.querySelector('form')
    $scope.groupname = '';
    let newGroup = {};

    // create a new driver locally save it remotely
    $scope.createGroup = function () {
        newGroup = {
            groupname: $scope.groupname
        };
        $http.post('/group', JSON.stringify(newGroup)).
            then( function successCallback(response, data) {
        }),  function errorCallback(response) {
            console.log("there was an error")
        }
        newGroup = {};
    };
}]);