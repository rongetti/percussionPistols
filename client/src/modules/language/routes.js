(function (Pistols) {

    Pistols.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state('language', {
            url: '/language',
            views: {
                'content-view': {
                    templateUrl: './modules/language/templates/default.html'
                }
            }
        });

    });

})(angular.module('Pistols.language'));
