angular.module('countryCapital')
    .controller('CountriesCtrl', CountriesCtrl);

CountriesCtrl.$inject = ['dataService', '$scope', '$http', '$location', 'response'];

function CountriesCtrl(dataService, $scope, $http, $location, response) {

    $scope.countries = response;

    //    dataService.getCountries().then(function response(response) {
    //        return $scope.countries = response;
    //    });

    $scope.goHome = function () {
        $location.path('/');
    }

}