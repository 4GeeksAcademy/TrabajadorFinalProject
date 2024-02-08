import React from 'react';

// Assuming props would be passed for title and description
const ServiceHeader = ({ title, description }) => {
  return (
    <HeaderContainer>
      <ServiceTitle>{title}</ServiceTitle>
      <p>{description}</p>
    </HeaderContainer>
  );
};

export default ServiceHeader;