    <?php
        require('conexao.php');
      
        if(isset($_POST['nome']) && isset($_POST['msg'])) {
            $nome = $_POST['nome'];
            $msg = $_POST['msg'];

            $sql = "insert into contato (nome, mensagem) values ('$nome','$msg');";

            mysqli_query($link, $sql);     
        }
    ?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contato</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/script.js"></script>
</head>
<body>
    <?php
        require('menu.html');
   ?>
            <h5 id="msg"></h5>
    <header>
        <h1 class="h1_contatos">Contato</h1><hr>
    </header>
    
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

    <script>
        function exibeMsg() {
            return document.getElementById('msg').innerHTML = "Enviado com Sucesso !";
        }
    </script>

  
    <form class="form_contatos" action="" method="post">
        <label for="nome"><h4>Nome: </h4></label>
        <input type="text" name="nome" placeholder="Digite seu nome">
        <label for="msg"><h4>Mensagem: </h4></label>
        <textarea name="msg" placeholder="Digite sua mensagem"></textarea><br><br>
        <input onclick="exibeMsg()" type="submit" value="Enviar">
    </form>
    

    <center><h4 style="margin-bottom:30px;"> Comentários:</h4>
<?php
    $sql = "select * from contato;";
    $resultado = mysqli_query($link, $sql);

    if($resultado->num_rows > 0) {
        while($linha = $resultado->fetch_assoc()) {
          // echo "Nome: $linha['nome'] <br> Mensagem: $linha['mensagem']";
            echo "Nome: ". $linha['nome'] ."<br>Mensagem: ". $linha['mensagem'] ."<br>Data: ". $linha['data'] ."<hr style='width:150px'>";
    }
    } else {
        echo "Nenhum comentário a ser exibido !";
    }
    
 ?>   
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