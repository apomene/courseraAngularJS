(function () {
'use strict';

angular.module('ValidationApp')
.controller('RegistrationController', RegistrationController)
.service("RegService",RegService)
.constant("ApiPath","https://apomene-course5.herokuapp.com/menu_items/");

RegistrationController.$inject = ['RegService','DataService']
function RegistrationController(RegService,DataService) {
  var reg = this;
  reg.notValid = false;
  
    reg.submit = function () {
   
    reg.notValid = false; 
    //DataService.userSigned =false;
    var promise = RegService.getItem(reg.dish);   
     promise.then(function(result){
      reg.completed = true;
      DataService.userFirstName = reg.firstname;
      DataService.userLastName = reg.lastname;
      DataService.userEmail = reg.email;
      DataService.userPhone = reg.phone;
      DataService.userSigned = true;
      DataService.userData = result.data;
    })
    .catch(error=>  reg.notValid = true)

  };
}

RegService.$inject = ['$http','ApiPath'];
function RegService($http,ApiPath){
  // var shortName="L19";
  var service = this; 
  service.getItem  = function(dish ) {
    var response = $http({
      method: "GET",
      url: (ApiPath+dish+'.json')
    });
    return response;
  }
}

})();
