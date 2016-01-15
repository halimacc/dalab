(function() {
  'use strict';

  angular.module('member')
    .controller('MemberController', ['$scope', 'Member', MemberController]);

  function MemberController($scope, Member) {
    var self = this;

    $scope.$root.mainRoute = 'member';
    self.bannerTitle = "Member";

    self.roles = ['Faculty', 'Student'];
    self.members = Member.query();
  }
})();