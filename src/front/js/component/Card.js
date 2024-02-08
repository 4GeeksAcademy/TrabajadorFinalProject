import React from 'react';
import '../../styles/Card.css';

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <img src="https://placehold.co" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary">Check out my services</button>
      </div>
    </div>
  );
};

export default Card;