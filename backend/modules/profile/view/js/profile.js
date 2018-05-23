$( document ).ready(function() {

  $( "#birthday" ).datepicker({
    dateFormat: 'dd/mm/yy',
    //dateFormat: 'mm-dd-yy',
    changeMonth: true, changeYear: true,
    minDate: "-50Y", maxDate: "-18Y"
  });
  var user = Tools.readCookie("user");
  if(user){
    user = user.split("|");
    console.log(user);
    $("#profile").html('<span class="image main"><img src="'+user[1]+'" alt="" /></span>');
    var dataTosend='birthday='+birthday+'&id='+user[0];
    $("#username").val(user[2]);
  }
  $.ajax({
       type: "POST",
       url: "../profile/get_birth",
       data: dataTosend,
       datatype :'json',
       success: function(data){
         console.log(data);
         var json = JSON.parse(data);
         $("#birthday").val(json);
       }
     });

     $("#update").on("click", function(e){
       birthday=$("#birthday").val();
       dataTosend='birthday='+birthday+'&id='+user[0];
       console.log(dataTosend);
       $.ajax({
            type: "POST",
            url: "../profile/update_birth",
            data: dataTosend,
            datatype :'json',
            success: function(data){
              console.log(data);
              toastr.info("Tus datos han sido actualizados");
            }
          });
     });

});
