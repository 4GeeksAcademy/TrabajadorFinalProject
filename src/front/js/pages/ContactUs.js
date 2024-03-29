// src/front/js/pages/ContactUs.js

import React, { useState, useRef } from 'react';
import { Container, Form, Button, Accordion } from 'react-bootstrap'; // Import Container instead of Jumbotron
import '../../styles/ContactUs.css';
import { faEnvelope, faUserCircle, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FAQSection from '../components/FAQsection.js';

function ContactUs() {
  const faqSectionRef = useRef(null);

  const scrollToFAQ = () => {
    window.scrollTo({
      top: faqSectionRef.current.offsetTop,
      behavior: 'smooth'
    });
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData); // You can handle form submission here, for now, just log the form data.
  };

  

  const placeholderImageUrl = "https://via.placeholder.com/300x400";
  return (
    <div>
        <div className="py-4 Jumbotron">
          <h1>Get in touch</h1>
          <p>We value your feedback. Let us know how we're doing.</p>
        </div>
        
      <Container>
            <div className='blueBar'></div>
            <div className='Form'>
                <div className='Icons'>
                    <FontAwesomeIcon icon={faUserCircle} className="Profile" size='2x' />
                    <FontAwesomeIcon icon={faEnvelope} className="Email" size='2x'/>
                </div>
               <div className='fullForm'>
                    <h1>Contact Us</h1>
                    <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        
                        <Form.Control
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label></Form.Label>
                        <Form.Control
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        />
                    </Form.Group>
                    <Form.Group controlId="formMessage">
                        <Form.Label></Form.Label>
                        <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='btn-lg submit' >
                        Submit
                    </Button>
                    </Form>
                </div>
                <div className='Photo'>
                    <img className="card-img-top " src={placeholderImageUrl} alt="Placeholder" />
                </div>
            </div>
      </Container>
      <Button variant="secondary" onClick={scrollToFAQ} className="faqbutton">
        Go to FAQ <FontAwesomeIcon icon={faArrowDown} />
      </Button>

      {/* Add this ref to the FAQ section */}
      <div ref={faqSectionRef} className="mt-5">
        <h2 className='faq'>Frequently Asked Questions:</h2>
        
      </div>
      <FAQSection/>
    </div>
    
  );
}

export default ContactUs;
