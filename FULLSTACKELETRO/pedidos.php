<?php
    require('conexao.php');
    if(isset($_POST['nome']) && isset($_POST['endereco']) && isset($_POST['telefone']) && isset($_POST['nome_produto']) && isset($_POST['valor']) && isset($_POST['quantidade'])) {
        $nome = $_POST['nome'];
        $endereco = $_POST['endereco'];
        $telefone = $_POST['telefone'];
        $produto = $_POST['nome_produto'];
        $valor = $_POST['valor'];
        $quantidade = $_POST['quantidade'];

        $sql = "insert into pedidos (nome_cliente, endereco, telefone, nome_produto, valor_unitario, quantidade) values ('$nome','$endereco', '$telefone', '$produto', '$valor', '$quantidade');";

        mysqli_query($link, $sql);     
    }
?>


<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pedidos</title>
    <link rel="stylesheet" href="css/style.css">
    <style>
        input {
            border: solid 1px black;
        }
    </style>
</head>
<body class="container-fluid px-0">
    <?php
        require('menu.html');
   ?>
           
        <header>
            <h1 class="text-center text-dark mb-5">Contato</h1><hr>
        </header>
    
            <div class="row container-fluid align-items-center justify-content-center mb-5">
                <img class="col-sm-1" id="img1" src="imagens/email.jpg" alt="">
                <p class="col-sm-4">Contato@fullstackeletro.com</p>
       
                <img class="col-sm-1" id="img2" src="imagens/whatsapp.jpg" width="50px" alt="">
                <p class="col-sm-4">(11) 9999-9999</p>
            </div>
    
    
            <form class="form-group container mb-5 mt-5 text-center" action="" method="post">
                <legend><h1>Faça um pedido</h1></legend>
                <label class="mt-5" for="nome">Nome:</label>
                <input class="form-control-lg ml-3" type="text" name="nome"><br><br>
                <label for="endereco">Endereço: </label>
                <input class="form-control-lg ml-3" type="text" name="endereco"><br><br>
                <label for="telefone">Telefone: </label>
                <input class="form-control-lg ml-3" type="tel" name="telefone"><br><br>
                <label for="nome_produto">Produto: </label>
                <input class="form-control-lg ml-3" type="text" name="nome_produto"><br><br>
                <label for="valor">Valor: </label>
                <input class="form-control-lg ml-3" type="number" name="valor"><br><br>
                <label for="quantidade">Quantidade: </label>
                <input class="form-control-lg ml-3" type="number" name="quantidade"><br><br>
                <button type="submit" class="btn btn-danger mb-5">Enviar</button>
            </form>

    
    <?php
        require('footer.html');
    ?>

</body>
</html>