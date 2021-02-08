import React from 'react';
import Footer from './FooterSSR';
import Header from './HeaderSSR';

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <main>
                <h2 className="display-2">Seja bem vindo(a)</h2>
                <p className="display-4 mt-5 mb-5">Aqui em nossa loja, programadores têm desconto nos produtos para sua casa!</p>
            </main>
            <Footer />
        </React.Fragment>
    );
}

export default Home;