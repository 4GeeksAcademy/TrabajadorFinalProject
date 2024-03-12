import React from 'react';
import axios from 'axios';
import Filter from '../components/Filter';
import SearchBar from '../components/SearchBar';
import TrabajadoresGrid from '../components/TrabajadoresGrid';
import { useCart } from '../components/CartContext.js';

const ServicesPage = () => {
  const [services, setServices] = React.useState([]);
  const [filteredServices, setFilteredServices] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [typeFilter, setTypeFilter] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');
  const { addToCart } = useCart();

  React.useEffect(() => {
    setLoading(true);
    axios.get('https://cd91ae11-bbc9-4ce3-9d9e-ea3cf070f7fb.mock.pstmn.io/Trabajador')
      .then(response => {
        const modifiedServices = response.data.map(service => ({
          ...service,
          name: `Service ${Math.floor(Math.random() * 100)}`,
          provider: `Provider ${Math.floor(Math.random() * 20)}`,
          price: Math.floor(Math.random() * 500), // Generate random price
          type: ['Web Development', 'Data Analysis', 'Machine Learning'][Math.floor(Math.random() * 3)], // Randomly assign a coding service type
        }));
        setServices(modifiedServices);
        setFilteredServices(modifiedServices);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  React.useEffect(() => {
    const filtered = services.filter(service => {
      return (service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!typeFilter || service.type === typeFilter);
    });
    setFilteredServices(filtered);
  }, [typeFilter, searchTerm, services]);

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  const handleAddToCart = (service) => {
    addToCart(service);
  };

  if (loading) return <div>Loading services...</div>;
  if (error) return <div>Error loading services.</div>;

  return (
    <div>
      <h1>Our Coding Services</h1>
      <SearchBar onSearch={handleSearch} />
      <Filter label="Type" options={[{ label: "Web Development", value: "Web Development" }, { label: "Data Analysis", value: "Data Analysis" }, { label: "Machine Learning", value: "Machine Learning" }]} onChange={(value) => setTypeFilter(value)} />
      <TrabajadoresGrid trabajadores={filteredServices} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default ServicesPage;
