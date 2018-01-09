var myApp = angular.module('myApp', []);
myApp.controller('myController1', ['$scope', function($scope){

	$scope.name = 'Chuck';
	
}]);

myApp.controller('myController2', ['$scope', function($scope){

	$scope.name = 'Morris';
	
}]);