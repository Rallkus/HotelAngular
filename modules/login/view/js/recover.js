$( document ).ready(function() {
  $("#change").on("click", function(e){
    var check = true;
    var email = $("#email").val();
    caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    if(caract.test(email) == false){
      $("#error_email").show();
      $("#error_correo").hide();
      check=false;
    }else{
      $("#error_email").hide();
      $("#error_correo").hide();
    }
    var dataTosend='email='+email;
    if(check){
      $.ajax({
           type: "POST",
           url: "../login/email",
           data: dataTosend,
           datatype :'json',
           success: function(data){
             console.log(data);
             var json = JSON.parse(data);
             if(json.email){
               $("#error_email").hide();
               $("#error_correo").show();
             }else {
               $("#error_email_exists").hide();
             }
             if(!json.email){
               toastr.info("Te hemos enviado un email con instrucciones para cambiar la contraseña");
             }
           }
         });
    }
  });
});
