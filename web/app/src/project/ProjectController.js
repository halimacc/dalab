(function() {
  'use strict';

  angular.module('project')
    .controller('ProjectController', ['Project', ProjectController]);

  function ProjectController(Project) {
    var self = this;

    self.projects = Project.query();
  }
})();