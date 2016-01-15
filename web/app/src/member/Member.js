(function() {
  'use strict';

  angular.module('member', ['ngResource'])
    .factory('Member', ['$resource', 'serverUrl',
      function($resource, serverUrl) {
        return $resource(serverUrl + '/user/:userId', {}, {
          query: {
            method: 'GET',
            isArray: true
          }
        })
      }
    ]);
})();