(function() {
  'use strict';

  angular.module('management')
    .controller('ManagementController', ['$scope', '$templateCache', 'Management', ManagementController]);

  function ManagementController($scope, $templateCache, Management) {
    var self = this;

    self.authorities = ['user', 'profile'];
    self.random = $scope.Math.random();


    Management.get().$promise.then(function(management) {
      self.user = management.user;
    });

    self.getTabPath = function(key) {
      return '/src/management/tabs/' + key + '.html' + '?r=' + self.random;
    }
  }


  // login controller
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