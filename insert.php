<?php

include('ipValidation.php'); //приклеплении класса для проверки времинии регистрации с определенного IP адресса

//запис данных нового пользователя в датабазу в случае естли с данного IP адресса не было регестрации за последнее 30 дней

if (isset($_POST['names']) && isset($_POST['surnames']) && isset($_POST['logins']) && isset($_POST['emails']) && isset($_POST['pass1s'])) {

    $name = $_POST['names'];
    $surname = $_POST['surnames'];
    $login = $_POST['logins'];
    $email = $_POST['emails'];
    $pass1 = md5($_POST['pass1s']);
    $date = date('Y-m-d');
    $ip = $_SERVER['REMOTE_ADDR'];

    $ipObj = new ipCheck($ip, $date);

    mysql_connect("localhost", "root", "") or die("We could not connect!");
    mysql_select_db("registration");
    
    $userIp = $ipObj->getIp();
    $userIp1 = mysql_query("SELECT ip FROM users WHERE ip='$userIp'");
    $count = mysql_num_rows($userIp1);

    if ($count != 0) {
        $c = mysql_query("SELECT date FROM users WHERE ip='$userIp' LIMIT 1");
        $d = mysql_fetch_row($c);
        $time=$ipObj->checkTime($d[0]);
        
        if ($time >= 30) {
            if (mysql_query("INSERT INTO users(name, surname, login, email, pass,date,ip) VALUES('$name', '$surname', '$login', '$email', '$pass1','$date','$ip')")) {
                echo 1;
            } else {
                echo 0;
            }
        } else {
            echo 2;
        }
    } else {
        if (mysql_query("INSERT INTO users(name, surname, login, email, pass,date,ip) VALUES('$name', '$surname', '$login', '$email', '$pass1','$date','$ip')")) {
            echo 1;
        } else {
            echo 0;
        }
    }
}
