'use strict';

angular.module('nodebot')
  .factory('artistsSvc', artistsSvc);


function artistsSvc($q, artistsDS) {
  function getAll() {
    var deferred = $q.defer();
    deferred.resolve(artistsDS.getAll());
    return deferred.promise;
  }

  return {
    getAll: getAll
  }
}
