import * as Headless from '@headlessui/react';
import clsx from 'clsx';
import type React from 'react';

export function CheckboxGroup({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      data-slot="control"
      {...props}
      className={clsx(
        className,
        // Basic groups
        'space-y-3',
        // With descriptions
        'has-[[data-slot=description]]:space-y-6 [&_[data-slot=label]]:has-[[data-slot=description]]:font-medium'
      )}
    />
  );
}

export function CheckboxField({
  className,
  ...props
}: { className?: string } & Omit<Headless.FieldProps, 'as' | 'className'>) {
  return (
    <Headless.Field
      data-slot="field"
      {...props}
      className={clsx(
        className,
        // Base layout
        'grid grid-cols-[1.125rem_1fr] items-center gap-x-4 gap-y-1 sm:grid-cols-[1rem_1fr]',
        // Control layout
        '[&>[data-slot=control]]:col-start-1 [&>[data-slot=control]]:row-start-1 [&>[data-slot=control]]:justify-self-center',
        // Label layout
        '[&>[data-slot=label]]:col-start-2 [&>[data-slot=label]]:row-start-1 [&>[data-slot=label]]:justify-self-start',
        // Description layout
        '[&>[data-slot=description]]:col-start-2 [&>[data-slot=description]]:row-start-2',
        // With description
        '[&_[data-slot=label]]:has-[[data-slot=description]]:font-medium'
      )}
    />
  );
}

const base = [
  // Basic layout
  'relative isolate flex size-6 items-center justify-center rounded-[0.3125rem]',
  // Background color + shadow applied to inset pseudo element
  'before:absolute before:inset-0 before:-z-10 before:rounded-[calc(0.3125rem-1px)] before:bg-white before:shadow',
  // Background color when checked
  'before:group-data-[checked]:bg-primary',
  // Background color is moved to control and shadow is removed in dark mode
  'dark:before:hidden',
  // Background color applied to control in dark mode
  'dark:bg-white/5 dark:group-data-[checked]:bg-primary',
  // Border
  'border-2 border-zinc-950/25 group-data-[checked]:border-transparent group-data-[checked]:group-data-[hover]:border-transparent group-data-[hover]:border-zinc-950/30',
  'dark:border-white/15 dark:group-data-[checked]:border-white/5 dark:group-data-[checked]:group-data-[hover]:border-white/5 dark:group-data-[hover]:border-white/30',
  // Focus ring
  'group-data-[focus]:outline group-data-[focus]:outline-2 group-data-[focus]:outline-offset-2 group-data-[focus]:outline-primary',
  // Disabled state
  'group-data-[disabled]:opacity-50',
  'group-data-[disabled]:border-zinc-950/25 group-data-[disabled]:bg-zinc-950/5',
  'dark:group-data-[disabled]:border-white/20 dark:group-data-[disabled]:bg-white/[2.5%]',
];

export function Checkbox({
  className,
  ...props
}: {
  className?: string;
} & Omit<Headless.CheckboxProps, 'as' | 'className'>) {
  return (
    <Headless.Checkbox
      {...props}
      className={clsx('group cursor-pointer', base, className)}
    >
      <span className="sr-only">Checkbox</span>
      <svg
        className="size-5 stroke-white opacity-0 transition group-data-[checked]:opacity-100"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          d="M11.5346 3.5346L5.5346 9.5346L2.46539 6.46539"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Headless.Checkbox>
  );
}

export default Checkbox;
