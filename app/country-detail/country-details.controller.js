angular.module('countryCapital')
    .controller('CountryDetailsCtrl', CountriesCtrl);

CountriesCtrl.$inject = ['dataService', '$scope', '$http', '$location', 'countryDetails', 'neighbors'];

function CountriesCtrl(dataService, $scope, $http, $location, $routeParams, countryDetails, neighbors) {


    $scope.country = countryDetails;

    $scope.neighbors = neighbors;


}