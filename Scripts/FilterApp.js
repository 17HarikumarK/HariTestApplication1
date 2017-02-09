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
					$scope.textName = "HariKumarK";
					$scope.sortByValue = "name";
					$scope.DescFlag = false;
					
					$scope.sortData = function(columnName){
						$scope.DescFlag = ($scope.sortByValue == columnName) ? !$scope.DescFlag : false;
						$scope.sortByValue = columnName;
					};
					
					$scope.includeArrow = function(columnName){
						if($scope.sortByValue == columnName){
							return $scope.DescFlag ? 'arrow-down' : 'arrow-up'
						}
					}
					
					$scope.search = function(item){
						if($scope.searchText == undefined){
							return true;
						}else{
							if ((item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) ||
							(item.gender.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1)){
								return true;
							}
						}
					return false;	
					}
					
                });