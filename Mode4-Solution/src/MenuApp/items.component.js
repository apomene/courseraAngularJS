(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'src/MenuApp/templates/details.template.html',
  bindings: {
    items: '<'
  }
});

})();
