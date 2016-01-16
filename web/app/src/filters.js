(function() {
  'use strict';

  var dalabApp = angular.module('dalabApp');
  dalabApp.filter('range', function() {
    return function(input, total) {
      total = parseInt(total);

      for (var i = 0; i < total; i++) {
        input.push(i);
      }

      return input;
    };
  });
})();