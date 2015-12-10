'use strict';

/**
 * @ngdoc function
 * @name nodebot.components.new_patient
 * @description
 * # Main Controller
 */
angular.module('nodebot')
  .controller('PatientNewCtrl', function($scope, $timeout, $ionicModal, $ionicScrollDelegate, events, patientSvc) {
    $scope.patient = {
      name: {
        first: '',
        mother: '',
        father: ''
      },
      birthday: '',
      genre: ''
    };

    $scope.savePatient = function() {
      patientSvc.save($scope.patient);
    };
  });
