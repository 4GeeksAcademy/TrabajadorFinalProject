
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../../styles/Card.css';

const Card = ({
  trabajador,
  onAddToCart
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const isHighRated = trabajador.highRated;

  const handleAddToCart = () => {
    onAddToCart(trabajador);
  };

  const imageSrc = trabajador.gender === 'female'
    ? 'https://xsgames.co/randomusers/avatar.php?g=female'
    : 'https://xsgames.co/randomusers/avatar.php?g=male';

  return (
    <>
      <div className={`card ${trabajador.isTopRated ? 'top-rated-card' : ''}`}>
        {trabajador.isTopRated && <div className="top-rated-banner">Top Rated</div>}
        <div className="card-rating">
          {isHighRated && Array.from({ length: 5 }, (_, index) => (
            <i key={index} className="fa-solid fa-star"></i>
          ))}
        </div>
        <img src={imageSrc} className="card-img-top" alt={trabajador.name} />
        <div className="card-body">
          <h5 className="card-title">{trabajador.name}</h5>
          <p className="card-text">{trabajador.description}</p>
          <Rating value={trabajador.rating} />
          <p className="price">From {trabajador.price}</p>
          <Button variant="btn button-62 button-62-secondary" onClick={handleAddToCart}>Add to Cart</Button>
          <Button variant="btn button-62 button-62-third" onClick={handleShow}>View Details</Button>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{trabajador.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {trabajador.description}
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn button-62 button-62-third' variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Card;