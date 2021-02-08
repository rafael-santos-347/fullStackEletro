import { Link } from "react-router-dom";

const HeaderSSR = () => {
    return (
        <div className="container-fluid mb-5">
            <nav className="navbar row bg-danger">
                <div className="navbar-brand active col-sm-1"><Link to="/">  <div id="feletro"></div></Link></div>            
                <Link className="nav-link col-sm-1 px-0 py-0 text-white"  to="/produtos">Produtos</Link>
                <Link className="nav-link col-sm-1 px-0 py-0 text-white"  to="/loja">Lojas</Link>
                <Link className="nav-link col-sm-1 px-0 py-0 text-white"  to="/contato">Contato</Link>
                <Link className="nav-link col-sm-1 px-0 py-0 text-white" to="/pedidos">Pedidos</Link>
            </nav>
        </div>
    );
}

export default HeaderSSR;
