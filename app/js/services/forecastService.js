// Service (tutorial)
app.factory('forecasts', ['$http', function($http) {
  return $http.get('http://api.openweathermap.org/data/2.5/group?id=3169070,3176959,3128760,3117735,2964574&units=imperial&appid=515bba821f444e76a9588c0c11dc153f')
  .success(function(data) {
    return data;
  })
  .error(function(err) {
    return err;
  });
}]);

// City Codes
// Rome, Italy: 3169070
// Firenze, Italy: 3176959
// Barcelona, Spain: 3128760
// Madrid, Spain: 3117735
// Dublin, Ireland: 2964574
// Chicago: 4887398

// API Key Call: 515bba821f444e76a9588c0c11dc153f
// http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=515bba821f444e76a9588c0c11dc153f
// London forecast:
// http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=515bba821f444e76a9588c0c11dc153f