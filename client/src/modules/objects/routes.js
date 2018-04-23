(function (Pistols) {

    Pistols.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state('objects', {
            url: '/objects',
            views: {
                'content-view': {
                    templateUrl: './modules/objects/templates/default.html'
                }
            }
        });

        $stateProvider.state('objects.menu', {
            url: '/menu',
            views: {
                'objects-view': {
                    templateUrl: './modules/objects/templates/objects.menu.html'
                }
            }
        });

        $stateProvider.state('objects.list', {
            url: '/list/:category',
            views: {
                'objects-view': {
                    templateUrl: './modules/objects/templates/objects.list.html'
                }
            },
            params: {
                category: null
            }
        });

        $stateProvider.state('objects.details', {
            url: '/details/:category/:item',
            views: {
                'objects-view': {
                    templateUrl: './modules/objects/templates/objects.details.html'
                }
            },
            params: {
                category: null,
                item: null
            },
            resolve: {
                scroll: function (ScrollService){
                    ScrollService.scroll();
                }
            }
        });

    });

})(angular.module('Pistols.objects'));
