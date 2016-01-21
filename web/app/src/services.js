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

  api.factory('Publication', ['$resource', 'serverUrl',
    function($resource, serverUrl) {
      return $resource(serverUrl + '/publication/:publicationId', {}, {});
    }
  ]);

  api.factory('Project', ['$resource', 'serverUrl',
    function($resource, serverUrl) {
      return $resource(serverUrl + '/project/:projectId', {}, {});
    }
  ]);

  api.factory('Management', ['$resource', 'serverUrl',
    function($resource, serverUrl) {
      return $resource(serverUrl + '/management/:managementId', {
        managementId: 'default'
      }, {});
    }
  ]);

})();