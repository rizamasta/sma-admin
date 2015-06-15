/**
 * Created by rizamasta on 5/31/15.
 */
App.service('urlConfig',function(){

    this.baseUrl    = function(uri){
        return "http://localhost/sma-pesisirtengah/admin-ng/#/page/"+uri;
    };
    this.gateway    = function(uri){
        return "http://localhost/sma-api/"+uri;
    };
    this.baseGateway= function(uri){
        return "http://localhost/sma-pesisirtengah/api/index.php/"+uri;
    }
});