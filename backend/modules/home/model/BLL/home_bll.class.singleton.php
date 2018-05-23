<?php

class home_bll{
    private $dao;
    private $db;
    static $_instance;

    private function __construct() {
        $this->dao = home_DAO::getInstance();
        $this->db = Db::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function obtain_best_offers_BLL(){
      return $this->dao->obtain_best_offers($this->db);
    }
    public function obtain_scroll_BLL($arrArgument){
      return $this->dao->obtain_scroll($this->db, $arrArgument);
    }
    public function obtain_names_BLL(){
      return $this->dao->obtain_names($this->db);
    }
    public function obtain_offer_BLL($arrArgument){
      return $this->dao->obtain_offer($this->db, $arrArgument);
    }
    public function list_offers_BLL($arrArgument){
      return $this->dao->list_offers($this->db, $arrArgument);
    }

    /*public function create_hotel_BLL($arrArgument){
      return $this->dao->create_hotel_DAO($this->db, $arrArgument);
    }

    public function obtain_countries_BLL($url){
      return $this->dao->obtain_countries_DAO($url);
    }

    public function obtain_provinces_BLL(){
      return $this->dao->obtain_provinces_DAO();
    }

    public function obtain_cities_BLL($arrArgument){
      return $this->dao->obtain_cities_DAO($arrArgument);
    }*/
}
