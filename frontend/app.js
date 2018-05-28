var hotel = angular.module('hotel',['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ngCookies', 'infinite-scroll']);
//var hotel = angular.module('hotel',['ngRoute']);
hotel.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
                // Home
                .when("/", {
                  templateUrl: "frontend/modules/home/view/home.view.html",
                  controller: "homeCtrl",
                  resolve: {
                      hoteles: function (services) {
                          return services.get('home', 'name');
                      }
                  }
                })
                // Contact
                .when("/contact", {templateUrl: "frontend/modules/contact/view/contact.view.html",
                 controller: "contactCtrl"
             })

                // Events
                .when("/list/details/:id", {
                    templateUrl: "frontend/modules/list/view/details.view.html",
                    controller: "detailsCtrl",
                    resolve: {
                        oferta: function (services, $route) {
                            return services.get('list', 'details_hotel', $route.current.params.id);
                        }
                    }
                })

                .when("/events/:id", {
                    templateUrl: "frontend/modules/events/view/event.view.html",
                    controller: "detailsCtrl",
                    resolve: {
                        data: function (services, $route) {
                            return services.get('events', 'getEvent', $route.current.params.id);
                        }
                    }
                })

                .when("/events/where/:type", {
                    templateUrl: "frontend/modules/events/view/main.view.html",
                    controller: "eventsCtrl",
                    resolve: {
                        events: function (services, $route) {
                            return services.get('events', 'getEventWhere', $route.current.params.type);
                        }
                    }
                })

                .when("/myevents", {
                    templateUrl: "frontend/modules/events/view/main.view.html",
                    controller: "eventsfavoriteCtrl",
                    resolve: {
                        events: function (services, $route, cookiesService ) {
                            var user = cookiesService.GetCredentials();
                            return services.post('events', 'getfavorites', JSON.stringify({usuario: user.usuario}));
                        }
                    }
                })

                //Signup
                .when("/user/alta/", {
                    templateUrl: "frontend/modules/user/view/signup.view.html",
                    controller: "signupCtrl"
                })

                //Activar Usuario
                .when("/user/activar/:token", {
                    templateUrl: "frontend/modules/main/view/main.view.html",
                    controller: "verifyCtrl"
                })

                //Restore
                .when("/user/recuperar", {
                    templateUrl: "frontend/modules/user/view/restore.view.html",
                    controller: "restoreCtrl"
                })
                //ChangePass
                .when("/user/cambiarpass/:token", {
                    templateUrl: "frontend/modules/user/view/changepass.view.html",
                    controller: "changepassCtrl"
                })

                //Perfil
                .when("/user/profile/", {
                    templateUrl: "frontend/modules/user/view/profile.view.html",
                    controller: "profileCtrl",
                    resolve: {
                        user: function (services, cookiesService) {
                            var user = cookiesService.GetCredentials();
                            console.log(user);
                            if (user) {
                                return services.get('user', 'profile_filler', user.usuario);
                            }
                            return false;
                        }
                    }
                })

                // else 404
                .otherwise("/", {templateUrl: "frontend/modules/main/view/main.view.html", controller: "mainCtrl"});
    }]);
