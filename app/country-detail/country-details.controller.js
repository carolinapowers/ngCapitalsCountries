angular.module('countryCapital')
    .controller('CountryDetailsCtrl', CountryDetailsCtrl);

CountryDetailsCtrl.$inject = ['dataService', '$scope', 'countryDetails', 'neighbors', 'oneCountry', '$routeParams'];

function CountryDetailsCtrl(dataService, $scope, countryDetails, neighbors, oneCountry, $routeParams) {


    $scope.oneCountry = oneCountry.data.geonames[0];

    $scope.countryParam = $routeParams.country;
    console.log($scope.countryParam);

    dataService.getCountries($routeParams.country).then(function (response) {
        for (var i = 0; i < response.length; i++) {
            $scope.countryDetail = response[i];
        }



    })

    for (var i = 0; i < $scope.oneCountry; i++) {
        //        return {
        //            capital: $scope.oneCountry[i].capital;
        //        }
        console.log($scope.oneCountry[i].capital);
    }

    //will help to find capital population
    $scope.country = countryDetails.data.geonames;
    console.log($scope.country);

    //neighbors

    $scope.neighbors = [];
    var vizinhos = neighbors.data.geonames;

    for (var i = 0; i < vizinhos.length; i++) {
        $scope.neighbors.push(vizinhos[i].countryName);
    }

}