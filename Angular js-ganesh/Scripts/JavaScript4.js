/// <reference path="angular.min.js" />


var myApp = angular
                   .module("myModule", [])
                   .controller("myController", function ($scope) {
                       var country = {
                           name: "india",
                           capital: "delhi",
                           flag:"/images/indian flag.png"
                       };
                       $scope.country = country;
                   });
                   
