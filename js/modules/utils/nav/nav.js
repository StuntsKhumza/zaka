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
            controller: function ($scope, mySession,$state) {

                var self = this;
                self.sessionV = mySession.UserObj;

                console.log(self.sessionV);

                self.logout = function(){
                    $http.get('session.php?q=close_session');
                    $state.go('login');
                }
                    
            }
        }
    })