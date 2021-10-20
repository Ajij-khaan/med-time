import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="bg-dark text-white">
            <Container>
                <Row className="align-items-center ">
                    <Col sm={12} md={6} lg={4} className="d-flex justify-content-center">
                        <div className="text-start">
                            <span className="fs-1">MEDTIME</span> <br />
                            <span className="fs-5">0174282477</span> <br />
                            <span className="fs-5">Email:</span> <br />
                        </div>
                    </Col>

                    <Col sm={12} md={6} lg={4} className="d-flex justify-content-center">
                        <div className="text-white fs-5 text-start ">
                            <Link to="#home" className="d-block text-decoration-none text-white ">About US</Link>
                            <Link to="#home" className="d-block text-decoration-none text-white">How It WOrks</Link>
                            <Link to="/home/featured-services" className="d-block text-decoration-none text-white">Featurd Service</Link>
                            <Link to="#home" className="d-block text-decoration-none text-white">FAq</Link>

                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4} className="d-flex justify-content-center">
                        <div className="text-white fs-5 text-start ">
                            <Link to="#home" className="d-block text-decoration-none text-white ">For Doctors</Link>
                            <Link to="#home" className="d-block text-decoration-none text-white ">Privacy Policy</Link>

                        </div>
                    </Col>






                </Row>

            </Container >
        </div >
    );
};

export default Footer;