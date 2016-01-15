(function() {
  var dalabApp = angular.module('dalabApp');

  dalabApp.directive('mdPrimaryContrast', ['uiConfig',
    function(uiConfig) {
      return {
        restrict: 'C',
        scope: true,
        link: function(scope, element, attrs) {
          var el = $(element);
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

  dalabApp.directive('daWindow', ['$window',
    function($window) {
      return {
        restrict: 'A',
        scope: true,
        link: function(scope, element, attrs) {
          scope.$root.Math = $window.Math;
        }
      }
    }
  ]);

  dalabApp.directive('daScrollContainer', [function() {
    return {
      restrict: 'A',
      scope: true,
      link: function(scope, element, attrs) {
        var index = attrs['daScrollContainer'];
        var scrolleeElement = $(element);
        var handler = function() {
          if (index)
            scope.$root[index] = scrolleeElement.scrollTop();
          else scope.$root.scroll = scrolleeElement.scrollTop();
        }
        scrolleeElement.on('scroll', scope.$apply.bind(scope, handler));
        handler();
      }
    };
  }]);

  dalabApp.directive('daToolbarNavButton', ['uiConfig', function(uiConfig) {
    return {
      restrict: 'C',
      scope: true,
      link: function(scope, element, attrs) {
        var el = $(element);
        var primaryColor = uiConfig.color.primary;
        var level = 'default';
        el.css('border-top-color', '#' + primaryColor.palette[primaryColor[level]]);
        var color = 'rgba(255, 255, 255, 0.5)'
        scope.light = true;
        if (primaryColor.palette['contrastDefaultColor'] == 'light' && $.inArray(primaryColor[level], primaryColor.palette['contrastDarkColors']) > -1 || primaryColor.palette['contrastDefaultColor'] == 'dark' && $.inArray(primaryColor[level], primaryColor.palette['contrastLightColors']) > -1) {
          color = 'rgba(0, 0, 0, 0.5)';
          scope.light = false;
        }
      //  el.css('border-bottom-color', color);
      }
    };
  }]);
})();