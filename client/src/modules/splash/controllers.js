(function (Pistols) {

    Pistols.controller('Splash.DefaultCtrl', function ($scope, $state, LocaleService) {

        $scope.splash = LocaleService.Images.splash;

    });

})(angular.module('Pistols.splash'));
