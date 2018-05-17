$( document ).ready(function() {
  var user = Tools.readCookie("user");
    console.log('user: ' + user);

  $("#logout").on("click", function(e){
    Tools.eraseCookie("user");
    $(location).attr('href', '../../home/')
  });
  $("#no").on("click", function(e){
    $(location).attr('href', '../../home/')
  });
});
