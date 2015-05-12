/**
 * Created by rizamasta on 5/10/15.
 */
App.controller('loginController',['$rootScope','$state','$scope','$http', function($rootScope,$state,$scope,$http){

    $rootScope.currTitle = $state.current.title;
    $rootScope.pageTitle = function() {
        return $rootScope.app.name + ' - ' + ($rootScope.currTitle);
    };
    $scope.authMsg      = undefined;
    $scope.account       = {};


    $scope.login        = function(){
        var urlData  = encoding_url($scope.account);
        $http({
            method: 'POST',
            url: base_gateway('account/login/'),
            data: urlData,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(data){

           $scope.result    = data;

            if($scope.result.responseData){
                $scope.authMsg = "";
                localStorage['data_login']  = JSON.stringify($scope.result);
                $state.go('memo.dashboard');
                console.log("benar");
            }
            else{
                $scope.authMsg = "Password atau Username salah";
            }
            console.log(data);
        }).error(function(e){
            $scope.authMsg = "Error "+e;
        });
    };

}]);
