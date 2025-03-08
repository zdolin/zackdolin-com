'use client';

import { PortfolioItemType } from '@/types/component';
import Image, { ImageProps } from 'next/image';

export interface ProjectDetailProps {
  project: PortfolioItemType;
}

interface RenderImageProps {
  image: ImageProps;
}

const RenderImage = ({ image }: RenderImageProps) => (
  <Image
    src={image.src}
    alt={image.alt}
    className="text-primary mb-5 h-auto w-full sm:mb-6"
    width={0}
    height={0}
    sizes="100vw"
  />
);

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <div>
      {project.url ? (
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <RenderImage image={project.image} />
        </a>
      ) : (
        <RenderImage image={project.image} />
      )}
      <p className="text-primary mb-2">{project.description}</p>
      {project.client && (
        <p className="text-primary mb-2">Client: {project.client}</p>
      )}
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary text-blue-500 underline"
        >
          Link
        </a>
      )}
    </div>
  );
};

export default ProjectDetail;
