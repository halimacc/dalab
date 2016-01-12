(function(){
  'use strict';

  angular.module('paper')
    .controller('PaperController', ['Paper', PaperController]);

  function PaperController(Paper) {
    var self = this;

    self.paper = Paper.query();
  }
})();