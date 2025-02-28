import clsx from 'clsx';

type LabelProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
} & React.ComponentPropsWithoutRef<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

export function Label({ className, level = 1, ...props }: LabelProps) {
  let Element: `h${typeof level}` = `h${level}`;

  return (
    <Element
      {...props}
      className={clsx(
        'text-sm font-semibold uppercase tracking-wide text-sky-600 md:text-xs lg:text-base',
        className
      )}
    />
  );
}
