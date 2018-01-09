var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', '$log', function(a,b){
	console.log(a);
	console.log(b);
	b.info(a);
}])