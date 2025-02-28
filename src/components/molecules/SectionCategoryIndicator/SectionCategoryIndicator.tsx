'use client';

import CircleIcon from '@/components/atoms/CircleIcon';
import { iconMap } from '@/components/atoms/Icon';
import Label from '@/components/atoms/Label';
import { EASE_OUT_QUINT } from '@/constants/easing';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export interface SectionCategoryIndicatorProps {
  iconType: keyof typeof iconMap;
  category: string;
  className?: string;
}

const SectionCategoryIndicator = ({
  iconType,
  category,
  className = '',
}: SectionCategoryIndicatorProps) => (
  <div className={clsx('flex flex-row items-center', className)}>
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'backOut' }}
      viewport={{ once: true, margin: '0px 0px -18% 0px' }}
    >
      <CircleIcon type={iconType} />
    </motion.div>
    <div className="relative flex overflow-x-hidden">
      {/* "Ghost" heading */}
      <Label aria-hidden="true" className="ml-3 opacity-0">
        {category}
      </Label>
      {/* Visual heading */}
      <Label className="absolute ml-3">
        <motion.span
          className="inline-block tracking-wide"
          initial={{ opacity: 0, transform: 'translateX(-100%)' }}
          whileInView={{ opacity: 1, transform: 'translateX(0px)' }}
          transition={{
            duration: 0.5,
            ease: EASE_OUT_QUINT,
            delay: 0.2,
          }}
          viewport={{ once: true, margin: '0px 0px -18% 0px' }}
        >
          {category}
        </motion.span>
      </Label>
    </div>
    <motion.hr
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{
        duration: 0.4,
        ease: EASE_OUT_QUINT,
        delay: 0.45,
      }}
      viewport={{ once: true, margin: '0px 0px -18% 0px' }}
      className="ml-3 w-12 border border-sky-600"
    />
  </div>
);

export default SectionCategoryIndicator;
