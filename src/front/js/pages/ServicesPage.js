import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import JumbotronTemplate from '../components/JumbotronTemplate';
import '../../styles/ServicesPage.css';

const jumboServices = [
    '../../img/Services_Page1.png',
    '../../img/Services_Page2.png',
    '../../img/Services_Page3.png'
];

//  Jumbotron Component
const jumboTitle = "Check Out Our Services";
const jumboSubtitle = "Custom Web Solutions for Your Business Needs";


const ServicesPageComponent = () => {
    const [vendors, setVendors] = useState([]);
    const [cart, setCart] = useState([]);
    const [filters, setFilters] = useState({
        service: '',
        top_rated: '',
        price: '',
        delivery_time: ''
    });

    useEffect(() => {
        axios.get('/api/vendors')
            .then(response => {
                setVendors(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the vendor data:', error);
            });
    }, []);

    const handleSearch = (event) => {
        event.preventDefault();
        console.log('Filters applied:', filters);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    return (
        <div className="container services-page-container">
            <JumbotronTemplate
                images={jumboServices}
                title={jumboTitle}
                subtitle={jumboSubtitle}
            />
            <form className="filter-form" onSubmit={handleSearch}>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label>Service</label>
                            <select className="form-control" name="service" value={filters.service} onChange={handleChange}>
                                <option value="">Select Service</option>
                                {/* Dynamically populate options based on available services */}
                            </select>
                        </div>
                    </div>
                    <div className="col">
                        {/* Implement other filters similar to the Service filter */}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
            <div className="row vendor-grid">
                {vendors.map(vendor => (
                    <div key={vendor.id} className="col-sm-12 col-md-6 col-lg-4">
                        <Card vendor={vendor} onAddToCart={() => {/* Handle add to cart logic */ }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesPageComponent;
