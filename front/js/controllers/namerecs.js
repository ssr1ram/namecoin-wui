angular.module('namecoin-wui')
.controller('namerecsController', function ($scope, data) {
  $scope.namerecs = data.namerecs;
});
