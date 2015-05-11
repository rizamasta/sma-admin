<?php
/**
 * Created by PhpStorm.
 * User: rizamasta
 * Date: 5/10/15
 * Time: 9:14 PM
 */
    include "config/database.php";
    echo    "Time Zone: ".date_default_timezone_get()."<br>Application Name: ".Database::show_app_name()."<br>Time: ".date("d/M/Y H:i:s");