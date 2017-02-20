angular.module('home-app', ['ui.router', 'acc-app', 'nav-app'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('s-home', {
                controllerAs: 'homeController',
                templateUrl: "js/modules/home/home.html",
                url: '/home/:session',
                controller: function ($scope, $state, $http, mySession, $stateParams, session) {

                    if (session != 200){
                        $state.go('login');
                        return;
                    }

                    var self = this;
                    self.homeObj = null;
                    self.homeProperties = {
                        enableAdd: false,
                        currentRow: null,
                        total: 0,
                        name: mySession.UserObj.name
                    }

                    self.formData = {
                        accname: '',
                        accbalance: '',
                        pm: ''
                    };

                    self.test = "testing";
                    self.searching = true;

                    $http.get('testdata.json')
                        .then(function (res) {

                            self.homeObj = res.data;
                            self.searching = false;
                            self.getTotal();
                        })

                    self.showAdd = function () {

                        self.clearFormData();

                        self.homeProperties.enableAdd = true;

                        //                      self.homePropertie.currentRow = null;

                    }
                    self.clearFormData = function () {
                        self.formData = {
                            accname: '',
                            accbalance: '',
                            pm: ''
                        };

                    }
                    self.saveNewAccount = function () {
                        var data = {
                            accountname: self.formData.accname,
                            balance: self.formData.accbalance,
                            pm: self.formData.pm
                        };

                        self.homeProperties.enableAdd = false;
                        self.homeObj.data.push(data);

                        self.getTotal();

                    }

                    self.close = function () {
                        self.clearFormData();
                        self.homeProperties.enableAdd = false;
                    }

                    self.getTotal = function () {
                        var total = 0;

                        for (var i = 0; i < self.homeObj.data.length; i++) {


                            total = total + self.homeObj.data[i].balance;
                        }

                        //self.homeProperties
                        self.homeProperties.total = total;

                    }

                },
                resolve: {

                    session: function ($http) {

                        var session = $http.get('session.php?q=check_session');

                        return session.then(function (response) {

                            return response.data.status;

                        })

                        /*
                        var data = serviceSession.getSession();

                        return data.then(function (res) {

                            return res.status;

                        }) */
                    }
                }
            })
    })


