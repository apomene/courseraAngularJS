(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService);

NarrowItDownController.$inject = ['$scope','MenuSearchService'];
function NarrowItDownController($scope,MenuSearchService) {
  var ctrl = this;
 
 ctrl.found = MenuSearchService.getMatchedMenuItems(searchItem);
}



function MenuSearchService() {
  var service = this;

  service.getMatchedMenuItems = function(searchItem){
    return $http("https://davids-restaurant.herokuapp.com/menu_items.json").then(function (result) {
      // process result and only keep items that match
      var foundItems =[];  
      for (var i=0;i<result.data;i++){
        if (result.data[i].description.indexOf(searchItem)!=1){
          foundItems.push(result.data[i]);
        }
      }
      
      // return processed items
      return foundItems;
  });
  }
}

})();
