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
<body>
    <?php
        require('menu.html');
   ?>
           
    <table class="contatos">
        <tr>
            <td>
                <img id="img1" src="imagens/email.jpg" alt="">
                <p>Contato@fullstackeletro.com</p>
            </td>

            <td>
                <img id="img2" src="imagens/whatsapp.jpg" width="50px" alt="">
                <p>(11) 9999-9999</p>
            </td>
        </tr>

    </table>
    
    <center>
            <form action="" method="post">
                <legend><h1>Faça um pedido</h1></legend>
                <label for="nome">Nome:</label>
                <input type="text" name="nome"><br><br>
                <label for="endereco">Endereço: </label>
                <input type="text" name="endereco"><br><br>
                <label for="telefone">Telefone: </label>
                <input type="tel" name="telefone"><br><br>
                <label for="nome_produto">Produto: </label>
                <input type="text" name="nome_produto"><br><br>
                <label for="valor">Valor: </label>
                <input type="number" name="valor"><br><br>
                <label for="quantidade">Quantidade: </label>
                <input type="number" name="quantidade"><br><br>
                <button type="submit">Enviar</button>
            </form>

    </center>
    <!--Cabeçalho-->
        <footer>
        <h4 class="h4_cabeçalho">Formas de Pagamento</h4>
        <img class="img_cabeçalho"  src="imagens/pag.jpeg" alt="Formas de Pagamento">
        <p class="p_cabeçalho">&copy; Recodepro</p>
        </footer>
    
    <!--Fim Cabeçalho-->
</body>
</html>