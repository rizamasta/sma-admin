/**
 * Created by rizamasta on 5/10/15.
 */
App.controller('loginController',['$rootScope','$state','$scope','$http','urlConfig', function($rootScope,$state,$scope,$http,urlConfig){

    $rootScope.currTitle = $state.current.title;
    $rootScope.pageTitle = function() {
        return $rootScope.app.name + ' - ' + ($rootScope.currTitle);
    };
    $scope.authMsg      = undefined;
    $scope.account       = {};


    $scope.login        = function(){
        var urlData  = encoding_url($scope.account);
        $http({
            method  : 'POST',
            url     : urlConfig.gateway('account/login'),
            data    : urlData,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(data,message){
           //console.log(message);
           $scope.result    = data;

            if($scope.result.responseData){
                $scope.authMsg = "";
                localStorage['data_login']  = JSON.stringify($scope.result);
                $state.go('page.dashboard');
            }
            else{
                $scope.authMsg = $scope.result.ErrorLogin;
            }

        }).error(function(e){
            $scope.authMsg = "Error "+e;
        });
    };


}]);
