'use client';

import ButtonArrow from '@/components/atoms/ButtonArrow';
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
          'bg-button-default text-white hover:bg-button-hover active:bg-button-active focus:ring-button-hover',
      },
      size: {
        default: 'px-5 py-3 lg:px-6 text-sm lg:text-base',
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
  hideArrow?: boolean;
  animationDelay?: number;
  suppressAnimation?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  intent = 'primary',
  size,
  asChild = false,
  className = '',
  hideArrow = false,
  animationDelay = 0,
  suppressAnimation = false,
  ...props
}) => {
  const Component = asChild ? 'span' : 'button';

  return (
    <motion.span
      className="inline-block"
      initial={
        !hideArrow && !suppressAnimation
          ? { opacity: 0, scale: 1.5 }
          : { opacity: 1, scale: 1 }
      }
      whileInView={
        !hideArrow && !suppressAnimation
          ? { opacity: 1, scale: 1 }
          : { opacity: 1, scale: 1 }
      }
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
          'group overflow-hidden',
          !hideArrow &&
            'transform transition-transform duration-300 ease-out-quart hover:scale-x-[0.93]'
        )}
        {...props}
      >
        <span
          className={clsx(
            'transform transition-transform duration-500 ease-out-back',
            !hideArrow && 'group-hover:-translate-y-16'
          )}
        >
          {children}
        </span>
        <span
          aria-hidden="true"
          className={clsx(
            'absolute -translate-x-5 translate-y-16 transform transition-transform duration-500 ease-out-back',
            !hideArrow && 'group-hover:translate-y-0'
          )}
        >
          {children}
        </span>{' '}
        {!hideArrow ? (
          <ButtonArrow
            className={clsx(
              'ml-4',
              'transform transition-transform duration-500 ease-out-back group-hover:translate-x-1 group-hover:scale-[1.8]'
            )}
          />
        ) : null}
      </HeadlessButton>
    </motion.span>
  );
};
export default Button;
