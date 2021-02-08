import React from 'react';

const HomeSSR = () => {
    return (
        <React.Fragment>
            {/* Inicio SSR */}
            <main>
                <h2 className="display-2">Seja bem vindo(a)</h2>
                <p className="display-4 mt-5 mb-5">Aqui em nossa loja, programadores têm desconto nos produtos para sua casa!</p>
            </main>
            {/* Fim SSR */}
        </React.Fragment>
    );
}

export default HomeSSR;