$( document ).ready(function() {
  $("#change").on("click", function(e){
    var check = true;
    var pass = $("#pass").val();
    if(pass == ""){
      $("#error_pass").show();
      check=false;
    }else{
      $("#error_pass").hide();
    }
    var url = window.location.href;
    url = url.split("/");
    var dataTosend='pass='+pass+'&tokken='+url[6];
    if(check){
      $.ajax({
           type: "POST",
           url: "../../login/update_pass",
           data: dataTosend,
           datatype :'json',
           success: function(data){
             console.log(data);
             var json = JSON.parse(data);
             if(json.tokken){
               $("#error_tokken").show();
             }else{
               toastr.info("Tu contraseña ha sido cambiada con éxito");
               setTimeout(function(){ $(location).attr('href', '../../../../Hotel/login/') }, 2000);
             }
           }
         });
    }
  });
});
