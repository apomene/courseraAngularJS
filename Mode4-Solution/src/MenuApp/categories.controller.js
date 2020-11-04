(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuCategoriesController', MenuCategoriesController);


MenuCategoriesController.$inject = ['MenuDataService', 'cats'];
function MenuCategoriesController(MenuDataService, cats) {
  var catgres = this;
  catgres.cats = cats.data;
}

})();
