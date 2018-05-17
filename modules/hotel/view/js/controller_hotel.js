/* Declaración de variables */

var Api_key="0961dd42004c124daaebd5847fb02202c7b77c46a3206f1e1e959effe6d4ff2a";
var comunidades = [];
var id_comunidad="";
var provincias=[];
var id_provincia ="";
var municipios = [];

var check = true;

/* Fin declaración variables */
Dropzone.autoDiscover = false;

/* Funciones para rellenar los selects con la api de geoapi*/

function get_comunidades(){
  $.ajax({
    //type: "GET",
    url: "http://apiv1.geoapi.es/comunidades?type=JSON&key="+Api_key+"&sandbox=0",
    success: function(data){
      console.log(data);
      comunidades = Object.values(data.data);
      fill_comunidades();
    }
  });
}
function get_provincias(){
  $.ajax({
    url: "http://apiv1.geoapi.es/provincias?CCOM="+id_comunidad+"&type=JSON&key="+Api_key+"&sandbox=0",
    success: function(data){
      provincias = Object.values(data.data);
      fill_provincias();
    }
  });
}
function get_municipios(){
  $.ajax({
    url: "http://apiv1.geoapi.es/municipios?CPRO="+id_provincia+"&type=JSON&key="+Api_key+"&sandbox=0",
    success: function(data){
      municipios = Object.values(data.data);
      fill_municipios();
    }
  });
}
function fill_provincias(){
  selectProvincias=$("#provincia");
  selectProvincias.empty();
  selectProvincias.append("<option value=0>- Seleccione provincia -</option>");
  provincias.forEach(function(element) {
    selectProvincias.append("<option value="+element.CPRO+">"+element.PRO+"</option>");
  });
}
function fill_municipios(){
  selectMunicipio=$("#municipio");
  selectMunicipio.empty();
  selectMunicipio.append("<option value=0>- Seleccione municipio -</option>");
  municipios.forEach(function(element) {
    selectMunicipio.append("<option value="+element.DMUN50+">"+element.DMUN50+"</option>");
  });
}
function fill_comunidades(){
  selectComunidades=$("#comunidad");
  selectComunidades.empty();
  selectComunidades.append("<option value=0>- Seleccione comunidad -</option>");
  comunidades.forEach(function(element) {
    selectComunidades.append("<option value="+element.CCOM+">"+element.COM+"</option>");
  });
}
/* Fin de funciones para rellenar los selects con la api de geoapi*/

