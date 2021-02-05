import Pagamento from '../../imagens/pag.jpeg';

const Footer = () => {
    return(
        <footer className="text-center">
            <h4 className="text-warning lead">Formas de Pagamento</h4>
            <img className="img_cabeçalho" src={Pagamento} alt="Formas de Pagamento" />
            <p className="bg-secondary">&copy; Recodepro</p>
        </footer>
    );
}

export default Footer;