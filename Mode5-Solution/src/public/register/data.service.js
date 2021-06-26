(function () {
    'use strict';
    
    angular.module('ValidationApp')
    .service("DataService",DataService)
  
    function DataService() {

        this.userFirstName;
        this.userLastName;
        this.userEmail;
        this.userPhone;
        this.userData;
        this.userSigned=false;
    }

    
    })();
    