
  app.controller('groupRegisterCtrl', ["$scope", "$timeout", "$location", "$http", function ($scope, $timeout, $location, $http) {
    $scope.groupName = '';
    let newGroup = {};

    // create a new driver locally save it remotely
    $scope.createGroup = function () {
        newGroup = {
            groupName: $scope.groupName
        };
        $http.post('/group', JSON.stringify(newGroup))
        .success(function (data, status, headers) {
             console.log(status);
             $location.path('/home');
        })
        .error(function (data, status, header) {
            console.log(status);
        });
        newGroup = {};
    };
}]);