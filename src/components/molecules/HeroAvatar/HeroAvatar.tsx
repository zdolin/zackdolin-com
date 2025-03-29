'use client';

import clsx from 'clsx';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image, { ImageProps } from 'next/image';

export interface HeroAvatarProps {
  image: ImageProps;
  sizeClass?: string;
  className?: string;
  circleClass?: string;
  imageClass?: string;
  overlayClass?: string;
  isMainAvatar?: boolean;
  isMobile?: boolean;
}

const HeroAvatar = ({
  image,
  sizeClass = 'h-[13.125rem] w-[13.125rem]',
  circleClass = 'bg-hero-secondary',
  imageClass = '',
  className = '',
  overlayClass = '',
  isMainAvatar = false,
  isMobile = false,
}: HeroAvatarProps) => {
  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [50, 135], [0, 35]);

  return (
    <div className={clsx('relative', sizeClass, className)}>
      <motion.div
        className={clsx(
          'relative overflow-hidden rounded-full pt-3',
          circleClass,
          sizeClass
        )}
        initial={
          isMainAvatar
            ? { scale: 0.5, outlineOffset: '-20px' }
            : isMobile
              ? { scale: 0.5, opacity: 0 }
              : {}
        }
        whileInView={
          isMobile
            ? { scale: 1, opacity: 1 }
            : { scale: 1, outlineOffset: '1rem' }
        }
        transition={{
          duration: 0.5,
          type: 'spring',
          stiffness: 77,
        }}
        viewport={{ once: true, margin: '0px 0px -18% 0px' }}
      >
        {/* Masked image */}
        <motion.div
          style={!isMainAvatar ? { y: yRange } : {}}
          initial={isMainAvatar || isMobile ? { opacity: 0, y: '50%' } : {}}
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
            priority
          />
        </motion.div>
      </motion.div>
      {/* Image overlay */}
      {isMainAvatar && (
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
            priority
          />
        </motion.div>
      )}
    </div>
  );
};

export default HeroAvatar;
