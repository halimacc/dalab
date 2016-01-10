(function() {
  'use strict';

  angular.module('people', ['ngResource', 'ngMaterial'])
    .factory('People', ['$resource',
      function($resource) {
        return $resource('./api/people/:peopleId.json', {}, {
          query: {
            method: 'GET',
            params: {
              peopleId: 'people'
            },
            isArray: true
          }
        })
      }
    ]);
})();