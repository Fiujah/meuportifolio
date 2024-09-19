<?php

    $nome     = addcslashes($_POST['nome']);
    $email    = addcslashes($_POST['email']);
    $telefone = addcslashes($_POST['telefone']);
    $mensagem = addcslashes($_POST['mensagem']);

    $para = 'renanfiujah@gmail.com';
    $assunto =  'NOVO CONTATO !';

    $corpo = "Nome: ".$nome."\n"."Email: ".$email."\n"."Telefone: "."\n"."Mensagem: ".$mensagem;

    $cabecalho = "From: renanfiujah@gmail.com"."\n"."Reply-to: ".$email."\n"."X-Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabecalho)){
        echo("Mensagem enviada com sucesso!");
    }else{
        echo("Houve um problema ao enviar a mensagem, verifique os campos e tente novamente !");
    }


?>