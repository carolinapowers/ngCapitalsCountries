angular.module('countryCapital', ['ngRoute', 'ngAnimate'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "home/home.html",
            controller: 'HomeCtrl'
        })
        .when('/countries', {
            templateUrl: 'countries/countries.html',
            controller: 'CountriesCtrl',
            resolve: {
                countries: function (dataService) {
                    return dataService.getCountries();
                }
            }
        })

    .when('/countries/:country', {
        templateUrl: 'country-detail/country-detail.html',
        controller: "CountryDetailsCtrl",
        resolve: {
            countryDetails: ['dataService', '$route', function (dataService, $route) {
                return dataService.getCountry($route.current.params.country);
                }],
            neighbors: ['dataService', '$route', function (dataService, $route) {
                return dataService.getNeighbors($route.current.params.country);
                }]
        }
    })
}])