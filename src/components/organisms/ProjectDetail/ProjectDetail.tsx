'use client';

import Spinner from '@/components/atoms/Spinner';
import { PortfolioItemType } from '@/types/component';
import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import Carousel from '../Carousel';

export interface ProjectDetailProps {
  project: PortfolioItemType;
}

interface RenderImageProps {
  image: ImageProps;
}

const RenderImage = ({ image }: RenderImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Spinner className="h-12 w-12" />
        </div>
      )}
      <Image
        src={image.src}
        alt={image.alt}
        className={clsx(
          'h-auto w-full text-text-primary',
          isLoading ? 'opacity-0' : 'opacity-100'
        )}
        width={1440}
        height={960}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
};

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <div>
      {project.images.length > 1 ? (
        <Carousel centeredArrows showDots={false}>
          {project.images.map((image) => (
            <div
              key={image.alt}
              className={clsx(
                'embla__slide mb-6 flex-[0_0_100%]',
                'lg:flex-[0_0_calc(100%-96px)]'
              )}
            >
              {project.url ? (
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <RenderImage image={image} />
                </a>
              ) : (
                <RenderImage image={image} />
              )}
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="mb-6">
          <RenderImage image={project.images[0]} />
        </div>
      )}
      <h3
        className={clsx(
          'mb-2 font-medium tracking-wide text-text-primary md:font-semibold',
          'text-base md:text-lg lg:text-xl'
        )}
      >
        {project.heading}
      </h3>
      <p className="mb-3 w-11/12 text-base text-text-secondary md:text-sm lg:text-lg">
        {project.description}
      </p>
      {project.client && (
        <p className="mb-2 text-text-primary">Client: {project.client}</p>
      )}
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-primary underline"
        >
          Link
        </a>
      )}
    </div>
  );
};

export default ProjectDetail;
