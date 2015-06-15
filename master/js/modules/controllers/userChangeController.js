/**
 * Created by rizamasta on 5/12/15.
 */
App.controller('userChangeController', function($state,$scope,$http,toaster,urlConfig,$timeout){
    $scope.pop = function(tipe,judul,isi) {
        toaster.pop(tipe, judul, isi);
    };

    if(typeof(localStorage['data_login'])!="undefined") {
        var data_login = JSON.parse(localStorage['data_login']);

        $scope.formData = {
                           username     : data_login.responseData.username,
                           realname     : data_login.responseData.realname,
                           valueRequire : false
        };
        /*if password have key*/
        $scope.passwordPush = function(){
            if($scope.formData.password || $scope.formData.password2){
                $scope.formData.valueRequire = true;
            }
            else{
                $scope.formData.valueRequire = false;
            }
        }
        /*
        update['username']
         */
        /*submit function*/
        $scope.submit = function(){
            if($scope.formData.password == $scope.formData.password2)
            {

                $scope.parameter    =   {
                                            update          :{
                                                                    username        : $scope.formData.username,
                                                                    realname        : $scope.formData.realname


                                                                },
                                            securityToken   : data_login.securityToken
                                        };
                typeof($scope.formData.password) =="undefined"?$scope.formData.password="": $scope.parameter.update.password=$scope.formData.password;

                $scope.formData.errorMsg =  "";
                $http({
                    method  :'POST',
                    url     :urlConfig.gateway('account/account/'),
                    data    :encoding_url($scope.parameter),
                    headers : {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function(data){
                    if(data.login)
                        {
                            $scope.pop('wait','Ubah Password Success','Untuk keamanan, anda di logout secara otomatis.');
                            $timeout(function(){
                               $state.go('out');
                            },3000)
                        }
                    else{
                        $scope.pop('error','Gagal',data.messageUpdate);
                    }
                }).error(function(e){
                    console.log(e);
                });
            }
            else{
                $scope.formData.errorMsg =  "Password tidak sama!";
            }
        };
    }
    else{
        //localStorage.clear();
        //$state.go('memo.dashboard');
        console.log(localStorage['data_login']);
        console.log("user no")
    }

});