'use strict';

/**
 * @ngdoc function
 * @name nodebot.components.new_patient
 * @description
 * # Main Controller
 */
angular.module('nodebot')
  .controller('PatientNewCtrl', function($scope, $timeout, $ionicHistory, events, patientSvc) {
    $scope.state = 'step-1'
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
      $ionicHistory.goBack();
    };

    $scope.setState = function(state) {
      $scope.state = state;
    }
  });
