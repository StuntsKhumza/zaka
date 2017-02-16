angular.module('history-app', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('s-history', {
                controllerAs: 'historyController',
                templateUrl: "js/modules/history/history.html",
                url: '/history',
                controller: function ($scope, $state, $http) {},
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


