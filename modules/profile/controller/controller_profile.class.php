<?php
class controller_profile {
  function __construct() {
      include (LIBS . 'password.php');
    }
    function begin() {
        require_once(VIEW_PATH_INC . "header.php");
        loadView('modules/profile/view/', 'profile.html');
        require_once(VIEW_PATH_INC . "footer.html");
        require_once(VIEW_PATH_INC . "menu.php");
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


}
