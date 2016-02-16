describe('countryCapital', function () {
    beforeEach(module('countryCapital'));
    describe('CountriesCtrl', function () {
        var ctrl, scope;
        beforeEach(inject(function ($controller, $rootScope, dataService) {
            scope = $rootScope.$new();
            ctrl = $controller('CountriesCtrl', {
                $scope: scope,
                countries:  dataService.getCountries()       
            })
        }));
        it('should have countries', function () {
            expect(scope.countries).toBeDefined();           
        });
    })
})