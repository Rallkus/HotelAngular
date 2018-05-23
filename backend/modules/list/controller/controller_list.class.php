<?php
class controller_list {
  function __construct() {

    }
    function begin() {
        require_once(VIEW_PATH_INC . "header.php");
        loadView('modules/list/view/', 'list.html');
        require_once(VIEW_PATH_INC . "footer.html");
        require_once(VIEW_PATH_INC . "menu.php");
    }
    function list() {
        $arrValue = loadModel(MODEL_LIST, "list_model", "obtain_best_offers");
        echo json_encode($arrValue);
        exit();
    }
    function details() {
      require_once(VIEW_PATH_INC . "header.php");
      loadView('modules/list/view/', 'details.html');
      require_once(VIEW_PATH_INC . "footer.html");
      require_once(VIEW_PATH_INC . "menu.php");
    }
    function details_hotel() {
      $arrArgument=$_POST['id'];
      $arrValue = loadModel(MODEL_LIST, "list_model", "obtain_offer", $arrArgument);
      echo json_encode($arrValue);
      exit();
    }
}
