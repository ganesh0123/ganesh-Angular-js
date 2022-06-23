/// <reference path="angular.min.js" />


var myApp = angular
                   .module("myModule", [])
                   .controller("myController", function ($scope) {
                       var employees = [
                           {
                               firstName: "ben", lastname: "Hastings", gender: "male", Salary: 55000
                           },

                          {
                              firstName: "mark", lastname: "ganesh", gender: "male", Salary: 55000
                          },

                          {
                              firstName: "ajai", lastname: "Hastings", gender: "male", Salary: 55000
                          },

                          {
                              firstName: "ben", lastname: "vinoth", gender: "male", Salary: 55000
                          },
                       ];
                       $scope.employees = employees;
                   });
                     