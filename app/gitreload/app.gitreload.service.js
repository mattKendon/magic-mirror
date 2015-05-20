/**
 * Created by Matthew on 17/05/2015.
 */

angular
    .module('app')
    .factory('gitReloadService', gitReloadService);

gitReloadService.$inject = ['$http'];

function gitReloadService($http) {
    var service = {
        getHash: getHash
    };

    return service;

    /////////////////////////////

    function getHash() {

        return $http.get('/githash')
            .then(success)
            .catch(error);

        function success(response) {
            return response.data;
        }

        function error(error) {
            console.log("XHR Failed: " + error.details)
        }
    }
}