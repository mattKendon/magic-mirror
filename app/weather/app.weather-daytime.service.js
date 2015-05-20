/**
 * Created by Matthew on 20/05/2015.
 */

angular
    .module('app')
    .factory('weatherDaytimeService', weatherDaytimeService);

function weatherDaytimeService() {
    var service = {
        isDay: isDay
    };

    return service;

    /////////////////////////////

    function isDay(sunrise, sunset) {
        var now = moment().format("X");

        return now < sunset && now > sunrise;
    }

}