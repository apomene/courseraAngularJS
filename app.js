(function () {
'use strict';

angular.module('module1App', [])
.controller('module1AppController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
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

function countDishes(dishes){
  return dishes.split(',').length;
}

})();
