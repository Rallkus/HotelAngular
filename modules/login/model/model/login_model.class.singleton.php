<?php
//echo json_encode("products model class");
//exit;

class login_model {
    private $bll;
    static $_instance;

    private function __construct() {
        $this->bll = login_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function count($arrArgument){
        return $this->bll->count_BLL($arrArgument);
    }
    public function update_pass($arrArgument){
        return $this->bll->update_pass_BLL($arrArgument);
    }
    public function select_email($arrArgument){
        return $this->bll->select_email_BLL($arrArgument);
    }
    public function activate_tokken($arrArgument){
        return $this->bll->activate_tokken_BLL($arrArgument);
    }
    public function update_recover($arrArgument){
        return $this->bll->update_recover_BLL($arrArgument);
    }
    public function count_social($arrArgument){
        return $this->bll->count_social_BLL($arrArgument);
    }
    public function count_tokken($arrArgument){
        return $this->bll->count_tokken_BLL($arrArgument);
    }
    public function user($arrArgument){
        return $this->bll->user_BLL($arrArgument);
    }
    public function count_email($arrArgument){
        return $this->bll->count_email_BLL($arrArgument);
    }
    public function count_email_recover($arrArgument){
        return $this->bll->count_email_recover_BLL($arrArgument);
    }
    public function count_user($arrArgument){
        return $this->bll->count_user_BLL($arrArgument);
    }
    public function register($arrArgument){
        return $this->bll->register_BLL($arrArgument);
    }
    public function login_social($arrArgument){
        return $this->bll->login_social_BLL($arrArgument);
    }
    public function insert_recover($arrArgument){
        return $this->bll->insert_recover_BLL($arrArgument);
    }
    /*
    public function create_hotel_offer($arrArgument) {
        return $this->bll->create_hotel_BLL($arrArgument);
    }

    public function obtain_countries($url){
        return $this->bll->obtain_countries_BLL($url);
    }

    public function obtain_provinces(){
        return $this->bll->obtain_provinces_BLL();
    }

    public Function obtain_cities($arrArgument){
        return $this->bll->obtain_cities_BLL($arrArgument);
    }*/

}
