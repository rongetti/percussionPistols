(function (angular) {

    angular.element(document).ready(function () {
        if (window.cordova) { // Running in Cordova, bootstrap AngularJS once 'deviceready' event fires
            if (console && console.warn) console.warn('Device mode detected.');
            document.addEventListener('deviceready', function () { // Cordova deviceready
                document.addEventListener('backbutton', onBackKeyDown, false);
                angular.bootstrap(document.body, ['Pistols']);
            }, false);
        } else {
            angular.bootstrap(document.body, ['Pistols']);
        }
    });

    function onBackKeyDown () { // disable Android back button
        return false;
    }

})(angular);

(function (Pistols) {

    Pistols.run(function ($rootScope, $state, $timeout, $log) {

        // $state.go('language');

    });

})(angular.module('Pistols'));
