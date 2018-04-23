(function (Pistols) {

    Pistols.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state('location', {
            url: '/location',
            views: {
                'content-view': {
                    templateUrl: './modules/location/templates/default.html'
                }
            }
        });

    });

})(angular.module('Pistols.location'));
