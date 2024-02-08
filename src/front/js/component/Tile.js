import React from 'react';
import 'styles/Tile.css';

const Tile = ({ title, image }) => {
  return (
    <div className="tile">
      <img src={image} alt={title} />
      <h5>{title}</h5>
    </div>
  );
};

export default Tile;