(function() {
  'use strict'
  /* App Module */
  var dalabApp = angular.module('dalabApp');

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
      })

      // management part
      .when('/management', {
        templateUrl: 'src/management/management.html',
        controller: 'ManagementController',
        controllerAs: 'ctrl'
      }).when('/login', {
        templateUrl: 'src/management/login.html',
        controller: 'LoginController',
        controllerAs: 'ctrl'
      })

      // the rest
      .otherwise({
        redirectTo: '/'
      });
    }
  ]);

  dalabApp.factory('authHttpResponseInterceptor', ['$q', '$location', function($q, $location) {
    return {
      responseError: function(rejection) {
        if (rejection.status === 401) {
          $location.path('/login');
        }
        return $q.reject(rejection);
      }
    }
  }]);

  dalabApp.config(['$httpProvider', function($httpProvider) {
    //Http Intercpetor to check auth failures for xhr requests
    $httpProvider.interceptors.push('authHttpResponseInterceptor');
    //set withCredentials to true that angular http service will send or receive cookies
    $httpProvider.defaults.withCredentials = true;
  }]);
})();