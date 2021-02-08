import React from 'react';
import HomeSSR from '../../pages';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <React.Fragment>
            <Header />
                <HomeSSR />
            <Footer />
        </React.Fragment>
    );
}

export default Home;