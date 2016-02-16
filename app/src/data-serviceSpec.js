describe('dataService', function() {
    beforeEach(module('countryCapital'));
    
    it ('should return getCountries when called', inject(function(dataService){
            expect(dataService.getCountries()).toBeDefined();  
        })
       )
        
    it ('should return getNeighbors when called', inject(function (dataService) {
          expect(dataService.getNeighbors()).toBeDefined();
    })
    )
    
    it('should return get getCountry when called', inject(function(dataService){
        expect(dataService.getCountry()).toBeDefined();
    }))
     
    it('should have getCountry.length === 1', inject(function(dataService){
        var data;
        return dataService.getCountry().success(function (response) {
            data = response;
        })
        expect(data.length).toBe(1);
    }))
})