(function() {
  'use strict';

  var api = angular.module('api', ['ngResource']);

  api.factory('User', ['$resource', 'serverUrl',
    function($resource, serverUrl) {
      return $resource(serverUrl + '/user/:userId', {}, {
        login: {
          method: 'POST',
          params: {
            userId: 'login'
          }
        }
      })
    }
  ]);


})();