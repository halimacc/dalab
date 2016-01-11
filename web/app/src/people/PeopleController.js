(function() {
  'use strict';

  angular.module('people')
    .controller('PeopleController', ['People', PeopleController]);

  function PeopleController(People) {
    var self = this;

    self.roles = ['faculty', 'student'];
    self.people = People.query();
  }
})();