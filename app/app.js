// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
});

describe('PhoneListController', function() {

  it('should create a `phones` model with 3 phones', function() {
    var scope = {};
    var ctrl = new PhoneListController(scope);

    expect(scope.phones.length).toBe(3);
  });

});

// Define the `weatherApp` module
var weatherApp = angular.module('weatherApp', []);

// Define the `ForecastController` controller on the `weatherApp` module
weatherApp.controller('ForecastController', function ForecastController($scope) {
  $scope.forecasts = [
    {
      location: 'Barrington',
      forecast: 'Cloudy'
    }, {
      location: 'Atlanta',
      forecast: 'Partly Cloudy'
    }, {
      location: 'Eliot',
      forecast: 'Sunny'
    }
  ];
});