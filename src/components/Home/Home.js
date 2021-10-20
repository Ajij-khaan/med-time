import React from 'react';
import Banner from '../Banner/Banner'
import DoctorBanner from '../DoctorBanner/DoctorBanner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <DoctorBanner></DoctorBanner>
        </div>
    );
};

export default Home;