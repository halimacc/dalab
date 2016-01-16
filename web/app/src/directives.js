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

  dalabApp.directive('daCarousel', [function() {
    return {
      restrict: 'C',
      scope: true,
      link: function(scope, element, attrs) {
        var carousel = {};
        var el = $(element);
        scope.daCarousel = {};
        scope.daCarousel.itemCount = 0;
        scope.daCarousel.itemIndex = 0;
        scope.daCarousel.itemWidth = el.width();
        scope.daCarousel.itemStyle = {};
        scope.daCarousel.contentStyle = {};
        updateStyles();

        scope.daCarousel.slide = function(offset) {
          var newIndex = scope.daCarousel.itemIndex + offset;
          if (newIndex >= 0 && newIndex < scope.daCarousel.itemCount)
            scope.daCarousel.itemIndex = newIndex;
          updateStyles();
        }

        function updateStyles() {
          scope.daCarousel.itemStyle['width'] = scope.daCarousel.itemWidth;
          scope.daCarousel.contentStyle['margin-left'] = -scope.daCarousel.itemIndex * scope.daCarousel.itemWidth;
        }

        // watch the number of carousel items
        var contentEl = el.children('.da-carousel-content')[0];
        scope.$watch(
          function() {
            return contentEl.children.length;
          },
          function(newValue, oldValue) {
            scope.daCarousel.itemCount = newValue;
          }
        );

        //watch the width of element
        scope.$watch(
          function() {
            return el.width();
          },
          function(newValue, oldValue) {
            scope.daCarousel.itemWidth = newValue;
          });
      }
    }
  }]);
})();