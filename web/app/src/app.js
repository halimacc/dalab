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
      .primaryPalette('cyan', {
        'default': '500',
        'hue-1': '100',
        'hue-2': '600',
        'hue-3': 'A100'
      })
      .accentPalette('pink', {
        'default': '200'
      });
  }
]);