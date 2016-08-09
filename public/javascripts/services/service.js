app.factory('PiratesService', function($http){
  return {
    get: function(){
      return $http.get('/api/pirates')
    }
  }
})
