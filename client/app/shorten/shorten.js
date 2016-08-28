angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(link) {
    if (link !== '') {
      Links.addOne({url: link});
      $scope.newLink = '';
    }
  };
});
