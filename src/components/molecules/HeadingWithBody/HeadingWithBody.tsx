import Heading from '@/components/atoms/Heading';
import clsx from 'clsx';

export interface HeadingWithBodyProps {
  heading: string;
  body: string;
  isVertical?: boolean;
}

const HeadingWithBody = ({
  heading,
  body,
  isVertical = false,
}: HeadingWithBodyProps) => (
  <div
    className={clsx(
      'my-2 flex flex-col lg:my-3',
      !isVertical ? 'md:flex-row' : ''
    )}
  >
    <Heading className="w-full text-center md:w-3/5 md:text-left">
      {heading}
    </Heading>
    <p
      className={clsx(
        'mt-2 w-full text-center text-sm text-neutral-500 dark:text-gray-500 md:w-3/5 md:text-left lg:text-lg',
        isVertical ? 'md:mt-2' : 'md:mt-0'
      )}
    >
      {body}
    </p>
  </div>
);

export default HeadingWithBody;
