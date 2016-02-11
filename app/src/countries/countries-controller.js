angular.module('countryCapital')
    .controller('CountriesCtrl', CountriesCtrl);

CountriesCtrl.$inject = ['dataService', '$scope', '$http', '$location', 'countries'];

function CountriesCtrl(dataService, $scope, $http, $location, countries) {

    $scope.countries = countries;
    $scope.goHome = function () {
        $location.path('/');
    }

}