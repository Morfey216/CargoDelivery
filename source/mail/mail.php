<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$country = $_POST['country'];
$city = $_POST['city'];
$sendingPoint = $_POST['sending-point'];
$description = $_POST['description'];

if ( !empty( $_FILES['uploaded-file']['tmp_name'] ) and $_FILES['uploaded-file']['error'] == 0 ) {
  $filepath = $_FILES['uploaded-file']['tmp_name'];
  $filename = $_FILES['uploaded-file']['name'];
} else {
  $filepath = '';
  $filename = '';
}

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'no-replay@svnimport.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'gjxnflkzjnghfdrb'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->isHTML(true);                                  // Set email format to HTML
$mail->setFrom('no-replay@svnimport.com'); // от кого будет уходить письмо?
$mail->addAddress('s.streha@yandex.by');     // Кому будет уходить письмо
$mail->addAddress('info@svnimport.com');     // Кому будет уходить письмо

$mail->addAttachment($filepath, $filename);    // Optional name

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' .$name . ' оставил заявку; Телефон ' .$phone. '<br>Почта: ' .$email. '<br>Страна: ' .$country. '<br>Город: ' .$city. '<br>Из какой страны товар: ' .$sendingPoint. '<br>Описание: ' .$description;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Данные отправить не удалось. Попробуйте позже!';
} else {
    // header('location: thank-you.html');
    echo 'Данные отправлены!';
}
?>
