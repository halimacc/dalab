(function() {
  'use strict'
  /* App Module */
  var dalabApp = angular.module('dalabApp', [
    'ngRoute',
    'ngMaterial',

    'people'
  ]);

  dalabApp.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/people', {
        templateUrl: 'src/people/view/peopleList.html',
        controller: 'PeopleController',
        controllerAs: 'peopleCtrl'
      }).otherwise({
        redirectTo: '/people'
      });
    }
  ]);

  dalabApp.config(['$mdThemingProvider', '$mdIconProvider',
    function($mdThemingProvider, $mdIconProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('cyan')
        .accentPalette('pink');
    }
  ]);

})();