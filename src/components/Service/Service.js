import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, name, description, img } = props.service;
    return (
        <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-sm rounded">
            <Col>
                <Card className="border-1 border-primary">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 250)}
                        </Card.Text>
                        <Link to={`/serviceDetails/${id}`}> <button className="btn btn-primary ">More Details </button></Link>
                    </Card.Body>
                </Card>

            </Col >
        </div >
    );
};

export default Service;