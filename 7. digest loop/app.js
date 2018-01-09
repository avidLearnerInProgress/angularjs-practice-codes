var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout){

	console.log($scope);

	$scope.handle = '';
	$scope.lowerCaseHandle = function(){
		return $filter('lowercase')($scope.handle)
	};
	
	$scope.$watch('handle', function(newValue, oldValue){ //params must be strictly new then old

		console.log('Changed!');
		console.log("Old value: "+ oldValue);
		console.log("New value: "+ newValue);

	});

	$timeout(function(){
		$scope.handle = 'newHandle';
		console.log('Scope changed!');
	},3000);
}]);