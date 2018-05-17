<?php
class controller_hotel {
  function __construct() {
      include(FUNCTIONS_HOTEL . "functions_hotel.inc.php");
    }
    function begin() {
        require_once(VIEW_PATH_INC . "header.php");
        loadView('modules/hotel/view/', 'create_hotel.html');
        require_once(VIEW_PATH_INC . "footer.html");
        require_once(VIEW_PATH_INC . "menu.php");
    }
    function upload() {
      $result_prodpic = upload_files();
      $_SESSION['result_prodpic'] = $result_prodpic;
      echo $_SESSION['result_prodpic'];
        //echo json_encode($result_prodpic);
    }
    function validate() {
      $jsondata = array();
      $hotelJSON = $_POST;
      $result= validate_hotel($hotelJSON);
      //$result = true;

      if (empty($_SESSION['result_prodpic'])){
          $_SESSION['result_prodpic'] = array('result' => true, 'error' => "", "data" => "/Hotel/media/default-avatar.png");
      }
      $result_prodpic = $_SESSION['result_prodpic'];

      if(($result['result']) && ($result_prodpic['result'])) {

          $arrArgument = array(
            'name' => $hotelJSON['name'],
            'price' => $hotelJSON['price'],
            'fecha_inicio' => $hotelJSON['fecha_inicio'],
            'fecha_final' => $hotelJSON['fecha_final'],
            'valoracion' => $hotelJSON['valoracion'],
            'observaciones' => $hotelJSON['observaciones'],
            'comunidad' => $hotelJSON['comunidad'],
            'provincia' => $hotelJSON['provincia'],
            'municipio' => $hotelJSON['municipio'],
            'wifi' => $hotelJSON['wifi'],
            'piscina' => $hotelJSON['piscina'],
            'playa' => $hotelJSON['playa'],
            'actividades' => $hotelJSON['actividades'],
            'comida' => $hotelJSON['comida'],
            'spa' => $hotelJSON['spa'],
            'imagen' => $result_prodpic['data']
          );
          //$arrValue=true;

          $arrValue = false;
          $arrValue = loadModel(MODEL_HOTEL, "hotel_model", "create_hotel_offer", $arrArgument);
          //echo json_encode($arrValue);
          //die();

          if ($arrValue){
              $message = "Product has been successfull registered";
          }else{
              $message = "Problem ocurred registering a porduct";
          }

          $_SESSION['hotel'] = $arrArgument;
          $_SESSION['message'] = $message;
          $callback="../home/";

          $jsondata['success'] = true;
          $jsondata['redirect'] = $callback;
          $jsondata['error'] = $result['error'];
          echo json_encode($jsondata);
          exit;
      }else{
        $jsondata['success'] = false;
        $jsondata['error'] = $result['error'];
        //$jsondata['error'] = true;
        $jsondata['error_prodpic'] = $result_prodpic['error'];

        $jsondata['success1'] = false;
        if ($result_prodpic['result']) {
            $jsondata['success1'] = true;
            $jsondata['prodpic'] = $result_prodpic['data'];
        }
        //header('HTTP/1.0 400 Bad error');
        echo json_encode($jsondata);
      }//End else
    }//End alta products
    function delete() {
      //echo json_encode("Hello world from delete in controller_products.class.php");
      $_SESSION['result_prodpic'] = array();
      $result = remove_files();
      if($result === true){
        echo json_encode(array("res" => true));
      }else{
        echo json_encode(array("res" => false));
      }
      //echo json_decode($result);
    }
  }

