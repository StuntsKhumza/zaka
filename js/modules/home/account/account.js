angular.module('acc-app', [])
    .directive('acc', function () {
        return {
            restrict: 'E',
            scope: {
                accdata: '=',
                homeproperties: '=homeproperties',
                formData: '=formData'
            },
            templateUrl: 'js/modules/home/account/account.html',
            controllerAs: 'accController',
            controller: function ($scope) {

                var self = this;

                self.removeItem = function (id) {
                    $scope.accdata.data.splice(id, 1);
                }

                self.editItem = function (id) {

                    $scope.formData.accname = $scope.accdata.data[id].accountname;
                    $scope.formData.accbalance = $scope.accdata.data[id].balance;
                    $scope.formData.pm = $scope.accdata.data[id].pm;
                    $scope.homeproperties.enableAdd = true;

                }


            }
        }
    })