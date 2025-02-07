import clsx from 'clsx';

export interface HeaderNavItemProps {
  text: string;
  href: string;
}

const HeaderNavItem = ({ text, href }: HeaderNavItemProps) => (
  <a
    href={href}
    className={clsx(
      'group relative',
      'text-primary text-sm font-normal lg:text-lg',
      'px-3 py-6 lg:px-5 xl:px-6'
    )}
    aria-label={text}
  >
    <span
      className={clsx(
        'absolute bottom-px left-0 -mt-px h-[2px] w-full bg-white',
        'transform transition-all duration-300 ease-out-quart',
        'scale-x-0 group-hover:scale-x-100 group-hover:bg-sky-600'
      )}
    />
    <span
      className={clsx(
        'inline-block',
        'transform transition-all duration-300 ease-out-quart',
        'group-hover:translate-y-2 group-hover:text-sky-600'
      )}
    >
      {text}
    </span>
  </a>
);

export default HeaderNavItem;
