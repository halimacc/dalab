(function() {
  'use strict';

  angular.module('publication')
    .controller('PublicationController', ['Publication', PublicationController]);

  function PublicationController(Publication) {
    var self = this;

    self.publications = Publication.query();
  }
})();