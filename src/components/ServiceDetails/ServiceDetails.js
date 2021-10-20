import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetails = () => {

    const { serviceId } = useParams();

    const [services, setServices] = useState([]);
    const [showService, setShowService] = useState([]);

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    useEffect(() => {
        setShowService(services.find(service => (service.id === parseInt(serviceId))));
    }, [services])

    // console.log(showService);

    return (
        <div className="font-body bg-light">
            <h1 className="text-center fw-bold mt-3">Service Details</h1>
            <Container>
                <div className="mt-3 d-flex justify-content-center">

                    <img src={showService?.img} alt="" />
                </div>
                <h3 className="mt-3">{showService?.name}</h3>
                <p className="mt-3">{showService?.description}</p>
            </Container>
        </div>
    );
};

export default ServiceDetails;