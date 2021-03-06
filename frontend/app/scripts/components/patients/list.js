'use strict';

/**
 * @ngdoc function
 * @name nodebot.components.patients_list
 * @description
 * # Main Controller
 */
angular.module('nodebot')
  .controller('PatientsListCtrl', function($scope, $timeout, $ionicModal, $ionicScrollDelegate, events, patientSvc) {
    console.log('patients list');
    $scope.patientList = [];
    // getPatients();

    $scope.$on('$ionicView.enter', function() {
      getPatients();
    });

    function getPatients() {
      patientSvc.getAll().then(function(getAllPatients) {
        $scope.patientList = getAllPatients;
      });
    }
  });
