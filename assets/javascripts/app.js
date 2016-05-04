var app = angular.module('translator', ['ngCookies']);

app.controller('WordDisplay', ['$scope', '$http', function($scope, $http){
  $http.get('http://english-english-api.herokuapp.com/api/words')
       .success(function(data, status, headers, config) {
          $scope.wordList = data;
       });

  $scope.search = function(query = 'random') {
    $http.get('http://english-english-api.herokuapp.com/api/words/' + query)
         .success(function(data, status, headers, config) {
           if (typeof data === 'object') {
             var array = [];
             array.push(data)
              $scope.wordList = array;
           }
           else {
             $scope.wordList = data;
           }
         });
       };
}]);

app.controller('OriginCountry', ['$scope', '$cookies', function($scope, $cookies){
  if($cookies.get('country')) {
    $scope.ask = true;
  }
  $scope.default = function(country) {
    var expiration = new Date();
        expiration.setDate(expiration.getDate() + 90);
    $cookies.put('country', country, {expires: expiration});
    $scope.ask = true;
  };
}]);
