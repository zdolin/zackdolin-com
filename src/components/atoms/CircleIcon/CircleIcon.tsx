import Icon, { iconMap } from '@/components/atoms/Icon';
import clsx from 'clsx';

export interface CircleIconProps {
  type: keyof typeof iconMap;
  className?: string;
  iconClassName?: string;
  fillClass?: string;
  iconFillClass?: string;
}

const CircleIcon = ({
  type,
  className = 'w-6 h-6 lg:w-[1.875rem] lg:h-[1.875rem] p-1 lg:p-[0.438rem]',
  iconClassName = '',
  fillClass = 'bg-sky-600',
  iconFillClass = 'fill-white',
}: CircleIconProps) => (
  <div className={clsx(className, 'flex items-center justify-center rounded-full', fillClass)}>
    <Icon type={type} className={clsx(iconClassName, iconFillClass)} />
  </div>
);

export default CircleIcon;
