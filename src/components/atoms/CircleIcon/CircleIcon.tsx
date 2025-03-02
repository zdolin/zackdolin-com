import Icon, { iconMap } from '@/components/atoms/Icon';
import clsx from 'clsx';

export interface CircleIconProps {
  type: keyof typeof iconMap;
  className?: string;
  iconClassName?: string;
  bgClass?: string;
  iconFillClass?: string;
}

const CircleIcon = ({
  type,
  className = 'w-6 h-6 lg:w-[1.875rem] lg:h-[1.875rem] p-1.5 lg:p-[0.438rem]',
  iconClassName = '',
  bgClass = 'bg-sky-600',
  iconFillClass = 'fill-white',
}: CircleIconProps) => (
  <div
    className={clsx(
      'relative',
      'flex items-center justify-center overflow-hidden rounded-full',
      className,
      bgClass
    )}
  >
    <Icon
      type={type}
      className={clsx(
        iconClassName,
        iconFillClass,
        'transition-transform group-hover:-translate-y-[160%]',
        'duration-500 ease-out-quint'
      )}
    />

    <span
      className={clsx(
        'absolute translate-y-[160%]',
        'transition-transform group-hover:translate-y-0',
        'duration-500 ease-out-quint'
      )}
    >
      <Icon type={type} className={clsx(iconClassName, iconFillClass)} />
    </span>
  </div>
);

export default CircleIcon;
