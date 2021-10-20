import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DoctorBanner = () => {
    return (
        <div>
            <>
                <Row className="bg-light font-body">
                    <Col className=" d-flex align-items-center justify-content-center text-start">
                        <div>
                            <p className="fs-1 text-start fw-bold text-uppercase">Our Specialist <br />Are Ready to Help!</p>
                            <Link to='/ourDoctors'> <button className="transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 btn btn-primary rounded-pill">Check Specialist</button ></Link>
                        </div>
                    </Col>
                    <Col>
                        <img src="https://i.ibb.co/PtmG5bH/Portrait-of-successful-mid-adult-doctor-with-crossed-arms-Caucasian-general-practitioner-wearing-lab.jpg" alt="" srcset="" />
                    </Col>
                </Row>
            </>
        </div >
    );
};

export default DoctorBanner;