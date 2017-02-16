angular.module('login-app', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('login', {
                controllerAs: 'loginController',
                templateUrl: "js/modules/login/login.html",
                url: '/login',
                controller: function ($scope, $state, $http, mySession, $stateParams ) {

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
                                    
                                    $state.go('s-home');
                                } else {
                                    self.loginbObj.message = res.data.message;
                                }// 
                            })
                    }

                },
                resolve: {

                    /*session: function (serviceSession) {
    
                        var data = serviceSession.getSession();
    
                        return data.then(function (res) {
    
                            return res.status; 
    
                        })
                } */
                }
            })
    })


