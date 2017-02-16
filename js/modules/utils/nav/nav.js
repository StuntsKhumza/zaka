angular.module('nav-app', [])
    .directive('navigationN', function () {
        return {
            restrict: 'E',
            templateUrl: 'js/modules/utils/nav/nav.html',
            controllerAs: 'navController',
            scope: {
                username: '='
            }
            ,
            controller: function ($scope) {

                var self = this;

            }
        }
    })