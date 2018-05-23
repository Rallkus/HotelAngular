<?php
class controller_contact {
  function __construct() {

    }
    /*function begin() {
        require_once(VIEW_PATH_INC . "header.php");
        loadView('modules/contact/view/', 'contact.html');
        require_once(VIEW_PATH_INC . "footer.html");
        require_once(VIEW_PATH_INC . "menu.php");
    }*/
    public function process_contact() {
            if($_POST['token'] === "contact_form"){

                //////////////// Envio del correo al usuario
                $arrArgument = array(
									'type' => 'contact',
									'token' => '',
									'inputName' => $_POST['inputName'],
									'inputEmail' => $_POST['inputEmail'],
									'inputSubject' => $_POST['inputSubject'],
									'inputMessage' => $_POST['inputMessage']
								);
				set_error_handler('ErrorHandler');
				try{
            enviar_email($arrArgument);
            $message = "Tu mensaje ha sido enviado con éxito";
				} catch (Exception $e) {
					$message = "Ha habido un problema con el servidor, prueba de nuevo más tarde";
				}
				restore_error_handler();


                //////////////// Envio del correo al admin de la web
                $arrArgument = array(
									'type' => 'admin',
									'token' => '',
									'inputName' => $_POST['inputName'],
									'inputEmail' => $_POST['inputEmail'],
									'inputSubject' => $_POST['inputSubject'],
									'inputMessage' => $_POST['inputMessage']
								);
                set_error_handler('ErrorHandler');
				try{
                    sleep(5);
                    enviar_email($arrArgument);
				} catch (Exception $e) {
				}
				restore_error_handler();

            }else{

            }
            echo $message;
        }
}
