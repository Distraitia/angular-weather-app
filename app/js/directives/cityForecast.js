app.directive('cityForecast', function() {
  return {
    restrict: 'E',
    scope: {
      city: '='
    },
    templateUrl: 'js/directives/cityForecast.html'
  };
});