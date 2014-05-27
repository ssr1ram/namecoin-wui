angular.module('namecoin-wui')
.controller('namecoindActionController', function ($scope, $routeParams, namecoindService) {
  namecoindService.get({
      stub: "getinfo",
      data: {}
  })
  .then(function(response) {
      $scope.data = response.data.data;
      $scope.action = $routeParams.action;
  });
});
