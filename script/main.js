(function () {
    var main = angular.module("main", ["ngRoute" , "ngCookies"]);

    main.controller('mainController', function (CountryService, $location) {

        var self = this;

        self.init = function () {
                       

        }

        self.name = "";


      
       
    });


    main.config(function ($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: '/Login_v17/Login_v17/login.html',
            controller: 'loginController'
        }).when('/signup', {
            templateUrl: '/Login_v17/Login_v17/signup.html',
            controller: 'loginController'
        }).when('/home', {
            templateUrl: '/Home.html',
            controller: 'HomeController'
        }).when('/Dashboard', {
            templateUrl: '/Dashboard.html',
            controller: 'DashboardController'
        }).when('/map/:country/city/:city', {
            templateUrl: '/google-maps.html',
            controller: 'MapController'
        }).otherwise({
            redirectTo: "/"
        });

    });

})();