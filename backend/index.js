const express = require('express');
const server = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const db = require('./conexao.js');
let connection = db();
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const ip = require('ip');

server.use(express.json());
server.use(cors());

server.use(bodyparser.json());
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

    server.get("/mongo", (req,res) => {
        MongoClient.connect(url, (erros, db) => {
            if (erros) {
                return res.send(erros);
            }
            const dbo = db.db("contatos");
            dbo.collection("mensagens").find().toArray( (erro, result) => {                  
                if (erro) {
                    return res.send(erro);
                }
              res.send(result);
              db.close();                      
            });                        
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

        MongoClient.connect(url, (erros, db) => {
            if (erros) throw erros;
            const dbo = db.db("contatos");
            let objeto = { name: nome, mensagem: msg , data: new Date()};
            dbo.collection("mensagens").insertOne(objeto, (erro, res) => {
              if (erro) throw erro;
              console.log("1 - documento inserido com sucesso");
              db.close();
            });
        res.send("<h1>1 Documento inserido com sucesso !</h1>");
        });
   
    });

    const porta = 3030;
    server.listen(porta, `${ip.address()}` , () => {
        console.log(`Online na porta ${porta}. Acesso local http://localhost:${porta}/ 
        		Acesso LAN http://${ip.address()}:3030/`);
    });
