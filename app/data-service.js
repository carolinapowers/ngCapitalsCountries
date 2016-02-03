angular.module('countryCapital')
    .factory('dataService', dataService);

dataService.$inject = ['$http'];

function dataService($http) {
    return function getCountries() {
        var url = 'http://api.geonames.org/countryInfoJSON';

        var params = {
            username: 'carolinapowers'
        }

        $http({
                url: url,
                method: 'GET',
                params: params
            })
            .then(function (response) {
                console.log(response.data);
                return $q.when(response.data);
            });

    }
}