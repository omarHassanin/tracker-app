(function () {
    var mapApp = angular.module('main');

    mapApp.controller('MapController', function (CountryService, $routeParams, $location) {

        var self = this;


        self.HotelsObj = [];
        self.HospitalsObj = [];
        self.SchoolsObj = [];
        self.city = {};

        self.init = function () {

            console.log($routeParams);


            CountryService.getCityPlaces($routeParams.country, $routeParams.city).then(function (response) {

                console.log(response);
                city = response;


            })



        }

        var mapOptions = {
            zoom: 4,
            center: new google.maps.LatLng(25, 80),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }




        

        self.markers = [];

        self.map = new google.maps.Map(document.getElementById('map'), mapOptions);


        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (info) {
           

            var shape = {
                coords: [0, 0, 60],
                type: 'circle'
            };
            var marker = new google.maps.Marker({
                map:   self.map,
                position: new google.maps.LatLng(info.lat, info.longT),
                title: info.name ,
                shape : shape 
            });
            marker.content = '<div class="infoWindowContent">' + info.details + '<br />' + info.lat + ' E,' + info.longT + ' N, </div>';

            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.setContent('<h2>' + marker.title + '</h2>' +
                    marker.content);
                infoWindow.open(  self.map , marker);
            });

            self.markers.push(marker);
            console.log(self.markers);

        }





        self.openInfoWindow = function (e, selectedMarker) {
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        }

        self.showMarkers = function (place) {

            if (place === "Hotel") {

                self.markers = [] ;
                self.HotelsObj = city.hotels;
                self.map = new google.maps.Map(document.getElementById('map'), mapOptions);
                for (i = 0; i < self.HotelsObj.length; i++) {
                    console.log("test test ");
                    createMarker(self.HotelsObj[i]);
                }
            }

            if (place === "Hospital") {
                
                self.markers = [] ;
                self.HospitalsObj = city.hospitals;
                self.map = new google.maps.Map(document.getElementById('map'), mapOptions);

                for (i = 0; i < self.HospitalsObj.length; i++) {
                    console.log("test test ");
                    createMarker(self.HospitalsObj[i]);
                }
            }

            if (place === "SChool") {
                
                self.markers = [] ;
                self.SchoolsObj = city.schools;
                self.map = new google.maps.Map(document.getElementById('map'), mapOptions);

                for (i = 0; i < self.SchoolsObj.length; i++) {
                    console.log("test test ");
                    createMarker(self.SchoolsObj[i]);
                }

            }



        }

    });



})();