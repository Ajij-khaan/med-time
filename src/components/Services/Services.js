import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    // console.log(Services)

    return (
        <div className="bg-light" >
            <h1 id="featured-services" className="font-body fw-bold mb-4 pt-5 fs-1">FEATURED SERVICES</h1>
            <Container className="mb-5">
                <Row id="services" xs={1} md={2} lg={3} className="g-4 mt-5border-primary">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;