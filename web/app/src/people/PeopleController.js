(function() {
  'use strict';

  angular.module('people')
    .controller('PeopleController', ['People', PeopleController]);

  function PeopleController(People) {
    var self = this;

    // group people by role
    self.roles = ['faculty', 'student'];
    self.roleNames = {
      'faculty': '教师',
      'student': '学生'
    };
    self.people = {};
    People.query(function(people) {
      for (var i in self.roles) {
        var role = self.roles[i];
        self.people[role] = people.filter(function(p) {
          return role == p.role;
        });
      }
    });
  }
})();