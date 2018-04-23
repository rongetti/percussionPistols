(function (Pistols) {

    Pistols.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state('menu', {
            url: '/menu',
            views: {
                'content-view': {
                    templateUrl: './modules/menu/templates/default.html'
                }
            }
        });

    });

})(angular.module('Pistols.menu'));
