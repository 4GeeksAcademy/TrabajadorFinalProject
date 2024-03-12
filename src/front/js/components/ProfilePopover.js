import React, { useState } from 'react';
import { OverlayTrigger, Popover, Button } from 'react-bootstrap'; // Import Bootstrap components

export const ProfilePopover = () => {
  const [showPopover, setShowPopover] = useState(false);

  const handlePopoverToggle = () => {
    setShowPopover(!showPopover);
  };

  const popoverContent = (
    <Popover id="custom-popover">
      <Popover.Title as="h3">Custom Popover</Popover.Title>
      <Popover.Content>
        This popover is themed via CSS variables.
        {/* Add your user profile content here */}
      </Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom" // Set the popover placement to "bottom"
      show={showPopover}
      onToggle={handlePopoverToggle}
      overlay={popoverContent}
    >
      <Button variant="secondary">Custom popover</Button>
    </OverlayTrigger>
  );
};



export default ProfilePopover;