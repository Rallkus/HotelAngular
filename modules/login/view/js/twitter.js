
        $( document ).ready(function() {


          var user = Tools.readCookie("user");
            console.log('user: ' + user);
          $("#logintw").on("click", function(e){
            var config = {
                apiKey: "AIzaSyBN_GT7ZOdsc_5IMTc443HQwg3wO2EMRdQ",
                authDomain: "hotel-1525370237651.firebaseapp.com",
                databaseURL: "https://hotel-1525370237651.firebaseio.com",
                projectId: "hotel-1525370237651",
                storageBucket: "hotel-1525370237651.appspot.com",
                messagingSenderId: "277455855331"
              };
              firebase.initializeApp(config);

                    // creo el provider de autenticación
                    var provider = new firebase.auth.TwitterAuthProvider();
                    // opcionalmente modifico el scope
                    //provider.addScope('user_friends');

                    // accedo al servicio de autenticación
                    var authService = firebase.auth();
            authService.signInWithPopup(provider)
                .then(function(result) {
                    console.log('autenticado usuario ', result.user);
                    console.log(result.user.uid);
                    console.log(result.user.displayName);
                    console.log(result.user.email);
                    console.log(result.user.photoURL);
                    var dataTosend='username='+result.user.displayName+'&id='+result.user.uid+'&email='+""+'&avatar='+result.user.photoURL;
                    $.ajax({
                         type: "POST",
                         url: "../login/login_social",
                         data: dataTosend,
                         datatype :'json',
                         success: function(data){
                           console.log(data);
                           Tools.eraseCookie("user");
                           Tools.createCookie("user", result.user.uid + "|" + result.user.photoURL + "|" + result.user.displayName, 1);
                           //$(location).attr('href', '../../Hotel/home/')
                         }
                       });
                })
                .catch(function(error) {
                    console.log('Detectado un error:', error);
                });
          });
        });
