import React from 'react';
import TrabajadorCard from '../TrabajadorCard/TrabajadorCard';
import '../../../styles/TrabajadoresGrid.css';

const TrabajadoresGrid = ({ trabajadores }) => {
  return (
    <div className="trabajadores-grid">
      {trabajadores.map(trabajador => (
        <TrabajadorCard
          key={trabajador.id}
          image={trabajador.image}
          name={trabajador.name}
          description={trabajador.description}
        />
      ))}
    </div>
  );
};

export default TrabajadoresGrid;
