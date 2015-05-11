<?php
/**
 * Created by PhpStorm.
 * User: rizamasta
 * Date: 5/10/15
 * Time: 9:31 PM
 */

if($_SERVER['REQUEST_METHOD']=="POST"){
    $username       =   $_POST['username'];
    $password       =   $_POST['password'];

    if( !empty($username)    &&  !empty($password)){
        include "../../config/database.php";
        $pdo        = Database::connect();
        $sql        = "Select nama_login,nama_asli,role From tbl_user WHERE status='1' AND nama_login='$username' AND password=SHA1('$password')";
        $query      = $pdo->query($sql);
        $result     = $query->fetchAll(PDO::FETCH_ASSOC);

        if($result){
            $result[0]['status']      =   true;
            $result[0]['error_msg']   =   "No Error";
            $update         = date("Y/m/d H:i:s");

            $sql_update     = "Update tbl_user SET last_log=:timeLog WHERE nama_login=:username";
            $query_update   = $pdo->prepare($sql_update);
            $query_update->bindParam(':timeLog',$update,PDO::PARAM_STR);
            $query_update->bindParam(':username',$username,PDO::PARAM_STR);
            $update_exec    = $query_update->execute();

            echo json_encode($result[0]);
        }
        else{
            $result['status']      =   false;
            $result['error_msg']   =   "Kombinasi Salah!";
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