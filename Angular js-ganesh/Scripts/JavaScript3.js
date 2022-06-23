/// <reference path="angular.min.js" />

var myApp = angular
                  .module("myModule", [])
                  .controller("myController",function($scope){
                     var employee = {
                          firstName: "ben",
                          lastName : "Hasting",
                          gender   : "male"
                      };
                      $scope.employee = employee;
                 });