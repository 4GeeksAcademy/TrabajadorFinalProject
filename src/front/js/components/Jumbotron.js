import React from 'react';
import '../../styles/Jumbotron.css';
// import jumbotronVideo from "../../videos/Trabajador Jumbotron Video.mp4";

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid ">

      {/* Musted the video since it's causing the site to crash. */}
      {/* <video autoPlay loop muted className="jumbotron-video">
        <source src={jumbotronVideo} type="video/mp4" />
      </video> */}

      <div className="container-fluid p-5">
        <h1>Looking to hire top coding freelancers?</h1>
        <h3>Hire a Trabajadores to:</h3>
        <ul>
          <li>Tackle any coding challenge</li>
          <li>Provide free quotes</li>
          <li>Save up to 50% on your first request</li>
        </ul>
        <button className="btn button-62 button-62-primary">Hire a trabajador</button>
        <button className="btn button-62 button-62-secondary">Check out their work</button>
      </div>
    </div>
  );
};

export default Jumbotron;
