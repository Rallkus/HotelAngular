hotel.controller('homeCtrl', function ($scope, services, hoteles) {
    $scope.filteredHoteles = [];
    $scope.autocompleteHoteles = [];
    $scope.filteredHotelesPag = [];
    $scope.hideAutocomplete = false;
    $scope.hotel = hoteles;
    $scope.numPerPage = 6;
    $scope.currentPage = 1;
    $scope.currentPagePag = 1;
    $scope.hotelNames = [];
    $scope.autocompleteNames = [];
    angular.forEach($scope.hotel, function(value, key) {
      $scope.hotelNames.push(value.nombre);
    });


    $scope.scroll = true;
    console.log($scope.hotelNames);

    $scope.nextScroll = function() {
      if($scope.scroll){
        var startPos = ($scope.currentPage - 1) * 3;
    	  //$scope.filteredHoteles = $scope.hotel.slice(0, startPos + 3);
        $scope.filteredHoteles.push($scope.hotel[startPos+1]);
        $scope.filteredHoteles.push($scope.hotel[startPos+2]);
        $scope.filteredHoteles.push($scope.hotel[startPos+3]);
        $scope.currentPage++;
      }

	};
  $scope.maps = function() {
    
};
$scope.complete = function(string){
  $scope.hideAutocomplete = false;
  var array = [];
  angular.forEach($scope.hotelNames, function(value, key) {
    if(value.toLowerCase().indexOf(string.toLowerCase()) >= 0){
      array.push(value);
    }

  });
  $scope.autocompleteNames = array;
}
$scope.pageChanged = function() {
    $scope.filteredHoteles = [];
    var startPos = ($scope.currentPagePag - 1) * 3;
    //$scope.filteredHotelesPag = $scope.event.slice(startPos, startPos + 3);
    $scope.filteredHoteles = $scope.autocompleteHoteles.slice(startPos, startPos + 3);
  };

$scope.fillQuery = function(string){
  $scope.filteredHoteles = [];
  $scope.autocompleteHoteles = [];
  $scope.query = string;
  $scope.hideAutocomplete = true;
  console.log(string);
  angular.forEach($scope.hotel, function(value, key) {
    if(value.nombre==string){
      $scope.autocompleteHoteles.push(value);
    }
  });
  $scope.scroll=false;
  $scope.filteredHoteles = [];
  $scope.currentPagePag = 1;
  var startPos = ($scope.currentPagePag - 1) * 3;
  $scope.filteredHoteles = $scope.autocompleteHoteles.slice(startPos, startPos + 3);
}

});
