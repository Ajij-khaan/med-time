import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
                <Container className="font-body fw-bold">
                    <Navbar.Brand as={Link} to="/home" className="fw-bold">Med Time</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#featured-services">Service</Nav.Link>
                            <Nav.Link as={HashLink} to="/about">About US</Nav.Link>
                            {!user?.displayName &&

                                <Nav.Link as={Link} to="/signIn" className="btn btn-primary rounded-pill px-4">SignIn</Nav.Link>
                            }

                            {!user?.displayName &&
                                <Nav.Link as={Link} to="/signUp">Signup</Nav.Link>
                            }
                            {user?.displayName &&
                                <div className="text-white d-flex align-items-center">Howday! {user.displayName} </div>
                            }
                            {user?.displayName &&
                                <button onClick={logOut} className="text-white btn btn-primary rounded-pill ms-2 fw-bold">Sign Out </button>
                            }

                        </Nav>
                    </Navbar.Collapse>>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;