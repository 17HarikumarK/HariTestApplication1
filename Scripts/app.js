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
					var country = {
						name : "India",
						capital : "Delhi",
						flag : "Image/flag.jpg"
					};
		$scope.country = country;
					
		var members = [
			{firstName : 'Hari', lastName: 'Kumar' , Gender : 'Male'},
			{firstName: 'Priya' , lastName: 'S', Gender : 'Female'}
		];
		$scope.members = members;
					
		var countries = [
			{
				name: "India",
				Cities : [
					{name: "Chennai"}, 
					  {name: "Mumbai"}, 
					  {name: "Blore"}
				]
			},
			{
				name: "America",
			Cities: [
				{name : "Chicago"}, 
			{name: "Mexico"}, 
			{name:  "NewYork"}
		]
		}
		];
					$scope.countries = countries;
			
			
		
});