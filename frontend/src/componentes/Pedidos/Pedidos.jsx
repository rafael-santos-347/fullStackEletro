import Upedido from './Upedido';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import React from "react";

const Pedidos = () => {
    return (
        <React.Fragment>
        <Header />
        <main className="my-4 py-3">
            <header>
                <h1 className="text-center text-dark mb-5">Contato</h1><hr />
            </header>

            <div className="row container-fluid align-items-center justify-content-center mb-5">
                <img className="col-sm-1" id="img1" src="imagens/email.jpg" alt="" />
                <p className="col-sm-4">Contato@fullstackeletro.com</p>
    
                <img className="col-sm-1" id="img2" src="imagens/whatsapp.jpg" width="50px" alt="" />
                <p className="col-sm-4">(11) 9999-9999</p>
            </div>

            <form className="form-group container mt-5 text-center" action="http://localhost:3030/pedido2" method="POST">
                <legend><h1>Faça um pedido</h1></legend>
                <label className="mt-5" htmlFor="nome">Nome:</label>
                <input className="form-control-lg ml-3 border border-dark" type="text" name="cliente" /><br /><br />
                <label >Endereço: </label>
                <input className="form-control-lg ml-3 border border-dark" type="text" name="endereco" /><br /><br />
                <label >Telefone: </label>
                <input className="form-control-lg ml-3 border border-dark" type="tel" name="telefone" /><br /><br />
                <label >Produto: </label>
                <input className="form-control-lg ml-3 border border-dark" type="text" name="produto" /><br /><br />
                <label >Valor: </label>
                <input className="form-control-lg ml-3 border border-dark" type="number" name="valor" /><br /><br />
                <label >Quantidade: </label>
                <input className="form-control-lg ml-3 border border-dark" type="number" name="quantidade" /><br /><br />
                <button type="submit" className="btn btn-danger mb-5">Enviar</button>
            </form>

            <div className="text-center lead mb-1">

                <Upedido />

            </div>
                
            
         </main>
         <Footer />
        </React.Fragment>
    );
}

export default Pedidos;