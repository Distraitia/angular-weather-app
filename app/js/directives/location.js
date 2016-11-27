app.directive('location', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'js/directives/location.html',
    link: function(scope, element, attrs) {
    	scope.buttonText = 'Show hourly forecast',
    	scope.moreShowing = false,

    	scope.showMore = function() {
    		element.toggleClass('weather-is-showing');
        if (scope.moreShowing) {
        	console.log('moreShowing');
          scope.buttonText = 'Show hourly forecast';
          scope.moreShowing = false;
        } else {
          scope.buttonText = 'Hide hourly forecast';
          scope.moreShowing = true;
        }
    	};
    }
  };
});