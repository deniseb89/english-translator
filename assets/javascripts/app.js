var app = angular.module('translator', []);

app.controller('WordDisplay', ['$scope', '$http', function($scope, $http){
  $http.get('http://english-english-api.herokuapp.com/api/words').success(function(data, status, headers, config) {
    $scope.wordList = data;
  });

}]);

app.controller('SearchController', function(){

});
