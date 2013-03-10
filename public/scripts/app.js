'use strict';
//########################################################################
var app                      = angular.module('form_app', []);
app.config(function($routeProvider){
                    $routeProvider
                                  .when('/btn',   {templateUrl: 'partials/content.tpl', controller: 'BtnCtrl'})
                                  .when('/url',   {templateUrl: 'partials/content.tpl', controller: 'UrlCtrl'})
                                  .when('/home',  {templateUrl: 'partials/content.tpl', controller: 'MainCtrl'})
                                  .when('/email', {templateUrl: 'partials/content.tpl', controller: 'EmailCtrl'})
                                  .otherwise({redirectTo: "/home"});
                 });
//########################################################################
//######injecting the dependencies########################################
var dependencies             = ['$scope', 'Inputs'];
controllers.MainCtrl.$inject = dependencies;
//########################################################################
//######assigning the controllers to the application######################
app.controller(controllers);
app.directive(directives);
//########################################################################
