(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItemsDirective)
.constant('ApiPath', "https://davids-restaurant.herokuapp.com/menu_items.json");


function foundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: ShoppingListDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}


function ShoppingListDirectiveController() {
  var list = this;
}

NarrowItDownController.$inject = ['$scope','MenuSearchService'];
function NarrowItDownController($scope,MenuSearchService) {
  var list = this;
  
  list.narrow = function(searchItem){
    var found=[];
    if (searchItem ==""){
      found=[];
     }
     else{
      var promise =  MenuSearchService.getMenu();
      promise.then(function (response) {
      
        for (var i=0;i<response.data.menu_items.length;i++){
          if (response.data.menu_items[i].description.indexOf(searchItem)!==-1){
            found.push(response.data.menu_items[i]);
          // console.log(result.data.menu_items[i].description);
          }
        }
      })
      .catch(function (error) {
        console.log("Something went  wrong.");
      });
     }
   list.items = found;
   
 }

 list.removeItem = function (itemIndex) {
  MenuSearchService.removeItem(itemIndex,list.items);  
};
}

MenuSearchService.$inject = ['$http', 'ApiPath'];

function MenuSearchService($http,ApiPath) {
  var service = this;

  service.getMenu= function () {
    var response = $http({
      method: "GET",
      url: ApiPath
    });
    return response;
  };

  service.removeItem = function (itemIndex,items) {
    items.splice(itemIndex, 1);
  };
  
}

})();
