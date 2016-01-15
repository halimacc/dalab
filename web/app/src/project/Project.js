(function() {
  'use strict';

  angular.module('project', ['ngResource'])
    .factory('Project', ['$resource', 'serverUrl',
      function($resource, serverUrl) {
        return $resource(serverUrl + '/project/:projectId', {}, {
          query: {
            method: 'GET',
            isArray: true
          }
        })
      }
    ]);
})();