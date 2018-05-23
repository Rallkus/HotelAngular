<?php
//echo json_encode("products_dao.class.singleton.php");
//exit;

class home_DAO {
    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if(!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }
    public function obtain_best_offers($db){
      $sql = "SELECT * FROM oferta_hotel ORDER BY `oferta_hotel`.`estrellas` DESC LIMIT 6";
      $stmt = $db->ejecutar($sql);
      return $db->listar($stmt);
    }
    public function obtain_scroll($db, $arrArgument){
      $ini = ($arrArgument-1)*6;
      $end = $arrArgument*6;
      $sql = "SELECT * FROM oferta_hotel ORDER BY `oferta_hotel`.`estrellas` DESC LIMIT $ini, $end";
      $stmt = $db->ejecutar($sql);
      return $db->listar($stmt);
    }
    public function obtain_names($db){
      $sql = "SELECT nombre FROM oferta_hotel";
      $stmt = $db->ejecutar($sql);
      return $db->listar($stmt);
    }
    public function obtain_offer($db, $arrArgument){
      $sql = "SELECT * FROM oferta_hotel WHERE id='$arrArgument'";
      $stmt = $db->ejecutar($sql);
      return $db->listar($stmt);
    }
    public function list_offers($db, $arrArgument){
      $sql = "SELECT * FROM oferta_hotel WHERE nombre='$arrArgument'";
      $stmt = $db->ejecutar($sql);
      return $db->listar($stmt);
    }

}//End productDAO
