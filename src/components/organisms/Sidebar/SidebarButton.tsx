'use client';

import Button from '@/components/atoms/Button';
import React from 'react';

const SidebarButton: React.FC = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Button className="w-full py-3" onClick={handleScrollToContact}>
      Send Message
    </Button>
  );
};

export default SidebarButton;
