var dataLoaderRunner = [
  'dataLoader',
  function (dataLoader) {
    return dataLoader();
  }
];

angular.module('namecoin-wui', ['ngRoute'])
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/namerecs', {
    templateUrl: '/html/namerecs/getIndex.html',
    controller: 'namerecsController',
    resolve: {
      data: dataLoaderRunner
    }
  })
  .otherwise({
    redirectTo: '/namerecs'
  });

  $locationProvider.html5Mode(true);
})
.service('dataLoader', function ($location, $http) {
  return function () {
    if (preloadedData) {
      var data = preloadedData;
      preloadedData = null;
      return data;
    } else {
      return $http.get( '/api' + $location.path() ).then(function (res) {
        return res.data;
      });
    }
  };
});
