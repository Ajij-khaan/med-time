import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className="font-body ">
                    <Navbar.Brand href="#home" className="fw-bold">Med Time</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Service</Nav.Link>
                        <Nav.Link href="#pricing">About US</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>
                        <Nav.Link href="#pricing" className="btn btn-primary rounded-pill px-3">SignIn</Nav.Link>
                        <Nav.Link href="#pricing">Signup</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;