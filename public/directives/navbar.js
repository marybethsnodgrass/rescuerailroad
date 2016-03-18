app.directive("navbarDirective", function() {
  return {
    restrict: "E",
    replace: true,
    transclude: true,
    templateUrl: "/directives/navbar.html",
    link: function (scope, element, attrs) {
      // DOM manipulation/events here!
    }
  };
});