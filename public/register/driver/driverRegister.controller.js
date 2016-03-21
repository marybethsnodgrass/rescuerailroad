
  app.controller('driverRegisterCtrl', ["$scope", "$timeout", "$location", function ($scope, $timeout, $location) {
    const form = document.querySelector('form')
    $scope.firstname = document.querySelector('input[name="firstname"]');
    $scope.lastname = document.querySelector('input[name="lastname"]');
    $scope.email = document.querySelector('input[name="email"]');
    $scope.phone = document.querySelector('input[name="phone"]');
    $scope.address = document.querySelector('input[name="address"]');
    $scope.city = document.querySelector('input[name="city"]');
    $scope.state = document.querySelector('input[name="lastname"]');
    $scope.zip = document.querySelector('input[name="zip"]');
    $scope.dlState = document.querySelector('input[name="dlState"]');
    $scope.dlNum = document.querySelector('input[name="dlNum"]');
    $scope.sponsorID = document.querySelector('input[name="sponsorID"]');
    $scope.drivers = [];
    $scope.newDriver = '';
    $scope.editedDriver = null;

    form.addEventListener('submit', () => {
    });
 
    // create a new driver locally save it remotely
    $scope.createDriver = function () {
      const driverCheck = $scope.newDriver
      if (!driverCheck.length) {
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