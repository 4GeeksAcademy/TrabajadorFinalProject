import React from 'react';

const ServiceDescription = ({ description }) => {
  return (
    <DescriptionContainer>
      <DescriptionText>{description}</DescriptionText>
    </DescriptionContainer>
  );
};

export default ServiceDescription;