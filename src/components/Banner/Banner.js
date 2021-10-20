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
                        <h3 className="text-warning fw-bold">Instant Video Consultaion From the Best Doctors</h3>
                        <p>Get the best user experience on MedTIme website. Search for a doctor and get an instant consultation</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-warning fw-bold">The Simple and Secure Telemedine Solution</h3>
                        <p>Access hundreds of certified and trusted doctors
                            and specialists at anytime from anywhere</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-warning fw-bold">Get Consultation from Home During Covid19</h3>
                        <p>Improve your and loved ones' health and wellbeing, without having to queue or travel
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-warning fw-bold">Instatt Presctiption Available</h3>
                        <p>Access your past consultations and prescriptions at any time, and even get your medicine delivered

                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div >
    );
};

export default Banner;