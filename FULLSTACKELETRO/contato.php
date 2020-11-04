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

    <script>
        function exibeMsg() {
            return document.getElementById('msg').innerHTML = "Enviado com Sucesso !";
        }
    </script>

  
    <form class="form-group text-center mt-5 mb-5 container-fluid" action="" method="post">
        <div class="row align-items-center justify-content-center">
        <label for="nome" class="col-sm-2 col-form-label "><h4>Nome: </h4></label>
        <input class="form-control-sm col-sm-2 form-control-plaintext" type="text" name="nome" placeholder="Digite seu nome">
        </div>
        <div class="row align-items-center justify-content-center mt-3">
        <label for="msg" class="col-sm-2 col-form-label"><h4>Mensagem: </h4></label>
        <textarea class="form-control-lg col-sm-2 form-control-plaintext" name="msg" placeholder="Digite sua mensagem"></textarea>
        </div>
        <div class="row align-items-center justify-content-center">
        <input class="btn btn-danger col-sm-1 mt-5" onclick="exibeMsg()" type="submit" value="Enviar">
        </div>
    </form>
    

    <h4 class="display-4 text-center text-dark"> Comentários:</h4>
    <div class="text-center lead mt-5 mb-5">
<?php
    $sql = "select * from contato;";
    $resultado = mysqli_query($link, $sql);

    if($resultado->num_rows > 0) {
        while($linha = $resultado->fetch_assoc()) {
            echo "Nome: ". $linha['nome'] ."<br>Mensagem: ". $linha['mensagem'] ."<br>Data: ". $linha['data'] ."<hr style='width:150px'>";
    }
    } else {
        echo "Nenhum comentário a ser exibido !";
    }
    
 ?>   
    </div>

    <?php
        require('footer.html');
    ?>

</body>
</html>