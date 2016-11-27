app.controller('ForecastController', ['$scope', 'forecasts', function($scope, forecasts) {
  forecasts.success(function(data) {
    $scope.forecasts = data;
  });
}]);