'use strict';

/**
 * @ngdoc overview
 * @name NodebotApp
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */

angular.module('nodebot', ['ionic', 'ngCordova', 'ngResource', 'ngMessages', 'ngAnimate', 'leaflet-directive', 'nvd3'])
  .config(NodebotAppConfig)
  .run(NodebotAppRun);

function NodebotAppConfig($httpProvider, $stateProvider, $urlRouterProvider) {
  // Application routing
  $stateProvider
    .state('app', {
      url: '',
      abstract: true,
      templateUrl: 'templates/components/main/main.html',
      controller: 'MainCtrl'
    })
    .state('app.list', {
      url: '/list',
      views: {
        'viewContent': {
          templateUrl: 'templates/components/patients/list.html',
          controller: 'PatientsListCtrl'
        }
      }
    })
    .state('app.new', {
      url: '/new',
      views: {
        'viewContent': {
          templateUrl: 'templates/components/patients/new.html',
          controller: 'PatientNewCtrl'
        }
      }
    });

  // redirects to default route for undefined routes
  $urlRouterProvider.otherwise('/list');

}

function NodebotAppRun($rootScope, $timeout, $state, $ionicPlatform, $ionicConfig, $cordovaSplashscreen, $cordovaNetwork, $cordovaToast) {
  // Ionic Stuff
  $rootScope.$on('$ionicView.loaded', function() {
    ionic.Platform.ready(function() {
      if(navigator && navigator.splashscreen) {
        navigator.splashscreen.hide();
      }
    });
  });

  $ionicPlatform.ready(function() {

  });

  // Validating authentication
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {

  });
}
