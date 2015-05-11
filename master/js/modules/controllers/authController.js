App.controller('authController',['$state','$scope','$http', function($state,$scope,$http){
   // console.log("log"+localStorage['login']);
    if(typeof(localStorage['data_login'])=="undefined"){
        localStorage.clear();
        $state.go('login.user');
    }
}]);