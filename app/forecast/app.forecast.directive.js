/**
 * Created by Matthew on 17/05/2015.
 */

angular
    .module('app')
    .directive('hmForecast', hmForecast);

hmForecast.$inject = ['$timeout', 'forecastService', 'weatherIconService', 'weatherDaytimeService']

function hmForecast($timeout, forecastService, weatherIconService, weatherDaytimeService) {
    var directive = {
        restrict: 'E',
        scope: {
            location: "@"
        },
        link: linkFunction,
        templateUrl: "forecast/app.forecast.tpl.html"
    };

    return directive;

    function linkFunction(scope, element) {

        scope.icon = icon;

        updateForecast();

        function icon(index) {
            return weatherIconService.get(scope.list[index].weather[0].id, true);
        }

        function updateForecast() {
            console.log("Updating Forecast");
            getForecast();
            $timeout(updateForecast, 1000*60*10);
        }

        function getForecast() {
            return forecastService.get(scope.location)
                .then(function(data) {
                    scope.list = data.list;
            });
        }
    }
}