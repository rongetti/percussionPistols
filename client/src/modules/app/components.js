(function (Pistols) {

    Pistols.directive('navHeader', function () {
        return {
            restrict: 'E',
            templateUrl: './modules/app/templates/nav-header.html'
        };
    });

})(angular.module('Pistols'));
