describe('dataService', function() {
    var _dataService, _http, _q, _rootScope, deferred;
    beforeEach(module('countryCapital'));
    beforeEach(inject(function(dataService, $http, $q, $rootScope){
        _dataService = dataService;
        _http = $http
        _q = $q;
        _rootScope = $rootScope;
    }));

    //  1. making a call to http with params
    //  2. returning a promise
    //  3. on resolution you return geonames
    //  4. on rejection you return an error

    describe('getCountries', function(){
        var params = {};
        var returnValue;
        beforeEach(function(){
            deferred = _q.defer();
            spyOn(_http, 'get').and.returnValue(deferred.promise);
            spyOn(_q, 'when').and.callThrough();
            returnValue = _dataService.getCountries();
        });

        // it ('should return getCountries when called', inject(function(dataService){
        //     expect(dataService.getCountries).toBeDefined();  
        // }));

        it('should call $http', function(){
            var url = 'http://api.geonames.org/countryInfoJSON';
            var config = {
                params: {
                    username: 'carolinapowers'
                }
            };
            expect(_http.get).toHaveBeenCalledWith(url, config);
        });

        it('should return a promise', function(){
            expect(returnValue).toEqual(_q.defer().promise);
        });

        describe('on resolve', function(){

            beforeEach(function(){
                deferred.resolve({
                    data: {
                        geonames: ['one', 'two', 'three']
                    }
                });
            });

            it('should call $q.when with geonames', function (){
                returnValue.then(function(res){
                    expect(_q.when).toHaveBeenCalledWith(res);
                });
                _rootScope.$apply();
            });
        });

        describe('on reject', function(){
            beforeEach(function(){
                deferred.reject({
                    message: 'an error has occured'
                });
            });

            it('should call reject with error', function(){
                returnValue.then(function(error){
                    expect(_q.reject).toHaveBeenCalledWith(error);
                })
                _rootScope.$apply();
            })
        })
    })
        
    // it ('should return getNeighbors when called', inject(function (dataService) {
    //       expect(dataService.getNeighbors()).toBeDefined();
    // })
    // )
    
    // it('should return get getCountry when called', inject(function(dataService){
    //     expect(dataService.getCountry()).toBeDefined();
    // }))
     
    // it('should have getCountry.length === 1', inject(function(dataService){
    //     var data;
    //     return dataService.getCountry().success(function (response) {
    //         data = response;
    //     })
    //     expect(data.length).toBe(1);
    // }))
})