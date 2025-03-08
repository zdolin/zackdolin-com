'use client';

import { PortfolioItemType } from '@/types/component';
import Image from 'next/image';

export interface ProjectDetailProps {
  project: PortfolioItemType;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <div>
      <Image
        src={project.image.src}
        alt={project.image.alt}
        className="mb-4 h-auto w-full"
        width={0}
        height={0}
        sizes="100vw"
      />
      <p className="mb-2">{project.description}</p>
      <p className="mb-2">Client: {project.client}</p>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        Visit
      </a>
    </div>
  );
};

export default ProjectDetail;
