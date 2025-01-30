import Heading from '@/components/atoms/Heading';
import clsx from 'clsx';

export interface HeadingWithBodyProps {
  heading: string;
  body: string;
  isVertical?: boolean;
  className?: string;
}

const HeadingWithBody = ({
  heading,
  body,
  isVertical = false,
  className = '',
}: HeadingWithBodyProps) => (
  <div
    className={clsx(
      'mb-2 mt-5 flex flex-col md:mt-3 lg:my-4',
      !isVertical ? 'md:flex-row' : 'md:w-1/2',
      className
    )}
  >
    <Heading
      className={clsx(
        'w-full text-center md:text-left',
        !isVertical && 'md:w-3/5'
      )}
    >
      {heading}
    </Heading>
    <p
      className={clsx(
        'text-secondary w-full text-center text-sm md:text-left lg:text-lg',
        isVertical ? 'mt-5' : 'mt-5 md:mt-0 md:w-3/5 md:pl-6'
      )}
    >
      {body}
    </p>
  </div>
);

export default HeadingWithBody;
