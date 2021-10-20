import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {

    const { serviceId } = useParams();

    return (
        <div>
            <p>THis si service {serviceId}</p>
        </div>
    );
};

export default ServiceDetails;