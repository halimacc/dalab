(function() {
  'use strict';

  angular.module('people')
    .controller('PeopleController', [PeopleController]);

  function PeopleController() {
    var self = this;

    self.users = [];
  }
})();