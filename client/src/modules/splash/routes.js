(function (Pistols) {

    Pistols.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state('splash', {
            url: '/splash',
            views: {
                'content-view': {
                    templateUrl: './modules/splash/templates/default.html'
                }
            }
        });

    });

})(angular.module('Pistols.splash'));
