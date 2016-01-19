(function() {
  'use strict';

  angular.module('management')
    .controller('ManagementController', ['Management', ManagementController]);

  function ManagementController(Management) {
    var self = this;

    self.management = Management.get();
  }

  angular.module('management')
    .controller('LoginController', ['User', '$location', '$mdToast', LoginController]);

  function LoginController(User, $location, $mdToast) {
    var self = this;

    self.login = function() {
      var user = new User();
      user.username = self.username;
      user.password = self.password;
      user.$login()
        .then(function() {
          $mdToast.show($mdToast.simple()
            .textContent('login success')
            .position('top left right')
            .hideDelay(2000));
          $location.path('/management');
        })
        .catch(function(err) {
          $mdToast.show($mdToast.simple()
            .textContent(err.data.message)
            .position('top left right')
            .hideDelay(2000));
        });
    }
  }
})();