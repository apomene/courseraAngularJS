(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/MenuApp/templates/home.template.html'
  })

  //  Categories page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/MenuApp/templates/categories.template.html',
    controller: 'MenuCategoriesController as catgres',
    resolve: {
      cats: ['MenuDataService', function (MenuDataService) {
         return MenuDataService.getAllCategories(); 
      }]
    }
  })

   //  Items page
   .state('items', {
    url: '/items/{itemSName}',
    templateUrl: 'src/MenuApp/templates/items.template.html',
    controller: 'MenuItemsController as itemsCtrl',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {            
                  return MenuDataService.getItemsForCategory($stateParams.itemSName);
                }]
    }
  })

}

})();
