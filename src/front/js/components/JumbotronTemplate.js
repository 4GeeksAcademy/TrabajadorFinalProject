import React, { useState, useEffect } from 'react';
import '../../styles/Jumbotron.css';

const JumbotronTemplate = ({ images, title, subtitle }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!Array.isArray(images) || images.length === 0) {
      console.error('Images prop must be an array and cannot be empty.');
      return;
    }

    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="jumbotron jumbotron-fluid ">
      <div className="carousel-triangle-wrapper"></div>
      <div className="container-fluid p-5">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
      <div className="carousel-triangle">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carousel ${index}`}
            className={currentImage === index ? 'active' : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default JumbotronTemplate;