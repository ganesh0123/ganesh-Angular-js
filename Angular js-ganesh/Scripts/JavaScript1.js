/// <reference path="angular.min.js" />


var myApp = angular.module("myModule", []);
var myController = function ($scope) {
    $scope.message = "Angularjs Tutorial";
};
myApp.controller("myController", function ($scope) {
    $scope.message = "Angularjs Tutorial";
});