<?php

class login_bll{
    private $dao;
    private $db;
    static $_instance;

    private function __construct() {
        $this->dao = login_DAO::getInstance();
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
    public function update_pass_BLL($arrArgument){
      return $this->dao->update_pass($this->db, $arrArgument);
    }
    public function select_email_BLL($arrArgument){
      return $this->dao->select_email($this->db, $arrArgument);
    }
    public function activate_tokken_BLL($arrArgument){
      return $this->dao->activate_tokken($this->db, $arrArgument);
    }
    public function update_recover_BLL($arrArgument){
      return $this->dao->update_recover($this->db, $arrArgument);
    }
    public function count_social_BLL($arrArgument){
      return $this->dao->count_social($this->db, $arrArgument);
    }
    public function count_tokken_BLL($arrArgument){
      return $this->dao->count_tokken($this->db, $arrArgument);
    }
    public function user_BLL($arrArgument){
      return $this->dao->user($this->db, $arrArgument);
    }
    public function count_email_recover_BLL($arrArgument){
      return $this->dao->count_email_recover($this->db, $arrArgument);
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
    public function login_social_BLL($arrArgument){
      return $this->dao->login_social($this->db, $arrArgument);
    }
    public function insert_recover_BLL($arrArgument){
      return $this->dao->insert_recover($this->db, $arrArgument);
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
