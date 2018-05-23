<?php
class controller_login {
  function __construct() {
      include (LIBS . 'password.php');
    }
    function begin() {
        require_once(VIEW_PATH_INC . "header.php");
        loadView('modules/login/view/', 'login.html');
        require_once(VIEW_PATH_INC . "footer.html");
        require_once(VIEW_PATH_INC . "menu.php");
    }
    function register() {
        require_once(VIEW_PATH_INC . "header.php");
        loadView('modules/login/view/', 'signup.html');
        require_once(VIEW_PATH_INC . "footer.html");
        require_once(VIEW_PATH_INC . "menu.php");
    }
    function logout() {
        require_once(VIEW_PATH_INC . "header.php");
        loadView('modules/login/view/', 'logout.html');
        require_once(VIEW_PATH_INC . "footer.html");
        require_once(VIEW_PATH_INC . "menu.php");
    }
    function recover_pass() {
        require_once(VIEW_PATH_INC . "header.php");
        loadView('modules/login/view/', 'recover_pass.html');
        require_once(VIEW_PATH_INC . "footer.html");
        require_once(VIEW_PATH_INC . "menu.php");
    }
    function cambiar_pass() {
        require_once(VIEW_PATH_INC . "header.php");
        loadView('modules/login/view/', 'cambiar_pass.html');
        require_once(VIEW_PATH_INC . "footer.html");
        require_once(VIEW_PATH_INC . "menu.php");
    }
    function update_pass() {
      $error = array('tokken' => false, );
      $user = array('pass' => "", 'email' => "", );
      $arrValue = loadModel(MODEL_LOGIN, "login_model", "count_tokken", $_POST['tokken']);
      if($arrValue[0]['number']==0){
        $error['tokken']=true;
      }else{
        $arrValue = loadModel(MODEL_LOGIN, "login_model", "select_email", $_POST['tokken']);
        $user['email']=$arrValue[0]['email'];
        $user['pass'] = password_hash($_POST['pass'], PASSWORD_BCRYPT);
        $arrValue = loadModel(MODEL_LOGIN, "login_model", "update_pass", $user);
      }
      echo json_encode($error);
      exit();
    }
    function email() {
      $error = array('email' => false,);
      $email = $_POST['email'];
      $arrValue = loadModel(MODEL_LOGIN, "login_model", "count_email", $email);
      if($arrValue[0]['number']==0){
        $error['email']=true;
      }else{
        $tokken = md5(uniqid(rand(), true));
        $email_mailgun = array('type' => "modificacion", 'tokken' => $tokken,'inputEmail' => $email,);
        enviar_email($email_mailgun);
        $arrValue = loadModel(MODEL_LOGIN, "login_model", "count_email_recover", $email);
        $data = array('email' => $email, 'tokken' => $tokken,);
        if($arrValue[0]['number']==0){
          $arrValue = loadModel(MODEL_LOGIN, "login_model", "insert_recover", $data);
        }else{
          $arrValue = loadModel(MODEL_LOGIN, "login_model", "update_recover", $data);
        }
      }
      echo json_encode($error);

      exit();
    }
    function login_social() {
      $user = $_POST;
      if($user['email']==null){
        $user['email']="";
      }
      echo $user['email'];
      $arrValue = loadModel(MODEL_LOGIN, "login_model", "count_social", $user['id']);
      echo $arrValue[0]['number'];
      if($arrValue[0]['number']==0){
        $arrValue = loadModel(MODEL_LOGIN, "login_model", "login_social", $user);
      }

      exit();
    }
    function activar() {
      $tokken = $_POST['tokken'];
      $arrValue = loadModel(MODEL_LOGIN, "login_model", "count_tokken", $tokken);
      echo $arrValue[0]['number'];
      if($arrValue[0]['number']==1){
        $arrValue = loadModel(MODEL_LOGIN, "login_model", "activate_tokken", $tokken);
      }

      exit();
    }
    function register_user() {
        $error = array('username' => false, 'email' => false,);
        $username = $_POST['username'];
        $email = $_POST['email'];
        $user = $_POST;
        $arrValue = loadModel(MODEL_LOGIN, "login_model", "count", $username);
        if($arrValue[0]['number']==0){
          $arrValue = loadModel(MODEL_LOGIN, "login_model", "count_email", $email);
          if($arrValue[0]['number']==0){
            $user['pass'] = password_hash($_POST['pass'], PASSWORD_BCRYPT);
            $user['tokken'] = md5(uniqid(rand(), true));
            $arrValue = loadModel(MODEL_LOGIN, "login_model", "register", $user);
            $email = array('type' => "alta", 'tokken' => $user['tokken'],'inputEmail' => $user['email'],);
            enviar_email($email);
          }else{
            $error['email']=true;
          }
        }else{
          $error['username']=true;
          $arrValue = loadModel(MODEL_LOGIN, "login_model", "count_email", $email);
          if($arrValue[0]['number']==0){

          }else{
            $error['email']=true;
          }
        }
        echo json_encode($error);
        exit();
    }
    function login() {
        $error = array('username' => false, 'pass' => false, 'id' => false, 'avatar' => false, 'cuenta' => true,);
        $username = $_POST['username'];
        $pass = $_POST['pass'];
        $user = $_POST;
        $arrValue = loadModel(MODEL_LOGIN, "login_model", "count", $username);
        if($arrValue[0]['number']==0){
          $error['username']=true;
        }else{
          $arrValue = loadModel(MODEL_LOGIN, "login_model", "user", $user);
          if($arrValue[0]['activo']=="yes"){
            $error['cuenta']=false;
          }
          $error['id'] = $arrValue[0]['id'];
          $error['avatar'] = $arrValue[0]['avatar'];
          $arrValue = password_verify($user['pass'], $arrValue[0]['pass']);
          if(!$arrValue){
            $error['cuenta']=true;
            $error['pass']=true;
            $error['id']=null;
            $error['avatar']=null;
          }
        }
        echo json_encode($error);
        exit();
    }
}
