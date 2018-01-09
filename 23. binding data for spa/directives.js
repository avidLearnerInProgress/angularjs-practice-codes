//DIRECTIVES
weatherApp.directive("weatherReport", function() {
    return {
        restrict: 'E',
        templateUrl :"directives/weatherReporter.html",
        replace: true,
        scope: {
            weatherDay: '=',
            convertToStandard: '&',
            convertToDate: '&',
            dateFormat: '@'   
        }
    }
})