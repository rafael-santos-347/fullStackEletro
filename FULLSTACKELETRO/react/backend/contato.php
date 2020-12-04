<?php

    require('Models/Fullstack.php');

    header("Access-Control-Allow-Origin:*"); 
   
    $nome = $_GET['nome'];
    $msg = $_GET['msg'];

    $cadastrar = Fullstack::inserirBd($nome,$msg);

    if($nome == "" && $msg == "") {
        echo "<script> window.location('C:/wamp64/www/projetos/react/frontend/contato.html');</script>";
    }

    if($cadastrar == true) {
        echo "Enviado com sucesso !";
        echo "<script> window.location('C:/wamp64/www/projetos/react/frontend/contato.html');</script>";
    } else {
        echo "erro ao cadastrar no BD !";
    }    
