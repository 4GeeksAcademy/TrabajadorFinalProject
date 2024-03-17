import React from 'react';
import '../../styles/AboutUsSection.css';
import AboutUsSectionImg from '../../img/WomanInTech.png';

const AboutUsSection = () => {
    return (
        <div className="about-us-section">
            <h2 className='text-center'>About Us</h2>
            <p className='text-center'>Empower Your Vision: Let Trabajadores Craft Your Future!</p>
            <div className='container-fluid about-us-section-container mt-3'>
                <div className="row text-start">
                    <div className="col-md-6 text-section p-5">
                        <p className='pt-5'>Trabajador uplifts communities by uniting local coding experts with businesses, championing the growth of regional talent. Our vibrant platform celebrates and elevates regional economies, creating opportunities for skills to shine and partnerships to flourish. Opting for Trabajador means you're not just hiring; you're positively empowering your community with every local engagement.</p>
                        <div className='ps-3'>
                            <button className="btn button-62 button-62-secondary">Click here to learn more</button>
                        </div>
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