/**
 * Created by Matthew on 17/05/2015.
 */

angular
    .module('app')
    .directive('hmWeather', hmWeather);

hmWeather.$inject = ['weatherService', 'weatherIconService']

function hmWeather(weatherService, weatherIconService) {
    var directive = {
        restrict: 'E',
        scope: {
            location: "@"
        },
        link: linkFunction,
        templateUrl: "weather/app.weather.tpl.html"
    };

    return directive;

    function linkFunction(scope, element) {

        scope.get = get;
        scope.icon = icon;

        function icon() {
            //return "wi-day-cloudy";
            return weatherIconService.get(scope.data.weather[0].id, true);
        }

        function get() {
            return weatherService.get(scope.location)
                .then(function(data) {
                    scope.data = data;
                    console.log(scope.data);
            });
        }

        scope.get();
    }
}