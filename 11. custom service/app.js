var myApp = angular.module("myApp", ['ngRoute']);


//Routes 
myApp.config(function ($routeProvider){

	$routeProvider

	.when('/', {

		templateUrl : 'pages/main.html',
		controller : 'myController1'
	})


    .when('/submain', {
        templateUrl: 'pages/submain.html',
        controller: 'myController2'
    })
    

	.when('/submain/:num', {

		templateUrl : 'pages/submain.html',
		controller : 'myController2'

	})
});

myApp.service('nameService', function(){

	var self = this;
	this.name = 'Chirag Shah';
	this.nameLength = function(){
		return self.name.length;
	};
	
});

myApp.controller('myController1', ['$scope', '$log', 'nameService' , function($scope,$log,nameService){
	//console.log($scope);
	$scope.name = nameService.name;

	$scope.$watch('name', function(){
		nameService.name = $scope.name;
	});

	$log.log(nameService.name);
	$log.log(nameService.nameLength());
	
}]);



myApp.controller('myController2', ['$scope', '$log', '$routeParams', 'nameService', function($scope,$log,$routeParams,nameService){
	//console.log($scope);
	$scope.num = $routeParams.num || 1;
	$scope.name = nameService.name;

	$scope.$watch('name', function(){
		nameService.name = $scope.name;
	});
}]);


