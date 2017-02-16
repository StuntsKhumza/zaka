angular.module('nav-app', [])
    .directive('navigationN', function () {
        return {
            restrict: 'E',
            templateUrl: 'js/modules/utils/nav/nav.html',
            controllerAs: 'navCtr',
            scope: {
                username: '='
            }
            ,
            controller: function ($scope, mySession) {

                var self = this;
                self.sessionV = mySession.UserObj;

                console.log(self.sessionV);
                    
            }
        }
    })