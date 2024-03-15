import React, { useState, useEffect } from 'react';
import '../../styles/Jumbotron.css';
import image1 from '../../img/carousel/API Development.png'
import image2 from '../../img/carousel/Cybersecurity.png'
import image3 from '../../img/carousel/Data Analysis.png'
import image4 from '../../img/carousel/Database Management.png'
import image5 from '../../img/carousel/Ethical.png'
import image6 from '../../img/carousel/Game Development.png'
import image7 from '../../img/carousel/Machine Learning.png'
import image8 from '../../img/carousel/Software Development.png'
import image9 from '../../img/carousel/Unethical.png'
import image10 from '../../img/carousel/Web Development.png'
// import jumbotronVideo from "../../videos/Trabajador Jumbotron Video.mp4";


const Jumbotron = () => {
  const carouselImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % carouselImages.length);
    }, 4500); // Changes images every 4.5 seconds
    return () => clearInterval(timer);
  }, []);


  return (
    <div className="jumbotron jumbotron-fluid ">
      <div className="carousel-triangle-wrapper"></div >
      <div className="container-fluid p-5">
        <h1>Looking to hire top coding freelancers?</h1>
        <h3>Hire a Trabajadores to:</h3>
        <ul>
          <li>Tackle any coding challenge</li>
          <li>Provide free quotes</li>
          <li>Save up to 50% on your first request</li>
        </ul>
        <div>
          <button className="btn button-62 button-62-secondary">Hire a trabajador</button>
          <button className="btn button-62 button-62-secondary">Check out their work</button>
        </div>
      </div>
      <div className="carousel-triangle">
        {carouselImages.map((image, index) => (
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

export default Jumbotron;