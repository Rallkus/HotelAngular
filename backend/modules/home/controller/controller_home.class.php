<?php
class controller_home {
  function __construct() {

    }
    function list() {
        $arrValue = loadModel(MODEL_HOME, "home_model", "obtain_best_offers");
        echo json_encode($arrValue);
        exit();
    }
    function details() {
      $arrArgument=$_POST['id'];
      $arrValue = loadModel(MODEL_HOME, "home_model", "obtain_offer", $arrArgument);
      echo json_encode($arrValue);
      exit();
    }
    function scroll() {
      $arrArgument = $_POST['page'];
      $arrValue = loadModel(MODEL_HOME, "home_model", "obtain_scroll", $arrArgument);
      echo json_encode($arrValue);
      exit();
    }
    function search() {
      $arrArgument=$_POST['nombre'];
      $arrValue = loadModel(MODEL_HOME, "home_model", "list_offers", $arrArgument);
      echo json_encode($arrValue);
      exit();
    }
    function name() {
      $arrValue = loadModel(MODEL_HOME, "home_model", "obtain_names");
      echo json_encode($arrValue);
      exit();
    }
}
