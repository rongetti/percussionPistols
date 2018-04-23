(function (Pistols) {

    Pistols.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state('museum', {
            url: '/museum',
            views: {
                'content-view': {
                    templateUrl: './modules/museum/templates/default.html'
                }
            }
        });

    });

})(angular.module('Pistols.museum'));
