'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image, { ImageProps } from 'next/image';

export interface HeroAvatarProps {
  image: ImageProps;
  sizeClass?: string;
  className?: string;
  circleClass?: string;
  imageClass?: string;
  overlayClass?: string;
  isAnimationEnhanced?: boolean;
}

const HeroAvatar = ({
  image,
  sizeClass = 'h-[13.125rem] w-[13.125rem]',
  circleClass = 'bg-gray-200 dark:bg-gray-700',
  imageClass = '',
  className = '',
  overlayClass = '',
  isAnimationEnhanced = false,
}: HeroAvatarProps) => (
  <div className={clsx('relative', sizeClass, className)}>
    <motion.div
      className={clsx(
        'relative overflow-hidden rounded-full pt-3',
        circleClass,
        sizeClass
      )}
      initial={
        isAnimationEnhanced ? { scale: 0.5, outlineOffset: '-20px' } : {}
      }
      whileInView={{ scale: 1, outlineOffset: '0.75rem' }}
      transition={{
        duration: 0.5,
        type: 'spring',
        stiffness: 70,
      }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
    >
      {/* Masked image */}
      <motion.div
        initial={isAnimationEnhanced ? { opacity: 0, y: '50%' } : {}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: 'backOut',
          delay: 0.5,
        }}
        viewport={{ once: true, margin: '-180px' }}
      >
        <Image
          className={clsx('h-auto w-full', imageClass)}
          src={image.src}
          alt={image.alt}
          width={image.width ?? 600}
          height={image.height ?? 750}
        />
      </motion.div>
    </motion.div>
    {/* Image overlay */}
    {isAnimationEnhanced && (
      <motion.div
        className={clsx(
          'absolute left-0 top-0 h-2/3 w-full overflow-hidden pt-3 lg:h-1/2',
          imageClass,
          overlayClass
        )}
        initial={{ opacity: 0, y: '90%' }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: 'backOut',
          delay: 0.5,
        }}
        viewport={{ once: true, margin: '-180px' }}
      >
        <Image
          className="left-0 top-0 h-auto w-full"
          src={image.src}
          alt={image.alt}
          width={image.width ?? 600}
          height={image.height ?? 750}
        />
      </motion.div>
    )}
  </div>
);

export default HeroAvatar;
