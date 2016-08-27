angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  console.log('this is firing');
  $scope.addLink = function() {
    console.log('yo, here is the thing:', $scope.thing);
    Links.addOne($scope.thing);
  };
});
