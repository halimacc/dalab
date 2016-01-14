(function() {
  angular.module('dalabApp')
    .directive('scrollPosition', ['$window', function($window) {
      return {
        scope: {
          scroll: '=scrollPosition'
        },
        link: function(scope, element, attrs) {
          var content = $window.$('#content');
          var handler = function() {
            scope.scroll = content.scrollTop();
          }
          content.on('scroll', scope.$apply.bind(scope, handler));
          handler();
        }
      };
    }]);
})();