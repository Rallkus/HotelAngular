hotel.controller('detailsCtrl', function ($scope, services, oferta) {
    $scope.hotel = oferta[0];
});

hotel.controller('listCtrl', function ($scope, services, list) {
    $scope.list = list;
    console.log(list);
});
