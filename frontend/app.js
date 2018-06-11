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
                .when("/profile", {
                  templateUrl: "frontend/modules/login/view/profile.view.html",
                  controller: "profileCtrl",
                  resolve: {
                      user: function (services, localStorage) {
                          return services.get('login', 'get_user', localStorage.retrieve("tokken"));
                      },
                      likes: function (services, localStorage) {
                          return services.get('login', 'get_likes', localStorage.retrieve("tokken"));
                      },
                      opinions: function (services, localStorage) {
                          return services.get('login', 'get_opinions', localStorage.retrieve("tokken"));
                      }
                  }
                })
                // Contact
                .when("/contact", {templateUrl: "frontend/modules/contact/view/contact.view.html",
                 controller: "contactCtrl"
             })

                 .when("/register", {templateUrl: "frontend/modules/login/view/register.view.html",
                  controller: "registerCtrl"
              })

                  .when("/recover", {templateUrl: "frontend/modules/login/view/recover_pass.view.html",
               controller: "recoverCtrl"
           })

                  .when("/change_pass/:tokken", {templateUrl: "frontend/modules/login/view/cambiar_pass.view.html",
                  controller: "changeCtrl",
                  resolve: {
                      tokken: function (services, $route) {
                          return $route.current.params.tokken;
                      }
                  }
              })

                // Events
                .when("/list/details/:id", {
                    templateUrl: "frontend/modules/list/view/details.view.html",
                    controller: "detailsCtrl",
                    resolve: {
                        oferta: function (services, $route) {
                            return services.get('list', 'details_hotel', $route.current.params.id);
                        },
                        total: function (services, $route) {
                            return services.get('login', 'get_total', $route.current.params.id);
                        },
                        average: function (services, $route) {
                            return services.get('login', 'get_average', $route.current.params.id);
                        }
                    }
                })
                .when("/list", {
                    templateUrl: "frontend/modules/list/view/list.view.html",
                    controller: "listCtrl",
                    resolve: {
                        list: function (services, $route) {
                          return services.get('list', 'list');
                        }
                    }
                })

                .when("/login/activar/:token", {
                    templateUrl: "frontend/modules/home/view/home.view.html",
                    controller: "actCtrl",
                    resolve: {
                      data: function (services, $route) {
                          return services.get('login', 'activar', $route.current.params.token);
                      }
                    }
                })

                .when("/login", {
                    templateUrl: "frontend/modules/login/view/login.view.html",
                    controller: "loginCtrl"
                })

                .when("/logout", {
                    templateUrl: "frontend/modules/login/view/logout.view.html",
                    controller: "logoutCtrl"
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
