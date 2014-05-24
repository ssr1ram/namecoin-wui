angular.module('namecoin-wui')
.controller('namecoindController', function ($scope, data) {
  $scope.recs = data.recs;
});
