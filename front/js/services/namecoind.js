angular.module('namecoin-wui')
.factory('namecoindService', function($http){
    return {
        get : function(params){
            var stub = params.stub;
            var data = params.data;
            return $http.get('/api/namecoind/' + stub, {
                params : data
            });
        }
    }
});

