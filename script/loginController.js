(function () {
    var main = angular.module("main");

    main.controller('loginController', function (CountryService, $location) {

        var self = this;

        
        self.name = "";
        self.username = ""
        self.password = "";



        self.goHome = function () {

            CountryService.login(self.name, self.password).then(function (Response) {
                console.log(Response);
                $location.path('/home');

            }, function (error) {
                console.log(error);
                self.ErrorMessage = "Incorrect username or Password pleaze try again !" ;
                $location.path('/');
            })



        };

        self.regist = function () {


            $location.path('/signup');



        };

        self.login = function () {

            self.message = "";
            $location.path('/');



        };

        self.finishRegist = function () {

            if (self.username == "" || self.name == "" || self.password == "") {

                self.ErrorMessage = "some data Required !";
                return;

            } else {

                var user = {

                    username: self.username,
                    name: self.name,
                    password: self.password,



                }



                var jsonData = JSON.stringify(user);
                CountryService.signup(jsonData).then(function () {
                    self.ErrorMessage = undefined ;
                    self.SuccessMessage = "register Successfully !";
                });

            }

        }



    });

})();