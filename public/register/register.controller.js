
  app.controller('registerCtrl', ["$scope", "$timeout", "$location", function ($scope, $timeout, $location) {
    console.log("run");
    const form = document.querySelector('form')
    $scope.firstname = document.querySelector('input[id="firstname"]');
    $scope.lastname = document.querySelector('input[id="lastname"]');
    $scope.drivers = [];
    $scope.newDriver = '';
    $scope.editedDriver = null;

    form.addEventListener('submit', () => {
    const [first, last] = [firstname.value, lastname.value]
    });
 
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
}]);