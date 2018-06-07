hotel.controller('loginCtrl', function ($scope, services, $location, localStorage, $rootScope, SocialLogin) {
  $scope.username=false;
  $scope.username_exists=false;
  $scope.cuenta=false;
  $scope.pass=false;
  $scope.user=false;
  $scope.form = {
      username: "",
      pass: ""
  };
  $scope.LoginFb = function () {
    SocialLogin.fb();
  };
  $scope.LoginTw = function () {
    SocialLogin.tw();
  };
  $scope.SubmitLogin = function () {
  var data = {"username": $scope.form.username, "pass": $scope.form.pass};
  var login_form = JSON.stringify(data);
  services.post('login', 'login', login_form).then(function (response) {
      //var json = JSON.parse(response);
      console.log(response);
      if(response.username){
        $scope.username=false;
        $scope.username_exists=true;
        $scope.cuenta=false;
      }else{
        $scope.username_exists=false;
        $scope.cuenta=false;
      }
      if(response.pass){
        $scope.pass=false;
        $scope.user=true;
        $scope.cuenta=false;
      }
      else{
        $scope.user=false;
        $scope.cuenta=false;
      }
      if(!response.pass && !response.username){
        if(response.cuenta){
          $scope.cuenta=true;
        }else{
          $rootScope.profileMenu=true;
          $rootScope.loginMenu=false;
          $rootScope.logoutMenu=true;
          $scope.cuenta=false;
          toastr.info("Bienvenido " + $scope.form.username);
          localStorage.save("tokken", response.tokken);
          $location.path('/');
        }
      }
  });
};
});

hotel.controller('logoutCtrl', function ($scope, $rootScope, $location, localStorage) {
  $scope.Home = function () {
    $location.path('/');

  };
  $scope.Logout = function () {
    $rootScope.profileMenu=false;
    $rootScope.loginMenu=true;
    $rootScope.logoutMenu=false;
    toastr.info("Has cerrado tu sesión");
    localStorage.clearStore("tokken");
    $location.path('/');
};
});

hotel.controller('recoverCtrl', function ($scope, services) {
  //$scope.email=email;
  $scope.error_correo=false;
  $scope.error_email=false;
  $scope.Send = function () {
    console.log($scope.email);
    var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    if(caract.test($scope.email) == false){
      $scope.error_email=true;
    }
    else{
      var data = {"email": $scope.email};
      var recover_form = JSON.stringify(data);
      services.post('login', 'email', recover_form).then(function (response) {
        if(response.email){
          $scope.error_email=false;
          $scope.error_correo=true;
        }else{
          $scope.error_correo=false;
        }
        if(!response.email){
          toastr.info("Te hemos enviado un email con instrucciones para cambiar la contraseña");
        }
      });
    }
    //$location.path('/');
  };
});

hotel.controller('actCtrl', function ($scope, $location) {
  toastr.info("Tu cuenta ha sido activada");
  $location.path('/');
});

hotel.controller('changeCtrl', function ($scope, $location, tokken, services) {
  $scope.tokken=tokken;
  console.log($scope.tokken);
  $scope.error_pass=false;
  $scope.error_tokken=false;
  $scope.Change = function () {
    if($scope.pass==""){
      $scope.error_pass=true;
    }else{
      var data = {"pass": $scope.pass, "tokken": $scope.tokken};
      var register_form = JSON.stringify(data);
      services.post('login', 'update_pass', register_form).then(function (response) {
        console.log(response.tokken);
        if(response.tokken){
          $scope.error_tokken=true;
        }else{
          toastr.info("Tu contraseña ha sido cambiada con éxito");
          $location.path('/');
        }
    });
    }
  };

  //toastr.info("Tu cuenta ha sido activada");
  //$location.path('/');
});

