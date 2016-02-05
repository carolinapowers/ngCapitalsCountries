angular.module('countryCapital')
    .controller('CountryDetailsCtrl', CountryDetailsCtrl);

CountryDetailsCtrl.$inject = ['dataService', '$scope', 'countryDetails', 'neighbors'];

function CountryDetailsCtrl(dataService, $scope, countryDetails, neighbors) {


    //will help to find capital population
    $scope.country = countryDetails.data.geonames;
    console.log($scope.country);

    //neighbors
    var vizinhos = neighbors.data.geonames;
    console.log(vizinhos);
    $scope.neighbors = [];
    for (var i = 0; i < vizinhos.length; i++) {
        $scope.neighbors.push(vizinhos[i].countryName);
    }





}