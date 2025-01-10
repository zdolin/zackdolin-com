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
      'mb-2 mt-5 flex flex-col md:mt-3 lg:my-4',
      !isVertical ? 'md:flex-row' : ''
    )}
  >
    <Heading className="w-full text-center md:w-3/5 md:text-left">
      {heading}
    </Heading>
    <p
      className={clsx(
        'text-secondary w-full text-center text-sm md:w-3/5 md:text-left lg:text-lg',
        isVertical ? 'mt-5' : ''
      )}
    >
      {body}
    </p>
  </div>
);

export default HeadingWithBody;
