import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';

export interface HeroAvatarProps {
  image: ImageProps;
  sizeClass?: string;
  className?: string;
}

const HeroAvatar = ({
  image,
  sizeClass = 'h-[13.125rem] w-[13.125rem]',
  className = '',
}: HeroAvatarProps) => (
  <div className={clsx('relative', sizeClass, className)}>
    <div
      className={clsx(
        'relative overflow-hidden rounded-full',
        'bg-gray-200 pt-3 dark:bg-gray-700',
        sizeClass
      )}
    >
      {/* Masked image */}
      <Image
        className="h-auto w-full"
        src={image.src}
        alt={image.alt}
        layout="responsive"
        width={image.width ?? 600}
        height={image.height ?? 750}
      />
    </div>
    {/* Image overlay */}
    <div className="absolute left-0 top-0 h-1/2 w-full overflow-hidden pt-3">
      <Image
        className="left-0 top-0 h-auto w-full"
        src={image.src}
        alt={image.alt}
        layout="responsive"
        width={image.width ?? 600}
        height={image.height ?? 750}
      />
    </div>
  </div>
);

export default HeroAvatar;
