function paint(dataString) {
    $("#resultMessage").html(dataString).fadeIn("slow");

    setTimeout(function() {
        $("#resultMessage").fadeOut("slow")
    }, 5000);

    //reset the form
    $('#contact_form')[0].reset();

    // hide ajax loader icon
    $('.ajaxLoader').fadeOut("fast");

    // Enable button after processing
    $('#submitBtn').attr('disabled', false);

    /*if (dataString == "<div class='alert alert-success'>Your message has been sent </div>"){
        alert(dataString);
    }else{
        alert(dataString);
    }*/
}

$(document).ready(function(){
    // disable submit button in case of disabled javascript browsers
    /*$(function(){
        $('#submitBtn').attr('disabled', false);
    });*/

	/*$("#contact_form").validate({
				rules:{
					inputName:{
                        required: true
					},
					inputEmail:{
                        required: true,
                        email: true
					},
                    inputMessage:{
                        required: true
                    }
				},
        highlight: function(element) {
            $(element).closest('.control-group').removeClass('success').addClass('error');},
        success: function(element) {
            $(element).closest('.control-group').removeClass('error').addClass('success');
            $(element).closest('.control-group').find('label').remove();
        },
        errorClass: "help-inline"
	});*/
    function validate(){
      check = true;
      email = $("#inputEmail").val();
      name = $("#inputName").val();
      subject = $("#inputSubject").val();
      message = $("#inputMessage").val();
    caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    if(caract.test(email) == false){
      $("#error_email").show();
      check=false;
    }else{
      $("#error_email").hide();
    }
    if(name == ""){
      $("#error_name").show();
      check = false;
    }else{
      $("#error_name").hide();
    }
    if(subject == ""){
      $("#error_subject").show();
      check = false;
    }else{
      $("#error_subject").hide();
    }
    if(message == ""){
      $("#error_message").show();
      check = false;
    }else{
      $("#error_message").hide();
    }
    return check;
    }
    $("#contact_form").submit(function(){
      if(validate()){
        var dataString = $("#contact_form").serialize();
        $.ajax({
            type: "POST",
            url: "../contact/process_contact",
            data: dataString,
            success: function(dataString) {
                paint(dataString);
            }
        })
        .fail(function() {
            paint("<div class='alert alert-error'>Server error. Try later...</div>");
        });
      }
        return false;
    });
});
