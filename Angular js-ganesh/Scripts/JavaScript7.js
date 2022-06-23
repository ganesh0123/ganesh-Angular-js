/// <reference path="angular.min.js" />


var myApp = angular
                   .module("myModule", [])
                   .controller("myController", function ($scope) {
                       var employees = [
                           {
                               Name: "ben", dateOfBirth: new Date("november23,2000"), gender: "male", Salary: 55000
                           },

                          {
                              tName: "mark", dateOfBirth: new Date("november23,2000"), gender: "male", Salary: 55000
                          },

                          {
                              tName: "ajai",dateOfBirth: new Date("november23,2000") , gender: "male", Salary: 55000
                          },

                          {
                              Name: "ben",dateOfBirth: new Date("november23,2000") , gender: "male", Salary: 55000
                   },
                       ];
                       $scope.employees = employees;
                   });