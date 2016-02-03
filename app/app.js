angular.module('countryCapital', ['ngRoute', 'ngAnimate'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "home/home.html",
            controller: 'HomeCtrl'
        })
        .when('/countries', {
            templateUrl: 'countries/countries.html',
            controller: 'CountriesCtrl'
        })
        .when('/countries/:country/capital', {
            template: '<p>countries details',
        })


}])