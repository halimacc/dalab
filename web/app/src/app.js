(function() {
  'use strict'
  /* App Module */
  var dalabApp = angular.module('dalabApp', [
    'ngRoute',
    'ngMaterial',
    'daSlide',

    'member',
    'publication',
    'project'
  ]);

  dalabApp.value('serverUrl', 'http://localhost:1337');

  // Routing 
  dalabApp.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: 'src/home/home.html',
        controller: 'HomeController',
        controllerAs: 'ctrl'
      }).when('/member', {
        templateUrl: 'src/member/member.html',
        controller: 'MemberController',
        controllerAs: 'ctrl'
      }).when('/publication', {
        templateUrl: 'src/publication/publication.html',
        controller: 'PublicationController',
        controllerAs: 'ctrl'
      }).when('/project', {
        templateUrl: 'src/project/project.html',
        controller: 'ProjectController',
        controllerAs: 'ctrl'
      }).otherwise({
        redirectTo: '/'
      });
    }
  ]);
})();