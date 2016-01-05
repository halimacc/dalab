'use strict';

var dalabApp = angular.module('dalabApp', [
  'ngRoute',
  'ui.materialize']);

dalabApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/people', {
      templateUrl: '/templates/people-list.html',
      controller: 'PeopleCtrl'
    }).otherwise({
      redirectTo: '/people',
      caseInsensitiveMatch: true
    })
  }
]);