(function() {
  'use strict'
  /* App Module */
  var dalabApp = angular.module('dalabApp');

  // Routing 
  dalabApp.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: 'src/homepage.html'
      }).when('/member', {
        templateUrl: 'src/member/member.html',
        controller: 'MemberController',
        controllerAs: 'memberCtrl'
      }).when('/publication', {
        templateUrl: 'src/publication/publication.html',
        controller: 'PublicationController',
        controllerAs: 'publicationCtrl'
      }).when('/project', {
        templateUrl: 'src/project/project.html',
        controller: 'ProjectController',
        controllerAs: 'projectCtrl'
      }).otherwise({
        redirectTo: '/'
      });
    }
  ]);

  // Color & Theme & Layout
  var daColor = {
    primary: {
      name: 'da-primary',
      'default': '600',
      'hue-1': '200',
      'hue-2': '700',
      'hue-3': 'A200',
      palette: {
        '50': 'e1f5fe',
        '100': 'b3e5fc',
        '200': '81d4fa',
        '300': '4fc3f7',
        '400': '29b6f6',
        '500': '03a9f4',
        '600': '039be5',
        '700': '0288d1',
        '800': '0277bd',
        '900': '01579b',
        'A100': '80d8ff',
        'A200': '40c4ff',
        'A400': '00b0ff',
        'A700': '0091ea',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50', '100', '200', '300', '400', '500', 'A100', 'A200', 'A400'],
        'contrastStrongLightColors': ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'A100', 'A200', 'A400', 'A700']
      }
    }
  };

  // use object copy for define palette will change the palette object
  var daColorCp = jQuery.extend(true, {}, daColor);

  // config theme
  dalabApp.config(['$mdThemingProvider', '$mdIconProvider',
    function($mdThemingProvider, $mdIconProvider) {
      $mdThemingProvider.definePalette(daColorCp.primary.name, daColorCp.primary.palette);

      $mdThemingProvider.theme('default')
        .primaryPalette(daColor.primary.name, {
          default: daColor.primary['default'],
          'hue-1': daColor.primary['hue-1'],
          'hue-2': daColor.primary['hue-2'],
          'hue-3': daColor.primary['hue-3']
        })
        .accentPalette('pink', {
          default: '300'
        });
    }
  ]);

  dalabApp.value('serverUrl', 'http://localhost:1337');

  dalabApp.value('uiConfig', {
    color: daColor,
    banner: {
      height: 192,
      whiteframe: 'md-whiteframe-8dp'
    }
  });
})();