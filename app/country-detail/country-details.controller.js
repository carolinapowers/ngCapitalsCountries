angular.module('countryCapital')
    .controller('CountryDetailsCtrl', CountryDetailsCtrl);

CountryDetailsCtrl.$inject = ['dataService', '$scope', 'countryDetails', 'neighbors', '$routeParams', 'oneCountry'];

function CountryDetailsCtrl(dataService, $scope, countryDetails, neighbors, $routeParams, oneCountry) {
        console.log(oneCountry);
    $scope.countryDetail = oneCountry;
    $scope.countryParam = $routeParams.country;

//    dataService.getCountries($routeParams.country).then(function (response) {
//        for (var i = 0; i < response.length; i++) {
//            if (response[i].countryCode == $routeParams.country) {
//                $scope.countryDetail = response[i];
//            }
//        }
//    })

  


    for (var i = 0; i < $scope.oneCountry; i++) {
        console.log($scope.oneCountry[i].capital);
    }

    /*will help to find capital population*/
    $scope.country = countryDetails.data.geonames;
    console.log($scope.country);

    /*neighbors*/
    $scope.neighbors = [];
    var vizinhos = neighbors.data.geonames;
    for (var i = 0; i < vizinhos.length; i++) {
        if (vizinhos.length !== 0) {
            $scope.neighbors.push(vizinhos[i].countryName);
        } else {
            return $scope.neighbors = 0;
        }

    }

}