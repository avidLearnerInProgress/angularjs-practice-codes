var myApp = angular.module('myApp', []);
myApp.controller('myController', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.name = 'Chuck';
    $timeout(function() {
        $scope.name = 'Morris';
    }, 3000);
}]);