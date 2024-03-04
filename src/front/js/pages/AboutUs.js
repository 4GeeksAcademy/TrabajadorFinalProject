import React from 'react';
import '../../styles/AboutUs.css';
import { Container, Form, Button, Accordion } from 'react-bootstrap';
import OurStory from '../../img/OurStory.png';
import OurTeam from '../../img/OurTeam.png';
import OurApproach from '../../img/OurApproach.png';
import CustomerT from '../../img/CustomerT.png';
import Rewards from '../../img/Rewards.png';
import CallToAction from '../../img/CallToAction.png';


const AboutUs = () => {
    return (
        <div className="about-us-section">
            <div className="py-4 Jumbotron">
                <div className="about-us-content">
                    <h1>About Us</h1>
                    <h2>Empower Your Vision: Let Trabajadores Craft Your Future!</h2>
                    <button className="btn about-us-btn">Learn more about Trabajadores</button>
                </div>
            </div>
            <Container className='AboutUsInfo'>
                <div className='AboutUsPath'>
                    <p> Our Story: <br/>
                        - Discover how we started <br/>
                        and where we're headed.
                    </p>
                    <img src={OurStory} alt='Our Story' className='AboutUsImg'/>
                </div>
                <div className='AboutUsPathFlipped'>
                    <img src={OurTeam} alt='Our Story' className='AboutUsImgTeam'/>
                    <p> Our Team: <br/>
                        - Meet the people behind <br/>
                        our company.
                    </p>
                </div>
                <div className='AboutUsPath'>
                    <p>  Our Approach: <br/>
                        Learn about our  <br/>
                        philosophy and how we work.
                    </p>
                    <img src={OurApproach} alt='Our Story' className='AboutUsImgTeam'/>
                </div>
                <div className='AboutUsPathFlipped'>
                    <img src={CustomerT} alt='Our Story' className='AboutUsImg1'/>
                    <p>   Customer Testimonials:  <br/>
                        - Hear what our customers <br/>
                        have to say about us.
                    </p>
                </div>
                <div className='AboutUsPath'>
                    <p>   Awards and Recognition:  <br/>
                        - Check out our  <br/>
                        achievements and accolades.
                    </p>
                    <img src={Rewards} alt='Our Story' className='AboutUsImg'/>
                </div>
                <div className='AboutUsPathFlipped'>
                    <img src={CallToAction} alt='Our Story' className='AboutUsImg'/>
                    <p>   Call to action:  <br/>
                        -Explore our services
                    </p>
                </div>
            </Container>
        </div>
        
    );
};

export default AboutUs;
