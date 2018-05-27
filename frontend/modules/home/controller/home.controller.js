hotel.controller('homeCtrl', function ($scope, services, hoteles) {
    $scope.filteredHoteles = [];
    $scope.hotel = hoteles;
    $scope.numPerPage = 6;
    $scope.currentPage = 1;
    console.log($scope.hotel);

    $scope.nextScroll = function() {
	  var startPos = ($scope.currentPage - 1) * 3;
	  //$scope.filteredHoteles = $scope.hotel.slice(0, startPos + 3);
    $scope.filteredHoteles.push($scope.hotel[startPos+1]);
    $scope.filteredHoteles.push($scope.hotel[startPos+2]);
    $scope.filteredHoteles.push($scope.hotel[startPos+3]);
    $scope.currentPage++;
	  console.log($scope.currentPage);
	};
});
