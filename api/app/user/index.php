<?php
/**
 * Created by PhpStorm.
 * User: rizamasta
 * Date: 5/10/15
 * Time: 9:31 PM
 */

if($_SERVER['REQUEST_METHOD']=="POST"){
   extract($_POST);

    if( !empty($username)    &&  !empty($password)){
        include "../config/database.php";
        $pdo        = Database::connect();
        $sql        = "Select * From tbl_user WHERE status='1' AND nama_login='$username' AND password=SHA1('$password')";
        $result     = $pdo->query($sql);
        if($result){
            $msg['status']      =   true;
            $msg['error_msg']   =   "No Error";
            echo json_encode($msg);
            echo json_encode($result);
        }
        else{
            $msg['status']      =   false;
            $msg['error_msg']   =   "Kombinasi Salah!";
            echo json_encode($msg);
            echo json_encode($result);
        }

    }
    else{
        $msg['status']      =   false;
        $msg['error_msg']   =   "Data Kosong!";
        echo json_encode($msg);
    }
}
else{
    echo "Only Post Method";
}