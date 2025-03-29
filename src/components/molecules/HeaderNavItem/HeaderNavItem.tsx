import clsx from 'clsx';

export interface HeaderNavItemProps {
  text: string;
  href: string;
  isActive?: boolean;
}

const HeaderNavItem = ({
  text,
  href,
  isActive = false,
}: HeaderNavItemProps) => (
  <a
    href={href}
    className={clsx(
      'group relative',
      'text-sm font-normal text-text-primary lg:text-lg',
      'px-3 py-6 md:px-2 lg:px-5 xl:px-6'
    )}
    aria-label={text}
  >
    <span
      className={clsx(
        'absolute bottom-px left-0 -mt-px h-[2px] w-full bg-white',
        'transform transition-all duration-300 ease-out-quart',
        'scale-x-0 group-hover:scale-x-100 group-hover:bg-button-hover',
        isActive && 'scale-x-100 !bg-button-hover'
      )}
    />
    <span
      className={clsx(
        'inline-block',
        'transform transition-all duration-300 ease-out-quart',
        'group-hover:translate-y-1 group-hover:text-button-hover',
        isActive && 'text-button-hover'
      )}
    >
      {text}
    </span>
  </a>
);

export default HeaderNavItem;
