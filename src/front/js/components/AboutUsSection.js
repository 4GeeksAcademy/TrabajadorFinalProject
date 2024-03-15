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
                        <p>Trabajador uplifts communities by uniting local coding experts with businesses, championing the growth of regional talent. Our vibrant platform celebrates and elevates regional economies, creating opportunities for skills to shine and partnerships to flourish. Opting for Trabajador means you're not just hiring; you're positively empowering your community with every local engagement.</p>
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