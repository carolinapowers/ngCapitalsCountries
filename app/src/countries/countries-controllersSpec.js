describe('CountryCapital', function() {
    beforeEach(module('CountryCapital'));
        describe('CountriesCtrl', function() {
            var ctrl, scope;
                beforeEAch(inject(function($controller, $rootScope){
                    scope = $rootScope.$new();
                    ctrl = $controller('CountriesCtrl', {
                        $scope : scope
                    });
                }));
            it('should have countries', function () {
                expect(scope.countries).toBeDefined();
            })
        })
})