app.controller('PiratesController', function($scope, PiratesService){
  PiratesService.get().then(function(data){
    console.log(data);
    $scope.pirates = data.data;
  })
  // $scope.view = {};
  // $scope.view.value = 4;
});
