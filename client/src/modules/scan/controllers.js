(function (Pistols) {

    Pistols.controller('Scan.DefaultCtrl', function ($scope, $state, LocaleService, ScanService) {

        var Text = LocaleService.Strings.scan;

        $scope.scan = Text.scan;
        $scope.scanCode = ScanService.scanCode;

    });

})(angular.module('Pistols.scan'));