/*Funciones de validate  */
function validate_name(){
  var name = $("#name");
  if(name.val() == ""){
    check = false;
    return false;
  }
  return true;

}
function validate_observaciones(){
  var observaciones = $("#observaciones");
  if(observaciones.val() == ""){
    $("#error_observaciones").show();
    check = false;
    return false;
  }
  $("#error_observaciones").hide();
  return true;

}
function validate_price(){
  var hotel_price = /(?=.)^\$?(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+)?(\.[0-9]{1,2})?$/;
  if ($("#price").val() === "") {
    check = false;
    if(validate_name()){
      $("#error_name").hide();
      $("#false_error_name").show();
    }else{
      $("#error_name").show();
      $("#false_error_name").hide();
    }
    $("#error_price").show();
    $("#error_price2").hide();
    $("#false_error_price").hide();
    return false;
  }else if (!hotel_price.test($("#price").val())) {
    check = false;
    if(validate_name()){
      $("#error_name").hide();
      $("#false_error_name").show();
    }else{
      $("#error_name").show();
      $("#false_error_name").hide();
    }
    $("#error_price").hide();
    $("#error_price2").show();
    $("#false_error_price").hide();
        return false;
    }
    if(validate_name()){
      $("#error_name").hide();
      $("#false_error_name").hide();
      $("#error_price").hide();
      $("#error_price2").hide();
      $("#false_error_price").hide();
    }else{
      check = false;
      $("#error_name").show();
      $("#false_error_name").hide();
      $("#error_price").hide();
      $("#error_price2").hide();
      $("#false_error_price").show();
    }
    return true;

}
function validate_fecha_inicio(){
  var val_dates = /\d{2}.\d{2}.\d{4}$/;
  var date = $("#fecha_inicio").val();
  if(date===""){
    check = false;
    return 1; /*Vacío */
  }else if (!val_dates.test($("#fecha_inicio").val())) {
    check = false;
    return -1; /* Expresión no válida */
  }
    /* TODO regular que sea una fecha válida, si lo es return 0, sino return -1 */
  return 0; /* Todo correcto */
}
function validate_fecha_final(){
  var val_dates = /\d{2}.\d{2}.\d{4}$/;
  var date = $("#fecha_final").val();
  if(date===""){
    check = false;
    $("#error_fecha_final").show();
    $("#error_fecha").hide();
    $("#error_fecha_final2").hide();
    $("#false_error_fecha_final").hide();
    if(validate_fecha_inicio()===1){
      $("#error_fecha").hide();
      $("#error_fecha_inicio").show();
      $("#error_fecha_inicio2").hide();
      $("#false_error_fecha_inicio").hide();
    }else if(validate_fecha_inicio()===-1){
      $("#error_fecha").hide();
      $("#error_fecha_inicio").hide();
      $("#error_fecha_inicio2").show();
      $("#false_error_fecha_inicio").hide();
    }else{
      $("#error_fecha").hide();
      $("#error_fecha_inicio").hide();
      $("#error_fecha_inicio2").hide();
      $("#false_error_fecha_inicio").show();
    }
  }else if (!val_dates.test($("#fecha_final").val())) {
    check = false;
    $("#error_fecha").hide();
    $("#error_fecha_final").hide();
    $("#error_fecha_final2").show();
    $("#false_error_fecha_final").hide();
    if(validate_fecha_inicio()===1){
      $("#error_fecha").hide();
      $("#error_fecha_inicio").show();
      $("#error_fecha_inicio2").hide();
      $("#false_error_fecha_inicio").hide();
    }else if(validate_fecha_inicio()===-1){
      $("#error_fecha").hide();
      $("#error_fecha_inicio").hide();
      $("#error_fecha_inicio2").show();
      $("#false_error_fecha_inicio").hide();
    }else{
      $("#error_fecha").hide();
      $("#error_fecha_inicio").hide();
      $("#error_fecha_inicio2").hide();
      $("#false_error_fecha_inicio").show();
    }
  }else{
    /* TODO regular que sea una fecha válida*/
    if(validate_fecha_inicio()===1){
      $("#error_fecha").hide();
      check = false;
      $("#error_fecha_inicio").show();
      $("#error_fecha_inicio2").hide();
      $("#false_error_fecha_inicio").hide();
      $("#error_fecha_final").hide();
      $("#error_fecha_final2").hide();
      $("#false_error_fecha_final").show();
    }else if(validate_fecha_inicio()===-1){
      $("#error_fecha").hide();
      check = false;
      $("#error_fecha_inicio").hide();
      $("#error_fecha_inicio2").show();
      $("#false_error_fecha_inicio").hide();
      $("#error_fecha_final").hide();
      $("#error_fecha_final2").hide();
      $("#false_error_fecha_final").show();
    }else{
      $("#error_fecha").hide();
      $("#error_fecha_inicio").hide();
      $("#error_fecha_inicio2").hide();
      $("#false_error_fecha_inicio").hide();
      $("#error_fecha_final").hide();
      $("#error_fecha_final2").hide();
      $("#false_error_fecha_final").hide();
    }
  }
}
function validate_valoracion(){
  var valoracion = $('input[name="valoracion"]:checked').val();
  if(valoracion == null){
    check = false;
    $("#error_valoracion").show();
  }else{
    $("#error_valoracion").hide();
  }

}
function validate_selects(){
  var comunidad = document.getElementById('comunidad').value;
  var provincia = document.getElementById('provincia').value;
  var municipio = document.getElementById('municipio').value;
  if(comunidad == 0){
    check = false;
    $("#error_comunidad").show();
    $("#false_error_comunidad").hide();
    if(provincia == 0){
      $("#error_provincia").show();
      $("#false_error_provincia").hide();
      if(municipio == 0){
        $("#error_municipio").show();
        $("#false_error_municipio").hide();
      }else{
        $("#error_municipio").hide();
        $("#false_error_municipio").show();
      }
    }else{
      $("#error_provincia").hide();
      $("#false_error_provincia").show();
      if(municipio == 0){
        $("#error_municipio").show();
        $("#false_error_municipio").hide();
      }else{
        $("#error_municipio").hide();
        $("#false_error_municipio").show();
      }
    }
  }else{
    if(provincia == 0){
      check = false;
      $("#error_comunidad").hide();
      $("#false_error_comunidad").show();
      $("#error_provincia").show();
      $("#false_error_provincia").hide();
      if(municipio == 0){
        check = false;
        $("#error_comunidad").hide();
        $("#false_error_comunidad").show();
        $("#error_municipio").show();
        $("#false_error_municipio").hide();
      }else{
        $("#error_municipio").hide();
        $("#false_error_municipio").show();
      }
    }else{
      $("#error_provincia").hide();
      $("#false_error_provincia").hide();
      if(municipio == 0){
        check = false;
        $("#error_comunidad").hide();
        $("#false_error_comunidad").show();
        $("#error_provincia").hide();
        $("#false_error_provincia").show();
        $("#error_municipio").show();
        $("#false_error_municipio").hide();
      }else{
        $("#error_municipio").hide();
        $("#false_error_municipio").hide();
        $("#false_error_comunidad").hide();
        $("#false_error_comunidad").hide();
        $("#error_comunidad").hide();
      }
    }
  }

}
function validate(){
  check = true;
  try{
    validate_price();
    validate_fecha_final();
    validate_valoracion();
    validate_selects();
    validate_observaciones();
    if(check === true){
      return true;
    }return false;
  }catch(err){
    return false;
  }

}



