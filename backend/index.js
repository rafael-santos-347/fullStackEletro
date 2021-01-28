
/*let headers = new Headers();

headers.append('Access-Control-Allow-Origin', 'http://localhost:3030');
headers.append('Access-Control-Allow-Credentials', 'true'); */

const express = require('express');
const server = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const db = require('./conexao.js');
let connection = db();

server.use(express.json());
server.use(cors());

server.use(bodyparser.urlencoded({extended:true}));



    server.get("/", (req,res) => {
        let { table } = req.query;
        connection.query(`SELECT * FROM ${table};`, (erros, resultado) => {

            if(erros) {
                res.send(erros);
            } 

            if (table == "produtos"){
                res.send(resultado); 
            } else if (table == "pedidos") {
                res.send(resultado); 
            } else if (table == "contato") {
                res.send(resultado); 
            } else if (table.length <= 0) {
                res.send("Erro ao acessar os dados por favor inserir via GET ?table=produtos ou table=pedidos ou table=contato");
            } else  {
                res.send("Erro ao acessar os dados por favor inserir via GET ?table=produtos ou table=pedidos ou table=contato");
            }
        });              
    });

    server.get("/pedido", (req,res) => {
        connection.query("SELECT pedidos.nome_produto AS produto, pedidos.nome_cliente AS cliente, pedidos.valor_unitario AS preço FROM produtos INNER JOIN pedidos ON produtos.nome = pedidos.nome_produto ORDER BY pedidos.id_pedidos DESC;", (erros, resultado) => {
            if(erros) {
                res.send(erros);
            } else {
                res.send(resultado[0]);
            }
             
        });
        
    });

    server.post("/pedido2", (req,res) => {
        let { cliente , endereco , telefone , produto , valor , quantidade  } = req.body;
        connection.query(`INSERT INTO pedidos(nome_cliente, endereco, telefone, nome_produto, valor_unitario, quantidade) VALUES ('${cliente}','${endereco}', ${telefone}, '${produto}', ${valor}, ${quantidade});`, (erros, resultado) => {
            if(erros) {
                res.send(erros);
            } else {
                res.status(201).send(`<h1>Pedido Enviado com Sucesso ! ${cliente}</h1>`);
            }
        });     
        
    });

    server.post("/contato", (req,res) => {
        let { nome , msg } = req.body;
        connection.query(`INSERT INTO contato (nome, mensagem) VALUES ('${nome}','${msg}');`, (erros, resultado) => {
            if(erros) {
                res.send(erros);
            } else {
                res.status(201).send(`<h1>Mensagem enviada com sucesso, ${nome}</h1>`);
            }
        });
        
    })

  /*  server.get("/", (req,res) => {
        let query = connection.query("Select * from produtos" ,
            (erros, resultado) => {
                
                res.json(resultado);
            }
        );
        
    })
     */


    server.listen(3030, () => {
        console.log("Online");
    });
