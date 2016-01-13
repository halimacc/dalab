(function() {
  'use strict';

  angular.module('publication', ['ngResource', 'ngMaterial'])
    .factory('Publication', ['$resource', 'serverUrl',
      function($resource, serverUrl) {
        return $resource(serverUrl + '/publication/:publicationId', {}, {
          query: {
            method: 'GET',
            isArray: true
          }
        })
      }
    ]);
})();