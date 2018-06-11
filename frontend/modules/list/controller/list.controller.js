hotel.controller('detailsCtrl', function ($scope, services, oferta, localStorage, total, average) {
    $scope.hotel = oferta[0];
    $scope.id = $scope.hotel.id;
    $scope.total=total;
    $scope.average=average;
    console.log($scope.total[0].count);
    console.log($scope.average[0].rating);
    $scope.tokken = localStorage.retrieve("tokken");

    $scope.Like = function () {
      if($scope.tokken !== undefined){
        var data = {"tokken": $scope.tokken, "id": $scope.id};
        var likes = JSON.stringify(data);
        services.post('login', 'likes', likes).then(function (response) {
          console.log(response);
          toastr.info("Usted le ha dado a like!");
        });
      }else{
        toastr.info("Necesitas estar logueado para darle a like");
      }
    };
    $scope.Opinion = function (element) {
      console.log(element.target.id);
      if($scope.tokken !== undefined){
        var data = {"tokken": $scope.tokken, "id": $scope.id, "rating": element.target.id};
        var opinion = JSON.stringify(data);
        services.post('login', 'insert_opinion', opinion).then(function (response) {
          console.log(response);
          toastr.info("Gracias por valorar nuestras ofertas");
        });
      }else{
        toastr.info("Necesitas estar logueado para darle a like");
      }
    };
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
