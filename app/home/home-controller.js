angular.module('countryCapital')
    .controller('HomeCtrl', HomeCtrl)

function HomeCtrl($scope, $location) {

    $scope.country = "Brazil";

    $scope.browseCountries = function () {
        $location.path("/countries");
    }
}