const Main = () => {
    return (
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

            <form className="form-group container mt-5 text-center" action="http://localhost/projetos/react/backend/pedido2.php" method="get">
                <legend><h1>Faça um pedido</h1></legend>
                <label className="mt-5" htmlFor="nome">Nome:</label>
                <input className="form-control-lg ml-3 border border-dark" type="text" name="cliente" /><br /><br />
                <label htmlFor="endereco">Endereço: </label>
                <input className="form-control-lg ml-3 border border-dark" type="text" name="endereco" /><br /><br />
                <label htmlFor="telefone">Telefone: </label>
                <input className="form-control-lg ml-3 border border-dark" type="tel" name="telefone" /><br /><br />
                <label htmlFor="nome_produto">Produto: </label>
                <input className="form-control-lg ml-3 border border-dark" type="text" name="produto" /><br /><br />
                <label htmlFor="valor">Valor: </label>
                <input className="form-control-lg ml-3 border border-dark" type="number" name="valor" /><br /><br />
                <label htmlFor="quantidade">Quantidade: </label>
                <input className="form-control-lg ml-3 border border-dark" type="number" name="quantidade" /><br /><br />
                <button type="submit" className="btn btn-danger mb-5">Enviar</button>
            </form>

            <div className="text-center lead mb-1">

                <Pedido />

            </div>
                
            
         </main>
    );
}