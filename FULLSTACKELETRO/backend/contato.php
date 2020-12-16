<?php

    require('Models/Contato.php');

    header("Access-Control-Allow-Origin:*"); 
   
    $contato = new Contato;
    $contato->nome = $_POST['nome'];
    $contato->mensagem = $_POST['msg'];

    $validacao = $contato->inserirBd();

    if ($validacao) {
        echo json_encode(true);
    } else {
        echo json_encode(false);
    }
