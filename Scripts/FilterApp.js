var filterCtrl = angular
                .module("filterApp",[])
                .controller("filerCtrl", function($scope){
                    var employees= [
                        {name: "Hari", dateOfBirth: new Date("November 17, 1989"), gender: "Male", salary : 48000},
                        {name: "Priya", dateOfBirth: new Date("May 17, 1991"), gender: "Female", salary : 55000.846},
                        {name: "Bala", dateOfBirth: new Date("Febraury 17, 1990"), gender: "Male", salary : 45000},
                        {name: "Yuva", dateOfBirth: new Date("Febraury 19, 1990"), gender: "Male", salary : 65000.449},
                        {name: "Peep", dateOfBirth: new Date("March 20, 1990"), gender: "Male", salary : 30000},
                                                
                    ];
                    $scope.employees = employees;
                    $scope.limitRows = 3;
                });