/**
 * Created by Matthew on 17/05/2015.
 */

angular
    .module('app')
    .directive('hmGitReload', hmGitReload);

hmGitReload.$inject = ['$window', '$timeout', 'gitReloadService'];

function hmGitReload($window, $timeout, gitReloadService) {
    var directive = {
        restrict: 'E',
        scope: {
            hash: '@'
        },
        link: linkFunction
    };

    return directive;

    function linkFunction(scope, element) {
        function autoReload() {
            gitReloadService.getHash().then(function(hash) {
                if (scope.hash != hash) {
                    $window.location.reload();
                }
            });

            $timeout(autoReload, 1000*10);
        }

        autoReload();

    }
}