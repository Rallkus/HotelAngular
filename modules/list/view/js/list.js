var maker;
var a = [];
var hotel = [];
function initMap() {
  var myLatLng = {lat: 40.4167, lng: -3.70325};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: myLatLng
  });
  $.ajax({
    type: "POST",
    url: "../list/list",
    datatype :'json',
    success: function(data){
      var i = 0;
  var json = JSON.parse(data);
  json.forEach(function(element) {
    hotel.push(element);
    var content = element.nombre + " <br> "+element.municipio+" <br> <a href="+ amigable2('?module=list&function=details&aux='+element.id) +">Details</a>";
    $.ajax({
      url: "https://maps.googleapis.com/maps/api/geocode/json?address="+element.municipio+"&key=AIzaSyDPKdo_uyKw27vzZ4xB-4xRUjkMkemGZCQ",
      success: function(data){
        console.log(i);
        console.log(element);
        a = Object.values(data.results);
      //  var json = JSON.parse(data);
      var infowindow = new google.maps.InfoWindow();
      console.log(a);
        a.forEach(function(element) {
          marker = new google.maps.Marker({
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: {lat: element.geometry.location.lat, lng: element.geometry.location.lng}
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
    });
    console.log(hotel);
  });}

});
}

$( document ).ready(function() {
  initMap();


});