/* Fin funciones de validate */

$( document ).ready(function() {
  /* Cleaning the html or filling it */
                $("#name").val('');
                $("#price").val('');
                $("#fecha_inicio").val('');
                $("#fecha_final").val('');
                fill_comunidades();
                selectProvincias=$("#provincia");
                selectMunicipio=$("#municipio");
                selectProvincias.empty();
                selectMunicipio.empty();
                selectProvincias.append("<option value=0>- Seleccione provincia -</option>");
                selectMunicipio.append("<option value=0>- Seleccione municipio -</option>");
                $("#observaciones").val('');
                var inputElements = document.getElementsByClassName('caracteristicas');
                for (var i = 0; i < inputElements.length; i++) {
                    if (inputElements[i].checked){
                        inputElements[i].checked = false;
                    }
                }


  /* Post to php */
  var create=document.getElementById("create");
  create.onclick=function(){
    //if(validate()){
    if(true){
      var name = $("#name").val();
      var price = $("#price").val();
      var fecha_inicio = $("#fecha_inicio").val();
      var fecha_final = $("#fecha_final").val();
      var valoracion = $('input[name="valoracion"]:checked').val();
      var observaciones = $("#observaciones").val();
      var comunidad = document.getElementById('comunidad').value;
      var provincia = document.getElementById('provincia').value;
      var municipio = document.getElementById('municipio').value;
      var caracteristicas = document.getElementsByClassName('caracteristicas');
      var wifi="";
      var piscina="";
      var playa="";
      var actividades="";
      var comida="";
      var spa="";
      var j=0;
      for (var i=0; i< caracteristicas.length; i++){
        if (caracteristicas[i].checked){
          if("wifi" == caracteristicas[i].value){
            wifi="true";
          }
          if("piscina" == caracteristicas[i].value){
            piscina="true";
          }
          if("playa" == caracteristicas[i].value){
            playa="true";
          }
          if("actividades" == caracteristicas[i].value){
            actividades="true";
          }
          if("comida" == caracteristicas[i].value){
            comida="true";
          }
          if("spa" == caracteristicas[i].value){
            spa="true";
          }
        }
    }
      comunidades.forEach(function(element) {
        if(comunidad === element.CCOM){
          comunidad = element.COM;
        }
      });
      provincias.forEach(function(element) {
        selectProvincias.append("<option value="+element.CPRO+">"+element.PRO+"</option>");
        if(provincia === element.CPRO){
          provincia = element.PRO;
        }
      });
      var dataTosend='name='+name+'&price='+price+'&fecha_inicio='+fecha_inicio+'&fecha_final='+fecha_final+'&valoracion='+valoracion+'&observaciones='+observaciones+'&comunidad='+comunidad+'&provincia='+provincia+'&wifi='+wifi+'&piscina='+piscina+'&playa='+playa+'&actividades='+actividades+'&comida='+comida+'&spa='+spa+'&municipio='+municipio;
      $.ajax({
           type: "POST",
           url: "../hotel/validate",
           data: dataTosend,
           datatype :'json',
           success: function(data){
             $("#error_dropzone_size").hide();
             $("#error_dropzone_extension").hide();
             $("#error_dropzone_invalid").hide();
             $("#error_dropzone").hide();
             console.log(data);
             var json = JSON.parse(data);
             validate();
             if(json.error.fecha){
               $("#error_fecha").show();
             }
             if(json.error_prodpic=="size" || json.error_prodpic=="sizesize"){
               $("#error_dropzone_size").show();
             }
             if(json.error_prodpic=="error"){
               $("#error_dropzone").show();
             }
             if(json.error_prodpic=="extensiones" || json.error_prodpic=="sizeextensiones"){
               $("#error_dropzone_extension").show();
             }
             if(json.error_prodpic=="invalid" || json.error_prodpic=="sizeinvalid"){
               $("#error_dropzone_invalid").show();
             }
             if(json.success){
               toastr.info("Registrado en la base de datos");
               setTimeout(function(){ window.location.href = json.redirect; }, 1500);
             }


           }
     });

        }
  }

  /* End post to php */

  /* Funciones de los dependent dropdowns */
  get_comunidades();
  $("#comunidad").change(function() {
    selectProvincias=$("#provincia");
    selectMunicipio=$("#municipio");
    selectProvincias.empty();
    selectMunicipio.empty();
    selectProvincias.append("<option value=0>- Seleccione provincia -</option>");
    selectMunicipio.append("<option value=0>- Seleccione municipio -</option>");
    id_comunidad=$(this).val();
    get_provincias();

  });
  $("#provincia").change(function() {
    selectMunicipio=$("#municipio");
    selectMunicipio.empty();
    selectMunicipio.append("<option value=0>- Seleccione municipio -</option>");
    id_provincia=$(this).val();
    get_municipios();

  });

  /* Fin funciones de los dependent dropdowns */

  /* Funciones datepicker */
  $( "#fecha_inicio" ).datepicker({
    dateFormat: 'dd/mm/yy',
    //dateFormat: 'mm-dd-yy',
    changeMonth: true, changeYear: true,
    minDate: +7, maxDate: "+12M"
  });
  $( "#fecha_final" ).datepicker({
    dateFormat: 'dd/mm/yy',
    //dateFormat: 'mm-dd-yy',
    changeMonth: true, changeYear: true,
    minDate: +8, maxDate: "+13M"
  });

  /* Fin funciones datepicker */

  /* Dropzone */
  $("#dropzone").dropzone({
    url: "../hotel/upload",
    addRemoveLinks: true,
    maxFileSize: 1000,
    dictResponseError: "An error has occurred on the server",
    acceptedFiles: 'image/*,.jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF,.rar,application/pdf,.psd',
    init: function () {
      this.on("success", function (file, response) {
        //alert(response);
        $("#progress").show();
        $("#bar").width('100%');
        $("#percent").html('100%');
        $('.msg').text('').removeClass('msg_error');
        $('.msg').text('Success Upload image!!').addClass('msg_ok').animate({'right': '300px'}, 300);
      });
    },
    complete: function (file) {
      //if(file.status == "success"){
      //alert("El archivo se ha subido correctamente: " + file.name);
      //}
    },
    error: function (file) {
      //alert("Error subiendo el archivo " + file.name);
    },
    removedfile: function (file, serverFileName) {
      var name = file.name;
      $.ajax({
        type: "POST",
        url: "../hotel/delete",
        data: "filename=" + name,
        success: function (data) {
          //console.log(name);
          $("#progress").hide();
          $('.msg').text('').removeClass('msg_ok');
          $('.msg').text('').removeClass('msg_error');
          $("#e_avatar").html("");
          var json = JSON.parse(data);
          //console.log(data);
          if (json.res === true) {
            var element;
            if ((element = file.previewElement) !== null) {
              element.parentNode.removeChild(file.previewElement);
              //alert("Imagen eliminada: " + name);
            } else {
              return false;
            }
          } else { //json.res == false, elimino la imagen también
            var element2;
            if ((element2 = file.previewElement) !== null) {
              element2.parentNode.removeChild(file.previewElement);
            } else {
              return false;
            }
          }

        }
      });
    }
  });

  /*Fin dropzone*/
});
/* Fin document.ready*/
