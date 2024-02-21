import React from 'react';
import Jumbotron from '../components/Jumbotron.js';
import AboutUs from '../components/AboutUs.js';
import ServiceCard from '../components/ServiceCard.js';
import CompanyPartnersCarousel from '../components/CompanyPartnersCarousel.js';
import TrabajadoresGrid from '../components/TrabajadoresGrid.js';

const HomePage = () => {
  return (
    <div>
      <Jumbotron />
      <AboutUs />
      <section className="service-cards">
        <h2>Services Offered</h2>
        <ServiceCard />
      </section>
      <section className="company-partners">
        <h2>Company Partners</h2>
        <CompanyPartnersCarousel />
      </section>
      <section className="meet-trabajadores">
        <h2>Meet Our Featured Trabajadores!</h2>
        <TrabajadoresGrid />
      </section>
    </div>
  );
};

export default HomePage;