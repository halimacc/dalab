'use strict'
/* App Module */
var dalabApp = angular.module('dalabApp', [
  'ngRoute',
  'ngMaterial',
  
  'peopleControllers'
]);

dalabApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/people', {
      templateUrl: 'templates/people-list.html',
      controller: 'PeopleListCtrl'
    }).otherwise({
      redirectTo: 'people'
    });
  }
]);
