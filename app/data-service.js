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
                    return $q.when(response.data.geonames);
                }, function (error) {
                    return $q.reject(error);
                });
        },

        getCountry: function (country) {
            var config = {
                params: {
                    username: 'carolinapowers',
                    country: country
                }
            }

            var url = 'http://api.geonames.org/searchJSON';

            return $http.get(url, config);
        },

        getNeighbors: function (country) {
            var config = {
                params: {
                    username: 'carolinapowers',
                    country: country
                }
            }

            var url = "http://api.geonames.org/neighboursJSON";

            return $http.get(url, config);
        },

//        getOneCountry: function (country) {
           //            var config = {
           //                params: {
           //                    username: 'carolinapowers',
           //                    country: country
           //                }
           //            }
           //
           //            var url = 'http://api.geonames.org/countryInfoJSON';
           //
           //            return $http.get(url, config);
           //        }

    }
}