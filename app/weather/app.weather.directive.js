/**
 * Created by Matthew on 17/05/2015.
 */

angular
    .module('app')
    .directive('hmWeather', hmWeather);

hmWeather.$inject = ['weatherService']

function hmWeather(weatherService) {
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

        get();

        function get() {
            return weatherService.get(scope.location)
                .then(function(data) {
                    scope.data = data;
                    console.log(scope.data);
            });
        }
    }
}