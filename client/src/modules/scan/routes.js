(function (Pistols) {

    Pistols.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state('scan', {
            url: '/scan',
            views: {
                'content-view': {
                    templateUrl: './modules/scan/templates/default.html'
                }
            }
        });

    });

})(angular.module('Pistols.scan'));
