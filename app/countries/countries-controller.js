angular.module('countryCapital')
    .controller('CountriesCtrl', CountriesCtrl);

CountriesCtrl.$inject = ['dataService'];

function CountriesCtrl($scope, dataService) {
    //
    //    dataService.getCountries().then(function (response) {
    //        $scope.countries = response.data;
    //    });

    $scope.hello = dataService.hello;

}