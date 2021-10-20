import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { name, description, img } = props.service;
    return (
        <div>
            <Col>
                <Card className="border-1 border-primary">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 250)}
                        </Card.Text>
                        <button className="btn btn-primary">More Details</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;