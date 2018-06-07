<?php
class controller_profile {
  function __construct() {
      include (LIBS . 'password.php');
    }
    function get_birth(){
      $arrValue = loadModel(MODEL_PROFILE, "profile_model", "get_birth", $_POST['id']);
      echo json_encode($arrValue[0]['birthday']);
      exit();
    }
    function update_birth(){
      $data = array('id' => $_POST['id'], 'birthday' => $_POST['birthday'], );
      $arrValue = loadModel(MODEL_PROFILE, "profile_model", "update_birth", $data);
      //$arrValue = loadModel(MODEL_PROFILE, "profile_model", "update_birth_social", $_POST['id']);
      exit();
    }
    function get_user(){
      //echo $_GET['param'];
      //$arrValue = loadModel(MODEL_PROFILE, "profile_model", "user", $_GET['param']);
      //echo json_encode($arrValue);
      exit();
    }


}
