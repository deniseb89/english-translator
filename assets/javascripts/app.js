var app = angular.module('translator', []);

app.controller('WordDisplay', ['$scope', '$http', function($scope, $http){
  $http.get('http://english-english-api.herokuapp.com/api/words')
       .success(function(data, status, headers, config) {
          $scope.wordList = data;
       });

  $scope.search = function(query) {
    $http.get('http://english-english-api.herokuapp.com/api/words/' + query)
         .success(function(data, status, headers, config) {
            $scope.wordList = data;
         });
  }

  $scope.random = function() {
    $http.get('http://english-english-api.herokuapp.com/api/words/random')
         .success(function(data, status, headers, config) {
			console.log(data)
            $scope.wordList = data;
         });
  }
}]);
