import React from 'react';
import { Container } from 'react-bootstrap';

const img = 'https://i.ibb.co/M7860t3/Senior-woman-holding-bottle-of-pills-during-video-conference-with-doctor-using-laptop-in-kitchen-Onl.jpg';

const AboutUs = () => {
    return (
        <div className="bg-light bg-light font-body">
            <h1 className="py-3 text-uppercase fw-bold">About Us</h1>
            <img src={img} alt="" className="h-50" />
            <Container className="text-start mt-5">

                <p>MedTime is an online medical service targeting emerging markets that are rapidly digitising. Our mission is to improve the health and wellbeing of the populations we serve. We have developed accessible and affordable telehealth services that aims to support the public health system, research and clinical trials.
                    <br /><br />
                    MedTime offers on-demand GP and specialist consultations with verified and certified doctors, online prescriptions, medicine delivery, pathology/ diagnostics tests, all while building valuable Electronic Health Records.
                    <br /><br />
                    MedTime is vertically integrated with pharmacies/ medicine delivery suppliers, labs/ diagnostics centres, and payment providers for an end-to-end digital health experience.
                    <br /><br />
                    MedTime systematically focuses on expanding access to affordable healthcare services to all. We promise to improve our solutions continuously through our scalable technology and data analytics capabilities. Our passionate team is committed to excellence and work extremely hard to ensure we make a positive contribution to the healthcare of the future.

                </p>

            </Container>
        </div>
    );
};

export default AboutUs;