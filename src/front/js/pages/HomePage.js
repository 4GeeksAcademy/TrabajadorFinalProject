import React from 'react';
import Jumbotron from '../components/Jumbotron.js';
import AboutUsSection from '../components/AboutUsSection.js';
import Carousel from '../components/Carousel.js'
import ServicesOffered from '../components/ServicesOffered.js'
import CompanyPartnersCarousel from '../components/CompanyPartnersCarousel.js';


const HomePage = () => {
  return (
    <div>
      <Jumbotron />
      <section className="meet-trabajadores">
        <h2 className='d-flex justify-content-center'>About Us</h2>
        <AboutUsSection />
      </section>
      <section className="meet-trabajadores">
        <h2 className='d-flex justify-content-center'>Meet Our Featured Trabajadores!</h2>
        <Carousel />
      </section>
      <section className="service-icons">
        <ServicesOffered />
      </section>
      <section className="company-partners">
        <h2 className='d-flex justify-content-center'>Company Partners</h2>
        <CompanyPartnersCarousel />
      </section>
    </div>
  );
};

export default HomePage;