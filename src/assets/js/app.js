'use strict';

var dalabApp = angular.module('dalabApp', ['ngRoute', 'ui.materialize']);
dalabApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/templates/todo.html',
      controller: 'TodoCtrl'
    }).when('/people', {
      templateUrl: '/templates/people.html',]
      controller: 'TodoCtrl'
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })
  }
]);

dalabApp.controller('TodoCtrl', ['$scope', '$rootScope', 'TodoService', function($scope, $rootScope, TodoService) {
  $scope.formData = {};
  $scope.todos = [];

  TodoService.getTodos().then(function(response) {
    $scope.todos = response;
  });

  $scope.addTodo = function() {
    TodoService.addTodo($scope.formData).then(function(response) {
      $scope.todos.push($scope.formData)
      $scope.formData = {};
    });
  }

  $scope.removeTodo = function(todo) {
    TodoService.removeTodo(todo).then(function(response) {
      $scope.todos.splice($scope.todos.indexOf(todo), 1)
    });
  }
}]);