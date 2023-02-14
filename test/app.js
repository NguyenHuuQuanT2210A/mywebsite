// create angular app
var validationApp = angular.module('validationApp', []);

// create angular controller
validationApp.controller('mainController', function($scope) {
	$scope.emailrg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	// function to submit the form after all validation has occurred			
	$scope.addUser = function() {
        var user = [];
			user.name = $scope.name;
			user.email = $scope.email;
			user.password = $scope.password;
            user.repeatpassword = $scope.repeatpassword
    }
    $scope.add_user = function(){
		var user = [];
			user.name = $scope.name;
			user.email = $scope.email;
			user.password = $scope.password;
			user.phone = $scope.phone;
		$scope.push(user);
		localStorage.setItem('user-list', angular.toJson($scope));
		console.log($scope);
	}
});