angular.module('LunchCheck', [])
  .controller('LunchCheckerController', ['$scope', function($scope) {
    $scope.checkIfTooMuch = function() {
      if (!$scope.lunchItems) {
        $scope.message = 'Please enter data first';
      } else {
        var lunchItems = $scope.lunchItems.split(',');
        if (lunchItems.length <= 3) {
          $scope.message = 'Enjoy!';
        } else {
          $scope.message = 'Too much!';
        }
      }
    };
  }]);
