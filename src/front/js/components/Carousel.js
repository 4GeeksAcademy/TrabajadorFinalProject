import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import '../../styles/Carousel.css';
import axios from 'axios';

const Carousel = () => {
    const [vendors, setVendors] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch all vendors initially
        axios.get(process.env.BACKEND_URL + '/api/vendors')
            .then(response => {
                setVendors(response.data);
                setLoading(false)
                // setFilteredVendors(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the vendor data:', error);
            });
    }, []);


    const nextCards = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 5) % vendors.length);
    };

    const prevCards = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 5 + vendors.length) % vendors.length);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="carousel d-flex justify-content-center">
            <h2 className='text-center'>Meet Our Featured Trabajadores!</h2>
            <p className='text-center'>These Trabajadores Have Received High Reviews</p>
            <div className='container-fluid d-flex justify-content-center'>
                <button onClick={prevCards} className="carousel-control left"><i className="fa-solid fa-arrow-left"></i></button>
                <div className="cards-container">
                    {vendors.slice(currentIndex, currentIndex + 5).map((vendor, index) => (
                        <Card
                            key={vendor.id}
                            vendor={vendor}
                        />
                    ))}
                </div>
                <button onClick={nextCards} className="carousel-control right"><i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    );
};

export default Carousel;