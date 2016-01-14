(function() {
  'use strict';

  angular.module('publication')
    .controller('PublicationController', ['Publication', PublicationController]);

  function PublicationController(Publication) {
    var self = this;

    self.years = [];
    self.publications = Publication.query();

  }
})();