/*
session_start();
include ($_SERVER['DOCUMENT_ROOT'] . "/Hotel/modules/hotel/utils/functions_hotel.inc.php");
include ($_SERVER['DOCUMENT_ROOT'] . "/Hotel/utils/upload.inc.php");
include ($_SERVER['DOCUMENT_ROOT'] . "/Hotel/utils/common.inc.php");

//////////////////////////////////////////////////////////////// upload
if ((isset($_GET["upload"])) && ($_GET["upload"] == true)){
  $result_prodpic = upload_files();
  $_SESSION['result_prodpic'] = $result_prodpic;
  echo $_SESSION['result_prodpic'];
    //echo json_encode($result_prodpic);
}

//////////////////////////////////////////////////////////////// alta_products
if ((isset($_POST['name']))) {
    alta_hotel();
}

function alta_hotel(){
  $jsondata = array();
  $hotelJSON = $_POST;
  $result= validate_hotel($hotelJSON);
  //$result = true;

  if (empty($_SESSION['result_prodpic'])){
      $_SESSION['result_prodpic'] = array('result' => true, 'error' => "", "data" => "/Hotel/media/default-avatar.png");
  }
  $result_prodpic = $_SESSION['result_prodpic'];

  if(($result['result']) && ($result_prodpic['result'])) {

      $arrArgument = array(
        'name' => $hotelJSON['name'],
        'price' => $hotelJSON['price'],
        'fecha_inicio' => $hotelJSON['fecha_inicio'],
        'fecha_final' => $hotelJSON['fecha_final'],
        'valoracion' => $hotelJSON['valoracion'],
        'observaciones' => $hotelJSON['observaciones'],
        'comunidad' => $hotelJSON['comunidad'],
        'provincia' => $hotelJSON['provincia'],
        'municipio' => $hotelJSON['municipio'],
        'wifi' => $hotelJSON['wifi'],
        'piscina' => $hotelJSON['piscina'],
        'playa' => $hotelJSON['playa'],
        'actividades' => $hotelJSON['actividades'],
        'comida' => $hotelJSON['comida'],
        'spa' => $hotelJSON['spa'],
        'imagen' => $result_prodpic['data']
      );
      //$arrValue=true;

      $arrValue = false;
      $path_model = $_SERVER['DOCUMENT_ROOT'] . '/Hotel/modules/hotel/model/model/';
      $arrValue = loadModel($path_model, "hotel_model", "create_hotel_offer", $arrArgument);
      //echo json_encode($arrValue);
      //die();

      if ($arrValue){
          $message = "Product has been successfull registered";
      }else{
          $message = "Problem ocurred registering a porduct";
      }

      $_SESSION['hotel'] = $arrArgument;
      $_SESSION['message'] = $message;
      $callback="index.php";

      $jsondata['success'] = true;
      $jsondata['redirect'] = $callback;
      $jsondata['error'] = $result['error'];
      echo json_encode($jsondata);
      exit;
  }else{
    $jsondata['success'] = false;
    $jsondata['error'] = $result['error'];
    //$jsondata['error'] = true;
    $jsondata['error_prodpic'] = $result_prodpic['error'];

    $jsondata['success1'] = false;
    if ($result_prodpic['result']) {
        $jsondata['success1'] = true;
        $jsondata['prodpic'] = $result_prodpic['data'];
    }
    //header('HTTP/1.0 400 Bad error');
    echo json_encode($jsondata);
  }//End else
}//End alta products

//////////////////////////////////////////////////////////////// delete
if ((isset($_GET["delete"])) && ($_GET["delete"] == true)){
    //echo json_encode("Hello world from delete in controller_products.class.php");
    $_SESSION['result_prodpic'] = array();
    $result = remove_files();
    if($result === true){
      echo json_encode(array("res" => true));
    }else{
      echo json_encode(array("res" => false));
    }
    //echo json_decode($result);
}

//////////////////////////////////////////////////////////////// load
if (isset($_GET["load"]) && $_GET["load"] == true) {
    $jsondata = array();
    if (isset($_SESSION['product'])) {
        //echo debug($_SESSION['user']);
        $jsondata["product"] = $_SESSION['product'];
    }
    if (isset($_SESSION['message'])) {
        //echo $_SESSION['msje'];
        $jsondata["message"] = $_SESSION['message'];
    }
    close_session();
    echo json_encode($jsondata);
    exit;
}

function close_session() {
    unset($_SESSION['product']);
    unset($_SESSION['message']);
    $_SESSION = array(); // Destruye todas las variables de la sesión
    session_destroy(); // Destruye la sesión
}

/////////////////////////////////////////////////// load_data
if ((isset($_GET["load_data"])) && ($_GET["load_data"] == true)) {
    $jsondata = array();

    if (isset($_SESSION['hotel'])) {
        $jsondata["hotel"] = $_SESSION['hotel'];
        echo json_encode($jsondata);
        exit;
    } else {
        $jsondata["hotel"] = "";
        echo json_encode($jsondata);
        exit;
    }
}

/////////////////////////////////////////////////// load_country
/*if(  (isset($_GET["load_country"])) && ($_GET["load_country"] == true)  ){
		$json = array();

    	$url = 'http://www.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/ListOfCountryNamesByName/JSON';
		$path_model=$_SERVER['DOCUMENT_ROOT'] . '/1_Backend/5_dependent_dropdowns/modules/products/model/model/';
		$json = loadModel($path_model, "products_model", "obtain_countries", $url);

		if($json){
			echo $json;
			exit;
		}else{
			$json = "error";
			echo $json;
			exit;
		}
	}

/////////////////////////////////////////////////// load_provinces
if(  (isset($_GET["load_provinces"])) && ($_GET["load_provinces"] == true)  ){
    	$jsondata = array();
        $json = array();

		$path_model=$_SERVER['DOCUMENT_ROOT'] . '/1_Backend/5_dependent_dropdowns/modules/products/model/model/';
		$json = loadModel($path_model, "products_model", "obtain_provinces");

		if($json){
			$jsondata["provinces"] = $json;
			echo json_encode($jsondata);
			exit;
		}else{
			$jsondata["provinces"] = "error";
			echo json_encode($jsondata);
			exit;
		}
	}

/////////////////////////////////////////////////// load_cities
if(  isset($_POST['idPoblac']) ){
	    $jsondata = array();
        $json = array();

		$path_model=$_SERVER['DOCUMENT_ROOT'] . '/1_Backend/5_dependent_dropdowns/modules/products/model/model/';
		$json = loadModel($path_model, "products_model", "obtain_cities", $_POST['idPoblac']);

		if($json){
			$jsondata["cities"] = $json;
			echo json_encode($jsondata);
			exit;
		}else{
			$jsondata["cities"] = "error";
			echo json_encode($jsondata);
			exit;
		}
	}*/
