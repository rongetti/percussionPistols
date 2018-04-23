(function (Pistols) {

    Pistols.controller('Language.DefaultCtrl', function ($scope, $rootScope, $state, LocaleService) {

        $scope.setLanguage = function (language) {
            LocaleService.setLanguage(language);
            $state.go('splash');
        };

    });

})(angular.module('Pistols.language'));
