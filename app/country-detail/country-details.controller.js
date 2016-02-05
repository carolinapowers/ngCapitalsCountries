angular.module('countryCapital')
    .controller('CountryDetailsCtrl', CountryDetailsCtrl);

CountryDetailsCtrl.$inject = ['dataService', '$scope', 'countryDetails', 'neighbors', 'oneCountry'];

function CountryDetailsCtrl(dataService, $scope, countryDetails, neighbors, oneCountry) {
    $scope.countryDetail = oneCountry;
    $scope.neighbors = [];

    var vizinhos = neighbors.data.geonames;
    for (var i = 0; i < vizinhos.length; i++) {
        if (vizinhos.length !== 0) {
            $scope.neighbors.push(vizinhos[i].countryName);
        } else {
            return $scope.neighbors = 0;
        }
    }

    /*will help to find capital population*/
    $scope.country = countryDetails.data.geonames;
    console.log($scope.country);

}