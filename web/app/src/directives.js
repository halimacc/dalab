(function() {
  angular.module('dalabApp')
    .directive('myScrollTop', ['$window', function($window) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          var scrollee = attrs['myScrollTop'];
          var scrolleeElement = $window.$('#' + scrollee);
          var handler = function() {
            scope.scroll = scrolleeElement.scrollTop();
          }
          scrolleeElement.on('scroll', scope.$apply.bind(scope, handler));
          handler();
        }
      };
    }]);
})();