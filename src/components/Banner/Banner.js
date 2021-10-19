import React from 'react';
import { Carousel } from 'react-bootstrap';

const img1 = 'https://i.ibb.co/1sFYPsr/Female-patient-in-a-video-conference-from-home-with-her-doctor.jpg';
const img2 = 'https://i.ibb.co/HCzXBkQ/Female-patient-in-a-video-conference-from-home-with-her-doctor.jpg';
const img3 = 'https://i.ibb.co/Ptdx2Mt/Female-patient-in-a-video-conference-from-home-with-her-doctor.jpg';
const img4 = 'https://i.ibb.co/KKDhQ4m/Female-patient-in-a-video-conference-from-home-with-her-doctor.jpg';







const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item >
                    <img
                        className="d-block w-100 h-75"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-dark">First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div >
    );
};

export default Banner;