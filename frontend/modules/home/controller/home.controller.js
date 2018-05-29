hotel.controller('homeCtrl', function ($scope, services, hoteles) {
    $scope.filteredHoteles = [];
    $scope.hideAutocomplete = false;
    $scope.hotel = hoteles;
    $scope.numPerPage = 6;
    $scope.currentPage = 1;
    $scope.hotelNames = [];
    $scope.autocompleteNames = [];
    angular.forEach($scope.hotel, function(value, key) {
      $scope.hotelNames.push(value.nombre);
    });

    var scroll = true;
    console.log($scope.hotelNames);

    $scope.nextScroll = function() {
	  var startPos = ($scope.currentPage - 1) * 3;
	  //$scope.filteredHoteles = $scope.hotel.slice(0, startPos + 3);
    $scope.filteredHoteles.push($scope.hotel[startPos+1]);
    $scope.filteredHoteles.push($scope.hotel[startPos+2]);
    $scope.filteredHoteles.push($scope.hotel[startPos+3]);
    $scope.currentPage++;
	};
  $scope.cleanList = function() {
  $scope.filteredHoteles = [];
  scroll = false;
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
$scope.fillQuery = function(string){
  $scope.query = string;
  $scope.hideAutocomplete = true;
}
});
