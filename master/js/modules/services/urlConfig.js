/**
 * Created by rizamasta on 5/31/15.
 */
App.service('urlConfig',function(){

    this.baseUrl    = function(url){
        return "hhttp://localhost/sma-pesisirtengah/admin-ng/#/page/"+url;
    };
    this.gateway    = function(url){
        return "http://localhost/sma-api/"+url;
    }
});