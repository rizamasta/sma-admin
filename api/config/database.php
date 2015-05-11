<?php
/**
 * Created by PhpStorm.
 * User: rizamasta
 * Date: 5/10/15
 * Time: 8:52 PM
 */
date_default_timezone_set("Asia/Jakarta");

class Database {
    public static $dbName  = 'dealer_memo';
    public static $dbHost  = 'localhost';
    public static $dbUser  = 'root';
    public static $dbPass  = 'e430';
    public static $cont    = null;

    public function __construct(){
        die('Init Function not allowed');
    }

    public static function connect(){

        if(null== self::$cont){
            try {
                self::$cont = new PDO("mysql:host=".self::$dbHost.";"."dbname=".self::$dbName,self::$dbUser,self::$dbPass);
            }
            catch(PDOException $e){
                die($e->getMessage());
            }
        }
        return self::$cont;
    }

    public static function disconnect(){
        self::$cont =   null;
    }
    public static function show_app_name(){
        $name = "Metro Motor";
       return $name;
    }
}