import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className="font-body ">
                    <Navbar.Brand href="#home" className="fw-bold">Med Time</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/home#service">Service</Nav.Link>
                        <Nav.Link as={Link} to="/about">About US</Nav.Link>
                        {!user?.displayName &&

                            <Nav.Link as={Link} to="/signIn" className="btn btn-primary rounded-pill px-3">SignIn</Nav.Link>
                        }

                        {!user?.displayName &&
                            <Nav.Link as={Link} to="/signUp">Signup</Nav.Link>
                        }
                        {user?.displayName &&
                            <div className="text-white d-flex align-items-center">Howday! {user.displayName} </div>
                        }
                        {user?.displayName &&
                            <button onClick={logOut} className="text-white btn btn-primary rounded-pill ms-2">Sign Out </button>
                        }

                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;