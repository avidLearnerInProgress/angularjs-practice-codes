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


myApp.controller('myController1', ['$scope', '$log', 'nameService' , function($scope,$log,nameService){
	//console.log($scope);
	/*$scope.name = nameService.name;

	$scope.$watch('name', function(){
		nameService.name = $scope.name;
	});

	$log.log(nameService.name);
	$log.log(nameService.nameLength());
	*/

	$scope.person = {
		name : 'Chirag Shah',
		address : 'Malad East, Mumbai-97'
	}
	
}]);



myApp.controller('myController2', ['$scope', '$log', '$routeParams', 'nameService', function($scope,$log,$routeParams,nameService){
	//console.log($scope);
	/*$scope.num = $routeParams.num || 1;
	$scope.name = nameService.name;

	$scope.$watch('name', function(){
		nameService.name = $scope.name;
	});*/
}]);


myApp.service('nameService', function(){

	var self = this;
	this.name = 'Chirag Shah';
	this.nameLength = function(){
		return self.name.length;
	};
	
});

myApp.directive('searchResult', function(){
	// Runs during compilation
	return {

		templateUrl: 'directives/searchresult.html',
		replace: true, //replaces the search-result in main.html
		restrice: 'AE',
		scope:{  				
			personObject: '=', //= is two way binding // @ is text binding 
			//  = is for passing objects and @ is for passing text
		}
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		//link: function($scope, iElm, iAttrs, controller) {
			
		//}
	};
});
