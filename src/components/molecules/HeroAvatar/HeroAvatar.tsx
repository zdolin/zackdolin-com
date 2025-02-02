import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';

export interface HeroAvatarProps {
  image: ImageProps;
  sizeClass?: string;
  className?: string;
  circleClass?: string;
  imageClass?: string;
}

const HeroAvatar = ({
  image,
  sizeClass = 'h-[13.125rem] w-[13.125rem]',
  circleClass = 'bg-gray-200 dark:bg-gray-700',
  imageClass = '',
  className = '',
}: HeroAvatarProps) => (
  <div className={clsx('relative', sizeClass, className)}>
    <div
      className={clsx(
        'relative overflow-hidden rounded-full pt-3',
        circleClass,
        sizeClass
      )}
    >
      {/* Masked image */}
      <Image
        className={clsx('h-auto w-full', imageClass)}
        src={image.src}
        alt={image.alt}
        width={image.width ?? 600}
        height={image.height ?? 750}
      />
    </div>
    {/* Image overlay */}
    <div
      className={clsx(
        'absolute left-0 top-0 h-1/2 w-full overflow-hidden pt-3',
        imageClass
      )}
    >
      <Image
        className="left-0 top-0 h-auto w-full"
        src={image.src}
        alt={image.alt}
        width={image.width ?? 600}
        height={image.height ?? 750}
      />
    </div>
  </div>
);

export default HeroAvatar;
