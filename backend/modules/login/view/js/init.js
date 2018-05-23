$(document).ready(function () {
  var user = Tools.readCookie("user");
    console.log('user: ' + user);
    if (user) {
        user = user.split("|");
        $("#menu_login").html("<a href="+ amigable('?module=profile') +" >Profile</a>");
        $("#menu_login").after("<li><a href="+ amigable('?module=login&function=logout') +" >Logout</a></li>");
        $("#menu_login").after("<li><a href="+ amigable('?module=hotel') +" >Create</a></li>");

    }else{
      $("#menu_login").html("<a href="+ amigable('?module=login') +" >Login</a>");
    }

    var url = window.location.href;
    console.log('url: ' + url);
    //https://php-mvc-oo-yomogan.c9users.io/3_Framework/7_proj_final_login/JoinElderly/main/begin/reg/

    //en controller_user
    //amigable('?module=main&function=begin&param=reg', true);
    //amigable("?module=main&fn=begin&param=503");
    //amigable('?module=main&function=begin&param=rest', true);
    //amigable('?module=user&function=profile&param=done', true);
    //amigable('?module=user&function=profile&param=503', true);

    //en mail.inc.php
    //$ruta = '<a href=' . amigable("?module=user&function=activar&aux=" . $arr['token'], true) . '>aqu&iacute;</a>';

    url = url.split("/");
    if(url[5]=="activar"){
      var dataTosend='tokken='+url[6];
      $.ajax({
           type: "POST",
           url: "../../../login/activar",
           data: dataTosend,
           datatype :'json',
           success: function(data){
             toastr.info("Tu cuenta ha sido confirmada");
             setTimeout(function(){ $(location).attr('href', '../../../../Hotel/login/') }, 1500);

           }
         });
    }
    console.log('url5: ' + url[5]); //JoinElderly
    console.log('url6: ' + url[6]); //main
    console.log('url7: ' + url[7]); //begin
    console.log('url8: ' + url[8]); //reg

    });
