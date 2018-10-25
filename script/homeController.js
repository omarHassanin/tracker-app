(function () {
    var mapApp = angular.module('main');



    self.ErrorMessage = "" ;

    mapApp.controller('HomeController', function (CountryService, $routeParams, $location , $cookies) {

        var self = this;

        self.countries = [];

        self.country = "";
        self.city = "";

        self.logout = function (){
            
            $cookies.userInfo = undefined; 
            $location.path('/');
        
        }


        self.init = function () {

            CountryService.getCountries().then(function (response) {
                console.log("test test ets ")
                console.log(response);
                self.countries = response.data;

                /*  for (i = 0; i < self.cities.length; i++) {
 
                     createMarker(self.cities[i]);
                 } */

            });



            // self.init();

        }

        self.SetCountryANDCityNames = function (country, city) {
            self.country = country;
            self.city = city;
           console.log(self.country);

        }

        self.getPlaces = function () {

            $location.path('/map/'+self.country+'/city/'+self.city);

        }

        self.goDashboard = function(){
             CountryService.AcessDashboard().then( function(response){
               console.log(response); 
                $location.path('/Dashboard');

             }  , function(error){
               
                console.log(error);
                self.ErrorMessage = "Acess denied Admins AREA ! "


             } );
          
        }

        self.closeAlert = function(){

            self.ErrorMessage = undefined ;
        }


    });
})();    