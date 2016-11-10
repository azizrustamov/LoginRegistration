<?php
//проверка логина и паролья пользователя при входе
if (isset($_POST['logins']) && isset($_POST['passs'])) {

    $login = $_POST['logins'];
    $pass = md5($_POST['passs']);


    mysql_connect("localhost", "root", "") or die("We could not connect!");
    mysql_select_db("registration");

    $username = mysql_query("SELECT login FROM users WHERE login='$login'");
    $userpass = mysql_query("SELECT pass FROM users WHERE pass='$pass'");
    $count1 = mysql_num_rows($username);
    $count2 = mysql_num_rows($userpass);

    if ($count1 != 0 && $count2!=0) {
        echo 0;
                
    } else {
        echo 1;
    }
}
