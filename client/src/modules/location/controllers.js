(function (Pistols) {

    Pistols.controller('Location.DefaultCtrl', function ($scope, $state, $sce, uiGmapGoogleMapApi, LocaleService) {

        var Text = LocaleService.Strings.location;

        $scope.transport = Text.transport;
        $scope.locationinfo = $sce.trustAsHtml(Text.locationinfo);
        $scope.transportinfo = $sce.trustAsHtml(Text.transportinfo);

        $scope.map = {center: {latitude: 44.822, longitude: 20.450}, zoom: 16};
        $scope.marker = {
            id: 0,
            coords: {
                latitude: 44.822,
                longitude: 20.450
            }
        };

    });

})(angular.module('Pistols.location'));
