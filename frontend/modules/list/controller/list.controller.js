hotel.controller('detailsCtrl', function ($scope, services, oferta) {
    $scope.hotel = oferta[0];
    console.log($scope.hotel);
});
