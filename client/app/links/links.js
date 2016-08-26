angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {  
  $scope.data = {};

  Links.getAll().then(function(result) {
    $scope.data.links = result;
  });

  return $scope;
});
