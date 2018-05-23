<?php

class profile_bll{
    private $dao;
    private $db;
    static $_instance;

    private function __construct() {
        $this->dao = profile_DAO::getInstance();
        $this->db = Db::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function count_BLL($arrArgument){
      return $this->dao->count($this->db, $arrArgument);
    }
    public function get_birth_BLL($arrArgument){
      return $this->dao->get_birth($this->db, $arrArgument);
    }
    public function get_birth_social_BLL($arrArgument){
      return $this->dao->get_birth_social($this->db, $arrArgument);
    }
    public function update_birth_BLL($arrArgument){
      return $this->dao->update_birth($this->db, $arrArgument);
    }
    public function user_BLL($arrArgument){
      return $this->dao->user($this->db, $arrArgument);
    }
    public function count_email_BLL($arrArgument){
      return $this->dao->count_email($this->db, $arrArgument);
    }
    public function count_user_BLL($arrArgument){
      return $this->dao->count_user($this->db, $arrArgument);
    }
    public function register_BLL($arrArgument){
      return $this->dao->register($this->db, $arrArgument);
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
