(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/MenuApp/templates/show.template.html',
  bindings: {
    cats: '<'
  }
});

})();
