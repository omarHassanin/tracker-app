(function () {
    var main = angular.module("main");

    main.controller('DashboardController', function (CountryService, $location) {

        var self = this;

        self.countries = [];

        

        self.item = "";

        self.selectedCountries = [];

        self.selectedCities = [] ; 


        self.init = function () {

            CountryService.getCountries().then(function (response) {
                console.log("test test ets ");
                console.log(response.data);
                self.countries = response.data;

                /*  for (i = 0; i < self.cities.length; i++) {
 
                     createMarker(self.cities[i]);
                 } */

            });



            // self.init();

        }

        self.SetCountryANDCityNames = function (country, city) {
            var country1 = self.countries[country];
            var city1 = self.countries[country].state[city];

            self.countries[country].state.splice(city , 1);
            console.log(country1);
            console.log(city1);
            
           CountryService.deleteCity(country1.place , city1.place).then( function(response){
                
              console.log(response);
              self.SuccessMessage = "DELETED !"
               
            } , function(error){
                
                console.log(error);
  
                self.ErrorMessage = "FAILED Some issues on server" ; 
            } );

        }


        self.DeleteItem = function () {
            

            for(i=0 ; i < self.selectedCountries.length ; i++){
                
                for(j=0 ; j<self.countries.length ; j++){

                    if( self.countries[j] == self.selectedCountries[i] ){

                         self.countries.splice(j, 1);
                         
                    }
                }
               
            }

            var jsonData = JSON.stringify(self.selectedCountries);
            CountryService.DeleteCountry(jsonData).then( function(response){
                
                console.log(response);
                self.SuccessMessage = "DELETED !"
                 
              } , function(error){
                    
                  self.ErrorMessage = "FAiled SOME Issue" ; 
              } );

               self.selectedCountries = [] ;
        } 




        
        self.isSelected = function (country) {
           
            console.log("test");
            return self.selectedCountries.indexOf(country) > -1 ;
            
        }

        self.toggleItem = function (country , index) {

            if( self.selectedCountries.indexOf(country) > -1){
               
                var  index  =  self.selectedCountries.indexOf(country);
                delete self.selectedCountries[index]; 
            }else {
                console.log(country);  
                self.selectedCountries.push(country);
                console.log(index);

            }
        }


        self.closeErrorAlert = function(){
               
            self.ErrorMessage = undefined ;
         }

         self.closeSuccessAlert = function(){
               
            self.SuccessMessage = undefined ; 
         }


        self.goHome = function(){

            $location.path('/home');
        }


    });


})();
