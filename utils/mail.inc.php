<?php
    function enviar_email($arr) {
        $html = '';
        $subject = '';
        $body = '';
        $ruta = '';
        $return = '';

        switch ($arr['type']) {
            case 'alta':
                $subject = 'Tu Alta en Hotel';
                $ruta = "<a href='" . amigable("?module=login&function=activar&aux=" . $arr['tokken'], true) . "'>aqu&iacute;</a>";
                $body = 'Gracias por unirte a nuestra aplicaci&oacute;n<br> Para finalizar el registro, pulsa ' . $ruta;
                break;

            case 'modificacion':
                $subject = 'Olvidar contraseña<br>';
                $ruta = '<a href="' . amigable("?module=login&function=cambiar_pass", true) . $arr['tokken'].'">aqu&iacute;</a>';
                $body = ' ' . $ruta;
                break;

            case 'contact':
                $subject = 'Tu Petici&oacute;n a HOTEL ha sido enviada<br>';
                $ruta = '<a href=' . 'https://php-mvc-oo-yomogan.c9users.io/3_Framework/4_framework_contact/'. '>aqu&iacute;</a>';
                $body = 'Para visitar nuestra web, pulsa ' . $ruta;
                break;

            case 'admin':
                $subject = $arr['inputSubject'];
                $body = 'inputName: ' . $arr['inputName']. '<br>' .
                'inputEmail: ' . $arr['inputEmail']. '<br>' .
                'inputSubject: ' . $arr['inputSubject']. '<br>' .
                'inputMessage: ' . $arr['inputMessage'];
                break;
        }

        $html .= "<html>";
        $html .= "<body>";
	       $html .= "<h4>". $subject ."</h4>";
	       $html .= $body;
	       $html .= "<br><br>";
	       $html .= "<p>Sent by HOTEL</p>";
		$html .= "</body>";
		$html .= "</html>";

        set_error_handler('ErrorHandler');
        try{
            if ($arr['type'] === 'admin')
                $address = 'serhuegi@gmail.com';
            else
                $address = $arr['inputEmail'];
            $result = send_mailgun('serhuegi@gmail.com', $address, $subject, $html);
        } catch (Exception $e) {
			$return = 0;
		}
		restore_error_handler();
        return $result;
    }

    function send_mailgun($from, $to, $subject, $html){
        	$config = array();
        	$config['api_key'] = "key-981659b1fd62400a22827919a9195945"; //API Key
        	$config['api_url'] = "https://api.mailgun.net/v3/sandbox4f39c91404254c2b80012df99043f34f.mailgun.org/messages"; //API Base URL

        	$message = array();
        	$message['from'] = $from;
        	$message['to'] = $to;
        	$message['h:Reply-To'] = "serhuegi@gmail.com";
        	$message['subject'] = $subject;
        	$message['html'] = $html;

        	$ch = curl_init();
        	curl_setopt($ch, CURLOPT_URL, $config['api_url']);
        	curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
        	curl_setopt($ch, CURLOPT_USERPWD, "api:{$config['api_key']}");
        	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
        	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        	curl_setopt($ch, CURLOPT_POST, true);
        	curl_setopt($ch, CURLOPT_POSTFIELDS,$message);
        	$result = curl_exec($ch);
        	curl_close($ch);
        	return $result;
        }
