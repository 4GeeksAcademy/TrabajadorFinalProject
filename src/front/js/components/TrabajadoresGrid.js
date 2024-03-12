import React from 'react';
import { Card, Button } from 'react-bootstrap';

const TrabajadoresGrid = ({ trabajadores, onAddToCart }) => {
  // Generate random vendor names
  const vendorNames = [
    'TechSolutions Inc.',
    'CodeCrafters',
    'ByteBuilders',
    'WebMasters Ltd.',
    'DataDynamics',
    'DevGenius',
    'CodeNinjas',
    'PixelPerfection',
    'TechVoyagers',
    'InnovateIT',
  ];

  const handleAddToCart = (service) => {
    onAddToCart(service);
  };

  return (
    <div className="row">
      {trabajadores.map((trabajador) => (
        <div key={trabajador.id} className="col-lg-4 col-md-6 mb-4">
          <Card>
            <Card.Body>
              <Card.Title>{vendorNames[Math.floor(Math.random() * vendorNames.length)]}</Card.Title>
              <Card.Text>{trabajador.description}</Card.Text>
              <Card.Text>Type: {trabajador.type}</Card.Text>
              <Card.Text>Price: ${Math.floor(Math.random() * 500)}</Card.Text>
              <Button variant="primary" onClick={() => handleAddToCart(trabajador)}>Add to Cart</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default TrabajadoresGrid;
