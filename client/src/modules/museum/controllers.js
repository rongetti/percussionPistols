(function (Pistols) {

    Pistols.controller('Museum.DefaultCtrl', function ($scope, $state, $sce, LocaleService) {

        var Text = LocaleService.Strings.museum;

        $scope.address = Text.address;
        $scope.tel = Text.tel;
        $scope.fax = Text.fax;
        $scope.email = Text.email;
        $scope.site = Text.site;
        $scope.working = Text.working;
        $scope.hours = $sce.trustAsHtml(Text.hours);
        $scope.prices = Text.prices;
        $scope.adults = Text.adults;
        $scope.adultgroup = Text.adultgroup;
        $scope.children = Text.children;
        $scope.childrengroup = Text.childrengroup;
        $scope.entryinfo = Text.entryinfo;

    });

})(angular.module('Pistols.museum'));
