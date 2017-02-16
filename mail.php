<?php
$to = "pawelwankiewicz@wp.pl";
$name = $_POST['name'];
$message = $_POST['message'];
$headers = 'From: ' . $name . '(' . $_POST["email"] . ')' \r\n . 'Content-type: text/html; charset=utf-8';

mail($to, $name, $message, $headers);


echo "OK!";
?>