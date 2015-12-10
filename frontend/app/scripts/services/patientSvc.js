'use strict';

angular.module('nodebot')
  .factory('patientSvc', patientSvc);


function patientSvc($q) {
  function getAll() {
    var deferred = $q.defer();
    deferred.resolve();
    return deferred.promise;
  }

  return {
    getAll: getAll
  }
}
