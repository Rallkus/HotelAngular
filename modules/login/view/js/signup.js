$( document ).ready(function() {
  $("#signup").on("click", function(e){
    var check = true;
    var email = $("#email").val();
    var username = $("#username").val();
    var pass = $("#pass").val();
    caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    if(caract.test(email) == false){
      $("#error_email").show();
      check=false;
    }else{
      $("#error_email").hide();
    }
    if(username == ""){
      $("#error_username").show();
      check=false;
    }else{
      $("#error_username").hide();
    }
    if(pass == ""){
      $("#error_pass").show();
      check=false;
    }else{
      $("#error_pass").hide();
    }
    var dataTosend='email='+email+'&username='+username+'&pass='+pass;
    if(check){
      $.ajax({
           type: "POST",
           url: "../login/register_user",
           data: dataTosend,
           datatype :'json',
           success: function(data){
             console.log(data);
             var json = JSON.parse(data);
             if(json.username){
               $("#error_username").hide();
               $("#error_username_exists").show();
             }else{
               $("#error_username_exists").hide();
             }
             if(json.email){
               $("#error_email").hide();
               $("#error_email_exists").show();
             }else {
               $("#error_email_exists").hide();
             }
             if(!json.email && !json.username){
               toastr.info("Tu cuenta ha sido creada, te hemos enviado un email para que confirmes tu cuenta");
               setTimeout(function(){ $(location).attr('href', '../../Hotel/login/') }, 2000);
             }
           }
         });
    }
  });
});
