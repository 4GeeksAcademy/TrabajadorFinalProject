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
        // <div className="card">
        //     {vendor.top_rated && <div className="top-rated-banner">Top Rated <div className="card-rating">{renderStars()}</div>

        //     </div>}
        //     <img src={`/public/vendors/${vendor.image}`} alt={vendor.name} className="card-img-top" />
        //     <div className="card-body">
        //         <h5 className="card-title">{vendor.name}</h5>
        //         <p className="card-text text-start">{vendor.short_description}</p>
        //         <div className='container-fluid justify-content-start card-footer'>
        //             <div className='row'>
        //                 <div className='col'>
        //                     <Button className="button-62 button-62-secondary" onClick={() => handleAddToCart(vendor)}>Add to Cart</Button>
        //                 </div>
        //                 <div className='col'>
        //                     <Button className="button-62 button-62-third" onClick={handleShow}>View Details</Button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>


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
                        <Button className="button-62 button-62-primary" onClick={() => handleAddToCart(vendor)}>Add to Cart</Button>
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
        </div >
    );
};

export default Card;
