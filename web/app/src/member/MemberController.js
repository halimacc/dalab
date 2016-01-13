(function() {
  'use strict';

  angular.module('member')
    .controller('MemberController', ['Member', MemberController]);

  function MemberController(Member) {
    var self = this;

    self.roles = ['Faculty', 'Student'];
    self.members = Member.query();
  }
})();