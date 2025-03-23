'use client';

import Button from '@/components/atoms/Button';

interface SidebarButtonProps {
  isMobile?: boolean;
}

const SidebarButton = ({ isMobile = false }: SidebarButtonProps) => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Button
      className="w-full py-3"
      onClick={handleScrollToContact}
      animationDelay={isMobile ? 0.6 : 0}
    >
      Send Message
    </Button>
  );
};

export default SidebarButton;
