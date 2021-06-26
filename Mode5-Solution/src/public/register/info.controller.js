(function () {
'use strict';

angular.module('ValidationApp')
.controller('InformationController', InformationController)


InformationController.$inject = ['DataService']
function InformationController(DataService) {
  var ctrlinfo = this;
  ctrlinfo.signed = DataService.userSigned;
  ctrlinfo.firstname = DataService.userFirstName;
  ctrlinfo.lastname = DataService.userLastName;
  ctrlinfo.phone = DataService.userPhone;
  ctrlinfo.email = DataService.userEmail;
  ctrlinfo.data = DataService.userData;
  
}


})();
