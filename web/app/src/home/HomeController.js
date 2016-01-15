(function(){
  'use strict';

  angular.module('dalabApp')
    .controller('HomeController', ['$scope', HomeController]);

  function HomeController ($scope) {
    var self = this;

    $scope.$root.mainRoute = '';
    self.bannerTitle = 'Digital Art Lab';

  }
})();