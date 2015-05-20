/**
 * Created by Matthew on 17/05/2015.
 */

angular
    .module('app')
    .directive('hmMessage', hmMessage);

function hmMessage() {
    var directive = {
        restrict: 'E',
        scope: {
            location: "@"
        },
        link: linkFunction
    };

    return directive;

    function linkFunction(scope, element) {
        element.html("Hello, handsome!");
    }
}