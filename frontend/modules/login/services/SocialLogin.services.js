hotel.factory('SocialLogin', ['localStorage', '$location', 'services', function (localStorage, $location, services) {
  var service = {};
    service.fb = fb;
    service.tw = tw;
    return service;

      function fb() {
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
                var provider = new firebase.auth.FacebookAuthProvider();
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
                var data = {"username": result.user.displayName, "id": result.user.uid, "email": result.user.email, "avatar" : result.user.photoURL};
                var login = JSON.stringify(data);
                services.post('login', 'login_social', login).then(function (response) {
                  console.log(response);
                });

            })
            .catch(function(error) {
                console.log('Detectado un error:', error);
            });
      };
      function tw() {
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
                var data = {"username": result.user.displayName, "id": result.user.uid, "email": result.user.email, "avatar" : result.user.photoURL};
                var login = JSON.stringify(data);
                services.post('login', 'login_social', login).then(function (response) {
                  console.log(response);
                });

            })
            .catch(function(error) {
                console.log('Detectado un error:', error);
            });
      };
  }]);
