app.directive("userinfoDirective", function() {
  return {
    restrict: "E",
    replace: true,
    transclude: true,
    templateUrl: "/ctrlsAndViews/myaccount/views/userinfo.html",
    link: function (scope, element, attrs) {
      // DOM manipulation/events here!
    }
  };
});