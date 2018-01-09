var weatherforecastApp = angular.module('weatherforecastApp', ['ngRoute','ngResource']);


weatherforecastApp.config(function($routeProvider){

	$routeProvider

	.when('/',{
		templateUrl: 'pages/home.html',
		controller : 'homeController'

	})

	.when('/Forecast',{
		templateUrl: 'pages/forecast.html',
		controller : 'forecastController'		
	})

});


weatherforecastApp.controller('homeController', ['$scope', function($scope){
	console.log($scope);
}]);

weatherforecastApp.controller('forecastController', ['$scope', function($scope){
	console.log($scope);
}]);