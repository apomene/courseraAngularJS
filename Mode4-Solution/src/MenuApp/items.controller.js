(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemsController', MenuItemsController);

// Version with resolving to 1 item based on $stateParams in route config
MenuItemsController.$inject = ['$stateParams', 'items'];
function MenuItemsController($stateParams, items) {
  var itemDetail = this;
  itemDetail.items = items.data.menu_items;
  console.log(itemDetail.items);
}

})();
