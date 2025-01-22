import clsx from 'clsx';
import Image from 'next/image';

export interface SidebarAvatarProps {
  imageSrc: string;
  imageAlt: string;
}

const SidebarAvatar = ({ imageSrc, imageAlt }: SidebarAvatarProps) => (
  <div className="relative h-[13.125rem] w-[13.125rem]">
    <div
      className={clsx(
        'relative h-[13.125rem] w-[13.125rem] overflow-hidden rounded-full',
        'bg-gray-200 pt-3 dark:bg-gray-700'
      )}
    >
      {/* Masked image */}
      <Image
        className="h-auto w-full"
        src={imageSrc}
        alt={imageAlt}
        layout="responsive"
        width={600}
        height={750}
      />
    </div>
    {/* Image overlay */}
    <div className="absolute left-0 top-0 h-1/2 w-full overflow-hidden pt-3">
      <Image
        className="left-0 top-0 h-auto w-full"
        src={imageSrc}
        alt={imageAlt}
        layout="responsive"
        width={600}
        height={750}
      />
    </div>
  </div>
);

export default SidebarAvatar;
