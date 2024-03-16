import React from 'react';
import Card from '../components/Card';
import '../../styles/TrabajadoresGrid.css';

const TrabajadoresGrid = ({ trabajadores, onAddToCart }) => {

  return (
    <div className="trabajadores-grid">
      {trabajadores.map(trabajador => (
        <Card
          key={trabajador.id}
          trabajador={trabajador}
          onAddToCart={() => onAddToCart(trabajador)}
        />
      ))}
    </div>
  );
};

export default TrabajadoresGrid;