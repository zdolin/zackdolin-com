'use client';

import Heading from '@/components/atoms/Heading';
import { EASE_OUT_QUART } from '@/constants/easing';
import useGlitchText from '@/hooks/useGlitchText';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';

export interface HeadingWithBodyProps {
  heading: string;
  body: string;
  isVertical?: boolean;
  className?: string;
}

const HeadingWithBody = ({
  heading,
  body,
  isVertical = false,
  className = '',
}: HeadingWithBodyProps) => {
  const [animate, setAnimate] = useState<boolean>(false);
  const animatedHeading = useGlitchText(heading, {
    start: animate,
  });

  return (
    <div
      className={clsx(
        'relative mb-2 mt-5 flex flex-col md:mt-3 lg:my-4',
        !isVertical ? 'md:flex-row' : 'md:w-1/2',
        className
      )}
    >
      {/* "Ghost" heading - for height purposes */}
      <Heading
        aria-hidden="true"
        className={clsx(
          'w-full text-center opacity-0 md:text-left',
          !isVertical && 'md:w-3/5'
        )}
      >
        {heading}
      </Heading>

      {/* Visual heading */}
      <Heading
        className={clsx(
          'absolute w-full text-center md:text-left',
          !isVertical && 'md:w-3/5'
        )}
      >
        <motion.span
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          onViewportEnter={() => setAnimate(true)}
        >
          {animatedHeading}
        </motion.span>
      </Heading>
      <motion.p
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: isVertical ? 0.4 : 0.2,
          ease: EASE_OUT_QUART,
        }}
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        className={clsx(
          'text-secondary w-full text-center text-sm md:text-left lg:text-lg',
          isVertical ? 'mt-5' : 'mt-5 md:mt-0 md:w-3/5 md:pl-6'
        )}
      >
        {body}
      </motion.p>
    </div>
  );
};

export default HeadingWithBody;
