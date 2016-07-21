app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'views/pirates.html'
  })
  .otherwise({
    redirectTo: '/'
  })
});
