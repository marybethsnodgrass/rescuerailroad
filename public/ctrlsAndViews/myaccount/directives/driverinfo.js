app.directive("driverinfoDirective", function() {
  return {
    restrict: "E",
    replace: true,
    transclude: true,
    templateUrl: "/ctrlsAndViews/myaccount/views/driverinfo.html",
    link: function (scope, element, attrs) {
      // DOM manipulation/events here!
    }
  };
});