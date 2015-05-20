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
            console.log("get new hash");
            var hash = gitReloadService.getHash().then(function(hash) {
                console.log(scope.hash, hash, scope.hash != hash);
                if (scope.hash != hash) {
                    console.log('reloaded');
                    //$window.reload();
                }
            });

            $timeout(autoReload, 1000*10);
        }

        autoReload();

    }
}