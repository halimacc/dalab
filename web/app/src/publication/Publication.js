(function() {
  'use strict';

  angular.module('publication', ['ngResource', 'ngMaterial'])
    .factory('Publication', ['$resource',
      function($resource) {
        return $resource('./api/publication/:publicationId.json', {}, {
          query: {
            method: 'GET',
            params: {
              peopleId: 'publications'
            },
            isArray: true
          }
        })
      }
    ]);
})();