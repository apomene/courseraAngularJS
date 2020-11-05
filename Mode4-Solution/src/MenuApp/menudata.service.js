(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiPathCategories','https://davids-restaurant.herokuapp.com/categories.json')
.constant('ApiPathCategory',' https://davids-restaurant.herokuapp.com/menu_items.json?category=');

MenuDataService.$inject = ['$http', 'ApiPathCategories','ApiPathCategory'];
function MenuDataService($http, ApiPathCategories,ApiPathCategory) {
  var service = this;

  service.getAllCategories  = function() {
    var response = $http({
      method: "GET",
      url: ApiPathCategories
    });
      return response;
  }
  
   service.getItemsForCategory  = function(categoryShortName) {
      var response = $http({
        method: "GET",
        url: (ApiPathCategory+categoryShortName)
      });
      return response;
    }
}

})();
