<?php
require 'PHPMailerAutoload.php';
$email = $_REQUEST['email'];
$message =$_REQUEST['message'];
$name= $_REQUEST['name'];

require_once('class.phpmailer.php');    // dodanie klasy phpmailer
require_once('class.smtp.php');    // dodanie klasy smtp
$mail = new PHPMailer();    //utworzenie nowej klasy phpmailer
$mail->IsSMTP();
$mail->From = $email;    //Pełny adres e-mail
$mail->FromName = $name;    //imię i nazwisko lub nazwa użyta do wysyłania wiadomości
$mail->Host = "smtp.gmail.com";    //adres serwera SMTP wysyłającego e-mail
$mail->Mailer = "smtp";    //do wysłania zostanie użyty serwer SMTP
$mail->SMTPAuth = true;    //włączenie autoryzacji do serwera SMTP
$mail->Username = "test.email.pawell67@gmail.com";    //nazwa użytkownika do skrzynki e-mail
$mail->Password = "r4u27oadAKcH";    //hasło użytkownika do skrzynki e-mail
$mail->Port = 587; //port serwera SMTP
$mail->Body = $message;    //Treść wiadomości, można stosować zmienne i znaczniki HTML
$mail->AltBody = $message;
$mail->SMTPAutoTLS = false;   //wyłączenie TLS
$mail->SMTPSecure = 'tls';    //
$mail->AddAddress ("pawellwankiewicz@gmail.com","Paweł Wankiewicz");    //adres skrzynki e-mail oraz nazwa
//adresata, do którego trafi wiadomość
$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);
if($mail->Send())    //sprawdzenie wysłania, jeśli wiadomość została pomyślnie wysłana
{
echo 'E-mail został wysłany'; //wyświetl ten komunikat
}
else    //w przeciwnym wypadku
{
echo 'E-mail nie mógł zostać wysłany';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
    //wyświetl następujący
}
?>