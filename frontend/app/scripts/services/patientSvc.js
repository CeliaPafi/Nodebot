'use strict';

angular.module('nodebot')
  .factory('patientSvc', patientSvc);


function patientSvc($q, localStorageService) {
  function getAll() {
    var deferred = $q.defer();
    deferred.resolve(localStorageService.get('patients') || []);
    return deferred.promise;
  }

  function save(data) {
    var deferred = $q.defer();
    var patients = localStorageService.get('patients') || [];
    data.id = new Date().getTime();
    patients.push(data);
    localStorageService.set('patients', patients);
    deferred.resolve(true);
    return deferred.promise;
  }

  return {
    getAll: getAll,
    save: save
  }
}
