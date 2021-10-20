import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';





const googleImg = 'https://i.ibb.co/p3C2Tq2/google.jpg';

const SignIn = () => {

    const { signInUsingGoogle, handleEmail, handlePassword, handleSubmit, fromSignIn } = useAuth();

    fromSignIn();



    return (
        <div>
            <div className="mb-5">
                <div className='d-flex justify-content-center align-items-center mt-5 font-body'>
                    <div className="text-start border-light rounded p-5 bg-light">
                        <span className="fw-bold fs-5">Sign In</span>
                        <p className="mt-2 fw-bold">Have we meet before! </p>
                        <br />
                        <div>
                        </div>
                        <div className="border border-gray rounded-pill px-5 py-1 mb-3 fw-bold d-flex justify-content-start">
                            <img src={googleImg} alt="" />
                            <Button onClick={signInUsingGoogle} className="ps-3 fw-bold">Sign In With Google</Button>
                        </div>

                        <br />
                        <small className="text-muted">or Sign in WIth Email </small>
                        <form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="fw-bold mt-4">Email address</Form.Label>
                                <Form.Control onBlur={handleEmail} className="rounded-pill" type="email" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="fw-bold ">Password</Form.Label>
                                <Form.Control onBlur={handlePassword} className="rounded-pill " type="password" />
                            </Form.Group>

                            <button className="btn btn-primary rounded-pill w-100 mb-3" variant="primary" type="submit">
                                Sign In
                            </button>
                        </form>
                        <p>Noy yet Registerd? <span className="fw-bold text-primary"><Link to="/signUp" className="text-decoration-none">SignUp Here</Link></span></p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignIn;