(function() {
  'use strict';

  angular.module('publication')
    .controller('PublicationController', ['$scope', 'Publication', PublicationController]);

  function PublicationController($scope, Publication) {
    var self = this;

    $scope.$root.mainRoute = 'publication';
    self.bannerTitle = "Publication";

    self.publications = Publication.query();
  }
})();