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
    public function count_likes($db, $arrArgument){
      $id_user=$arrArgument['user'];
      $id_oferta=$arrArgument['oferta'];
      $sql = "SELECT COUNT(*) as number FROM likes WHERE id_user = '$id_user' AND id_oferta='$id_oferta'";
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
    public function count_tokken_user($db, $arrArgument){
      $sql = "SELECT COUNT(*) as number FROM user WHERE tokken = '$arrArgument'";
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
    public function update_info($db, $arrArgument){
      $tokken=$arrArgument['tokken'];

      $birthday=$arrArgument['birthday'];
      $avatar=$arrArgument['avatar'];

      $comunidad=$arrArgument['comunidad'];
      $provincia=$arrArgument['provincia'];
      echo $provincia;
      $municipio=$arrArgument['municipio'];
      $sql = "UPDATE user SET birthday = '$birthday', comunidad='$comunidad', provincia='$provincia', municipio='$municipio', avatar='$avatar' WHERE tokken2 = '$tokken'";
      return $db->ejecutar($sql);
    }
    public function update_tokken($db, $arrArgument){
      $tokken=$arrArgument['tokken2'];
      $username=$arrArgument['username'];
      $sql = "UPDATE user SET tokken2 = '$tokken' WHERE nombre = '$username'";
      return $db->ejecutar($sql);
    }
    public function update_tokken_social($db, $arrArgument){
      $tokken=$arrArgument['tokken'];
      $id=$arrArgument['id'];
      $sql = "UPDATE user_social SET tokken2 = '$tokken' WHERE id = '$id'";
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
    public function get_user($db, $arrArgument){
      $sql = "SELECT * FROM user WHERE tokken2 = '$arrArgument'";
      $stmt = $db->ejecutar($sql);
      return $db->listar($stmt);
    }
    public function get_likes($db, $arrArgument){
      $sql = "SELECT * FROM likes WHERE id_user = '$arrArgument'";
      $stmt = $db->ejecutar($sql);
      return $db->listar($stmt);
    }
    public function get_average($db, $arrArgument){
      $sql = "SELECT AVG(rating) as rating FROM opinion WHERE id_oferta = '$arrArgument'";
      $stmt = $db->ejecutar($sql);
      return $db->listar($stmt);
    }
    public function get_total($db, $arrArgument){
      $sql = "SELECT COUNT(*) as count FROM opinion WHERE id_oferta = '$arrArgument'";
      $stmt = $db->ejecutar($sql);
      return $db->listar($stmt);
    }
    public function get_opinions($db, $arrArgument){
      $sql = "SELECT * FROM opinion WHERE id_user = '$arrArgument'";
      $stmt = $db->ejecutar($sql);
      return $db->listar($stmt);
    }
    public function register($db, $arrArgument){
      $nombre=$arrArgument['username'];
      $email=$arrArgument['email'];
      $pass=$arrArgument['pass'];
      $tokken = $arrArgument['tokken'];
      $imagen="/Hotel/backend/media/default-avatar.png";
      $sql="INSERT INTO user (nombre, email, pass, tokken,"
              . " activo, avatar, tokken2, comunidad, provincia, municipio, playa, montanya, campo) VALUES ('$nombre', '$email',"
              . " '$pass', '$tokken', 'no', '$imagen', '', '', '', '', '', '', '')";
      return $db->ejecutar($sql);
    }
    public function login_social($db, $arrArgument){
      $nombre=$arrArgument['username'];
      $email=$arrArgument['email'];
      $id=$arrArgument['id'];
      $avatar=$arrArgument['avatar'];
      $sql="INSERT INTO user_social (id, email, username,"
              . " avatar, tokken2, comunidad, provincia, municipio, playa, montanya, campo) VALUES ('$id', "
              . "'$email', '$nombre', '$avatar', '', '', '', '', '', '', '')";
      return $db->ejecutar($sql);
    }
    public function insert_recover($db, $arrArgument){
      $email=$arrArgument['email'];
      $tokken=$arrArgument['tokken'];
      $sql="INSERT INTO recover_pass (email, tokken"
              . ") VALUES ('$email', '$tokken')";
      return $db->ejecutar($sql);
    }
    public function insert_like($db, $arrArgument){
      $id_user=$arrArgument['user'];
      $id_oferta=$arrArgument['oferta'];
      $sql="INSERT INTO likes (id_user, id_oferta"
              . ") VALUES ('$id_user', '$id_oferta')";
      return $db->ejecutar($sql);
    }
    public function insert_opinion($db, $arrArgument){
      $id_user=$arrArgument['user'];
      $id_oferta=$arrArgument['oferta'];
      $rating = $arrArgument['rating'];
      $sql="INSERT INTO opinion (id_user, id_oferta, rating"
              . ") VALUES ('$id_user', '$id_oferta', '$rating')";
      return $db->ejecutar($sql);
    }


}//End productDAO
