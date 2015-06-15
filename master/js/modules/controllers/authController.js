App.controller('authController',['$state','$scope','$http', function($state){
   //console.log("log"+localStorage['data_login']);
    try{
        var login = JSON.parse(localStorage['data_login']);
    }
    catch(ex){
        localStorage.clear();
        $state.go('login.user');
    }

}]);