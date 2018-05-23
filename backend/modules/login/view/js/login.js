$( document ).ready(function() {
  var user = Tools.readCookie("user");
    console.log('user: ' + user);
  $("#login").on("click", function(e){
    var check = true;
    var username = $("#username").val();
    var pass = $("#pass").val();
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
    var dataTosend='username='+username+'&pass='+pass;
    if(check){
      $.ajax({
           type: "POST",
           url: "../login/login",
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
             if(json.pass){
               $("#error_pass").hide();
               $("#error_user").show();
             }else {
               $("#error_user").hide();
             }

             if(!json.pass && !json.username){
               if(json.cuenta){
                 $("#error_cuenta").show();
               }else {
                 $("#error_cuenta").hide();
                 Tools.eraseCookie("user");
                 Tools.createCookie("user", json.id + "|" + json.avatar + "|" + username, 1);
                 toastr.options.fadeOut = 1500;
                 toastr.info("Bienvenido "+username);
                 setTimeout(function(){ $(location).attr('href', '../../Hotel/home/') }, 1500);

               }
             }
           }
         });
    }
  });
});
