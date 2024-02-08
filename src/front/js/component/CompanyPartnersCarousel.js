import React from 'react';
import { Carousel } from 'react-bootstrap';

const CompanyPartnersCarousel = () => {
    const logos = new Array(10).fill(null);

    return (
        <Carousel interval={3000}>
            {logos.map((logo, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={logo || "path/to/placeholder-logo.png"}
                        alt={`Company Logo ${index + 1}`}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CompanyPartnersCarousel;
