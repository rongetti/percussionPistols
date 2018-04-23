(function (Pistols) {

    Pistols.factory('ScrollService', function ($window){
        return {
            scroll: function(){
                $window.scrollTo(0, 0);
            }
        };
    });

})(angular.module('Pistols.Services', []));
