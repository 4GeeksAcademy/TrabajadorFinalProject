import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import '../../styles/Carousel.css';

const Carousel = () => {
    const [trabajadores, setTrabajadores] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrabajadores = async () => {
            try {
                setLoading(true);
                const response = await fetch(process.env.BACKEND_URL + "/api/vendors");
                const data = await response.json();
                setTrabajadores(data);
            } catch (error) {
                console.error('Error fetching Trabajadores:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTrabajadores();
    }, []);

    const nextCards = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 5) % trabajadores.length);
    };

    const prevCards = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 5 + trabajadores.length) % trabajadores.length);
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
                    {trabajadores.slice(currentIndex, currentIndex + 5).map((trabajador, index) => (
                        <Card
                            key={trabajador.id}
                            title={trabajador.name}
                            description={trabajador.description}
                            gender={index % 2 === 0 ? 'male' : 'female'}
                        />
                    ))}
                </div>
                <button onClick={nextCards} className="carousel-control right"><i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    );
};

export default Carousel;