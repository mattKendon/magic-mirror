/**
 * Created by Matthew on 17/05/2015.
 */

angular
    .module('app')
    .directive('hmWeather', hmWeather);

hmWeather.$inject = ['$timeout', 'weatherService', 'weatherIconService', 'weatherDaytimeService']

function hmWeather($timeout, weatherService, weatherIconService, weatherDaytimeService) {
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

        scope.icon = icon;

        updateWeather();

        function icon() {
            if (scope.data !== undefined) {
                var day = weatherDaytimeService.isDay(scope.data.sys.sunrise, scope.data.sys.sunset);
            } else {
                var day = true;
            }

            return weatherIconService.get(scope.data.weather[0].id, day);
        }

        function updateWeather() {
            console.log("Updating Weather");
            var now = Date.now();
            getWeather();
            $timeout(updateWeather, 1000*60*10);
        }

        function getWeather() {
            return weatherService.get(scope.location)
                .then(function(data) {
                    scope.data = data;
            });
        }
    }
}