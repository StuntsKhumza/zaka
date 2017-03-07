angular.module('login-app', ['ui.router', 'ngCookies'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('login', {
                controllerAs: 'loginController',
                templateUrl: "js/modules/login/login.html",
                url: '/login',
                controller: function ($scope, $state, $http, mySession, $stateParams, session, $cookieStore) {

                    if(session == 200){
                        $state.go('s-home');
                    }
// $scope.test = $cookieStore.get('name');
                    var self = this;
                    self.loginbObj = {
                        username: '',
                        password: '',
                        message: ''
                    }
                    self.login = function () {

                        $http.get('testlogin.php?username=' + self.loginbObj.username + "&password=" + self.loginbObj.password)
                            .then(function (res) {
                                if (res.data.status == 200) {

                                    //update session v 

                                    mySession.UserObj.isActive = true;
                                    mySession.UserObj.username = res.data.name;
                                    $cookieStore.put('name', res.data.name);
                                    $cookieStore.put('userActive', "1");

                                    $state.go('s-home');
                                } else {
                                    self.loginbObj.message = res.data.message;
                                }// 
                            })
                    }

                },
                resolve: {

                    session: function ($http) {

                        var session = $http.get('session.php?q=check_session');

                        return session.then(function (response) {

                            return response.data.status;

                        })
                    }
                }
            })
    })


