/**
 * Created by Matthew on 17/05/2015.
 */

angular
    .module('app')
    .directive('hmWeather', hmWeather);

hmWeather.$inject = ['weatherService', 'weatherIconService', 'weatherDaytimeService']

function hmWeather(weatherService, weatherIconService, weatherDaytimeService) {
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
            var day = weatherDaytimeService.isDay(scope.data.sys.sunrise, scope.data.sys.sunset);

            return weatherIconService.get(scope.data.weather[0].id, day);
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