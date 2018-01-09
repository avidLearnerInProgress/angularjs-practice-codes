var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', '$filter', function($scope,$filter){

	$scope.handle = '';

	$scope.lowerCase = function(){
		return $filter('lowercase')($scope.handle);
	};

}]);