(function() {
  'use strict';

  angular.module('project')
    .controller('ProjectController', ['$scope', 'Project', ProjectController]);

  function ProjectController($scope, Project) {
    var self = this;

    $scope.$root.mainRoute = 'project';
    self.bannerTitle = 'Project';
    
    self.projects = Project.query();
  }
})();