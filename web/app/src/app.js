(function() {
  'use strict'
  /* App Module */
  var dalabApp = angular.module('dalabApp', [
    'ngRoute',
    'ngMaterial',
    'ngMessages',

    'api',
    'member',
    'publication',
    'project',
    'management'
  ]);

  dalabApp.value('serverUrl', 'http://localhost:1337');
})();