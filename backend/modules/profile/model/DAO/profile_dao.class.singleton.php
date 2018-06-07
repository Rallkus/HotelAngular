<?php
//echo json_encode("products_dao.class.singleton.php");
//exit;

class profile_DAO {
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
    public function get_birth($db, $arrArgument){
      $sql = "SELECT birthday as birthday FROM user WHERE id = '$arrArgument'";
      $stmt = $db->ejecutar($sql);
      return $db->listar($stmt);
    }
    public function get_birth_social($db, $arrArgument){
      $sql = "SELECT birthday as birthday FROM user_social WHERE id = '$arrArgument'";
      $stmt = $db->ejecutar($sql);
      return $db->listar($stmt);
    }
    public function update_birth($db, $arrArgument){
      $id=$arrArgument['id'];
      $birthday=$arrArgument['birthday'];
      $sql = "UPDATE user SET birthday='$birthday' WHERE id = '$id'";
      return $db->ejecutar($sql);
    }
    public function count_email($db, $arrArgument){
      $sql = "SELECT COUNT(*) as number FROM user WHERE email = '$arrArgument'";
      $stmt = $db->ejecutar($sql);
      return $db->listar($stmt);
    }
    public function count_user($db, $arrArgument){
      $nombre=$arrArgument['username'];
      $pass=$arrArgument['pass'];
      $sql = "SELECT COUNT(*) as number FROM user WHERE nombre = '$nombre' AND pass = '$pass'";
      $stmt = $db->ejecutar($sql);
      return $db->listar($stmt);
    }
    public function user($db, $arrArgument){
      $sql = "SELECT * FROM user WHERE tokken2 = '$arrArgument'";
      $stmt = $db->ejecutar($sql);
      return $db->listar($stmt);
    }


}//End productDAO
