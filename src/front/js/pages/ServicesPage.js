import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import JumbotronTemplate from '../components/JumbotronTemplate';
import '../../styles/ServicesPage.css';
import customImage1 from '../../img/Services_Page1.png';
import customImage2 from '../../img/Services_Page2.png';
import customImage3 from '../../img/Services_Page3.png';

const imagesArray = [
    customImage1,
    customImage2,
    customImage3
];

//  Jumbotron Component
const title = "Check Out Our Services";
const subtitle = "Custom Web Solutions for Your Business Needs";

const serviceOptions = [
    "Web & Mobile App Development",
    "Software Development",
    "Software Development",
    "Data Analysis and Visualization",
    "Machine Learning and AI Development",
    "Database Management",
    "API Development and Integration",
    "Cybersecurity Services",
    "Game Development",
    "Ethical Hacking Services",
    "Content Management System",
]

const ServicesPage = () => {
    const [vendors, setVendors] = useState([]);
    const [cart, setCart] = useState([]);
    const [filteredVendors, setFilteredVendors] = useState([]);
    const [filters, setFilters] = useState({
        service: '',
        top_rated: '',
        price: '',
        delivery_time: ''
    });


    useEffect(() => {
        // Fetch all vendors initially
        axios.get(process.env.BACKEND_URL + '/api/vendors')
            .then(response => {
                setVendors(response.data);
                setFilteredVendors(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the vendor data:', error);
            });
    }, []);


    useEffect(() => {
        // Apply filtering logic
        const applyFilters = () => {
            const filtered = vendors.filter(vendor => {
                // Filter by service
                const serviceMatch = filters.service ? vendor.service.includes(filters.service) : true;

                // Filter by top rated
                const topRatedMatch = filters.top_rated ? vendor.top_rated === filters.top_rated : true;

                // Filter by price
                const priceRange = parsePriceRange(filters.price);
                const priceMatch = priceRange ? (vendor.price >= priceRange.min && vendor.price <= priceRange.max) : true;

                // Filter by delivery time
                const deliveryTimeMatch = filters.delivery_time ? vendor.delivery_time === filters.delivery_time : true;

                return serviceMatch && topRatedMatch && priceMatch && deliveryTimeMatch;
            });

            setFilteredVendors(filtered);
        };

        applyFilters();
    }, [vendors, filters]);


    // Function to parse the price filter and return a price range.
    const parsePriceRange = (priceFilter) => {
        if (!priceFilter) return null;
        const [minPrice, maxPrice] = priceFilter.replace('$', '').split(' to ').map(Number);
        return { min: minPrice, max: maxPrice || Infinity };
    };

    const handleChange = (event) => {
        const { name, value, checked, type } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFilters(prevFilters => ({ ...prevFilters, [name]: newValue }));
    };

    const handleSearch = (event) => {
        event.preventDefault();
    };

    const handleAddToCart = (vendor) => {
        setCart(currentCart => {
            const isVendorInCart = currentCart.some(item => item.id === vendor.id);

            if (!isVendorInCart) {
                return [...currentCart, { ...vendor, quantity: 1 }];
            } else {
                return currentCart.map(item =>
                    item.id === vendor.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
        });
    };

    return (
        <div className="services-page-container">
            <JumbotronTemplate
                images={imagesArray}
                title={title}
                subtitle={subtitle}
            />
            <form className="filter-form container-fluid" onSubmit={handleSearch}>
                <div className="row">
                    {/* Service filter */}
                    <div className="col">
                        <div className="form-group">
                            <label>Service</label>
                            <select className="form-control" name="service" value={filters.service} onChange={handleChange}>
                                <option value="">Select Service</option>
                                {serviceOptions.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Price filter */}
                    <div className="col">
                        <div className="form-group">
                            <label>Price</label>
                            <select className="form-control" name="price" value={filters.price} onChange={handleChange}>
                                <option value="">Select Price Range</option>
                                <option value="$25 to $49">$25 to $49</option>
                                <option value="$50 to $99">$50 to $99</option>
                                <option value="$100+">$100+</option>
                            </select>
                        </div>
                    </div>

                    {/* Delivery time filter */}
                    <div className="col">
                        <div className="form-group">
                            <label>Delivery Time</label>
                            <select className="form-control" name="delivery_time" value={filters.delivery_time} onChange={handleChange}>
                                <option value="">Select Delivery Time</option>
                                <option value="24 Hours">24 Hours</option>
                                <option value="3 Days">3 Days</option>
                                <option value="1 Week">1 Week</option>
                            </select>
                        </div>
                    </div>

                    {/* Top rated filter */}
                    <div className="col">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="top_rated" id="topRatedCheck" checked={filters.top_rated} onChange={(e) => setFilters({ ...filters, top_rated: e.target.checked })} />
                            <label className="form-check-label" htmlFor="topRatedCheck">
                                Top Rated
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn button-62 button-62-primary">Search</button>
            </form>
            <div className="row vendor-grid">
                {vendors.map(vendor => (
                    <div key={vendor.id} className="col-sm-12 col-md-6 col-lg-4">
                        <Card
                            vendor={vendor}
                            onAddToCart={() => handleAddToCart(vendor)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;
