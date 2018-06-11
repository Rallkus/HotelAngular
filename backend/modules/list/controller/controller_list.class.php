<?php
class controller_list {
  function __construct() {

    }
    function list() {
        $arrValue = loadModel(MODEL_LIST, "list_model", "obtain_best_offers");
        //print_r($arrValue);
        $i = 0;
        foreach ($arrValue as $hotel){
          $url = 'https://maps.googleapis.com/maps/api/geocode/json?address='.$hotel['municipio'].'&key=AIzaSyDPKdo_uyKw27vzZ4xB-4xRUjkMkemGZCQ';
          $content = file_get_contents($url);
          $json = json_decode($content, true);
          $hotel['lat'] = $json['results']['0']['geometry']['location']['lat'];
          $hotel['lng'] = $json['results']['0']['geometry']['location']['lng'];
          $hoteles[$i] = $hotel;
          $i = $i + 1;
        }
        echo json_encode($hoteles);
        exit();
    }
    function details_hotel() {
      $arrArgument=$_GET['param'];
      $arrValue = loadModel(MODEL_LIST, "list_model", "obtain_offer", $arrArgument);
      echo json_encode($arrValue);
      exit();
    }

}
