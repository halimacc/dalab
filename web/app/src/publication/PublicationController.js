(function() {
  'use strict';

  angular.module('publication')
    .controller('PublicationController', ['$scope', '$mdDialog', 'Publication', PublicationController]);

  function PublicationController($scope, $mdDialog, Publication) {
    var self = this;

    $scope.$root.mainRoute = 'publication';
    self.bannerTitle = "Publication";

    self.publications = Publication.query();

    self.remove = function(publication) {
      var confirm = $mdDialog.confirm()
        .title('Delete Publication')
        .ariaLabel('Delete Publication')
        .textContent('Are you sure to delete this publication?')
        .ok('Delete')
        .cancel('Cancel')
        .targetEvent(event);

      $mdDialog.show(confirm).then(function() {
        Publication.remove({
          publicationId: publication.id
        }).$promise.then(function() {
          self.publications.splice($.inArray(publication, self.publications), 1);
        });
      });
    }

    self.edit = function(publication) {
      self.publicationAct = publication;
      $mdDialog.show({
          controller: PublicationController,
          controllerAs: 'ctrl',
          templateUrl: '/src/management/tabs/publication_edit_dialog.html?r=' + $scope.Math.random(),
          parent: angular.element(document.body),
          targetEvent: event,
          clickOutsideToClose: true,
          locals: {
            publicationInAct: publication
          }
        })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $mdDialog.cancel();
        });
    }

    self.saveEdit = function(publication) {
      $mdDialog.cancel();
    }
  }
})();