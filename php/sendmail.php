<?php
$nome = $_POST['name'];
$email = $_POST['email'];
$assunto = $_POST['subject'];
$mensagem = $_POST['message'];
?>
<?php
$to = "samuelhenrique222@gmail.com";

$subject = "Solicitação de Orçamento via Site Web";
$message = "Nome: $nome
            E-mail: $email
            Assunto: $assunto
            Mensagem: $mensagem";

$header = "MIME-Version: 1.0\n";
$header = "Content-type: text/html; charset=iso-8859-1\n";
$header = "From:$email\m";

mail($to,$subject,$message,$header);
echo"Email enviado com Sucesso!";

?>