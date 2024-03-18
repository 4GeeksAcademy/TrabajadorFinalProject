import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../../styles/Card.css';

const Card = ({ vendor }) => {
    const [showModal, setShowModal] = useState(false);
    const [cart, setCart] = useState([]);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleAddToCart = (selectedVendor) => {
        // Check if the vendor is already in the cart
        const existingVendor = cart.find(v => v.id === selectedVendor.id);
        if (existingVendor) {
            // Increase the quantity if already present
            const updatedCart = cart.map(v => {
                if (v.id === selectedVendor.id) {
                    return { ...v, quantity: v.quantity + 1 };
                }
                return v;
            });
            setCart(updatedCart);
            console.log(`Increased quantity for ${selectedVendor.name}`);
        } else {
            // Add new vendor with quantity of 1 if not present
            setCart([...cart, { ...selectedVendor, quantity: 1 }]);
            console.log(`Added ${selectedVendor.name} to cart`);
        }
    };

    const renderStars = () => {
        if (vendor.top_rated) {
            return Array(5).fill(<i className="fa-solid fa-star"></i>);
        }
        return null;
    };

    return (
        <div className="card">
            {vendor.top_rated && <div className="top-rated-banner">Top Rated</div>}
            <img src={`path/to/images/${vendor.image}`} alt={vendor.name} />
            <div className="card-body">
                <h5 className="card-title">{vendor.name}</h5>
                <p className="card-text">{vendor.short_description}</p>
                <div className="card-rating">{renderStars()}</div>
                <Button className="button-62 button-62-secondary" onClick={() => handleAddToCart(vendor)}>Add to Cart</Button>
                <Button className="button-62 button-62-third" onClick={handleShow}>View Details</Button>
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
