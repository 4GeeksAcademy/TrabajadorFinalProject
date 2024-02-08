import React from 'react';
import '../../../styles/Jumbotron.css';

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid">

      <video autoplay loop muted>
        <source src="../../videos/TrabajadorJumbotronVideo_V1.mp4" type="video/mp4" />
      </video>

      <div className="container">
        <h1>Looking to hire the top coding freelancers?</h1>
        <h3>Our Trabajadores will:</h3>
        <ul>
          <li>Tackle any coding challenge</li>
          <li>Provide free quotes</li>
          <li>Save up to 50% on your first request</li>
        </ul>
        <button className="btn btn-primary">Hire a trabajador</button>
        <button className="btn btn-secondary">Check out their work</button>
      </div>
    </div>
  );
};

export default Jumbotron;
