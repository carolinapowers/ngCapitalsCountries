angular.module('countryCapital')
    .controller('CountriesCtrl', CountriesCtrl);

CountriesCtrl.$inject = ['dataService', '$scope', '$http', '$location', 'response'];

function CountriesCtrl(dataService, $scope, $http, $location, response) {

    $scope.countries = response;

//    dataService.getCountries().then(function response(response) {
             //        for (var i = 0; i < response.length - 150; i++) {
             //            console.log(response[i]);
             //            $scope.countries = response[i];
             //        }
             //        return $scope.countries = response;
             //    });

    $scope.goHome = function () {
        $location.path('/');
    }

}