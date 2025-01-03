import { HomeIcon } from '@heroicons/react/24/solid';
import React from 'react';

import Resume from '@/assets/icons/resume.svg';

export const iconMapper = {
  home: HomeIcon,
  resume: Resume,
};

interface IconProps {
  type: keyof typeof iconMapper;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ type, className = 'w-6 h-6' }) => {
  const IconComponent = iconMapper[type];

  if (!IconComponent) {
    console.warn(`Icon type "${type}" not found.`);
    return null;
  }

  return <IconComponent className={className} />;
};

export default Icon;
