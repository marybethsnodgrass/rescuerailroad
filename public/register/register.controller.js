
  app.controller('registerCtrl', function ($scope, $timeout, $location) {
    $scope.drivers = [];
    $scope.newDriver = '';
    $scope.editedDriver = null;
 
    // create a new driver locally save it remotely
    $scope.createDriver = function () {
      const todoTitle = $scope.newDriver
      if (!todoTitle.length) {
        return;
      }
 
      const newDriver = new Driver({
        title: driverID,
        completed: false
      });
      newDriver.$save();
      $scope.drivers.unshift(newDriver);
      $scope.newDriver = '';
    };
 
    // when the controller is destroyed, cancel the polling
    $scope.$on('destroy', function(){
      $timeout.cancel($scope.promise);
    });
  });