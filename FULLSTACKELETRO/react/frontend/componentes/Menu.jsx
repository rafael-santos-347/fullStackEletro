const Menu = () => {
    return (
        <div className="container-fluid mb-5">
            <nav className="navbar row bg-danger">
                <div className="navbar-brand active col-sm-1"><a href="index.html"><div id="feletro"></div></a></div>            
                <a className="nav-link col-sm-1 px-0 py-0 text-white"  href="produtos.html">Produtos</a>
                <a className="nav-link col-sm-1 px-0 py-0 text-white"  href="loja.html">Lojas</a>
                <a className="nav-link col-sm-1 px-0 py-0 text-white"  href="contato.html">Contato</a>
                <a className="nav-link col-sm-1 px-0 py-0 text-white" href="pedidos.html">Pedidos</a>
            </nav>
        </div>
    );
}
