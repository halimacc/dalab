(function() {
  var dalabApp = angular.module('dalabApp');

  dalabApp.directive('daScrollTop', ['$window', function($window) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var scrollee = attrs['daScrollTop'];
        var index = attrs['daScrollTopVar'];
        var scrolleeElement = $window.$('#' + scrollee);
        var handler = function() {
          if (index)
            scope[index] = scrolleeElement.scrollTop();
          else scope.scroll = scrolleeElement.scrollTop();
        }
        scrolleeElement.on('scroll', scope.$apply.bind(scope, handler));
        handler();
      }
    };
  }]);


  dalabApp.directive('mdPrimaryContrast', ['$window', 'uiConfig',
    function($window, uiConfig) {
      return {
        restrict: 'C',
        link: function(scope, element, attrs) {
          var el = $window.$(element);
          var primaryColor = uiConfig.color.primary;
          var level = 'default';
          el.css('background', '#' + primaryColor.palette[primaryColor[level]]);
          var color = 'white';
          if (primaryColor.palette['contrastDefaultColor'] == 'light' && $.inArray(primaryColor[level], primaryColor.palette['contrastDarkColors']) > -1 || primaryColor.palette['contrastDefaultColor'] == 'dark' && $.inArray(primaryColor[level], primaryColor.palette['contrastLightColors']) > -1)
            color = 'black';
          el.css('color', color);
        }
      }
    }
  ]);
})();