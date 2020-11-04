<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nossas Lojas</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/script.js"></script>
</head>
<body class="container-fluid px-0">
    <?php
        require('menu.html');
   ?>

    <header class="display-3 text-info text-center mb-5">
        <h1>Nossas lojas</h1>
    </header>
    <table class="table text-center">
        <tr>
            <td>
                <h3>Rio de Janeiro</h3>
                <p>Avenida Presidente Vargas, 5000</p>
                <p>10 &ordm; andar</p>
                <p>Centro</p>
                <p>(21) 3333-3333</p>
            </td>

            <td>
                <h3>São Paulo</h3>
                <p>Avenida Paulista, 985</p>
                <p>3 &ordm; andar</p>
                <p>Jardins</p>
                <p>(11) 4444-4444</p>
            </td>

            <td>
                <h3>Santa Catarina</h3>
                <p>Rua Major &Aacute; vila, 370</p>
                <p>Vila Mariana</p>
                <p>(47) 5555-5555</p>
            </td>
        </tr>

    </table>
    
    
    <?php
        require('footer.html');
    ?>

</body>
</html>