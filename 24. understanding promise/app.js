var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', '$http', '$q', function($scope,$http,$q){

	console.log($scope);
	
	$scope.increment = function(num){
		var q = $q.defer();
		if(angular.isNumber(num)){
			q.resolve(num+1);
		}
		else
			q.reject('NaN');

		return q.promise;
	};

	$scope.value = 0; //value will increment twice
	$scope.promise = $scope.increment($scope.value);
	$scope.promise.then( function(v){
		return $scope.increment(v);
	})
	.then(
		function(v){
			$scope.value = v;
		},
		function(err){
			$scope.value = err;
		}
	);
	
}]);