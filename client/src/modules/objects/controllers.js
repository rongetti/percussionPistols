(function (Pistols) {

    Pistols.controller('Objects.DefaultCtrl', function ($scope, $state, $sce, LocaleService) {

        var Text = LocaleService.Strings.objects;

        $scope.convert = Text.convert.title;
        $scope.percuss = Text.percuss.title;
        $scope.militar = Text.militar.title;
        $scope.revolv = Text.revolv.title;

        var currSlide = {index: 0};

        $scope.slickConfig = {
            dots: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: ".arrow-left",
            nextArrow: ".arrow-right",
            variableWidth: true,
            event: {
                afterChange: function (event, slick, currentSlide, nextSlide) {
                    currSlide.index = currentSlide;
                },
                init: function (event, slick) {
                    slick.slickGoTo(currSlide.index,true);
                }
            }
        };

    });

    Pistols.controller('Objects.ListCtrl', function ($scope, $state, $stateParams, $sce, LocaleService) {

        var category = $stateParams.category;
        var Text = LocaleService.Strings.objects[category];

        $scope.title = Text.title;
        $scope.desc = $sce.trustAsHtml(Text.desc);
        $scope.items = Text.items;
        $scope.category = category;

    });

    Pistols.controller('Objects.DetailsCtrl', function ($scope, $state, $stateParams, $sce, LocaleService) {

        var category = $stateParams.category;
        var item = $stateParams.item;
        var Text = LocaleService.Strings.objects[category].items[item - 1];

        $scope.imgSmall = Text.imgSmall;
        $scope.imgLarge = Text.imgLarge;
        $scope.title = Text.title;
        $scope.location = Text.location;
        $scope.date = Text.date;
        $scope.maker = Text.maker;
        $scope.number = Text.number;
        $scope.desc = $sce.trustAsHtml(Text.desc + '<br><br>' + Text.length + '<br>' + Text.barrel + '<br>' + Text.cal + '<br>' + Text.capacity);

        $scope.showImage = false;

        $scope.zoomIn = function () {
            $scope.showImage = true;
        };

        $scope.zoomOut = function () {
            $scope.showImage = false;
        };

    });

})(angular.module('Pistols.objects'));
