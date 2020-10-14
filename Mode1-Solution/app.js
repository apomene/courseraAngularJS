(function () {
'use strict';
angular.module('module1App', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
    $scope.message="";
    $scope.dishes="";
    //$scope.dishes="1,2,3,4,5,6,7,8";

  $scope.Check = function (){
    var numOfdishes = countDishes($scope.dishes);
    if (numOfdishes == 0){
      $scope.message = "Please enter data first";
    }
    else if(numOfdishes<=3){
    $scope.message = "Enjoy!";
    }
    else{
    $scope.message = "Too much!";
    }
  }
}

function countDishes(dishes){
  if (dishes =='' || dishes == {}){
    return 0;
  }
  return dishes.split(',').length;
}

})();
