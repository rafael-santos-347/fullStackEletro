<?php
    $link = mysqli_connect('localhost', 'root', '', 'fullstack');
    $sql;
    $resultado;
    # Verificação conexão

    if(!$link) {
        die ("Falha na conexão com o DB". mysqli_connect_erro());
    }

?>