import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const Footer = () => {
    return (
        <div className="bg-dark text-white">
            <Container>
                <Row className="align-items-center ">
                    <Col className="d-flex justify-content-center">
                        <div className="text-start">
                            <p className="fs-1">MEDTIME</p>
                            <p className="fs-5">0174282477</p>
                            <p className="fs-5">Email:</p>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <div className="text-white fs-5 text-start ">
                            <a href="#home" className="d-block text-decoration-none text-white ">About US</a>
                            <a href="#home" className="d-block text-decoration-none text-white">How It WOrks</a>
                            <a href="#home" className="d-block text-decoration-none text-white">Featurd Service</a>
                            <a href="#home" className="d-block text-decoration-none text-white">FAq</a>

                        </div>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <div className="text-decoration-none fs-5 text-start">
                            <a href="#home" className="d-block text-decoration-none text-white py-1">For Doctors</a>
                            <a href="#home" className="d-block text-decoration-none text-white  py-1">Terms and Condition</a>
                            <a href="#home" className="d-block text-decoration-none text-white  py-1">Privacy Policy</a>
                        </div>
                    </Col>

                </Row>

            </Container >
        </div >
    );
};

export default Footer;