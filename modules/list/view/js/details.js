
$( document ).ready(function() {
  var url = window.location.href;
  url = url.split("/");
  dataTosend="id="+url[6];
  $.ajax({
    type: "POST",
    url: "../../list/details_hotel/",
    data: dataTosend,
    datatype :'json',
    success: function(data){
      var json = JSON.parse(data);
      console.log(data);
      json.forEach(function(element) {
        $("#details").html('<span class="image main"><img src="'+element.imagen+'" alt="" /></span>');
        $("#details").append('<p>Nombre: '+element.nombre+'</p>');
        $("#details").append('<p>Fecha de entra: '+element.fecha_entrada+'</p>');
        $("#details").append('<p>Fecha de salida: '+element.fecha_salida+'</p>');
        $("#details").append('<p>Municipio: '+element.municipio+'</p>');
        $("#details").append('<p>Provincia: '+element.provincia+'</p>');
        $("#details").append('<p>Comunidad: '+element.comunidad+'</p>');
        $("#details").append('<p>Estrellas: '+element.estrellas+' estrellas</p>');
        $("#details").append('<p>Tiene wifi: '+element.wifi+'</p>');
        $("#details").append('<p>Tiene piscina: '+element.piscina+'</p>');
        $("#details").append('<p>Tiene playa: '+element.playa+'</p>');
        $("#details").append('<p>Tiene actividades: '+element.actividades+'</p>');
        $("#details").append('<p>Incluye comida: '+element.comida+'</p>');
        $("#details").append('<p>Tiene spa: '+element.spa+'</p>');
        $("#details").append('<p>Observaciones: '+element.observaciones+'</p>');
      });
    }});
});
