/**
 * Created by rizamasta on 5/10/15.
 */
App.controller('logoutController',['$rootScope','$state','$scope','$http', function($rootScope,$state,$scope,$http){
   var msg =confirm('Anda ingin Logout?');
   if(msg)
   {
       localStorage.clear();
       $state.go('login.user');
   }

}]);
