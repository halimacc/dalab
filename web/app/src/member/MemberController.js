(function() {
  'use strict';

  angular.module('member')
    .controller('MemberController', ['$scope', 'User', MemberController]);

  function MemberController($scope, User) {
    var self = this;

    $scope.$root.mainRoute = 'member';
    self.bannerTitle = "Member";

    self.roles = ['Faculty', 'Student'];
    self.members = User.query();
  }
})();