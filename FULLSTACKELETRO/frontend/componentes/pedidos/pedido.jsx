const Pedido = () => {

    const [pedidos, setPedidos] = React.useState([]);

    React.useEffect(async() => {
        const resposta = await fetch('http://localhost/projetos/react/backend/pedido.php');
        setPedidos(await resposta.json());
        
    }, []);
    return(
        <React.Fragment>
            <section className="card w-25 mx-auto">
                <div className="card-header">
                    <h5 className="card-title border-bottom mb-1">Ultima Venda</h5>
                    <span className="lead card-text">{pedidos.cliente}</span> 
                </div>
    
                <div className="card-body">
                    <span className="lead card-text">{pedidos.produto}</span> 
                </div>

                <div className="card-footer">
                    <span className="lead card-text">{pedidos.preço}</span> 
                </div>
            </section>
        </React.Fragment>
    );
}
