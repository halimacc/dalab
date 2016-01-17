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
        rs.daSlide = {};
        rs.daSlide.containerStyle = {};
        rs.daSlide.contentStyle = {};
        rs.daSlide.slideStyle = {};
        var updateStyle = function() {
          rs.daSlide.containerStyle.height = rs.daSlide.slideHeight;
          rs.daSlide.contentStyle.height = rs.daSlide.slideHeight * (rs.daSlide.slideCount || 0);
          rs.daSlide.contentStyle.marginTop = -rs.daSlide.slideHeight * (rs.daSlide.slideIndex || 0);
          rs.daSlide.slideStyle.height = rs.daSlide.slideHeight;
        }
        var contentEl = $('#content');
        rs.daSlide.slideHeight = contentEl.height();
        var daSlideContentEl = el.children('.da-slide-content')[0];
        rs.daSlide.slideIndex = 0;
        rs.daSlide.slideCount = daSlideContentEl.children.length;
        rs.daSlide.slideIndexes = [];
        for (var i = 0; i < rs.daSlide.slideCount; ++i) 
          rs.daSlide.slideIndexes.push(i);
        updateStyle();

        // slide count
        scope.$watch(
          function() {
            daSlideContentEl.children.length;
          },
          function(newValue, oldValue) {
            rs.daSlide.slideCount = newValue;
            updateStyle();
          });

        scope.$watch(
          function() {
            return rs.daSlide.slideIndex;
          },
          function() {
            updateStyle();
          }
        );

        // slide size
        var handler = function(event) {
          rs.daSlide.slideHeight = contentEl.height();
          updateStyle();
        };
        $window.onresize = handler;
      }
    }
  }]);
})();