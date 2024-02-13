import React from 'react';
import Navbar from '../components/navbar';
import Jumbotron from '../components/Jumbotron';
import ServiceCard from '../components/ServiceCard';
import CompanyPartnersCarousel from '../components/CompanyPartnersCarousel';
import TrabajadoresGrid from '../components/TrabajadoresGrid';
import Footer from '../components/footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
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
      <Footer />
    </div>
  );
};

export default HomePage;

