import { Button as HeadlessButton } from '@headlessui/react';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-semibold uppercase rounded-full transition focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      intent: {
        primary:
          'bg-sky-600 text-white hover:bg-sky-500 active:bg-sky-700 focus:ring-sky-500',
        secondary:
          'bg-gray-100 text-gray-800 hover:bg-gray-200 active:bg-gray-300 focus:ring-gray-400',
      },
      size: {
        default: 'py-2 px-6 lg:py-3 lg:px-8 text-sm lg:text-base',
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
}

const Button: React.FC<ButtonProps> = ({
  children,
  intent,
  size,
  asChild = false,
  ...props
}) => {
  const Component = asChild ? 'span' : 'button';

  return (
    <HeadlessButton
      as={Component}
      className={buttonVariants({ intent, size })}
      {...props}
    >
      {children}
    </HeadlessButton>
  );
};
export default Button;
