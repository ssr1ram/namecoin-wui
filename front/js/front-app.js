var dataLoaderRunner = [
  'dataLoader',
  function (dataLoader) {
    return dataLoader();
  }
];

angular.module('namecoin-wui', ['ngRoute'])
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/namecoind', {
    templateUrl: '/html/namecoind/getIndex.html',
    controller: 'namecoindController',
    resolve: {
      data: dataLoaderRunner
    }
  })
  .when('/namecoind/:action', {
    templateUrl: '/html/namecoind/getAction.html',
    controller: 'namecoindActionController',
    resolve: {
      data: dataLoaderRunner
    }
  })
  .otherwise({
    redirectTo: '/namecoind'
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
      return $http.get( '/api/namecoind' ).then(function (res) {
        return res.data;
      });
    }
  };
});
