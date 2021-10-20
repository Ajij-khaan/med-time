import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="bg-dark text-white py-5">
            <Container>
                <Row className="align-items-center ">
                    <Col sm={12} md={6} lg={4} className="d-flex justify-content-center">
                        <div className="text-start">
                            <span className="fs-1 fw-bold text-primary">MEDTIME</span> <br />
                            <span className="fs-5">09617885598</span> <br />
                            <span className="fs-5">Email: support@medtime.com.bd</span> <br />
                        </div>
                    </Col>

                    <Col sm={12} md={6} lg={4} className="d-flex justify-content-center">
                        <div className="text-white fs-5 text-start ">
                            <Link to="/about" className="d-block text-decoration-none text-white ">About US</Link>
                            <Link to="/construction" className="d-block text-decoration-none text-white">How It Works</Link>
                            <Link to="/home#featured-services" className="d-block text-decoration-none text-white">Featurd Service</Link>
                            <Link to="/construction" className="d-block text-decoration-none text-white">FAq</Link>

                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4} className="d-flex justify-content-center">
                        <div className="text-white fs-5 text-start ">
                            <Link to="/construction" className="d-block text-decoration-none text-white ">For Doctors</Link>
                            <Link to="/construction" className="d-block text-decoration-none text-white ">Privacy Policy</Link>

                        </div>
                    </Col>
                </Row>
            </Container >
        </div >
    );
};

export default Footer;