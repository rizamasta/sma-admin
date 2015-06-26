/**
 * Created by rizamasta on 6/15/15.
 */
App.controller('prestasiController',function($scope,$state,$http,urlConfig){

    $scope.listPrestasi = function(){
       try{
           var data_user    = JSON.parse(localStorage['data_login']);
           //console.log(data_user.responseData.username);
           $scope.params    = {
               username : data_user.responseData.username
           };
           //try
           {
               $http({
                   method   : 'POST',
                   url      : urlConfig.baseGateway('prestasi/view'),
                   data     : encoding_url($scope.params),
                   headers  : {'Content-Type':'application/x-www-form-urlencoded'}
               })
                   .success(function(response){
                       if(response.message  ==  "success"){
                           $scope.viewList = response.data;
                       }
                   })
           }




       }
       catch(ex){
           $state.go('out');
       }
   };
    $scope.buttonTambah = function(){
      //$state.go('page.prestasiAdd');
        window.location.href = urlConfig.baseUrl('prestasiAdd');
        window.location.reload();
    };
    $scope.simpanPrestasi   = function(){

    }
});