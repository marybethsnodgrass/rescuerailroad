app.directive("groupinfoDirective", function() {
  return {
    restrict: "E",
    replace: true,
    transclude: true,
    templateUrl: "/ctrlsAndViews/myaccount/views/groupinfo.html",
    link: function (scope, element, attrs) {
      // DOM manipulation/events here!
    }
  };
});