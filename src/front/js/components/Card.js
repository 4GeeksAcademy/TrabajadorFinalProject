import React, { useState, useContext } from 'react';   //card.js page
import { Button, Modal } from 'react-bootstrap';
import '../../styles/Card.css';
import { useCart } from '../components/CartContext'; // Import the useCart hook from CartContext

const Card = ({ vendor }) => {
    const [showModal, setShowModal] = useState(false);
    const { addToCart } = useCart(); // Access addToCart function from CartContext

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const renderStars = () => {
        if (vendor.top_rated) {
            return Array(5).fill(<i className="fa-solid fa-star"></i>);
        }
        return null;
    };

    const handleAddToCart = () => {
        addToCart(vendor); // Call addToCart function from CartContext
        console.log(`Added ${vendor.name} to cart`);
    };

    return (
        <div className="card">
            {vendor.top_rated && (
                <div className="top-rated-banner">Top Rated <div className="card-rating">{renderStars()}</div></div>
            )}
            <img src={`/public/vendors/${vendor.image}`} alt={vendor.name} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{vendor.name}</h5>
                <p className="card-text text-start">{vendor.short_description}</p>
            </div>
            <div className='container-fluid justify-content-start card-footer'>
                <div className='row'>
                    <div className='col'>
                        <Button className="button-62 button-62-primary" onClick={handleAddToCart}>Add to Cart</Button>
                    </div>
                    <div className='col'>
                        <Button className="button-62 button-62-secondary" onClick={handleShow}>View Details</Button>
                    </div>
                </div>
            </div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{vendor.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{vendor.long_description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn button-62 button-62-third" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Card;
