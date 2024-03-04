import React from 'react';

const ServiceHeader = ({ title, description }) => {
  return (
    <HeaderContainer>
      <ServiceTitle>{title}</ServiceTitle>
      <p>{description}</p>
    </HeaderContainer>
  );
};

export default ServiceHeader;