(function() {
  'use strict';

  var daSlide = angular.module('daSlide', ['ngMaterial']);

  daSlide.directive('daSlideContainer', ['$window', function($window) {
    return {
      restrict: 'C',
      scope: true,
      link: function(scope, element, attrs) {
        var el = $(element);

        var rs = scope.$root;
        rs.daSlide = rs.daSlide || {};
        rs.daSlide.containerStyle = rs.daSlide.containerStyle || {};
        rs.daSlide.contentStyle = rs.daSlide.contentStyle || {};
        rs.daSlide.slideStyle = rs.daSlide.slideStyle || {};
        var updateStyle = function() {
          rs.daSlide.containerStyle.height = rs.daSlide.slideHeight;
          rs.daSlide.contentStyle.height = rs.daSlide.slideHeight * (rs.daSlide.slideCount || 0);
          rs.daSlide.contentStyle.marginTop = -rs.daSlide.slideHeight * (rs.daSlide.slideIndex || 0);
          rs.daSlide.slideStyle.height = rs.daSlide.slideHeight;
        }
        var contentEl = $('#content');
        rs.daSlide.slideHeight = contentEl.height();
        rs.daSlide.slideIndex = 0;
        updateStyle();

        scope.$watch(
          function() {
            return rs.daSlide.slideIndex;
          },
          function(newValue, oldValue) {
            updateStyle();
          });

        // window size
        var handler = function(event) {
          rs.daSlide.slideHeight = contentEl.height();
          updateStyle();
        };
        $window.onresize = handler;
      }
    }
  }]);

  daSlide.directive('daSlideContent', [function() {
    return {
      restrict: 'C',
      scope: true,
      link: function(scope, element, attrs) {
        var el = $(element);
      }
    }
  }]);


  /*
    directive for a single slide
  */
  daSlide.directive('daSlide', [function() {
    return {
      restrict: 'C',
      scope: true,
      link: function(scope, element, attrs) {
        var el = $(element);

        var rootScope = scope.$root;
        rootScope.daSlide = rootScope.daSlide || {};
        rootScope.daSlide.slideCount = (rootScope.daSlide.slideCount || 0) + 1;

      }
    }
  }]);
})();