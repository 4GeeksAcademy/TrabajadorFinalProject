import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from '../../components/Filter/Filter';
import SearchBar from '../../components/SearchBar/SearchBar';
import TrabajadoresGrid from '../../components/TrabajadoresGrid/TrabajadoresGrid';


const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [typeFilter, setTypeFilter] = useState('');
  const [budgetFilter, setBudgetFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(null);
  const [deliveryTimeFilter, setDeliveryTimeFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);
    axios.get('https://cd91ae11-bbc9-4ce3-9d9e-ea3cf070f7fb.mock.pstmn.io/Trabajador')
      .then(response => {
        setServices(response.data);
        setFilteredServices(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = services.filter(service => {
      return (service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!typeFilter || service.type === typeFilter) &&
        (!budgetFilter || service.budget === budgetFilter) &&
        (!ratingFilter || service.rating === ratingFilter) &&
        (!deliveryTimeFilter || service.deliveryTime === deliveryTimeFilter);
    });
    setFilteredServices(filtered);
  }, [typeFilter, budgetFilter, ratingFilter, deliveryTimeFilter, searchTerm, services]);

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  if (loading) return <div>Loading services...</div>;
  if (error) return <div>Error loading services.</div>;

  return (
    <div>
      <h1>Our Services</h1>
      <SearchBar onSearch={handleSearch} />
      <Filter label="Type" options={[{ label: "Web Development", value: "Web Development" }, { label: "Data Analysis", value: "Data Analysis" }]} onChange={(value) => setTypeFilter(value)} />
      <Filter label="Budget" options={[{ label: "$20-$49", value: "$20-$49" }, { label: "$50-$99", value: "$50-$99" }]} onChange={(value) => setBudgetFilter(value)} />
      <TrabajadoresGrid trabajadores={filteredServices} />
    </div>
  );
};

export default ServicesPage;
