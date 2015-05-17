/**
 * Created by Matthew on 17/05/2015.
 */

angular
    .module('app')
    .directive('hmClock', ['dateFilter', '$timeout', hmClock]);

function hmClock(dateFilter, $timeout){
    var directive = {
        restrict: 'E',
        scope: {
            format: '@'
        },
        link: LinkFunction
    };

    return directive;

    function LinkFunction(scope, element){
        var updateTime = function(){
            var now = Date.now();

            element.html(dateFilter(now, scope.format));
            $timeout(updateTime, now % 1000);
        };

        updateTime();
    }
}