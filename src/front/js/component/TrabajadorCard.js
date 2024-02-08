import React from 'react';
import '../../../styles/TrabajadorCard.css';

const TrabajadorCard = ({ image, name, description }) => {
    return (
        <div className="trabajador-card">
            <img src={image} alt={name} className="trabajador-image" />
            <div className="trabajador-info">
                <h3 className="trabajador-name">{name}</h3>
                <p className="trabajador-description">{description}</p>
            </div>
        </div>
    );
};

export default TrabajadorCard;