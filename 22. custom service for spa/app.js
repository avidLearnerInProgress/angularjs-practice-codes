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

weatherforecastApp.service('cityService', function(){
	this.city = "New York, NY";
});


weatherforecastApp.controller('homeController', ['$scope', 'cityService', function($scope,cityService){
	//console.log($scope);
	$scope.city = cityService.city;

	$scope.$watch('city', function(){
		cityService.city = $scope.city;
	});
}]);

weatherforecastApp.controller('forecastController', ['$scope', 'cityService', function($scope,cityService){
	//console.log($scope);
	$scope.city = cityService.city;
}]);