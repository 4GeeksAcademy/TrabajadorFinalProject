import React from 'react';
import UHServices from '../../img/UHServices.png'; // adjust the path as necessary
import EthicalHacking from '../../img/EthicalHacking.png';
import GameDev from '../../img/GameDev.png';
import CyberSer from '../../img/CyberSer.png';
import APIDev from '../../img/APIDev.png';
import DatabaseM from '../../img/DatabaseM.png';
import MLADev from '../../img/MLADev.png';
import DAVisualization from '../../img/DAVisualization.png';
import SoftwareDev from '../../img/SoftwareDev.png';
import WebAppDev from '../../img/WebAppDev.png';
import '../../styles/ServicesOffered.css'

const serviceData = [
    { icon: WebAppDev, label: 'Web & Mobile App Development' },
    { icon: SoftwareDev, label: 'Software Development' },
    { icon: APIDev, label: 'API Development and Integration' },
    { icon: CyberSer, label: 'Cybersecurity Services' },
    { icon: GameDev, label: 'Game Development' },
    { icon: EthicalHacking, label: 'Ethical Hacking Services' },
    { icon: MLADev, label: 'Machine Learning and AI Development' },
    { icon: DAVisualization, label: 'Data Analysis and Visualization' },
    { icon: DatabaseM, label: 'Database Management' },
    { icon: UHServices, label: 'Unethical Hacking Services' },
];

const ServiceItem = ({ icon, label }) => (
    <div className="service">
        <img src={icon} alt={label} />
        <h3>{label}</h3>
    </div>
);

const ServicesOffered = () => {
    return (
        <div className="services-offered my-5">
            <h2 className='text-center'>Services Offered</h2>
            <p className='text-center'>Custom Web Solutions for Your Business Needs</p>
            <div class="container text-center">
                <div className="services-grid row">
                    {serviceData.map((service, index) => (
                        <ServiceItem key={index} icon={service.icon} label={service.label} />
                    ))}
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button className="services-button">Browse Our Services</button>
            </div>
        </div>
    );
};

export default ServicesOffered;