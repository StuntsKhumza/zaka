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
            controller: function ($scope, mySession,$state, $http) {

                var self = this;
                self.sessionV = getName(); //mySession.UserObj;
                
                console.log('2');
                console.log(self.sessionV);

                function getName(){

                    return mySession.UserObj;

                }
                self.logout = function(){
                    $http.get('session.php?q=close_session');

                    $state.go('login');
                }
                    
            }
        }
    })