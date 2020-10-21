(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['$scope','ShoppingListCheckOffService'];
function ToBuyController($scope,ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getToBuyItems();
  $scope.boughtdItem = function(index){
    ShoppingListCheckOffService.boughtdItem(index);
  };
 
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;

  bought.items = ShoppingListCheckOffService.getBoughtItems();
  //bought.boughtShow = bought.items.length;
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of items
  var toBuy = [{ name: "cookies", quantity: 10 },
               { name: "pizzas", quantity: 5 },
               { name: "beers", quantity: 3 },
               { name: "pastas", quantity: 5 },
               { name: "apples", quantity: 20 },
               { name: "bananas", quantity: 7 }];

  var boughtItems=[];

  service.boughtdItem = function (itemIndex) {
    var item =toBuy[itemIndex];    
    boughtItems.push(item);
    toBuy.splice(itemIndex, 1);
   
  };  

  service.getToBuyItems = function () {
    return toBuy;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
