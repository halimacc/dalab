(function() {
  'use strict';

  angular.module('management', [])
    .factory('Management', ['$resource', 'serverUrl',
      function($resource, serverUrl) {
        return $resource(serverUrl + '/management/:managementId', {
          managementId: 'default'
        })
      }
    ]);
})();