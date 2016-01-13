(function() {
  'use strict'
  /* App Module */
  var dalabApp = angular.module('dalabApp', [
    'ngRoute',
    'ngMaterial',

    'member',
    'publication'
  ]);

  dalabApp.value('serverUrl', 'http://localhost:1337');

  dalabApp.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/member', {
        templateUrl: 'src/member/member.html',
        controller: 'MemberController',
        controllerAs: 'memberCtrl'
      }).when('/publication', {
        templateUrl: 'src/publication/publication.html',
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
        .primaryPalette('light-blue', {
          default: '600'
        })
        .accentPalette('pink', {
          default: '300'
        });
    }
  ]);

})();