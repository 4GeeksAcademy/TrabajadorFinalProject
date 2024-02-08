import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import '../../styles/ServiceCard.css';

const ServiceCard = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://cd91ae11-bbc9-4ce3-9d9e-ea3cf070f7fb.mock.pstmn.io/Trabajador')
      .then(response => response.json())
      .then(data => setServices(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <Carousel>
      {services.map(service => (
        <Carousel.Item key={service.id}>
          <img
            className="d-block w-100"
            src={service.imageUrl}
            alt={service.name}
          />
          <Carousel.Caption>
            <h3>{service.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ServiceCard;
