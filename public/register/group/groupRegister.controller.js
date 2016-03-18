
  app.controller('driverRegisterCtrl', ["$scope", "$timeout", "$location", function ($scope, $timeout, $location) {
    const form = document.querySelector('form')
    $scope.firstname = document.querySelector('input[id="firstname"]');
    $scope.lastname = document.querySelector('input[id="lastname"]');
    $scope.groups = [];
    $scope.newGroup = '';
    $scope.editedGroup = null;

    form.addEventListener('submit', () => {
    const [groupname] = [groupname.value]
    });
 
    // create a new driver locally save it remotely
    $scope.createGroup = function () {
      const todoTitle = $scope.newGroup
      if (!todoTitle.length) {
        return;
      }
      const newGroup = new Group({
        title: driverID,
        completed: false
      });
      newGroup.$save();
      $scope.groups.unshift(newGroup);
      $scope.newGroup = '';
    };
 
    // when the controller is destroyed, cancel the polling
    $scope.$on('destroy', function(){
      $timeout.cancel($scope.promise);
    });
}]);