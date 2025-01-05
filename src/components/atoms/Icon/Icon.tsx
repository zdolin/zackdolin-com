import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

import CheckmarkIcon from '@/assets/icons/checkmark.svg';
import ContactIcon from '@/assets/icons/contact.svg';
import HomeIcon from '@/assets/icons/home.svg';
import PortfolioIcon from '@/assets/icons/portfolio.svg';
import ResumeIcon from '@/assets/icons/resume.svg';
import SkillsIcon from '@/assets/icons/skills.svg';
import TestimonialsIcon from '@/assets/icons/testimonial.svg';

export const iconMap = {
  arrowRight: ArrowRightCircleIcon,
  checkmark: CheckmarkIcon,
  contact: ContactIcon,
  home: HomeIcon,
  resume: ResumeIcon,
  skills: SkillsIcon,
  portfolio: PortfolioIcon,
  testimonials: TestimonialsIcon,
};

interface IconProps {
  type: keyof typeof iconMap;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ type, className = 'w-6 h-6' }) => {
  const IconComponent = iconMap[type];

  if (!IconComponent) {
    console.warn(`Icon type "${type}" not found.`);
    return null;
  }

  return <IconComponent className={className} />;
};

export default Icon;
