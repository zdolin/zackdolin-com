import {
  ArrowRightCircleIcon,
  ChatBubbleLeftEllipsisIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/solid';
import clsx from 'clsx';
import React from 'react';

import AddressIcon from '@/assets/icons/address.svg';
import CheckmarkIcon from '@/assets/icons/checkmark.svg';
import ContactIcon from '@/assets/icons/contact.svg';
import EmailIcon from '@/assets/icons/email.svg';
import PhoneIcon from '@/assets/icons/phone.svg';
import PortfolioIcon from '@/assets/icons/portfolio.svg';
import ResumeIcon from '@/assets/icons/resume.svg';
import SkillsIcon from '@/assets/icons/skills.svg';

export const iconMap = {
  address: AddressIcon,
  arrowRightCircleIcon: ArrowRightCircleIcon,
  chevronLeft: ChevronLeftIcon,
  chevronRight: ChevronRightIcon,
  checkmark: CheckmarkIcon,
  contact: ContactIcon,
  email: EmailIcon,
  home: HomeIcon,
  moon: MoonIcon,
  resume: ResumeIcon,
  phone: PhoneIcon,
  skills: SkillsIcon,
  sun: SunIcon,
  portfolio: PortfolioIcon,
  testimonials: ChatBubbleLeftEllipsisIcon,
};

interface IconProps {
  type: keyof typeof iconMap;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ type, className = '' }) => {
  const IconComponent = iconMap[type];

  if (!IconComponent) {
    console.warn(`Icon type "${type}" not found.`);
    return null;
  }

  return (
    <IconComponent
      className={clsx(
        'h-6 w-6 transition-colors duration-200 ease-out',
        className
      )}
    />
  );
};

export default Icon;
