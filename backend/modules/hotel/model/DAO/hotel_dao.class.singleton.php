<?php
//echo json_encode("products_dao.class.singleton.php");
//exit;

class hotel_DAO {
    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if(!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function create_hotel_DAO($db, $arrArgument) {
        $name = $arrArgument['name'];
        $price = $arrArgument['price'];
        $fecha_inicio = $arrArgument['fecha_inicio'];
        $fecha_final = $arrArgument['fecha_final'];
        $valoracion = $arrArgument['valoracion'];
        $observaciones = $arrArgument['observaciones'];
        $comunidad = $arrArgument['comunidad'];
        $provincia = $arrArgument['provincia'];
        $municipio = $arrArgument['municipio'];
        $wifi = $arrArgument['wifi'];
        $piscina = $arrArgument['piscina'];
        $playa = $arrArgument['playa'];
        $actividades = $arrArgument['actividades'];
        $comida = $arrArgument['comida'];
        $spa = $arrArgument['spa'];
        $imagen = $arrArgument['imagen'];


        $sql = "INSERT INTO oferta_hotel (imagen, nombre, fecha_entrada, fecha_salida,"
                . " comunidad, provincia, municipio, estrellas, wifi, piscina, playa, actividades,"
                . " comida, spa, observaciones, price) VALUES ('$imagen', '$name',"
                . " '$fecha_inicio', '$fecha_final', '$comunidad', '$provincia', "
                . " '$municipio', '$valoracion', '$wifi', '$piscina', '$playa', '$actividades',"
                . " '$comida', '$spa', '$observaciones','$price')";

        return $db->ejecutar($sql);
    }
    public function create_product_DAO($db, $arrArgument) {
        $prodname = $arrArgument['prodname'];
        $prodref = $arrArgument['prodref'];
        $prodprice = $arrArgument['prodprice'];
        $date_reception = $arrArgument['date_reception'];
        $date_expiration = $arrArgument['date_expiration'];
        $category = $arrArgument['category'];
        $packaging = $arrArgument['packaging'];
        $country = $arrArgument['country'];
        $province = $arrArgument['province'];
        $city = $arrArgument['city'];
        $proddesc = $arrArgument['proddesc'];
        $prodpic = $arrArgument['prodpic'];

        $cat1=0;
        $cat2=0;
        $cat3=0;
        $cat4=0;

        foreach ($category as $indice) {
            if ($indice === 'cat1')
                $cat1 = 1;
            if ($indice === 'cat2')
                $cat2 = 1;
            if ($indice === 'cat3')
                $cat3 = 1;
            if ($indice === 'cat4')
                $cat4 = 1;
        }

        $sql = "INSERT INTO products (prodname, prodref, prodprice, date_reception,"
                . " date_expiration, cat1, cat2, cat3, cat4, packaging, country, province,"
                . " city, proddesc, prodpic) VALUES ('$prodname', '$prodref',"
                . " '$prodprice', '$date_reception', '$date_expiration', '$cat1', "
                . " '$cat2', '$cat3', '$cat4', '$packaging', '$country', '$province',"
                . " '$city', '$proddesc', '$prodpic')";

        return $db->ejecutar($sql);
    }

}//End productDAO
