import { cva } from 'class-variance-authority';
import clsx from 'clsx';

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
} & React.HTMLAttributes<HTMLHeadingElement>;

const headingStyles = cva('text-primary font-semibold tracking-wide', {
  variants: {
    level: {
      1: 'text-3xl md:text-2xl lg:text-4xl xl:text-5xl lg:leading-[3rem] xl:!leading-[3.2rem]',
      2: 'text-lg',
    },
  },
  defaultVariants: {
    level: 1,
  },
});

export function Heading({ className, level = 1, ...props }: HeadingProps) {
  const safeLevel = (level >= 1 && level <= 6 ? level : 1) as 1 | 2; // Default to level 1 for unsupported levels
  const Element = `h${safeLevel}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  return (
    <Element
      {...props}
      className={clsx(headingStyles({ level: safeLevel }), className)}
    />
  );
}
