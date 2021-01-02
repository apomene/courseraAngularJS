(function () {
'use strict';

angular.module('ValidationApp')
.controller('RegistrationController', RegistrationController)
.service("RegService",RegService)
.constant("ApiPath","https://apomene-course5.herokuapp.com/menu_items/");

RegistrationController.$inject = ['RegService']
function RegistrationController(RegService) {
  var reg = this;
  reg.notValid = false;
  reg.user = {firstname:'',lastname:'',email:'',phone:'',dish:''};

  // reg.submit = function () {
  //   reg.completed = true;
  //   reg.notValid = false;
  //   var promise = RegService.getItem(reg.user.dish);
  //   promise.then(function(result){
  //     data = result.data;       
  //   })
  //   .catch(error=>  reg.notValid = true);
  // };
}

RegService.$inject = ['$http','ApiPath'];
function RegService($http,ApiPath){

  var service = this; 
  service.getItem  = function(shortName) {
    var response = $http({
      method: "GET",
      url: (ApiPath+'L19'+'.json')
    });
    return response;
  }
}

})();
