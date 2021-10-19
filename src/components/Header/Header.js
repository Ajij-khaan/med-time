import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className="font-body ">
                    <Navbar.Brand href="#home" className="fw-bold">Med Time</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/home#service">Service</Nav.Link>
                        <Nav.Link as={Link} to="/about">About US</Nav.Link>
                        <Nav.Link as={Link} to="/signIn" className="btn btn-primary rounded-pill px-3">SignIn</Nav.Link>
                        <Nav.Link as={Link} to="/signUp">Signup</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;