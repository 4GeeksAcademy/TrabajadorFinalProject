import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../../styles/Card.css';

const Card = ({ trabajador, onAddToCart }) => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const avatarUrl = trabajador.gender === 'male'
        ? 'path_to_male_avatar_image' // Replace with actual path
        : 'path_to_female_avatar_image'; // Replace with actual path

    return (
        <div className={`card ${trabajador.top_rated ? 'top-rated-card' : ''}`}>
            {trabajador.top_rated && <div className="top-rated-banner">Top Rated</div>}
            <img src={avatarUrl} alt={`${trabajador.name}'s avatar`} />
            <div className="card-body">
                <h5 className="card-title">{trabajador.name}</h5>
                <p className="card-text">{trabajador.description}</p>
                <Rating rating={trabajador.rating} />
                <div className="card-price">{trabajador.price}</div>
                <Button className="button-62 button-62-secondary" onClick={() => onAddToCart(trabajador)}>
                    Add to Cart
                </Button>
                <Button className="button-62 button-62-third" onClick={handleShow}>
                    View Details
                </Button>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{trabajador.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{trabajador.description}</Modal.Body>
                <Modal.Footer>
                    <Button className="btn button-62 button-62-third" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Card;
