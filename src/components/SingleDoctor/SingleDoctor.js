import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleDoctor = (props) => {
    const { name, address, specialist, img } = props.doctor;
    return (
        <div>
            <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-sm">
                <Col>
                    <Card className="border-  p-3 bg-light">
                        <div className="d-flex">

                            <Card.Img variant="top" src={img} className="w-50 h-50" />
                            <Card.Body>
                                <Card.Title className="text-start fw-bold fs-6 text-primary">{name}</Card.Title>
                                <Card.Text className="text-start fw-bold">{specialist}</Card.Text>
                                <Card.Text className="text-start">{address}</Card.Text>
                            </Card.Body>
                        </div>
                    </Card>

                </Col >
            </div >
        </div>
    );
};

export default SingleDoctor;