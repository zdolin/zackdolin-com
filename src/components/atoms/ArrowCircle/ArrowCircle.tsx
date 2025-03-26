import Icon from '@/components/atoms/Icon';
import clsx from 'clsx';

export interface ArrowCircleProps {
  className?: string;
}

const ArrowCircle = ({ className = '' }: ArrowCircleProps) => (
  <div
    className={clsx(
      'bg-surface-highlight relative flex rounded-full',
      'flex items-center justify-center',
      'h-12 w-12 lg:h-[3.75rem] lg:w-[3.75rem]',
      className
    )}
  >
    <div
      className={clsx(
        'h-3/4 w-3/4',
        'flex items-center justify-center',
        'rounded-full bg-surface-accent'
      )}
    >
      <Icon type="arrowUpRight" className="fill-surface-highlight" />
    </div>
  </div>
);

export default ArrowCircle;
