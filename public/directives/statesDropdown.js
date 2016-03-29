app.directive("statesDropdownDirective", function() {
  return {
    restrict: "E",
    replace: true,
    transclude: true,
    templateUrl: "/directives/statesDropdown.html",
    link: function (scope, element, attrs) {
      // DOM manipulation/events here!
    }
  };
});