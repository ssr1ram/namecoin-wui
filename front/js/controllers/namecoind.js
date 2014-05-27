angular.module('namecoin-wui')
.controller('namecoindController', function ($scope, data) {
  $scope.data = data.data;
  $("input[name='host']").val("host:" + $scope.data.config.host);
  $("input[name='port']").val("port:" + $scope.data.config.port);
  $("input[name='rpcuser']").val("user:" + $scope.data.config.rpcuser);
});
