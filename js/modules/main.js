angular.module('main-app', 
['ui.router', 
'home-app', 
'history-app',
'login-app',
'nav-app'
])
    .config(function ($stateProvider, $urlRouterProvider) {
      
      /*default state when none of the others can be*/
        $urlRouterProvider.otherwise('/login');
    })

    .service('mySession', function($q){

        var self = this;

        self.UserObj = {
            isActive: false,
            name: ''
        }

        

        /*self.checkLogin =*/ function checkLogin(){   
            if(angular.isDefined(this.UserObj)) return $q.when(self.UserObj);

            return self.UserObj;
        }

        return self;
        
    })

