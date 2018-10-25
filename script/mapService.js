(function () {

    var app = angular.module("main");

    app.service("CountryService", function ($http) {


        var self = this;



        self.getCountries = function () {



            var promise1 = $http({
                url: "https://waslny-app.herokuapp.com/view_data",
                method: "GET",
                // params: {selected_country: country} , 
                withCredentials: true,

            });
            // console.log(promise1);
            var promise2 = promise1.then(function (response) {

                return response.data;
            });

            return promise1;

        }

        self.getCityPlaces = function (country, city) {

            var promise1 = $http({
                url: "https://waslny-app.herokuapp.com/view_places",
                method: "GET",
                params: { selected_country: country, selected_city: city },
                withCredentials: true,

            });
            //console.log(promise1);
            var promise2 = promise1.then(function (response) {

                return response.data;
            });

            return promise2;


        }


        self.DeleteCountry = function (DeletedCountries) {

            var promise1 = $http({
                url: "https://waslny-app.herokuapp.com/RemoveCountry",
                method: "POST",
                data: DeletedCountries,
                withCredentials: true,
                headers: {
                    'Authorization': 'Basic ' + btoa("Omar" + ":" + "123"),
                    'Content-Type': 'application/json'
                }
            });

            var promise2 = promise1.then(function (response) {

                return response.data;

            });

            return promise2;

        }



        self.deleteCity = function (country, city) {

            var promise1 = $http({
                url: "https://waslny-app.herokuapp.com/RemoveCity",
                method: "POST",
                params: { country: country, city: city },
                withCredentials: true,

            });

            var promise2 = promise1.then(function (response) {

                return response.data;

            });

            return promise2;

        }


        self.login = function (username, password) {

            self.username = username;
            self.password = password;
            var promise1 = $http({
                url: " https://waslny-app.herokuapp.com/login",
                method: "POST",

                withCredentials: true,
                params: { userName: username, password: password },
                headers: {
                    'Authorization': 'Basic ' + btoa(username + ":" + password),

                }
            });

            var promise2 = promise1.then(function (response) {

                return response.data;

            });

            return promise2;
        }


        self.signup = function (jsonUser) {

            var promise1 = $http({
                url: "https://waslny-app.herokuapp.com/SignUP",
                method: "POST",

                withCredentials: true,
                data: jsonUser,

            });

            var promise2 = promise1.then(function (response) {

                return response.data;

            });

            return promise2;
        }


        self.AcessDashboard = function () {

            var promise1 = $http({
                url: "https://waslny-app.herokuapp.com/Dashboard",
                method: "GET",

                withCredentials: true,


            });

            var promise2 = promise1.then(function (response) {

                return response.data;

            });

            return promise2;
        }








    });












})();