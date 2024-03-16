import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import '../../styles/ServicesPage.css';
import TrabajadoresGrid from '../components/TrabajadoresGrid';

const ServicesPage = () => {
  const [vendors, setVendors] = useState([]);
  const [filteredVendors, setFilteredVendors] = useState([]);
  // State for filters
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedDeliveryTime, setSelectedDeliveryTime] = useState('');
  const [isTopRated, setIsTopRated] = useState(false);

  // Filters:
  const serviceOptions = [
    { value: 'Machine Learning and AI Development', label: 'Machine Learning and AI Development' },
    { value: 'Database Management', label: 'Database Management' }
  ];
  const priceOptions = [
    { value: '$50 to $99', label: '$50 to $99' }
  ];
  const deliveryTimeOptions = [
    { value: 'ASAP (Within 24 Hours)', label: 'ASAP (Within 24 Hours)' }
  ];


  useEffect(() => {
    // Fetch vendors from the API
    const fetchData = async () => {
      try {
        const response = await axios(process.env.BACKEND_URL + "/api/vendors");
        setVendors(response.data);
        setFilteredVendors(response.data);
      } catch (error) {
        console.error('Error fetching vendors:', error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    // Filter vendors based on selected criteria
    const applyFilters = () => {
      let filtered = vendors.filter(vendor => {
        const servicesMatch = selectedServices.length ? selectedServices.some(service => vendor.services.includes(service.value)) : true;
        const priceMatch = selectedPrice ? vendor.price === selectedPrice.value : true;
        const deliveryTimeMatch = selectedDeliveryTime ? vendor.delivery_time === selectedDeliveryTime.value : true;
        const topRatedMatch = isTopRated ? vendor.top_rated : true;
        return servicesMatch && priceMatch && deliveryTimeMatch && topRatedMatch;
      });
      setFilteredVendors(filtered);
    };

    applyFilters();
  }, [selectedServices, selectedPrice, selectedDeliveryTime, isTopRated, vendors]);

  const handleAddToCart = (vendor) => {
    console.log('Add to cart:', vendor);
  };

  return (
    <div>
      <Select
        options={serviceOptions}
        onChange={setSelectedServices}
        isMulti
        placeholder="Filter by Services"
      />
      <Select
        options={priceOptions}
        onChange={(option) => setSelectedPrice(option)}
        placeholder="Filter by Price"
      />
      <Select
        options={deliveryTimeOptions}
        onChange={(option) => setSelectedDeliveryTime(option)}
        placeholder="Filter by Delivery Time"
      />
      <div>
        <input
          type="checkbox"
          checked={isTopRated}
          onChange={(e) => setIsTopRated(e.target.checked)}
        /> Top Rated Only
      </div>
      <TrabajadoresGrid
        trabajadores={filteredVendors}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default ServicesPage;