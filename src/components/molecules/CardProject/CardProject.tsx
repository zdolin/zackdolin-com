import ArrowCircle from '@/components/atoms/ArrowCircle';
import Heading from '@/components/atoms/Heading';
import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';

export interface ProjectCardProps {
  thumb: ImageProps;
  heading: string;
  blurb: string;
  onClick?: () => void;
}

const CardProject = ({
  thumb,
  heading,
  blurb,
  onClick = () => {},
}: ProjectCardProps) => (
  <button
    type="button"
    className={clsx(
      'group bg-card-default',
      'flex flex-col items-center rounded-2xl px-6 pb-8 pt-6 shadow-custom-2 md:p-8',
      'transition-colors duration-500 ease-out-quint hover:bg-card-hover'
    )}
    onClick={onClick}
  >
    <div className="relative flex items-center justify-center">
      <div
        className={clsx(
          'relative overflow-hidden rounded-2xl',
          'scale-100 transition-transform duration-500 ease-out-quint group-hover:scale-105'
        )}
      >
        <Image
          className={clsx(
            'h-auto w-full',
            'scale-110 transition-transform duration-500 ease-out-quint group-hover:scale-100'
          )}
          src={thumb.src}
          alt={thumb.alt}
          width={720}
          height={480}
        />
      </div>
      <div className="absolute flex h-full w-full items-center justify-center overflow-hidden rounded-2xl">
        <ArrowCircle
          className={clsx(
            '!absolute',
            'translate-y-48 opacity-0 transition-all duration-300 ease-out-quint',
            'group-hover:translate-y-0 group-hover:opacity-100'
          )}
        />
      </div>
    </div>
    <Heading
      className={clsx(
        'pb-3 pt-6 !text-2xl text-text-primary md:pb-2 md:text-base lg:pt-8 lg:text-2xl'
      )}
      level={2}
    >
      {heading}
    </Heading>
    <p
      className={clsx(
        'text-center text-sm text-text-secondary md:text-xs lg:text-lg',
        'duration-500 ease-out-quint group-hover:text-text-primary'
      )}
    >
      {blurb}
    </p>
  </button>
);

export default CardProject;
