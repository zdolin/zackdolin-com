import Icon from '@/components/atoms/Icon';
import clsx from 'clsx';

export interface ArrowCircleProps {
  className?: string;
}

const ArrowCircle = ({ className = '' }: ArrowCircleProps) => (
  <div
    className={clsx(
      'relative flex rounded-full bg-sky-600',
      'flex items-center justify-center',
      'h-12 w-12 lg:h-[3.75rem] lg:w-[3.75rem]',
      className
    )}
  >
    <div
      className={clsx(
        'h-3/4 w-3/4',
        'flex items-center justify-center',
        'rounded-full bg-yellow-400'
      )}
    >
      <Icon type="arrowUpRight" className="fill-sky-600" />
    </div>
  </div>
);

export default ArrowCircle;
