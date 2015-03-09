"use strict";

var app = angular.module("DeliveryEvolution",[
  "ngRoute"
]);

app.config([ "$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
  $routeProvider.when("/",{
    templateUrl: "app/pages/main.html",
    controller: "PageMain"
  });
  
  // TODO $locationProvider.html5Mode(true);
}]);

app.controller("Global",[ "$scope", function($scope){
  $scope.version = "0.1 dev";
}]);

app.controller("PageMain",[ "$scope", function($scope){
  
}]);