app.factory("updateMyAcct", ["$scope", "$timeout", "$location", "$http", function($scope, $timeout, $location, $http) {
    return {
        groupData: function (newGroupData) {
            console.log("newGroupData", newGroupData);
            // $http.put('/user/:id', JSON.stringify(newGroupData))
            // .success(function (data, status, headers) {
            //      console.log(status);
            //      $location.path('/myaccountgroup');
            // })
            // .error(function (data, status, header) {
            //     console.log(status);
            // });
        },

        driverData: function (newDriverData) {
            console.log("newDriverData", newDriverData);
            // $http.put('/user/:id', JSON.stringify(newDriverData))
            // .success(function (data, status, headers) {
            //      console.log(status);
            //      $location.path('/myaccountdriver');
            // })
            // .error(function (data, status, header) {
            //     console.log(status);
            // });
        },

        userData: function (newUserData) {
            console.log("newUserData", newUserData);
            // $http.put('/user/:id', JSON.stringify(newDriverData))
            // .success(function (data, status, headers) {
            //      console.log(status);
            //      $location.path('/myaccountdriver');
            // })
            // .error(function (data, status, header) {
            //     console.log(status);
            // });
        }
    };
}]);