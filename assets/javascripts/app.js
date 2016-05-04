var app = angular.module('translator', ['ngCookies']);

app.controller('WordDisplay', ['$scope', '$http', function($scope, $http){
	$scope.hasResults = false;

  // $http.get('http://english-english-api.herokuapp.com/api/words')
  //      .success(function(data, status, headers, config) {
  //         $scope.wordList = data;
  //      });

  $scope.search = function(query) {
	  if(query != null){
		 $http.get('http://english-english-api.herokuapp.com/api/words/' + query)
     .success(function(data, status, headers, config) {
			 $scope.hasResults = true;
			 console.log(data);
			if(data.length != 0){
				$scope.wordList = data;
			}else{
        $scope.message = true;
      }
     }); 
	  }
  }

  $scope.random = function() {
    $http.get('http://english-english-api.herokuapp.com/api/words/random')
    .success(function(data, status, headers, config) {
			$scope.hasResults = true;      
      var array = [];
      console.log(data);
      array.push(data)
      console.log(array);
      $scope.wordList = array;
    });
  }
}]);

app.controller('OriginCountry', ['$scope', '$cookies', function($scope, $cookies){
  if($cookies.get('country')) {
    $scope.ask = true;
    
  }
  $scope.country = $cookies.get("country");
  $scope.default = function(country) {
    var expiration = new Date();
    expiration.setDate(expiration.getDate() + 90);
    $cookies.put('country', country, {expires: expiration});
    $scope.ask = true;
  };
}]);