import ArrowCircle from '@/components/atoms/ArrowCircle';
import Heading from '@/components/atoms/Heading';
import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';

export interface ProjectCardProps {
  thumb: ImageProps;
  heading: string;
  description: string;
  onClick?: () => void;
}

const CardProject = ({
  thumb,
  heading,
  description,
  onClick = () => {},
}: ProjectCardProps) => (
  <button
    type="button"
    className={clsx(
      'group bg-white p-6 dark:bg-gray-900',
      'flex flex-col items-center rounded-2xl shadow-custom-2 md:p-8'
    )}
    onClick={onClick}
  >
    <div className="relative flex items-center justify-center overflow-hidden">
      <Image
        className={clsx(
          'h-auto w-full rounded-2xl',
          'tranform transition-opacity duration-300 ease-out-quint',
          'group-hover:opacity-50'
        )}
        src={thumb.src}
        alt={thumb.alt}
        width={720}
        height={480}
      />
      <ArrowCircle
        className={clsx(
          '!absolute',
          'translate-y-[300px] opacity-0 transition-all duration-300 ease-out-quint',
          'group-hover:translate-y-0 group-hover:opacity-100'
        )}
      />
    </div>
    <Heading
      className="text-primary pb-3 pt-6 !text-2xl md:pb-2 md:text-base lg:pb-4 lg:pt-8 lg:text-2xl"
      level={2}
    >
      {heading}
    </Heading>
    <p className="text-secondary text-center text-sm md:text-xs lg:text-lg">
      {description}
    </p>
  </button>
);

export default CardProject;
