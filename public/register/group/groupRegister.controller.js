
  app.controller('groupRegisterCtrl', ["$scope", "$timeout", "$location", function ($scope, $timeout, $location) {
    const form = document.querySelector('form')
    $scope.groupname = document.querySelector('input[name="groupname"]');
    $scope.email = document.querySelector('input[name="email"]');
    $scope.phone = document.querySelector('input[name="phone"]');
    $scope.address = document.querySelector('input[name="address"]');
    $scope.city = document.querySelector('input[name="city"]');
    $scope.state = document.querySelector('input[name="lastname"]');
    $scope.zip = document.querySelector('input[name="zip"]');
    $scope.groups = [];
    $scope.newGroup = '';
    $scope.editedGroup = null;

    form.addEventListener('submit', () => {
    //const [groupname] = [groupname.value]
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