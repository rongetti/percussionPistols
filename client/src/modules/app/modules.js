(function (Pistols) {

    angular.module(Pistols, [
        'ui.router',
        'ui.router.state.events', // See $stateChange event polyfill.. https://ui-router.github.io/guide/ng1/migrate-to-1_0
        'Pistols.language',
        'Pistols.splash',
        'Pistols.menu',
        'Pistols.objects',
        'Pistols.scan',
        'Pistols.location',
        'Pistols.museum'
    ]);

})('Pistols');
