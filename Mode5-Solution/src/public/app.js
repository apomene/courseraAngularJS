(function () {

angular.module('SimpleFormsApp',[]);

angular.module('SimpleFormsApp')
.controller('RegistrationController', RegistrationController)
.controller('MyInfoController',MyInfoController)
.service("RegService",RegService)
.constant("ApiPath","https://apomene-course5.herokuapp.com/menu_items/")
.factory("regUser",function(){
  return {};
});

RegistrationController.$inject = ['$scope','RegService','regUser']
function RegistrationController($scope,RegService,regUser) {
  var reg = this;
  reg.notValid = false;
  $scope.regUser = regUser;
  reg.submit = function () {
    reg.completed = true;
    reg.notValid = false;
    var promise = RegService.getItem(reg.user.dish);
    promise.then(function(result){
      reg.user.data = result.data;    
      $scope.regUser = user;
    })
    .catch(error=>  reg.notValid = true);
  };
}

MyInfoController.$inject = ['$scope','regUser'];
function MyInfoController($scope,regUser){
  var ctrl = this;

  ctrl.user ={};

  // on page load we check to see if the storage service contains anything
  this.$onInit = function() {
    $scope.regUser = regUser;
    ctrl.user = regUser;
  };

}
RegService.$inject = ['$http','ApiPath'];
function RegService($http,ApiPath){

  var service = this; 
  service.getItem  = function(shortName) {
    var response = $http({
      method: "GET",
      url: (ApiPath+shortName+'.json')
    });
    return response;
  }
}

})();
