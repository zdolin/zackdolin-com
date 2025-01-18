import Heading from '@/components/atoms/Heading';
import Image from 'next/image';

export interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  heading: string;
  description: string;
}

const CardProject = ({
  imageSrc,
  imageAlt,
  heading,
  description,
}: ProjectCardProps) => (
  <div className="shadow-custom flex flex-col items-center rounded-2xl p-6 md:p-8">
    <Image
      className="h-auto w-full rounded-2xl"
      src={imageSrc}
      alt={imageAlt}
      layout="responsive"
      width={3}
      height={2}
    />
    <Heading
      className="text-primary pb-3 pt-6 text-2xl md:pb-2 md:text-base lg:pb-4 lg:pt-8 lg:text-2xl"
      level={2}
    >
      {heading}
    </Heading>
    <p className="text-secondary text-sm md:text-xs lg:text-lg">
      {description}
    </p>
  </div>
);

export default CardProject;
