var myApp = angular
				.module("HariApp", [])
				.controller("HariAppCtrl",function ($scope) {
       $scope.name= "Hello how are you ?";
	   $scope.userId = "516197";	
	   var employee = {
		   firstName : "Hari",
		   lastName : "Kumar",
		   gender : "Male"
	   };
	   $scope.employee = employee;
});