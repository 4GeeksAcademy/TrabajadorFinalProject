import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentStatus = () => {
    const navigate = useNavigate(); // Import and initialize useNavigate hook

    // Define styles locally
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        margin: '50px auto', // Added margin to the top and bottom
    };

    const paymentStatusStyle = {
        fontSize: '32px', // Larger font size
        fontWeight: 'bold', // Bold font weight
        padding: '20px', // Increased padding for better spacing
        borderRadius: '10px',
        border: '2px solid #ccc',
        backgroundColor: '#f9f9f9',
        margin: '20px auto', // Centering horizontally
    };

    const additionalTextStyle = {
        fontSize: '20px', // Larger font size for additional text
        marginTop: '20px', // Add some margin to the top
    };

    const imageStyle = {
        width: '200px',
        borderRadius: '50%',
        marginTop: '30px',
    };

    const actionButtonStyle = {
        padding: '10px 20px',
        fontSize: '18px',
        fontWeight: 'bold',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        marginTop: '30px',
        cursor: 'pointer',
        textDecoration: 'none',
    };

    const handleButtonClick = () => {
        navigate('/services'); // Redirect to /services page
    };

    return (
        <div style={containerStyle}>
            <div style={paymentStatusStyle}>
                Payment status: Complete
            </div>
            <div style={additionalTextStyle}>
                The vendor will message you as soon as they are available to discuss further details about your order. Thank you for your purchase!
            </div>
            <button style={actionButtonStyle} onClick={handleButtonClick}>
                Continue Shopping
            </button>
        </div>
    );
};

export default PaymentStatus;
