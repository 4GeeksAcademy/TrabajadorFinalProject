import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../../styles/TrabajadoresGrid.css'

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
            <Card.Body className="card-body-custom">
              <div className="card-top-section">
                <img src="/" alt="Cloud" className="card-image-top" />
              </div>
              <div className="card-main-content">
                <div className="vendor-info">
                  <img src="/path-to-profile-icon.png" alt="Profile" className="profile-icon" />
                  <Card.Title className="vendor-name">
                    {vendorNames[Math.floor(Math.random() * vendorNames.length)]}
                  </Card.Title>
                </div>
                <Card.Text className="trabajador-description">
                  {trabajador.description}
                </Card.Text>
                <Card.Text className="price-text">
                  From ${Math.floor(Math.random() * 500)}
                </Card.Text>
                <Button variant="primary" className="custom-button" onClick={() => handleAddToCart(trabajador)}>
                  Add to Cart
                </Button>
              </div>
            </Card.Body>

          </Card>
        </div>
      ))}
    </div>
  );
};

export default TrabajadoresGrid;
