var dataTosend="";
var loading = false;
var current_page = 2;
var oldscroll = 0;
var total_pages = 500;
var scroll = true;
var hotel = [];


$( document ).ready(function() {
$("#map").on("click", function(e){
	$(location).attr('href', '../../Hotel/list/')
	//window.location.href = "/../Hotel/create/";
});
$(window).scroll(function() { //detect page scroll
				if(($(window).scrollTop() + $(window).height() + 1 >= $(document).height()) && scroll){
          dataTosend='op='+"scroll"+'&page='+current_page;
          $.ajax({
            type: "POST",
            url: "../home/scroll",
            data: dataTosend,
            datatype :'json',
            success: function(data){
              var json = JSON.parse(data);
              var html = $(".posts").html();
              json.forEach(function(element) {
                html=html+'<article>'+
                  '<a class="image"><img src="'+element.imagen+'" alt="" /></a>'+
                  '<h3>'+element.nombre+'</h3>'+
                  '<p>'+element.fecha_entrada+' - '+ element.fecha_salida+'</p>'+
                  '<p>'+element.municipio+', '+ element.provincia+', '+element.comunidad+'</p>'+
                  '<ul class="actions">'+
                  '<li><div class="button id" id='+element.id+'>More</div></li>'+
                  '</ul>'+
                '</article>';
              });
              $(".posts").html(html);
							current_page++;
            }});
        }
      });
/*end scroll
*/
dataTosend='op='+"name";
$.ajax({
  type: "POST",
  url: "../home/name",
  data: dataTosend,
  datatype :'json',
  success: function(data){
    var json = JSON.parse(data);
    var names = [];
    json.forEach(function(element) {
      names.push(element.nombre);
    });
    $( function() {
    $( "#query" ).autocomplete({
      source: names,
      autofocus : true,
      select : function(a,event){
        dataTosend='op='+"search"+"&nombre="+event.item.value;
        $.ajax({
          type: "POST",
          url: "../home/search",
          data: dataTosend,
          datatype :'json',
          success: function(data){
            hotel = JSON.parse(data);
						var pages = 0;
						if(hotel.length % 6 != 0){
							pages = Math.floor(hotel.length/6)+1;
						}else{
							pages = hotel.length/6;
						}
						$('#show_paginator').show();
						$('#show_paginator').bootpag({
						      total: pages,
						      page: 1,
						      maxVisible: 5
						}).on('page', function(event, num)
						{
							var i = 0;
							html = "";
							hotel.forEach(function(element) {
								if(i>=((num-1)*6) && (num*6)>i){
									html=html+'<article>'+
		                '<a class="image"><img src="'+element.imagen+'" alt="" /></a>'+
		                '<h3>'+element.nombre+'</h3>'+
		                '<p>'+element.fecha_entrada+' - '+ element.fecha_salida+'</p>'+
		                '<p>'+element.municipio+', '+ element.provincia+', '+element.comunidad+'</p>'+
		              '</article>';
								}
								i++;
	            });
	            $(".posts").html(html);
						});
            var html = "";
						var i = 0;
            hotel.forEach(function(element) {
							if(i<=5){

								html=html+'<article>'+
				          '<a class="image"><img src="'+element.imagen+'" alt="" /></a>'+
				          '<h3>'+element.nombre+'</h3>'+
				          '<p>'+element.fecha_entrada+' - '+ element.fecha_salida+'</p>'+
				          '<p>'+element.municipio+', '+ element.provincia+', '+element.comunidad+'</p>'+
				          '<ul class="actions">'+
				          '<li><div class="button id" id='+element.id+'>More</div></li>'+
				          '</ul>'+
				        '</article>';}
							i++;
            });
            $(".posts").html(html);
						$(".id").on("click", function(e){
			        var id=this.getAttribute('id');
			        dataTosend='op='+"details"+"&id="+id;
			        $.ajax({
			          type: "POST",
			          url: "../home/details/",
			          data: dataTosend,
			          datatype :'json',
			          success: function(data){
									console.log(data);
			            json = JSON.parse(data);
									console.log(json);
			                   var info = [];
			                   var image = "";
			                   json.forEach(function(element) {
			                     image="<img src='"+ element.imagen +"' alt='done'>";
			                     $("#image").html(image);
			                     $("#nombre").html(element.nombre);
			                     $("#fecha_entrada").html(element.fecha_entrada);
			                     $("#fecha_salida").html(element.fecha_salida);
			                     $("#municipio").html(element.municipio);
			                     $("#provincia").html(element.provincia);
			                     $("#comunidad").html(element.comunidad);
			                     $("#calidad").html(element.estrellas + " estrellas");
			                     $("#wifi").html(element.wifi);
			                     $("#piscina").html(element.piscina);
			                     $("#playa").html(element.playa);
			                     $("#actividades").html(element.actividades);
			                     $("#comida").html(element.comida);
			                     $("#spa").html(element.spa);
			                     $("#observaciones").html(element.observaciones);
			                   });



			                   $("#details_hotel").show();

			                   $("#hotel_modal").dialog({
			                       width: 850, //<!-- ------------- ancho de la ventana -->
			                       height: 500, //<!--  ------------- altura de la ventana -->
			                       //show: "scale", <!-- ----------- animación de la ventana al aparecer -->
			                       //hide: "scale", <!-- ----------- animación al cerrar la ventana -->
			                       resizable: "false", //<!-- ------ fija o redimensionable si ponemos este valor a "true" -->
			                       //position: "down",<!--  ------ posicion de la ventana en la pantalla (left, top, right...) -->
			                       modal: "true", //<!-- ------------ si esta en true bloquea el contenido de la web mientras la ventana esta activa (muy elegante) -->
			                       buttons: {
			                           Ok: function () {
			                               $(this).dialog("close");
			                           }
			                       },
			                       show: {
			                           effect: "blind",
			                           duration: 500
			                       },
			                       hide: {
			                           effect: "explode",
			                           duration: 500
			                       }
			                   });


			          }
			        });
			      });
						scroll = false;

          }
        });
      }});
    });
  }
});
  dataTosend='op='+"list";
  $.ajax({
    type: "POST",
    url: "../home/list",
    data: dataTosend,
    datatype :'json',
    success: function(data){
      var json = JSON.parse(data);
      var html = "";
      json.forEach(function(element) {
        html=html+'<article>'+
          '<a class="image"><img src="'+element.imagen+'" alt="" /></a>'+
          '<h3>'+element.nombre+'</h3>'+
          '<p>'+element.fecha_entrada+' - '+ element.fecha_salida+'</p>'+
          '<p>'+element.municipio+', '+ element.provincia+', '+element.comunidad+'</p>'+
          '<ul class="actions">'+
          '<li><div class="button id" id='+element.id+'>More</div></li>'+
          '</ul>'+
        '</article>';
      });

      $(".posts").html(html);
      $(".id").on("click", function(e){
        var id=this.getAttribute('id');
        dataTosend='op='+"details"+"&id="+id;
        $.ajax({
          type: "POST",
          url: "../home/details/",
          data: dataTosend,
          datatype :'json',
          success: function(data){
						console.log(data);
            json = JSON.parse(data);
						console.log(json);
                   var info = [];
                   var image = "";
                   json.forEach(function(element) {
                     image="<img src='"+ element.imagen +"' alt='done'>";
                     $("#image").html(image);
                     $("#nombre").html(element.nombre);
                     $("#fecha_entrada").html(element.fecha_entrada);
                     $("#fecha_salida").html(element.fecha_salida);
                     $("#municipio").html(element.municipio);
                     $("#provincia").html(element.provincia);
                     $("#comunidad").html(element.comunidad);
                     $("#calidad").html(element.estrellas + " estrellas");
                     $("#wifi").html(element.wifi);
                     $("#piscina").html(element.piscina);
                     $("#playa").html(element.playa);
                     $("#actividades").html(element.actividades);
                     $("#comida").html(element.comida);
                     $("#spa").html(element.spa);
                     $("#observaciones").html(element.observaciones);
                   });



                   $("#details_hotel").show();

                   $("#hotel_modal").dialog({
                       width: 850, //<!-- ------------- ancho de la ventana -->
                       height: 500, //<!--  ------------- altura de la ventana -->
                       //show: "scale", <!-- ----------- animación de la ventana al aparecer -->
                       //hide: "scale", <!-- ----------- animación al cerrar la ventana -->
                       resizable: "false", //<!-- ------ fija o redimensionable si ponemos este valor a "true" -->
                       //position: "down",<!--  ------ posicion de la ventana en la pantalla (left, top, right...) -->
                       modal: "true", //<!-- ------------ si esta en true bloquea el contenido de la web mientras la ventana esta activa (muy elegante) -->
                       buttons: {
                           Ok: function () {
                               $(this).dialog("close");
                           }
                       },
                       show: {
                           effect: "blind",
                           duration: 500
                       },
                       hide: {
                           effect: "explode",
                           duration: 500
                       }
                   });


          }
        });
      });

    }
  });



});
