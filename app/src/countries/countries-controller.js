angular.module('countryCapital')
    .controller('CountriesCtrl', CountriesCtrl);

CountriesCtrl.$inject = ['dataService', '$scope', '$location', 'countries'];

function CountriesCtrl(dataService, $scope, $location, countries) {

    $scope.countries = countries;
    $scope.goHome = function () {
        $location.path('/');     
    }

}