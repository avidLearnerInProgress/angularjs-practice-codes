var myApp = angular.module("myApp", []);

myApp.controller('myController', ['$scope', function($scope){
	console.log($scope);
	
}]);


var searchPeople = function(firstname, $scope, lastname){
	return firstname;
};

console.log(angular.injector().annotate(searchPeople));
