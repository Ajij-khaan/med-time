import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleDoctor from '../SingleDoctor/SingleDoctor'


const OurDoctors = () => {

    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('/fakeDoctor.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])

    console.log(doctors);

    return (
        <div className="font-body ">
            <h1 className="fs1 text-primary mt-3 py-2 fw-bold text-uppercase">Our Specialist</h1>
            <Container className="mb-5">
                <Row id="services" xs={1} md={2} lg={3} className="g-4 mt-5border-primary">
                    {
                        doctors.map(doctor => <SingleDoctor key={doctor.id} doctor={doctor}></SingleDoctor>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default OurDoctors;