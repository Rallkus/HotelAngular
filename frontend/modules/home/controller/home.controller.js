hotel.controller('homeCtrl', function ($scope, services, hoteles) {
    $scope.hotel = hoteles;
    console.log($scope.hotel);
});
