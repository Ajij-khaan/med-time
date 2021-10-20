import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {

    const { serviceId } = useParams();

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    console.log(services);

    return (
        <div>
            <p>THis si service {serviceId}</p>
            {
                services.map(service => console.log(service))
            }
        </div>
    );
};

export default ServiceDetails;