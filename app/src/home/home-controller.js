angular.module('countryCapital')
    .controller('HomeCtrl', HomeCtrl)

function HomeCtrl($scope, $location) {


    $scope.browseCountries = function () {
        $location.path("/countries");
    }
}