hotel.controller('registerCtrl', function ($scope, services, $location) {
var check = true;
  $scope.error_email=false;
  $scope.error_email_exists=false;
  $scope.error_username=false;
  $scope.error_username_exists=false;
  $scope.error_pass=false;
  $scope.form = {
      username: "",
      pass: "",
      email: ""
  };
  $scope.Register = function () {
    console.log($scope.form.username + "  dsadadas "+ $scope.form.pass);
  var check = true;
  var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
  if(caract.test($scope.form.email) == false){
    $scope.error_email=true;
    check=false;
  }else{
    $scope.error_email=false;
  }
  if($scope.form.username == ""){
    $scope.error_username=true;
    check=false;
  }else{
    $scope.error_username=false;
  }
  if($scope.form.pass == ""){
    $scope.error_pass=true;
    check=false;
  }else{
    $scope.error_pass=false;
  }
  if(check){
    var data = {"username": $scope.form.username, "pass": $scope.form.pass, "email": $scope.form.email};
    var register_form = JSON.stringify(data);
    services.post('login', 'register_user', register_form).then(function (response) {
        //var json = JSON.parse(response);
        console.log(response);
        if(response.username){
          $scope.error_username=false;
          $scope.error_username_exists=true;
        }else{
          $scope.error_username_exists=false;
        }
        if(response.email){
          $scope.error_email=false;
          $scope.error_email_exists=true;
        }
        else{
          $scope.error_email_exists=false;
        }
        if(!response.email && !response.username){
          toastr.info("Tu cuenta ha sido creada, te hemos enviado un email para que confirmes tu cuenta");
          $location.path('#/login');
        }
    });
  }

};
});
hotel.controller('menuCtrl', function ($scope, $rootScope, localStorage, services) {
    $rootScope.profileMenu=false;
    $rootScope.loginMenu=false;
    $rootScope.logoutMenu=false;
    //localStorage.clearStore("tokken");
    //console.log(localStorage.retrieve("tokken")===undefined);
    if(localStorage.retrieve("tokken")===undefined){
      $rootScope.loginMenu=true;
    }else{
      $rootScope.profileMenu=true;
      $rootScope.logoutMenu=true;
    }
});
hotel.controller('profileCtrl', function ($scope, services, user, load_com_prov_mun) {
  $scope.profile=user[0];
  console.log($scope.profile);

  $scope.comunidades = {};
  load_com_prov_mun.loadComunidad().then(function (response) {
    $scope.comunidades=response.data;

  });
  $scope.prov = function () {
    $scope.municipios={};
    load_com_prov_mun.loadProvincia($scope.selectedCom.CCOM).then(function (response) {
      $scope.provincias=response.data;
      $scope.profile.comunidad=$scope.selectedCom.CCOM;
    });
  };
  $scope.mun = function () {
    $scope.profile.provincia=$scope.selectedProv.CPRO;
      load_com_prov_mun.loadMunicipio($scope.selectedProv.CPRO).then(function (response) {
      $scope.municipios=response.data;

    });
  };
  $scope.selectMun = function () {
      $scope.profile.municipio=$scope.selectedMun.DMUN50;
    };

  $scope.update = function () {
    var data = {"tokken": $scope.profile.tokken2, "birthday": $scope.profile.birthday, "avatar": $scope.profile.avatar, "comunidad": $scope.profile.comunidad, "provincia": $scope.profile.provincia, "municipio": $scope.profile.municipio};
    var update = JSON.stringify(data);
    services.post('login', 'update_info', update).then(function (response) {
      toastr.info("Tu información ha sido actualizada con éxito");
    });
  };
  $scope.dropzoneConfig = {
        'options': {
            'url': 'backend/index.php?module=login&function=upload_avatar',
            addRemoveLinks: true,
            maxFileSize: 1000,
            dictResponseError: "Ha ocurrido un error en el server",
            acceptedFiles: 'image/*,.jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF,.rar,application/pdf,.psd'
        },
        'eventHandlers': {
            'sending': function (file, formData, xhr) {},
            'success': function (file, response) {
                console.log(response);
                response = JSON.parse(response);
                //console.log(response);
                if (response.result) {
                    $(".msg").addClass('msg_ok').removeClass('msg_error').text('Success Upload image!!');
                    $('.msg').animate({'right': '300px'}, 300);

                    console.log(response.data);
                    console.log($scope.profile.avatar);
                    $scope.profile.avatar = response.data;
                    console.log($scope.profile.avatar);


                } else {

                }
            },
            'removedfile': function (file, serverFileName) {
                if (file.xhr.response) {
                    $('.msg').text('').removeClass('msg_ok');
                    $('.msg').text('').removeClass('msg_error');
                    var data = jQuery.parseJSON(file.xhr.response);
                    //services.post("user", "delete_avatar", JSON.stringify({'filename': data}));
                }
            }
    }};
});
