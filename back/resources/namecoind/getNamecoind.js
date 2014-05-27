var rpc = require('namecoin-rpc');
var Q = require('q');

getrpcClient = function(req) {
    var client = new rpc.Client({
    host: req.config.host,
    port: req.config.port,
    user: req.config.rpcuser,
    pass: req.config.rpcpassword,
    timeout: 3000
    });
};

exports.getIndex = function (req, res) {
    var data = {"config": req.config } ;
    return {"data": data};
}

exports.getGetinfo = function (req, res) {
    var deferred = Q.defer();
    var client = getrpcClient();
    client.cmd('getinfo', function(error, value) {
        if (error) {
            deferred.reject(new Error(error));
        } else {
            console.log(value);
            deferred.resolve({data: value});
        }
    });
    return deferred.promise;
}
