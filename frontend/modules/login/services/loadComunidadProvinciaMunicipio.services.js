hotel.factory("load_com_prov_mun", ['$q', '$http',
function ($q, $http) {
  var obj = {};
      obj.loadComunidad = function () {
          var defered=$q.defer();
          var promise=defered.promise;
          $http({
                method: 'GET',
                url: 'http://apiv1.geoapi.es/comunidades?type=JSON&key=0961dd42004c124daaebd5847fb02202c7b77c46a3206f1e1e959effe6d4ff2a&sandbox=0'
            }).success(function(data, status, headers, config) {
               defered.resolve(data);
               console.log(data);
            }).error(function(data, status, headers, config) {
               defered.reject(data);
            });
          return promise;
      };



      obj.loadProvincia = function (id_comunidad) {
          var defered=$q.defer();
          var promise=defered.promise;
          $http({
                method: 'GET',
                url: 'http://apiv1.geoapi.es/provincias?CCOM='+id_comunidad+'&type=JSON&key=0961dd42004c124daaebd5847fb02202c7b77c46a3206f1e1e959effe6d4ff2a&sandbox=0'
            }).success(function(data, status, headers, config) {
               defered.resolve(data);
               console.log(data);
            }).error(function(data, status, headers, config) {
               defered.reject(data);
            });
          return promise;
      };

      obj.loadMunicipio = function (id_provincia) {
          var defered=$q.defer();
          var promise=defered.promise;
          $http({
                method: 'GET',
                url: 'http://apiv1.geoapi.es/municipios?CPRO='+id_provincia+'&type=JSON&key=0961dd42004c124daaebd5847fb02202c7b77c46a3206f1e1e959effe6d4ff2a&sandbox=0'
            }).success(function(data, status, headers, config) {
               defered.resolve(data);
               console.log(data);
            }).error(function(data, status, headers, config) {
               defered.reject(data);
            });
          return promise;
      };
    return obj;
}]);
