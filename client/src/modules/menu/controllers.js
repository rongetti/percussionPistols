(function (Pistols) {

    Pistols.controller('Menu.DefaultCtrl', function ($scope, $state, LocaleService) {

        var Text = LocaleService.Strings.mainMenu;

        $scope.objects = Text.objects;
        $scope.QR = Text.QR;
        $scope.location = Text.location;
        $scope.museum = Text.museum;

    });

})(angular.module('Pistols.menu'));
