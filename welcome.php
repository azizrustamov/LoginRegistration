<!DOCTYPE html>
<?php
if (isset($_GET['login'])) {
    $user = $_GET['login'];
}
?>

<html>
    <head>
        <link rel="stylesheet" type="text/css" href="css/mystyle.css">
        <meta charset="UTF-8">

        <title>Добро пожаловать</title>
    </head>
    <body>
        <h1>Добро пожаловать <?php echo $user ?></h1>
        <br />

        <div id="logout">
            <a href="index.php">Выйти</a>
        </div>
    </body>
</html>