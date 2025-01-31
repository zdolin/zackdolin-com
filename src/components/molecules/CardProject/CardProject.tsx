import Heading from '@/components/atoms/Heading';
import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';

export interface ProjectCardProps {
  image: ImageProps;
  heading: string;
  description: string;
}

const CardProject = ({ image, heading, description }: ProjectCardProps) => (
  <div
    className={clsx(
      'bg-white p-6 dark:bg-gray-900',
      'flex flex-col items-center rounded-2xl shadow-custom-2 md:p-8'
    )}
  >
    <Image
      className="h-auto w-full rounded-2xl"
      src={image.src}
      alt={image.alt}
      layout="responsive"
      width={3}
      height={2}
    />
    <Heading
      className="text-primary pb-3 pt-6 !text-2xl md:pb-2 md:text-base lg:pb-4 lg:pt-8 lg:text-2xl"
      level={2}
    >
      {heading}
    </Heading>
    <p className="text-secondary text-center text-sm md:text-xs lg:text-lg">
      {description}
    </p>
  </div>
);

export default CardProject;
