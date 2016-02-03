angular.module('countryCapital')
    .factory('dataService', dataService);

dataService.$inject = ['$http', '$q'];

function dataService($http, $q) {


    return {
        getCountries: function () {
            var url = 'http://api.geonames.org/countryInfoJSON';

            var params = {
                username: 'carolinapowers'
            }

            return $http({
                    url: url,
                    method: 'GET',
                    params: params
                })
                .then(function (response) {
                    console.log(response.data.geonames);
                    return $q.when(response.data.geonames);
                });


        }
    }
}