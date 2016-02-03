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
                response: function (dataService) {
                    return dataService.getCountries();
                }
            }
        })
        .when('/countries/:country/capital', {
            template: '<p>countries details',
        })


}])