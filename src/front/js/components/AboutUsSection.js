import React from 'react';
import '../../styles/AboutUsSection.css';
import AboutUsSectionImg from '../../img/WomanInTech.png';

const AboutUsSection = () => {
    return (
        <div className="about-us-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 text-section">
                        <h2>Empower Your Vision: Let Trabajadores Craft Your Future!</h2>
                        <p>At Trabajador.com, we're more than just a platform; we're a community-driven by the passion to bring local coding professionals and businesses together. Born out of the need to promote local talent in the ever-evolving digital landscape, we provide a unique space where coding service providers can showcase their skills to a local audience. Our dedication to fostering local connections not only helps businesses find the talent they need but also supports the growth of local economies. By choosing Trabajador.com, you're not just hiring a freelancer; you're investing in your community.</p>
                        <button className="btn button-62 button-62-primary">Learn more about Trabajadores</button>
                    </div>
                    <div className="col-md-6 image-section">
                        <img src={AboutUsSectionImg} alt="WomanInTech" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;