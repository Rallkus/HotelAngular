<?php
  function loadModel($model_path, $model_name, $function, $arrArgument = ''){
    $model = $model_path . $model_name . '.class.singleton.php';

    if (file_exists($model)) {
        include_once($model);
        $modelClass = $model_name;

        if (!method_exists($modelClass, $function)){
            throw new Exception();
        }

        $obj = $modelClass::getInstance();
        if (isset($arrArgument)){
            return $obj->$function($arrArgument);
        }
    } else {
        throw new Exception();
    }
  }


  function loadView($rutaVista = '', $templateName = '', $arrPassValue = '') {
    $view_path = $rutaVista . $templateName;
    $arrData = '';

    if (file_exists($view_path)) {
        include_once($view_path);
    } else {

    }
}
