angular.module('countryCapital')
    .controller('CountriesCtrl', CountriesCtrl);

CountriesCtrl.$inject = ['dataService', '$scope', '$http', '$location', 'countries'];

function CountriesCtrl(dataService, $scope, $http, $location, countries) {

    $scope.countries = countries;



    //    dataService.getCountries().then(function response(response) {
    //        return $scope.countries = response;
    //    });

    $scope.goHome = function () {
        $location.path('/');
    }

}