/**
 * Created by Matthew on 17/05/2015.
 */

angular
    .module('app')
    .factory('forecastService', forecastService);

forecastService.$inject = ['$http'];

function forecastService($http) {
    var baseUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily'
    var service = {
        get: get,
        baseUrl: baseUrl
    };

    return service;

    /////////////////////////////

    function get(location) {
        var params = {
            q: location,
            units: 'metric',
            cnt: 5
        }

        return $http.get(baseUrl, {params: params})
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