import React, { useState, useEffect } from 'react';
import '../../styles/Jumbotron.css';

const JumbotronTemplate = ({ images, title, subtitle, listItems, buttons }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="jumbotron jumbotron-fluid ">
      <div className="carousel-triangle-wrapper"></div>
      <div className="container-fluid p-5">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div>
          {buttons.map((button, index) => (
            <button key={index} className={`btn ${button.className}`}>
              {button.text}
            </button>
          ))}
        </div>
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