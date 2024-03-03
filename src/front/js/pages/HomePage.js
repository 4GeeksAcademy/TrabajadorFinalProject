import React from 'react';
import Jumbotron from '../components/Jumbotron.js';
import AboutUs from './AboutUs.js';
import Carousel from '../components/Carousel.js'
import ServicesOffered from '../components/ServicesOffered.js'
import CompanyPartnersCarousel from '../components/CompanyPartnersCarousel.js';


const HomePage = () => {
  return (
    <div>
      <Jumbotron />
      <AboutUs />
      <section className="meet-trabajadores">
        <h2>Meet Our Featured Trabajadores!</h2>
        <Carousel />
      </section>
      <section className="service-icons">
        <ServicesOffered />
      </section>
      <section className="company-partners">
        <h2>Company Partners</h2>
        <CompanyPartnersCarousel />
      </section>
    </div>
  );
};

export default HomePage;