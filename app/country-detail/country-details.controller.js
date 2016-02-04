angular.module('countryCapital')
    .controller('CountryDetailsCtrl', CountriesCtrl);

CountriesCtrl.$inject = ['dataService', '$scope', '$http', '$location', '$routeParams', 'countryDetails'];

function CountriesCtrl(dataService, $scope, $http, $location, $routeParams, countryDetails) {


    dataService.getCountries()
        .then(function (response) {
            $scope.currentCountry = $routeParams.country;
            console.log($routeParams);
            console.log($routeParams.country);
        });


    $scope.goHome = function () {
        $location.path('/');
    }

    //    $scope.loadView = function () {
    //        $location.path('/countries/' + $scope.country + '/capital');
    //    }
    var capital = _.find($scope.currentCountry, 'capital');


}