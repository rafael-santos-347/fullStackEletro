### Projeto Full Stack Eletro Recodepro 2020 - Entrega de Dezembro/2020

### PHP

Em relação a parte de PHP, os dados da lista devem ser retornados pelo PHP em formato JSON, para alimentação e uso no React Js.

### ReactJS

Em relação a parte de React.Js a solicitação é que você realize um refactory (refatoração) do front-end do seu projeto. Ou seja, é preciso realizar a reconstrução da interface do seu projeto utilizando o React. Js.

### Bootstrap

Em relação a parte de Bootstrap, a solicitação é que você utilize implemente no seu refactory (feito no curso anterior) pelo menos uma lista, estilizada com as classes de listas do Bootstrap.

### Banco de dados (SQL)

Agora, nesta última etapa os dados da lista devem ser originários de JOIN de pelo menos 2 tabelas.

### O Banco de Dados está na pasta 'Db'

./backend/Db/fullstack.sql

### O Acesso a "API" de retorno JSON para consumo em react na pagina index.php

./backend/index.php

### Para acessar as tabelas "produtos", "pedidos" e "contato" é necessário via GET com chave "table" e valor conforme o nome da tabela que quer acessar

Exemplo:

1 - http://localhost/projetos/react/backend/index.php?table=pedidos

### Entrega 20/01/2020

### Entrega do Projeto Prático Individual de Node JS

1 - Configurar um servidor HTTP com Node.Js
2 - Realizar a conexão com o banco de dados
3 - Criar uma interface para retorno do dados de BD em formato JSON
4 - Realizar o refactory (reconstrução) do projeto substituindo a parte back-end anteriormente construída em PHP pelo back-end Node.Js.

### Entrega do Projeto Prático Individual de React.JS Back Intermediário

1 - Instalar a biblioteca React Redux no projeto.
2 - Criar Action e Reducer (ao menos 2 actions com os seus reducers).
3 - Criar Evento de acionamento das Actions (disparo para acionamento de 2 actions criadas, atualizando o componente envolvido).


## Node JS

1 - Está configurado na porta 3030 então se ela estiver ocupada por favor trocar;
2 - Para acessar os dados da tabela em formato JSON basta acessar via GET a chave table e o valor produtos, contato ou pedidos para acessar essas respectivas tabelas http://localhost:3030?table=produtos
3 - O comando para inicar é npm run iniciar, conforme script;

## React Back Intermediário

1 - 