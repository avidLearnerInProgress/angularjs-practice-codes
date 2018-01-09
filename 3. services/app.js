var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('myController', function($scope, $log, $filter) {

	$log.info('Info');
	$log.error('Error');
	$log.warn('Warning');
	$log.debug('Debug');
	$log.log('Log');
	$scope.name = 'Chirag Shah';
	$scope.filteredname = $filter('uppercase')($scope.name);
	console.log($scope.name);
	console.log($scope.filteredname);
});
