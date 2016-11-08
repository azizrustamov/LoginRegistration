<?php

if (isset($_POST['logins'])) {

    $login = $_POST['logins'];

    if ($login != "") {
        mysql_connect("localhost", "root", "") or die("We could not connect!");
        mysql_select_db("registration");

        $username = mysql_query("SELECT login FROM users WHERE login='$login'");
        $count1 = mysql_num_rows($username);

        if ($count1 != 0) {
            echo 1;
        } else {
            echo 0;
        }
    }
}

if (isset($_POST['emails'])) {

    $email = $_POST['emails'];

    if ($email != "") {
        mysql_connect("localhost", "root", "") or die("We could not connect!");
        mysql_select_db("registration");

        $useremail = mysql_query("SELECT email FROM users WHERE email='$email'");
        $count = mysql_num_rows($useremail);

        if ($count != 0) {
            echo 1;
        } else {
            echo 0;
        }
    }
}





