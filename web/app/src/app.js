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
        templateUrl: 'src/people/peopleList.html',
        controller: 'PeopleController',
        controllerAs: 'peopleCtrl'
      }).when('/publication', {
        templateUrl: 'src/publication/publicationlist.html',
        controller: 'PublicationController',
        controllerAs: 'publicationCtrl'
      }).otherwise({
        redirectTo: '/publication'
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