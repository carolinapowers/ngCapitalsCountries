angular.module('countryCapital')
    .controller('CountryDetailsCtrl', CountryDetailsCtrl);

CountryDetailsCtrl.$inject = ['dataService', '$scope', 'countryDetails', 'neighbors', 'oneCountry', '$rootScope'];

function CountryDetailsCtrl(dataService, $scope, countryDetails, neighbors, oneCountry, $rootScope) {

    $scope.countryDetail = oneCountry;
    console.log(oneCountry);
    $scope.neighbors = neighbors.data.geonames;
    
    /*will move this to a resolve function eventually*/
    dataService.getCountry(oneCountry.countryCode, oneCountry.capital)
        .then(function (response){    
            for (var i = 0; i < response.data.geonames.length; i++) {    
                if (response.data.geonames[i].name === oneCountry.capital) {
                    $scope.capitalPopulation = response.data.geonames[i].population;
            }        
        }
    })
}