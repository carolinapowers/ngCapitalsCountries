angular.module('countryCapital')
    .controller('CountryDetailsCtrl', CountryDetailsCtrl);

CountryDetailsCtrl.$inject = ['dataService', '$scope', 'countryDetails', 'neighbors', 'oneCountry', '$routeParams', '$location'];

function CountryDetailsCtrl(dataService, $scope, countryDetails, neighbors, oneCountry) {

    $scope.countryDetail = oneCountry;
    $scope.neighbors = neighbors.data.geonames;

    /*will help to find capital population*/
    $scope.country = countryDetails.data.geonames;
    

}