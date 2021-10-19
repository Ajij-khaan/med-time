import React from 'react';
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Services from '../Services/Services';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;