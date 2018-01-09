var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.handle = '';
    
    $scope.lowerCaseHandle = function() {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 6;

    $scope.values = [

    	{'valuename':1},
    	{'valuename':2},
    	{'valuename':3}
    ];

    console.log($scope.values);
}]);