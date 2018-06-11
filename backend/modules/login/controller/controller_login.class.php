<?php
class controller_login {
  function __construct() {
      include (LIBS . 'password.php');
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
    function update_info() {
      $arrValue = loadModel(MODEL_LOGIN, "login_model", "update_info", $_POST);
      exit();
    }
    function get_likes() {
      $arrValue = loadModel(MODEL_LOGIN, "login_model", "get_user", $_GET['param']);
      $arrValue = loadModel(MODEL_LOGIN, "login_model", "get_likes", $arrValue[0]['id']);
      echo json_encode($arrValue);
      exit();
    }
    function get_total() {
      $arrValue = loadModel(MODEL_LOGIN, "login_model", "get_total", $_GET['param']);
      echo json_encode($arrValue);
      exit();
    }
    function get_average() {
      $arrValue = loadModel(MODEL_LOGIN, "login_model", "get_average", $_GET['param']);
      echo json_encode($arrValue);
      exit();
    }
    function get_opinions() {
      $arrValue = loadModel(MODEL_LOGIN, "login_model", "get_user", $_GET['param']);
      $arrValue = loadModel(MODEL_LOGIN, "login_model", "get_opinions", $arrValue[0]['id']);
      echo json_encode($arrValue);
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
      $arrValue = loadModel(MODEL_LOGIN, "login_model", "count_social", $user['id']);
      if($arrValue[0]['number']==0){
        $arrValue = loadModel(MODEL_LOGIN, "login_model", "login_social", $user);
      }
      $user['tokken'] = md5(uniqid(rand(), true));
      $arrValue = loadModel(MODEL_LOGIN, "login_model", "update_tokken_social", $user);
      echo json_encode($user['tokken']);
      exit();
    }
    function get_user(){
      //echo $_GET['param'];
      $arrValue = loadModel(MODEL_LOGIN, "login_model", "get_user", $_GET['param']);
      echo json_encode($arrValue);
      exit();
    }
    function likes(){
      //echo $_GET['param'];
      $arrValue = loadModel(MODEL_LOGIN, "login_model", "get_user", $_POST['tokken']);
      $ids['user'] = $arrValue[0]['id'];
      $ids['oferta'] = $_POST['id'];
      $arrValue = loadModel(MODEL_LOGIN, "login_model", "count_likes", $ids);
      if($arrValue[0]['number']==0){
        $arrValue = loadModel(MODEL_LOGIN, "login_model", "insert_like", $ids);
      }
      exit();
    }
    function insert_opinion(){
      //echo $_GET['param'];
      $arrValue = loadModel(MODEL_LOGIN, "login_model", "get_user", $_POST['tokken']);
      $ids['user'] = $arrValue[0]['id'];
      $ids['oferta'] = $_POST['id'];
      $ids['rating'] = $_POST['rating'];
      $arrValue = loadModel(MODEL_LOGIN, "login_model", "insert_opinion", $ids);
      exit();
    }
    function activar() {
      $tokken = $_GET['param'];
      $arrValue = loadModel(MODEL_LOGIN, "login_model", "count_tokken_user", $tokken);
      if($arrValue[0]['number']==1){
        $arrValue = loadModel(MODEL_LOGIN, "login_model", "activate_tokken", $tokken);
      }

      exit();
    }
    function upload_avatar() {
        $result_avatar = upload_files();
        $_SESSION['avatar'] = $result_avatar;
        echo json_encode($result_avatar);
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
        $error = array('username' => false, 'pass' => false, 'id' => false, 'avatar' => false, 'cuenta' => true, 'tokken' => "");
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
          }else{
            $error['tokken'] = md5(uniqid(rand(), true));
            $user['tokken2']=$error['tokken'];
            $arrValue = loadModel(MODEL_LOGIN, "login_model", "update_tokken", $user);
          }
        }
        echo json_encode($error);
        exit();
    }
}
