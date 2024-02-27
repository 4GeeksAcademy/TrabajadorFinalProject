import React from 'react';
import '../../styles/Card.css';

const Card = ({ title, description, gender }) => {

  const imgGender = gender === 'female'
    ? 'https://xsgames.co/randomusers/avatar.php?g=female'
    : 'https://xsgames.co/randomusers/avatar.php?g=male';

  return (
    <div className="card">
      <img src={imgGender} className="card-img-top" alt="Trabajador" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary">Check out my services</button>
      </div>
    </div>
  );
};

export default Card;