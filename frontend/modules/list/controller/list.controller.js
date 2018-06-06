hotel.controller('detailsCtrl', function ($scope, services, oferta) {
    $scope.hotel = oferta[0];
});

hotel.controller('listCtrl', function ($scope, services, list) {
    $scope.list = list;
    var maker;
    var a = [];
    var hotel = [];
    var i = 0;
    function initMap() {
      var myLatLng = {lat: 40.4167, lng: -3.70325};

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: myLatLng
      });
      angular.forEach($scope.list, function(value, key) {
        var content = value.nombre + " <br> "+value.municipio+" <br> <a href=#/list/details/"+value.id+">Details</a>";
        var infowindow = new google.maps.InfoWindow();
        marker = new google.maps.Marker({
          map: map,
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: {lat: value.lat, lng: value.lng}
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(content);
            infowindow.open(map, marker);
          }
        })(marker, i));
        i++;
      });

    }
    initMap();
});
