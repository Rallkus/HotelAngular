<?php
//echo json_encode("products_dao.class.singleton.php");
//exit;

class login_DAO {
    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if(!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }
    public function count($db, $arrArgument){
      $sql = "SELECT COUNT(*) as number FROM user WHERE nombre = '$arrArgument'";
      $stmt = $db->ejecutar($sql);
      return $db->listar($stmt);
    }
    public function select_email($db, $arrArgument){
      $sql = "SELECT email as email FROM recover_pass WHERE tokken = '$arrArgument'";
      $stmt = $db->ejecutar($sql);
      return $db->listar($stmt);
    }
    public function count_social($db, $arrArgument){
      $sql = "SELECT COUNT(*) as number FROM user_social WHERE id = '$arrArgument'";
      $stmt = $db->ejecutar($sql);
      return $db->listar($stmt);
    }
    public function count_email($db, $arrArgument){
      $sql = "SELECT COUNT(*) as number FROM user WHERE email = '$arrArgument'";
      $stmt = $db->ejecutar($sql);
      return $db->listar($stmt);
    }
    public function count_email_recover($db, $arrArgument){
      $sql = "SELECT COUNT(*) as number FROM recover_pass WHERE email = '$arrArgument'";
      $stmt = $db->ejecutar($sql);
      return $db->listar($stmt);
    }
    public function count_tokken($db, $arrArgument){
      $sql = "SELECT COUNT(*) as number FROM recover_pass WHERE tokken = '$arrArgument'";
      $stmt = $db->ejecutar($sql);
      return $db->listar($stmt);
    }
    public function activate_tokken($db, $arrArgument){
      $sql = "UPDATE user SET activo = 'yes' WHERE tokken = '$arrArgument'";
      return $db->ejecutar($sql);
    }
    public function update_pass($db, $arrArgument){
      $email=$arrArgument['email'];
      $pass=$arrArgument['pass'];
      $sql = "UPDATE user SET pass = '$pass' WHERE email = '$email'";
      return $db->ejecutar($sql);
    }
    public function update_recover($db, $arrArgument){
      $email = $arrArgument['email'];
      $tokken= $arrArgument['tokken'];
      $sql = "UPDATE recover_pass SET tokken = '$tokken' WHERE email = '$email'";
      return $db->ejecutar($sql);
    }
    public function count_user($db, $arrArgument){
      $nombre=$arrArgument['username'];
      $pass=$arrArgument['pass'];
      $sql = "SELECT COUNT(*) as number FROM user WHERE nombre = '$nombre' AND pass = '$pass'";
      $stmt = $db->ejecutar($sql);
      return $db->listar($stmt);
    }
    public function user($db, $arrArgument){
      $nombre=$arrArgument['username'];
      $sql = "SELECT id as id, pass as pass, avatar as avatar, activo as activo FROM user WHERE nombre = '$nombre'";
      $stmt = $db->ejecutar($sql);
      return $db->listar($stmt);
    }
    public function register($db, $arrArgument){
      $nombre=$arrArgument['username'];
      $email=$arrArgument['email'];
      $pass=$arrArgument['pass'];
      $tokken = $arrArgument['tokken'];
      $imagen="/Hotel/media/default-avatar.png";
      $sql="INSERT INTO user (nombre, email, pass, tokken,"
              . " activo, avatar) VALUES ('$nombre', '$email',"
              . " '$pass', '$tokken', 'no', '$imagen')";
      return $db->ejecutar($sql);
    }
    public function login_social($db, $arrArgument){
      $nombre=$arrArgument['username'];
      $email=$arrArgument['email'];
      $id=$arrArgument['id'];
      $avatar=$arrArgument['avatar'];
      $sql="INSERT INTO user_social (id, email, username,"
              . " avatar) VALUES ('$id', "
              . "'$email', '$nombre', '$avatar')";
      return $db->ejecutar($sql);
    }
    public function insert_recover($db, $arrArgument){
      $email=$arrArgument['email'];
      $tokken=$arrArgument['tokken'];
      $sql="INSERT INTO recover_pass (email, tokken"
              . ") VALUES ('$email', '$tokken')";
      return $db->ejecutar($sql);
    }


}//End productDAO
