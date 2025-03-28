'use client';

import ButtonArrow from '@/components/atoms/ButtonArrow';
import Spinner from '@/components/atoms/Spinner';
import { Button as HeadlessButton } from '@headlessui/react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

const buttonVariants = cva(
  'border-none inline-flex items-center justify-center font-semibold uppercase rounded-full transition focus:outline-none focus:ring-2 focus:ring-offset-2 tracking-wider',
  {
    variants: {
      intent: {
        primary:
          'bg-button-default text-white md:hover:bg-button-hover active:bg-button-active focus:ring-button-hover',
        secondary: 'bg-surface-muted text-white',
      },
      size: {
        default: 'px-5 py-3 lg:px-6 text-base sm:text-sm lg:text-base',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean; // Allows rendering as a different element if needed
  className?: string;
  sizeClassName?: string;
  hideArrow?: boolean;
  animationDelay?: number;
  suppressIntroAnimation?: boolean;
  suppressRolloverAnimation?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  intent = 'primary',
  size,
  asChild = false,
  className = '',
  sizeClassName = '',
  hideArrow = false,
  animationDelay = 0,
  suppressIntroAnimation = false,
  suppressRolloverAnimation = false,
  loading = false,
  ...props
}) => {
  const Component = asChild ? 'span' : 'button';

  return (
    <motion.span
      className={clsx('inline-block', sizeClassName)}
      initial={
        !suppressIntroAnimation
          ? { opacity: 0, scale: 1.5 }
          : { opacity: 1, scale: 1 }
      }
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        ease: 'backOut',
        delay: animationDelay,
      }}
      viewport={{ once: true, margin: '0px 0px -18% 0px' }}
    >
      <HeadlessButton
        as={Component}
        className={clsx(
          buttonVariants({ intent, size }),
          className,
          'group w-full overflow-hidden',
          !suppressRolloverAnimation &&
            'transform transition-transform duration-300 ease-out-quart md:hover:scale-x-[0.93]'
        )}
        {...props}
      >
        <span
          className={clsx(
            'transform transition-transform duration-500 ease-out-back',
            !suppressRolloverAnimation && 'md:group-hover:-translate-y-16'
          )}
        >
          {children}
        </span>
        <span
          aria-hidden="true"
          className={clsx(
            'absolute translate-y-16 transform transition-transform duration-500 ease-out-back',
            !suppressRolloverAnimation && 'md:group-hover:translate-y-0',
            !hideArrow && '-translate-x-5'
          )}
        >
          {children}
        </span>{' '}
        {!hideArrow ? (
          loading ? (
            <Spinner className="ml-4" />
          ) : (
            <ButtonArrow
              className={clsx(
                'ml-4',
                'transform transition-transform duration-500 ease-out-back group-hover:scale-[1.8] md:group-hover:translate-x-1'
              )}
            />
          )
        ) : null}
      </HeadlessButton>
    </motion.span>
  );
};
export default Button;
